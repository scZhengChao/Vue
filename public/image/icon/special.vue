<template>
    <div>
          <section class="aui-flexView">
            <!-- 头部信息 begin -->
            <header class="aui-navBar">
                <a href="javascript:history.back(-1)" class="aui-navBar-item">
                    <i class="aui-icon aui-icon-back"></i>
                </a>
                <div class="aui-navBar-center">
                    <span class="aui-navBar-title">娱乐专题</span>
                </div>
                <a href="javascript:;" class="aui-navBar-item" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
                    <i class="aui-icon aui-icon-share"></i>
                </a>
            </header>
            <!-- 头部信息 end -->
            <section class="aui-scrollView">
                <div class="aui-content">
                    <div class="aui-special-special">
                        <img src="../assets/themes/img/banner/news1.jpg" alt="">
                    </div>
                    <div class="aui-special-box">
                        <div class="aui-special-head">
                            <h1>娱乐资讯精选</h1>
                            <p>在这里，你可以用最短的时间，帮助你读到最真实的娱乐圈资讯</p>
                        </div>
                    </div>
                    <div class="divR"></div>
                    <div class="aui-special-list">
                        <div class="aui-special-list-head">
                            <h1>1-8今日娱乐大事件</h1>
                        </div>
                        <div class="aui-special-list-item">



                            <a href="#" class="aui-special-cell" v-for="i in 6" :key='i'>
                                <div class="aui-special-cell-title">安以轩晒照片秀恩爱 意外曝光自己的豪华私人飞机内景 土豪 绝对的土豪啊</div>
                                <div class="aui-special-cell-img clearfix">
                                    <div>
                                        <img src="../assets/themes/img/ad/sp1.jpg" alt="">
                                    </div>
                                    <div>
                                        <img src="../assets/themes/img/ad/sp2.jpg" alt="">
                                    </div>
                                    <div>
                                        <img src="../assets/themes/img/ad/sp3.jpg" alt="">
                                    </div>
                                </div>
                                <div class="aui-special-cell-pl">
                                    <p>
                                        时尚周刊报道 <em>987人评价</em>
                                    </p>
                                </div>
                            </a>
                       </div>
                    </div>
                </div>
            </section>
        </section>
        <div class="m-actionsheet" id="actionSheet">
            <div class="aui-share-list">
                <ul class="clearfix">
                    <li>
                        <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s1.png" alt="">
                            </span>
                            <span>QQ空间</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s2.png" alt="">
                            </span>
                            <span>QQ好友</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s3.png" alt="">
                            </span>
                            <span>微信好友</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s4.png" alt="">
                            </span>
                            <span>新浪微博</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s5.png" alt="">
                            </span>
                            <span>朋友圈</span>
                        </a>
                    </li>
	                <li>
		                <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s6.png" alt="">
                            </span>
			                <span>邮箱</span>
		                </a>
	                </li>
	                <li>
		                <a href="#">
                            <span>
                                <img src="../assets/themes/img/icon/icon-s7.png" alt="">
                            </span>
			                <span>复制链接</span>
		                </a>
	                </li>
                </ul>
            </div>
            <a href="javascript:;" class="aui-cancel" id="cancel">取消分享</a>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
         
            var $myAs = $('#J_ActionSheet');

            $('#J_ShowActionSheet').on('click', function () {
                $myAs.actionSheet('open');
            });

            $('#J_Cancel').on('click', function () {
                $myAs.actionSheet('close');
            });

            // 自定义事件
            $myAs.on('open.ydui.actionsheet', function () {
                console.log('打开了');
            }).on('close.ydui.actionsheet', function () {
                console.log('关闭了');
            });
    }
}
</script>
<script>
export default {
    data(){return{
        list:[]
    }},
    mounted(){
        
    }
}
</script>

