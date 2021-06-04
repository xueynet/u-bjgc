<template>
	<view class='flex-direction'>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true"><block slot="backText">返回</block><block slot="content">id:{{id}}</block></cu-custom>
		<scroll-view scroll-y class="page bg-white">
			<view class="img-view">
				<video src=""></video>
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-orange text-title"></text>视频名称
				</view>
			</view>
			<view class="flex-sub bg-white solid-bottom">
				<view class="text-gray text-sm text-left padding">
					<text class="cuIcon-usefull margin-lr-xs"></text>来源
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
					<text class="cuIcon-messagefill margin-lr-xs"></text> 30
				</view>
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-newshot text-orange"></text>视频简介
				</view>
			</view>
			<view class="padding bg-white solid-bottom">
				在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。
				在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:''
			}
		},
		onLoad(e) {
			this.id = e.id || '';
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	video,
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
