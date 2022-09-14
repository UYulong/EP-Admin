<template>
  <!-- 分布表单 -->
  <div class="ep=container step-form">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>分布表单</span>
        </div>
      </template>

      <p>分布表单可用于引导用户按照流程完成任务</p>

      <div class="step-form__step-contaienr">
        <div class="step">
          <el-steps
            :space="300"
            :active="stepActive"
            finish-status="success"
            align-center
          >
            <el-step title="填写转账信息" />
            <el-step title="确认转账信息" />
            <el-step title="完成" />
          </el-steps>
        </div>

        <!-- 表单 -->
        <div class="form">
          <el-form
            v-if="stepActive === 0"
            ref="formDataRef"
            label-width="100px"
            :model="formData"
            :rules="formDataRules"
          >
            <el-form-item
              label="收款账户"
              prop="bankAccount"
            >
              <el-input v-model="formData.bankAccount" />
            </el-form-item>

            <el-form-item
              label="收款邮箱"
              prop="email"
            >
              <el-input v-model="formData.email" />
            </el-form-item>

            <el-form-item
              label="收款人姓名"
              prop="name"
            >
              <el-input v-model="formData.name" />
            </el-form-item>

            <el-form-item
              label="转账金额"
              prop="amount"
            >
              <el-input
                v-model="formData.amount"
              >
                <template #prepend>
                  ¥
                </template>
              </el-input>
            </el-form-item>
          </el-form>

          <div
            v-else-if="stepActive === 1"
            class="step-form__confirm"
          >
            <el-alert
              title="unclosable alert"
              type="warning"
              :closable="false"
              show-icon
            />
            <ul>
              <li>
                收款账户：{{ formData.bankAccount }}
              </li>
              <li>
                收款邮箱：{{ formData.email }}
              </li>
              <li>
                收款人：{{ formData.name }}
              </li>
              <li>
                汇款金额：{{ formData.amount }}
              </li>
            </ul>
          </div>

          <div
            v-else-if="stepActive === 2"
            class="step-form__submit"
          >
            123
          </div>
        </div>

        <!-- 按钮 -->
        <div class="step-form__jump-btn">
          <el-button v-if="stepActive === 1">
            上一步
          </el-button>
          
          <el-button
            v-if="stepActive === 0"
            type="primary"
            @click="jumpNext(formDataRef)"
          >
            下一步
          </el-button>

          <el-button
            v-if="stepActive === 1"
            type="primary"
            @click="jumpNext(formDataRef)"
          >
            提交
          </el-button>

          <el-button
            v-if="stepActive === 2"
            type="primary"
            @click="jumpNext(formDataRef)"
          >
            再转一次
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="StepForm">
import type { FormInstance, FormRules } from 'element-plus';
import { regExpAmount, regExpBankAccount, regExpEmail, regExpName } from '../../../utils/libs/regExp';
// 步骤条
const stepActive = ref(0)
const jumpNext = (formEl: FormInstance | undefined) => {
  if (stepActive.value === 0) {
    if (!formEl) return
    // 校验表单
    formEl.validate((valid) => {
      if (!valid) {
        // 校验不通过
        console.error('error: Check Error');
        return false
      } else {
        // 校验通过
        stepActive.value++
      }
    })
  } else if (stepActive.value === 1) {
    stepActive.value++
  } else if (stepActive.value === 2) {
    // 最后一步
  }
}

// 表单
const formDataRef = ref<FormInstance>()

// 校验银行账户
const validateBankAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请填写汇款账户'))
  } else if (!regExpBankAccount.test(value)) {
    callback(new Error("请输入正确的银行账户!"))
  } else {
    callback()
  }
}

// 校验邮箱
const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请填收款方邮箱'))
  } else if (!regExpEmail.test(value)) {
    callback(new Error("请输入正确的邮箱!"))
  } else {
    callback()
  }
}

// 校验姓名
const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请填收款方姓名'))
  } else if (!regExpName.test(value)) {
    callback(new Error("请输入正确的姓名2～6位汉字!"))
  } else {
    callback()
  }
}

// 校验金额
const validateAmount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请填汇款金额'))
  } else if (!regExpAmount.test(value)) {
    callback(new Error("汇款金额为整数或至多3位小数位!"))
  } else {
    callback()
  }
}

// 表单数据绑定
const formData = reactive({
  bankAccount: '1234567890',
  email: '12@qq.com',
  name: '老六',
  amount: '10',
})

// 校验规则
const formDataRules  = reactive<FormRules>({
  bankAccount: [
    { validator: validateBankAccount, trigger: 'blur' },
    {required: true, trigger: 'blur'}
  ],
  email: [
    { validator: validateEmail, trigger: 'blur' },
    {required: true, trigger: 'blur'}
  ],
  name: [
    {validator: validateName, trigger: 'blur'},
    {required: true, trigger: 'blur'}
  ],
  amount: [
    {validator: validateAmount, trigger: 'blur'},
    {required: true, trigger: 'blur'}
  ],
})
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step-form {
  .step-form__step-contaienr {
    width: 50%;
    margin: 50px auto 20px;

    .form {
      margin-top: 30px;
      height: 220px;
      display: flex;
      justify-content: center;
      background-color: red;
    }

    .step-form__confirm {
      width: 45%;
      padding: 0 20px 0;

      ul {
        padding-top: 20px;
        li {
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }

  .step-form__jump-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

}
</style>
