<template>
  <div class="pie_chart_wrap">
    <div ref="pieRef" class="pie_chart"></div>
  </div>
</template>

<script lang="ts" setup name="PieChart">
import * as echarts from "echarts";

interface PieChartDataModel {
  value: number;
  name: string;
}

interface PieDataModel {
  desc: string;
  data: PieChartDataModel[];
}

const props = defineProps<{
  pieData: PieDataModel;
}>();

// pie chart render datas
let visitsNum = ref([]);
const pieRef = ref(null); // pie chart dom reference
let pieChart: echarts.ECharts | null = null; // chart instance

watchEffect(() => {
  // console.log(props.pieData);
  if (props.pieData.data) {
    visitsNum.value = props.pieData.data;
    console.log(visitsNum.value);

    pieChart.setOption({
      series: [
        {
          name: props.pieData.desc,
          data: visitsNum.value,
        },
      ],
    });
  }
});

function initChart() {
  pieChart = echarts.init(pieRef.value as unknown as HTMLElement);
  const option = {
    title: {
      text: "各端访问量",
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
  pieChart.setOption(option);
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
