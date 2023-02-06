import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {" "}
        <img src="Logo.png" alt=" Logo de Carites Marketing" />
      </div>
      <div>
        <ul>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Servicios</a>
            <div class="dropdown-content">
              <a href="#">Auditoria Digital</a>
              <a href="#">Identidad Visual</a>
              <a href="#">Asesorias</a>
              <a href="#">Redes Sociales</a>
              <a href="#">Publicidad Online</a>
              <a href="#">Diseño</a>
            </div>
          </li>
          <li><a href="#home">Testimonios</a></li>
          <li><a href="#news">Recursos</a></li>
          <li><a href="#news">Contactanos</a></li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
