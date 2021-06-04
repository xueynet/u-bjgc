<template name="fl">
	<view class='flex-direction'>
		<view class="fixed">
			<cu-custom bgColor="bg-shadeTop text-white">
				<block slot="content">乡村站群</block>
			</cu-custom>
		</view>
		<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in 4" :key="index">
				<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" @click="click" :data-in="index" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> {{item.name}}</view>
					</view>
					<view class="">
						<image class='listimg' :src="item.img" mode="aspectFill"></image>
					</view>
				</view>
				<view class="text-center padding">我是有底线的</view>
			</scroll-view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				tabCur: 0,
				isLoad:false,
				mainCur: 0,
				verticalNavTop: 0,
				load: true
			};
		},
		created() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [
				{name:'乡村1',id:'1',img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'},
				{name:'乡村2',id:'2',img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big39001.jpg'},
				{name:'乡村3',id:'3',img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big39002.jpg'},
				{name:'乡村4',id:'4',img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big39003.jpg'},
				{name:'乡村5',id:'5',img:'https://ossweb-img.qq.com/images/lol/web201310/skin/big39004.jpg'},
			];
			
			this.list = list;
			this.listCur = list[0];
		},
		mounted() {
			uni.hideLoading()
		},
		methods: {
			click(e) {
				uni.navigateTo({
				    url: '../xcpage/tabpage?id='+ e.currentTarget.dataset.in +''
				});
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style scoped>
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		background: #fff;
		white-space: initial;
		
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}
.listimg{
	width: 100%;
}
	.VerticalBox {
		display: flex;
		height: 150px;
		    -webkit-box-flex: 1;
		    -webkit-flex: 1 1 0%;
		    flex: 1 1 0%;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
		padding-bottom:30upx ;
	}
</style>
