<template>
  <div class="pie_chart_wrap">
    <div ref="pieRef" class="pie_chart"></div>
  </div>
</template>

<script lang="ts" setup name="PieChart">
import * as echarts from "echarts";
import { PieChartDataModel, PieDataModel } from '../../chart.model';

const props = defineProps<{
  pieData: PieDataModel;
}>();

// pie chart render datas
const pieRef = ref<HTMLDivElement | null>(null); // pie chart dom reference
let visitsNum = ref([] as Array<PieChartDataModel>); // 图表所需数据
let chartTitle = ref("本日活跃用户数量") // chart title
let pieChartInstance: echarts.ECharts | null = null; // chart instance

watchEffect(() => {
  if (props.pieData.data && props.pieData.data.length !== 0) {

    visitsNum.value = props.pieData.data; //设置数据
    chartTitle.value = props.pieData.desc //设置标题

    // update
    if (pieChartInstance) {
      pieChartInstance.setOption({
        title: {
          text: chartTitle.value,
        },
        series: [
          {
            name: props.pieData.desc,
            data: visitsNum.value,
          },
        ],
      });
    }
  }
});

// chart init 
function initChart() {
  pieChartInstance = echarts.init(pieRef.value as unknown as HTMLElement);
  const option = {
    title: {
      text: chartTitle.value,
      x: "center",
    },
    color: [
      "#37a2da",
      "#32c5e9",
      "#9fe6b8",
      "#ffdb5c",
      "#ff9f7f",
      "#fb7293",
      "#e7bcf3",
      "#8378ea",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    calculable: true,
    series: [
      {
        name: "本日活跃用户",
        type: "pie",
        radius: [40, 150],
        roseType: "area",
        data: visitsNum.value,
      },
    ],
  };
  pieChartInstance.setOption(option);
}

onMounted(() => {
  initChart();
});
</script>

<style lang="scss" scoped>
.pie_chart_wrap {
  .pie_chart {
    width: 500px;
    height: 430px;
  }
}
</style>
