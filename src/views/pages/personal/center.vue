<template>
  <!-- 个人中心 -->
  <div
    class="ep-container"
    :class="ns.b()"
  >
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>About me</span>
            </div>
          </template>

          <!-- 头像区域 -->
          <div :class="ns.e('avatar')">
            <Avatar
              size="large"
              src="https://pic.imgdb.cn/item/6315b85b16f2c2beb1666188.png"
            />
            <p :class="ns.e('name')">
              EP Admin
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        2
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name='PersonalCenter'>
import { useNamespace } from "hooks/index";
import Avatar from 'comps/avatar/avatar'
const ns = useNamespace("center");
</script>

<style lang="scss" scoped>
@use "../../../hooks/use-namespace/styles/mixins" as *;

@include b(center) {

  @include e('avatar') {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @include e(name) {
    font-size: 14px;
    margin-top: 12px;
    font-weight: 600;
  }
}
</style>
