<!-- Child.vue -->
<template>
    <slot :message="childMessage"></slot>
</template>
  
<script setup>
  const childMessage = "Hello from Child!";
</script>