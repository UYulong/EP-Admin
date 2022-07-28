import Layout from "layout/index.vue"; // 布局

// 文档页面 - 外链
export default {
  path: "/docs",
  redirect: "/docs/index",
  component: Layout,
  hidden: false,
  name: "Docs",
  meta: {
    title: "项目文档",
    icon: "Document",
  },
  children: [
    {
      path: "index",
      name: "DocumentPage",
      component: () => import("views/docs/index.vue"),
      meta: {
        title: "项目文档",
      },
    },
  ],
};
