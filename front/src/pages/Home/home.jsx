import React from "react";
import Navbar from "../../components/Navbar/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Buscas una agencia de Marketing?</h1>
        <button type="submit">SOLICITA MAS INFO</button>
      </div>
      <div>
        <h2>La fórmula para triunfar en el marqueting digital</h2>
        <div>
          Se basa en entender a tus clientes potenciales en el formato correcto
          y el momento adecuado
        </div>
      </div>
    </div>
  );
};

export default Home;
