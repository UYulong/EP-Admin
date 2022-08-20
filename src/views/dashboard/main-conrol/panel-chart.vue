<template>
  <el-card class="box-card" shadow="never">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="日汇总" name="dayS">
        <el-row :gutter="5">
          <el-col :span="8">
            <Pie
              :active-name="activeName"
              :list="chartInfo"
              :pie-data="pieData"
            ></Pie>
          </el-col>
          <el-col :span="16">
            <Line></Line>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="周汇总" name="weekS">周汇总</el-tab-pane>
      <el-tab-pane label="月汇总" name="monthS">月汇总</el-tab-pane>
      <el-tab-pane label="年汇总" name="yearS">年汇总</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup name="PanelChart">
import { getChartInfoData } from "apis/mock/dashboard"; // api
import Line from "./chart/line.vue"; // 折线图
import Pie from "./chart/pie.vue"; // 饼图

const activeName = ref("dayS"); // tab 页签默认值

let chartInfo = ref({}); // 图表数据

const getChartInfo = async () => {
  const { data } = await getChartInfoData();
  chartInfo.value = data;
};

onMounted(() => {
  getChartInfo();
});

// 监听 页签点击 和 图表数据
let pieData = ref([]);

watch(chartInfo, (newVal) => {
  console.log(newVal);
  pieData.value = chartInfo.value[activeName.value].pieData;
});
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
  padding-top: 0;

  .test_box {
    background-color: aqua;
  }
}

:deep(.el-card__body) {
  padding: 8px 15px 10px;
}
</style>
