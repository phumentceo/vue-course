<!-- ChildOne.vue -->
<template>
    <h2>Child One Theme: {{ theme }}</h2>
</template>
  
<script setup>
  import { inject } from 'vue';
  
  const theme = inject('theme');
</script>
  