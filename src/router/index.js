import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/square",
    name: "Square",
    component: () => import("../views/square/index.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/boke",
    name: "Boke",
    component: () => import("../views/Boke/Boke.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/hear",
    name: "Hear",
    component: () => import("../components/boke/Hear.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/find",
    name: "Find",
    component: () => import("../components/boke/Find.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/User/Login.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/Reg",
    name: "Reg",
    component: () => import("../views/User/Reg.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/User",
    name: "User",
    component: () => import("../views/User/User.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/likelist",
    name: "Likelist",
    component: () => import("../views/User/likelist/Likelist.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/SouSuo",
    name: "SouSuo",
    component: () => import("../views/Kege/SouSuo.vue"),
  }, {
    path: "/wodekge",
    name: "WoDeKGe",
    component: () => import("../views/Kege/WoDeKe.vue"),
  }, {
    path: "quchangge",
    name: "QuChGe",
    component: () => import("../views/Kege/QuChGe.vue"),
  },
  {
    path: "/Kege",
    name: "Kege",
    component: () => import("../views/Kege/Kege.vue"),
    children: [{
        path: "guangchang",
        name: "GuangChang",
        component: () => import("../views/Kege/Kge/GuangChang.vue"),
      },
      {
        path: "gefang",
        name: "GeFang",
        component: () => import("../views/Kege/Kge/GeFang.vue"),
      },
    ],
  },
  {
    path: "/Yuncun",
    name: "Yuncun",
    component: () => import("../views/Yuncun/Yuncun.vue"),
    meta: {
      showTabbar: true,
    },
  },

];

const router = new VueRouter({
  routes,
});

export default router;