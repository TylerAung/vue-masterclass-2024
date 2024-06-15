<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <h1>Page: {{ route.params?.catchAll }} 404 Not Found</h1>
</template>
