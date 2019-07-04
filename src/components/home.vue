<template>
    <div>
        <Header></Header>
        <div class="aui-content">
          
            <Nav></Nav>
   
            <!-- 首页轮播滚动 begin -->
            <div class="m-slider" data-ydui-slider>
                <div class="slider-wrapper">

                    <div class="slider-item" v-for="(item,index) in banner" :key="index">
                        <router-link to='/pages'>
                            <p class="aui-slider-text">{{item.title}}</p>
                            <img :src = "item.img"/>
                        </router-link>
                    </div>

                </div>
                <div class="slider-pagination"></div>
            </div>
            <!-- 首页轮播滚动 end -->

            <!-- 新闻列表置顶 begin -->
            <div class="aui-news-box">
                <article class="aui-news-list">




                    <News></News>



                </article>
            </div>
            <div class="divR"></div>
            <!-- 新闻列表置顶 end -->

            <!-- 独家报道 begin -->
            <div class="aui-picture">
                <div class="aui-cell-flex">
                    <a href="javascript:;" class="aui-cell-flex-item">
                        <div class="aui-cell-text-fl">独家精选</div>
                        <div class="aui-cell-text-fr aui-cell-arrow">查看更多</div>
                    </a>
                </div>

                <div class="aui-picture-box">
                    <div class="aui-slide-box aui-slide-box-clear">
                        <div class="aui-slide-list">
                            <ul class="aui-slide-item-list">



                                <li class="aui-slide-item-item" v-for="(item,index) in dujia" :key="index">
                                    <a href="#" class="v-link">
                                        <img class="v-img" :src="item.img">
                                    </a>
                                    <p>{{item.title}}</p>
                                </li>


                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div class="divR"></div>
            <!-- 独家报道 end -->

            <!-- 新闻列表置顶 begin -->
            <div class="aui-news-box">
                <article class="aui-news-list">
                    <a href="javascript:;" class="aui-news-item aui-news-list-one">
                        <div class="aui-news-item-img">
                            <img src="../assets/themes/img/ad/ad-2.jpg" alt="">
                            <i class="aui-play-btn"></i>
                        </div>
                        <div class="aui-news-item-text">
                            <h2 class="aui-news-item-text-title">王思聪关注的最小网红，还是抖音第一小女神，才9岁就合作TFBOYS</h2>
                            <div class="aui-news-item-text-info">
                                <span class="aui-news-item-text-info-time"><i class="aui-icon aui-icon-time"></i> 25分钟前</span>
                                <span class="aui-news-item-text-info-text">环球新闻网</span>
                            </div>
                        </div>
                    </a>

                    <News></News>

                    <a href="javascript:;" class="aui-news-item aui-news-list-one">
                        <div class="aui-news-item-img">
                            <img src="../assets/themes/img/ad/ad-3.jpg" alt="">
                            <i class="aui-play-btn"></i>
                        </div>
                        <div class="aui-news-item-text">
                            <h2 class="aui-news-item-text-title">王思聪关注的最小网红，还是抖音第一小女神，才9岁就合作TFBOYS</h2>
                            <div class="aui-news-item-text-info">
                                <span class="aui-news-item-text-info-time"><i class="aui-icon aui-icon-time"></i> 25分钟前</span>
                                <span class="aui-news-item-text-info-text">环球新闻网</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
            <div class="divR"></div>
            <!-- 新闻列表置顶 end -->

            <!-- 关键词 标签 begin -->
            <div class="aui-label-box">
                <div class="aui-label-content">
                    <ul>


                        <li v-for="(item,index) in keys" :key="index">
                            <a href="javascript:;">{{item}}</a>
                        </li>
                      

                    </ul>
                </div>
            </div>
            <div class="divR"></div>
            <!-- 关键词 标签 end -->

            <!-- 新闻列表置顶 begin -->
            <div class="aui-news-box">
                <article class="aui-news-list">




                    <News></News>
            



                </article>
            </div>
            <div class="divR"></div>
            <!-- 新闻列表置顶 end -->


        </div>
    </div>
</template>
<script>
import Header from './header.vue';
import Nav from './nav.vue';
import News from './news.vue';
import * as types from '../store/types'
import { mapGetters } from 'vuex';
let count = 0
export default {
    data(){return{
        // banner:[],
        keys:["独家",'宠物','娱乐','画家','时尚','文学','汽车','历史'],
        // dujia:[]
    }},
    components:{
        Header,Nav,News
    },
    mounted(){
        // 请求轮播图
        // this.$http({
        //     url:'/data/banner.json'
        // }).then((res)=>{
        //     this.banner = res.data
           
        // })
        this.$store.dispatch(types.updata,{
            url:'http://localhost:3000/banner',
            type:types.updata_banner
        })
        
        // 求独家数据
        //  this.$http({
        //     url:'/data/dujia.json'
        // }).then((res)=>{
        //     this.dujia = res.data 
        // })


        this.$store.dispatch(types.updata,{
            url:'http://localhost:3000/dujia',
            type:types.updata_dujia
        })

         document.documentElement.scrollTop = count
    },
    // updated(){
    //     document.documentElement.scrollTop = count
	// },
	destroyed(){
        count = document.documentElement.scrollTop
    },
    computed:{
        ...mapGetters([
            'banner',"dujia"
        ])
    }
}
</script>
<style>

</style>

