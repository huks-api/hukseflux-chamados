import React from "react";
import InputField from "../components/InputField";

const Login = () => (
  <div className="p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Login Técnico</h2>
    <form>
      <InputField label="Usuário" type="text" />
      <InputField label="Senha" type="password" />
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2 w-full">Entrar</button>
    </form>
  </div>
);

export default Login;
