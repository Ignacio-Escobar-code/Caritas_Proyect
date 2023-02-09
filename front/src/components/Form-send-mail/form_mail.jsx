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
    <div className="container-fluid  bloque-form">
      <div className="row  align-items-center justify-content-center">
        <div className="col">
          <a href="/"><img src="Logo-Black.png" alt="Logo de Carites" /></a>
        </div>
        <form action="">

        
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre *</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" />
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email *</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
        
          <div className="col">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Pais</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
          <div className="col">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">¿En que puedo ayudarte?</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>


        

        </form>
      </div>
    </div>
  );


};

export default FormMail;