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
import PostHeader from "../components/post/PostHeader";
import EsgRe from "@/views/EsgRe";
//charts
import geiChart from "@/views/charts/gei-chart"
//test
import ESGTestDo from "@/views/test/ESGTestDo";
import RiskTestDo from "@/views/test/RiskTestDo";
import TestMain from "@/views/test/TestMain";

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
    path: "/esg",
    name: "esg",
    component: DefaultLayout,
    children: [
      {
        path: "intro",
        name: "intro",
        component: Esg
      },
    ]
  },
  {
    path: "/test",
    name: "test",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "test",
        component: TestMain
      },
      {
        path: "esgtest",
        name: "ESGTest",
        component: ESGTestDo
      },
      {
        path: "risktest",
        name: "RiskTest",
        component: RiskTestDo
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
      },
      {
        path: "charts",
        name: "charts",
        component: geiChart
      }
    ]
  },
  {
    path: "/community",
    name: "community",
    component: PostHeader
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
