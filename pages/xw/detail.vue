<template>
	<view class='flex-direction'>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true"><block slot="backText">返回</block><block slot="content">id:{{id}}</block></cu-custom>
		<scroll-view scroll-y class="page">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue">
						DCloud完成B2轮融资，uni-app震撼发布!
					</text>
				</view>
			</view>
			<view class="padding bg-white">
				<view class="text-cut padding bg-grey radius">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
			</view>
			<view class="padding bg-white">
				<view class="text-left zw">我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵我于杀戮之中绽放 ,亦如黎明中的花朵</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				id: ''
			}
		},
		onLoad(e) {
			this.id = e.id || '';
		}
	}
</script>
<style scoped>
	.cuIcon-title{
		font-size: 30upx;
		line-height: 1.6;
		color: #333;
	}
	.zw{
		line-height: 1.8;
	}
	.action{
		padding: 20upx 0;
	}
	.cu-bar .action:first-child>uni-text[class*="cuIcon-"]{
		margin: 0 -.3em;
	}
</style>
