import axios from "axios";

const err = error => {
  return Promise.reject(error);
};

// request interceptor
axios.interceptors.request.use(config => {
  const token = window.localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = "bearer " + token; // 让每个请求携带自定义 token
  }
  return config;
}, err);

export { axios };
