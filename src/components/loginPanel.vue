<template>
  <div class="panelCon">
    <div class="panelTex">
      <slot name="title">
        <h4>登录面板</h4>
      </slot>
      <slot name="content">
      </slot>
      <slot name='buttons'>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPanel",
  data() {
    return {

    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  }
};
</script>

<style scoped lang='css'>
.panelCon {
  /* position: relative; */
  /* float: left; */
  float: left;
  width: 60%;
  height: 60%;
  margin-top: 10%;
  margin-left: 20%;
  background-color: rgba(219, 219, 219, 0.6);
  border-radius: 1.5rem;
  box-shadow: rgb(0, 0, 0) 0 0 6px;
  background-image: url("../assets/img/im_login1.jpeg");
  background-size: 100%;
  opacity: 0.8;
}
h4 {
  margin-bottom: 2rem;
}
.panelTex {
  width: 45%;
  height: 90%;
  margin-left: 55%;
  margin-top: 2.5%;
  border-left: rgba(0, 0, 0, 1) 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: rgba(0, 0, 0, 1);
}
p {
  font-size: 1.3rem;
}
</style>
