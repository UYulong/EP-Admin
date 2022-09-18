import Layout from "layout/index.vue"; // layout
import Table from './table'; // 表格

// 页面
export default {
  path: "/comps",
  component: Layout,
  redirect: "/comps/table",
  meta: { title: "组件", icon: "DocumentCopy" },
  hidden: false,
  name: 'Comps',
  children: [
    Table // 表格
  ],
};
