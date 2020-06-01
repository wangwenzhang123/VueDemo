<template>
	<view class="content">
		<swiper interval="3000" autoplay="true" indicator-color="red" indicator-dots="true" style="height: 400rpx;">
			<swiper-item v-for="(item,index) in bannerList" :key="index" @click="getToList(item.type)" >
				<view>
				<image :src="item.url" style="width: 100%;"></image>	
				</view>
			</swiper-item>
			
		</swiper>
		<view class="m-navPic-group">'
		<navigator v-for="(item,index) in navigatorList" :key='item.id' class="m-navPic-item" @click="getToList(item.url,item.title)">
			<image class="m-navPic-img" :src="item.url" mode="widthFix"></image>
			<text>{{item.title}}</text>
		</navigator>
		</view>
		<view class="buttom-list">
			<image class="list-item" v-for="(item,index) in list" :key="index" @click="getToInfo(item)" :src="item" style="width: auto;"></image>
		</view>
		
	</view>
	
</template>

<script>
	import buttonBar from "../../components/buttomtab.vue"
	export default {
		components:{buttonBar},
		data() {
			return {
				title: 'Hello',
				bannerList:[],
				navigatorList:[
					{
						url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589973543762&di=724e2a33b79a0090901ced4b244f5088&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2Fc6523c1f1bffdf8b95d0d6837bbe96081cfea6a61d07a-yVKijl_fw658',
						title:'赤眉',
						id:11
					},
					{
						url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=864656751,3976462527&fm=26&gp=0.jpg',
						title:'流沙',
						id:22
					},
					{
						url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3618031882,2802633554&fm=26&gp=0.jpg',
						title:'夜幕',
						id:33
					},
					{
						url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027804443,1079524921&fm=26&gp=0.jpg',
						title:'罗网',
						id:44
					},
				],
				list:[
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589974545465&di=c4b0d0c736ae0520204e002d4f1fa9d6&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F52d7b1e48f61d4e66441ae6f24275bfd3dd80a88.jpg',
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3722234354,43811783&fm=26&gp=0.jpg',
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=175790602,1497308572&fm=26&gp=0.jpg'
				]
			}
		},
		onLoad() {
			uni.request({
				url:'http://10.20.73.43:8012/task-web/picture/getBannerList',
				header: {
					'content-type': 'application/x-www-form-urlencoded', 
				},
				success: (res) => {
					if(res.data.code == 200){
						console.log(res.data.data)
						this.bannerList=res.data.data
					}
				},
				fail: (resu) => {
					console.log(resu)
				}
			})
		},
		methods: {
			getToInfo(imageUrl){3
				console.log('点击了');
				//imageUrl='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=207560309,1643497987&fm=15&gp=0.jpg';
				uni.navigateTo({
					url:'../info/info'+'?image='+encodeURIComponent(imageUrl)
				})
			},
			getToList(type){
				console.log('点击了');
				//imageUrl='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2075603309,1643497987&fm=15&gp=0.jpg';
				uni.navigateTo({
					url:'../list/list'+'?type='+type/* +'&title='+title+"&id=12312312312" */
				})
			},
			
			}
		}
</script>

<style lang="scss">
	.m-navPic-item{
		flex-grow: 1;
		width: 20%;
		padding: 0rpx 0rpx;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 36rpx;
		box-sizing: border-box;
	}
	.m-navPic-img{
		
		width: 80%;
		height: 80%;
		margin-bottom: 12rpx;
		line-height: 1;
	}
	.m-navPic-group{
		margin: 20upx;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		flex-wrap: wrap;
		background-color: #fff;
	}
	.buttom-list{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding-left: 10upx;
		padding-right: 10upx;
	}
	.list-item{
		margin-bottom: 10upx;
	}
</style>
