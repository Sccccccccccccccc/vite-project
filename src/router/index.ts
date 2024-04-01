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
      path: '/blank',
      component: () => import('../views/blankPage/blankPage.vue')
    },
    {
      path: '/page4',
      component: () => import('../views/page4/page4.vue')
    },
    {
      path: '/page5',
      component: () => import('../views/page5/map.vue')
    },
    {
      path: '/page6',
      component: () => import('../views/page6/index.vue')
    },
  ]
})

export default router