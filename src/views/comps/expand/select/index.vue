<template>
  <el-tree-select
    v-model="selectVal"
    style="width: 500px"
    clearable
    :data="data"
    :render-after-expand="false"
    @node-click="handleNodeClickEvent"
    @visible-change="handleVisibleChangeEvent"
  />
</template>

<script lang="ts" setup name="ExpandSelect">
import { ref } from "vue";

import type Node from "element-plus/es/components/tree/src/model/node";

const selectVal = ref();

const data = [
  {
    value: "1",
    label: "🌞太阳科技公司",
    children: [
      {
        value: "10",
        label: "云技术事业部",
        children: [
          {
            value: "100",
            label: "王老五",
          },
        ],
      },
    ],
  },
  {
    value: "2",
    label: "🌍地球生物公司",
    children: [
      {
        value: "11",
        label: "市场营销部",
        children: [
          {
            value: "101",
            label: "宋老五",
          },
        ],
      },
      {
        value: "12",
        label: "科研部",
        children: [
          {
            value: "102",
            label: "宋老六",
          },
        ],
      },
    ],
  },
  {
    value: "3",
    label: "🌕月球金融公司",
    children: [
      {
        value: "13",
        label: "放贷部",
        children: [
          {
            value: "103",
            label: "吴老二",
          },
        ],
      },
      {
        value: "14",
        label: "催收部",
        children: [
          {
            value: "104",
            label: "吴老三",
          },
        ],
      },
    ],
  },
];

interface Tree {
  label: string;
  children?: Tree[];
}

// 缓存当前选中节点的key
const cacheNodeKey = ref("");
// 缓存拼接后的文本
const cacheJoinLabel = ref("");

// 节点节点事件
const handleNodeClickEvent = (_: Tree, node: Node) => {
  const { level, key, childNodes } = node;

  // 只有点击最后一级节点时，才继续
  if (childNodes.length > 0) return;

  // 缓存当前节点的key
  cacheNodeKey.value = key as string;

  // 记录当前选中的节点信息
  let cacheNode = node;

  // 循环 node tree,将其放在 nodeList 里
  const nodeList = [];
  for (let i = level; i >= 1; i--) {
    nodeList.unshift(cacheNode);
    cacheNode = cacheNode.parent;
  }

  if (nodeList.length === 0) return;

  // 数据拼接
  const labelText = nodeList.reduce((pre, cur) => {
    return (pre += ` - ${cur.label}`);
  }, "");

  // 处理拼接后的多余字符
  cacheJoinLabel.value = labelText.slice(3);

  // 一定要在 nextTick 方法中进行赋值操作
  nextTick(() => {
    selectVal.value = unref(cacheJoinLabel);
  });
};

// 下拉框出现或隐藏
const handleVisibleChangeEvent = (visible: boolean) => {
  if (visible) {
    // 如果是打开，将缓存的key赋给绑定值
    nextTick(() => {
      selectVal.value = unref(cacheNodeKey);
    });
  } else {
    // 如果是关闭，将缓存的label赋给绑定值
    nextTick(() => {
      selectVal.value = unref(cacheJoinLabel);
    });
  }
};
</script>
