<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">实在不好意思，出错了！</div>
        <div class="bullshit__info">你可以参考下述的描述，检查出错的原因，也可参考以下网址：
          <a style="color:#20a0ff" href="https://wallstreetcn.com" target="_blank">wallstreetcn</a>
        </div>
        <hr>
        <div class="bullshit__headline">{{ message }}</div>
        <hr>
        <div class="bullshit__info">Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page404",
  computed: {
    message() {
      return '请求数据失败！'
    }
  }
}
</script>

<style  scoped>
.wscn-http404-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wscn-http404{
  width: 100%;
  height: 60%;
}
.pic-404{
  width: 100%;
  height: 100%;
}
.pic-404__parent{
  margin-top: 2rem;
  height: 90%;
}
.pic-404__child{
  margin-top: 2rem;
  height: 40%;
}
.bullshit{
  width: 100%;
  height: 30%;
  margin-top: 5%;
}
</style>
