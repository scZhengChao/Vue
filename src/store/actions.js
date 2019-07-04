import * as types from './types';
import axios from 'axios';
let actions = {
    [types.View_foot]: ({ commit }, payload) => { commit(types.View_foot, payload) },
    [types.view_loadding]: ({ commit }, payload) => { commit(types.view_loadding, payload) },
    [types.updata]: ({ commit, state }, payload) => {
        axios({
            url: payload.url,
        }).then((res) => {
          
            commit(payload.type,res.data)
        })
    },
    [types.reg]: ({ commit, state }, payload) => {
        return axios({
            url: 'http://localhost:3000/reg',
            params:payload
        })
    },
    [types.login]: ({ commit, state }, payload) => {
        return axios({
            url: 'http://localhost:3000/login',
            params: payload,
            // withCredentials: true,//携带跨源凭证
        })
    },
    [types.updata_user]: ({ commit, state }, payload) => {
        commit(types.updata_user,payload)
    },
    [types.shop]: ({ commit, state }, payload) => {
        let arr = [...state.shop]
        let find = false;
        arr.forEach((item, index) => {
            if (item.product_id == payload.id) {
                item.number++;
                find = true;
            }
        })
        if (!find) {
            state.car.forEach((item, index) => {
                if (item.product_id == payload.id) {
                    arr.push(item)
                }
            }) 
        }
        commit(types.shop, arr)  // actions不会修改state,所以你传过去的并没有改,所以你要拷贝一份,然后过去合并
    },
    [types.changeItem]: ({ commit, state }, payload) => {
        state.shop.forEach((item, index) => {
            if (item.product_id == payload.id) {
               item.number+=payload.num
           }
        })
         //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
        commit(types.shop,[...state.shop])
        // commit(types.CHANGE_ITEM, state.buycar)加密
    },
    [types.removeItem]: ({ commit, state }, payload) => {
        state.shop.forEach((item, index) => {
            if (item.product_id == payload.id) {
                state.shop.splice(index,1)
            }
        })
        commit(types.shop,[...state.shop])
    },
    [types.clearBuycar]: ({ commit, state }, payload) => {
        commit(types.shop,[])
    },
    [types.updata_shop]: ({ commit }, payload) => {
        commit(types.updata_shop,payload)
    }
}

export default actions