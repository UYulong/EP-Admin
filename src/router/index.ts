// 路由主入口
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
  }
}

// 布局
import Layout from "layout/index.vue";

// 导入 模块路由
import Abnormal from "./modules/abnormal"; // 异常页面
import About from "./modules/about"; // 关于页面
import Comps from "./modules/comps"; // 自定义组件展示页面
import Docs from "./modules/docs"; // 文档页面
import FormRoutes from "./modules/form"; // 表单页面
import List from "./modules/list"; // 列表页面

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
    meta: { title: "Dashboard", icon: "Timer" },
    hidden: false,
    children: [
      {
        path: "home",
        name: "Home",
        // component: () => import("../views/dashboard/index.vue"),
        component: () => import("@/views/dashboard/main-conrol/index.vue"),
        meta: { title: "主控台" },
      },
      {
        path: "workspace",
        name: "Workspace",
        component: () => import("@/views/dashboard/work-control/index.vue"),
        meta: { title: "工作台" },
      },
    ],
  },

  List,
  FormRoutes,
  Abnormal,
  About,
  Docs,
  Comps,
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
