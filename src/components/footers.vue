<template>
  <footer>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item class="titlecontainer">在一起的时间:{{ togethers }}</el-breadcrumb-item>
      <el-breadcrumb-item class="titlecontainer">提示:{{ memorial_day }}</el-breadcrumb-item>
      <el-breadcrumb-item class="titlecontainer">{{ times }}</el-breadcrumb-item>
      <el-breadcrumb-item class="titlecontainer">{{ weathers }}</el-breadcrumb-item>
    </el-breadcrumb>
  </footer>
</template>

<script>
import {getData} from '@/tools/network/requests'
export default {
  name:'footers',
  data() {
    return {
      togethers: "3年",
      memorial_day: "更新时间:2021/4/12",
      times: "2020-12-24-12:43",
      display: false,
      weathers: "🌤",
    };
  },
  methods: {
    // 计算在一起的时间
    calculaterD() {
      const _this = this;
      let todays = new Date();
      let together = new Date("2016-06-26");
      _this.togethers = `${parseInt(
        (todays - together) / 1000 / 60 / 60 / 24 / 365
      )}年-共计${parseInt((todays - together) / 1000 / 60 / 60 / 24)}天`;
      parseInt((todays - together) / 1000 / 60 / 60 / 24) + "天";
    },
  },
  created() {
    const _this = this
    // 获取本地的天气状况（使用免费的API）
    getData({url:'/user/weathers',method: 'get'}).then(res =>{
      _this.weathers = `${res.descript}-${res.temperature}-${res.wind}`
    }).catch(()=>{
      _this.$message("天气数据请求失败！")
    })
    _this.calculaterD()
    _this.times = _this.comF.get_today_time()[0]
    setInterval(() => {
      _this.times = _this.comF.get_today_time()[0]
    }, 1000);
  },
};
</script>

<style scoped>
footer{
  position: fixed;
  top: 95vh;
  width: 100%;
  height: 5vh;
  border-top: 1px solid gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
