<template>
	<view>
		<view class="footer-row"></view>
		<view class="footer">
			<view class="footer-item icon-home" v-bind:class="{'footer-active':tab=='home'}" @click="goHome()">首页</view>
			 
			<view class="footer-item icon-my_light" v-bind:class="{'footer-active':tab=='user'}"  @click="goUser()">我的</view>
		</view>
	</view>
	
</template>

	
<script>
	export default{
		props:{
			tab:""
		},
		methods:{
			goHome(){
				console.log('home');
				uni.navigateTo({
					url:'../pages/index/index'
				})
			},
			goUser(){
				console.log('user');
				uni.navigateTo({
					url:'../pages/user/user'
				})
			}
		}
	}
</script>
	
<style>
	.icon-my_light:before {
	  content: "\e7d5";
	}
	.icon-home:before {
	  content: "\e6b8";
	}
	
	.footer-row{
		height: 120rpx;
	 }
	.footer{
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		right: 0rpx;
		z-index: 100;
		background-color: #fafafa;
		border-top: 1px solid #eee;
		font-size: 33.6rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.footer-item {
		display: flex;
		flex-direction: column;
		position: relative;
		text-align: center;
		flex: 1; 
		text-decoration: none;
		color: #929292;
		padding: 16.8rpx 0rpx;
		line-height: 1.4;
		height: 120rpx;
	    box-sizing: border-box;
	}
	.footer-active,.footer-active:before{
		color: #007bff;
	}
</style>
