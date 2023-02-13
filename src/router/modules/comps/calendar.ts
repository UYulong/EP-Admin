// 日历页面 - 展示
export default {
  path: 'calendar',
  name: 'Calendar',
  meta: { title: '日历' },
  component: () => import('@/views/comps/calendar/index.vue'),
}
