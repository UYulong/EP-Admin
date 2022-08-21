<template>
  <!-- 主控台 -->
  <div>
    <!-- 数据详情汇总面板 -->
    <el-row :gutter="20">
      <template v-for="item in summaryList" :key="item.id">
        <el-col :span="6">
          <Card :list="item"></Card>
        </el-col>
      </template>
    </el-row>

    <!-- 销售数据可视化面板 -->
    <panelChart></panelChart>
  </div>
</template>

<script lang="ts" setup name="MainControl">
import panelChart from "./panel-chart.vue"; // 数据可视化面板
import Card from "./trend-card/index.vue"; // 详情趋势汇总面板

import { getSummaryListData } from "apis/mock/dashboard"; // api

// 获取 详情面板汇总信息API
let summaryList = ref([]);
const getSummerayList = async () => {
  const { data } = await getSummaryListData();
  summaryList.value = data;
};

onMounted(() => {
  getSummerayList();
});
</script>

<style lang="scss" scoped>
</style>
