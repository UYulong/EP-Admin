<template>
  <!-- 左右拖动 -->
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <draggable
          :list="dragLeftList"
          :force-fallback="true"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          item-key="id"
          ghost-class="_ghost"
          filter=".forbid"
          chosen-class="_chosenClass"
          animation="300"
          group="commonList"
        >
          <template #item="{ element }">
            <div class="_drag-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </el-col>

      <el-col :span="12">
        <draggable
          :list="dragRightList"
          :force-fallback="true"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          item-key="id"
          ghost-class="_ghost"
          filter=".forbid"
          chosen-class="_chosenClass"
          animation="300"
          group="commonList"
        >
          <template #item="{ element }">
            <div class="_drag-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup name='DragLeftRight'>
import { Ref } from "vue";
import draggable from "vuedraggable";

interface ListModel {
  id: number
  name: string
}

interface DragPropsDataModel {
  left: ListModel[]
  right: ListModel[]
}

const props = defineProps<DragPropsDataModel>()

const dragLeftList: Ref<ListModel[]> = ref([])
const dragRightList: Ref<ListModel[]> = ref([])

watchEffect(() => {
  if (props.left.length > 0) {
    dragLeftList.value = props.left
  }

  if (props.right.length > 0) {
    dragRightList.value = props.right
  }
})
</script>

<style lang="scss" scoped>
._drag-item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
  user-select: none;
}

._drag-item:hover {
  cursor: move;
}

._drag-item + ._drag-item {
  margin-top: 10px;
}

._ghost {
  border: solid 1px rgb(19, 41, 239) !important;
}
._chosenClass {
  opacity: 1;
  // border: solid 1px red;
}
._fallbackClass {
  background-color: aquamarine;
}
</style>