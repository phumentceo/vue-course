<!-- Child.vue -->
<template>
    <h2>Message from Parent: {{ sharedMessage }}</h2>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  
  const sharedMessage = inject('sharedMessage');
  </script>
  