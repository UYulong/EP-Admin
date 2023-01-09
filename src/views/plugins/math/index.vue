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

const num2 =  ref(new Big('222'))

console.log(num.value + num2.value);



</script>

<style lang="scss" scoped>

</style>
