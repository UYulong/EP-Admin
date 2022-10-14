<template>
  <!-- Code Mirror 代码展示 -->
  <codemirror
    v-model="codeHTML"
    placeholder="Code goes here..."
    :style="{ height: '35px' }"
    :tab-size="2"
    :extensions="extensions"
    :disabled="true"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script lang="ts" setup name='CodeMirror'>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

// const code = ref('console.log(123)')
const extensions = [javascript(), oneDark]

// 对 Codemirror 实例的引用
const view = shallowRef()
const handleReady = (payload: any) => {
  view.value = payload.view
}

// 要显示的代码片段
const props = defineProps<{
  code: string
}>()
const codeHTML = computed(() => {
  return props.code
})

// 打印事件参数
const log = console.log
</script>
