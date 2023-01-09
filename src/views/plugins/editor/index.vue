<template>
  <!-- wangEditor 富文本编辑器 -->
  <div class="editor">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>wangEditor</span>
          <el-button
            type="primary"
            @click="handlePreviewCodeEvent"
          >
            查看源码
          </el-button>
        </div>
      </template>

      <!-- 编辑器 -->
      <Editor v-model="richCode" />
    </el-card>

    <el-card class="code-card">
      <template #header>
        <div class="card-header">
          <span>代码预览 —— 可以在下方修改Html代码后，回显至上方富文本编辑器内</span>
          <el-button
            type="primary"
            @click="handlePreviewCodeEvent"
          >
            查看效果
          </el-button>
        </div>
      </template>

      <el-input
        v-model="richCode"
        type="textarea"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup name='EditorComps'>
import Editor from 'comps/editor/index.vue'

// 富文本绑定内容
const richCode = ref('')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    richCode.value = '<p>王牌飞行员申请出战</p>'
  }, 1500)
})

// 点击 查看源码 按钮
const handlePreviewCodeEvent = () => {
  console.log(11);
}

</script>

<style lang="scss" scoped>
.editor {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .code-card {
    margin-top: 15px;
  }
}
</style>
