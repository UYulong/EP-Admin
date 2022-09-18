<template>
  <el-card
    class="other-list__infinite-list"
    shadow="never"
  >
    <template #header>
      <div class="card-header">
        <span>无限滚动列表</span>
      </div>
    </template>

    <div
      class="infinite-list-wrapper"
      style="overflow: auto"
    >
      <ul
        v-infinite-scroll="load"
        class="list"
        :infinite-scroll-disabled="disabled"
      >
        <li
          v-for="i in count"
          :key="i"
          class="list-item"
        >
          {{ i }}
        </li>
      </ul>

      <p
        v-if="loading"
        class="infinite-list__placeholder-text"
      >
        正在加载中...
      </p>
      <p
        v-if="noMore"
        class="infinite-list__placeholder-text"
      >
        暂无更多
      </p>
    </div>
  </el-card>
</template>

<script lang="ts" setup name='InfiniteList'>
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 50)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 5
    loading.value = false
  }, 1200)
}
</script>

<style lang="scss" scoped>
.other-list__infinite-list {
  margin-top: 20px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
  }

  .infinite-list-wrapper {
    height: 600px;
    text-align: center;

    .infinite-list__placeholder-text {
      margin-top: 10px;
    }
  }

  .infinite-list-wrapper .list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .infinite-list-wrapper .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }

  .infinite-list-wrapper .list-item + .list-item {
    margin-top: 10px;
  }
}
</style>