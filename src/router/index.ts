// 路由主入口
import { createRouter, createWebHashHistory } from "vue-router";

// 布局
import Layout from "../Layout/index.vue";

const routes = [
  { path: "/login", component: () => import("views/login/index.vue") },

  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "Dashboard", icon: "el-icon-home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("views/dashboard/index.vue"),
        meta: { title: "主控台", icon: "el-icon-home" },
      },
      // {
      //   path: "/list",
      //   name: "List",
      //   component: () => import("views/dashboard/index.vue"),
      //   meta: { title: "工作台", icon: "el-icon-home" },
      // },
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
        component: () => import("views/list/index.vue"),
        meta: { title: "基础列表", icon: "el-icon-home" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
