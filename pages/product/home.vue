<template name="product">
	<view class='flex-direction'>
		<view class="cu-bar bg-gradual-orange search">
			<view class="cu-avatar round" style="background-image:url(../../static/favicon.png);"></view>
			<view class="content">
				产品服务
			</view>
			<view class="action">
				<view class="cu-load load-cuIcon" :class="!isLoad?'loading':'over'"></view>
			</view>
		</view>
		<scroll-view scroll-y class="page">
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+item.img+')'}]"
				 v-for="(item,index) in list" :key="index">
					<view class="cardTitle" @click="bigclick" :data-in="index">
						{{item.title}}
					</view>
					<view class="cardswiper">
						<swiper class="screen-swiper round-dot" :current="1" :indicator-dots="true" interval="5000" display-multiple-items="3"
						 duration="500">
							<swiper-item class="swiperitem" v-for="(item,index) in 4" :key="index"  @click="click" :data-in="index">
								<image class="uni-image" :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<view class="text-center padding">我是有底线的</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "components",
		data() {
			return {
				StatusBar: this.StatusBar,
				isLoad:false,
				CustomBar: this.CustomBar,
				list: [{
						title: '效果图',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					},
					{
						title: '建筑规划',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
					},
					{
						title: '自建房别墅',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
					},
					{
						title: '园林景观',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					},
					{
						title: '资质办理',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					},
					{
						title: '税筹策划',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					}
				]
			};
		},
		methods: {
			click(e) {
				uni.navigateTo({
				    url: '../product/detail?id='+ e.currentTarget.dataset.in +''
				});
			},
			bigclick(e) {
				uni.navigateTo({
				    url: '../product/list?id='+ e.currentTarget.dataset.in +''
				});
			},
		},
	}
</script>

<style scoped>
	.cardTitle {
		color: #fff;
		padding: 90upx 60upx 20upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}
.cardswiper{
	border-radius: 10upx;
	overflow: hidden;
}
.cardswiper .swiperitem {
		padding: 20upx;
		box-sizing: border-box;
		width: 100% !important;
}
.cardswiper .swiperitem .uni-image{
	border-radius: 10upx;
	overflow: hidden;
}
.screen-swiper.round-dot{
	min-height: auto;
}
.cu-item.bg-img{
	position: relative;
}
	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 24upx;
		background-color: #fff;
		display: block;
		bottom: 6upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
