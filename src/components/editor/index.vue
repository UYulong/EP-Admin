<template>
  <!-- wangEditor 富文本编辑器 -->
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="valueHtml"
      :style="editorStyle"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
    />
  </div>
</template>

<script lang="ts" setup name='Editor'>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor, IToolbarConfig } from '@wangeditor/editor'

interface propsModle {
  modelValue: string
  height?: number
}

// 事件定义
const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

// 定义接收的props
const props = withDefaults(defineProps<propsModle>(), {
  modelValue: '<h1>hello editor</h1>',
  height: 400
})

// 富文本框样式
const editorStyle = reactive({
  height: props.height + 'px',
  overflowY: 'hidden'
})

/* 富文本编辑器 */
const editorRef = shallowRef() // editor instance

// 内容显示
const valueHtml = computed({
  get() {
    return props.modelValue
  },

  set(v) {
    emit('update:modelValue', v)
  }
})

// 模式 default | sample
const mode = 'default'

// 工具栏配置
const toolbarConfig: Partial<IToolbarConfig> = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style lang="scss" scoped>
.editor {
  .rich-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .code-card {
    margin-top: 15px;
  }
}
</style>
