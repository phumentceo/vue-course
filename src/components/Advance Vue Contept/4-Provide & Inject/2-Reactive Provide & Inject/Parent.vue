<template>
    <Child />
  </template>
  
  <script setup>
  import { provide, ref } from 'vue';
  import Child from './Child.vue';
  
  const counter = ref(0);
  
  provide('counter', counter);
  </script>
  