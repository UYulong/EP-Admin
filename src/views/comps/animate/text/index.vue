<template>
  <div class="ep-container">
    <!-- 文字滚动效果 -->
    <el-card class="text-card">
      <template #header>
        <div class="card-header">
          <span>文字滚动效果</span>
        </div>
      </template>

      <SeamlessScroll>
        <ul>
          <li
            v-for="item in listData"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </SeamlessScroll>
    </el-card>
  </div>
</template>

<script lang="ts" setup name='AniateText'>
import SeamlessScroll from 'comps/seamless-scroll'

const listData = reactive([
  '这里是第一行数据，没看错就是第一行。。。。。。。。。。。。。。。',
  '这里是第二行数据，没看错就是第二行。。。。。。。。。。。。。。。',
  '这里是第三行数据，没看错就是第三行。。。。。。。。。。。。。。。',
  '这里是第四行数据，没看错就是第四行。。。。。。。。。。。。。。。',
  '这里是第五行数据，没看错就是第五行。。。。。。。。。。。。。。。',
  '这里是第六行数据，没看错就是第六行。。。。。。。。。。。。。。。',
  '这里是第七行数据，没看错就是第七行。。。。。。。。。。。。。。。'
])
</script>

<style lang="scss" scoped>
.text-card {
  width: 600px;
  height: 350px;

  ul {
    background-color: red;
    li {
      white-space: nowrap;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
