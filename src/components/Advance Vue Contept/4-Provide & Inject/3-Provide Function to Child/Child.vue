<template>
    <h2>Count: {{ count }}</h2>
    <button @click="increaseCount">Increase</button>
  </template>
  
<script setup>
  import { inject } from 'vue';
  
  const count = inject('count');
  const increaseCount = inject('increaseCount');
</script>
  