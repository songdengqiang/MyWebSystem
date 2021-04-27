<template>
  <div class="flexDiv_C KgraphCon kgGraphContain">
    <!-- 控制面板的子模块 -->
      <kgControlc class="kgControlc"></kgControlc>
      <loginPanelc v-show="$store.state.graphModule.neo4jState" class="databaseLogin">
        <h4 slot="title">neo4j数据库登录</h4>
        <el-form :model="kgraphInfo" label-width="80px" slot="content">
          <el-form-item label="端口：">
            <el-input v-model="kgraphInfo.databaseD" clearable placeholder="只能输入数字"></el-input>
          </el-form-item>
          <el-form-item label="账户：">
            <el-input v-model="kgraphInfo.databaseA" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="kgraphInfo.databaseP" :disabled="true" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-row slot="buttons">
          <el-button @click="loginDatabase()" :plain="true">登录</el-button>
          <el-button @click="displays(0)">取消</el-button>
        </el-row>
      </loginPanelc>
      <kgInputPanel v-show = "$store.state.inputState" class="inputPanel"></kgInputPanel>
  </div>
</template>

<script>
import kgControl from "./kgControlPanel"
import loginPanel from "../../components/loginPanel";
import kgInputPanel from "./kgInputPanel";
import mixins from './mixins'
import mixins1 from '@/tools/mixins'

export default {
  name: "kgraph",
  components: {
    kgControlc: kgControl,
    loginPanelc:loginPanel,
    kgInputPanel,
  },
  mixins:[mixins1,mixins],
  data() {
    return {
      // 知识图谱库数据变量
      //页面变量
      pageName:'kgraph',
      controlInfo: "固定控制栏",
      controlState: false,
    };
  },
  methods:{

  },
  mounted() {
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
.inputPanel{
  position: absolute;
  border-radius: 1rem;
  width: 80%;
  height: 85%;
  left: 3rem;
  top: 7vh;
  background-color: rgba(255,255,255,0.6);
}
</style>
