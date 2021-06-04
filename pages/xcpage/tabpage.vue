<template>
	<view class="pages">
		<xcsy v-if="PageCur=='xcsy'"></xcsy>
		<xccp v-if="PageCur=='xccp'"></xccp>
		<xcxw v-if="PageCur=='xcxw'"></xcxw>	
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="xcsy">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/sy' + [PageCur=='xcsy'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='xcsy'?'text-jh':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="xccp">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/product' + [PageCur == 'xccp'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='xccp'?'text-jh':'text-gray'">产品</view>
			</view>
			<view class="action" @click="NavChange" data-cur="xcxw">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/xw' + [PageCur == 'xcxw'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='xcxw'?'text-jh':'text-gray'">新闻</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'xcsy'
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
