<template>
  <!-- 其他列表 -->
  <div class="ep-container">
    <!-- 描述列表 -->
    <DescriptionsList />

    <!-- 无限滚动 -->
    <InfiniteList />
  </div>
</template>

<script lang="ts" setup name='OtherList'>
import DescriptionsList from './comps/descriptions-list.vue'; // 描述列表-组件
import InfiniteList from './comps/infinite-list.vue'; // 无限滚动列表
</script>