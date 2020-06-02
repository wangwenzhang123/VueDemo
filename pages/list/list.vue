<template>
	<view>
		<view class="list-contain">
			<view class="guess-item" v-for="(item,key) in list" :key="key">
				<image :src="item.url" class="image-wrapper" mode="widthFix" @click="navigaTo(item.url)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
			}
		},
		onLoad(options) {
			let id=options['type'];
			console.log(id);
			uni.setNavigationBarTitle({
				title:options['title']
			})
			uni.request({
				url:'http://10.20.73.43:8012/task-web/picture/getPictureTypeList',
				header: {
					'content-type': 'application/x-www-form-urlencoded', 
				},
				data:{
					'type':id
				},
				success: (res) => {
					console.log(res)
					this.list=res.data.data
				}
			})
		},
		methods:{
			navigaTo(imageUrl){
				uni.navigateTo({
					url:'../info/info'+'?image='+encodeURIComponent(imageUrl)
				})
			}
		},
		
	}
</script>

<style lang='scss'>
	.list-contain{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			/* overflow: hidden; */
			/* image{
				width: 100%;
				height: 100%;
				opacity: 1;
			} */
		}
		}
</style>
