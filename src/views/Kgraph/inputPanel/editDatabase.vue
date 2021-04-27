<template>
  <div class="items">
    <el-table :data="$store.state.graphModule.neo4jAllData.nodes" style="width: 100%" >
      <el-table-column
          type="index"
          width="40"
          label="序号"
      ></el-table-column>
      <el-table-column label="实体名">
        <template slot-scope="scope">
          <input
              v-model="scope.row.name"
              style="margin-left: 20px"
              :disabled="inputState"
              :id="'input' + scope.$index + '0'"
          />
        </template>
      </el-table-column>
      <el-table-column label="实体类">
        <template slot-scope="scope">
          <input
              v-model="scope.row.labels"
              style="margin-left: 20px"
              :disabled="inputState"
              :id="'input' + scope.$index + '1'"
          />
        </template>
      </el-table-column>
      <el-table-column label="颜色">
        <template slot-scope="scope">
          <input
              style="margin-left: 20px"
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
    <div>
      <el-button
          type="warning"
          style="margin-top: 20px; margin-right: 120px"
          size="small"
          icon="el-icon-s-opportunity"
          plain
          @click="entityConfirm()"
      >实体确认</el-button
      >
      <el-button
          type="warning"
          style="margin-top: 20px; margin-left: 120px"
          size="small"
          icon="el-icon-s-opportunity"
          plain
          @click="entitySubmit()"
      >修改提交</el-button
      >
  </div>
   </div>
</template>

<script>
// import {mapMutations} from 'vuex'
import {getData} from "@/tools/network/requests"
export default {
  name: "editDatabase",
  data(){
    return{
      inputState: true,
      dataSubmit:[]
      // num:0
    }
  },
  methods:{
    // ...mapMutations['editDataBase'],
    handleEdit(index, num) {
      if (num === 1) {
        document.getElementById('input' + index + '0').disabled = '';
        document.getElementById('input' + index + '1').disabled = '';
        document.getElementById('input' + index + '2').disabled = '';
        // this.inputState = false
      }
    },
    handleDelete(index, num) {
      if (num === 1) {
        this.$store.commit('editDataBase',index)
      }
    },
    entityConfirm(){
      this.dataSubmit = this.$store.state.graphModule.neo4jAllData.nodes
      this.$message('修改已确认！')
    },
    entitySubmit(){
      getData({url:'/user/graphs/editDatabase',method:'post',data:{datas:this.dataSubmit}}).then((res)=>{
        this.$message(res)
      }).catch(()=>{
        this.$message('失败！')
      })
    }
  },
  created() {
  }
}
</script>

<style scoped>
.items {
  width: 100%;
  height: 70vh;
  overflow: auto;
}
</style>