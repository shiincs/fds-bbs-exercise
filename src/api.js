import axios from "axios";

const api = axios.create({
  baseURL: "https://gabby-preface.glitch.me/"
});

// 매 요청마다 자동으로 토큰을 포함시켜준다.
api.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

export default api;
