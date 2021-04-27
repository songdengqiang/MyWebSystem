<template>
  <div class="items">
    <div>
      <el-button
          type="warning"
          style="margin-right: 120px"
          size="small"
          icon="el-icon-s-opportunity"
          plain
          @click="tableDisplay = false"
      >实体列表</el-button
      >
      <el-button
          type="warning"
          style="margin-left: 120px"
          size="small"
          icon="el-icon-s-opportunity"
          plain
          @click="tableDisplay = true"
      >知识列表</el-button
      >
    </div>
    <el-table :data="itemList" style="width: 100%" v-show="!tableDisplay">
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
              v-model="scope.row.type"
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
    <el-table
        :data="itemList2"
        style="width: 100%"
        v-show="tableDisplay"
    >
      <el-table-column
          type="index"
          width="40"
          label="序号"
      ></el-table-column>
      <el-table-column label="头实体" class="tableItem">
        <template slot-scope="scope">
          <i class="el-icon-edit"></i>
          <input style="margin-left: 10px" v-model="scope.row.header" :disabled="inputState"
                 :id="'inputs' + scope.$index + '0'"/>
        </template>
      </el-table-column>
      <el-table-column label="尾实体" class="tableItem">
        <template slot-scope="scope">
          <i class="el-icon-edit"></i>
          <input style="margin-left: 10px" v-model="scope.row.footer" :disabled="inputState"
                 :id="'inputs' + scope.$index + '1'"/>
        </template>
      </el-table-column>
      <el-table-column label="关系" class="tableItem">
        <template slot-scope="scope">
          <i class="el-icon-edit"></i>
          <input style="margin-left: 10px" v-model="scope.row.relation" :disabled="inputState"
                 :id="'inputs' + scope.$index + '2'"/>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index,2)"
          >编辑</el-button
          >
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index,2)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-table style="width: 100%" :data="itemList1" v-show="!tableDisplay">
      <el-table-column
          type="index"
          width="40"
      ></el-table-column>
      <el-table-column >
        <template slot-scope="scope">
          <input
              v-model="scope.row.name"
              style="margin-left: 20px"
              :disabled="inputState"
              :id="'inputss' + scope.$index + '0'"
          />
        </template>
      </el-table-column>
      <el-table-column >
        <template slot-scope="scope">
          <input
              v-model="scope.row.type"
              style="margin-left: 20px"
              :disabled="inputState"
              :id="'inputss' + scope.$index + '1'"
          />
        </template>
      </el-table-column>
      <el-table-column >
        <template slot-scope="scope">
          <input
              style="margin-left: 20px"
              v-model="scope.row.color"
              :disabled="inputState"
              :id="'inputss' + scope.$index + '2'"
          />
        </template>
      </el-table-column>
      <el-table-column >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index,3)"
          >编辑</el-button
          >
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index,3)"
          >确定</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div v-show="tableDisplay">
      <el-button
          type="warning"
          style="margin-top: 20px; margin-right: 120px"
          size="small"
          icon="el-icon-s-opportunity"
          plain
          @click="kgDataConfirm()"
      >知识确认</el-button
      >
      <el-button
          type="warning"
          style="margin-top: 20px; margin-left: 120px"
          size="small"
          icon="el-icon-s-opportunity"
          plain
          @click="kgDataSubmit()"
      >知识提交</el-button
      >
    </div>
    <div v-show="!tableDisplay">
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
      >实体提交</el-button
      >
    </div>
  </div>
</template>

<script>
import mixins from "../mixins";
import {getData} from "../../../tools/network/requests";

export default {
name: "txtFileInput",
  props: {
    data1:[],
    data2:[],
    data3:[]
  },
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
      itemList2: [],
      itemListSubmit:[],
      tableDisplay: false,
      inputState: true,
    };
  },
  mixins: [mixins],
  methods: {
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
    quitInput() {
      this.itemList = [];
      this.itemList3 = []
      this.$store.commit('changInputState1');
    },
    //实体的确认
    entityConfirm() {
      const _this = this;
      let repeadNum = 0;
      let newData = [];
      // console.log(_this.$store.state.graphModule.initNeo4jData);
      for (let item of _this.itemList) {
        if (
            _this.$store.state.graphModule.entityList.indexOf(item.name) === -1
        ) {
          newData.push(item);
        } else {
          repeadNum++;
        }
      }
      this.itemListSubmit = newData
      _this.$message('重复的实体数为：' + repeadNum);
    },
    //实体的提交
    entitySubmit() {
      getData({url: '/user/graphs/insertEntity', method: 'post', data: {datas: this.itemListSubmit}}).then(res => {
        if (res === '成功') {
          this.$message('数据插入成功！')
        } else {
          // console.log(res)
          this.$message("数据插入失败！")
        }
      })
    },
    //知识的确认
    kgDataConfirm() {
      const _this = this
      _this.$message('知识确认无误！')
    },
    kgDataSubmit() {
      getData({url: '/user/graphs/insertKg', method: 'post', data: {datas: this.itemList2}}).then(res => {
        if (res === '成功') {
          this.$message('数据插入成功！')
        } else {
          // console.log(res)
          this.$message("数据插入失败！")
        }
      })
    }
  },
  mounted() {
    this.itemList = this.data1;
    this.itemList1 = this.data2;
    this.itemList2 = this.data3;
  }
}
</script>

<style scoped >

.items {
  width: 100%;
  height: 70vh;
  overflow: auto;
}
.tableItem {
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
