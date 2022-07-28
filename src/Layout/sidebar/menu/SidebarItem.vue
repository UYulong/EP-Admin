<template>
  <!-- 菜单子选项 -->
  <div v-if="!props.routes?.hidden !== false">
    <el-sub-menu v-if="props.routes?.children" :index="props.basePath">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ props.routes?.meta.title }}</span>
      </template>

      <SidebarItem
        v-for="route in props.routes.children"
        :key="route.path"
        :routes="route"
        :base-path="resolvePath(route.path)"
      ></SidebarItem>
    </el-sub-menu>

    <el-menu-item v-else :index="props.basePath">
      <el-icon><setting /></el-icon>
      <span>{{ props.routes?.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup name="SidebarItem">
const props = defineProps({
  routes: {
    type: Object,
  },

  basePath: {
    type: String,
  },
});
// console.log(props.basePath);

// 菜单路径解析
const resolvePath = (routePath: string) => {
  if (props.basePath === "/") {
    return "/home";
  }
  return props.basePath + "/" + routePath;
};
</script>

<style lang="scss" scoped></style>
