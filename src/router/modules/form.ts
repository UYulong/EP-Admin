import Layout from "layout/index.vue"; // 布局

// 表单页面
export default {
  path: "/form",
  redirect: "/form/basic-form",
  component: Layout,
  hidden: false,
  meta: {
    title: "表单页面",
    icon: "Postcard",
  },
  children: [
    {
      path: "base-form",
      name: "BaseForm",
      component: () => import("views/form/base-form/index.vue"),
      meta: {
        title: "基础表单",
        icon: "el-icon-home",
      },
    },
    {
      path: "step-form",
      name: "StepForm",
      component: () => import("views/form/step-form/index.vue"),
      meta: {
        title: "分步表单",
        icon: "el-icon-home",
      },
    },
    {
      path: "form-detail",
      name: "FormDetail",
      component: () => import("views/form/form-detail/index.vue"),
      meta: {
        title: "表单详情",
        icon: "el-icon-home",
      },
    },
  ],
};
