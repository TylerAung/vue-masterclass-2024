<script setup lang="ts">
import { onMounted } from 'vue'
// import HomeView from '@/views/HomeView.vue'

onMounted(() => {
  // const VITE_APP_SCRIPT = (window as any).APP_CONFIG.VITE_APP_SCRIPT;
  // VITE_APP_SCRIPT;
})
</script>

<template>
  <main>
    <h1>App.Vue</h1>
    <!-- <HomeView /> -->
    <RouterView />
  </main>
</template>

<style scoped></style>
