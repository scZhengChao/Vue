<template>
    
	<section class="aui-flexView">
		<!-- 头部信息 begin -->
		<header class="aui-navBar">
			<a href="javascript:history.back(-1)" class="aui-navBar-item">
				<i class="aui-icon aui-icon-back"></i>
			</a>
			<div class="aui-navBar-center">
				<span class="aui-navBar-title">设置</span>
			</div>
			<a href="javascript:;" class="aui-navBar-item">
				<i class="aui-icon aui-icon-user"></i>
			</a>
		</header>
		<!-- 头部信息 end -->
		<section class="aui-scrollView">
			<div class="aui-content">
				<div class="aui-user-list-item">
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-dope"></i>
							微信
						</div>
						<div class="aui-user-list-cell-right">
							未绑定
						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-lss"></i>
							QQ
						</div>
						<div class="aui-user-list-cell-right">
							C壹壹C同学
						</div>
					</a>
					<div class="divR"></div>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-jbb"></i>
							夜间模式
						</div>
						<div class="aui-user-list-cell-right">
							未开启
						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-llw"></i>
							文字模式
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-scc"></i>
							离线下载
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<div class="divR"></div>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-ydd"></i>
							推送设置
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-yjj"></i>
							新闻优选
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-szz"></i>
							关于我们
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-szz"></i>
							检查更新
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-szz"></i>
							用户协议
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
					<a href="javascript:;" class="aui-user-list-cell" @click="logOut">
						<div class="aui-user-list-cell-left">
							<i class="aui-icon aui-icon-szz"></i>
							退出当前账户
						</div>
						<div class="aui-user-list-cell-right">

						</div>
					</a>
				</div>
			</div>
		</section>
	</section>
</template>
<script>
import * as types from '../store/types'
export default {
	methods:{
		logOut(){
			this.$http({
				url:'http://localhost:3000/logout'
			}).then((res)=>{
				console.log(res.data)
				if(res.data.err==0){
					alert('退出成功');
					this.$router.push('/login')
					this.$store.dispatch(types.updata_user,[])
				}else{
					alert('退出失败')
				}
			})
		}
	}
}
</script>

