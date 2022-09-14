<template>
  <!-- 项目配置 抽屉 -->
  <div>
    <el-drawer v-model="drawerStore.isShow">
      <template #header>
        <h4>title</h4>
      </template>
      <template #default>
        default
      </template>
      <template #footer>
        footer
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup name="Drawer">
import useSetDrawer from "store/modules/drawer";

const drawerStore = useSetDrawer(); // drawer store
</script>

<style lang="scss" scoped></style>
