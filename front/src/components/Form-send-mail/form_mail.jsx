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
      <div className="logoForm">
        {" "}
        <a href="/">
          <img
            src="Logo-black.png"
            alt=" Logo de Carites Marketing"
            className="imgLogo"
          />
        </a>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="formRow">
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
          <div className="formRow">
            <label htmlFor="email" className="labelEmail">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="inputData"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="formRow">
            <label htmlFor="country" className="labelPais">
              País*:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="inputData"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <div className="col-form1">
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
