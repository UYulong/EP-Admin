<template>
  <!-- 上下拖动 -->
  <div class="up-down">
    <draggable
      item-key="id"
      :list="dragList"
      ghost-class="_ghost"
      chosen-class="_chosenClass"
      animation="300"
    >
      <template #item="{ element }">
        <div class="_drag-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup name='DragUpDown'>
import { DragListDataModel } from 'models/list.d';
import { Ref } from "vue";
import draggable from "vuedraggable";

interface DragPropsDataModel {
  modelValue: Array<{
    id: number
    name: string
  }>
}

const props = defineProps<DragPropsDataModel>()

const dragList: Ref<DragListDataModel[]> = ref([])

watchEffect(() => {
  if (props.modelValue.length > 0) {
    dragList.value = props.modelValue
  }
})
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
._ghost {
  border: solid 1px rgb(19, 41, 239);
}
._chosenClass {
  background-color: #f1f1f1;
}
</style>