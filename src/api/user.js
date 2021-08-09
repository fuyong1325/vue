import apiDefault from './'

// 登录
export function apiLogin(data) {
  return apiDefault({
    url: 'web/login',
    method: 'POST',
    data,
    ignoreMessage: true,
  })
}

// 注销
export function apiLogout() {
  return apiDefault({
    url: 'web/logout',
    method: 'POST',
    ignoreMessage: true,
  })
}

// 用户信息
export function apiProfile() {
  return apiDefault({
    url: 'web/profile',
    method: 'GET',
  })
}

// 修改密码
export function apiUpdatePassword(data) {
  return apiDefault({
    url: 'user/update-password',
    method: 'POST',
    data,
  })
}
