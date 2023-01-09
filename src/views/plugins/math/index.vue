<template>
  <div>
    <p>num1: {{ num }}</p>
    <p>num2: {{ num2 }}</p>
  </div>
</template>

<script lang="ts" setup name='Math'>
import Big from 'big.js';

const num = ref(new Big('999999999999999999999').plus('1'))

const num2 =  ref(new Big(222 + 79))

console.log(num.value);
console.log(typeof num.value);

</script>

<style lang="scss" scoped>

</style>
