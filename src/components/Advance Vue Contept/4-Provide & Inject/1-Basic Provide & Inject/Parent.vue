<!-- Parent.vue -->
<template>
    <Child />
</template>
  
<script setup>
  import { provide, ref } from 'vue';
  import Child from './Child.vue';
  
  const message = ref("Hello from Parent!");
  
  provide('sharedMessage', message);
</script>
  