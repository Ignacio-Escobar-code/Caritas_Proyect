import React from "react";
import "./diseño.css";
const Diseño = () => {
  return (
    <>
      <div className="ds-Section1">
        <h1>Diseño</h1>
        <p>
          Sumá todas las piezas visuales con la identidad de tu marca para
          posicionarte en el mercado
        </p>
        <button>SOLICITA MAS INFO</button>
      </div>
      <div className="ds-Section2">
        <div className="ds-s2-info">
          <h2>Diseño offline</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            corporis dignissimos saepe? Eligendi reiciendis expedita aliquid
            nesciunt dolor molestiae qui vero! Neque maiores debitis ad earum
            amet! Vitae, voluptatem doloremque.
          </p>
        </div>
        <div className="ds-s2-img">
          <img src="../CirculodeCirculos.png" alt="" />
        </div>
      </div>
      <div className="ds-Section3">

        <div className="ds-section4-imgs">
          <div>
            <img src="../iv-section4-banners.png" alt="foto de banner digital con un me gusta" />
            <p>Banners Digitales</p>
          </div>
          <div>
            <img src="../iv-section4-editorial.png" alt="foto de un editorial" />
            <p>Editorial</p>
          </div>
          <div>
            <img src="../iv-section-4-mechandaising.png" alt="foto de bolsas de compra con logo" />
            <p>Marchandising</p>
          </div>
          <div>
            <img src="../section4-tasks.png" alt="foto de un flyer" />
            <p>Flyers</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Diseño;
