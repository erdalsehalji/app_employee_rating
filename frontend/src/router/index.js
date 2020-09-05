import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  Auth
} from '@/services/index.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },


  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: () => import( /* webpackChunkName: "about" */ '../views/AdminDashboard.vue')
  },

  {
    path: '/EmployeeCard',
    name: 'EmployeeCard',
    component: () => import( /* webpackChunkName: "about" */ '../views/EmployeeCard.vue')
  },

  {
    path: '/EmployeeCardList',
    name: 'EmployeeCardList',
    component: () => import( /* webpackChunkName: "about" */ '../views/EmployeeCardList.vue')
  },

  {
    path: '/AdminDashboard/:id',
    props: true,
    name: 'card-detail',
    component: () => import( /* webpackChunkName: "about" */ '../views/EmployeeCardDetailed.vue')
  },

  {
    path: '/Login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
  },

  {
    path: '/Register',
    name: 'Register',

    component: () => import( /* webpackChunkName: "about" */ '../views/Register.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ["/Login", "/Register", "/", "/EmployeeCardList"]
  const loginNeeded = !publicPages.includes(to.path)
  const user = Auth.getUser()

  if (loginNeeded && !user) {
    next('/Login')
    return
  }

  next()

})

export default router
