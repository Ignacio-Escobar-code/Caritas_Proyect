import React, { useState } from "react";
import "./suscribe_mail.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    setEmail("");
  };

  return (
    <div className="suscribe">
      <div>Quiero recibir info</div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Subscribite</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
