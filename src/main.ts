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

// 导入全局样式
import "./styles/reset.scss";

const app = createApp(App);

// 注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
