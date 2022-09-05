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
        <!-- 部门简介 -->
        <DepartmentPanel />

        <!-- 最新动态 -->
        <LatestNews />
      </el-col>

      <!-- 右侧 -->
      <el-col :span="8">
        <!-- 快捷导航面板 -->
        <NavPanel />

        <!-- 工作进度 -->
        <SummaryPanel />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import DepartmentPanel from './comps/department-panel.vue'; // 部门简介-组件
import GreetPanel from './comps/greet-panel.vue'; // 顶部信息中心-组件
import NavPanel from './comps/nav-panel.vue'; // 快捷导航-组件
import LatestNews from './comps/news-panel.vue'; // 最新动态-组件
import SummaryPanel from './comps/summary-panel.vue'; // 信息汇总-组件
</script>

<style lang="scss" scoped>
.work-control {
  .panel-group {
    margin-top: 20px;
  }
}
</style>
