import axios from "axios";

export const api = axios.create({
  baseURL: "https://seu-backend-render.onrender.com", // Altere conforme necessário
});
