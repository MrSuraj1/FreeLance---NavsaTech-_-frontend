import axios from "axios";

const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://freelance-navsatech-backend-1.onrender.com/api";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
