import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import ProductViewVue from '@/views/ProductView.vue'
import ProductsViewVue from '@/views/ProductsView.vue'
import SearchViewVue from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutViewVue
    },
    {
      path: '/product/:id', 
      component: ProductViewVue
    },
    {
      path: '/products', 
      component: ProductsViewVue
    },
    {
      path: '/search', 
      component: SearchViewVue
    }
  ]
})

export default router




