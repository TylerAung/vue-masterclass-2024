<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { Projects } from '@/types/Projects'
import type { IProject } from '@/interfaces/IProject'

let initialProjects: IProject[] = []

const AllProjects = reactive(new Projects(initialProjects))

console.log(supabase)

async function getProjectTable() {
  const { data, error } = await supabase.from('projects').select()
  // initialProjects = data

  console.log('Data: ', data)

  if (error) {
    console.error('Error fetching projects:', error)
    return
  }

  if (data) {
    AllProjects.ProjectList = data
  }

  console.log('Class Data: ', AllProjects.ProjectList)
}

onMounted(() => {
  // const VITE_APP_SCRIPT = (window as any).APP_CONFIG.VITE_APP_SCRIPT;
  // VITE_APP_SCRIPT;
  getProjectTable()
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
