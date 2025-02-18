<template>
    <input type="text" v-model="name" @input="handleInputChange" placeholder="Enter your name" />
    <p>Your name is: {{ name }}</p>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const name = ref("");
  
  const handleInputChange = (event) => {
    console.log("Input changed:", event.target.value); // Logging the input value
  };
</script>
  