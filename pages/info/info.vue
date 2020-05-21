<template>

	<view class="nothing">
		<image :src="url" mode="aspectFit" ></image>
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
	        background: #464646;
	        position: absolute;
	        top: 0;
	        left: 0;
	        right: 0;
	        bottom: 0;
	        display: flex;
	        justify-content: center;
	        align-items: center;
			}
</style>
