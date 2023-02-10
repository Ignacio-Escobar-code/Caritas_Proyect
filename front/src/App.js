import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Auditoria from "./pages/Auditoria-Gnrl/auditoria";
import Asesorias from "./pages/Asesorias/asesorias";
import IdentidadVisual from "./pages/Identidad-visual/identidad";
import RedesSociales from "./pages/Redes-sociales/redes";
import PublicidadOnline from "./pages/Publicidad-online/publi";
import Diseño from "./pages/Diseño/diseño";
import Cursos from "./pages/Cursos/cursos";
import Recursos from "./pages/Recursos/recursos";
import Contact from "./pages/Contacto/contacto";
import Navbar from "./components/Navbar/navbar";
import FormMail from "./components/Form-send-mail/form_mail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/asesorias" element={<Asesorias />} />
        <Route path="/identidad" element={<IdentidadVisual />} />
        <Route path="/redes" element={<RedesSociales />} />
        <Route path="/publicidad" element={<PublicidadOnline />} />
        <Route path="/diseño" element={<Diseño />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <FormMail />
      <Footer />
    </Router>
  );
}

export default App;
