import React from "react";
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
            <a href="javascript:void(0)" class="dropbtn">
              Servicios
            </a>
            <div class="dropdown-content">
              <a href="/auditoria">Auditoria Digital</a>
              <a href="/identidad">Identidad Visual</a>
              <a href="/asesorias">Asesorias</a>
              <a href="/redes">Redes Sociales</a>
              <a href="/publicidad">Publicidad Online</a>
              <a href="diseño">Diseño</a>
            </div>
          </li>
          <li>
            <a href="/">Testimonios</a>
          </li>
          <li>
            <a href="/recursos">Recursos</a>
          </li>
          <li>
            <a href="/contacto">Contactanos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
