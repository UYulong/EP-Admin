<template>
  <!-- 拖拽列表 -->
  <div class="ep-container drag-list">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span class="card-header__text">
                上下拖动
              </span>
              <el-button 
                type="primary"
                link
                @click="handleRestoreEvent('upAndDown')"
              >
                还原
              </el-button>
            </div>
          </template>

          <!-- 拖动区域 -->
          <DragUpAndDown v-model="poemsSnowSourceList" />

          <!-- 分界线 -->
          <el-divider>
            <el-icon class="drag-list__divider">
              <star-filled />
            </el-icon>
          </el-divider>

          <!-- 反显数据格式 -->
          <div class="drag-list__source-data">
            <ul>
              <li 
                v-for="(item, index) in poemsSnowSourceList" 
                :key="item.id"
              >
                <span class="drag-list__list-index">
                  {{ index + 1 }}  |
                </span> 
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>

      <!-- 左右拖动 -->
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span class="card-header__text">
                左右拖动
              </span>
              <el-button 
                type="primary"
                link
                @click="handleRestoreEvent('leftAndRight')"
              >
                还原
              </el-button>
            </div>
          </template>

          <!-- 拖动区域 -->
          <DragLeftAndRight 
            v-model:left="poemsLeftSourceData" 
            v-model:right="poemsRightSourceData" 
          />
          
          <!-- 分界线 -->
          <el-divider>
            <el-icon class="drag-list__divider">
              <star-filled />
            </el-icon>
          </el-divider>

          <!-- 反显数据格式 -->
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="drag-list__source-data">
                <ul>
                  <li 
                    v-for="(item, index) in poemsLeftSourceData" 
                    :key="item.id"
                  >
                    <span class="drag-list__list-index">
                      {{ index + 1 }}  |
                    </span> 
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="drag-list__source-data">
                <ul>
                  <li 
                    v-for="(item, index) in poemsRightSourceData" 
                    :key="item.id"
                  >
                    <span class="drag-list__list-index">
                      {{ index + 1 }}  |
                    </span> 
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name='DragList'>
import DragLeftAndRight from './comps/left-right.vue'; // 左右拖拽-组件
import DragUpAndDown from './comps/up-down.vue'; // 上下拖动-组件
import { useDragList } from './use-drag-list';

const {
  poemsSnowSourceList,
  poemsLeftSourceData,
  poemsRightSourceData,
  handleRestoreEvent
} = useDragList()

</script>

<style lang="scss" scoped>
.drag-list {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card-header__text {
      font-weight: 600;
    }
  }

  .drag-list__divider {
    color: #ff4d4f;
  }
  .drag-list__source-data {
    border-radius: 3px;
    background-color: #292c33;
    color: #fff;
    padding: 15px 20px;
    user-select: none;

    ul {
      li {
        height: 30px;
      }
    }

    .drag-list__list-index {
      margin-right: 10px;
    }
    
  }
}
</style>