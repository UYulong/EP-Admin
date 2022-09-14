<template>
  <div
    ref="chartRef"
    :style="{width, height}"
  />
</template>

<script lang="ts" setup name='CommonPieChart'>
import { usePieEcharts } from 'hooks/usePieChart';
import { PieDataModel } from 'models/dashboard';
import { Ref } from 'vue';

interface EChartsDomModel {
  width: string,
  height: string,
  data: Array<PieDataModel>
}

const chartRef = ref<HTMLDivElement | null>(null) // 设置 dom 引用

const { setOptions } = usePieEcharts(chartRef as Ref<HTMLDivElement>)

// props - 接收dom宽度和高度
const props = defineProps<EChartsDomModel>()

onMounted(() => {
  setOptions({
    title: {
      text: '',
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
})

watch(() => props.data, () => {
  setOptions({
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "产出值",
        type: "pie",
        radius: [40, 150],
        roseType: "area",
        data: props.data,
      },
    ],
  }, true)
})
</script>