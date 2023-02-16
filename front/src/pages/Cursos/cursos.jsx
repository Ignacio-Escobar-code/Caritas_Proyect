import React from "react";
import "./cursos.css";

const Cursos = () => {
  return (
    <>
      <div className="curso-Section1">
        <span>APRENDE CON</span>
        <h1>Cursos de marketing</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>SOLICITA MAS INFO</button>
      </div>
      <div className="curso-Section2">
      <div>
        <img src="../tilde.png" alt="" />
        <h4>Emprender
           con exito</h4>
           <button>MAS INFO</button>
      </div>
      <div>
<img src="../tilde.png" alt="" />
        <h4>Instagram
          para marcas</h4>
          <button>MAS INFO</button>
      </div>
      <div>
        <img src="../tilde.png" alt="" />
        <h4>Community
           manager</h4>
           <button>MAS INFO</button>
      </div>
      </div>
    </>
  );
};

export default Cursos;
