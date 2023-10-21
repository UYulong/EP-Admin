import Layout from 'layout/index.vue' // layout
import Animate from './animate' // 表格
import Table from './table' // 表格
import Calendar from './calendar' // 日历
import Icons from './icons' // 图标
import Expand from './expand' // 组件拓展

// 页面
export default {
  path: '/comps',
  component: Layout,
  redirect: '/comps/table',
  meta: { title: '组件', icon: 'DocumentCopy' },
  hidden: false,
  name: 'Comps',
  children: [
    Table, // 表格
    Animate, // 动画
    Expand, // 拓展
    Calendar, // 日历
    Icons
  ]
}
