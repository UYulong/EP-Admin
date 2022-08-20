<template>
  <!-- 折线图 -->
  <div class="line_chart_wrap">
    <div ref="lineRef" class="line_chart"></div>
  </div>
</template>

<script lang="ts" setup name="LineChart">
import * as echarts from "echarts";

const lineRef = ref(null); // line chart dom reference
let lineChart: echarts.ECharts | null = null; // lineChart instance

const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"];

const option = {
  title: {
    text: "各端交易额",
    left: "center",
  },
  legend: {
    icon: "circle",
    top: "5%",
    right: "8%",
    itemWidth: 8,
    itemGap: 20,
    color: "#556677",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      label: {
        show: true,
        backgroundColor: "#fff",
        color: "#556677",
        borderColor: "rgba(0,0,0,0)",
        shadowColor: "rgba(0,0,0,0)",
        shadowOffsetY: 0,
      },
      lineStyle: {
        width: 0,
      },
    },
    backgroundColor: "#fff",
    color: "#5c6c7c",
    padding: [10, 10],
    extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
  },
  grid: {
    top: "15%",
  },
  xAxis: [
    {
      type: "category",
      data: ["北京", "上海", "广州", "深圳", "香港", "澳门", "台湾"],
      axisLine: {
        lineStyle: {
          color: "rgba(107,107,107,0.37)", //x轴颜色
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        color: "#999", //坐标轴字颜色
        margin: 15,
      },
      axisPointer: {
        label: {
          padding: [11, 5, 7],
          backgroundColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#fff", // 0% 处的颜色
              },
              {
                offset: 0.9,
                color: "#fff", // 0% 处的颜色
              },
              {
                offset: 0.9,
                color: "#33c0cd", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#33c0cd", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(107,107,107,0.37)", //y轴颜色
        },
      },
      axisLabel: {
        color: "#999",
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "毛利润",
      type: "line",
      data: [10, 10, 30, 12, 15, 3, 7],
      symbolSize: 1,
      symbol: "circle",
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#9effff",
          },
          {
            offset: 1,
            color: "#9E87FF",
          },
        ]),
        shadowColor: "rgba(158,135,255, 0.3)",
        shadowBlur: 10,
        shadowOffsetY: 20,
      },
      itemStyle: {
        color: colorList[0],
        borderColor: colorList[0],
      },
    },
    {
      name: "净利润",
      type: "line",
      data: [5, 12, 11, 14, 25, 16, 10],
      symbolSize: 1,
      symbol: "circle",
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: "#73DD39",
          },
          {
            offset: 1,
            color: "#73DDFF",
          },
        ]),
        shadowColor: "rgba(115,221,255, 0.3)",
        shadowBlur: 10,
        shadowOffsetY: 20,
      },
      itemStyle: {
        color: colorList[1],
        borderColor: colorList[1],
      },
    },
  ],
};

function initChart() {
  lineChart = echarts.init(lineRef.value as unknown as HTMLElement);
  lineChart.setOption(option);
}

onMounted(() => {
  initChart();
});

onBeforeUnmount(() => {
  if (lineChart) {
    lineChart.dispose();
  }
});
</script>

<style lang="scss" scoped>
.line_chart_wrap {
  .line_chart {
    width: 1050px;
    height: 430px;
  }
}
</style>
