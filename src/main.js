import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

// import '@/assets/icons' // icon
// import '@/permission' // permission control

import './plugins/bus.js'
import './plugins/element.js'
import './plugins/echarts.js'
import './plugins/datav.js'
import './plugins/leaflet.js'

import socketUtil from '@/utils/socketUtil'




/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock')
    mockXHR()
}

Vue.config.productionTip = false
Vue.prototype.baseConfig = window.baseConfig

Vue.prototype.$socket = socketUtil;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})