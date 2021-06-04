<template>
	<view class='flex-direction'>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true"><block slot="backText">返回</block><block slot="content">数字乡村平台</block></cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-card case" :class="isCard?'no-card':''">
				<view class="cu-item shadow" v-for="(item,index) in uchart" :key="index" @click="click">
					<view class="image">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="widthFix"></image>
						<view class="cu-tag bg-gradual-green">一小时前</view>
						<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.name}}</text></view>
					</view>
					<view class="flex-sub">
						<view class="text-gray text-sm text-left padding">
							<text class="cuIcon-usefull margin-lr-xs"></text>来源
						</view>
						<view class="text-gray text-sm text-right padding">
							<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
							<text class="cuIcon-messagefill margin-lr-xs"></text> 30
						</view>
					</view>
					
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard:false,
				uchart:[
					{name:'农产品数据'},
					{name:'电商数据分析'},
					{name:'产业经济数据'},
				]
			}
		},
		onLoad(e) {
			
		},
		methods: {
			click(e){
				uni.navigateTo({
				    url: 'szxc-detail?id=1'
				});
			}
		}
	}
</script>

<style>
	
</style>
