<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper circula indicator-dots indicator-color= rgba(255,255,255,0.5) indicator-active-color="#fff" autoplay="">
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
	
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class='text'>公告</text>
            </view>
			<view class="center">
				<swiper vertical="" autoplay="" interval="1500" duration="300" circular="">
					<swiper-item v-for="item in 4">
						<navigator url="/pages/notice/detail">
							占位文字占位文字
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<common-title>
				<template #name>每日推荐
				</template>
				<template #custome>
					<view class="date">
						<uni-icons type="calendar-filled" size="18" color="#28b389"></uni-icons>
						<view class="text">
							<uni-dateformat :date='Date.now()' format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true" >
					<view class="box" v-for="item in 8" @click="goPreview">
						<image src="/common/images/preview2.jpg" mode="aspectFill"></image>
                    </view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #name>专题推荐</template>
				<template #custome>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for = "item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const bannerList = ref([])
	const randomList = ref([])
	const getBanner = async ()=>{
		let res = await uni.request({
			url:"https://tea.qingnian8.com/api/bizhi/homeBanner",
			header:{
				"access-key":"648682"
			}
		})
		if(res.data.errCode ===0){
			bannerList.value = res.data.data
		}
	}
	
	const getDayRandom = async ()=>{
		let res = await uni.request({
			url:"https://tea.qingnian8.com/api/bizhi/randomWall",
			header:{
				"access-key":"648682"
			}
		})
		if(res.data.errCode ===0){
			randomList.value = res.data.data
		}

	}
	const goPreview = ()=>{
		uni.navigateTo({
			url:"/pages/preview/preview"
		})
	}
	getBanner()
	getDayRandom()
	
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper{
				width: 750rpx;
				height: 340rpx;
				&-item{
					width: 100%;
					height: 100%;
					padding:0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
					
				}
			}
		}
		.notice{
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text{
					color:$brand-main-color;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex:1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color:#666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
			
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.select{
			padding-top:50rpx;
			.date{
				color:$brand-main-color;
				align-items: center;
				display: flex;
				.text{
					margin-left:5rpx;
					font-weight: 600;
				}
			}
			.content{
				width: 720px;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						width: 220rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
					.box:last-child{margin-right: 30rpx;}
				}
			}
		}
		.theme{
			padding:50rpx 0;
			.more{
				font-size: 32rpx;
				color:#888
			}
			.content{
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;
				gap:15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}
		
	}
</style>
