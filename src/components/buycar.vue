<template>
  <div class="buycar">
    <dl v-for="(item,index) in shop" :key="index">
      <dt>标题:{{item.price}}</dt>
      <dd>描述:{{item.name}}</dd>
      <dd>
        <input  type="button" value="+" @click="changeItem({id:item.product_id,num:1})" >
        {{item.number}}
        <input  type="button" value="-" @click="changeItem({id:item.product_id,num:-1})">
      </dd>
      <dd><input  type="button" value="删除" @click="removeItem({id:item.product_id})"></dd>
    </dl>
    <input type="button" value="清空购物车" @click="clearBuycar">
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex';
  import * as types from '../store/types';
  export default{
    computed:mapGetters([
      "shop"
    ]),
    methods:mapActions([
      types.changeItem,types.removeItem,types.clearBuycar
    ]),
  }
</script>
<style>
  .buycar input{
    width: 50px;
    height: 30px;
  }
</style>