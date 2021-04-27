export default {
    path:'kgHome',
    name:'知识图谱主页',
    component:()=> import('@/views/Kgraph/kgraph'),
    meta:{titile:"知识图谱主页！"},
    children:[
        {
            path: 'txtFileInput',
            name: 'txt文件导入',
            component: () => import('@/views/Kgraph/inputPanel/txtFileInput'),
            meta: {titile: 'txt文件导入'}
        },
        {
            path: 'editDatabase',
            name: '数据库知识的修改！',
            component: () => import('@/views/Kgraph/inputPanel/editDatabase'),
            meta: {titile: '数据库知识修改'}
        }
    ]
}
