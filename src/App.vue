<script setup lang="ts">
import { onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.ts'
// import HomeView from '@/views/HomeView.vue'

console.log(supabase)

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
