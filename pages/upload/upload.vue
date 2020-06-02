<template>
	<view>
		<view  class="select-content">
			<text style="font-size: 15upx; color: #C0C0C0;">请选择分类</text>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="uni-input">{{array[index]}}</view>
			</picker>
		</view>
		<view class="center-content">
			<image :src="url" class="image" @click="seletImge"></image>
			<button class="commit" :disabled="Isselect">确定上传</button>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				array: ['天行', '斗破', '秦时', '其他'],
				index:0,
				url:'/static/add.jpg',
				Isselect:false
			}
		},
		onLoad() {
			
		},
		methods:{
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value			
			},
			seletImge(){
				this.Isselect=true;
				this.url='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1590483383&di=caae3611e34acffe29b91ca60a851f67&src=http://5b0988e595225.cdn.sohucs.com/images/20190531/aa8728e65d7a411291d7b3dd1f584d91.jpeg';
				uni.chooseImage({
					success(resu) {
						let images=resu.tempFilePaths;
						console.log(images);
						console.log(this.Isselect);
						uni.previewImage({
							urls:images
						});						
					}
				});
			}
		}
		
	}
</script>

<style lang='scss'>
	.select-content{
		background-color:#FFFFFF;
		height: 50upx;
		align-items: center;
		display: flex;
		flex-direction: row;
	}
	.uni-input{
		line-height: 1;
		padding-left: 100upx;
		color: #DD524D;
		margin-left: 50;
	}
	.center-content{
		margin-top: 100rpx;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.image{
		
		flex-wrap: 1;
	
	}
	.buttom-content{
		height: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.commit{
		width: auto;
		margin-top: 100rpx;
	}
</style>
