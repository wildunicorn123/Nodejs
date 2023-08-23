import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import( '../views/ProdView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
