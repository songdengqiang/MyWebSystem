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
        <el-button type="info" size="small" plain>清空数据库数据</el-button>
      </el-row>
      <el-row>
        <h4>{{ loginInfo }}{{ ceshi }}</h4>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "kgControlPanel",
  //从父元素获取数据
  props: ["databaseInfo"],
  data() {
    return {
      drawer: false,
      statue: this.databaseInfo.states,
      loginInfo: "你的数据库登录：",
    };
  },
  computed: {
    ceshi : function(){
      if(this.databaseInfo.states === '成功'){
        console.log('dfdfd')
      }else{
        console.log('rrrrr')
      }
      return this.databaseInfo.states
    }
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
</style>