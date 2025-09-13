import axios from "axios";

// Check if running locally or deployed
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api" // local backend
    : "https://freelance-navsatech-backend-1.onrender.com/api"; // deployed backend

const api = axios.create({
  baseURL,
  withCredentials: true, // only if backend supports cookies/sessions
});

export default api;
