import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
// import NaverLogin from '../views/NaverLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // path: '/kakaologin',
    // name: 'KaKaoLogin',
    // component: KaKaoLogin
    // path: '/naverlogin',
    // name: 'NaverLogin',
    // component: () => import(/* webpackChunkName: "parent" */ '../views/NaverLogin.vue')
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
