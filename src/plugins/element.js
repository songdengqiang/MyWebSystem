import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

/**
 * set ElementUI lang to EN
 * 如果想要中文版 element-ui，按如下方式声明
 * Vue.use(ElementUI)
 * 如果想要英文版
 * Vue.use(ElementUI, { locale })
 * */
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)