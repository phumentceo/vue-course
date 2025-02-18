<template>
    <input v-model="message" placeholder="Type something">
    <p>Message: {{ message }}</p>
</template>
  
<script setup>
  import { ref, watch } from 'vue';
  
  const message = ref('');
  
  // Watcher
  watch(message, (newMessage, oldMessage) => {
    console.log('Message changed from', oldMessage, 'to', newMessage);
  });
</script>
  