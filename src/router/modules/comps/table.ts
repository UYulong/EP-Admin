
// 表格页面 - 展示
export default {
  path: 'table',
  name: 'Table',
  meta: { title: '表格' },
  children: [
    {
      path: 'basic-table',
      name: 'Basic-Table',
      component: () => import("views/comps/table/base-table/index.vue"),
      meta: { title: '基础表格' }
    },
    {
      path: 'drag-table',
      name: 'Drag-Table',
      component: () => import("views/comps/table/drag-table/index.vue"),
      meta: { title: '拖拽表格' }
    },
    // {
    //   path: 'basic-table',
    //   name: 'Basic-Table',
    //   component: () => import("views/comps/table/base-table/index.vue"),
    //   meta: { title: '基础表格' }
    // }
  ]
};
