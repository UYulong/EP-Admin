<template>
  <!-- 快捷导航面板 -->
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="card-hader__text">快捷导航</span>
        <el-link
          type="primary"
          :underline="false"
        >
          其它
        </el-link>
      </div>
    </template>

    <el-row>
      <el-col
        v-for="item in navsListData"
        :key="item.name"
        :span="8"
      >
        <nav-list :info="item" />
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup name='NavPanel'>
import { NavModel } from 'models/dashboard';
import { Ref } from 'vue';
import NavList from './nav-list.vue';

const navsListData: Ref<NavModel[]> = ref([
  {
    icon: 'Stopwatch',
    color: '#ff7875',
    name: '主控台',
  },
  {
    icon: 'FolderChecked',
    color: '#69c0ff',
    name: '组件',
  },
  {
    icon: 'Document',
    color: '#ffc069',
    name: '表单',
  },
  {
    icon: 'Picture',
    color: '#b37feb',
    name: '图片上传',
  },
  {
    icon: 'ScaleToOriginal',
    color: '#ff85c0',
    name: '帮助文档',
  },
  {
    icon: 'Setting',
    color: '#5cdbd3',
    name: '系统管理',
  }
])
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