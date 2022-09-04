<template>
  <!-- 工作台 -->
  <div class="work-control">
    <!-- 顶部信息中心 -->
    <GreetPanel />

    <!-- 项目信息 -->
    <el-row
      class="panel-group"
      :gutter="20"
    >
      <!-- 左侧 -->
      <el-col :span="16">
        <ProjectPanel />
      </el-col>

      <!-- 右侧 -->
      <el-col :span="8">
        <!-- 快捷面板 -->
        快捷面板
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import GreetPanel from './comps/greet-panel.vue'; // 顶部信息中心-组件
import ProjectPanel from './comps/project-panel.vue'; // 项目组-组件
</script>

<style lang="scss" scoped>
.work-control {
  .panel-group {
    margin-top: 20px;
  }
}
</style>
