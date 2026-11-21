
import api from "./api";

// Employee Registration
export const registerUser = async (data) => {
    const response = await api.post("/Auth/register", data);
    return response.data;
};

// Employee Login
export const loginUser = async (data) => {
    const response = await api.post("/Auth/login", data);
    return response.data;
};

// Get Employee Profile
export const getProfile = async () => {
    // const response = await api.get("/Auth/profile");
      const response = await api.get("/pages/employee/profile");
    return response.data;
};

// Save JWT Token
export const saveToken = (token) => {
    sessionStorage.setItem("token", token);
};

// Get JWT Token
export const getToken = () => {
    return sessionStorage.getItem("token");
};

// Logout
export const logoutUser = () => {
    sessionStorage.removeItem("token");
};
