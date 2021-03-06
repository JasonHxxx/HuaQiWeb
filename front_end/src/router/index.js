import Vue from "vue";
import VueRouter from "vue-router";
// default
import DefaultLayout from "@/layouts/defaultLayout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Esg from "@/views/Esg";
import UnLoginLayout from "../layouts/unlogined";

import PostHeader from "@/views/PostHeader";
import EsgRe from "@/views/EsgRe";
//stock
import IndexStock from "@/views/stock/IndexStock";
import GroupCard from "../views/stock/GroupCard";
import StockChart from "@/views/stock/StockChart";
//test
import ESGTestDo from "@/views/test/ESGTestDo";
import RiskTestDo from "@/views/test/RiskTestDo";
import TestMain from "@/views/test/TestMain";
import StockLIst from "../views/stock/StockLIst";


Vue.use(VueRouter);
let router = new VueRouter({
  mode:'history',//默认是hash模式
  linkActiveClass:'menvscode-active',
  scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    console.log(to) // to：要进入的目标路由对象，到哪里去
    console.log(from) // from：离开的路由对象，哪里来
    console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
    if(savePosition) {
      return savePosition;
    }else{
      return {x:0,y:0}
    }
  },
  routes:[
    {
      path: "/",
      name: "visitorHome",
      component: UnLoginLayout,
      children: [
        {
          path: "/",
          name: "visitorhome",
          component: Home
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
      path: "/home",
      name: "Home",
      component: DefaultLayout,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
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
        {
          path: "rate",
          name: "EsgRe",
          component: EsgRe
        }
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
      path: "/stock",
      name: "stock",
      component: DefaultLayout,
      children: [
        {
          path: "index",
          name: "IndexStock",
          component: IndexStock
        },
        {
          path: "all",
          name: "stockFrom",
          component: StockLIst
        },
        {
          path: "detail",
          name: "stockChart",
          component: StockChart
        },
        {
          path: "group",
          name: "GroupCard",
          component: GroupCard
        }
      ]
    },
    {
      path: "/community",
      name: "community",
      component: PostHeader
    }
  ]
})

// const router = new VueRouter({
//   mode: "hash",
//   base: process.env.BASE_URL,
//   routes
// });
export default router

// const router = new VueRouter({
//   mode: "hash",
//   base: process.env.BASE_URL,
//   routes
// });
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
// })



