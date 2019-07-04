<template>
    
	<section class="aui-flexView">
		<section class="aui-scrollView">
			<div class="aui-content">
			
				<Nav></Nav>

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
									<span class="aui-news-item-text-info-time"><i class="aui-icon aui-icon-comment"></i>2390</span>
									<span class="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
						<a href="javascript:;" class="aui-news-item aui-news-list-one">
							<div class="aui-news-item-img">
								<img src="../assets/themes/img/ad/ad-3.jpg" alt="">
								<i class="aui-play-btn"></i>
							</div>
							<div class="aui-news-item-text">
								<h2 class="aui-news-item-text-title">王思聪关注的最小网红，还是抖音第一小女神，才9岁就合作TFBOYS</h2>
								<div class="aui-news-item-text-info">
									<span class="aui-news-item-text-info-time"><i class="aui-icon aui-icon-comment"></i>2390</span>
									<span class="aui-news-item-text-info-text">潮流老湿</span>
								</div>
							</div>
						</a>
						<a href="javascript:;" class="aui-news-item aui-news-list-one">
							<div class="aui-news-item-img">
								<img src="../assets/themes/img/ad/ad-4.jpg" alt="">
								<i class="aui-play-btn"></i>
							</div>
							<div class="aui-news-item-text">
								<h2 class="aui-news-item-text-title">王思聪关注的最小网红，还是抖音第一小女神，才9岁就合作TFBOYS</h2>
								<div class="aui-news-item-text-info">
									<span class="aui-news-item-text-info-time"><i class="aui-icon aui-icon-comment"></i>2390</span>
									<span class="aui-news-item-text-info-text">潮流老湿</span>
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
							<li>
								<a href="javascript:;">独家</a>
							</li>
							<li>
								<a href="javascript:;">宠物</a>
							</li>
							<li>
								<a href="javascript:;">娱乐</a>
							</li>
							<li>
								<a href="javascript:;">画家</a>
							</li>
							<li>
								<a href="javascript:;">时尚</a>
							</li>
							<li>
								<a href="javascript:;">文学</a>
							</li>
							<li>
								<a href="javascript:;">汽车</a>
							</li>
							<li>
								<a href="javascript:;">历史</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="divR"></div>
				<!-- 关键词 标签 end -->

			</div>

			<!-- 底部导航 begin -->
			<footer class="aui-footer-bar aui-footer-fixed">
				<a href="index.html" class="aui-footer-item">
					<span class="aui-footer-item-icon">
						<i class="aui-icon aui-icon-news"></i>
					</span>
					<span class="aui-footer-item-text">要闻</span>
				</a>
				<a href="video.html" class="aui-footer-item current">
					<span class="aui-footer-item-icon">
						<i class="aui-icon aui-icon-video"></i>
					</span>
					<span class="aui-footer-item-text">视频</span>
				</a>
				<a href="hots.html" class="aui-footer-item">
					<span class="aui-footer-item-icon">
						<i class="aui-icon aui-icon-hot"></i>
					</span>
					<span class="aui-footer-item-text">推荐</span>
				</a>
				<a href="me.html" class="aui-footer-item">
					<span class="aui-footer-item-icon">
						<i class="aui-icon aui-icon-my"></i>
					</span>
					<span class="aui-footer-item-text">我的</span>
				</a>
			</footer>
			<!-- 底部导航 end -->
		</section>

	</section>

</template>
<script>
import Nav from './nav.vue';
let count= 0
export default {
	components:{
		Nav
	},
	mounted(){
        document.documentElement.scrollTop = count
        // console.log('updated',count)
	},
	destroyed(){
        count = document.documentElement.scrollTop
        // console.log('destroyed',count)
	}
}
</script>
