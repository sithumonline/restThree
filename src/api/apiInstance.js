import axios from "axios";
import { addAuthInterceptor } from "./authIntecepter";
import { addResponseInterceptor } from "./responseInteceptor";

const apiInstance = axios.create({
  baseURL: "INVALID_URL",
});

const URL = import.meta.env.REACT_APP_BASEURL;

addAuthInterceptor(apiInstance);
addResponseInterceptor(apiInstance);

apiInstance.interceptors.request.use(
  async function (config) {
    config.baseURL = URL || "http://localhost:3080";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { apiInstance };
