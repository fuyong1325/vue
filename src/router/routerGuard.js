import Vue from 'vue'
import router from './'
import store from '@/store'

import { setDocumentTitle, domTitle } from '@/utils/domUtil'

// const routeNameAllowList = ['Login', 'Register'] // 免登录名单
const routeNameLogin = 'Login'
const routeNameDefault = 'index'

router.beforeEach((to, from, next) => {
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`)

  if (Vue.ls.get('Access-Token')) {
    if (to.name === routeNameLogin) {
      next({ name: routeNameDefault })
    } else if (!store.getters.profile || Object.keys(store.getters.profile).length === 0) {
      store.dispatch('GetInfo').then((res) => {
        next({ name: routeNameDefault })
      })
    } else {
      next()
    }
  // } else if (routeNameAllowList.includes(to.name)) {
  //   next()
  } else {
    // next({ name: routeNameLogin, query: { redirect: to.fullPath } })
    next()
  }
})

router.afterEach((to, from) => {})
