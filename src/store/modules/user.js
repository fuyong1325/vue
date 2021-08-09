import Vue from 'vue'
import router from '@/router'
import { apiLogin, apiLogout, apiProfile } from '@/api/user'

const user = {
  state: {
    token: '',
    profile: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_PROFILE: (state, profile) => {
      state.profile = profile
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        apiLogin(userInfo)
          .then((res) => {
            const resData = res.data
            Vue.ls.set('Access-Token', resData.bearer, Number(process.env.VUE_APP_USER_EXPIRE))
            commit('SET_TOKEN', resData.bearer)
            resolve(resData)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        apiLogout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
          .finally(() => {
            commit('SET_TOKEN', '')
            commit('SET_PROFILE', {})
            Vue.ls.remove('Access-Token')
            Vue.ls.remove('profile')
            // router.push({ name: 'Login', query: { redirect: router.currentRoute.fullPath } })
            router.push({ name: 'index' })
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        // const profile = Vue.ls.get('profile')
        // if (profile && Object.keys(profile).length > 0) {
        //   commit('SET_PROFILE', profile)
        //   resolve(profile)
        // } else {
        apiProfile()
          .then((res) => {
            const resData = res.data
            // if (resData.permissionCodes && resData.permissionCodes.length > 0) {
            // Vue.ls.set('profile', resData, Number(process.env.VUE_APP_USER_EXPIRE))
            commit('SET_PROFILE', resData)
            // } else {
            //   reject(new RangeError('getInfo: permissionCodes must be a non-null array !'))
            // }
            resolve(resData)
          })
          .catch((error) => {
            reject(error)
          })
        // }
      })
    },
  },
}

export default user
