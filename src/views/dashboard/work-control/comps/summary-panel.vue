<template>
  <!-- 工作进度汇总 -->
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="card-hader__text">工作进度</span>
        <el-link
          type="primary"
          :underline="false"
        >
          更多
        </el-link>
      </div>
    </template>

    <!-- 图表 -->
    <PieChart 
      width="450px" 
      height="360px"
      :data="chartData"
    />
  </el-card>
</template>

<script lang="ts" setup name='SummaryPanel'>
import { getOutputListData } from 'apis/mock/dashboard'; // api
import PieChart from 'comps/charts/pie.vue'; // 饼图-组件
import { PieDataModel } from 'models/dashboard';
import { Ref } from 'vue';

const chartData: Ref<PieDataModel[]> = ref([])

const getOutputList = async () => {
  const { data } = await getOutputListData()
  chartData.value = data
}

onMounted(() => {
  getOutputList()
})

</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card-hader__text {
    font-weight: 600;
  }
}
</style>