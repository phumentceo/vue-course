<template>
    <Child />
</template>
  
<script setup>
  import { provide, ref } from 'vue';
  import Child from './Child.vue';
  
  const count = ref(0);
  
  const increaseCount = () => {
    count.value++;
  };
  
  provide('count', count);
  provide('increaseCount', increaseCount);
</script>
  