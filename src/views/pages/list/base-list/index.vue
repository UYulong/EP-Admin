<template>
  <!-- 基础列表 -->
  <div class="ep-container base-list">
    <el-card>
      <el-table 
        :data="tableData" 
        style="width: 100%"
        height="900"
        max-height="900"
      >
        <el-table-column
          label="序号"
          type="index"
          width="100"
          align="center"
        />
        <el-table-column 
          prop="name"
          label="姓名"
          align="center"
        />
        <el-table-column 
          label="技能栈"
          align="center"
          :filters="[
            { text: 'Vue', value: 'Vue' },
            { text: 'React', value: 'React' },
          ]"
          :filter-method="filterTag"
        >
          <template #default="{row}">
            <template 
              v-for="item in row.technology" 
              :key="item"
            >
              <el-tag :type="calcTagType()">
                {{ item }}
              </el-tag>
            </template>
          </template>
        </el-table-column>
        <el-table-column
          prop="desc"
          label="简介"
          align="center"
        />
        <el-table-column
          prop="date"
          label="录入日期"
          align="center"
          sortable
        />
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="BaseList">
import { getBaseListData } from 'apis/mock/list';
import { BaseListDataModel } from 'models/list';
import { Ref } from 'vue';

const tableData: Ref<BaseListDataModel[]> = ref([])

const getBaseList = async () => {
  const { data } = await getBaseListData()
  tableData.value = data
}

onMounted(() => {
  getBaseList()
})

// tag type list
const tagTypeList = ['success', 'info', 'warning', 'danger', '', 'info', 'danger', 'success', 'warning']
const calcTagType = ((): string => {
  return tagTypeList[Math.floor(Math.random() * 9)]
})

// 技能栈 筛选
const filterTag = (value: string, row: BaseListDataModel) => {
  return row.technology.includes(value)
}
</script>

<style lang="scss" scoped>
.base-list {
  .el-card {
    // height: 1200px;
    overflow: hidden;
    // height: calc(100vh - 105px);
  }

  .el-tag {
    margin-left: 5px;
  }
}
</style>
