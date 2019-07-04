import Vue from 'vue';
import Vuex from 'vuex';//store类 mapactions,mapGetters等方法

Vue.use(Vuex);

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
// console.log(Vuex)
let store = new Vuex.Store({
    actions,getters,mutations,state,
})
export default store