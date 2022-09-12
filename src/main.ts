import { createApp } from "vue";
import App from "./App.vue";

// 导入路由
import { router } from "./router";

// 导入状态管理库Pinia
import store from "./store";

// 导入 Element-Plus UI组件库
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 导入 ElementIcon
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from 'element-plus/es/locale/lang/zh-cn';

// 导入全局样式
import './styles/index.scss';

// 权限处理
import "./utils/permission";

const app = createApp(App);

// 注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(store);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
