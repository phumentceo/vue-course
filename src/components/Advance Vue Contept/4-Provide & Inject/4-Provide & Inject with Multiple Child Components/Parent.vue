<!-- Parent.vue -->
<template>
    <ChildOne />
    <ChildTwo />
</template>
  
<script setup>
  import { provide, ref } from 'vue';
  import ChildOne from './ChildOne.vue';
  import ChildTwo from './ChildTwo.vue';
  
  const theme = ref('light');
  provide('theme', theme);
</script>
  