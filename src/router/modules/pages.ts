import Layout from "layout/index.vue"; // layout

// 页面
export default {
  path: "/pages",
  component: Layout,
  redirect: "/pages/lists",
  meta: { title: "页面", icon: "Operation" },
  hidden: false,
  children: [
    {
      path: "lists",
      name: "Pages-List",
      meta: { title: "列表页面" },
      children: [
        {
          path: 'basic-list',
          name: "Basic-List",
          component: () => import("views/pages/list/base-list/index.vue"),
          meta: { title: "基础列表" },
        },
        {
          path: "drag-list",
          name: "Drag-List",
          component: () => import("views/pages/list/drag-list/index.vue"),
          meta: { title: "拖拽列表" },
        },
        {
          path: "other-list",
          name: "Other-List",
          component: () => import("views/pages/list/other-list/index.vue"),
          meta: { title: "其他列表" },
        },
      ]
    },
    {
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
          component: () => import("views/pages/form/base-form/index.vue"),
          meta: {
            title: "基础表单",
          },
        },
        {
          path: "step-form",
          name: "StepForm",
          component: () => import("views/pages/form/step-form/index.vue"),
          meta: {
            title: "分步表单",
          },
        },
      ],
    },
    {
      path: 'abnormal',
      hidden: false,
      name: 'Abnormal',
      meta: {
        title: '异常页面'
      },
      children: [
        {
          path: '403',
          name: 'page403',
          component: () => import('views/pages/abnormal/index.vue'),
          meta: {
            title: '403页面'
          }
        },
        {
          path: '404',
          name: 'page404',
          component: () => import('views/pages/abnormal/index.vue'),
          meta: {
            title: '404页面'
          }
        },
        {
          path: '500',
          name: 'page500',
          component: () => import('views/pages/abnormal/index.vue'),
          meta: {
            title: '500页面'
          }
        }
      ]
    },
    {
      path: 'personal',
      hidden: false,
      name: 'Personal',
      meta: {
        title: '个人页面'
      },
      children: [
        {
          path: 'center',
          name: 'PersonalCenter',
          component: () => import('views/pages/personal/center.vue'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: 'settings',
          name: ' PersonalSettings',
          component: () => import('views/pages/personal/settings.vue'),
          meta: {
            title: '个人设置'
          }
        },
      ]
    }
  ],
};
