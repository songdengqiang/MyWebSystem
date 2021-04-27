export default {
    state:{
        neo4jState:false,
        neo4jAllData:{},
        initNeo4jData:{},
        entityList:[],
        kgraphInfo:{
            databaseA: "",
            databaseD: "7687",
            dataBaseS:false,
        }
    },
    getters:{},
    mutations:{
        connectNeo4j(state){
            if (!state.kgraphInfo.dataBaseS){
                state.neo4jState = true
            }else {
                state.neo4jState = false
            }
        },
        closeNeo4j(state){
            state.neo4jState = false
        },
        changNeo4jInfo(state,info){
            state.kgraphInfo = info
        },
        addNeo4jAllData(state,param){
            state.neo4jAllData = param
        },
        initNeo4jDatas(state,param){
            state.initNeo4jData = param
            for(let i of param.nodes){
                state.entityList.push(i.name)
            }
        },
        clearEntityList(state){
            state.entityList = []
        },
        editDataBase(state,index){
            state.neo4jAllData.nodes.splice(index,1)
        }
    },
    actions:{

    }
}
