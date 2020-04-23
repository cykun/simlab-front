import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/BasicLayout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue")
      },
      {
        path: "/message",
        name: "Message",
        component: () => import("../views/Message.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue")
      },
      {
        path: "/team",
        name: "Team",
        component: () => import("../views/Team.vue")
      },
      {
        path: "/list/:type",
        name: "List",
        component: () => import("../views/List.vue")
      },
      {
        path: "/detail/:id",
        name: "Detail",
        component: () => import("../views/Detail.vue")
      },
      {
        path: "/account/center",
        name: "AccountCenter",
        component: () => import("../views/account/AccountCenter.vue")
      },
      {
        path: "/account/setting",
        name: "AccountSetting",
        component: () => import("../views/account/AccountSetting.vue")
      },
      {
        path: "/experiment/edit",
        name: "ExperimentEdit",
        component: () => import("../views/experiment/ExperimentEdit.vue")
      },
      {
        path: "/experiment/create",
        name: "ExperimentCreate",
        component: () => import("../views/experiment/ExperimentCreate.vue")
      },
      {
        path: "/experiment/start",
        name: "ExperimentStart",
        component: () => import("../views/experiment/ExperimentStart.vue")
      },
      {
        path: "/developer/docment",
        name: "Docment",
        component: () => import("../views/Document.vue")
      },
      {
        path: "/developer/center",
        name: "DevelopCenter",
        component: () => import("../views/DevelopCenter.vue")
      },
      {
        path: "/class",
        name: "Class",
        component: () => import("../views/Class.vue"),
        children: [
          {
            path: "/class/student/:id",
            name: "Student",
            component: () => import("../views/class/student/Student.vue")
          },
          {
            path: "/class/manager/:id",
            name: "Manager",
            component: () => import("../views/class/manager/Manager.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/Register.vue")
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
