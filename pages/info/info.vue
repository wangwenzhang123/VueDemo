<template>

	<view class="nothing">
		<image :src="url" mode="widthFix" class="m-navPic-img"></image>
	</view>
</template>

<script>
	export default{
		onLoad(options) {
			console.log('到这了'+decodeURIComponent(options['image']));
			this.url=decodeURIComponent(options['image']);
		},
		data(){
			return{
				url:''
			}
		}
	}
</script>
	
<style>
	.nothing{
	        background: #000000;
	        position: absolute;
	        top: 0;
	        left: 0;
	        right: 0;
	        bottom: 0;
	        display: flex;
	        justify-content: center;
	        align-items: center;
			}
			.m-navPic-img{
				
				width: 100%;
				height: 100%;
				margin-bottom: 12rpx;
				line-height: 1;
			}
</style>
