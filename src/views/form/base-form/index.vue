<template>
  <div class="ep-container">
    <ul>
      <li
        v-for="n in 100"
        :key="n"
      >
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
ul {
  height: 100%;
}
</style>
