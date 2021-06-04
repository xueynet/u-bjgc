<template name="xccp">
	<view class='flex-direction'>
		<view class="cu-bar bg-gradual-orange search">
			<view class="action" @click="goback">
				<text class="cuIcon-close"></text> 关闭
			</view><view class="content">
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
						<swiper class="screen-swiper round-dot" :current="1" :indicator-dots="true" interval="5000" display-multiple-items="2"
						 duration="500">
							<swiper-item v-for="(item,index) in 4" :key="index"  @click="click" :data-in="index">
								<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
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
						title: '政府招标项目',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					},
					{
						title: '农村土地开发',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
					},
					{
						title: '农资车辆载具',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
					}
				]
			};
		},
		methods: {
			goback(){
				uni.navigateBack({
				    delta: 1
				});
			},
			click(e) {
				uni.navigateTo({
				    url: 'cp-detail?id='+ e.currentTarget.dataset.in +''
				});
			},
			bigclick(e) {
				uni.navigateTo({
				    url: 'cp-list?id='+ e.currentTarget.dataset.in +''
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
.cardswiper swiper-item {
		padding: 20upx;
		box-sizing: border-box;
		width: 100% !important;
}
.cardswiper swiper-item image{
	border-radius: 10upx;
	overflow: hidden;
}
.screen-swiper {
	min-height: auto;
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
