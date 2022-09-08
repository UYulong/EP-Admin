<template>
  <!-- 拖拽列表 -->
  <div class="ep-container drag-list">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>上下拖动</span>
            </div>
          </template>

          <!-- 拖动区域 -->
          <DragUpAndDown v-model="sourceList" />

          <el-divider>
            <el-icon class="drag-list__divider"><star-filled /></el-icon>
          </el-divider>

          <!-- 数据格式 -->
          <div class="drag-list__source-data">
            <ul>
              <li 
                v-for="(item, index) in sourceList" 
                :key="item.id"
              >
                <span class="drag-list__list-index">{{ index + 1 }}  |</span> 
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>

      <!-- 左右拖动 -->
      <el-col :span="12">
        左右拖动
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name='DragList'>
import DragUpAndDown from './comps/up-down.vue';

const sourceList = ref([
  {
    id: 0,
    name: '独立寒秋，湘江北去，橘子洲头。'
  },
  {
    id: 1,
    name: '看万山红遍，层林尽染；漫江碧透，百舸争流。'
  },
  {
    id: 2,
    name: '鹰击长空，鱼翔浅底，万类霜天竞自由。'
  },
  {
    id: 3,
    name: '怅寥廓，问苍茫大地，谁主沉浮？'
  },
  {
    id: 4,
    name: '携来百侣曾游，忆往昔峥嵘岁月稠。'
  },
  {
    id: 5,
    name: '恰同学少年，风华正茂；书生意气，挥斥方遒。'
  },
  {
    id: 6,
    name: '指点江山，激扬文字，粪土当年万户侯。'
  },
  {
    id: 7,
    name: '曾记否，到中流击水，浪遏飞舟？'
  },
])
</script>

<style lang="scss" scoped>
.drag-list {

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