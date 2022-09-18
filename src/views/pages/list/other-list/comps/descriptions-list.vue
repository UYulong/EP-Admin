<template>
  <!-- 描述列表 -->
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span>描述列表</span>
      </div>
    </template>

    <el-descriptions
      title="以列表形式展示多个字段"
      :column="3"
      border
    >
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <user />
            </el-icon>
            姓名
          </div>
        </template>
        老六
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <iphone />
            </el-icon>
            电话
          </div>
        </template>
        155****2190
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <location />
            </el-icon>
            位置
          </div>
        </template>
        火星
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <tickets />
            </el-icon>
            技能
          </div>
        </template>
        <el-tag size="small">
          Vue
        </el-tag>
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon>
              <office-building />
            </el-icon>
            家庭住址
          </div>
        </template>
        火星第一幼儿园
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script lang="ts" setup name='DescriptionsList'></script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}
</style>