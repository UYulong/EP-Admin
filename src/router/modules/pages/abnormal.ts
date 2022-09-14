
// 异常页面 - 展示
export default {
  path: "abnormal",
  hidden: false,
  name: 'Abnormal',
  meta: {
    title: "异常页面"
  },
  children: [
    {
      path: "401",
      name: "page401",
      component: () => import("views/abnormal/401.vue"),
      meta: {
        title: "401页面",
      },
    },
    {
      path: "403",
      name: "page403",
      component: () => import("views/abnormal/404.vue"),
      meta: {
        title: "404页面",
      },
    },
    {
      path: "500",
      name: "page500",
      component: () => import("views/abnormal/500.vue"),
      meta: {
        title: "500页面",
      },
    },
  ],
};
