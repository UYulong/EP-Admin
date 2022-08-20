<template>
  <span>{{ num }}</span>
</template>

<script lang="ts" setup name="CountTo">
defineProps<{ num: string }>();
</script>

<style lang="scss" scoped></style>
