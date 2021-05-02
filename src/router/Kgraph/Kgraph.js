export default {
    path:'kgHome',
    name:'知识图谱主页',
    component:()=> import('@/views/Kgraph/kgraph'),
    meta:{titile:"知识图谱主页！"},
    children:[
        {
            path: 'FileInput',
            name: '文件导入',
            component: () => import('@/views/Kgraph/kgInputPanel'),
            meta: {titile: '文件导入'}
        }
    ]
}
