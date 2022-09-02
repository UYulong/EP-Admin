<template>
  <div class="login-page__wrapper">
    <!-- 登录表单 -->
    <div class="login-form">
      <h3 class="app-title">
        {{ project_title }}
      </h3>
      <p class="app-subtitle">
        THIS IS A VUE3 BACKGROUND MANAGEMENT TEMPLATE
      </p>

      <!-- 输入框 -->
      <div class="input-box">
        <el-form :model="userLoginForm">
          <el-form-item>
            <el-input
              v-model="userLoginForm.userName"
              placeholder="请输入用户名称"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="userLoginForm.userPassword"
              placeholder="请输入用户密码"
              type="password"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="userLoginForm.verificationCode"
              class="verification-code-input"
              placeholder="请输入验证码"
            />
          </el-form-item>
        </el-form>
      </div>

      <!-- 密码控制 -->
      <div class="password-control">
        <Remember :user-info="userLoginForm">
          记住密码
        </Remember>
        <Retrive>忘记密码?</Retrive>
      </div>

      <!-- 登录按钮 -->
      <div class="submit-btn">
        <p @click="handelSubmitEvent">
          登录
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { project_title } from "../../utils/settings"; // 项目配置-名称
import Remember from "./components/Remember.vue"; // 记住密码组建
import Retrive from "./components/Retrive.vue"; // 找回密码组建

// login hooks
import { useLogin } from "./use-login";
const { userLoginForm, handelSubmitEvent } = useLogin();
</script>

<style lang="scss" scoped>
.login-page__wrapper {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login.jpg") no-repeat;
  background-size: 1920px 1080px;
  position: relative;
  text-align: center;

  .login-form {
    box-sizing: border-box;
    width: 500px;
    height: 455px;
    padding: 20px 30px;
    border: 1px solid #08ebfe;
    position: absolute;
    right: 10%;
    top: 30%;

    .app-title {
      letter-spacing: 0.1em;
      font-size: 30px;
      color: #fff;
      margin-bottom: 10px;
    }

    .app-subtitle {
      font-size: 14px;
      color: #fff;
    }

    .input-box {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }

    .verification-code-input {
      width: 150px;
    }

    .password-control {
      padding: 0 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .submit-btn {
      // margin-top: 10px;
      padding: 0 42px;
      height: 50px;

      p {
        margin: 0;
        height: 100%;
        line-height: 50px;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
        background-image: linear-gradient(to bottom, #08e8fa, #28bcc3);
      }
    }
  }
}

:deep(.el-input__wrapper) {
  background: #265791;
}

:deep(.el-input__inner) {
  // background: #265791;
  width: 330px;
  height: 46px;
  color: #fff;
  font-size: 16px;
}
</style>
