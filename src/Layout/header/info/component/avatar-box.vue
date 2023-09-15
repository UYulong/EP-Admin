<template>
  <!-- 头像组件 -->
  <el-dropdown @command="handleMenuCommandEvent">
    <span class="el-dropdown-link">
      <Avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </span>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="user" icon="User">
          个人中心
        </el-dropdown-item>
        <el-dropdown-item command="logout" icon="SwitchButton">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup name="AvatarBox">
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store'
import Avatar from "comps/avatar/avatar";

const userStore = useUserStore()
const { proxy } = getCurrentInstance()!

const handleMenuCommandEvent = (item: string) => {
  switch (item) {
    case 'user':
      handleJumpToPage('person')
      break;

    default:
      handleLogout()
      break;
  }
}

// 跳转至个人中心
const handleJumpToPage = (url: string) => {
  console.log(url);
}

// 退出登录
const router = useRouter()
const handleLogout = async () => {
  const res = await proxy!.$confirm(
    '确定退出登录吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).catch((e: any) => e);

  if (res !== 'confirm') return

  const { code } = await userStore.logout()
  if (code === 200) {
    router.push('/login')
  }
}
</script>
