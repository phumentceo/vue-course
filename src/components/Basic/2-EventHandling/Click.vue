<template>
    <button @click="handleClick">Click me</button>
    <p>{{ message }}</p>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const message = ref("Hello");
  
  const handleClick = () => {
    message.value = "You clicked the button!";
  };
</script>
  