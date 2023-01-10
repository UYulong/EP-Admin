<template>
  <div class="ep-container">
    <!-- 文字滚动效果 -->
    <el-card class="text-card">
      <template #header>
        <div class="card-header">
          <p>文字滚动效果</p>
          <p>
            <el-button
              type="danger"
              size="small"
              @click="handleTextEvent('pause')"
            >
              {{ isPaused ? '开 始' : '暂 停' }}
            </el-button>
            <el-button
              type="success"
              size="small"
              @click="handleTextEvent('reverse')"
            >
              向{{ isReverse ? '左' : '右' }}滚动
            </el-button>
          </p>
        </div>
      </template>

      <MarqueeText
        :paused="isPaused"
        :reverse="isReverse"
        @mouseenter="handleMouseEnterEvent"
        @mouseleave="handleMouseLeaveEvent"
      >
        <ul>
          <li
            v-for="item in listData"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </MarqueeText>
    </el-card>
  </div>
</template>

<script lang="ts" setup name='AniateText'>
import MarqueeText from 'vue-marquee-text-component'

// text data
let listData = reactive([
  '这里是第一行数据，没看错就是第一行。。。。。。。。。。。。。。。',
  '这里是第二行数据，没看错就是第二行。。。。。。。。。。。。。。。',
  '这里是第三行数据，没看错就是第三行。。。。。。。。。。。。。。。',
  '这里是第四行数据，没看错就是第四行。。。。。。。。。。。。。。。',
  '这里是第五行数据，没看错就是第五行。。。。。。。。。。。。。。。',
  '这里是第六行数据，没看错就是第六行。。。。。。。。。。。。。。。',
  '这里是第七行数据，没看错就是第七行。。。。。。。。。。。。。。。'
])

// is pause
const isPaused = ref(true)
// is reverse
const isReverse = ref(false)

// handle evnet
const handleTextEvent = (v: string) => {
  if (v === 'pause') {
    isPaused.value = !isPaused.value
  } else if (v === 'reverse') {
    isReverse.value = !isReverse.value
  }
}

// mouseenter event
const handleMouseEnterEvent = () => {
  isPaused.value = true
}
// mouseleave event
const handleMouseLeaveEvent = () => {
  isPaused.value = false
}
</script>

<style lang="scss" scoped>
.text-card {
  width: 600px;
  height: 350px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    li {
      white-space: nowrap;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
