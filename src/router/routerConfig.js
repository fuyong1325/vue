export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about'),
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "other" */ '@/views/exception/404'),
  },
  {
    path: '*',
    redirect: { name: '404' },
    hidden: true,
  },
]
