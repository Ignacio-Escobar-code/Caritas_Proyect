import React from "react";
import "./identidad.css";
const IdentidadVisual = () => {
  return (
    <>
      <div className="iv-Section1">
        <h1>Identidad Visual</h1>
        <p>
          Para marcas auténticas, Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <button>
          {" "}
          SOLICITA MÁS <span>INFO</span>
        </button>
      </div>
      <div className="iv-Section2">
        <div className="iv-Section2-contenidoTextual">
          <h2>Tu marca es mucho mas que un logo.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            dolor sequi minus eveniet aut veniam odio laboriosam! Placeat magni
            atque voluptatum adipisci quia nisi doloribus repellat, nostrum,
            facilis nam error.
          </p>
        </div>
        <div className="iv-Section2-img">
          <img
            src="../iv-section2-img.png"
            alt="foto de tipografias con flechas y dibujos"
          />
        </div>
        <div className="iv-overlap-div">
          <h4>¿COMO PODÉS ARMAR TU IDENTIDAD VISUAL?</h4>
          <p>pedinos tu presupuesto</p>
        </div>
      </div>
      <div className="iv-Section3">
        <div className="iv-section3-cards">
          <div className="section3-card-img">
            {" "}
            <img src="../icon-flechon.png" alt="" />
          </div>
          <h3>Isologitipo de tu marca</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
            eos, suscipit eligendi rem ullam! Velit id laborum ad consectetur
            aliquam suscipit delectus culpa quis, natus enim neque nemo
            accusantium.
          </p>
          <button>PEDÍ PRESUPUESTO</button>
        </div>
        <hr />
        <div className="iv-section3-cards">
          <div className="section3-card-img">
            {" "}
            <img src="../icon-flechon.png" alt="" />
          </div>
          <h3>Guiá de identidad visual</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
            eos, suscipit eligendi rem ullam! Velit id laborum ad consectetur
            aliquam suscipit delectus culpa quis, natus enim neque nemo
            accusantium.
          </p>
          <button>PEDÍ PRESUPUESTO</button>
        </div>
        <hr />
        <div className="iv-section3-cards">
          <div className="section3-card-img">
            {" "}
            <img src="../icon-flechon.png" alt="" />
          </div>
          <h3>Manual de identidad visual</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
            eos, suscipit eligendi rem ullam! Velit id laborum ad consectetur
            aliquam suscipit delectus culpa quis, natus enim neque nemo
            accusantium.
          </p>
          <button>PEDÍ PRESUPUESTO</button>
        </div>
        <hr />
        <div className="iv-section3-cards">
          <div className="section3-card-img">
            {" "}
            <img src="../icon-flechon.png" alt="" />
          </div>
          <h3>Manual de identidad visual + Editables</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
            eos, suscipit eligendi rem ullam! Velit id laborum ad consectetur
            aliquam suscipit delectus culpa quis, natus enim neque nemo
          </p>
          <button>PEDÍ PRESUPUESTO</button>
        </div>
      </div>
      <div className="iv-Section4">
        <h4>OTROS DISEÑOS</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <hr />

        <div className="iv-section4-imgs">
          <div>
            <img
              src="../iv-section4-banners.png"
              alt="foto de banner digital con un me gusta"
            />
            <p>Banners Digitales</p>
          </div>
          <div>
            <img
              src="../iv-section4-editorial.png"
              alt="foto de un editorial"
            />
            <p>Editorial</p>
          </div>
          <div>
            <img
              src="../iv-section-4-mechandaising.png"
              alt="foto de bolsas de compra con logo"
            />
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

export default IdentidadVisual;
