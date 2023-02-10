import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homeSection1">
        {/* <h1>¿Buscas una agencia de Marketing?</h1> */}
        <h1>
          <img src="homeSection1.png" alt="Titulo con foto" />
        </h1>
        <button type="submit">SOLICITA MAS INFO</button>
      </div>
      <div className="homeSection2">
        <div className="contenidoTextual">
          <h2>La fórmula para triunfar en el marqueting digital</h2>
          <p>
            Se basa en entender a tus clientes potenciales en el formato
            correcto y el momento adecuado
          </p>
        </div>
        <div className="imagenesDecoLaptop">
          <img
            src="homeSection2Laptop.png"
            alt="Imagen ilustrativa laptop"
            className="laptopImg"
          />
          <img
            src="CirculoDeCirculos.png"
            alt="Fondo Decorativo"
            className="circuloDeCirculos"
          />
        </div>
      </div>

      {/* aca van tarjetas */}
      <div>
        <h5>Auditoria Digital</h5>
        <button>VER MAS</button>
      </div>
      <div>
        <h5>Asesoria y Consultoria</h5>
        <button>VER MAS</button>
      </div>
      <div>
        <h5>Identidad Visual</h5>
        <button>VER MAS</button>
      </div>
      <div>
        <h5>Redes Sociales</h5>
        <button>VER MAS</button>
      </div>
      <div>
        <h5>Publicidad Online</h5>
        <button>VER MAS</button>
      </div>
      <div>
        <h5>Diseño</h5>
        <button>VER MAS</button>
      </div>
    </>
  );
};

export default Home;
