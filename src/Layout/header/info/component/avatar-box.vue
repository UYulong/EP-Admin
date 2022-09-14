<template>
  <!-- 头像组件 -->
  <el-popover
    placement="bottom-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <Avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </template>
  </el-popover>
</template>

<script lang="ts" setup name="AvatarBox">
import Avatar from "comps/avatar/avatar";
</script>
