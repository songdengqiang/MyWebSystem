import {mapMutations} from 'vuex'
import {getData} from "../../tools/network/requests";
import creatKg from "../../assets/js/creatKG";

export default {
    data(){
        return{
            kgraphInfo:{
                databaseA: "Graph",
                databaseP: "123456",
                databaseD: "7687",
                databaseS:false
            },
            myKG1:null,
            fileInfo:{
                kgInfoList:[],
                entityInfoList:[]
            },
            btnShow:false
        }
    },
    methods:{
        ...mapMutations(['connectNeo4j','closeNeo4j','changNeo4jInfo','addNeo4jAllData','changInputState','initNeo4jDatas','clearEntityList']),
        loginDatabase() {
            const _this = this
            getData({url:'/user/graphs/connectNetwork',method:'post',data: _this.kgraphInfo}).then(res =>{
                if(res !== '失败'){
                    _this.$message('neo4j数据登录成功！')
                    _this.initNeo4jDatas(res)
                    _this.kgraphInfo.dataBaseS = true
                    _this.changNeo4jInfo(_this.kgraphInfo)
                    _this.closeNeo4j()
                }else {
                    _this.$message('数据库连接失败!')
                }

            }).catch(()=>{
                _this.$message('后台连接失败!')
            })
        },
        displays(num) {
            const _this = this
            switch (num) {
                case 0:
                    _this.closeNeo4j()
                    break
                case 1:
                        _this.drawer = false
                        _this.connectNeo4j()
                        break
                case 2:
                        _this.kgraphInfo.dataBaseS = false
                        _this.changNeo4jInfo(_this.kgraphInfo)
                        break
            }
        },
        drawKg(path){
            const _this = this
            getData({url:path}).then(res=>{
                // console.log(res);
                if(res !== '失败'){
                    _this.addNeo4jAllData(res.datas)
                    _this.$message('知识数据查询成功，正在构建知识网络！')
                    this.myKG1.updataGraphs(_this.$store.state.graphModule.neo4jAllData);
                }
            }).catch(()=>{
                _this.$message('知识数据查询失败！')
            })
        },
        clearKg(num){
            const _this = this
            if (num ===0){
                _this.addNeo4jAllData({links:[],nodes:[]})
                _this.myKG1.updataGraphs(_this.$store.state.graphModule.neo4jAllData)
            }else {
                _this.addNeo4jAllData({links:[],nodes:[]})
                getData({url:'/user/graphs/deleteD'}).then(res=>{
                    _this.$message(res.info)
                    _this.initNeo4jDatas({links:[],nodes:[]}) //
                    // _this.initNeo4jDatas({links:[],nodes:[]})
                    _this.clearEntityList()  //清空缓存
                }).catch(()=>{
                    _this.$message('删除失败！')
                })
            }

        },
        dataImport(num){
            const _this = this
            if (num === 0 ){
                _this.changInputState()
                _this.drawer = false

            }
        },
        fileImport(idName) {
          document.getElementById(idName).click();
        },
        readFile(logo,pageName){
            const _this = this
            let fileContent = document.getElementById(logo).files[0]
            _this.fileInfo.name = fileContent.name
            _this.fileInfo.size = fileContent.size
            let reader = new FileReader()
            reader.readAsText(fileContent)
            reader.onload = (res)=>{
                let strList = res.target.result.split('\n')  //划分每一行
                for(let item of strList){
                    let listItem = item.split('\t') //划分头尾关系
                    if(listItem[0]!==undefined && listItem[0]!=='' && listItem[1]!==undefined && listItem[1]!=='' && listItem[2]!==undefined && listItem[2]!==''){
                        let kgraph = {}
                        kgraph.header = listItem[0]
                        kgraph.footer = listItem[1]
                        kgraph.relation = listItem[2]
                        _this.fileInfo.kgInfoList.push(kgraph)
                        //处理实体
                        if(_this.fileInfo.entityInfoList.indexOf(listItem[0]) === -1){
                            _this.fileInfo.entityInfoList.push(listItem[0])
                        }
                        if(_this.fileInfo.entityInfoList.indexOf(listItem[1]) === -1){
                            _this.fileInfo.entityInfoList.push(listItem[1])
                        }
                        if(_this.fileInfo.entityInfoList.indexOf(listItem[2]) === -1){
                            _this.fileInfo.entityInfoList.push(listItem[2])
                        }
                    }
                }
                _this.itemList = []
                for (let item of _this.fileInfo.entityInfoList){
                    let newD = {}
                    newD.name = item
                    newD.type = 'commons'
                    newD.color = 'greenyellow'
                    _this.itemList.push(newD)
                }
                // console.log(_this.itemList);
                _this.$message('数据读取成功！')
                this.pageJump(pageName);
            }
        }
    },
    created() {
        this.myKG1 =  new creatKg("kgGraphContain");
    },
    mounted() {
    },
    updated() {
    }
}
