import React, { useState } from "react";
import "./form_mail.css";

const FormMail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puede agregar su lógica de envío de formulario
    console.log(formData);
  };

  return (
    <div className="bloqueForm">
      <div className="containerFormMail">
        <div className="icons">
          {" "}
          <a href="/">
            <img
              src="Logo-black.png"
              alt=" Logo de Carites Marketing"
              className="imgLogo"
            />
          </a>
          <div className="redesLink">
            <a href="mailto:info@carites.com.ar?subject=Consulta sobre productos">
              <img
                src="LogoMail.png"
                alt="Logo Para envio de mail"
                className="logoMail"
              />
              info@carites.com.ar
            </a>
            <a
              href="https://www.instagram.com/carites_marketing/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="LogoInstagram.png"
                alt="Logo Instagram"
                className="logoInstagram"
              />
              @carites_marketing
            </a>
            <a
              href="https://ar.pinterest.com/caritesmarketing/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="LogoPinterest.png"
                alt="Logo Pinterest"
                className="logoPinterest"
              />
              @carites
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="name-mail">
            <div className="childrenName">
              <label htmlFor="name" className="labelName">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="inputData"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="childrenMail">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="childrenPais">
            <label htmlFor="country">País*:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="childrenText">
            <label htmlFor="message" className="textLabel">
              ¿En que puedo ayudarte?*
            </label>
            <textarea
              id="message"
              name="message"
              className="inputText"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button className="btnForm" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormMail;
