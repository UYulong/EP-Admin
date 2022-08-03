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
      <Fullscreen></Fullscreen>
    </div>

    <!-- 头像 -->
    <div class="personal_avatar">
      <Avatar></Avatar>
    </div>

    <!-- 项目配置 -->
    <div class="personal_setting">
      <Setting></Setting>
    </div>
  </div>
</template>

<script lang="ts" setup name="Personal">
import Avatar from "./component/avatar"; // 头像组件
import Fullscreen from "./component/fullscreen"; // 全屏组件
import Lockscreen from "./component/lockscreen"; // 锁屏组件
import Setting from "./component/setting"; // 项目配置组件
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
