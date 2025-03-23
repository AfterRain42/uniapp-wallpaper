<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
			<view class="avatar">
				<image src="/static/images/logo.jpg" mode="aspectFill"></image>
			</view>
			<view class="nickname">
				可爱多
			</view>
			<view class="address">
				来自北京
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">22</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					
				</view>
				
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text">22</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					<!-- #ifdef MP -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<button @click="phoneCall">拨打电话</button>
					<!-- #endif -->
				</view>
				<view class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">22</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
	const phoneCall = ()=>{
		uni.makePhoneCall({
			phoneNumber:'18810823860'
		})
	}
</script>

<style lang="scss" scoped>
	.userLayout{
		.userInfo{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 50rpx 0;
			.avatar{
				width: 160rpx;
				height:160rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.nickname{
				font-size: 44rpx;
				color:#333;
				padding:20rpx 0 5rpx;
			}
			.address{
				font-size: 28rpx;
				color: #aaa;
			}
		}
		.section{
			width: 690rpx;
			margin:50rpx auto;
			border: 1px solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
			.list{
				.row{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					height: 100rpx;
					border-bottom: 1px solid #eee;
					position: relative;
					&:last-child{border-bottom: 0}
					.left{
						display: flex;
						align-items: center;
						.text{
							padding-left: 20rpx;
							color: #666;
						}
					}
					.right{
						display: flex;
						align-items: center;
						.text{
							font-size: 28rpx;
							color:#aaa
							
						}
					}
					button{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100rpx;
						opacity: 0;
					}
				}
			}
		}
	}
	       
</style>
