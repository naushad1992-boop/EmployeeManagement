import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5175/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

// Automatically attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle API errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Do not redirect automatically here.
      // Login page will handle authentication.
      console.error("Unauthorized API request");
    }

    return Promise.reject(error);
  }
);

export default api;
