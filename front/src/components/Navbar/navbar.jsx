import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {" "}
        <img src="logo.png" alt="Logo" />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Servicios</Link>
          </li>
          <li>
            <Link to="/">Testimonios</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/recursos">Recursos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto✉️</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
