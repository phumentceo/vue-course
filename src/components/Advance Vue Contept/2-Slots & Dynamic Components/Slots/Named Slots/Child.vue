<!-- Child.vue -->
<template>
    <div>
      <slot name="header"></slot> <!-- Header slot -->
      <p>Main content inside Child</p>
      <slot name="footer"></slot> <!-- Footer slot -->
    </div>
</template>