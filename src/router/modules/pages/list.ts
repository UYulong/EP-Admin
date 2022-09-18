
// 列表页面 - 展示
export default {
  path: "lists",
  name: "Pages-List",
  meta: { title: "列表页面" },
  children: [
    {
      path: 'basic-list',
      name: "Basic-List",
      component: () => import("views/pages/list/base-list/index.vue"),
      meta: { title: "基础列表" },
    },
    {
      path: "drag-list",
      name: "Drag-List",
      component: () => import("views/pages/list/drag-list/index.vue"),
      meta: { title: "拖拽列表" },
    },
    {
      path: "other-list",
      name: "Other-List",
      component: () => import("views/pages/list/other-list/index.vue"),
      meta: { title: "其他列表" },
    },
  ]
};
