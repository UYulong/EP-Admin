<template>
  <!-- 基础表单组件编写 -->
  <el-form
    ref="baseFormRef"
    :model="baseFormData"
    :rules="baseFormRules"
    label-width="120px"
    class="demo-ruleForm"
    status-icon
  >
    <!-- 工号 -->
    <el-form-item
      label="工号"
      prop="jobNum"
    >
      <el-input
        v-model.number="baseFormData.jobNum"
        placeholder="请输入员工工号"
        maxlength="10"
      />
    </el-form-item>

    <!-- 姓名 -->
    <el-form-item
      label="姓名"
      prop="name"
    >
      <el-input
        v-model="baseFormData.name"
        placeholder="请输入姓名"
      />
    </el-form-item>

    <!-- 身份证 -->
    <el-form-item
      label="身份证"
      prop="idCard"
    >
      <el-input
        v-model="baseFormData.idCard"
        placeholder="请输入姓名"
      />
    </el-form-item>

    <!-- 性别 -->
    <el-form-item
      label="性别"
      prop="sex"
    >
      <el-radio-group v-model="baseFormData.sex">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>

    <!-- 所属部门 -->
    <el-form-item
      label="所属部门"
      prop="departmentVal"
    >
      <el-select
        v-model="baseFormData.departmentVal"
        placeholder="请选择所在部门"
        @change="handleDepartmentChangeEvent"
      >
        <el-option
          v-for="item in departments"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <!-- 岗位名称 -->
    <el-form-item
      label="岗位名称"
      prop="post"
    >
      <el-checkbox-group v-model="baseFormData.post">
        <el-checkbox
          v-for="item in post"
          :key="item"
          :label="item"
          name="type"
        />
      </el-checkbox-group>
    </el-form-item>

    <!-- 生效时间 -->
    <el-form-item
      label="生效时间"
      required
    >
      <el-col :span="11">
        <el-form-item prop="date">
          <el-date-picker
            v-model="baseFormData.date"
            type="date"
            label="选择日期"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>

      <el-col
        class="divider-line"
        :span="2"
      >
        <span>-</span>
      </el-col>

      <el-col :span="11">
        <el-form-item prop="time">
          <el-time-picker
            v-model="baseFormData.time"
            placeholder="选择时间"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>

    <!-- 备注信息 -->
    <el-form-item
      label="备注信息"
      prop="remarks"
    >
      <el-input
        v-model="baseFormData.remarks"
        type="textarea"
        maxlength="30"
        placeholder="请填写备注信息"
      />
    </el-form-item>

    <!-- 操作项 -->
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm(baseFormRef)"
      >
        提交
      </el-button>
      <el-button @click="resetForm(baseFormRef)">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name='CompsForm'>
import { useForm } from '../use-form';

const {
  departments,
  post,
  baseFormData, 
  baseFormRef, 
  baseFormRules,
  handleDepartmentChangeEvent,
  submitForm, 
  resetForm
}  = useForm()
</script>

<style lang="scss" scoped>

</style>