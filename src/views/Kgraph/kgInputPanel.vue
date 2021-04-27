<template>
  <div class="panelContainer">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h5>功能</h5>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          @click="fileImport('readFile')"
          >txt文件导入</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          >json文件导入</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          >csv文件导入</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          >txt文件导出</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          >json文件导出</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          >csv文件导出</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="btnsFun"
          @click="editBase()"
          >数据库数据修改</el-button
        >
        <el-button type="info" plain style="float: right; padding: 3px 0" class="btnsFun"
                   @click="quitInput()">退出</el-button>
      </div>
      <router-view :data1="itemList" :data2="itemList1" :data3 = "fileInfo.kgInfoList"></router-view>
    </el-card>
    <input
      type="file"
      style="width: 0; height: 0"
      id="readFile"
      accept=".txt"
      v-on:change="readFile('readFile','txtFile')"
    />
  </div>
</template>

<script>
import mixins from '@/tools/mixins';
import mixins1 from './mixins';
import {mapMutations} from 'vuex'
import {getData} from "../../tools/network/requests";
export default {
  name: 'kgInputPanel',
  data() {
    return {
      itemList: [],
      itemList1:[
        {
          name:'全实体',
          type:'commons',
          color:'greenYellow'
        }
      ],
      // itemListSubmit:[],
      // tableDisplay: false,
      // inputState: true,
    };
  },
  mixins: [mixins,mixins1],
  methods: {
    ...mapMutations(['initNeo4jDatas']),
    quitInput() {
      this.itemList = [];
      this.fileInfo.kgInfoList = []
      this.$store.commit('changInputState1');
      this.pageJump('知识图谱');
    },
    updataGlobelData() {
      const _this = this;
      getData({url: '/user/graphs/getAllData'})
          .then((res) => {
            _this.initNeo4jDatas(res)
          })
          .catch(() => {
            _this.$message('知识数据查询失败！');
          });
    },
    editBase(){
      this.pageJump('数据库编辑')
    }
  },
  created() {
    this.updataGlobelData()
  },
};
</script>

<style scoped>
.panelContainer {
  width: 100%;
  height: 100%;
}
.box-card {
  height: 100%;
  width: 100%;
  padding: 0;
}
.clearfix {
  width: 100%;
  max-height: 1vh;
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  padding: 0;
}
.btnsFun {
  margin: 2rem;
}

</style>
