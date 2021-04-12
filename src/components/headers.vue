<template>
  <header>
    <slot name="left">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" class="el-menu-item-title">电影</el-menu-item>
        <el-menu-item index="2" class="el-menu-item-title">音乐</el-menu-item>
        <el-menu-item index="3" class="el-menu-item-title">图库</el-menu-item>
        <el-submenu index="4" class="el-menu-item-title">
          <template slot="title">颜色表</template>
          <el-menu-item index="4-1">七色表</el-menu-item>
          <el-menu-item index="4-2">十二色表</el-menu-item>
          <el-menu-item index="4-3">二十四色表</el-menu-item>
        </el-submenu>
        <el-menu-item class="el-menu-item-img">
          <span style="margin-right: 1rem">请登录!</span>
          <img src="../assets/icon/用户.svg" alt="用户选择" srcset="" />
        </el-menu-item>
      </el-menu>
    </slot>
    <slot name="right"> </slot>
  </header>
</template>

<script>
export default {
  name:'headers',
  data(){
    return{
      
    }
  }
};
</script>

<style scoped>
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
.userlogin{
  max-width: 1vw;
  border: 0.5vw;
  opacity: 0;
  margin-top: -4vh;
}
</style>