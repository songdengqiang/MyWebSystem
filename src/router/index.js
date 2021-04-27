import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Kgraph from "./Kgraph/Kgraph";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{titile:'系统登录界面'}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{titile:'系统登录界面'}
  },
  {
    path:'/home',
    name:'Home',
    component:() => import('@/views/Home'),
    meta:{titile:'系统首页'},
    children:[
      Kgraph
    ]
  },
  {
    path:'/err',
    name:'err',
    component:() => import('@/views/404.vue'),
    meta:{titile:'错误页面'}
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next)=>{
  //从from跳转到to

  document.title = to.matched[to.matched.length-1].meta.titile
  next();
})

export default router
