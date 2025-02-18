// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
  { path: '/', component: Home },  // Route to Home
  { path: '/about', component: About } // Route to About
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
