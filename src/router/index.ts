// 路由主入口
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 布局
import Layout from "../Layout/index.vue";

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    meta: { title: "登录" },
    // hidden: true,
  },

  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "Dashboard", icon: "el-icon-home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/dashboard/index.vue"),
        meta: { title: "主控台", icon: "el-icon-home" },
      },
    ],
  },

  {
    path: "/list",
    redirect: "/list/basic-list",
    component: Layout,
    meta: { title: "列表页面", icon: "el-icon-home" },
    children: [
      {
        path: "basic-list",
        name: "Basic-List",
        component: () => import("../views/list/index.vue"),
        meta: { title: "基础列表", icon: "el-icon-home" },
      },
    ],
  },
];

// 异步路由
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/form",
    redirect: "/form/basic-form",
    component: Layout,
    meta: {
      title: "表单页面",
      icon: "el-icon-home",
      // roles: ["admin", "editor"],
    },
    children: [
      {
        path: "basic-form",
        name: "Basic-Form",
        component: () => import("views/form/index.vue"),
        meta: {
          title: "表单详情",
          icon: "el-icon-home",
          // roles: ["admin", "editor"],
        },
      },
    ],
  },

  { path: "*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export { router };
