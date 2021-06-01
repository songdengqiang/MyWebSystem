<template>
  <div class="login-container">
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height='3vh'>
      <el-row :gutter="10" type="flex" justify="end" align="center">
        <el-col :span="1"><router-link target="_self" :to="{name:'Login1'}">登录1</router-link></el-col>
        <el-col :span="1"><router-link target="_self" :to="{name:'Login2'}">登录2</router-link></el-col>
        <el-col :span="1"><router-link target="_self" :to="{name:'Login3'}">登录3</router-link></el-col>
        <el-col :span="1"><router-link target="_self" :to="{name:'Login4'}">登录4</router-link></el-col>
        <el-col :span="1"><router-link target="_self" :to="{name:'Login5'}">登录5</router-link></el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/normal';

.login-container{
  @extend .normal;
  .el-main{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .el-footer{
    position: fixed;
    width: 100%;
    bottom: 1px;
    right: 1px;
    z-index: 2;
  }
}
</style>
