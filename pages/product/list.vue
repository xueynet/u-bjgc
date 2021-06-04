<template>
	<view class='flex-direction'>
		<cu-custom bgColor="bg-gradual-orange" :isBack="true"><block slot="backText">返回</block><block slot="content">id:{{id}}</block></cu-custom>
		<scroll-view scroll-y class="page">
			<view class="grid col-2 grid-square padding ">
				<view class="shadow-blur bg-white " v-for="(item,index) in avatar" :key="index" :data-in="index" @click="click">
					<view class="bg-img" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
					<view class="lmmz flex-direction padding ">
						<text>名称{{index}}</text>	
						<text class="short">简介{{index}}</text>				
						<view class="flex-col">
							<view class='njg'>998</view>	
							<view class='ojg'>1998</view>		
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
				id:'',
				avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'],
			}
		},
		onLoad(e) {
			this.id = e.id || '';
		},
		methods: {
			click(e) {
				uni.navigateTo({
				    url: '../product/detail?id='+ e.currentTarget.dataset.in +''
				});
			},
		}
	}
</script>

<style scoped>
	.grid.col-2.grid-square>view{
		height: auto;
		padding-bottom: unset;
	}
	.lmmz{
		height: auto;
	}
	.lmmz .njg{
		font-size: 40upx;
	}.lmmz text{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 10upx 0;
	}
	.lmmz text.short{
		font-size: 12px;
		
	}
	.grid.col-2.grid-square>view .bg-img{
		padding-bottom: calc(100%);
		height: 0;
	}.padding{
		padding: 20upx;
	}
</style>
