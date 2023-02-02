import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="logo.png" alt="Logo" />
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
    </nav>
  );
};

export default Navbar;
