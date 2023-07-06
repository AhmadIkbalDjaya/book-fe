import Navbar from "../../Components/Navbar";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookDetail } from "../../api";

const BookShow = () => {
  const {id} = useParams();

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
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <p>Rilis: {book.publication_date}</p>
        <p>Sinopsis</p>
        <p>{book.description}</p>
        <button className="btn btn-primary">
          <RouterLink to={"/book"} className="text-white text-decoration-none">Kembali</RouterLink>
        </button>
      </div>
    </>
  );
};

export default BookShow;
