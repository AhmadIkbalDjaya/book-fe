import { Link as RouterLink } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <RouterLink to="/">Library</RouterLink>
      </div>
      <ul className="nav-links">
        <li>
          <RouterLink to="/book"> Buku </RouterLink>
        </li>
        <li>
          <RouterLink to="/book/create"> Tambah </RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
