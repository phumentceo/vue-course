<!-- Parent.vue -->
<template>
    <Child :message="parentMessage" />
</template>
  
<script setup>
  import { ref } from 'vue';
  import Child from './Child.vue';
  
  const parentMessage = ref('Hello from Parent!');
</script>