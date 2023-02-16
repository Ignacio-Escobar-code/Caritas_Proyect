import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="hm-Section1">
        {/* <h1>¿Buscas una agencia de Marketing?</h1> */}
        <h1>
          <img src="homeSection1.png" alt="Titulo con foto" />
        </h1>
        <button type="submit">SOLICITA MAS INFO</button>
      </div>
      <div className="hm-Section2">
        <div className="hm-contenidoTextual">
          <h2>La fórmula para triunfar en el marqueting digital</h2>
          <p>
            Se basa en entender a tus clientes potenciales en el formato
            correcto y el momento adecuado
          </p>
        </div>
        <div className="hm-containterImgHome">
          <img
            src="homeSection2Laptop.png"
            alt="Imagen ilustrativa laptop"
            className="hm-laptopImg"
          />
          <img
            src="CirculoDeCirculos.png"
            alt="Fondo Decorativo"
            className="hm-circuloDeCirculos"
          />
        </div>
      </div>

      {/* aca van tarjetas */}
      <div className="hm-fatherTarjetas">
        <div className="hm-containerTarjetas">
          <div className="hm-tarjetasConBtn">
            <img src="icon-lupa.png" alt="Icono De la lupa" />
            <h5>Auditoria Digital</h5>
            <button>VER MAS</button>
          </div>
          <div className="hm-tarjetasConBtn">
            <img src="Icon-laptop-lampara.png" alt="Icono Notebook" />
            <h5>Asesoria y Consultoria</h5>
            <button>VER MAS</button>
          </div>
          <div className="hm-tarjetasConBtn">
            <img src="icon-identidadvisual.png" alt="Icono IV" />
            <h5>Identidad Visual</h5>
            <button>VER MAS</button>
          </div>
          <div className="hm-tarjetasConBtn">
            <img src="icon-redes.png" alt="Icono Redes" />
            <h5>Redes Sociales</h5>
            <button>VER MAS</button>
          </div>
          <div className="hm-tarjetasConBtn">
            <img
              src="icon-publicidadonline.png"
              alt="Icono publicidad online"
            />
            <h5>Publicidad Online</h5>
            <button>VER MAS</button>
          </div>
          <div className="hm-tarjetasConBtn">
            <img src="icon-design.png" alt="Icono de diseño" />
            <h5>Diseño</h5>
            <button>VER MAS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
