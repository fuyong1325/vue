import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { VueAxios } from './axios'
import msg from '@/utils/message'

const apiDefault = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL + process.env.VUE_APP_API_VERSION,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

const apiUpload = axios.create({
  baseURL: process.env.VUE_APP_UPLOAD_BASE_URL + process.env.VUE_APP_API_VERSION,
  timeout: process.env.VUE_APP_UPLOAD_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

const errorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      msg.notice(401)
      // if (Vue.ls.get(ACCESS_TOKEN)) {
      //   store.dispatch('Logout')
      // }
    } else if (error.response.status) {
      msg.notice(error.response.status)
    }
  } else if (error.code === 'ECONNABORTED') {
    msg.notice(90001)
  } else if (error.isAxiosError) {
    msg.notice(90002)
  } else {
    msg.notice(99999)
  }
  // console.log(error.toJSON())
  // Object.keys(error).forEach((key) => {
  //   console.log(key, error[key])
  // })
  return Promise.reject(error)
}

const reqInterceptor = (config) => {
  const token = Vue.ls.get('Access-Token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}

const resInterceptorService = (res) => {
  if (res.status === 200) {
    const { code, message } = res.data
    const { method, ignoreMessage } = res.config
    if (['401', '1111'].includes(code)) {
      msg.notice(code)
      store.dispatch('Logout')
    } else if (code !== '200') {
      if (code > 99999) {
        msg.toast(code, message)
      } else {
        msg.notice(code, message)
      }
      return Promise.reject(res)
    }
    if (typeof res.data !== 'string') {
      if (!ignoreMessage) {
        if (['post', 'put'].includes(method)) {
          msg.toast(10001)
        } else if (method === 'delete') {
          msg.toast(10002)
        }
      }
    }
    return res.data
  } else {
    return Promise.reject(res)
  }
}

apiDefault.interceptors.request.use(reqInterceptor, errorHandler)
apiDefault.interceptors.response.use(resInterceptorService, errorHandler)

apiUpload.interceptors.request.use(reqInterceptor, errorHandler)
apiUpload.interceptors.response.use(resInterceptorService, errorHandler)

const installer = {
  vm: {},
  // eslint-disable-next-line no-shadow
  install(Vue) {
    Vue.use(VueAxios, apiDefault)
  },
}

export default apiDefault

export { installer as VueAxios, apiDefault, apiUpload }
