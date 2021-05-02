import {mapMutations} from 'vuex'
import creatKg from "../../assets/js/creatKG";
import * as pathParing from '@/tools/network/pathParing'

export default {
    data(){
        return{
            myKG1:null,
            neo4jData:{
                nodes:[],
                links:[]
            },
            fileInfo:{
                kgInfoList:[],
                entityInfoList:[]
            },
        }
    },
    computed:{

    },
    methods:{
        ...mapMutations(['connectNeo4j','closeNeo4j','changNeo4jInfo','addNeo4jAllData','changInputState','initNeo4jDatas','clearEntityList']),
        getNeo4jData(num){
            const _this = this
            if(num === 'n'){
                pathParing.getAllNeo4j().then((res)=>{
                    _this.neo4jData = res.datas
                    _this.$message('数据获取成功，开始构建知识网络！')
                    _this.drawKg()
                }).catch(()=>{
                    _this.$message('数据获取失败！')
                })
            }else {
                pathParing.getPartNeo4j({data:num}).then((res)=>{
                    _this.neo4jData = res.datas
                    _this.$message('数据获取成功，开始构建知识网络！')
                    _this.drawKg()
                }).catch(()=>{
                    _this.$message('数据获取失败！')
                })
            }
        },
        drawKg(){
            const _this = this
            _this.myKG1.updataGraphs(_this.neo4jData);
        },
        clearKg(num){
            const _this = this
            if (num ===0){
                _this.neo4jData = {links:[],nodes:[]}
                _this.myKG1.updataGraphs(_this.neo4jData)
            }else {
                pathParing.deleteNeo4j().then((res)=>{
                    _this.$message(res.info)
                    _this.$store.commit('initNeo4jDatas',{nodes:[],links:[]})
                }).catch(()=>{
                    _this.$message('数据删除失败！')
                })
            }

        },
        dataImport(num){
            const _this = this
            if (num === 0 ){
                _this.$router.push({path:'/home/kgHome/FileInput'})
                _this.drawer = false

            }
        },
        fileImport(idName) {
          document.getElementById(idName).click();
        },
        readFile(logo){
            const _this = this
            _this.fileInfo = {
                kgInfoList:[],
                entityInfoList:[]
            }
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
                let itemLists = []
                let num = 0;
                for (let item of _this.fileInfo.entityInfoList){
                    let newD = {}
                    newD.numberId = num
                    newD.name = item
                    newD.type = 'commons'
                    newD.color = 'greenyellow'
                    itemLists.push(newD)
                    num++
                }
                _this.fileInfo.entityInfoList = itemLists
                _this.$message('数据读取成功！')
            }
        },
        searchDataNum(num){
            const _this = this
            let countNum = 0
            switch (num){
                case 0:
                    countNum = _this.$store.state.graphModule.initNeo4jData.nodes.length
                    _this.$message('知识节点的数量为：'+countNum)
                    break
                case 1:
                    countNum = _this.$store.state.graphModule.initNeo4jData.links.length
                    _this.$message('知识三元组的数量为：'+countNum)
                    break
            }
        },

    },
    created() {
        this.myKG1 =  new creatKg("kgGraphContain");
    },
    mounted() {
    },
    updated() {
    }
}
