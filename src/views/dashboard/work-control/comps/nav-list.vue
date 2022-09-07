<template>
  <!-- 快捷导航列表 -->
  <div 
    class="nav-list" 
    @click="handleJumpPageEvent(info.name)"
  >
    <!-- 图标 -->
    <p class="nav-list__icon">
      <el-icon :color="info.color">
        <component :is="info.icon" />
      </el-icon>
    </p>

    <!-- 名称 -->
    <p class="nav-list__name">
      {{ info.name }}
    </p>
  </div>
</template>

<script lang="ts" setup name='NavList'>
import { useRouter } from 'vue-router';
import { NavModel, routeObjModel } from '../../../../models/dashboard';

defineProps<{
  info: NavModel
}>()

const router = useRouter()

const routeObj: routeObjModel = {
  '主控台': 'home',
  '组件': 'comps/table',
  '表单': 'form/baseForm',
  '图片上传': 'comps/upload',
  '帮助文档': 'docs/index',
  '系统管理': 'system/index',
}

// 处理跳转事件
const handleJumpPageEvent = (name: string) => {
  router.push(routeObj[name])
}

</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border: 1px solid #ebeef5;
  border-right: none;
  border-bottom: none;
  cursor: pointer;

  &:hover {
    box-shadow: var(--el-box-shadow-dark);
  }

  .nav-list__icon {
    font-size: 22px;
    color: red;
  }

  .nav-list__name {
    color: #606266;
    margin-top: 7px;
  }
}
</style>