import React from "react";

const Home = () => {
  return (
    <>
      <div className="homeSection1">
        <h1>Buscas una agencia de Marketing?</h1>
        <button type="submit">SOLICITA MAS INFO</button>
      </div>
      <div className="homeSection2">
        <h2>La fórmula para triunfar en el marqueting digital</h2>
        <p>
          Se basa en entender a tus clientes potenciales en el formato correcto
          y el momento adecuado
        </p>
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
