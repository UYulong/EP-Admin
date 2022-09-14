<template>
  <!-- 找回密码 -->
  <p
    class="retrieve-password"
    @click="handleRetrieveEvent"
  >
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const handleRetrieveEvent = () => {
  ElMessage({
    message: '您已成功找回密码！.',
    type: 'success',
  })
}
</script>

<style lang="scss" scoped>
.retrieve-password {
  color: #ccc;
  cursor: pointer;
}
</style>