<template>
	<view class="pages">
		<sy v-if="PageCur=='sy'"></sy>
		<fl v-if="PageCur=='fl'"></fl>
		<product v-if="PageCur=='product'"></product>	
		<xw v-if="PageCur=='xw'"></xw>		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="sy">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/sy' + [PageCur=='sy'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='sy'?'text-jh':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="fl">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/fl' + [PageCur == 'fl'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='fl'?'text-jh':'text-gray'">子站</view>
			</view>
			<view class="action" @click="NavChange" data-cur="product">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/product' + [PageCur == 'product'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='product'?'text-jh':'text-gray'">产品</view>
			</view>
			<view class="action" @click="NavChange" data-cur="xw">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/xw' + [PageCur == 'xw'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='xw'?'text-jh':'text-gray'">新闻</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'sy'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
.text-jh{
	color:#ff5c00;
}
</style>
