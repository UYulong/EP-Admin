<template>
  <!-- menu opitons -->
  <div class="menu_wrap">
    <el-menu
      class="menu_wrap_nav"
      background-color="#041427"
      active-text-color="#fff"
      text-color="#fff"
      default-active="1-1"
      :collapse="isCollapse"
      :collapse-transition="false"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>

        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="2">
        <el-icon><setting /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>

      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import useSetCollapse from "../../../store/modules/side";

// 计算侧边栏是否展开
const store = useSetCollapse();
const isCollapse = computed(() => {
  return store.isCollapse;
});

const router = useRouter();
console.log(router);
</script>

<style lang="scss" scoped>
@import "../../../styles/var/project.scss";

.menu_wrap {
  .menu_wrap_nav {
    border-right: none;

    .el-menu-item.is-active {
      // background: #4a8ae9;
      border-radius: 8px;
      // position: relative;

      &::before {
        content: "";
        z-index: auto;
        background: #4a8ae9;
        position: absolute;
        left: 8px;
        right: 8px;
        top: 5px;
        bottom: 5px;
        border-radius: 8px;
      }
    }
  }
}
</style>
