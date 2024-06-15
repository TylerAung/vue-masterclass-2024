import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'project',
      component: ProjectsView
    }
  ]
})

export default router

//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue')