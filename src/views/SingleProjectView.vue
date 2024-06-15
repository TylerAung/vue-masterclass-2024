<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <!-- params? helps handled if Id does not exist -->
  <h1>Single Project: {{ route.params?.id }}</h1>
  <RouterLink to="/projects">To Project</RouterLink>
</template>
