import React from "react";
import InputField from "../components/InputField";

const Cadastro = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Cadastro de Cliente</h2>
    <form>
      <InputField label="Nome completo" type="text" />
      <InputField label="E-mail" type="email" />
      <InputField label="Senha" type="password" />
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2 w-full">Cadastrar</button>
    </form>
  </div>
);

export default Cadastro;
