import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'
// import ProjectsView from '@/views/ProjectsView.vue'
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
      component: () => import('@/views/ProjectsView.vue')
      //Manages bundle size with lazy load
    },
    {
      path: '/projects/:id',//:id is now a wildcard, can be /7213721 or /djsfhusijdh_hy
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue')
    },
    {
      path: '/:catchAll(.*)*', //Matches with any permutations outhere
      name: 'catch-all',
      component: h('p', { style: 'color: red;' }, '404 Not Found') //Mock up Hypertext HTML AKA Inline HTML
    }
  ]
})

export default router

//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue')