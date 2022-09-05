<template>
  <!-- 最新动态 -->
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="card-hader__text">最新动态</span>
        <el-link
          type="primary"
          :underline="false"
        >
          更多
        </el-link>
      </div>
    </template>

    <el-scrollbar max-height="400px">
      <template 
        v-for="(item, index) in newsListData" 
        :key="item.time"
      >
        <news-list 
          :info="item"
          :idx="index"
          :length="newsListData.length" 
        />
      </template>
    </el-scrollbar>
  </el-card>
</template>

<script lang="ts" setup name='LatestNews'>
import { Ref } from 'vue';
import { getNewsListData } from '../../../../apis/mock/dashboard'; // API
import { NewsListModel } from '../../model/dashboard';
import NewsList from './news-list'; // 动态列表-组件

const newsListData: Ref<NewsListModel[]> = ref([])

const getNewsList = async () => {
  const {data}= await getNewsListData()
  newsListData.value = data
}

onMounted(() => {
  getNewsList()
})
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;

  :deep(.el-card__body) {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
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