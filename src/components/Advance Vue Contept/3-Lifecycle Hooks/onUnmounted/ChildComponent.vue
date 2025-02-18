<!-- ChildComponent.vue -->
<template>
    <h2>Child Component</h2>
</template>
  
<script setup>
  import { onMounted, onUnmounted } from 'vue';
  
  onMounted(() => {
    console.log('Child component mounted!');
  });
  
  onUnmounted(() => {
    console.log('Child component unmounted!');
  });
</script>