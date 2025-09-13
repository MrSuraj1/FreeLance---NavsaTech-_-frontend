import axios from "axios";

// Use your Render backend URL
const API = axios.create({
  baseURL: "https://freelance-navsatech-backend-1.onrender.com/api",
  withCredentials: true,  // optional, if backend supports cookies/sessions
});

export default API;
