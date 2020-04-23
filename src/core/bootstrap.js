import store from "@/store/";

export default function Initializer() {
  store.commit("set_token", {
    access_token: window.localStorage.getItem("access_token"),
    refresh_token: window.localStorage.getItem("refresh_token")
  });
  store.dispatch("GetUserInfo");
}
