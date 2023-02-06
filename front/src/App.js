import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/auditoria" component={Auditoria} />
      <Route path="/asesorias" component={Asesorias} />
      <Route path="/identidad" component={IdentidadVisual} />
      <Route path="/redes" component={RedesSociales} />
      <Route path="/publicidad" component={PublicidadOnline} />
      <Route path="/diseño" component={Diseño} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/recursos" component={Recursos} />
      <Route path="/contacto" component={Contact} />
    </Router>
  );
}

export default App;
