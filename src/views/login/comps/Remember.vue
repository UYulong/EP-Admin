<template>
  <!-- 记住密码 -->
  <div class="remember-me">
    <span>
      <el-checkbox v-model="isRemember" />
    </span>
    <span
      class="label-text"
      :class="{ active: isRemember }"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref, watch } from 'vue'

interface UserInfo {
  userName: string
  userPassword: string
  verificationCode: string
}

const storage = {
  get() {
    return JSON.parse(localStorage.getItem('Element-Admin_USERINFO')) || {}
  },
  set(info: string) {
    localStorage.setItem('Element-Admin_USERINFO', JSON.stringify(info))
  },
  remove() {
    localStorage.removeItem('Element-Admin_USERINFO')
  }
}

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    required: true
  },
})

const isRemember = ref(false)

onMounted(() => {
  const info = storage.get()
  if (Object.keys(info).length !== 0) {
    console.log(info);
    isRemember.value = true
  }
})

watch(isRemember, (newVal) => {
  if (newVal) {
    storage.set(props.userInfo)
  } else {
    storage.remove()
  }
})
</script>

<style lang="scss" scoped>
.remember-me {
  display: flex;
  align-items: center;

  .label-text {
    margin-left: 10px;
    font-size: 16px;
    color: #ccc;
  }

  .active {
    color: #fff;
  }
}
</style>