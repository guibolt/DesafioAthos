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
    component: () => import(/* webpackChunkName: "veremail" */ '../views/Emails.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "usuarios" */ '../views/Usuarios.vue')
  },
  {
    path: '/condominios',
    name: 'Condominios',
    component: () => import(/* webpackChunkName: "condominios" */ '../views/Condominios.vue')
  },
  {
    path: '/administradoras',
    name: 'Administradoras',
    component: () => import(/* webpackChunkName: "condominios" */ '../views/Administradoras.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
