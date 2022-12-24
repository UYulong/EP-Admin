// 动画页面 - 展示
export default {
  path: 'animate',
  name: ' Animate',
  meta: { title: '动效' },
  children: [
    {
      path: 'animate/index',
      name: 'AniamteIndex',
      component: () => import('@/views/comps/animate/number/index.vue'),
      meta: { title: '动画效果' }
    },
    {
      path: 'animate/text',
      name: 'AnimateText',
      component: () => import('@/views/comps/animate/text/index.vue'),
      meta: { title: '文字动画' }
    }
  ]
}
