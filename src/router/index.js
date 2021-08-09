import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRouterMap } from '@/router/routerConfig'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
})

const router = createRouter()

export default router

export { router, createRouter }
