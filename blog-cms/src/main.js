import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/icon/iconfont.css'
//element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//axios
import axios from 'axios'
//mavonEditor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.use(Element)

import "./axios"

Vue.prototype.$axios = axios

Vue.prototype.msgSuccess = function (msg) {
  this.$message.success(msg)
}

Vue.prototype.msgError = function (msg) {
  this.$message.error(msg)
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
