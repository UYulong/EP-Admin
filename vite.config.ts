import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite"; // 配置自动导入vue钩子
import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock"; // mock

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src"),
      },
      {
        find: 'comps',
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: 'apis',
        replacement: resolve(__dirname, "src/apis"),
      },
      {
        find: 'views',
        replacement: resolve(__dirname, "src/views"),
      },
      {
        find: 'routes',
        replacement: resolve(__dirname, "src/router"),
      },
      {
        find: 'store',
        replacement: resolve(__dirname, "src/store"),
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, "src/utils"),
      },
      {
        find: 'styles',
        replacement: resolve(__dirname, "src/styles"),
      },
      {
        find: 'layout',
        replacement: resolve(__dirname, "src/Layout"),
      },
      {
        find: 'models',
        replacement: resolve(__dirname, "src/models"),
      },
      {
        find: 'hooks',
        replacement: resolve(__dirname, 'src/hooks')
      }
    ],
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
  server: {
    hmr:true,
  }
})
