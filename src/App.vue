<template>
  <div>
      <loadding v-show = "bloadding"></loadding>
      <transition
      enter-active-class = 'fadeIn'
      leave-active-class = 'fadeOut'
      >
        <router-view class="animated" ></router-view>
      </transition>
      <section class="aui-scrollView">
        <Footer v-show = "bfoot"></Footer>
      </section>
  </div>
</template>
<script>

import Footer from './components/footer.vue';

import {mapActions,mapGetters} from 'vuex';

import * as types from './store/types';

export default {
  name:'app',
  // data(){return{
  //   bool:true
  // }},
  components:{
    Footer,
  },
  methods:{
    checkRouterChange(xin){
      let path = xin.path
      // console.log(path)
      if(/pages|special|login|reg/.test(path)){
        this.$store.dispatch(types.View_foot,false)
      
      }else if(/home|video|recommend|user/.test(path)){
        this.$store.dispatch(types.View_foot,true) 
      }else{
          this.$store.dispatch(types.View_foot,false)
      }
    }
  },
   watch:{
    //  省略前面的this的
    $route:{
      deep:true,
      immediate:true,
      handler:'checkRouterChange'
    },
    shop(news,old){
      // console.log(news,old)
      localStorage.setItem("goods",JSON.stringify(this.shop))
    }

  },
  mounted(){
    let list = eval(localStorage.getItem("goods"))
    this.$store.dispatch(types.updata_shop,list)
    // console.log(this.$store)
    // console.log(this.$route)
    // console.log(this.$router)
  },
  updated(){
  },
  computed:{
    ...mapGetters([
        'bfoot','bloadding',"shop"
    ])
  },
  // methods:{
  //   ...mapActions([
      
  //   ])
  // }
  // directives:{
  //   color:{
  //     inserted(){

  //     }
  //   }
  // }
}
</script>

