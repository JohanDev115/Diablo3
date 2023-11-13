import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:region/:battleTag',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/:region/:battleTag/:heroId',
      name: 'Hero',
      component: () => import('../views/HeroView/IndexView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/error',
      name: 'About',
      component: () => import('../views/ErrorView.vue')
    },
    {
      path: '/*', redirect: { name: 'Home' }
    }
  ]
})

export default router
