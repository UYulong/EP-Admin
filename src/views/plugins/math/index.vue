<template>
  <div>
    <p>num1: {{ num }}</p>
    <p>num2: {{ num2 }}</p>
  </div>
</template>

<script lang="ts" setup name='Math'>
import Big from 'big.js';

console.dir(Big);


const num = ref(new Big('111'))

const num2 = new Big(22)

console.log();



</script>

<style lang="scss" scoped>

</style>
