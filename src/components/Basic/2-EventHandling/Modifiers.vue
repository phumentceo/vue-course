<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" @input="handleInputChange" />
      <button @click.stop="handleClick">Submit</button>
    </form>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const name = ref("");
  
  const handleSubmit = () => {
    console.log("Form submitted");
  };
  
  const handleClick = () => {
    console.log("Button clicked, event stopped.");
  };
  
  const handleInputChange = (event) => {
    name.value = event.target.value;
  };
</script>
  