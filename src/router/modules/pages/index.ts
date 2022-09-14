import Layout from "layout/index.vue"; // layout
import Abnormal from "./abnormal"; // 异常页面
import Form from './form'; // 表单页面
import List from "./list"; // 列表页面

// 页面
export default {
  path: "/pages",
  component: Layout,
  redirect: "/pages/lists",
  meta: { title: "页面", icon: "Operation" },
  hidden: false,
  children: [
    List, // 列表页面
    Form, // 表单页面
    Abnormal // 异常页面
  ],
};
