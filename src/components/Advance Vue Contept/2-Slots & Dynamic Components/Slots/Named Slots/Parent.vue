<template>
    <Child>
      <template #header>
        <h1>This is a custom header</h1>
      </template>
      <template #footer>
        <p>This is a custom footer</p>
      </template>
    </Child>
</template>

<script setup>
   import Child from './Child.vue';
</script>