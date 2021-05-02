<template>
  <div class="inputPanel" id='box-card'>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick" id='tables-card'>
        <el-tab-pane label="导入txt文件" name="first" class='tables'>
          <span slot="label"><i class="el-icon-s-promotion"></i>导入txt文件</span>
          <txtFileInput :initDatas = 'this.fileInfo' :startData='this.fileInfo.entityInfoList.slice(0,6)' class='ceshi'></txtFileInput>
        </el-tab-pane>
        <el-tab-pane label="导出txt文件" name="second" class='tables'>
          <span slot="label"><i class="el-icon-printer"></i>导出txt文件</span>
          导出txt文件
        </el-tab-pane>
        <el-tab-pane label="退出" name="third" class='tables'>
          <span slot="label"><i class="el-icon-bicycle"></i>退出</span>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <input
      type="file"
      style="width: 0; height: 0"
      id="readFile"
      accept=".txt"
      v-on:change="readFile('readFile')"
    />
  </div>
</template>

<script>
// import mixins from '@/tools/mixins';
import txtFileInput from './inputPanel/txtFileInput';
import mixins from './mixins';

export default {
  name: 'kgInputPanel',
  data() {
    return {
      pageName:'kgInputPanel',
      activeName:'first',
      itemList1:[
        {
          name:'全实体',
          type:'commons',
          color:'greenYellow'
        }
      ],
    };
  },
  components:{
    txtFileInput,
  },
  mixins: [mixins],
  methods: {
    handleClick(tab) {
      switch (tab.name){
        case 'third':
          this.$router.push({path:'/home/kgHome'})
          break
        case 'first':
          this.fileImport('readFile')
          break
      }
    },
    quitInput() {
      this.itemList = [];
      this.fileInfo.kgInfoList = []
      this.$store.commit('changInputState1');
      this.pageJump('知识图谱');
    },
    // updataGlobelData() {
    //   const _this = this;
    //   getData({url: '/user/graphs/getAllData'})
    //       .then((res) => {
    //         _this.initNeo4jDatas(res)
    //       })
    //       .catch(() => {
    //         _this.$message('知识数据查询失败！');
    //       });
    // },
  },
  created() {
    // this.updataGlobelData()
  },
};
</script>

<style scoped>
.inputPanel{
  position: absolute;
  border-radius: 1rem;
  width: 85%;
  height: 89%;
  top: 5vh;
  left: 2rem;
  padding: 0;
  background-color: rgba(255,255,255,0.6);
}
/*#box-card {*/
/*  width: 100%;*/
/*  height: 60%;*/
/*  padding: 0;*/
/*}*/
#tables-card{
  margin-top: -20px;
  height: 83vh;
  width: 100%;
}
.ceshi{
  height: 100%;
}

</style>
