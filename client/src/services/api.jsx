import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Adjust based on your backend
});

export default api;