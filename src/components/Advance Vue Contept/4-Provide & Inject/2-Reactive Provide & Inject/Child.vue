<template>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increment">Increase</button>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  
  const counter = inject('counter');
  
  const increment = () => {
    counter.value++; // Update the value in parent
  };
  </script>
  