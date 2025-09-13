// import axios from "axios";

// const api = axios.create({
//   baseURL: "", 
//   baseURL: "http://localhost:5000/api", // Express backend URL
// });

// export default api;

import axios from "axios";

// Detect if running on localhost or deployed site
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"        // local dev
    : "https://freelance-navsatech-backend-1.onrender.com/api"; // deployed backend

const api = axios.create({
  baseURL,
  withCredentials: true, // if your backend uses cookies
});

export default api;
