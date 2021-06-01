<template>
  <el-form
    :model="formLabelAlign"
    class="demo-ruleForm"
    status-icon 
    ref="formLabelAlign"
    :rules = 'rules'
  >
    <el-form-item  prop="account">
      <el-input type="account" v-model="formLabelAlign.account" placeholder="请输入你的账户！" prefix-icon="el-icon-user" clearable autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="pass" v-model="formLabelAlign.pass" placeholder="请输入你的密码！" prefix-icon="el-icon-lock" clearable></el-input>
    </el-form-item>
    <el-form-item prop="key">
      <el-input type="key" v-model="formLabelAlign.key" placeholder="请输入你的key码！" prefix-icon="el-icon-lock" clearable></el-input>
    </el-form-item>
    <el-form-item>
       <el-checkbox v-model="formLabelAlign.remember">记住密码</el-checkbox>
       <el-button type="text" style="margin-left:50%">忘记密码？</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="width:100%;font-size:1.0rem" @click="submitForm('formLabelAlign')">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        pass: "",
        account: "",
        key:'',
        remember: false
      },
      rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          key: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/normal";
.demo-ruleForm {
  width: 85%;
  margin-left: 7.5%;
  .el-form-item{
    padding: 10px 0;
    .el-checkbox{
      font-size:0.9rem;
    }
    .el-input{
      ::v-deep .el-input__inner {   //样式的穿透
        background-color: rgba(233, 232, 232, 0.1);
        color: whitesmoke;
        font-size:1.0rem;
      }
    }
    
  }
}
</style>