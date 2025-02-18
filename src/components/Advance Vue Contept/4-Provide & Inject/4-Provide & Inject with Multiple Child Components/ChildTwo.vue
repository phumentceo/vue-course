<!-- ChildTwo.vue -->
<template>
    <h2>Child Two Theme: {{ theme }}</h2>
</template>
  
<script setup>
  import { inject } from 'vue';
  
  const theme = inject('theme');
</script>
  