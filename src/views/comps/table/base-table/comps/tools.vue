<template>
  <!-- 表格顶部操作项 -->
  <div class="table-tools__settings">
    <div>当数据量动态变化时，可以通过设置table的最大高度，来显示滚动条。</div>
    <div class="table-tools__tools-box">
      <!-- 刷新 -->
      <el-tooltip
        effect="dark"
        content="刷新数据"
        placement="top"
      >
        <el-icon
          style="margin-right: 15px; cursor: pointer"
          :size="20"
          @click="handleOnRefresh"
        >
          <Refresh />
        </el-icon>
      </el-tooltip>

      <!-- 表格间距 -->
      <el-dropdown
        placement="bottom-end"
        trigger="click"
        @command="handleCommandEvent"
      >
        <span>
          <el-icon
            :size="20"
            style="margin-right: 15px; cursor: pointer"
          >
            <Magnet />
          </el-icon>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              command="large"
              :style="{ color: tableSize === 'large' ? '#79bbff' : '' }"
            >
              宽松
            </el-dropdown-item>
            <el-dropdown-item
              command="default"
              :style="{ color: tableSize === 'default' ? '#79bbff' : '' }"
            >
              默认
            </el-dropdown-item>
            <el-dropdown-item
              command="small"
              :style="{ color: tableSize === 'small' ? '#79bbff' : '' }"
            >
              紧凑
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 表格排列 -->
      <el-dropdown
        placement="bottom-end"
        trigger="click"
      >
        <span>
          <el-tooltip
            effect="dark"
            content="表格设置"
            placement="top"
          >
            <el-icon
              :size="20"
              style="margin-right: 15px; cursor: pointer"
            >
              <Setting />
            </el-icon>
          </el-tooltip>
        </span>

        <template #dropdown>
          <div :style="{ width: '240px', padding: '8px 0' }">
            <!-- 序号、多选、重置区域 -->
            <div class="table-tools__control-container">
              <div class="checkbox-container">
                <el-checkbox
                  v-model="tableIsEnableIndex"
                  label="序号列"
                  size="small"
                />
                <el-checkbox
                  v-model="tableIsEnableCheck"
                  label="勾选列"
                  size="small"
                />
              </div>
              <el-button
                type="primary"
                link
                @click="handleResetTableEvent"
              >
                重置
              </el-button>
            </div>
            <draggable
              item-key="id"
              ghost-class="_ghost"
              chosen-class="_chosenClass"
              animation="300"
              handle=".move"
              :list="tableHeaderItems"
            >
              <template #item="{ element }">
                <div class="_drag-item move">
                  <div>
                    <span class="move">
                      <el-icon :size="18"><Aim /></el-icon>
                    </span>
                    <span class="_drag_item__checkbox">
                      <el-checkbox
                        v-model="element.isShow"
                        :label="element.label"
                      />
                    </span>
                  </div>
                  <div>123</div>
                </div>
              </template>
            </draggable>
          </div>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup name="TableTools">
import { storeToRefs } from 'pinia'
import useSetTable from 'store/modules/table'
import draggable from 'vuedraggable'

const tableStore = useSetTable()
const { tableSize, tableHeaderItems, tableIsEnableIndex, tableIsEnableCheck } =
  storeToRefs(tableStore)

// 工具栏--点击刷新
const handleOnRefresh = () => {
  tableStore.getBasicTableList()
}

// 工具栏--点击调整表格间距
const handleCommandEvent = (command: string | number | object) => {
  tableStore.setTableSize(command as string)
}

// 工具栏--调整列 重置
const handleResetTableEvent = () => {
  tableStore.resetTable()
}
</script>

<style lang="scss" scoped>
.table-tools__settings {
  display: flex;
  justify-content: space-between;
  color: #606266;

  .table-tools__tools-box {
    .table-tools__tools-icon {
      cursor: pointer;
    }
  }
}

// 间距设置激活样式
.active {
  color: aqua;
}

// 表格设置样式
.table-tools__control-container {
  padding: 5px 14px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;

  .el-checkbox {
    margin-right: 15px;
  }
}

// 拖拽样式
._drag-item {
  color: #606266;
  font-size: 14px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

._drag_item__checkbox {
  margin-left: 12px;
}
._drag-item {
  .move:hover {
    cursor: move;
  }
}
._drag-item + ._drag-item {
  margin-top: 10px;
}
._ghost {
  border: solid 1px rgb(19, 41, 239);
}
._chosenClass {
  background-color: #f1f1f1;
}
</style>
