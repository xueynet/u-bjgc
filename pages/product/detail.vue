<template>
	<view class='flex-direction'>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true"><block slot="backText">返回</block><block slot="content">id:{{id}}</block></cu-custom>
		<scroll-view scroll-y class="page">
			<view class="img-view" v-if="!showSwiper">
				<image :src="imgUrls[0]"></image>
			</view>
			<swiper v-if="showSwiper" indicator-dots="true">
				<swiper-item v-for="(img,key) in imgUrls" :key="key">
					<image :src="img" />
				</swiper-item>
			</swiper>
			
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-orange text-title"></text>产品名称
				</view>
			</view>
			<view class="padding bg-white solid-bottom">
				<view class="flex-col">
					<view class='njg'>998</view>	
					<view class='ojg'>1998</view>		
				</view>
				<view class="flex-sub">
					<view>评价:324</view>	
					<view>交易成功:89424</view>		
					<view>包满意</view>	
				</view>
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-newshot text-orange"></text>产品简介
				</view>
			</view>
			<view class="padding bg-white solid-bottom">
				在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。
				在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-picfill text-orange"></text>图片详情
				</view>
			</view>
			<view class="bg-white solid-bottom">
				<image src="../../static/componentBg.png"></image>
				<image src="../../static/BasicsBg.png"></image>
				<image src="../../static/componentBg.png"></image>
			</view>
		</scroll-view>
		<view class="cu-bar bg-white tabbar border shop">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-orange">
					<view class="cu-tag badge"></view>
				</view>
				客服
			</button>
			<button class="action" open-type="contact" @click="favorclick">
				<view class="text-orange" :class="!favorfill?'cuIcon-favorfill':'cuIcon-favor'">
					<view class="cu-tag badge"></view>
				</view>
				收藏
			</button>
			<view class="bg-orange submit">联系咨询</view>
			<view class="bg-red submit">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSwiper: false,
				favorfill:true,
				id:'',
				imgUrls: [
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4b60b10-5168-11eb-bd01-97bc1429a9ff.jpg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1dcfa70-5168-11eb-bd01-97bc1429a9ff.jpg"
				],
				items: [{
						value: "img",
						name: '静态图',
						checked: true
					},
					{
						value: "swiper",
						name: '轮播图',
						checked: false
					}
				]
			}
		},
		onLoad(e) {
			this.id = e.id || '';
			if(this.imgUrls.length > 1) this.showSwiper = true
		},
		methods: {
			favorclick(){
				this.favorfill = !this.favorfill
			}
		}
	}
</script>

<style scoped>
	image,
	swiper,
	.img-view {
		width: 750rpx;
		width: 100%;
		height: 500rpx;
	}
	
	.page-section-title{
		margin-top: 50rpx;
	}
	.text-title{
		font-weight: bold;
	}
	.padding{
		line-height: 1.8;
	}
</style>
