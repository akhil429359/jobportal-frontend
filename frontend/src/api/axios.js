import axios from "axios";

const api = axios.create({
  baseURL: "https://jobportal-frontend-3-e849.onrender.com/api/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Token ${token}`; 
  }
  return config;
});

export default api;
