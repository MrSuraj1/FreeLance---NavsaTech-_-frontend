import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend.onrender.com/api", 
  baseURL: "http://localhost:5000/api", // Express backend URL
});

export default api;
