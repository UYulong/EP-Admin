import Layout from "layout/index.vue"; // layout

// 页面
export default {
  path: "/plugins",
  component: Layout,
  redirect: "/pages/math",
  meta: { title: "插件", icon: "Operation" },
  hidden: false,
  children: [
    {
      path: 'math',
      name: 'Home',
      component: () => import('@/views/plugins/math/index.vue'),
      meta: { title: '算数加减' }
    },
    {
      path: 'editor',
      name: 'Editor',
      component: () => import('@/views/plugins/editor/index.vue'),
      meta: { title: '富文本' }
    },
  ]
};
