import axios from "axios";
import config from "../config.json";

const request = axios.create({
  baseURL: config.BACKEND_BASE_URL,
});
request.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      request.headers.Authorization = token;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
