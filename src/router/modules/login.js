import login from '@/views/login'

const sysRouter = {
    path: '/lg',
    component: login,
    name: 'Login',
    meta: { title: '登录界面'},
    children: [{
            path: 'login1',
            name: 'Login1',
            component: () =>
                import ('@/views/login/login1'),
            meta: { title: '登录界面1'}
        }
    ]
}

export default sysRouter