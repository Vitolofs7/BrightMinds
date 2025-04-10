import axios from 'axios';

const protocol = import.meta.env.VITE_HTTPS == "true" ? "https" : "http";
const API_URL = `${protocol}://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api`;

const api = axios.create({
  baseURL: API_URL, 
});

export default api;
