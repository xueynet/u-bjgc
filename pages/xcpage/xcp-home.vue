<template>
	<view class='flex-direction'>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true"><block slot="backText">返回</block><block slot="content">宣传片</block></cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-card case" :class="isCard?'no-card':''">
				<view class="cu-item shadow" v-for="(item,index) in 5" :key="index" @click="click">
					<view class="image">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="widthFix"></image>
						<view class="cu-tag bg-gradual-green">一小时前</view>
						<view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view>
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
			}
		},
		onLoad(e) {
			
		},
		methods: {
			click(e){
				uni.navigateTo({
				    url: 'xcp-detail?id=1'
				});
			}
		}
	}
</script>

<style>
	
</style>
