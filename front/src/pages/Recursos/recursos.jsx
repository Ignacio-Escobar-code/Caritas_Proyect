import React from "react";
import "./recursos.css";

const Recursos = () => {
  return (
    <>
      <div className="rec-section1">
        <h1>Recursos</h1>
        <p>Si sos emprendedor o pyme te ayudamos con recursos gratuitos.</p>
      </div>
      <div className="rec-section2">
        <div className="rec-imagen">
          <img src="./icon-recursos/flechongo.png" alt="" />
        </div>
        <div className="section2-container">
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>Calendario de contenido</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>Armado de cliente ideal</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>4P</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>Benchmark</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>Canvas</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>FODA</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
          <div>
            <img src="./icon-recursos/none-imagen.png" alt="" />
            <h4>Objetivos Smart</h4>
            <button>SOLICITAR RECURSO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recursos;
