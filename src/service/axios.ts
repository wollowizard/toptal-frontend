import axios from "axios";
import { token } from "../store";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async config => {
    config.headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default axiosInstance;
