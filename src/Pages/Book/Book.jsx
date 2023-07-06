/* eslint-disable no-unused-vars */
import "./book.css";
import Navbar from "../../Components/Navbar";
import { getBookList, deleteBook } from "../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate()

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData()
    // getBookList().then((result) => {
    //   setBooks(result);
    // });
  }, []);

  const getData = async () => {
    try {
      const response = await getBookList();
      setBooks(response); 
    } catch (e) {
      console.log(e);
    }
  }

  const editPage = (id) => {
    navigate(`/book/${id}/edit`);
  }

  const showPage = (id) => {
    navigate(`/book/${id}`);
  }

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      getData()
    } catch (e) {
      console.error(`Error deleting data: ${e}`)
    }
  }

  const BookList = () => {
    return books.map((book, i) => {
      return (
        <tr key={i}>
          <td scope="row">{i+1}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.publication_date}</td>
          <td className="d-flex justify-content-around">
            <button onClick={() => {showPage(book.id)}} type="button" className="btn btn-primary btn-sm">
              <i className="bi bi-eye"></i>
            </button>
            <button onClick={() => {editPage(book.id)}} type="button" className="btn btn-warning btn-sm">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button onClick={() => {handleDeleteBook(book.id)}} type="button" className="btn btn-danger btn-sm">
              <i className="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Judul</th>
                <th scope="col">Penulis</th>
                <th scope="col">Rilis</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <BookList />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Book;
