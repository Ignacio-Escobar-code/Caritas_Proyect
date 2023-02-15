import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footerContainer">
      <div className="suscribe">
        <div className="containerHijo">
          <div className="text">
            <p>QUIERO RECIBIR INFO</p>
          </div>
          <form className="formuSuscribe" onSubmit={handleSubmit}>
            <input
              className="inputSuscribe"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btnSuscribe">
              Subscribite
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>©Copyright Carites Web . 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
