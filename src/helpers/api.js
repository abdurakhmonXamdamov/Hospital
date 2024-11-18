import axios from "axios";
const url = "http://195.158.9.124:4109";

const api = axios.create({
  // Configuration
  baseURL: url,
  timeout: 2000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${
      $cookies.get("hospital__token") || ""
    }`;
    config.headers['Content-Type'] = 'multipart/form-data'
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api, url };
