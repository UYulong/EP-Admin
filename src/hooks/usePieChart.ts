import { Fn } from '@vueuse/core';
import type { EChartsOption } from 'echarts';
import echarts from 'utils/echarts';
import { Ref } from "vue";

export function usePieEcharts(elRef: Ref<HTMLDivElement>) {
  // 所需变量声明
  let chartInstance: echarts.ECharts | null = null
  let resizeFn: Fn = resize
  const cacheOptions = ref({}) as Ref<EChartsOption>
  let removeResizeFn: Fn = () => {}

  const getOptions = computed(() => {
    return {
      ...cacheOptions.value,
    } as EChartsOption;
  });

  // 初始化
  function initCharts() {
    const el = unref(elRef) // 获取dom元素

    // 如果dom元素不存在，则直接返回
    if (!el || !unref(el)) {
      return
    }

    // 开始实例化
    chartInstance = echarts.init(el)
  }

  // 设置数据
  function setOptions(option: EChartsOption, clear = true) {
    cacheOptions.value = option
    
    if (unref(elRef)?.offsetHeight === 0) {
      // 未设置高度
      return
    }

    nextTick(() => {
      if (!chartInstance) {
        initCharts()

        if (!chartInstance) return
      }

      clear && chartInstance?.clear()
      chartInstance?.setOption(unref(getOptions))
    })
  }

  // 设置自适应
  function resize() {
    chartInstance?.resize();
  }

  // 获取实例
  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  }

  // 销毁chart实例
  onUnmounted(() => {
    if (!chartInstance) return;
    removeResizeFn();
    chartInstance.dispose();
    chartInstance = null;
  });

  return {
    setOptions,
    resize,
    initCharts,
    getInstance
  }
}
