<template>
	<view class="content">
		<view class="tab-bar">
            <view class="tab-left" @tap="tologin"><image class="back" src="../../static/image/back.png"></image></view>
			
		</view>
		
		
		<view class="logo">
			<image src="../../static/image/hot.png" mode=""></image>
		</view>
		
		<view class="main">
			<view class="title">注册</view>
			
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" v-model="username" @input="isUser" placeholder="用户名" class="user" placeholder-style="color:#aaa;font-weight:400;">
					<view class="employ" v-show="employU">已占用</view>
					<image src="../../static/image/duigou.png" class="ok" v-show="isU"></image>
                </view>
				
				<view class="inputs-div">
					<input type="text" name="" id="" placeholder="邮箱" class="user" placeholder-style="color:#aaa;font-weight:400;" v-model="emailValue" @input="isEmail">
					<view class="employ" v-show="employE">已占用</view>
					<view class="invalid" v-show="invalid">无效的邮箱</view>
					<image src="../../static/image/duigou.png" class="ok" v-show="isE&&!invalid"></image>
				</view>
				
				<view class="yanzheng">
					<input class="iput" v-model="datas" placeholder="请输入验证码" type="number" />
					<view class="btn" @tap="send" :class="{btnY:isE&&!invalid && issend}">发送验证码{{time}}</view>
				</view>
				
				<view class="inputs-div">
					<input :type="type" name="" id="" placeholder="请输入6~12位密码" class="pwd" placeholder-style="color:#aaa;font-weight:400;" @input="isPassword">
					<image :src="lookUrl" class="look" @tap="looks(look)"></image>
					
				</view>
			</view>
			
		</view>
		<view :class="[{submit:isok},{submit1:!isok}]" @tap="reguser">注册</view>
	</view>
</template>

<script>
	import {reguser,isUser,sendnumber} from '../../util/api.js'
	export default {
		data() {
			return {
				type:'password',
				isU:false,   // 用户名是否被占用(对勾)
				isE:false,   // 邮箱是否占用 (对勾)
				isP:false,
				look:false,  // 密码是否可以查看
				invalid:false  ,// 邮箱是否合法
				employU:false ,// 用户名是否被占用 (文字)
				employE:false ,// 邮箱是否被占用(文字)
				lookUrl:'../../static/image/biyan.png' ,
				emailValue:'', // 邮箱
				isok:false,
				username:'',  //用户名
				pwd:''  ,//密码
				yanzhengma:'',
				issend:true,
				datas:'',
				time:'',	//倒计时
			}
		},
		methods: {
			looks(look){
				
				if(!look){
					this.lookUrl='../../static/image/look.png'
					this.type="text"
					this.look=!look
				}else{
					this.type="password"
					this.look=!look
					this.lookUrl='../../static/image/biyan.png'
				}
					
			},
			// 验证邮箱
			isEmail(){
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(this.emailValue){
					if(reg.test(this.emailValue)){
						this.isE=true
						this.invalid=false
					}else{
						
						this.invalid=true
					}
				}
				if(this.isE && this.isU && this.isP){
					
					this.isok=true
				}
				
			},
			// 验证用户名
			isUser(){
				// 调用后台接口判断用户名是否被占用
				if(this.username.length>=1){
					
					isUser(this.username).then((res)=>{
						if(res.data.isu=='yes'){
							this.isU=true
							this.employU=false
						}
						else if(res.data.isu=='no'){
							this.isU=false
							this.employU=true
							}
					})
				}
				if(this.isE && this.isU && this.isP){
					
					this.isok=true
				}
			},
			// 验证密码
			isPassword(e){
				this.pwd=e.detail.value
				
				
				if(this.pwd.length>=6 && this.pwd.length<=12){
					
					this.isP=true
				}
				if(this.isE && this.isU && this.isP){
					
					this.isok=true
				}
			},	
			reguser(){
				// http://127.0.0.1:3007/api/reguser
				// 注册用户
				if(this.isE && this.isU && this.isP && this.datas.length>0){
                    this.isok=true
						
					if(this.datas!=this.yanzhengma){
						uni.showModal({
						    title: '',
						    content: '验证码错误',
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
					else{
						reguser(this.username,this.pwd,this.emailValue).then((res)=>{
							if(res.data.status==1){
								if(res.data.isreguser){
									uni.setStorageSync('token', res.data.token);
									
									uni.redirectTo({
										url:'../home/home'
									})
								}else{
									console.log('注册失败')
								}
							}
						})
					}
				}
				
			},
			send(){
				if(this.isE&&!this.invalid && this.issend){
					console.log('send')
					this.issend=false
					sendnumber(this.emailValue,'亲爱的用户:').then((res)=>{
						console.log(res)
						this.time=60
						let t=setInterval(()=>{
							this.time=this.time-1
							if(this.time==0){
								this.time=''
								clearInterval(t)
								this.issend=true
								this.yanzhengma=''
							}
						},1000)
						this.yanzhengma=res.data.request
					})
				}
			},
			 tologin(){
				uni.navigateBack({
					delta:1
				})
			}
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
		
		
		.tab-left{
			float: left;
			width: 88rpx;
			height: 88rpx;
			padding-left: 32rpx;
			
			.text{
				display: inline-block;
				
				font-size: $uni-font-size-lg;
				font-weight: 500;
				line-height: 88rpx;
				color: $uni-text-color;
			}
			.back{
				margin-top: 21rpx;
				width: 40rpx;
				height: 40rpx;
			}
			
		}
		
	}
	
	.logo{
		text-align: center;
		
		image{
			padding-top: 256rpx;
			width: 194rpx;
			height: 92rpx;
			margin: 0 auto;
		}
		
		 
	}
	.main{
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		
		.title{
			font-size: 46rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
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
				
			}
			
			.inputs-div{
				position: relative;
				border-bottom: 1px solid $uni-border-color;
			}
			
			
			.employ,.invalid{
				position: absolute;
				right: 0;
				top: 40rpx;
				font-size: $uni-font-size-base;
				font-weight: 500;
				color: $uni-color-warning;
				line-height: 88rpx;
				
			}
			.ok{
				width: 38rpx;
				height: 30rpx;
				position: absolute;
				top: 76rpx;
				right: 0;
			}
			
			.look,.biyan{
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				top: 76rpx;
				right: 0;
			}
			
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
	.submit1{
		width: 520rpx;
		height: 96rpx;
		background:rgba(39,40,50,0.2);
		
		border-radius: 48rpx;
		margin: 0 auto;
		
		
		font-size:$uni-font-size-lg;
		color: $uni-text-color-inverse;
		letter-spacing: 0;
		font-weight: 500;
		line-height: 96rpx;
		text-align: center;
	}
	
	.yanzheng{
		display: flex;
		width: 100%;
		height: 130rpx;
		border-bottom: 1px solid $uni-border-color;
		align-items: center;
		.iput{
			flex: 2;
			border-bottom: 1px solid rgba(255,255,255,0);
		}
		.btn{
			flex: 1;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			border-radius: 22rpx;
			
			background: rgba(39, 40, 50, 0.2);
			color: #FFFFFF;
			font-size: 32rpx;
			
		}
		.btnY{
			background-color: #ffe431;
			color: #273132;
		}
	}
</style>
