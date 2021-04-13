import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/boke",
    name: "Boke",
    component: () => import("../views/Boke/Boke.vue"),
  },
   {
    path: "/hear",
    name: "Hear",
    component: () => import("../components/boke/Hear.vue"),
  },
    {
    path: "/find",
    name: "Find",
    component: () => import("../components/boke/Find.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/User/Login.vue"),
  },
  {
    path: "/Reg",
    name: "Reg",
    component: () => import("../views/User/Reg.vue"),
  },
  {
    path: "/User",
    name: "User",
    component: () => import("../views/User/User.vue"),
  }, {
    path: "/SouSuo",
    name: "SouSuo",
    component: () => import("../views/Kege/SouSuo.vue"),
  },
  {
    path: "/Kege",
    name: "Kege",
    component: () => import("../views/Kege/Kege.vue"),
    children: [{
        path: "quchangge",
        name: "QuChGe",
        component: () => import("../views/Kege/Kge/QuChGe.vue"),
      }, {
        path: "guangchang",
        name: "GuangChang",
        component: () => import("../views/Kege/Kge/GuangChang.vue")
      }, {
        path: "gefang",
        name: "GeFang",
        component: () => import("../views/Kege/Kge/GeFang.vue")
      },

    ],
  },
  {
    path: "/Yuncun",
    name: "Yuncun",
    component: () => import("../views/Yuncun/Yuncun.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;