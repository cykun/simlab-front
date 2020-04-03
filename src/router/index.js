import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/Register.vue"),
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("../views/Message.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/list/:type",
    name: "List",
    component: () => import("../views/List.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/account/center",
    name: "AccountCenter",
    component: () => import("../views/account/AccountCenter.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/account/setting",
    name: "AccountSetting",
    component: () => import("../views/account/AccountSetting.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/experiment/edit",
    name: "ExperimentEdit",
    component: () => import("../views/experiment/ExperimentEdit.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/experiment/create",
    name: "ExperimentCreate",
    component: () => import("../views/experiment/ExperimentCreate.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/experiment/start",
    name: "ExperimentStart",
    component: () => import("../views/experiment/ExperimentStart.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/developer/docment",
    name: "Docment",
    component: () => import("../views/Document.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/developer/center",
    name: "DevelopCenter",
    component: () => import("../views/DevelopCenter.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
    meta: {
      keepAlive: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
