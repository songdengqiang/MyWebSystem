<template>
  <aside class="flexDiv_CL">
    <slot name="left">
      <ul class="list-group">
        <li class="list-group-item">
          <h4>背景列表</h4>
        </li>
        <li class="list-group-item" v-for="x in $store.state.bgImgList" :key="x.id">
          <img
            :src="x.path"
            alt="x.name"
            class="imgC"
            @click="changeB(x.path)"
          />
        </li>
        <li class="list-group-item">
          <img
            src="../assets/icon/add.svg"
            class="imga"
            alt="上传背景图片"
            @click="chooseFile()"
          />
        </li>
        <input
          type="file"
          style="width: 0; height: 0"
          id="addImg"
          accept="image/*"
          v-on:change="addImg($event)"
        />
      </ul>
    </slot>
  </aside>
</template>

<script>
import * as pathParing from '@/tools/network/pathParing'
import * as d3 from "d3";
export default {
  name: "asides",
  data() {
    return {};
  },
  methods: {
    chooseFile() {
      document.getElementById("addImg").click();
    },
    addImg() {
      const _this = this;
      let x = document.getElementById("addImg").files[0];
      let params = new FormData();
      params.append("file", x);
      // let config = { header: { "Content-Type": "multipart/form-data" } };
      pathParing.addImgData(params).then((res)=>{
        if (res === "成功") {
          pathParing.getImgList().then(res =>{
            _this.$store.commit('initBgImgList',res)
          }).catch(()=>{
            _this.$message('服务器背景图片获取失败！')
          })
          _this.$message('图片上传成功！')
        }else {
          _this.$message('图片上传失败！')
        }
      }).catch(()=>{
        _this.$message('图片上传失败！')
      })
    },
    //改变背景图片
    changeB(paths) {
      const _this = this;
      pathParing.editBgInfo({path:paths}).then(res=>{
        if (res.title === "成功") {
          d3.select(".myAppCon").style(
            "background-image",
            `url(${res.data})`
          );
          _this.$message('修改成功！！')
        }
      }).catch(()=>{
        _this.$message('修改失败！')
      })
    },
    // 初始化背景
    initBK() {
      const _this = this;
      pathParing.getImgBg().then(res => {
        // console.log(res)
        d3.select(".myAppCon").style(
          "background-image",
          `url(${res})`
        );
      }).catch(() => {
        _this.$message('数据请求失败！')
      });
    }
  },
  created() {
    const _this = this;
    _this.initBK();
  },
};
</script>

<style scoped lang='css'>
aside {
  position: fixed;
  width: 0.5vw;
  background-color: #dddada;
  border-radius: 0.6rem;
  z-index: 12;
  top: 8%;
  height: 85%;
  overflow: auto;
}
/* .aside1 {
  position: fixed;
  width: 0.5vw;
  background-color: #dddada;
  border-radius: 0.6rem;
  z-index: 12;
  top: 8%;
  right: 2px;
  height: 85%;
  overflow: auto;
} */
aside:hover {
  transition: 0.6s;
  width: 10%;
}
aside:hover ul {
  transition: 0.6s;
  opacity: 1;
  padding: 0;
  margin: 0;
}
aside ul {
  width: 100%;
  opacity: 0;
}
aside ul li {
  width: 100%;
  padding: 0;
  margin: 0;
}
aside ul li h4 {
  /* padding-top: 1rem; */
  font-size: 1.1rem;
  font-weight: bold;
  /* padding-bottom: 1rem; */
}
aside ul li .imgC {
  width: 98%;
  border-radius: 0.4rem;
  margin-top: 1rem;
  cursor: pointer;
}
aside ul li .imgC:hover {
  width: 98.5%;
  box-shadow: black 0 0 15px;
}
aside ul li .imga {
  width: 60%;
  cursor: pointer;
}
aside::-webkit-scrollbar {
  width: 0;
}
</style>
