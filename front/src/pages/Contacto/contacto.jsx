import React from "react";
import "./contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="cont-container">
        <h1>Marketing desde cero</h1>
        <h5>¿Querés potenciar tu emprendimiento o pyme?</h5>
      </div>
      <div className="cont-img-container">
        <img
          src="./img-contacto/Globo-carites.png"
          alt=""
          className="cont-globo-carites"
        />
        <img src="CirculoDeCirculos.png" alt="" className="cont-circulos" />
      </div>
    </>
  );
};

export default Contacto;
