<template>
  <!-- 上下拖动 -->
  <div class="up-down">
    <draggable
      item-key="id"
      :list="dragList"
      ghost-class="ghost"
      chosen-class="chosenClass"
      animation="300"
      @end="onEnd"
    >
      <template #item="{ element }">
        <div class="_drag-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup name=''>
import draggable from "vuedraggable";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const dragList = ref([])

watchEffect(() => {
  if (props.modelValue.length > 0) {
    dragList.value = props.modelValue
  }
})

const emit = defineEmits(['update:modelValue'])

// 拖拽结束事件
const onEnd = () => {
  emit('update:modelValue', dragList.value)
};
</script>

<style lang="scss" scoped>
._drag-item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
}

._drag-item:hover {
  cursor: move;
}
._drag-item + ._drag-item {
  margin-top: 10px;
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>