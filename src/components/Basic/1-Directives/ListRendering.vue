<template>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const items = ref(["Apple", "Banana", "Cherry"]);
  
</script>
  