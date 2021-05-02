<template>
  <div class="flexDiv_C KgraphCon kgGraphContain">
    <!-- 控制面板的子模块 -->
      <kgControl class="kgControlc"></kgControl>
      <loginPanel v-show="!$store.state.graphModule.neo4jState" class="databaseLogin">
        <h4 slot="title">neo4j数据库登录</h4>
        <el-form :model="kgraphInfo" label-width="80px" slot="content">
          <el-form-item label="端口：">
            <el-input v-model="kgraphInfo.dbPort" clearable placeholder="只能输入数字"></el-input>
          </el-form-item>
          <el-form-item label="账户：">
            <el-input v-model="kgraphInfo.dbAcount" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="kgraphInfo.dbPassword" :disabled="true" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-row slot="buttons">
          <el-button @click="loginDatabase()" :plain="true">登录</el-button>
          <el-button>创建</el-button>
        </el-row>
      </loginPanel>
      <router-view/>
<!--      <kgInputPanel class="inputPanel"></kgInputPanel>-->
  </div>
</template>

<script>
import kgControl from "./kgControlPanel"
import loginPanel from "../../components/loginPanel";
// import kgInputPanel from "./kgInputPanel";
import mixins from '@/tools/mixins'
import * as pathParing from '@/tools/network/pathParing'

export default {
  name: "kgraph",
  components: {
    kgControl,
    loginPanel
  },
  mixins:[mixins],
  data() {
    return {
      pageName:'kgraph',
      controlInfo: "固定控制栏",
      controlState: false,
      kgraphInfo: {
        dbPort:7687,
        dbAcount:'graph',
        dbPassword:'123456'
      }
    };
  },
  methods:{
    loginDatabase(){
      const _this = this
      if(_this.$store.state.graphModule.neo4jState){
        _this.$message('你已登录数据库:'+ _this.$store.state.graphModule.kgraphInfo.dbAcount + '占用端口:' + _this.$store.state.graphModule.kgraphInfo.dbPort)
      }else{
        pathParing.connectDB(_this.kgraphInfo).then(res =>{
          if(res === '连接成功'){
            _this.$message('neo4j数据登录成功！')
            _this.$store.commit('connectNeo4j',_this.kgraphInfo)
            //设置页面的存储
            sessionStorage.setItem('neo4jInfo',_this.kgraphInfo.dbAcount)
            //获取数据，初始化数据
            pathParing.getAllNeo4j().then(res=>{
              _this.$store.commit('initNeo4jDatas',res.datas)
            }).catch(()=>{
              _this.$message('知识数据获取失败！')
            })
          }else {
            _this.$message('数据库连接失败!')
          }
        }).catch(()=>{
          _this.$message('后台连接失败!')
        })
      }
    },
  },

};
</script>

<style scoped lang='css'>
@import url("../../assets/css/common/common.css");
@import url("../../assets/css/common/flexDiv.css");
.KgraphCon{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
}
.kgControlc{
  position: absolute;
  top: 6vh;
  right: 2vw;
}
.databaseLogin{
  position: absolute;
  left: 0;
  top: 0;
}
</style>
