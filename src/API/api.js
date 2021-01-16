import axios from "axios";

const api = axios.create({
  baseURL: "https://tn8sd.sse.codesandbox.io/api"
});
api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
