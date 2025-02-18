<!-- Child.vue -->
<template>
    <button @click="sendMessageToParent">Update Message</button>
</template>
  
<script setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits();
  
  const sendMessageToParent = () => {
    emit('updateMessage', 'Hello from Child!');
  };
</script>