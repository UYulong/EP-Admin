<template>
  <!-- Result Component -->
  <div class="result-container">
    <!-- 插画图标 -->
    <div>
      <Svgs :status="status" />
    </div>

    <!-- 标题 -->
    <div class="result-title">
      <slot v-if="title" name="title">
        <p>{{ title }}</p>
      </slot>
    </div>

    <!-- 副标题 -->
    <div class="result-sub-title">
      <slot v-if="subTitle" name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>

    <!-- 操作按钮 -->
    <div class="result-btn">
      <slot v-if="$slots.extra" name="extra">
        {{ $slots.extra() }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup name="Result">
import Svgs from './template-svgs.vue'

interface resultPropsModel {
  status: string
  subTitle: string
  title: string
}
defineProps<resultPropsModel>()
</script>

<style lang="scss" scoped>
.result-container {
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;

  .result-title {
    margin-top: 20px;

    p {
      font-size: 22px;
      color: rgb(48, 49, 51);
      font-weight: 400;
      height: 26px;
      line-height: 26px;
      text-align: center;
    }
  }

  .result-sub-title {
    margin-top: 20px;

    p {
      color: rgb(96, 98, 102);
      font-size: 14px;
      font-weight: 400;
      height: 18px;
      line-height: 18px;
      text-align: center;
    }
  }

  .result-btn {
    margin-top: 15px;
  }
}
</style>
