/* eslint-disable no-unused-vars */
import Navbar from "../../Components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getBookDetail } from "../../api";

const BookEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publication_date: "",
    description: "",
  });
  useEffect(() => {
    getBookDetail(id).then((result) => {
      setBook(result);
    });
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title: book.title,
      author: book.author,
      publication_date: book.publication_date,
      description: book.description,
    };

    try {
      const response = await axios.put(
        `http://127.0.0.1:3000/book/${id}`,
        bookData
      );
      navigate("/book");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Edit Buku</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Judul Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Judul Buku"
              required
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Penulis Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Penulis Buku"
              required
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tanggal Rilis</label>
            <input
              type="date"
              className="form-control"
              placeholder="Tanggal Rilis"
              required
              value={book.publication_date}
              onChange={(e) => setBook({ ...book, publication_date: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sinopsis</label>
            <textarea
              className="form-control"
              rows="3"
              required
              value={book.description}
              onChange={(e) => setBook({ ...book, description: e.target.value })}
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Tambah Buku
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookEdit;
