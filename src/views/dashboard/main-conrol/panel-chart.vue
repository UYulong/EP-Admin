<template>
  <el-card
    class="box-card"
    shadow="never"
  >
    <el-tabs
      v-model="activeName"
      @tab-click="handleTabsClick"
    >
      <template
        v-for="item in tabsList"
        :key="item.name"
      >
        <el-tab-pane
          :label="item.label"
          :name="item.name"
        />
      </template>

      <el-row :gutter="5">
        <!-- 饼图 -->
        <el-col :span="8">
          <pie-chart
            :pie-data="pieData"
            width="500px"
            height="430px"
          />
        </el-col>

        <!-- 折线图 -->
        <el-col :span="16">
          <LineChart
            :line-data="lineData"
            width="1050px"
            height="430px"
          />
        </el-col>
      </el-row>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup name="PanelChart">
import type { TabsPaneContext } from "element-plus";
import { getChartInfoData } from "../../../apis/mock/dashboard"; // api
import LineChart from "./chart/line-chart.vue"; // 折线图组件
import PieChart from "./chart/pie-chart.vue"; // 饼图组件

import { Ref } from "vue";
import { PieChartDataModel } from "../../../models/dashboard";
import { ChartDataModel, LineDataModel } from '../model/chart.model';

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
let pieData = ref({} as Ref<PieChartDataModel>);

// 折线图--图表数据
let lineData = ref({} as Ref<LineDataModel>)

// 获取接口数据
const getChartInfo = async () => {
  const { data } = await getChartInfoData();
  chartInfo.value = data;
};
onMounted(() => {
  getChartInfo(); // 发送ajax请求
});

watch(() => chartInfo.value, (newVal) => {
  pieData.value = newVal[activeName.value].pieData
  lineData.value = newVal[activeName.value].lineData
});

watch(() => activeName.value, (newVal) => {
  pieData.value = chartInfo.value[newVal].pieData
  lineData.value = chartInfo.value[newVal].lineData
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
