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
        <form className="formuSuscribe" onSubmit={handleSubmit}>
          <div className="text">
            <p>QUIERO RECIBIR INFO</p>
          </div>
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
      <div className="copyright">
        <p>©Copyright Carites Marketing 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
