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

    <div>1</div>
  </el-card>
</template>

<script lang="ts" setup name='SummaryPanel'>

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