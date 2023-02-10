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
    <footer>
      <div className="suscribe">
        <div className="text">QUIERO RECIBIR INFO</div>
        <div className="formuSuscribe">
          <form onSubmit={handleSubmit}>
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
