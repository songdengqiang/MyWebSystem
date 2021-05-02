<template>
  <div class="items">
    <div style='display: flex;flex-direction: row;width: 100%;justify-content: center;align-items: center'>
      <el-steps :active="active" finish-status="success" style='width: 85%'>
        <el-step title="实体的确认"></el-step>
        <el-step title="实体的提交"></el-step>
        <el-step title="三元组的确认"></el-step>
        <el-step title="三元组的提交"></el-step>
      </el-steps>
      <el-button style="margin-left: auto;" @click="next">下一步</el-button>
    </div>
    <el-table v-loading="loading" :data="itemList" style="width: 100%" v-show="!tableDisplay">
      <el-table-column min-width='20' label="序号">
        <template slot-scope="scope">
          {{scope.row.numberId}}
        </template>
      </el-table-column>
      <el-table-column label="实体名">
        <template slot-scope="scope">
          <input
            v-model="scope.row.name"
            :disabled="inputState"
            :id="'input' + scope.$index + '0'"
          />
        </template>
      </el-table-column>
      <el-table-column label="实体类">
        <template slot-scope="scope">
          <input
            v-model="scope.row.type"
            :disabled="inputState"
            :id="'input' + scope.$index + '1'"
          />
        </template>
      </el-table-column>
      <el-table-column label="颜色">
        <template slot-scope="scope">
          <input
            v-model="scope.row.color"
            :disabled="inputState"
            :id="'input' + scope.$index + '2'"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index,1)"
          >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index,1)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :page-size="6"
      layout="prev, pager, next"
      :total="initDatas.entityInfoList.length"
      style='margin-top: 12px'
    ></el-pagination>

  </div>
</template>

<script>
import mixins from "../mixins";
import * as pathParing from '@/tools/network/pathParing'
export default {
name: "txtFileInput",
  props: ['initDatas','startData'],
  data() {
    return {
      allData:[],
      loading:true,
      active: 0, // 步骤的记录
      repeadNum:0,
      itemList:[],
      itemList1:[
        {
          name:'全实体',
          type:'commons',
          color:'greenYellow'
        }
      ],
      itemList2: [],
      itemListSubmit:[],
      tableDisplay: false,
      inputState: true,
    };
  },
  mixins: [mixins],
  methods: {
    handleCurrentChange(page){
      if(this.allData.entityInfoList.length!==null){
        this.itemList = []
        for(let i=(page*6-6);i<(page*6);i++){
          if(i<this.allData.entityInfoList.length){
            this.itemList.push(this.allData.entityInfoList[i])
          }
        }
        this.loading = false
      }
    },
    handleEdit(index, num) {
      if (num === 1) {
        document.getElementById('input' + index + '0').disabled = '';
        document.getElementById('input' + index + '1').disabled = '';
        document.getElementById('input' + index + '2').disabled = '';
        // this.inputState = false
      } else if (num === 3) {
        // document.getElementById('inputss' + index + '0').disabled = '';
        document.getElementById('inputss' + index + '1').disabled = '';
        document.getElementById('inputss' + index + '2').disabled = '';
      } else {
        document.getElementById('inputs' + index + '0').disabled = '';
        document.getElementById('inputs' + index + '1').disabled = '';
        document.getElementById('inputs' + index + '2').disabled = '';
      }

    },
    handleDelete(index, num) {
      if (num === 1) {
        this.itemList.splice(index, 1);
      } else if (num === 3) {
        //修改逻辑
        for (let i of this.itemList) {
          i.type = this.itemList1[0].type
          i.color = this.itemList1[0].color
        }
        // console.log(this.itemList);
      } else {
        this.fileInfo.kgInfoList.splice(index, 1);
      }

    },
    next() {
      // alert(this.active)
      const _this = this
      switch (this.active){
        case 0:
          //实体的确认
          _this.repeadNum = 0
          _this.itemListSubmit = _this.allData.entityInfoList.filter((item1)=>{
            if(_this.$store.state.graphModule.initNeo4jData.nodes.find((item2)=>{
              return  item2.name === item1.name ? true:false
            })){
              _this.repeadNum++
              return false
            }else {
              return true
            }
          })
          this.$message('重复的节点数为：'+_this.repeadNum)
          break;
        case 1:
          //实体的提交
          pathParing.appendNeo4jEntity({datas:_this.itemListSubmit}).then(res=>{
            _this.$message(res)
            _this.$store.dispatch('initNeo4jDatasSync')
          }).catch(()=>{
            _this.$message('数据插入失败!')
          })
          break
      }
      if (this.active++ > 3) {
        this.active = 0;
      }
    }
  },
  mounted() {

  },
  watch:{
    startData(newValue){
      this.itemList = newValue.slice(0,6)
      this.loading = false
    },
    initDatas(newValue){
      this.allData = newValue
    }
  }
}
</script>

<style scoped >

.items {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.tableItem {
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
