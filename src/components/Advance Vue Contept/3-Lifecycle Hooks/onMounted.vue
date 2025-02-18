<template>
    <h1>Message: {{ message }}</h1>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';

  const message = ref('');
  
  onMounted(() => {
    console.log('Component has been mounted!');
    message.value = 'Hello from onMounted!';
  });
</script>
  