<template>
    <button @click="showComponent = !showComponent">
      Toggle Component
    </button>
    <ChildComponent v-if="showComponent" />
</template>
  
<script setup>
  import { ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  const showComponent = ref(true);
  
</script>