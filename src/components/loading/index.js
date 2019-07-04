//vue.use(plugin) 要求plugin如果是对象，要有install方法,并传递Vue ,如果是函数，直接调用+传递
//通用组件 loading

import loading from './components/loading.vue';
export default {
    // key:value
    install: function (Vue) {
        Vue.component('loadding',loading)
    }
}