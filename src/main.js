import Vue from 'vue'
import App from './App'
import router from './router'
// 引入global.css全局样式控制文件
import './assets/css/global.css'
// 引入“图标”css样式文件
import './assets/fonts/iconfont.css'
// 引入element-ui组件库模块
import ElementUI from 'element-ui'
// 引入axios
import axios from 'axios'
//axios请求根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//axios请求拦截器
axios.interceptors.request.use(function(config) {
  var token = window.sessionStorage.getItem('token')
  config.headers.Authorization = token
  return config
},
function(error){
  return Promise.reject(error)
}
)
//给axios配置给Vue的$http成员
Vue.prototype.$http = axios
// 把element-ui注册给Vue
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
