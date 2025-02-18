<template>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  
  const user = ref({});
  const loading = ref(true);
  
  onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    user.value = data;
    loading.value = false;
  });
</script>
  