import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import AbrirChamado from "./pages/AbrirChamado";
import HistoricoChamados from "./pages/HistoricoChamados";
import PainelTecnico from "./pages/PainelTecnico";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/abrir-chamado" element={<AbrirChamado />} />
        <Route path="/historico" element={<HistoricoChamados />} />
        <Route path="/painel-tecnico" element={<PainelTecnico />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
