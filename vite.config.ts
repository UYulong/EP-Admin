import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import AutoImport from "unplugin-auto-import/vite"; // 配置自动导入vue钩子
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock"; // mock
const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
      comps: resolve("src/components"),
      apis: resolve("src/apis"),
      views: resolve("src/views"),
      routes: resolve("src/router"),
      store: resolve("src/store"),
      utils: resolve("src/utils"),
      styles: resolve("src/styles"),
      layout: resolve("src/Layout"),
      models: resolve("src/models"),
    },
  },
  plugins: [
    vue(),
    vueJsx({}),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
    }),
    viteMockServe(),
  ],
})
