import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
