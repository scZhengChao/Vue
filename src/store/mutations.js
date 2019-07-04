import * as types from './types';

let mutations = {
    [types.View_foot]: (state, payload) => { state.bfoot = payload; },
    [types.view_loadding]: (state, payload) => { state.bloadding = payload },
    [types.checkUsers]: (state, payload) => { state.user = payload },
    [types.updata_banner]: (state, payload) => { state.banner = payload },
    [types.updata_dujia]: (state, payload) => { state.dujia = payload },
    [types.updata_news]: (state, payload) => { state.news = payload },
    [types.updata_user]: (state, payload) => { state.user = payload },
    [types.updata_car]: (state, payload) => { state.car = payload },
    [types.shop]: (state, payload) => { state.shop = payload },
    [types.updata_shop]: (state, payload) => { state.shop = payload },
    
}

export default mutations