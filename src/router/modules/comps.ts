import Layout from "layout/index.vue"; // 布局

// 组件示例
export default {
  path: "/comps",
  redirect: "/comps/table",
  component: Layout,
  hidden: false,
  meta: {
    title: "组件示例",
    icon: "DocumentCopy",
  },
  children: [
    {
      path: "table",
      name: "CompsTable",
      component: () => import("views/comps/table/index.vue"),
      meta: {
        title: "基础表格",
      },
    },
    {
      path: "model",
      name: "CompsModel",
      component: () => import("views/comps/model/index.vue"),
      meta: {
        title: "弹窗展示",
      },
    },
    {
      path: "upload",
      name: "CompsUpload",
      component: () => import("views/comps/upload/index.vue"),
      meta: {
        title: "图片上传",
      },
    },
  ],
};
