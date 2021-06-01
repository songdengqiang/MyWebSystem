import Vue from 'vue'
import Router from 'vue-router'
import login from './modules/login'

Vue.use(Router)

/* Layout */

export const constantRoutes = [
    {
        path: '/',
        redirect:'/lg/login1',
        meta: {name: "个人管理系统"}
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('@/views/404'),
        meta: {name:'错误界面'}
    },
    login,
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router