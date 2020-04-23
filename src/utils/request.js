import axios from "axios";
import store from "@/store";

const err = error => {
  if (error.response) {
    if (error.response.status === 401) {
      let access_token = window.localStorage.getItem("access_token");
      if (access_token) {
        store.dispatch("Logout").then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
  }
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

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      let access_token = window.localStorage.getItem("access_token");
      if (access_token) {
        store.dispatch("Logout").then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
    return Promise.reject(error);
  }
);

export { axios };
