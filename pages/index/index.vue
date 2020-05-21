<template>
	<view class="content">
		<swiper interval="3000" autoplay="true" indicator-color="red" indicator-dots="true" style="height: 400rpx;">
			<swiper-item v-for="(item,index) in bannerList" :key="item.id" @click="getToInfo(item.imageUrl)" >
				<view>
				<image :src="item.imageUrl" style="width: 100%;"></image>	
				</view>
			</swiper-item>
			
		</swiper>
		<view class="m-navPic-group">'
		<navigator v-for="(item,index) in navigatorList" :key='item.id' class="m-navPic-item">
			<image class="m-navPic-img" :src="item.url" mode="widthFix"></image>
			<text>{{item.title}}</text>
		</navigator>
		</view>
		<uni-list>
			<uni-list-item  v-for="(item,index) in list" :key="index" showArrow="false" @click="getToInfo(item)">
				<image :src="item" style="width: auto;"></image>
			</uni-list-item>
		</uni-list>
		
	</view>
	
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import buttonBar from "../../components/buttomtab.vue"
	export default {
		components:{uniList,uniListItem,buttonBar},
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
			uni.showTabBar({
				
			});
			this.loadBanner()
		},
		methods: {
			getToInfo(imageUrl){
				console.log('点击了');
				//imageUrl='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2075603309,1643497987&fm=15&gp=0.jpg';
				uni.navigateTo({
					url:'../info/info'+'?image='+encodeURIComponent(imageUrl)
				})
			},
			async loadBanner(){
				let res=await this.$api.json('bannerJson');
				res=[
	{
		id:1,
		imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589968034195&di=e1dab8a77046d58a855981c9f669d223&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn13%2F247%2Fw630h417%2F20180521%2F4f98-haturft7110759.jpg',
		link:'',
		name:'焰灵姬'
	},
	{
		id:2,
		imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589968034195&di=b3aff6ce06cdd3b88e04ff356f31508b&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F52d7b1e48f61d4e66441ae6f24275bfd3dd80a88.jpg',
		link:'',
		name:'焰灵姬2'
	},
	{
		id:3,
		imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589968034194&di=43d36eb87b7ea09a9d15f12a67fcb246&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F02%2F20170502131440_GsQaU.thumb.700_0.png',
		link:'',
		name:'卫庄'
	},
	{
		id:4,
		imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589968034194&di=1c3c622d1cd6ee583d2e588b40baebd5&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0711%2F47446388D9051A90B577C2246737CE1E6E4E2BEA_size350_w648_h410.png',
		link:'',
		name:'血衣侯'
	},
];
				console.log(res);
				this.bannerList=res;
			}
		}
	}
</script>

<style>
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
</style>
