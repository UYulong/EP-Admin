<template>
  <!-- 布局 -->
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWidth" class="aside_wrap">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header class="header_wrap">
          <div class="bar_setting">
            <BarCon></BarCon>
          </div>
          <div class="personal_setting">2</div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import useSetCollapse from "../store/modules/side"; // store
import BarCon from "./header/barCon/barCon"; // 面包屑导航组件
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
