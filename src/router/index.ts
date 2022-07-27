// 路由主入口
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
  }
}

// 布局
import Layout from "../Layout/index.vue";

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    meta: { title: "登录" },
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/home",
    meta: { title: "Dashboard", icon: "el-icon-home" },
    hidden: false,
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
    component: Layout,
    redirect: "/list/basic-list",
    meta: { title: "列表页面", icon: "el-icon-home" },
    hidden: false,
    children: [
      {
        path: "basic-list",
        name: "Basic-List",
        component: () => import("../views/list/index.vue"),
        meta: { title: "基础列表", icon: "el-icon-home" },
      },

      {
        path: "basic-list1",
        name: "Basic-List1",
        component: () => import("../views/list/list.vue"),
        meta: { title: "基础列表1", icon: "el-icon-home" },
      },
    ],
  },

  {
    path: "/form",
    redirect: "/form/basic-form",
    component: Layout,
    meta: {
      title: "表单页面",
      icon: "el-icon-home",
    },
    children: [
      {
        path: "basic-form",
        name: "Basic-Form",
        component: () => import("views/form/index.vue"),
        meta: {
          title: "表单详情",
          icon: "el-icon-home",
        },
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
  history: createWebHistory(),
  routes: constantRoutes,
});

export { router };
