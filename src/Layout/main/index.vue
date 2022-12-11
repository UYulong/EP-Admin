<template>
  <router-view v-slot="{ Component }">
    <transition :enter-active-class="`animate__animated animate__fadeIn`">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup name='Main'>

</script>
