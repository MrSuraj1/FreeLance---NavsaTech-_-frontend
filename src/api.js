import axios from "axios";

const api = axios.create({
  baseURL: "https://freelance-navsatech-backend-1.onrender.com/", 
  baseURL: "http://localhost:5000/api", // Express backend URL
});

export default api;
