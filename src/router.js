import Vue from 'vue'
import Router from 'vue-router'

// import home from './components/home.vue';
// import video from './components/video.vue';
// import recommend from './components/recommend.vue';
// import user from './components/user.vue';
// import pages from './components/pages.vue';
// import special from './components/special.vue';
// import login from './components/login.vue';



Vue.use(Router)

let home = ()=> import(/* webpackChunkName:"group-home"*/'./components/home.vue')
let  video = ()=> import(/* webpackChunkName:"group-video"*/'./components/video.vue') //组件懒加载
let  recommend = ()=> import(/* webpackChunkName:"group-user"*/'./components/recommend.vue')  // 太小了,合并在一起,减少请求次数.
let user = ()=> import(/* webpackChunkName:"group-user"*/'./components/user.vue')
let login = ()=> import(/* webpackChunkName:"group-user"*/'./components/login.vue')
let pages = ()=> import(/* webpackChunkName:"group-pages"*/'./components/pages.vue')
let special = () => import(/* webpackChunkName:"group-special"*/'./components/special.vue') 
let reg = () => { return import(/* webpackChunkName:"group-reg"*/'./components/reg.vue') };
let set = () => { return import(/* webpackChunkName:"group-set"*/'./components/set.vue') }
let err = ()=> import(/* webpackChunkName:"group-set"*/'./components/error.vue')
let buycar = () => import(/*webpackChunkName:"group-car"*/'./components/buycar.vue');
let shop = ()=> import(/*webpackChunkName:"group-shop"*/'./components/shop.vue');

let routes = [
  { path: '/home', component: home },
  { path: '/video', component: video },
  { path: '/recommend', component: recommend },
  { path: '/user', component: user },
  { path: '/pages', component: pages },
  { path: "/special", component: special },
  { path: "/login", component: login },
  { path: '/reg', component: reg },
  { path: '/set', component: set },
  { path: '/car', component: buycar },
  { path: '/shop', component: shop },
  { path: '/', redirect: '/home' },
  { path: '*', component: err },
]
export default new Router({
  routes,
  scrollBehavior(to,from,savePosition){  //滚动行为,每次切回来的时候转到顶部
    return {x:0,y:0}  
  }
})
