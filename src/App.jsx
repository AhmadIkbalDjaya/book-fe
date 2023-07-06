import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Book from "./Pages/Book/Book";
import BookCreate from "./Pages/Book/BookCreate";
import BookEdit from "./Pages/Book/BookEdit";
import BookShow from "./Pages/Book/BookShow";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/book/create" element={<BookCreate/>}></Route>
        <Route path="/book/:id/edit" element={<BookEdit/>}></Route>
        <Route path="/book/:id" element={<BookShow/>}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
