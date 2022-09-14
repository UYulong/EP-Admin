import Layout from "layout/index.vue"; // layout

// 列表页面
export default {
  path: "/list",
  component: Layout,
  redirect: "/list/basic-list",
  meta: { title: "列表页面", icon: "Operation" },
  hidden: false,
  children: [
    {
      path: "basic-list",
      name: "Basic-List",
      component: () => import("@/views/list/base-list/index.vue"),
      meta: { title: "基础列表" },
    },
    {
      path: "drag-list",
      name: "Drag-List",
      component: () => import("@/views/list/drag-list/index.vue"),
      meta: { title: "拖拽列表" },
    },
    {
      path: "descriptions-list",
      name: "Descriptions-List",
      component: () => import("@/views/list/descriptions-list/index.vue"),
      meta: { title: "其他列表" },
    },
  ],
};
