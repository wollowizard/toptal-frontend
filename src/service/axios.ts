import axios from "axios";
import { user } from "../store";
import { get } from 'svelte/store';
import authService from "../auth/auth-service";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async config => {
    let theToken = await authService.auth0Client.getTokenSilently()

    config.headers = {
      'Authorization': `Bearer ${theToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

export default axiosInstance;
