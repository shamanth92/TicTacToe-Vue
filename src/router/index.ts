import GamePage from '@/views/gamePage.vue'
import HomePage from '@/views/homePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/game', component: GamePage }
  ],
})

export default router
