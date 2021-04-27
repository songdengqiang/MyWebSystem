<template>
  <div class="myAppCon">
    <headerc class="funDisplay">
      <el-menu class="el-menu-demo" mode="horizontal" slot="left">
        <el-menu-item index="1" class="el-menu-item-title">电影</el-menu-item>
        <el-menu-item index="2" class="el-menu-item-title">音乐</el-menu-item>
        <el-menu-item index="3" class="el-menu-item-title">图库</el-menu-item>
        <el-submenu index="4" class="el-menu-item-title">
          <template slot="title">离线功能列表</template>
          <el-submenu index="4-1">
            <template slot="title">知识图谱管理</template>
            <el-menu-item index="4-1-1" @click="pageJump(2)"
              >知识可视化</el-menu-item
            >
            <el-menu-item index="4-1-2">知识录入</el-menu-item>
            <el-menu-item index="4-1-3">知识导入导出</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="5" class="el-menu-item-img" @click="headerDisp"
          >{{funDisplay}}</el-menu-item
        >
        <el-menu-item class="el-menu-item-img">
          <span style="margin-right: 1rem"
            >欢迎({{ $store.state.loginInfo }})登录此系统！</span
          >
          <el-submenu index="6" class="el-menu-item-title loginC">
            <template slot="title"></template>
            <el-menu-item index="6-1" @click="pageJump('登录页')"
              >切换用户</el-menu-item
            >
            <el-menu-item index="6-2" @click="pageJump('退出')"
              >退出系统</el-menu-item
            >
          </el-submenu>
          <img src="../assets/icon/用户.svg" alt="用户选择" srcset="" />
        </el-menu-item>
      </el-menu>
    </headerc>
    <main>
      <asidec class="asidecS1"></asidec>
      <asidec class="asidecS2">
        <ul class="list-group" slot="left">
          <li class="list-group-item">
            <h4>功能列表</h4>
          </li>
          <li class="list-group-item">
            <img src="../assets/img/kgraph.jpg" />
            <h5>知识图谱可视化</h5>
          </li>
        </ul>
      </asidec>
      <router-view></router-view>
<!--      <kgraphc></kgraphc>-->
    </main>
    <footerc></footerc>
  </div>
</template>

<script>
import headers from "../components/headers";
import footers from "../components/footers";
import asides from "../components/asides";
import * as d3 from "d3";
import mixins from "@/tools/mixins";

export default {
  name: "Home",
  data() {
    return {
      pageName:'Home',
      value: "",
      funDisplay: '解除固定',
    };
  },
  mixins:[mixins],
  components: {
    headerc: headers,
    footerc: footers,
    asidec: asides,
    // kgraphc: kgraphs,
  },
  methods: {
    headerDisp() {
      const _this = this;
      if (_this.funDisplay === '解除固定') {
        d3.select(".funDisplay").style("opacity", 0);
        _this.funDisplay = "固定";
      } else {
        d3.select(".funDisplay").style("opacity", 1);
        _this.funDisplay = '解除固定';
      }
    },
  },
};
</script>

<style scope lang='css'>
@import url("../assets/css/home.css");
.el-menu-demo {
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  /* width: 100%; */
}
.el-menu-item-title {
  min-width: 5vw;
  max-height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;
}
.el-menu-item-img {
  min-width: 5vw;
  max-height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
img {
  width: 3vh;
}
.userlogin {
  max-width: 1vw;
  border: 0.5vw;
  opacity: 0;
  margin-top: -4vh;
}
.loginC {
  position: fixed;
  right: 0;
  opacity: 0;
}
</style>
