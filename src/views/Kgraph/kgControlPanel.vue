<template>
  <div slot="left" class="controlP">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px">
      可视化功能面板
    </el-button>
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      class="panelCon"
      v-show="drawer"
    >
      <el-card class="box-card" style='height: 30%'>
        <div slot="header" class="clearfix">
          <span>数据库操作</span>
        </div>
        <div class="text item">
          <el-row>
            <el-button type="success" size="small" plain @click="loginDatabase()"
            >连接数据库</el-button
            >
            <el-button type="info" size="small" plain @click="closeDatabase()">退出数据库数据</el-button>
          </el-row>
          <el-row>
            <h4 v-show="$store.state.graphModule.neo4jState">数据库：{{$store.state.graphModule.kgraphInfo.dbAcount}}以登录,占用端口:{{$store.state.graphModule.kgraphInfo.dbPort}}</h4>
            <h4 v-show="!$store.state.graphModule.neo4jState">数据库：尚未登录！</h4>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card" style='height: 70%'>
        <div slot="header" class="clearfix">
          <span>可视化功能</span>
        </div>
        <div class="text item">
          <div class="otherControl" v-show="$store.state.graphModule.neo4jState">
            <el-dropdown trigger="click" class="kgNumChoose">
              <span class="el-dropdown-link">
                知识节点可视化<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-circle-check"
                ><span @click="getNeo4jData('n')">所有知识组显示</span></el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-check"><span @click="getNeo4jData('25')">25组知识显示</span></el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check"
                ><span @click="getNeo4jData('50')">50组知识显示</span></el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-check"
                ><span @click="getNeo4jData('100')">100组知识显示</span></el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-check"
                ><span @click="getNeo4jData('200')">200组知识显示</span></el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-check"
                ><span>自定义个数</span></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <el-button type="info" size="small" plain @click="clearKg(0)">清空显示</el-button>
            <hr>
            <h4>其它功能</h4>
            <el-row>
              <el-button type="info" size="small" plain @click="dataImport(0)" class="btnStyle">数据导入导出</el-button>
              <el-dropdown trigger="click" class="kgNumChoose">
              <span class="el-dropdown-link">
                数据库操作<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-circle-check" >
                    <span @click='clearKg(1)'>清空数据库知识</span>
                  </el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check" >
                    <span @click='searchDataNum(0)'>查询数据库节点数</span>
                  </el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check" >
                    <span @click='searchDataNum(1)'>查询数据库知识数</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
            <hr>
          </div>
        </div>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
import mixins from './mixins'
// import * as pathParing from '@/tools/network/pathParing'

export default {
  name: "kgControlPanel",
  mixins:[mixins],
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    loginDatabase(){
      const _this = this
      if(_this.$store.state.graphModule.neo4jState){
        _this.$message('你已登录数据库:'+ _this.$store.state.graphModule.kgraphInfo.dbAcount + '占用端口:' + _this.$store.state.graphModule.kgraphInfo.dbPort)
      }else{
        _this.$store.commit('closeNeo4j')
      }
    },
    closeDatabase(){
      const _this = this
      sessionStorage.setItem('neo4jInfo','')
      _this.$store.commit('closeNeo4j')
      _this.$message('数据库已退出！')
    }
  },
};
</script>

<style scoped lang='css'>
h4 {
  font-size: 1.5rem;
  height: 5vh;
  border-bottom: 1px solid gainsboro;
}
.kgNumChoose{
  border: 1px gainsboro solid;
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 2rem;
  color: rgb(85, 132, 15);
}
.kgNumChoose:hover{
  background-color: #86ce63;
}
span{
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-family: '楷体';
}
.btnStyle{
  margin: 1rem;
}
</style>
