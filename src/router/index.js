import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MealListView from '../views/MealListView.vue'
import MBNView from '../views/MBNView.vue'
import MBIView from '../views/MBIView.vue'
import MBLView from '../views/MBLView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/by-name/:name?',
        name: 'MBN',
        component: MBNView
      },
      {
        path: '/by-letter/:letter?',
        name: 'MBL',
        component: MBLView
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'MBI',
        component: MBIView
      },
      {
        path: '/letter/:ltr',
        name: 'MealList',
        component: MealListView,
        props: true
      },
    
      {//catchall 404
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundView,
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router