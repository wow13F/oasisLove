<template>
	<view class="content">
		<view class="pages">
			<view class="yds">




				<swiper class="swiper" indicator-dots="true" >
					<swiper-item>
						<image src="../../static/img/y1.jpg" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/img/y2.jpg" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/img/y3.jpg" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						
						<view class="next">
							<view class="txt" @tap="nx">
								开始探索
							</view>
							<!-- <image src="../../static/img/y4.jpg" mode="widthFix"></image> -->
						</view>
							
						
					</swiper-item>
				</swiper>
			</view>

			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			nx(){
				uni.redirectTo({
				    url: '../login/login'
				});
			}
		}
	}
</script>

<style lang="scss">
	.pages {
		background: $uni-color-primary;
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;

		.yds {
			// width: 1000rpx;
			height: 100vh;

			image {
				// float: left;
				width: 750rpx;
				height: 100%;
			}

			swiper {
				width: 750rpx;
				height: 100%;
			}
			
			.next{
				width: 750rpx;
				height: 100%;
				text-align: center;	
				background: url(../../static/img/y4.jpg);
				background-size: 100% 100%;
				background-position: 0 0;
				background-repeat: no-repeat;
				.txt{
					position: absolute;
					left: 50%;
					bottom: 20%;
					height: 88rpx;
					width: 80%;
					background: $uni-color-primary;
					border-radius: 44rpx;
					line-height: 88rpx;
					transform: translateX(-50%);
					color: $uni-text-color;
				}		
						
					
			}
		}

		
	}
</style>
