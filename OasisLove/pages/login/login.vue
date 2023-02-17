<template>
	<view class="content">
		<view class="tab-bar">
            <view class="tab-right" @tap="toreguser">
				<view class="text">
					<text >注册</text>
				</view>
				
			</view>
		</view>
		
		
		<view class="logo">
			<image src="../../static/img/logo.png" mode=""></image>
		</view>
		
		<view class="main">
			<view class="title">登录</view>
			<view class="hy">您好，欢迎来到 绿洲之恋!</view>
			<view class="inputs">
				<input type="text" v-model="username"  name="" id="" placeholder="用户名/邮箱" class="user" placeholder-style="color:#aaa;font-weight:400;">
				<input type="text" v-model="password" name="" id="" placeholder="密码" class="pwd" placeholder-style="color:#aaa;font-weight:400;">
			</view>
			<view v-show="isShow" class="tips">{{errMessage}}</view>
		</view>
		<view class="replacepwd" @tap="replacepwd"><text>忘记密码?</text></view>
		<view class="submit" @tap="submit">登录</view>
	</view>
</template>

<script>
	import {login} from '../../util/api.js'
	import {index} from '../../util/api.js'
	export default {
		data() {
			return {
				username:'',
				password:'',
				isShow:false,
				errMessage:'输入用户名或密码错误!'
			}
		},
		methods: {
			toreguser(){
				uni.navigateTo({
					url:'../reguser/reguser'
				})
			},
			
			submit(){
				if(this.username && this.password){
					// 调用后台接口判断用户名密码是否正确
					if(this.password.length>=6 && this.password.length<=12){
						uni.showLoading({
						    title: '登录中'
						});
						
						setTimeout(function () {
						    uni.hideLoading();
						}, 2000);
						login(this.username,this.password).then((res)=>{
							
							if(res.data.status==1){
								if(res.data.isLogin){
									console.log(res)
									uni.setStorageSync('token', res.data.token);
									uni.setStorageSync('user_img', res.data.user_img);
									uni.setStorageSync('username', res.data.username);
									uni.setStorageSync('bs', res.data.jmh);
									this.isShow=false
									uni.redirectTo({
										url:'../home/home'
									})
								}else{
									this.errMessage='输入用户名或密码错误!'
									this.isShow=true
								}
							}
							else{
								uni.showToast({
								    title: '用户名或密码错误!',
								    duration: 2000,
									icon:'error'
								});
								
							}
						})
					}else{
						this.errMessage='密码必须是6到12位之间'
						this.isShow=true
					}
					
				}
			},
			replacepwd(){
				uni.navigateTo({
					url:'../wangjipwd/wangjipwd'
				})
			},
		}
	}
</script>

<style lang="scss">
	.content {
	
		padding-top: var(--status-bar-height);
		
	}
	.tab-bar{
		z-index: 9;
		border-bottom: 1px solid $uni-border-color;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		padding-top: var(--status-bar-height);
		background-color: $uni-bg-color;
		
		
		.tab-right{
			float: right;
			// position: absolute;
			
			// transform: translateY(-50%);
			// top: 50%;
			padding-right: 32rpx;
			
			.text{
				display: inline-block;
				
				font-size: $uni-font-size-lg;
				font-weight: 500;
				line-height: 88rpx;
				color: $uni-text-color;
			}
			
			
		}
		
	}
	
	.logo{
		text-align: center;
		
		image{
			padding-top: 256rpx;
			width: 300rpx;
			height: 300rpx;
			margin: 0 auto;
		}
		
		 
	}
	.main{
		padding: 54rpx $uni-spacing-row-lg 60rpx;
		
		.title{
			font-size: 46rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
		}
		.hy{
			font-size: 30rpx;
			color: $uni-text-color-grey;
			line-height: 56rpx;
		}
		.inputs{
			padding-top: 8rpx;
			input{
				padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
		}
		.tips{
			font-size: $uni-font-size-lg;
			 float: left;
			color: $uni-color-warning;
			line-height: 56rpx;
			
		}
	}
	.replacepwd{
		display: flex;
		width: 100%;
		height: 100rpx;
		font-size: 28rpx;
		text-align: right;
		color: $uni-text-color-grey;
		text{
			flex: 1;
			margin-right: $uni-spacing-row-lg;
		}
		
	}
	.submit{
		width: 520rpx;
		height: 96rpx;
		background:$uni-color-primary;
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
		border-radius: 48rpx;
		margin: 0 auto;
		
		
		font-size:$uni-font-size-lg;
		color: $uni-text-color;
		letter-spacing: 0;
		font-weight: 500;
		line-height: 96rpx;
		text-align: center;
	}
</style>
