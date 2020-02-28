import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/mandaremail',
    name: 'EnviarEmail',
    component: () => import(/* webpackChunkName: "enviaremail" */ '../views/EnviarEmail.vue')
  },
  {
    path: '/veremails',
    name: 'Emails',
    component: () => import(/* webpackChunkName: "enviaremail" */ '../views/Emails.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
