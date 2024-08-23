import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  },
 
  {
  path: '/admin',
  name: 'admin',
  component: () => import('@/views/AdminView.vue')
  },
  {
  path: '/reach-us',
  name: 'reach-us',
  component: () => import('@/views/ContactView.vue')
  },
   
  {
    path: '/single-products/:id',
    name: 'single-products',
    component: () => import('@/views/SingleProduct.vue')
    }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

