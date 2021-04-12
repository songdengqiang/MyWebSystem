<template>
  <div id="app">
    <router-view :headerInfo='loginInfo' @chengeTitle = 'chengeL'></router-view>
    <!-- <router-view /> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "App",
  data(){
    return{
       loginInfo: "离线用户1！"
    }
  },
  methods:{
    chengeL(data){
      this.loginInfo = data
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Times New Roman", "楷体", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.2rem;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
