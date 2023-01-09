<template>
  <!-- wangEditor 富文本编辑器 -->
  <div class="editor">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>富文本编辑器 —— wangEditor</span>
          <el-button type="primary">
            查看源码
          </el-button>
        </div>
      </template>

      <!-- 编辑器 -->
      <div style="border: 1px solid #ccc">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :default-config="toolbarConfig"
          :mode="mode"
        />
        <Editor
          v-model="valueHtml"
          style="height: 500px; overflow-y: hidden;"
          :default-config="editorConfig"
          :mode="mode"
          @on-created="handleCreated"
        />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name='Editor'>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor, IToolbarConfig } from '@wangeditor/editor'
import { DomEditor } from '@wangeditor/editor'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const mode = 'default'

// 模拟 ajax 异步获取内容
onMounted(() => {
        setTimeout(() => {
            valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
        }, 1500)
})

// 工具栏配置
const toolbarConfig: Partial<IToolbarConfig> = {

}

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


const toolbar = DomEditor.getToolbar(editorRef.value)

const curToolbarConfig = toolbar?.getConfig()
console.log( curToolbarConfig?.toolbarKeys ) // 当前菜单排序和分组
</script>

<style lang="scss" scoped>
.editor {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
