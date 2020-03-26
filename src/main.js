import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style-grid.css";
import "./assets/css/style.css";
// import axios from "axios";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import bootstrap from "./core/bootstrap";
import { Store } from "vuex";
import "remixicon/fonts/remixicon.css";

Vue.config.productionTip = false;
// Vue.prototype.axios = axios;
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  if (
    window.localStorage.getItem("access_token") &&
    store.getters.username === ""
  ) {
    store
      .dispatch("GetUserInfo")
      .then(res => {
        next();
      })
      .catch(() => {
        Store.dispatch("logout");
      });
  }
  next();
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
