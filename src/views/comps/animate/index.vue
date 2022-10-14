<template>
  <!-- 动画组件 -->
  <div
    class="ep-conainer"
    :class="ns.b()"
  >
    <!-- animate.css -->
    <el-row :gutter="20">
      <!-- 入场动画 -->
      <el-col :span="8">
        <el-card
          class="box-card"
          shadow="never"
        >
          <template #header>
            <div :class="ns.e('card-header')">
              <span> AnimateCss </span>
              <el-button
                type="primary"
                link
              >
                Entrances
              </el-button>
            </div>
          </template>

          <el-row>
            <el-col :span="18">
              <!-- 样式选择 -->
              <el-select
                v-model="entrancesValue"
                placeholder="请选择动画效果"
                style="width: 260px"
                clearable
              >
                <el-option-group
                  v-for="group in entrancesOptions"
                  :key="group.label"
                  :label="group.label"
                >
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-option-group>
              </el-select>
            </el-col>

            <el-col :span="4">
              <el-button
                type="primary"
                :class="ns.e('button')"
                @click="handleAdd('entrances')"
              >
                应用
              </el-button>
            </el-col>
          </el-row>

          <div :class="ns.e('transform-container')">
            <transition
              :enter-active-class="`animate__animated ${entrancesName}`"
            >
              <div
                v-show="entrancesBoxIsShow"
                :class="ns.e('box')"
              />
            </transition>
          </div>
        </el-card>
      </el-col>

      <!-- 离场动画 -->
      <el-col :span="8">
        <el-card
          class="box-card"
          shadow="never"
        >
          <template #header>
            <div :class="ns.e('card-header')">
              <span> AnimateCss </span>
              <el-button
                type="primary"
                link
              >
                Exits
              </el-button>
            </div>
          </template>

          <el-row>
            <el-col :span="18">
              <!-- 样式选择 -->
              <el-select
                v-model="exitsValue"
                placeholder="请选择动画效果"
                style="width: 260px"
                clearable
              >
                <el-option-group
                  v-for="group in exitsOptions"
                  :key="group.label"
                  :label="group.label"
                >
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-option-group>
              </el-select>
            </el-col>

            <el-col :span="4">
              <el-button
                type="primary"
                :class="ns.e('button')"
                @click="handleAdd('exits')"
              >
                应用
              </el-button>
            </el-col>
          </el-row>

          <div :class="ns.e('transform-container')">
            <transition :enter-active-class="`animate__animated ${exitsName}`">
              <div
                v-show="exitsBoxIsShow"
                :class="ns.e('box')"
              />
            </transition>
          </div>
        </el-card>
      </el-col>

      <!-- 其他动画 -->
      <el-col :span="8">
        <el-card
          class="box-card"
          shadow="never"
        >
          <template #header>
            <div :class="ns.e('card-header')">
              <span> AnimateCss </span>
              <el-button
                type="primary"
                link
              >
                Other
              </el-button>
            </div>
          </template>

          <el-row>
            <el-col :span="18">
              <!-- 样式选择 -->
              <el-select
                v-model="otherValue"
                placeholder="请选择动画效果"
                style="width: 260px"
                clearable
              >
                <el-option-group
                  v-for="group in otherOptions"
                  :key="group.label"
                  :label="group.label"
                >
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-option-group>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-button
                type="primary"
                :class="ns.e('button')"
                @click="handleAdd('other')"
              >
                应用
              </el-button>
            </el-col>
          </el-row>

          <div :class="ns.e('transform-container')">
            <transition :enter-active-class="`animate__animated ${otherName}`">
              <div
                v-show="otherBoxIsShow"
                :class="ns.e('box')"
              />
            </transition>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- count animate -->
    <el-row>
      <el-col>
        <AutoCount />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name="Animate">
import AutoCount from './auto-count.vue'
import { useNamespace } from "hooks/index";
import { useAnimate } from "./use-animate";
const ns = useNamespace("transform");

const {
  entrancesOptions,
  exitsOptions,
  otherOptions,

  entrancesValue,
  exitsValue,
  otherValue,

  entrancesBoxIsShow,
  exitsBoxIsShow,
  otherBoxIsShow,

  entrancesName,
  exitsName,
  otherName,

  handleAdd,
} = useAnimate();
</script>

<style lang="scss" scoped>
@use "../../../hooks/use-namespace/styles/mixins" as *;

@include b(transform) {
  @include e(card-header) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @include e(button) {
    margin-left: 18px;
  }

  @include e(transform-container) {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;

    @include e(box) {
      width: 360px;
      height: 200px;
      background-color: aqua;
      border-radius: 10px;
    }
  }
}

.el-card {
  :deep(.el-card__header) {
    padding: 14px 20px;
  }
}
</style>
