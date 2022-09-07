<template>
  <!-- 部门简介 -->
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="card-hader__text">部门简介</span>
        <el-link
          type="primary"
          :underline="false"
        >
          更多
        </el-link>
      </div>
    </template>

    <div>
      <el-row>
        <el-col
          v-for="item in departmentList" 
          :key="item.name"
          :span="8"
        >
          <project-item :info="item" />
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script lang="ts" setup name='ProjectPanel'>
import { Ref } from 'vue';
import { getDepartmentListData } from '../../../../apis/mock/dashboard';
import { DepartmentListModel } from '../../../../models/dashboard';
import ProjectItem from './department-item';

const departmentList: Ref<DepartmentListModel[]> = ref([])

const getDepartmentList = async () => {
  const {data} = await getDepartmentListData()
  departmentList.value = data
}

onMounted(() => {
  getDepartmentList()
})

</script>

<style lang="scss" scoped>
.el-card {
  border: none;
  :deep(.el-card__header) {
    border-bottom: none;
  }

  :deep(.el-card__body) {
    padding: 0;
  }
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