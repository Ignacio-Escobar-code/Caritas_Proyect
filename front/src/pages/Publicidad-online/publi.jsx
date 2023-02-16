import React from "react";
import "./publi.css"
const PublicidadOnline = () => {
  return (
    <>
      <div className="publi-Section1">
        <h1>Publicidad online</h1>
        <h5>Incorpora la estrategia publicitaria a tu escosistema digital</h5>
        <button>SOLICITA MAS INFO</button>
      </div>
        <div className="publi-Section2">
          <div className="publi-ads fb">
            <img src="../publi-facebook-ads.png" alt="imagen de facebook ads" />
            <button>PEDI ASESORARTE</button>
          </div>
          <hr/>
        <div className="publi-ads gg">
          <img src="../publi-google-ads.png" alt="imagen de google ads" />
          <button>PEDI ASESORARTE</button>
        </div>
        </div>
      <div className="publi-Section3">
        <div className="publi-Section3-Info">

        <h2>Publicidad online</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          quisquam itaque? Ut atque ducimus voluptates quidem, nisi molestiae,
          incidunt dolor dicta fugiat unde consequatur velit eveniet explicabo
          non inventore laborum?
        </p>
        </div>
        <div className="publi-Section3-img">
          <img src="../publi-laptop-img.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default PublicidadOnline;
