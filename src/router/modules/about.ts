import Layout from "layout/index.vue"; // 布局

// 关于页面 - 展示
export default {
  path: "/about",
  redirect: "/about/index",
  component: Layout,
  hidden: false,
  name: "About",
  meta: {
    title: "关于",
    icon: "Help",
  },
  children: [
    {
      path: "index",
      name: "AboutPage",
      component: () => import("views/about/index.vue"),
      meta: {
        title: "关于",
      },
    },
  ],
};
