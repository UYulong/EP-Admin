<template>
  <el-card
    class="box-card"
    shadow="never"
    style="margin-top: 20px;"
  >
    <template #header>
      <div class="card-header">
        <span>Vue3 AutoCounter</span>

        <!-- 数字动画控制 -->
        <div>
          <el-button
            type="success"
            size="small"
            @click="handleEvent('start')"
          >
            开始
          </el-button>

          <el-button
            type="danger"
            size="small"
            @click="handleEvent('pause')"
          >
            暂停
          </el-button>

          <el-button
            type="primary"
            size="small"
            @click="handleEvent('resume')"
          >
            继续
          </el-button>

          <el-button
            type="warning"
            size="small"
            @click="handleEvent('reset')"
          >
            重置
          </el-button>
        </div>
      </div>
    </template>

    <!-- 代码块展示 -->
    <div class="code-box">
      <CodeMirror
        v-model="codeHTML"
        :height="35"
      />
    </div>

    <!-- 数字动画 -->
    <div class="count">
      <vue3-autocounter
        ref="counterRef"
        :start-amount="countForm.startAmount"
        :end-amount="countForm.endAmount"
        :duration="countForm.duration"
        :prefix="countForm.prefix"
        :suffix="countForm.suffix"
        :separator="countForm.separator"
        :decimal-separator="countForm.decimalsSeparator"
        :decimals="countForm.decimals"
        :autoinit="countForm.autoinit"
      />
    </div>

    <!-- 信息输入 -->
    <el-form
      :inline="true"
      :model="countForm"
      label-width="100px"
    >
      <el-row>
        <el-col :span="6">
          <el-form-item label="起始值">
            <el-input-number
              v-model="countForm.startAmount"
              placeholder="请输入起始值"
              controls-position="right"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="结束值">
            <el-input-number
              v-model="countForm.endAmount"
              placeholder="请输入结束值"
              controls-position="right"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="过度时长(s)">
            <el-input-number
              v-model="countForm.duration"
              placeholder="请输入过度时长"
              controls-position="right"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="小数位">
            <el-input-number
              v-model="countForm.decimals"
              placeholder="请输入小数位"
              controls-position="right"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="小数分隔符">
            <el-input
              v-model="countForm.decimalsSeparator"
              placeholder="请输入小数分隔符"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="前缀">
            <el-input
              v-model="countForm.prefix"
              placeholder="请输入前缀字符"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="尾缀">
            <el-input
              v-model="countForm.suffix"
              placeholder="请输入尾缀"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="分隔符">
            <el-input
              v-model="countForm.separator"
              placeholder="请输入分隔符"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup name='AutoCount'>
import Vue3Autocounter from 'vue3-autocounter';
import CodeMirror from 'comps/code-mirror/index.vue'

const countForm = ref({
  startAmount: 0,
  endAmount: 2022,
  duration: 3,
  prefix: '',
  suffix: '',
  separator: '',
  decimals: 0,
  decimalsSeparator: '',
  autoinit: false
})

const counterRef: any = ref(null)
// 动画开始事件
const handleEvent = (ev: string) => {
  switch (ev) {
    case 'start':
      counterRef.value.start();
      break;
    case 'pause':
      counterRef.value.pause();
      break;
    case 'resume':
      counterRef.value.resume();
      break;
    default:
      counterRef.value.reset();
      resetForm()
  }
}

// 表单重置
const resetForm = () => {
  countForm.value.startAmount = 0
  countForm.value.endAmount = 2022
  countForm.value.duration = 3
  countForm.value.prefix = ''
  countForm.value.suffix = ''
  countForm.value.separator = ''
  countForm.value.decimals = 0
  countForm.value.decimalsSeparator = ''
}

// 代码展示
const codeHTML = computed(() => {
  return `<vue3-autocounter ref="counterRef" :start-amount="${countForm.value.startAmount}" :end-amount="${countForm.value.endAmount}" :duration="${countForm.value.duration}" :prefix="${countForm.value.prefix}" :suffix="${countForm.value.suffix}" :separator="${countForm.value.separator}" :decimal-separator="${countForm.value.decimalsSeparator}" :decimals="${countForm.value.decimals}" :autoinit="${countForm.value.autoinit}" />`
})

</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.count {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 70px;
  margin-bottom: 20px;
}

.code-box {
  height: 30px;
  // background-color: #212936;
  // border-radius: 4px;

  .code-html {
    height: 30px;
    line-height: 30px;
  }
}

.btns {
  margin: 10px 0;
}
</style>
