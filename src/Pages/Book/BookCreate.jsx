/* eslint-disable no-unused-vars */
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication_date, setPublication_date] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title: title,
      author: author,
      publication_date: publication_date,
      description: description,
    };

    try {
      const response = await axios.post("http://127.0.0.1:3000/book", bookData);
      navigate("/book");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Tambah Buku</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Judul Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Judul Buku"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Penulis Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Penulis Buku"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tanggal Rilis</label>
            <input
              type="date"
              className="form-control"
              placeholder="Tanggal Rilis"
              required
              value={publication_date}
              onChange={(e) => setPublication_date(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sinopsis</label>
            <textarea
              className="form-control"
              rows="3"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

export default BookCreate;
