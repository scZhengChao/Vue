<template>
    <div>
        <router-link to='/pages' class="aui-news-item" v-for="(item,index) in news" :key="index">
            <div class="aui-news-item-img">
                <img :src="item.img" title="" alt="">
            </div>
            <div class="aui-news-item-text">
                <h2 class="aui-news-item-text-title">{{item.title}}</h2>
                <p class="aui-news-item-text-text">{{item.text}}</p>
                <div class="aui-news-item-text-info">
                    <span class="aui-news-item-text-info-time"><i class="aui-icon aui-icon-time"></i> {{item.time}}</span>
                    <span class="aui-news-item-text-info-text">{{item.source}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
import * as types from '../store/types'
import { mapGetters } from 'vuex';
export default {
    mounted(){
        //  this.$http({
        //     url:'/data/news.json'
        // }).then((res)=>{
        //     this.news = res.data 
        // })
         this.$store.dispatch(types.updata,{
            url:'http://localhost:3000/news',
            type:types.updata_news
        })
    },
    computed:{
        ...mapGetters([
            "news"
        ])
    }
}
</script>
