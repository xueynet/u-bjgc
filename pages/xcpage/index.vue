<template name="xcsy">
	<view class='flex-direction'>
		<view class="cu-bar bg-gradual-orange search">
			<view class="action" @click="goback">
				<text class="cuIcon-close"></text> 关闭
			</view>
			<view class="content">
				某村
			</view>
			<view class="action">
				<view class="cu-load load-cuIcon" :class="!isLoad?'loading':'over'"></view>
			</view>
		</view>
		<scroll-view scroll-y class="page">
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" @click="smsclick" :data-src="item.route" :data-in="item.badge" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="padding">
				<view class="syitem" v-for="(item,index) in sylm" :key="index">
					<view class="padding solid-bottom">
						{{item.name}}
					</view>
					<view class="padding bg-white padding-bottom-0">
						<view class="grid col-3 grid-square">
							<view class="" v-for="(item,index) in avatar" :key="index" :data-in="index" @click="pclick">
								<view class="bg-img" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
								<view class="lmmz flex-direction">
									<text>名称{{index}}</text>	
									<text class="short">简介{{index}}</text>				
									<view class="flex-col">
										<view class='njg'>998</view>	
										<view class='ojg'>1998</view>		
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="text-center">我是有底线的</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "sy",
		data() {
			return {
				sylm:[			
					{name:'超值抢购'},
					{name:'乡村出游'},
				],
				avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'],
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: true,
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					route:'xcp-home',
					name: '宣传片'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					route:'cp-list',
					name: '招商项目'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					route:'szxc',
					name: '数字乡村'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					route:'news-detail',
					name: '乡村简介'
				}],
				modalName: null,
				gridCol: 4,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				isLoad:false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
				
			};
		},
		onLoad() {
			console.log("success")
		},
		methods: {
			goback(){
				uni.navigateBack({
				    delta: 1
				});
			},
			smsclick(e){
				if(e.currentTarget.dataset.src === "xw"||e.currentTarget.dataset.src === "fl"){
					this.$parent.$parent.PageCur = e.currentTarget.dataset.src
				}else{
					uni.navigateTo({
					    url: e.currentTarget.dataset.src +"?id="+ e.currentTarget.dataset.in
					});
				}
			},
			pclick(e) {
				uni.navigateTo({
				    url: '../product/detail?id='+ e.currentTarget.dataset.in +''
				});
			},
		},
	}
</script>

<style scoped>
	.syitem{
		background: #fff;
		border-radius: 10upx;
		margin-bottom: 20upx;
	}
	.bannertext{
		position: absolute;
		height: 100%;
		width:100%;
		left:0;
		top:0;
		z-index: 99;
		background: rgba(0,0,0,.2);
		color:#fff;
		line-height: 100%;
		text-align: center;
		display: flex;
		align-items: center;
	}.bannertext text{
		margin: 0 auto;
		display: inline-block;
	}
	.swiper swiper-item{
		box-sizing: border-box;
	}.swiper image{
		height: 100%;
	}
	.bg-img{
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.lmmz{
		margin-top: 100%;
		padding-top: 10upx;
		height: auto;
	}
	.lmmz text{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 10upx 0;
	}
	.lmmz text.short{
		font-size: .12upx;
		
	}
	.lmmz .njg{
		font-size: 40upx;
	}
	.grid.col-3.grid-square>view{
		height: auto;
		padding-bottom: unset;
	}
	.grid.col-3.grid-square>view .bg-img{
		padding-bottom: calc(100%);
		height: 0;
	}
	.padding{
		padding: 20upx;
	}
</style>

