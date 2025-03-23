<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image src="/common/images/preview1.jpg" mode="aspectFill" @click="maskChange"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<view class="goBack">
				
			</view>
			<view class="count">
				3/5
			</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box">
					<uni-icons type="info" size="24" color="#28b389" @click="clickInfo"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box">
					<uni-icons type="star-filled" size="24" color="#28b389" @click="clickScore"></uni-icons>
					<view class="text">分数</view>
				</view>
				<view class="box">
					<uni-icons type="download-filled" size="24" color="#28b389"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
			
		</view>
		
		<uni-popup ref="infoPop" type="bottom">
			<view class="infoPop">
				<view class="infoHeader">
					<view class="">
					</view>
					<view class="title">
						壁纸信息
					</view>
					<view class="close">
						<uni-icons type="close" size="18" color="#999" @click="clickInfoClose"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y="true" >
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID:</view>
							<text selectable class="value">18810823860</text>
						</view>
						
						<view class="row">
							<view class="label">分类：</view>
							<text selectable class="value classify">无限宇宙</text>
						</view>
						
						<view class="row">
							<view class="label">发布者：</view>
							<text selectable class="value">Yukin</text>
						</view>
						
						<view class="row">
							<view class="label">评分：</view>
							<view class="value roteBox">
								<uni-rate readonly value="5" touchable="false"/>
								<text class="score">5分</text>
							</view>
						</view>
						
						<view class="row">
							<view class="label">摘要：</view>
							<text selectable class="value">这是一张毫无意义的壁纸，蛮丑的</text>
						</view>
						
						<view class="row">
							<view class="label">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="item in 3">
									美女
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePop" type="center" :is-mask-click = "false">
			<view class="scorePop">
				<view class="infoHeader">
					<view class="">
					</view>
					<view class="title">
						壁纸评分
					</view>
					<view class="close">
						<uni-icons type="close" size="18" color="#999" @click="clickScoreClose"></uni-icons>
					</view>
				</view>	
				<view class="content">
					<uni-rate v-model="userScore" allow-half />
					<text class="text">{{userScore}}分</text>
				</view>
				<view class="footer">
					<button type="default" size="mini" plain :disabled="!userScore" @click="submitScore">确认</button>
				</view>
				</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
    const userScore = ref(0)

	const maskState = ref(true)
	const maskChange = ()=> {
		maskState.value = !maskState.value
	}
	//点击info
	const infoPop = ref(null);
	const clickInfo = ()=>{
		infoPop.value.open()
	}
	//点击关闭info
	const clickInfoClose = ()=>{
		infoPop.value.close()
	}
	//点击评分
	const scorePop = ref(null);
	const clickScore = ()=>{
		scorePop.value.open()
	}
	//点击关闭score
	const clickScoreClose = ()=>{
		scorePop.value.close()
	}
	//确认评分
	const submitScore = ()=>{
		scorePop.value.close();
		console.log("已评分～")
	}
	
</script>

<style lang="scss" scoped>
	.preview{
		width: 100%;
		height: 100vh;
		position: relative;
		swiper{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.mask{
		
		
			&>view{
				left:0;
				right: 0;
				margin: auto;
				position: absolute;
				width: fit-content;
				color: white;
			}
			.goBack{
				
			}
			.count{
				top:10vh;
				font-size: 28rpx;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 40rpx;
				padding: 8rpx 28rpx;
			}
			.time{
				
				font-size: 140rpx;
				top: calc(10vh + 80rpx);
				font-weight: 100;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
				
				
			}
			.date{
				font-size: 34rpx;
				top: calc(10vh + 230rpx);
				text-shadow: 0 2rpx rgba(0, 0, 0, 0.2);
				
			}
			.footer{
				background: rgba(255, 255, 255, 0.8);
				bottom: 10vh;
				width: 40vh;
				text-align: center;
				height: 120rpx;
				border-radius: 120rpx;
				color:#000;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(20rpx);
			}
		}
	    .infoHeader{
	    	display: flex;
	    	justify-content: space-between;
	    	align-items: center;
	    	.title{
	    		color:gray;
	    		font-size: 30rpx;
	    	}
	    	.close{
	    		padding: 6rpx;
	    	}
	    	
	    }
		.infoPop{
			background: white;
			padding: 30rpx ;
			border-radius: 30rpx 30rpx 0 0;
			overflow: hidden;
			
			scroll-view{
				max-height:60vh ;
				.content{
					.row{
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;
						line-height: 1.7em;
						.label{
							color:gray;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}
						.value{
							flex:1;
							width:0;
						}
						.roteBox{
							display: flex;
							align-items: center;
							.score{
								font-size: 26rpx;
								color: gray;
								padding-left: 10rpx;
							}
						}
						.tabs{
							display: flex;
							flex-wrap: wrap;
							.tab{
								border: 1px solid #28b389 ;
								color:#28b389;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0 10rpx 10rpx 0;
								
							}
						}
						.classify{
							color: #28b389;
							font-weight: 600;
						}
					}
				}
			}
		}
		
	    .scorePop{
			background: #fff;
			padding: 30rpx;
			width: 70vw;
			border-radius: 30rpx;
			.content{
				padding: 30rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;
				.text{
					color: #ffca3e;
					padding-left: 10rpx;
					width: 80rpx;
					line-height: 1em;
					text-align: right;
				}
				
			}
			.footer{
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	
	}
	    
</style>
