import axios from "axios"

export const getBookList = async () => {
  const books = await axios.get("http://127.0.0.1:3000/book");
  return books.data.data;
}

export const getBookDetail = async (id) => {
  const book = await axios.get(`http://127.0.0.1:3000/book/${id}`);
  // console.log(book.data);
  return book.data.data;
}

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:3000/book/${id}`);
    return response.data
  } catch (e) {
    return e.response
  }
}