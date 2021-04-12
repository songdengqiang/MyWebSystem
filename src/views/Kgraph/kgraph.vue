<template>
  <div class="flexDiv_C KgraphCon">
    <!-- 控制面板的子模块 -->
      <kgControlc class="kgControlc" :databaseInfo='kgraphInfo' @loginps ="displays(0)"></kgControlc>
      <loginPanelc v-show="kgraphInfo.dataBaseS" class="databaseLogin">
        <h4 slot="title">neo4j数据库登录</h4>
        <el-form :model="kgraphInfo" label-width="80px" slot="content">
          <el-form-item label="端口：">
            <el-input v-model="kgraphInfo.databaseD"></el-input>
          </el-form-item>
          <el-form-item label="账户：">
            <el-input v-model="kgraphInfo.databaseA"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="kgraphInfo.databaseP"></el-input>
          </el-form-item>
        </el-form>
        <el-row slot="buttons">
          <el-button @click="loginDatabase(0)" :plain="true">登录</el-button>
          <el-button @click="displays(1)">取消</el-button>
        </el-row>
      </loginPanelc>
  </div>
</template>

<script>
import kgControl from "../../components/kgControlPanel"
import loginPanel from "../../components/loginPanel";
import mixins from '../../assets/js/methods'

export default {
  name: "kgraph",
  components: {
    kgControlc: kgControl,
    loginPanelc:loginPanel
  },
  mixins:[mixins],
  data() {
    return {
      // 知识图谱库数据变量
      myKG1: null,
      myKgD: {
        nodes: [
          {
            id: 0,
            color: "red",
            labels: ["person"],
            name: "默认节点1",
          },
          {
            id: 1,
            color: "green",
            labels: ["person"],
            name: "默认节点2",
          },
        ],
        links: [
          {
            source: 0,
            target: 1,
            relation: "next",
          },
        ],
      },
      //页面变量
      controlInfo: "固定控制栏",
      controlState: false,
    };
  },
  methods:{
    displays(num){
      const _this = this
      switch(num){
        case 0:
          _this.kgraphInfo.dataBaseS = true
          break
        case 1:
           _this.kgraphInfo.dataBaseS = false
           break
      }
      
    }
  },
  // methods: {
  //   drawKgraph(num) {
  //     const _this = this;
  //     switch (num) {
  //       //   绘制所有的数据
  //       case 0:
  //         _this.displayKg();
  //         break;
  //       // 清空所有数据
  //       case 1:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.displayKg();
  //         break;
  //     }
  //   }, // 知识节点的显示
  //   displayBar() {
  //     const _this = this;
  //     if (!_this.controlState) {
  //       d3.select(".controlBar")
  //         .style("height", "4rem")
  //         .selectAll("button")
  //         .style("opacity", "1");
  //       d3.select(".controlBar")
  //         .selectAll(".input-group")
  //         .style("opacity", "1");
  //       _this.controlInfo = "解除固定";
  //       _this.controlState = true;
  //     } else {
  //       d3.select(".controlBar")
  //         .style("height", "1rem")
  //         .selectAll("button")
  //         .style("opacity", "0");
  //       d3.select(".controlBar")
  //         .selectAll(".input-group")
  //         .style("opacity", "0");
  //       _this.controlInfo = "固定控制栏";
  //       _this.controlState = false;
  //     }
  //   }, // 控制菜单的控制
  //   login(num) {
  //     const _this = this;
  //     let params = {
  //       port: _this.databaseD,
  //       name: _this.databaseA,
  //       password: _this.databaseP,
  //     };
  //     switch (num) {
  //       case 0:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         // console.log(_this.databaseD, _this.databaseA, _this.databaseP);

  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getCon",
  //           params,
  //           (datas) => {
  //             _this.dataBaseS = false;
  //             _this.displayBar();
  //           }
  //         );
  //         break;
  //       case 1:
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getAlE",
  //           params,
  //           (datas) => {
  //             _this.myKgD.nodes = datas;
  //             _this.comF.getDBdata(
  //               _this.pathV + "/user/graphs/getAlK",
  //               params,
  //               (data1) => {
  //                 _this.myKgD.links = data1;
  //                 _this.myKG1.updataGraphs(_this.myKgD);
  //               }
  //             );
  //           }
  //         );
  //         break;
  //       case 2:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         break;
  //       case 3:
  //         _this.displayBar();
  //         _this.dataBaseS = true;
  //         break;
  //       case 4:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit1",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 5:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit2",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 6:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit3",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 7:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit4",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 8:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit5",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 9:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit6",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 10:
  //         _this.myKgD.nodes = [];
  //         _this.myKgD.links = [];
  //         _this.myKG1.updataGraphs(_this.myKgD);
  //         _this.comF.getDBdata(
  //           _this.pathV + "/user/graphs/getlimit7",
  //           params,
  //           (datass) => {
  //             console.log(datass);
  //             _this.myKgD.nodes = datass.nodess;
  //             _this.myKgD.links = datass.linkss;
  //             _this.myKG1.updataGraphs(_this.myKgD);
  //           }
  //         );
  //         break;
  //       case 11:
  //         _this.$router.push({path:"/home_page1/offLine/inputD"})
  //         break
  //     }
  //   },
  //   //删除数据库的数据
  //   deleteD() {
  //     const _this = this;
  //     let params = {
  //       port: _this.databaseD,
  //       name: _this.databaseA,
  //       password: _this.databaseP,
  //     };
  //     _this.comF.getDBdata(
  //       _this.pathV + "/user/graphs/deleteD",
  //       params,
  //       (datass) => {
  //         alert(datass);
  //         _this.login(1);
  //       }
  //     );
  //   },
  // },
  mounted() {
    // const _this = this;
    // _this.myKG1 = new drawKG("drawKG");
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
