import Layout from "layout/index.vue"; // 布局

// 表单页面
export default {
  path: "/form",
  redirect: "/form/baseForm",
  component: Layout,
  hidden: false,
  name: '',
  meta: {
    title: "表单页面",
    icon: "Postcard",
  },
  children: [
    {
      path: "baseForm",
      name: "BaseForm",
      component: () => import("views/form/base-form/index.vue"),
      meta: {
        title: "基础表单",
      },
    },
    {
      path: "step-form",
      name: "StepForm",
      component: () => import("views/form/step-form/index.vue"),
      meta: {
        title: "分步表单",
      },
    },
    {
      path: "form-detail",
      name: "FormDetail",
      component: () => import("views/form/form-detail/index.vue"),
      meta: {
        title: "表单详情",
      },
    },
  ],
};
