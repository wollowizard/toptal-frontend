import axios from "axios";
import authService from "../auth/auth-service";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async config => {
    let token = await authService.auth0Client.getTokenSilently()

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
