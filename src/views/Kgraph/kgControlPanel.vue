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
      <h4>数据库的操作</h4>
      <el-row>
        <el-button type="success" size="small" plain @click="displays(1)"
          >连接数据库</el-button
        >
        <el-button type="info" size="small" plain @click="displays(2)">退出数据库数据</el-button>
      </el-row>
      <el-row>
        <h4 v-show="$store.state.graphModule.kgraphInfo.dataBaseS">数据库：{{$store.state.graphModule.kgraphInfo.databaseA}}以登录！</h4>
        <h4 v-show="!$store.state.graphModule.kgraphInfo.dataBaseS">数据库：尚未登录！</h4>
      </el-row>
      <h4>可视化功能</h4>
      <div class="otherControl" v-show="$store.state.graphModule.kgraphInfo.dataBaseS">
        <el-dropdown trigger="click" class="kgNumChoose">
          <span class="el-dropdown-link">
            知识节点可视化<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getAllData')">所有知识组显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"><span @click="drawKg('/user/graphs/getlimit1')">25组知识显示</span></el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit2')">50组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit3')">100组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit4')">200组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit5')">400组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit6')">800组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit7')">1600组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="drawKg('/user/graphs/getlimit8')">3200组知识显示</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="info" size="small" plain @click="clearKg(0)">清空显示</el-button>
        <hr>
        <h4>数据的导入功能</h4>
        <el-row>
          <el-button type="info" size="small" plain @click="dataImport(0)" class="btnStyle">txt数据导入</el-button>
          <el-button type="info" size="small" plain  class="btnStyle">txt数据导出</el-button>
          <el-button type="info" size="small" plain @click="dataImport(0)" class="btnStyle">json数据导入</el-button>
          <el-button type="info" size="small" plain  class="btnStyle">json数据导出</el-button>
          <el-button type="info" size="small" plain @click="dataImport(0)" class="btnStyle">csv数据导入</el-button>
          <el-button type="info" size="small" plain  class="btnStyle">csv数据导出</el-button>
        </el-row>
        <hr>
        <h4>其它功能</h4>
        <el-row>
          <el-button type="info" size="small" plain  class="btnStyle" @click="clearKg(1)">清空数据库知识</el-button>
          <el-button type="info" size="small" plain  class="btnStyle">修改显示设置</el-button>
        </el-row>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import mixins from './mixins'
export default {
  name: "kgControlPanel",
  mixins:[mixins],
  data() {
    return {
      drawer: false,
      otherControl: false,
    };
  },
  methods: {

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
}
.btnStyle{
  margin: 1rem;
}
</style>
