<template>
  <!-- 基础表格 -->
  <div class="ep-conainer basic-table">
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <span>基础表格</span>
          <el-button
            type="primary"
            link
            @click="handleOnAddItem"
          >
            增加
          </el-button>
        </div>
      </template>

      <!-- 表格设置项 -->
      <Tools />

      <!-- 表格 -->
      <div class="basic-table__talbe-contaienr">
        <el-table
          ref="basicTableRef"
          style="width: 100%"
          max-height="660"
          :size="tableSize"
          :data="basicTableData"
        >
          <el-table-column
            v-if="tableIsEnableCheck"
            type="selection"
            label="选择"
            width="100"
            align="center"
          />
          <el-table-column
            v-if="tableIsEnableIndex"
            type="index"
            label="序号"
            width="100"
            align="center"
          />

          <template v-for="item in tableHeaderItems">
            <el-table-column
              v-if="item.isShow"
              :key="item.label"
              :prop="item.prop"
              :label="item.label"
              :width="item.width ? item.width : ''"
              align="center"
            />
          </template>

          <el-table-column
            fixed="right"
            label="Operations"
            align="center"
          >
            <template #default="scope">
              <el-button
                link
                type="primary"
                size="small"
                @click.prevent="handleDeleteRow(scope.$index)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="BasicTable">
import dayjs from 'dayjs'
import { ElTable } from 'element-plus'
import { storeToRefs } from 'pinia'
import useSetTable from 'store/modules/table'
import Tools from './comps/tools.vue' // 工具-组件

const tableStore = useSetTable()
const {
  basicTableData,
  tableSize,
  tableHeaderItems,
  tableIsEnableIndex,
  tableIsEnableCheck,
  clearChecked
} = storeToRefs(tableStore)

/* 表格数据处理 */
// 获取初始化数据
onMounted(() => {
  tableStore.getBasicTableList()
})
// 新增
const handleOnAddItem = () => {
  const now = new Date()
  now.setDate(now.getDate() + 1)
  const item = {
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
  tableStore.addItem(item)
}
// 删除
const handleDeleteRow = (index: number) => {
  tableStore.deleteRow(index)
}

/* 置空 */
const basicTableRef = ref<InstanceType<typeof ElTable>>()
// 勾选列是否置空
watchEffect(() => {
  if (clearChecked.value) {
    basicTableRef.value!.clearSelection() // 勾选列要清空
  }
})
</script>

<style lang="scss" scoped>
@import 'styles/mixins.scss';

.basic-table {
  .el-card {
    @include card-header();
  }

  .basic-table__talbe-contaienr {
    margin-top: 30px;
  }
}
</style>
