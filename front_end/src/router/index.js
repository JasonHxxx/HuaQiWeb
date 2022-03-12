import Vue from "vue";
import VueRouter from "vue-router";
// default
import DefaultLayout from "@/layouts/defaultLayout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Chart from "@/views/Chart.vue"
import Esg from "@/views/Esg";
import myGroup from "@/views/stock/myGroup.vue";
import ESGTestDo from "@/views/ESGTestDo";
import EsgRe from "../views/EsgRe";

// import { judgeTeacher, judgeStudent } from "@/util/auth";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "chart",
        name: "Chart",
        component: Chart
      },
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      }
    ]
  },
  {
    path: "/Esg",
    name: "Esg",
    component: DefaultLayout,
    children: [
      {
        path: "/Esg",
        name: "Esgintro",
        component: Esg
      },
      {
        path: "esgtest",
        name: "ESGtest",
        component: ESGTestDo
      }
    ]
  },
  {
    path: "/EsgRe",
    name: "EsgRe",
    component: DefaultLayout,
    children: [
      {
        path: "/EsgRe",
        name: "EsgRe",
        component: EsgRe
      }
    ]
  },
  {
    path: "/stock",
    name: "stock",
    component: DefaultLayout,
    children: [
      {
        path: "mygroup",
        name: "mygroup",
        component: myGroup
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
//TODO

// router.beforeEach((to, from, next) => {
//   let legal = false;
//   if (!to.path.startsWith("/student") && !to.path.startsWith("/teacher"))
//     legal = true;
//   if (to.path.startsWith("/student") && judgeStudent()) legal = true;
//   if (to.path.startsWith("/teacher") && judgeTeacher()) legal = true;
//   if (to.name === "CoursePeek") legal = true;
//   if (legal) {
//     next();
//   } else {
//     next({ name: "Login" });
//   }
// });

export default router;
