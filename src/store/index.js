import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import graphModule from "./modules/graphModule";

Vue.use(Vuex)

//全局通用变量
const state = {
  loginState:null,
  loginInfo:null,
  bgImgList:[],
  bgImgPath:'',
  weatherInfo:'',
  inputState: false
}
//各模块中用到的变量
const modules = {
  graphModule,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})
