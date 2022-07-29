<template>
  <!-- 菜单子选项 -->
  <el-sub-menu
    v-if="!props.routes?.hidden !== false && props.routes?.children"
    :index="props.basePath"
  >
    <template #title>
      <el-icon v-if="props.routes?.meta.icon">
        <component :is="calcIcon(props.routes?.meta.icon)"></component>
      </el-icon>

      <span>{{ props.routes?.meta.title }}</span>
    </template>

    <!-- 菜单递归，解决多层菜单问题 -->
    <SidebarItem
      v-for="route in props.routes.children"
      :key="route.path"
      :routes="route"
      :base-path="resolvePath(route.path)"
    ></SidebarItem>
  </el-sub-menu>

  <el-menu-item
    v-else-if="!props.routes?.hidden !== false"
    :index="props.basePath"
  >
    <!-- 计算icon -->
    <el-icon v-if="props.routes?.meta.icon">
      <component :is="calcIcon(props.routes?.meta.icon)"></component>
    </el-icon>
    <span>{{ props.routes?.meta.title }}</span>
  </el-menu-item>
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

// 菜单路径解析
const resolvePath = (routePath: string) => {
  if (props.basePath === "/") {
    return props.basePath + routePath;
  }

  return props.basePath + "/" + routePath;
};

// 计算菜单 icon
const calcIcon = (iconName: string) => {
  return iconName ? iconName : null;
};
</script>

<style lang="scss" scoped></style>
