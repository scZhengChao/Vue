<template>
  <div class="buycar">
    <input type="button" value="点击进入购物车" @click='$router.push("/car")'>
    <dl v-for="(item,index) in car" :key="index">
      <dt>标题:{{item.price}}</dt>
      <dd>描述:{{item.name}}</dd>
      <input type="button" value="点击加入购物车" @click="shop({id:item.product_id})">
    </dl>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex';
  import * as types from '../store/types';
  export default{
    computed:mapGetters([
        "car"
    ]),
    methods:mapActions([
      types.shop
    ]),
    mounted(){
      this.$store.dispatch(types.updata,{
        url:'http://localhost:3000/car', 
        type:types.updata_car
      })
    },

  }
</script>
<style>
  .buycar input{
    width: 100px;
    height: 30px;
  }
</style>