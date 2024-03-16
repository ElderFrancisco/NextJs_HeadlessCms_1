import axios from "axios";
import config from "@/app/config/config";

const axiosInstance = axios.create({
  baseURL: config.API_URL, // Coloca aquí la URL base de tu API
  timeout: 5000, // Puedes ajustar el tiempo de espera según tus necesidades
});

export default axiosInstance;
