<template>
  <!-- wangEditor 富文本编辑器 -->
  <div class="editor">
    <el-card>
      <template #header>
        <div class="card-header">
          <p class="header-tips">
            <span class="title">
              wangEditor
            </span>
            <span class="subtitle">
              —— 可点击右侧 查看源码 按钮，查看wangEditor生成的内容源代码
            </span>
          </p>
          <el-button
            type="primary"
            @click="handlePreviewCodeEvent('preview')"
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
          <p class="header-tips">
            <span class="title">
              代码预览
            </span>
            <span class="subtitle">
              —— 可以在下方修改Html代码后，回显至上方富文本编辑器内,例如：
              <span>
                {{ '<p><span style="font-size: 24px; color: pink;">' + 'hello codemirror' + '</span></p>' }}
              </span>
            </span>
          </p>
          <el-button
            type="primary"
            @click="handlePreviewCodeEvent('code')"
          >
            查看效果
          </el-button>
        </div>
      </template>

      <Codemirror
        v-model="cmCode"
        phrases="de-de"
        :height="150"
        :disabled="false"
        language="html"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup name='EditorComps'>
import Editor from 'comps/editor/index.vue' // 富文本
import Codemirror from 'comps/code-mirror/index.vue'; // 代码展示最爱你

// editor value
const richCode = ref('')
// codemirror value
const cmCode = ref('')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    richCode.value = '<p>王牌飞行员申请出战</p>'
  }, 1500)
})

// 点击 查看源码 按钮
const handlePreviewCodeEvent = (v: string) => {
  if (v === 'code') {
    richCode.value = cmCode.value
  } else {
    cmCode.value = richCode.value
  }
}

</script>

<style lang="scss" scoped>
.editor {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-tips {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 16px;
        font-weight: bold;
        color: #303133;
      }

      .subtitle {
        font-size: 12px;
        margin-top: 10px;
        color: #909399;
      }
    }
  }

  .code-card {
    margin-top: 15px;
  }
}

.el-card {
  :deep(.el-card__header) {
    padding: 10px 20px;
  }
}
</style>
