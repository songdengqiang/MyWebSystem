<template>
  <el-row>
    <el-col :xs="20" :sm="15" :md="14" :lg="11" :xl="7">
      <el-aside width="100%">
        <el-card>
          <div slot="header" class="card-header">
            <span>账号登录</span>
          </div>
          <div class="card-body">
            <FormIpunt></FormIpunt>
          </div>
        </el-card>
      </el-aside>
      <el-main></el-main>
    </el-col>
    <el-col :xs="4" :sm="9" :md="8" :lg="13" :xl="17" style="padding:10% 20%">
        <h2>生活是一支舞!你永远是我唯一的舞伴！</h2>
        <el-divider></el-divider>
        <h2></h2>
        <h2>-welcome my system！</h2>
    </el-col>
  </el-row>
</template>
<script>
import FormIpunt from "@/components/element-ui/formIpunt.vue";
export default {
  name: "Login1",
  components: {
    FormIpunt,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/normal";
.el-row {
  @extend .normal;
  background-image: url("../../assets/img/background1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  h2{
      font-size: 1.9rem;
      color: whitesmoke;
      font-family: 'Times New Roman', '楷体';
  }
  .el-aside {
    @extend .flexCenter;
    margin-top: 30%;
    .el-card {
      width: 80%;
      height: 55%;
      background-color: rgba($color: #8f8a8a, $alpha: 0.6);
      border: none;
      .card-header {
        @extend .flexCenter;
        font-weight: bolder;
        font-family: "楷体";
        color: whitesmoke;
        font-size: 1.5rem;
      }
    }
  }
}
</style>