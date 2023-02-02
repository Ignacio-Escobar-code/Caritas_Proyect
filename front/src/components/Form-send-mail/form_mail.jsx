import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    setEmail("");
  };

  return (
    <div>
      <div>
        <text>Quiero recibir info</text>
      </div>
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
