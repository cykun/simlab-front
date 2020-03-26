import Vue from "vue";
import { login, getCurrentUserNav } from "@/api/login";

const user = {
  state: {
    token: {
      access_token: "",
      refresh_token: ""
    },
    username: "",
    avatar: ""
  },

  mutations: {
    set_token: (state, { access_token, refresh_token }) => {
      state.token.access_token = access_token;
      state.token.refresh_token = refresh_token;
    },
    set_username: (state, username) => {
      state.username = username;
    },
    set_avatar: (state, avatar) => {
      state.avatar = avatar;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const data = response.data;
            window.localStorage.setItem("access_token", data.access_token);
            window.localStorage.setItem("refresh_token", data.refresh_token);
            commit("set_token", data);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getCurrentUserNav()
          .then(response => {
            const data = response.data;
            commit("set_username", data.username);
            commit("set_avatar", data.avatar);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    Logout({ commit }) {
      commit("set_token", { access_token: "", refresh_token: "" });
      commit("set_username", "");
      commit("set_avatar", "");
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("refresh_token");
    }
  }
};

export default user;
