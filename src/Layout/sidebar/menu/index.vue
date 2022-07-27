<template>
  <!-- menu opitons -->
  <div class="menu_wrap">
    <el-menu
      class="menu_wrap_nav"
      :background-color="variables.sideBarBg"
      :active-text-color="variables.menuActiveTextColor"
      :text-color="variables.menuTextColor"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
    >
      <SidebarItem
        v-for="item in allRoutes"
        :key="item.path"
        :routes="item"
        :base-path="item.path"
      ></SidebarItem>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import useSetCollapse from "../../../store/modules/side"; // 侧边栏缩放状态store
import variables from "../../../styles/var/variable.module.scss"; // css variable
import SidebarItem from "./SidebarItem.vue"; // 子菜单组件

// 计算侧边栏是否展开
const store = useSetCollapse();
const isCollapse = computed(() => {
  return store.isCollapse;
});

// 路由菜单集合
const router = useRouter();
const allRoutes = computed(() => {
  return router.options.routes;
});

// 菜单默认激活选项
const activeMenu = computed(() => {
  const route = useRoute();

  const { meta, path } = route;

  if (meta.activeMenu) {
    return meta.activeMenu;
  }

  return path;
});
</script>

<style lang="scss" scoped>
.menu_wrap {
  .menu_wrap_nav {
    border-right: none;

    .el-menu-item.is-active {
      // background: #4a8ae9;
      border-radius: 8px;
      // position: relative;

      // &::before {
      //   content: "";
      //   z-index: auto;
      //   background: #4a8ae9;
      //   position: absolute;
      //   left: 8px;
      //   right: 8px;
      //   top: 5px;
      //   bottom: 5px;
      //   border-radius: 8px;
      // }
    }
  }
}
</style>
