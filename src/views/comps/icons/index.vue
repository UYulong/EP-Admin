<template>
  <div :class="['ep-container', ns.b()]">
    <el-card :class="ns.e('card')">
      <template #header>
        <span>图标</span>
      </template>

      <div
        :class="ns.e('box')"
      >
        <el-select
          v-model="value"
          placeholder="请选择图标"
          :class="ns.e('select')"
        >
          <div style="display: flex; flex-wrap: wrap; width: 500px; padding: 0 5px;">
            <p
              v-for="{ name } in ElementPlusIconsVue"
              :key="name"
            >
              <el-option
                style="width: 100px; height: 65px; display: flex; flex-direction: column; justify-content: center; align-items: center;"
                :label="name"
                :value="name"
              >
                <el-icon
                  :size="iconSize"
                >
                  <component :is="name" />
                </el-icon>
                <span style="width: 86px; font-size: 12px; text-align: center; word-break: keep-all;">
                  {{ name }}
                </span>
              </el-option>
            </p>
          </div>
        </el-select>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name='Icons'>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useNamespace } from "hooks/index";
const ns = useNamespace("icons");

const value = ref('')
const iconSize = ref(22)

</script>

<style lang="scss" scoped>
@use "hooks/use-namespace/styles/mixins" as *;

@include b(icons) {
  @include e(card) {
    width: 550px;
    height: 420px;

    @include e(box) {
      padding-left: 10px;
      margin: 0;
    }

    @include e(select) {
      width: 500px;
    }
  }
}
</style>
