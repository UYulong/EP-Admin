// 个人 - 展示
export default {
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
