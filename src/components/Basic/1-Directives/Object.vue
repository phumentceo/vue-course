<template>
    <ul>
      <li v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</li>
    </ul>
  </template>
  
<script setup>

  import { ref } from 'vue';
  
  const user = ref({
    name: "John Doe",
    age: 30,
    location: "New York"
  });

</script>