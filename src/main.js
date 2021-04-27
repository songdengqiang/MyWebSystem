import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as d3 from 'd3'
import ElementUI from 'element-ui';
import comF from './assets/js/common'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(ElementUI);
// 配置d3的attr属性和style属性，使其可以使用对象形式的数据
let oldAttr = d3.selection.prototype.attr;
d3.selection.prototype.attr = function () {
  if (arguments.length == 1) {
    if (typeof arguments[0] == "object") {
      for (let item in arguments[0]) {
        oldAttr.call(this, item, arguments[0][item]);
      }
      return this;
    } else {
      return oldAttr.call(this, arguments[0]);
    }
  } else if (arguments.length == 2) {
    return oldAttr.call(this, arguments[0], arguments[1]);
  }
};
let oldStyle = d3.selection.prototype.style;
d3.selection.prototype.style = function () {
  if (arguments.length == 1) {
    if (typeof arguments[0] == "object") {
      for (let item in arguments[0]) {
        oldStyle.call(this, item, arguments[0][item]);
      }
      return this;
    } else {
      return oldStyle.call(this, arguments[0]);
    }
  } else if (arguments.length == 2) {
    return oldStyle.call(this, arguments[0], arguments[1]);
  }
};

Vue.config.productionTip = false
Vue.prototype.comF = comF

new Vue({
  router,
  store,
  // $,
  render: h => h(App)
}).$mount('#app')
