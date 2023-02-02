import React from "react";
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
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Testimonios</a>
          </li>
          <li>
            <a href="#">Cursos</a>
          </li>
          <li>
            <a href="#">Recursos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
