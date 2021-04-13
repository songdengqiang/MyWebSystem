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
        <el-button type="success" size="small" plain @click="displayLogin"
          >连接数据库</el-button
        >
        <el-button type="info" size="small" plain @click="getData(databaseInfo,1,'deleteD')">清空数据库数据</el-button>
      </el-row>
      <el-row>
        <h4>{{ loginInfo }}{{ infoJudge }}</h4>
      </el-row>
      <h4>可视化功能</h4>
      <div class="otherControl" v-show="otherControl">
        <el-dropdown trigger="click" class="kgNumChoose">
          <span class="el-dropdown-link">
            知识节点可视化<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-circle-check" 
              ><span @click="getData(databaseInfo,1,'getAlK')">所有知识组显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"><span @click="getData(databaseInfo,1,'getlimit1')">25组知识显示</span></el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit2')">50组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit3')">100组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit4')">200组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit5')">400组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit6')">800组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit7')">1600组知识显示</span></el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check"
              ><span @click="getData(databaseInfo,1,'getlimit8')">3200组知识显示</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="info" size="small" plain @click="clearKgInfo()">清空显示</el-button>
        <hr>
        <h4>数据的导入功能</h4>
        <el-row>
          <el-button type="info" size="small" plain @click="clearKgInfo()" class="btnStyle">txt数据导入</el-button>
          <el-button type="info" size="small" plain @click="clearKgInfo()" class="btnStyle">txt数据导出</el-button>
          <el-button type="info" size="small" plain @click="clearKgInfo()" class="btnStyle">json数据导入</el-button>
          <el-button type="info" size="small" plain @click="clearKgInfo()" class="btnStyle">json数据导出</el-button>
          <el-button type="info" size="small" plain @click="clearKgInfo()" class="btnStyle">csv数据导入</el-button>
          <el-button type="info" size="small" plain @click="clearKgInfo()" class="btnStyle">csv数据导出</el-button>
        </el-row>
        <hr>
        <h4>其它功能</h4>
        <el-row>

        </el-row>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import mixins from '../assets/js/methods'
export default {
  name: "kgControlPanel",
  //从父元素获取数据
  props: ["databaseInfo"],
  mixins:[mixins],
  data() {
    return {
      drawer: false,
      otherControl: false,
      statue: this.databaseInfo.states,
      loginInfo: "你的数据库登录：",
    };
  },
  computed: {
    infoJudge: function () {
      const _this = this;
      if (this.databaseInfo.states === "成功") {
        _this.otherControl = true;
      } else {
        _this.otherControl = false;
      }
      return this.databaseInfo.states;
    },
  },
  methods: {
    displayLogin() {
      const _this = this;
      _this.drawer = false;
      _this.$emit("loginps", true);
    },
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