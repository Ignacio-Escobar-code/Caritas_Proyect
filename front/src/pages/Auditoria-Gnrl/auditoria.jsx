import React from "react";
import "./auditoria.css";

const Auditoria = () => {
  return (
    <>
      <div className="bloqueHead">
        <h3>AUDITORIA DE TU</h3>
        <h1>Ecosistema Digital</h1>
        <p>
          Una estrategia de marketing digital debe estar alineada a tus
          objetivos, estrategias pensando en donde se encuentra su publico
          objetivo.
        </p>
        <button type="submit">SOLICITA MAS INFO</button>
      </div>
      <div className="bloqueHead2">
        <div className="bloqueDeTexto">
          <h2>¿Qué incluye la auditoria?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            architecto ullam repudiandae dolorem debitis saepe, ad nemo? Numquam
            eveniet omnis ipsa sed doloribus voluptatem enim id ducimus! Illum,
            iste molestias?
          </p>
        </div>
        <div className="bloqueImagenes">
          <img
            src="Icon-bigLupa.png"
            alt="Imagen ilustrativa Lupa"
            className="lupaGrande"
          />
          <img
            src="CirculoDeCirculos.png"
            alt="Fondo Decorativo"
            className="circuloDeCirculos2"
          />
        </div>
      </div>
      <div className="cuadroDelMedio">
        <div>
          <h3>PROCESO DE TRABAJO</h3>
        </div>
      </div>
      <div className="contenidoDelMedio">
        <div>
          <img src="N°1Auditoria.png" alt="numero1" className="numerosG" />
          <img src="icon-atraccion.png" alt="atraccion" className="dibujosG" />
          <h3>Atraccion</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            dolores ducimus accusamus minus reprehenderit voluptatem,
            voluptatibus voluptatum quam,
          </p>
        </div>
        <hr />
        <div>
          <img src="N°2Auditoria.png" alt="numero2" className="numerosG" />
          <img
            src="icon-interaccion.png"
            alt="interaccion"
            className="dibujosG"
          />
          <h3>Interaccion</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            dolores ducimus accusamus minus reprehenderit voluptatem,
            voluptatibus voluptatum quam,
          </p>
        </div>
        <hr />
        <div>
          <img src="N°3Auditoria.png" alt="numero3" className="numerosG" />
          <img
            src="icon-conversion.png"
            alt="conversion"
            className="dibujosG"
          />
          <h3>Conversion</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            dolores ducimus accusamus minus reprehenderit voluptatem,
            voluptatibus voluptatum quam,
          </p>
        </div>
        <hr />
        <div>
          <img src="N°4Auditoria.png" alt="numero4" className="numerosG" />
          <img
            src="icon-fidelizacion.png"
            alt="fidelizacion"
            className="dibujosG"
          />
          <h3>Fidelizacion</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            dolores ducimus accusamus minus reprehenderit voluptatem,
            voluptatibus voluptatum quam,
          </p>
        </div>
      </div>
    </>
  );
};

export default Auditoria;
