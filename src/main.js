import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/routerGuard'
import store from './store'

import './core/onDemand'
import config from './core/config'

import './styles/global.less'

import VueStorage from 'vue-ls'
Vue.use(Object.assign({}, VueStorage), config.localStorage)
Vue.use(Object.assign({}, VueStorage), config.sessionStorage)

import { VueAxios } from './api'
Vue.use(VueAxios)

import xss from 'xss'
Vue.prototype.xss = xss

import enums from '@/enum'
Object.assign(Vue.prototype, enums)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
