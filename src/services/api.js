import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL || "https://assana-backend-rqkg.onrender.com/api",
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: false,
  timeout: 15000,
});

export default api;
