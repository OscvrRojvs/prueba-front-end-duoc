import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLogin from '../views/TheLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: TheLogin
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../components/layout/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/TheHome.vue')
      },
      {
        path: '/ordenes',
        name: 'Ordenes',
        component: () => import('../views/TheOrdenes.vue')
      },
      {
        path: '/ordenes/detalleOrden',
        name: 'DetalleOrdenes',
        component: () => import('../views/TheDetalleOrden.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
