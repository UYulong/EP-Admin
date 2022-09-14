<template>
  <div class="ep-container base-form">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>基础表单</span>
        </div>
      </template>

      <p>基础表单一般用来搜集用户信息，并且可以验证用户的输入是否符合规范！</p>

      <div class="base-form__form-contaienr">
        <el-row :gutter="20">
          <el-col :span="12">
            <BaseForm />
          </el-col>

          <el-col :span="12">
            <BaseFormData />
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="baseForm">
import BaseFormData from './comps/data.vue'; // 数据展示-组件
import BaseForm from './comps/form.vue'; // 表单-组件
</script>

<style lang="scss" scoped>
.base-form {
  .base-form__form-contaienr {
    padding-top: 50px;
  }
}

.card-header {
  span {
    font-weight: 600;
  }
}

.divider-line {
  display: flex;
  justify-content: center;
}
</style>
