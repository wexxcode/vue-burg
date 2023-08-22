import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Pedidos.vue')
    }
  ]
})

export default router
