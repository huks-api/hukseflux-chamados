import React from "react";
import logo from "../assets/logo.png";

const Header = () => (
  <header className="bg-white p-4 shadow flex justify-between items-center">
    <img src={logo} alt="Hukseflux Logo" className="h-10" />
    <h1 className="text-xl font-semibold text-gray-700">Sistema de Chamados - Hukseflux Brasil</h1>
  </header>
);

export default Header;
