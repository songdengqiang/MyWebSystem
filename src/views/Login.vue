<template>
  <div class="login">
    <headerc></headerc>
    <main class="myAppCon">
      <asidec></asidec>
      <!-- 登录面板！ -->
      <loginPanelc>
        <el-form ref="form" :model="form" label-width="80px" slot="content">
          <el-form-item label="登录形式">
            <el-select v-model="logintype" placeholder="请选择登录形式">
              <el-option label="离线登录" value="离线登录"></el-option>
              <el-option label="账户登录" value="账户登录"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="账户：" v-show="displayC">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码：" v-show="displayC">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <div v-show="!displayC">
            <el-divider></el-divider>
            <p>你可以使用离线登录使用本系统的离线功能！</p>
            <el-divider></el-divider>
          </div>
        </el-form>
        <el-row slot="buttons">
          <el-button @click="pageJump(0)" v-show="!displayC">登录</el-button>
          <el-button @click="pageJump(1)" v-show="displayC">登录</el-button>
          <el-button type="danger" v-show="displayC">注册</el-button>
        </el-row>
      </loginPanelc>
    </main>
    <footerc></footerc>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from "../components/headers";
import footers from "../components/footers";
import asides from "../components/asides";
import loginPanel from "../components/loginPanel";
import mixins from "../assets/js/methods";
export default {
  name: "Login",
  mixins: [mixins],
  props: ["headerInfo"],
  data() {
    return {
      logintype: "离线登录",
      headerTitle:'离线用户',
      displayC: false,
      form: {
        account: "",
        password: "",
      }
    };
  },
  components: {
    headerc: headers,
    footerc: footers,
    asidec: asides,
    loginPanelc: loginPanel,
  },
  methods:{
    
  },
  watch: {
    logintype(newz) {
      if (newz === "离线登录") {
        this.displayC = false;
      } else {
        this.displayC = true;
      }
    },
  },
};
</script>
<style scoped lang='css'>
@import url("../assets/css/common/common.css");
@import url("../assets/css/common/flexDiv.css");
@import url("../assets/css/login.css");
</style>
