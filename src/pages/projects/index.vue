<script setup lang="ts"></script>

<template>
  <RouterLink to="/">Back to Home</RouterLink>
  <h1>Projects</h1>
  <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
</template>
