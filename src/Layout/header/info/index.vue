<template>
  <!-- header 右侧个人信息以及其他扩展功能 -->
  <div class="personal_wrap">
    <!-- 搜索区域 -->

    <!-- git 地址 -->

    <!-- 锁屏 -->
    <div class="personal_lock">
      <Lockscreen></Lockscreen>
    </div>

    <!-- 全屏展示 -->
    <div class="personal_full">
      <Fullscreen />
    </div>

    <!-- 头像 -->
    <div class="personal_avatar">
      <AvatarBox />
    </div>

    <!-- 项目配置 -->
    <div class="personal_setting">
      <Setting />
    </div>

    <!-- 项目配置 抽屉 -->
    <Drawer />
  </div>
</template>

<script lang="ts" setup name="Personal">
import {
  AvatarBox,
  Drawer,
  Fullscreen,
  Lockscreen,
  Setting,
} from "./component";
</script>

<style lang="scss" scoped>
.personal_wrap {
  display: flex;
  align-items: center;

  .personal_lock,
  .personal_full {
    margin-right: 20px;
    cursor: pointer;
  }

  .personal_setting {
    margin-right: 15px;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
