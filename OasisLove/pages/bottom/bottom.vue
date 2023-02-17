<template>
	
		<view class="footer">
			<view class="home foot-btn" @tap="toHome">
				<image class="lt" src="../../static/image/liaotian.png"></image>
				<view class="txt">聊天</view>
			</view>
			
			<view class="tunxun foot-btn" @tap="toFriend">
				<image class="lxr" src="../../static/image/tuxun.png"></image>
				<view class="txt">通讯录</view>
				
			</view>
			
			<view class="My foot-btn" @tap="tofaxian">
				<image class="wd" src="../../static/image/my.png"></image>
				<view class="txt">发现</view>
			</view>
			
			<view class="My foot-btn" @tap="touserDetail">
				<image class="wd" src="../../static/image/my.png"></image>
				<view class="txt">我的</view>
			</view>
		</view>
	
</template>

<script>
	export default {
		name:'bottom',
		
		data() {
			return {
				
			};
		},
		onLoad() {
		
		},
		methods:{
			touserDetail(){
				uni.navigateTo({
					url:'../userDetail/userDetail'
				})
			},
			tofaxian(){
				uni.navigateTo({
					url:'../faxian/faxian'
				})
			},
			toHome(){
				uni.navigateTo({
					url:'../home/home'
				})
			},
			toFriend(){
				uni.navigateTo({
					url:'../chooseBusinessCard/chooseBusinessCard'
				})
			},
			
			
		}
	}
</script>

<style lang="scss">
	.footer{
		position: fixed;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 130rpx;
		justify-content: center;
		background-color: #FFFFFF;
		
		
		.foot-btn{
			flex: 1;
			height: 96rpx;
			width: 96rpx;
			
			text-align: center;
			box-sizing: border-box;
			
			.txt{
				font-size: 20rpx;
				// color: #272832;
				color: #8E8E93;
			}
			
			.lt{
				width: 56rpx;
				height: 56rpx;
			}
			.lxr{
				width: 48rpx;
				height: 48rpx;
			}
			.wd{
				width: 40rpx;
				height: 40rpx;
			}
			
		}
		.home{
			padding-top: 6rpx;
			width: 56rpx;
			height: 56rpx;
		}
		.tunxun{
			padding-top: 14rpx;
			width: 96rpx;
			height: 96rpx;
		}
		.My{
			padding-top: 22rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
