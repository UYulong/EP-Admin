
// 表单页面 - 展示
export default {
  path: "forms",
  hidden: false,
  name: 'Form',
  meta: {
    title: "表单页面"
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
  ],
};
