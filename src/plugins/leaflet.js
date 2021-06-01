import Vue from 'vue'
import 'leaflet/dist/leaflet.css' //引入Leaflet样式文件
import * as L from 'leaflet' //引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用

Vue.L = Vue.prototype.$L = L