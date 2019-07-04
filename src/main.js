import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'


import axios from 'axios';
Vue.prototype.$http = axios
axios.defaults.withCredentials=true //解决所有axios的携带凭证
//请求拦截
axios.interceptors.request.use(function (config) {
  // 发送请求成功时，拦截，做点事，config=请求时的配置
  vm.$data.bloadding = true;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
  vm.$data.bloadding = false;
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


//过滤器
import filters from './filters';
Object.keys(filters).forEach( index => Vue.filter(index,filters[index]))


//引入自己封装的组件
import loading from './components/loading';
Vue.use(loading)

//路由检测  钩子
 router.beforeEach((to,from,next)=>{
  // to==$route   .path == '/home/1?a=1'
  // 校验path
  //  console.log("to",to)
  //  console.log("from",from)
   to.params.id = 10;
   to.query.a = 20;
   to.query.b = 30;
   
   console.log(to)
  next()
}) 





Vue.config.productionTip = false

import './assets/themes/css/base.css';
import './assets/themes/css/icon.css';
import './assets/themes/css/home.css';

import './assets/themes/js/jquery';
import './assets/themes/js/flexible.js';
import './assets/themes/js/main.js';


//动画
import 'animate.css';

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
