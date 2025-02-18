<!-- Parent.vue -->
<template>
    <Child>
      <template #default="{ message }">
        <p>Message from Child: {{ message }}</p>
      </template>
    </Child>
</template>
  
<script setup>
  import Child from './Child.vue';
</script>