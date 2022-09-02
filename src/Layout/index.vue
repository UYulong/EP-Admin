<template>
  <!-- 布局 -->
  <div class="common-layout">
    <el-container>
      <el-aside
        :width="asideWidth"
        class="aside_wrap"
      >
        <!-- 侧边栏 -->
        <SideBar />
      </el-aside>
      <el-container>
        <el-header class="header_wrap">
          <div class="bar_setting">
            <!-- 面包屑 -->
            <BarCon />
          </div>
          <div class="personal_setting">
            <!-- 个人中心 -->
            <Info />
          </div>
        </el-header>
        <el-main>
          <!-- 主区 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import useSetCollapse from "../store/modules/side"; // store
import BarCon from "./header/barCon/barCon"; // 导航栏左侧 面包屑导航组件
import Info from "./header/info/index.vue"; // 导航栏右侧 个人中心模块
import SideBar from "./sidebar/index.vue"; // 侧边栏组件

// 获取侧边栏当前宽度
const store = useSetCollapse();
const asideWidth = computed(() => {
  return store.sideWidth + "px";
});
</script>

<style lang="scss" scoped>
@import "../styles/var/variable.module.scss";

.common-layout {
  .aside_wrap {
    background-color: $sideBarBg;
  }

  .header_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 12px 32px 4px,
      rgba(0, 0, 0, 0.08) 0px 8px 20px 0px;
  }
}
</style>
