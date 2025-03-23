<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:statusBarHeight + 'px' }"></view>
			<view class="titleBar" :style="{height:titleBarHeight + 'px'}">
				<view class="title">标题</view>
				<view class="search">
					<uni-icons type="search" size="20" class="icon"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		
		<view class="fill" :style="{height:statusBarHeight + titleBarHeight + 'px'}">
			
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let system  = uni.getSystemInfoSync()
	let statusBarHeight = ref(system.statusBarHeight)
	let {top,height} = uni.getMenuButtonBoundingClientRect()
	let titleBarHeight = ref((top - statusBarHeight.value) * 2 + height)
</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom,transparent,#fff 400rpx),
		linear-gradient(to right,#a8e6cf,#ffd3b6);
		.statusBar{
			
			
		}
		.titleBar{
			align-items: center;
			padding:0 30rpx;
		
			display: flex;
			.title{
				font-size: 22px;
				color: black;
				font-size: 700;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color:#999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.text{
					padding-left: 10rpx;
				}
				.icon{
					margin-left: 5rpx;
				}
			}
		}
		
	}
	.fill{
		
	}
}
</style>