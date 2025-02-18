<template>
    <div>
      <button @click="isVisible = !isVisible">Toggle Message</button>
      <p v-if="isVisible">This is a conditional message!</p>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  
  const isVisible = ref(false);
  
</script>
  