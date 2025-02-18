<script setup>
import { ref } from 'vue';

// បង្កើត reactive variable សម្រាប់ string
const message = ref("Hello, Vue!");

// បង្កើត reactive variable សម្រាប់ number
const count = ref(0);

// Function to update count
const increment = () => {
  count.value++; // ធ្វើការកែប្រែតម្លៃដោយប្រើ `.value`
};
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increase Count</button>
</template>
