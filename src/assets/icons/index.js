import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component
import "./iconfont/iconfont.js"

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)