<template>
	<view>
		<view class="tab-bar">
			<view class="tab-left" @tap="tologin">
				<image class="back" src="../../static/image/back.png"></image>
			</view>
		
		
		</view>
		<view class="main">
			<view class="steps"><uni-steps :options="[{title: '身份验证'}, {title: '密码重置'}, {title: '重置完成'}]" :active="active"></uni-steps></view>
			
			<view class="content">
				<view class="step-1">
					<view class="email" v-if="active==0">
						<input v-model.lazy="email" type="text" placeholder="请输入邮箱">
						
					</view>
					<view class="yz" v-if="active==0">
						<view class="ipt">
							<input v-model.lazy="numb" type="text" placeholder="请输入验证码">
							<view class="txt" @tap="getnumber"><text v-if="time!=60">({{time}})</text>{{text}}</view>
						</view>
						
						
					</view>
				</view>
				
				
				
				
				<view class="step-1 second" v-if="active==1">
					<input class="inp1" v-model="pwd1" placeholder="输入新密码" placeholder-style="padding-left:20rpx" />
					<input class="inp2" v-model="pwd2" placeholder="再次确认密码" placeholder-style="padding-left:20rpx" />
				</view>
			</view>
			
			<view class="btns">
				<view class="next" @tap="next()">下一步</view>
				<view class="reset" @tap="repance">重置</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {sendnumber,respPwd} from '../../util/api.js'
	import uni_steps from '../../components/uni-steps/components/uni-steps/uni-steps.vue'
	export default {
		data() {
			return {
				time:60,
				text:'获取验证码',
				active:0,
				email:'',
				yanzhengma:'',
				numb:'',
				pwd1:'',
				pwd2:'',
			}
		},
		methods: {
				
			next(){
				if(this.active<=2){
					let number = uni.getStorageSync('N')
					if(this.numb==number && this.active==0 ){
						
						console.log(this.numb)
						this.active+=1;
					}
					if(this.active==1){
						if(this.pwd1 === this.pwd2 && this.pwd1.length>=6 && this.pwd1.length<=12){
							this.active+=1;
							console.log(typeof this.pwd1)
							respPwd(this.pwd1,this.email).then((res)=>{
								console.log(res)
									
								if(res.state==1){
									uni.setStorageSync('N', "");
								}
							})
						}
					}
					
					
				}
			},
			repance(){
				this.active=0;
			},
			getnumber(){
				if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email))){
						this.email=''
						
						uni.showModal({
						    title: '提示',
						    content: '请输入正确的邮箱!',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            // console.log('用户点击确定');
						        }
						    }
						});
					
				}else{
					if(this.time==60){
						sendnumber(this.email,'亲爱的用户:').then((res)=>{
							console.log(res)
							// this.yanzhengma=res.data.request
							uni.setStorageSync('N', res.data.request);
							
							
						})
					let t=	setInterval(()=>{
						
							this.time-=1;
							if(this.time==0){
								clearInterval(t)
								this.time=60
							}
						},1000)
					}
					
				}
			
		},
		tologin(){
			uni.navigateBack({
				delta:1
			})
		}
	},
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";
	.tab-bar {
	
		background: rgba(244, 244, 244, 0.96);
		border-bottom: 1px solid $uni-border-color;
	
		.tab-left {
			width: 40rpx;
			height: 40rpx;
	
			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	
		.group-img {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
	
			image {
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
			}
		}
		
	}
	
	
	.main{
		.steps{
			box-sizing: border-box;
			width: 100%;
			height: 400rpx;
			border-bottom: 1px solid #555555;
			padding-top: 200rpx;
			margin-top: 88rpx;
			
		}
		.content{
			width: 100%;
			margin-top: 20rpx;
			.step-1{
				width: 100%;
				.email{
					width: 80%;
					height: 120rpx;
					margin-left: 10%;
					
					input{
						width: 100%;
						height: 120rpx;
						line-height: 120rpx;
						border-radius: 15rpx;
						background-color: #d6d6d6;
						
					}
				}
				.yz{
					
					width: 80%;
					height: 120rpx;
					margin-left: 10%;
					margin-top: 40rpx;
					.ipt{
						display: flex;
						align-items: center;
						background-color: #d6d6d6;
						border-radius: 15rpx;
						input{
							flex: 1;
							width: 100%;
							height: 120rpx;
							line-height: 120rpx;
							border-radius: 15rpx;
							
						}
						.txt{
							flex: 1;
							height: 80rpx;
							line-height: 80rpx;
							text-align: center;
							background-color: #FFFFFF;
							border-radius: 15rpx;
							color: $uni-text-color-grey;
						}
					}
					
					
				}
			}
			.second{
				width: 100%;
				
			
				margin: 0 auto;
				.inp1{
					
				}
				.inp2,.inp1{
					width: 60%;
					margin: 0 auto;
					margin-top: 20rpx;
					height: 80rpx;
					line-height: 80rpx;
					border: 1rpx solid#000;
					border-radius: 20rpx;
				}
			}
		}
		
		.btns{
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100rpx;
			margin-top: 300rpx;
			.next{
				
				width: 180rpx;
				height: 80rpx;
				line-height: 80rpx;
				background-color: #3399FF;
				color: #FFFFFF;
				text-align: center;
				border-radius: 10rpx;
				
			}
			.reset{
				
				width: 180rpx;
				height: 80rpx;
				line-height: 80rpx;
				background-color: #FFFFFF;
				text-align: center;
				border-radius: 10rpx;
			}
		}
	}
</style>
