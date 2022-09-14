<template>
  <div
    ref="pieChartRef"
    :style="{width, height}"
  />
</template>

<script lang="ts" setup name="PieChart">
import { usePieEcharts } from "hooks/usePieChart";
import { PieChartDataModel } from "models/dashboard";
import { Ref } from "vue";

const props = defineProps<{
  pieData: PieChartDataModel;
  width: string
  height: string
}>();

// 饼图--dom引用
const pieChartRef = ref<HTMLDivElement | null>(null)
// 饼图--hooks
const { setOptions, getInstance } = usePieEcharts(pieChartRef as Ref<HTMLDivElement>)

// pie chart render datas
watchEffect(() => {
  if (props.pieData.data && props.pieData.data.length !== 0) {
    const {data, desc} = props.pieData
    const instance = getInstance()

    instance?.setOption({
      title: {
        text: desc
      },

      series: [
        {
          data: data
        }
      ]
    })
   
  }
});

// 初始化配置
setOptions({
  title: {
    text: '本日用户活跃数量',
    left: 'center',
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
      data: [],
    },
  ],
})
</script>

<style lang="scss" scoped>
.pie_chart_wrap {
  .pie_chart {
    width: 500px;
    height: 430px;
  }
}
</style>
