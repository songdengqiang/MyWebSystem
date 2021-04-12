<template>
  <aside class="flexDiv_CL">
    <slot name="left">
      <ul class="list-group">
        <li class="list-group-item">
          <h4>背景列表</h4>
        </li>
        <li class="list-group-item" v-for="x in imgData" :key="x.id">
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
import axios from "axios";
import * as d3 from "d3";
export default {
  name: "asides",
  data() {
    return {
      imgData: [],
    };
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
      let config = { header: { "Content-Type": "multipart/form-data" } };
      axios
        .post(_this.pathV + "/user/addImgs", params, config)
        .then((res) => {
          if (res.data === "成功") {
            _this.getimgD();
            alert("图片上传成功！");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    // 获取背景图片的数据
    getimgD() {
      const _this = this;
      axios.get(_this.pathV + "/user/sendImg").then((res) => {
        if (res.data.title === "成功") {
          _this.imgData = res.data.data;
        }
      });
    },
    //改变背景图片
    changeB(paths) {
      const _this = this;
      try {
        axios
          .post(_this.pathV + "/user/changeBK", { path: paths })
          .then((res) => {
            if (res.data.title === "成功") {
              d3.select(".myAppCon").style(
                "background-image",
                `url(${res.data.data})`
              );
            }
          });
      } catch (err) {
        alert("背景修改失败！-服务器请求失败！");
      }
    },
    // 初始化背景
    initBK() {
      const _this = this;
      try {
        axios
          .get(_this.pathV + "/user/getBKurl")
          .then((res) => {
            d3.select(".myAppCon").style(
              "background-image",
              `url(${res.data})`
            );
            // console.log(res.data)
          })
          .catch(() => {
            console.log("数据请求失败！");
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    const _this = this;
    _this.initBK();
    _this.getimgD();
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