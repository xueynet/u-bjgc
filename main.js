import Vue from 'vue'
import App from './App'

import sy from './pages/sy/home.vue'
Vue.component('sy',sy)

import fl from './pages/fl/home.vue'
Vue.component('fl',fl)

import product from './pages/product/home.vue'
Vue.component('product',product)

import xw from './pages/xw/home.vue'
Vue.component('xw',xw)

import xcsy from './pages/xcpage/index.vue'
Vue.component('xcsy',xcsy)

import xccp from './pages/xcpage/cp-home.vue'
Vue.component('xccp',xccp)

import xcxw from './pages/xcpage/news-home.vue'
Vue.component('xcxw',xcxw)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



