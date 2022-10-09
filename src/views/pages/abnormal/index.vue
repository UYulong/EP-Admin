<template>
  <div>
    <Result
      :title="status"
      :sub-title="subTitleMap[status]"
      :status="status"
    >
      <template #extra>
        <el-button
          type="primary"
          @click="goHome(status)"
        >
          Back
        </el-button>
      </template>
    </Result>
  </div>
</template>

<script lang="ts" setup name="AbnormalPage">
import Result from 'comps/result/index'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
// 计算路径中的状态
const status = computed(() => {
  const arr = route.path.split('/')
  return arr[arr.length - 1]
})

// 副标题
interface subTitleMapModel {
  [key: string]: string
}
const subTitleMap: subTitleMapModel = {
  '403': 'Sorry, you are not authorized to access this page.',
  '404': 'Sorry, the page you visited does not exist.',
  '500': 'Sorry, something went wrong.'
}

// 返回首页事件
const router = useRouter()
const goHome = (status: string): void => {
  router.push('/home')
}
</script>
