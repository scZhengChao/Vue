<template>
    <div>
       	<!-- 底部导航 begin -->
			<footer class="aui-footer-bar aui-footer-fixed">
                <router-link to='/home' class="aui-footer-item" active-class='current'>
				<!-- <a href="index.html" class="aui-footer-item current"> -->
					<span class="aui-footer-item-icon">
						<i class="aui-icon aui-icon-news"></i>
					</span>
					<span class="aui-footer-item-text">要闻</span>
				<!-- </a> -->
                </router-link>
                <router-link to='/video' active-class='current' class="aui-footer-item">
	                <!-- <a href="video.html" class="aui-footer-item"> -->
                        <span class="aui-footer-item-icon">
                            <i class="aui-icon aui-icon-video"></i>
                        </span>
                    <span class="aui-footer-item-text">视频</span>
				    <!-- </a> -->
                </router-link>
                <router-link to='/recommend' class="aui-footer-item" active-class='current'>
                    <!-- <a href="hots.html" class="aui-footer-item"> -->
                        <span class="aui-footer-item-icon">
                            <i class="aui-icon aui-icon-hot"></i>
                        </span>
                        <span class="aui-footer-item-text">推荐</span>
                    <!-- </a> -->
                </router-link>
                <router-link to='/user' class="aui-footer-item" active-class='current'>
                   <!-- <a href="me.html" class="aui-footer-item"> -->
					<span class="aui-footer-item-icon">
						<i class="aui-icon aui-icon-my"></i>
					</span>
					<span class="aui-footer-item-text">我的</span>
				    <!-- </a> -->
                </router-link>
			</footer>
			<!-- 底部导航 end -->
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.aui-scrollView {
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-bottom: -1px;
}

.aui-pages-footer {
    width: 100%;
    position: relative;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .104rem 0 .07rem;
    background-color: rgba(255, 255, 255, 0.99);
}

.aui-pages-footer:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #B2B2B2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

.aui-footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10002;
}

.aui-pages-footer-box {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
}

.aui-pages-footer-box {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    padding: 0 0.24rem;
    overflow: hidden;
}

.aui-pages-footer-input {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.aui-pages-footer-input input {
    background: #f1f1f1;
    border: none;
    border-radius: 1rem;
    height: 0.55rem;
    width: 95%;
    padding-left: 0.1rem;
}

.aui-pages-footer-title {
    padding-top: 0.15rem;
}

.aui-pages-footer-title span {
    width: 0.43rem;
    height: 0.43rem;
    display: inline-block;
    float: left;
    margin: 0 0.2rem;
}

.aui-pages-footer-title span img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
    float: left;
}
</style>

