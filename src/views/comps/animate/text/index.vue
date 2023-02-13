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

      <!-- 文字滚动 -->
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

      <!-- 测试文字长度 -->
      <div
        ref="divRef"
        class="box"
      >
        <span
          ref="spanRef"
          class="text"
        >
          1231231231231323sdfsdfsfsdfsfsfsdfsdfsfsfsd1231313哈哈哈哈哈哈哈
        </span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name='AniateText'>
import MarqueeText from 'vue-marquee-text-component'

// text data
let listData = reactive([
  '这里是第一行数据，没看错就是第一行。。。。。。。。。。。。。。。',
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

/* 文字长短判断 */
const divRef = ref<HTMLDivElement | null>(null)
const spanRef = ref<HTMLSpanElement | null>(null)
nextTick(() => {
  const divWidth = divRef.value?.offsetWidth
  const spanWidth = spanRef.value?.offsetWidth
  // console.log('div width:', divWidth);

  // console.log('span width:', spanWidth);

  // console.log('compare:', divWidth! > spanWidth!);

})

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

.box {
  width: 300px;
  height: 130px;
  background-color: gray;

  .text {
    white-space: nowrap
  }
}
</style>
