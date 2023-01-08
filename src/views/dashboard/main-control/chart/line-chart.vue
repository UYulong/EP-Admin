<template>
  <!-- 折线图 -->
  <div
    ref="chartRef"
    :style="{width, height}"
  />
</template>

<script lang="ts" setup name="LineChart">
import * as echarts from "echarts";
import { usePieEcharts } from "hooks/usePieChart";
import { LineDataModel } from "models/dashboard";
import { Ref } from "vue";

const props = defineProps<{
  lineData: LineDataModel
  width: string
  height: string
}>()

const chartRef = ref<HTMLDivElement | null>(null) // 设置 dom 引用

let chartData = ref({} as Ref<LineDataModel>) // 图表所需数据

const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"];

const { setOptions, getInstance } = usePieEcharts(chartRef as Ref<HTMLDivElement>)


watch(() => props.lineData, () => {
  if (props.lineData.xAxisData) {
    chartData.value = props.lineData

    const { desc, xAxisData, yAxisData } = props.lineData

    const instance = getInstance()

    // update
    instance?.setOption({
      title: {
        text: desc
      },
      xAxis: [
        {
          data: xAxisData,
        }
      ],

      series: [
        {
          data: yAxisData.NetProfit
        },
        {
          data: yAxisData.salesVolume
        }
      ]
    })
  }
})

// 初始化设置
setOptions({
  title: {
    text: '本日交易额统计',
    left: "center",
  },
  legend: {
    icon: "circle",
    top: "5%",
    right: "8%",
    itemWidth: 8,
    itemGap: 20,
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
    padding: [10, 10],
    extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
  },
  grid: {
    top: "15%",
  },
  xAxis: [
    {
      type: "category",
      data: [],
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
          padding: [11, 5, 7]
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
      zlevel: 1,
      z: 1,
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
      zlevel: 1,
      z: 1,
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
})
</script>

<style lang="scss" scoped>
.line_chart_wrap {
  .line_chart {
    width: 1050px;
    height: 430px;
  }
}
</style>
