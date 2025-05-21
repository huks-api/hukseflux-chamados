import React from "react";
import InputField from "../components/InputField";

const AbrirChamado = () => (
  <div className="p-6 max-w-xl mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Abrir Chamado</h2>
    <form>
      <InputField label="Cliente" type="text" />
      <InputField label="Sensor" type="text" />
      <InputField label="Performance Ratio (PR)" type="text" />
      <InputField label="Descrição" type="text" />
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2 w-full">Enviar Chamado</button>
    </form>
  </div>
);

export default AbrirChamado;
