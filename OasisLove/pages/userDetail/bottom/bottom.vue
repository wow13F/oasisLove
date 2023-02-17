<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:bottom,
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
<template>
	
		<view class="footer">
			<view class="home foot-btn" @tap="toHome">
				<image class="lt" src="../../static/image/liaotian.png"></image>
				<view class="txt">聊天</view>
			</view>
			
			<view class="tunxun foot-btn" @tap="toContact">
				<image class="lxr" src="../../static/image/tuxun.png"></image>
				<view class="txt">联系人</view>
				
			</view>
			
			<view class="faxian foot-btn" @tap="toFaXian">
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
		methods:{
			touserDetail(){
				uni.navigateTo({
					url:'../userDetail/userDetail'
				})
			},
			toContact(){
				
				uni.navigateTo({
					url: '../contact/contact'
				})
			},
			toHome(){
				uni.navigateTo({
					url: '../home/home'
				})
			},
			toFaXian(){
				
				uni.navigateTo({
					url: '../faxian/faxian'
				})
			}
		}
	}
</script>

<style lang="scss">
	.footer{
		background-color: white;
		
		position: fixed;
		bottom: 2%;
		display: flex;
		width: 100%;
		height: 165rpx;
		justify-content: center;
		
		
		
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
		.faxian{
			padding-top: 24rpx;
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
/hvf