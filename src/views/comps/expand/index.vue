<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="el-tree-select" name="0">
        <Select />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup name="Expand">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

import Select from "./select/index.vue";

// 默认激活页签
const activeName = ref("0");

// 点击页签
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped></style>
