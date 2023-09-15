// pinia
import { createPinia } from "pinia";

import useSetDrawer from './modules/drawer' // 抽屉缩放
import useSetForm from './modules/form' // 分布表单
import useUserStore from './modules/user' // 登录
import useSetCollapse from './modules/side' // 侧边栏
import useSetTable from './modules/table' // 表格

const store = createPinia();

export { useSetDrawer, useSetForm, useUserStore, useSetCollapse, useSetTable }
export default store;
