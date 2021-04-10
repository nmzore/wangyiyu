import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/Boke.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Reg",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
  },
  {
    path: "/User",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/Kege",
    name: "Kege",
    component: () => import("../views/Kege.vue"),
  },
  {
    path: "/Yuncun",
    name: "Yuncun",
    component: () => import("../views/Yuncun.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
