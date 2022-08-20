<template>
  <el-card class="box-card" shadow="never">
    <el-tabs v-model="activeName" @tab-click="handleTabsClick">
      <template v-for="item in tabsList" :key="item.name">
        <el-tab-pane :label="item.label" :name="item.name">
        </el-tab-pane>
      </template>

      <el-row :gutter="5">
        <!-- 饼图 -->
        <el-col :span="8">
          <Pie :pie-data="pieData"></Pie>
        </el-col>

        <!-- 折线图 -->
        <el-col :span="16">
          <Line></Line>
        </el-col>
      </el-row>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup name="PanelChart">
import { getChartInfoData } from "apis/mock/dashboard"; // api
import type { TabsPaneContext } from "element-plus";
import Line from "./chart/line.vue"; // 折线图组件
import Pie from "./chart/pie.vue"; // 饼图组件

import { Ref } from "vue";
import { ChartDataModel, PieDataModel } from '../chart.model';

// tabs 页签数据
const tabsList = ref([
  { label: '日汇总', name: 'dayS' },
  { label: '周汇总', name: 'weekS' },
  { label: '月汇总', name: 'monthS' },
  { label: '年汇总', name: 'yearS' },
])

const activeName = ref("dayS"); // tab 页签默认值

// 监听 页签点击
const handleTabsClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = tab.paneName as string
}

let chartInfo = ref({} as Ref<ChartDataModel>); // 接口返回数据

// 饼图--图表数据
let pieData = ref({} as Ref<PieDataModel>);

// 折线图--图表数据
// let lineData: LineDataModel = ref({
//   xAxisData: [],
//   yAxisData: {
//     NetProfit: [],
//     salesVolume: []
//   }
// })

const getChartInfo = async () => {
  const { data } = await getChartInfoData();
  chartInfo.value = data;
};

onMounted(() => {
  getChartInfo(); // 发送ajax请求
});

watch(chartInfo, (newVal) => {
  pieData.value = newVal[activeName.value].pieData
});

watch(activeName, (newVal) => {
  pieData.value = chartInfo.value[newVal].pieData
})


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
