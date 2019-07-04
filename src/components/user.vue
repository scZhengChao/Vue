<template>
    <section class="aui-flexView">
		<section class="aui-scrollView">
			<div class="aui-content">

				<div class="aui-user-header">
					<div class="aui-user-content">
						<div class="aui-user-fex">
							<div class="aui-user-fex-head">
								<div class="aui-user-fex-photo">
									<img src="../assets/themes/img/user/head.jpg" alt="">
								</div>
								<div class="aui-user-fex-title">
									<h2>C壹壹C同学</h2>
									<span>
										<em><i class="aui-icon aui-icon-sign"></i>北京</em>
										<em>天蝎座</em>
									</span>
								</div>
							</div>
							<div class="aui-user-fex-info">
								<a href="#"> <i class="aui-icon aui-icon-coin"></i> 签到领金币</a>
							</div>
						</div>
						<div class="aui-user-prompt">
							<p>您今天已阅读时长4小时</p>
						</div>
						<div class="aui-user-list">
							<a href="comment.html">
								<span class="aui-user-list-digit">523</span>
								<span class="aui-user-list-text">发表</span>
							</a>
							<a href="follow.html">
								<span class="aui-user-list-digit">1240</span>
								<span class="aui-user-list-text">关注</span>
							</a>
							<a href="fans.html">
								<span class="aui-user-list-digit">3423</span>
								<span class="aui-user-list-text">粉丝</span>
							</a>
							<a href="sign.html">
								<span class="aui-user-list-digit">23</span>
								<span class="aui-user-list-text">金币</span>
							</a>
						</div>
					</div>
				</div>
				<div class="aui-user-list-item">
					<a href="information.html" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-dope"></i>
							消息
						</div>
						<div class="aui-user-list-cell-right">
							最新消息
						</div>
					</a>
					<a href="history.html" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-lss"></i>
							历史/收藏
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<div class="divR"></div>
					<a href="sign.html" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-jbb"></i>
							金币
						</div>
						<div class="aui-user-list-cell-right">
							查看金币
						</div>
					</a>
					<a href="free.html" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-llw"></i>
							免流量看新闻
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="https://shop108012643.m.taobao.com/" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-scc"></i>
							商城
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<div class="divR"></div>
					<a href="time.html" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-ydd"></i>
							阅读时长
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="feedback.html" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-yjj"></i>
							意见反馈
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<router-link to="/set" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-szz"></i>
							设置
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</router-link>
				</div>

			</div>
		</section>
	</section>
</template>
<script>
import store from '../store';
import axios from 'axios';
import * as types from '../store/types'
export default {
	data(){return{
		userdata:[]
	}},
	beforeRouteEnter(to,form,next){
		axios({
			url:'http://localhost:3000/user',
			withCredentials: true,//携带跨源凭证
		}).then((res)=>{
			if(res.data.err == 0){
				next((_this)=>{
					_this.$store.dispatch(types.updata_user,res.data.msg)
				})
			}else{
				next('/login')
			}
		})
	},
	mounted(){
		this.userdata = this.$store.state.user
	}
}
</script>

