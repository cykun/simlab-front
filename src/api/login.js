import { axios } from "@/utils/request";

export function login({ username, password }) {
  return axios({
    method: "post",
    url: "http://127.0.0.1:8000/oauth/token",
    data: {
      username: username,
      password: password,
      grant_type: "password",
      scope: "read",
      client_id: "client",
      client_secret: "secret"
    },
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

export function getCurrentUserNav() {
  return axios({
    url: "http://127.0.0.1:8085/user/nav",
    method: "get"
  });
}

export function getMessageNav() {
  return axios({
    url: "http://127.0.0.1:8085/notify/nav",
    method: "get"
  });
}

export function logout() {
  return axios({
    url: "/auth/logout",
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}
