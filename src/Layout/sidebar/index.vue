<template>
  <!-- 侧边栏 -->
  <div class="sidebar-wrap">
    <!-- logo -->
    <Logo v-if="project_logo_isShow"></Logo>

    <!-- sidebar -->
    <Menu></Menu>
  </div>
</template>

<script lang="ts" setup>
import Logo from "./logo/index"; // logo 组件
import Menu from "./menu/index.vue";

// logo 是否显示
import { project_logo_isShow } from "../../utils/settings";
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  height: 60px;
  margin: 0;
  padding: 0;
}
</style>
