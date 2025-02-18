<!-- Parent.vue -->
<template>
    <button @click="toggleComponent">Toggle Component</button>
    <component :is="currentComponent"></component>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ComponentA from './ComponentA.vue';
  import ComponentB from './ComponentB.vue';
  
  const currentComponent = ref(ComponentA);
  
  const toggleComponent = () => {
    currentComponent.value = currentComponent.value === ComponentA ? ComponentB : ComponentA;
  };
</script>