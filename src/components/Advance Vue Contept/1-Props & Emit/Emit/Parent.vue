<!-- Parent.vue -->
<template>
    <Child @updateMessage="handleUpdateMessage" />
</template>
  
<script setup>
  import { ref } from 'vue';
  import Child from './Child.vue';
  
  const parentMessage = ref('Hello from Parent!');
  
  const handleUpdateMessage = (newMessage) => {
    parentMessage.value = newMessage;
  };
</script>