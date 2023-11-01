import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/home'//重定向
      },

      {
        path: '/home',
        component: () => import('../views/Home/home.vue')
      },
      {
        path: '/myMap',
        component: () => import('../views/map/map.vue')
      },
      {
        path: '/myMap2',
        component: () => import('../views/map2/map2.vue')
      },
      {
        path:'/demo1',
        component: ()=> import('../views/Home/structure/structure.vue')
      },


    ]
  })
  
  export default router