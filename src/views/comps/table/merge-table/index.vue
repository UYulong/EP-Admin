<template>
  <div class="ep-conainer">
    <el-table border :data="tableData" :span-method="objectSpanMethod">
      <el-table-column type="index" width="55" />

      <el-table-column prop="accName" label="云账号" />

      <el-table-column prop="cloudTypeName" label="云商" />

      <el-table-column prop="crashAmount" label="现金余额" />

      <el-table-column prop="creditAmount" label="授信额度" />

      <el-table-column prop="availaleAmount" label="可用额度" />

      <el-table-column label="操作" />
    </el-table>
  </div>
</template>

<script lang="ts" setup name='MergeTable'>
import { onMounted, ref, unref } from 'vue';

const tableData = ref([
  {
    id: 1,
    cloudTypeName: "阿里云",
    accName: "glodon_gm1",
    crashAmount: 0.1,
    creditAmount: 240000.0,
    availaleAmount: 83548.66,
  },
  {
    id: 2,
    cloudTypeName: "阿里云",
    accName: "glodon_gm1",
    crashAmount: 0.0,
    creditAmount: 150000.0,
    availaleAmount: 83548.66,
  },
  {
    id: 3,
    cloudTypeName: "阿里云",
    accName: "glodon_gm1",
    crashAmount: 0.0,
    creditAmount: 150000.0,
    availaleAmount: 53045.89,
  },
  {
    id: 4,
    cloudTypeName: "阿里云",
    accName: "glodon_gm4",
    crashAmount: 0.0,
    creditAmount: 1351000.0,
    availaleAmount: 1244354.9,
  },
  {
    id: 5,
    cloudTypeName: "阿里云",
    accName: "glodon_gm4",
    crashAmount: 0.0,
    creditAmount: 0.0,
    availaleAmount: -5033739.0,
  },
  {
    id: 5,
    cloudTypeName: "阿里云",
    accName: "glodon_gm5",
    crashAmount: 0.0,
    creditAmount: 0.0,
    availaleAmount: -5033739.0,
  },
  {
    id: 5,
    cloudTypeName: "阿里云",
    accName: "glodon_gm5",
    crashAmount: 0.0,
    creditAmount: 0.0,
    availaleAmount: -5033739.0,
  },
])

const needMergeArr: any = ["accName", "cloudTypeName", "crashAmount", "creditAmount"]
let rowMergeArrs: any = []

const rowMergeHandle = (arr, data) => {
  if (!Array.isArray(arr) && !arr.length) return false;
  if (!Array.isArray(data) && !data.length) return false;
  let needMerge = {};

  arr.forEach((i, idx) => {
    needMerge[i] = {
      rowArr: [],
      rowMergeNum: 0,
    };
    if (idx == 0) {
      data.forEach((item, index) => {
        // 表格首个数据单独处理
        if (index === 0) {
          needMerge[i].rowArr.push(1);
          needMerge[i].rowMergeNum = 0;
        } else {
          if (item[i] === data[index - 1][i]) {
            needMerge[i].rowArr[needMerge[i].rowMergeNum] += 1;
            needMerge[i].rowArr.push(0);
          } else {
            needMerge[i].rowArr.push(1);
            needMerge[i].rowMergeNum = index;
          }
        }
      });
    } else {
      let firstRowArr = needMerge[arr[0]].rowArr;
      let firstRowArrDeal: any = [];
      firstRowArr.forEach((item, index) => {
        if (item > 0) {
          firstRowArrDeal.push(index);
        }
      });
      data.forEach((item, index) => {
        let sign = false;
        if (firstRowArrDeal.indexOf(index) > 0) {
          needMerge[i].rowMergeNum = index;
          sign = true;
        }
        // 表格首个数据单独处理
        if (index === 0) {
          needMerge[i].rowArr.push(1);
          needMerge[i].rowMergeNum = 0;
        } else {
          if (item[i] === data[index - 1][i]) {
            if (sign) {
              needMerge[i].rowArr.push(1);
            } else {
              needMerge[i].rowArr[needMerge[i].rowMergeNum] += 1;
              needMerge[i].rowArr.push(0);
            }
          } else {
            needMerge[i].rowArr.push(1);
            needMerge[i].rowMergeNum = index;
          }
        }
      });
    }
  });

  return needMerge;
}

const mergeAction = (val, rowIndex) => {
  let _row = rowMergeArrs[val].rowArr[rowIndex];
  let _col = _row > 0 ? 1 : 0;
  return [_row, _col];
}

const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  for (let res in needMergeArr) {
    if (needMergeArr[res] == column.property) {
      return mergeAction(column.property, rowIndex);
    }
  }
}

onMounted(() => {
  rowMergeArrs = rowMergeHandle(needMergeArr, unref(tableData));
})
</script>

<style lang="scss" scoped></style>
