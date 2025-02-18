<template>
    <p>Full Name: {{ fullName }}</p>
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
  </template>
  
<script setup>
  import { ref, computed } from 'vue';
  
  const firstName = ref('');
  const lastName = ref('');
  
  // Computed property
  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value;
  });
</script>
  