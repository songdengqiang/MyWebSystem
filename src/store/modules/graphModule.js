import * as pathParing from '@/tools/network/pathParing'
export default {
    state:{
        //初始化的时候加载
        neo4jState:false,
        kgraphInfo:{
            dbAcount: "graph",
            dbPort: 7687,
            dbPassword:'123456'
        },
        //登录后缓存
        initNeo4jData:{
            nodes:[],
            links:[]
        },
        entityList:[]
    },
    getters:{},
    mutations:{
        connectNeo4j(state,info){
            state.neo4jState = true
            state.kgraphInfo.dbPort === info.dbPort
            state.kgraphInfo.dbAcount === info.dbAcount
            state.kgraphInfo.dbPassword === info.dbPassword
        },
        closeNeo4j(state){
            state.neo4jState = false
            state.kgraphInfo.dbPort === '7687'
            state.kgraphInfo.dbAcount === 'graph'
            state.kgraphInfo.dbPassword === '123456'
        },
        initNeo4j(state,info){
            state.neo4jState = true
            state.kgraphInfo.dbAcount = info
        },
        initNeo4jDatas(state,param){
            state.initNeo4jData = param
        },
    },
    actions:{
        initNeo4jDatasSync(context){
            pathParing.getAllNeo4j().then(res=>{
                context.commit('initNeo4jDatas',res.datas)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
