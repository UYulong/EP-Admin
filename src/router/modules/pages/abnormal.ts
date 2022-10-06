// 异常页面 - 展示
export default {
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
}
