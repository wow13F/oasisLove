<template>
	<view class="content">
		<view class="tab-bar" style="z-index: 99; opacity: 0.2;" >
			
			<view class="tab-left" @tap="toback()" >
				<image  class="back" src="../../static/image/back.png"></image>
			</view>
			
			
			<view class="tab-right">
				
				<view class="more-img">
					<image style="width:58rpx;height: 14rpx;" src="../../static/image/more.png"></image>
				</view>
			</view>
		</view>
	
		<view class="bg">
			<view class="bg-bai" :animation="animationData4">
				
			</view>
			<image :src="userinfo.user_img" mode="aspectFill" class="bg-img"></image>
		</view>
		
		<view class="main">
			<view class="user-header">
				<view class="sex" :style="{background:sexBg}" :animation="animationData3">
					<image :src="gender" mode="" ></image>
				</view>
				<image :src="userinfo.user_img" mode="aspectFill" class="user-img" :animation="animationData2"></image>
			</view>
			
			<view class="user-info">
				<view class="name">{{userinfo.username}}</view>
				<view class="nickname" >{{'昵称: '+userinfo.nicName}}</view>
				<view class="introudes">{{userinfo.autograph}}</view>
			</view>
		</view>
		
		<view class="bottom-bar">
			<view class="bottom-btn" @tap="addFriendAnimation()">加好友</view>
			
		</view>
		
		 <!-- 点击了 加好友  按钮后显示的内容 -->
		<view class="add-msg" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation="animationData">
			<view class="name">{{userinfo.username}}</view>
			<textarea v-model="data"  maxlength="120" class="message"></textarea>
		</view>
		
		<view class="add-bt" :animation="animationData">
			<view class="close" @tap="addFriendAnimation">取消</view>
			<view class="send" @tap="joinfriend()">发送</view>
		</view>
	</view>
</template>

<script>
	import { getUserInfo,addfriend } from '../../util/api.js'
	export default{
		data(){
			return{
				sexBg:'rgba(255,93,91,1)',
				myname:'张三',
				addHeight:'',
				animationData:{},
				animationData2:{},
				animationData3:{},
				animationData4:{},
				isAdd:false,
				userid:0,
				userinfo:'',
				gender:'',
				data:'',	//添加好友留言
				requestInfo:{},	//好友请求信息
			}
		},
		onLoad(option) {
			//console.log(option.userid)
			this.userid=option.userid
			this.data=' 请求添加好友~'
		},
		onReady() {
			this.getheight(),
			this.getinfo()
		},
		methods:{
			toback(){
				console.log(111)
				uni.navigateBack({
					delta:1
				})
			},
			getheight(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.bg').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data.top);
				  this.addHeight=data.height-186
				}).exec();
			},
			
			addFriendAnimation(){
				this.isAdd=!this.isAdd
				   var animation = uni.createAnimation({
				      duration: 300,
				        timingFunction: 'ease',
				    })
					var animation2 = uni.createAnimation({
					   duration: 300,
					     timingFunction: 'ease',
					 })
					 var animation3 = uni.createAnimation({
					    duration: 300,
					      timingFunction: 'ease',
					  })
					  var animation4 = uni.createAnimation({
					     duration: 300,
					       timingFunction: 'ease',
					   })
					
				if(this.isAdd){
					animation.bottom(0).step()
					animation2.width(120).height(120).step()
					animation3.opacity(0).step()
					animation4.backgroundColor('rgba(255,228,49,0.60)').step()
				}else{
					animation.bottom(-this.addHeight).step()
					animation2.width().height().step()
					animation3.opacity(1).step()
					animation4.backgroundColor('rgba(255,228,49,0)').step()
				}
				    
				
				    
				
				    this.animationData = animation.export()
					this.animationData2 = animation2.export()
					this.animationData3 = animation3.export()
					this.animationData4 = animation4.export()
			},
			
			getinfo(){
				getUserInfo(this.userid).then(res=>{
					console.log(res)
					this.userinfo=res.data.result[0]
					if(this.userinfo.gender=='男' || this.userinfo.gender=='偏男'){
						this.gender='../../static/image/nan.png'
					}
					else if(this.userinfo.gender=='女' || this.userinfo.gender=='偏女'){
						this.gender='../../static/image/nv.png'
					}
					else{
						this.gender='../../static/image/unnown.png'
					}
				})
			},
			joinfriend(){
				let str=this.data
				if(this.data==''){
					str='请求添加好友~'
				}
				addfriend(this.userid,str).then((res)=>{
					
					
					 if(res.data.type==0){
						 uni.showModal({
						 	title: '提示',
						 	content: '请不要重复申请!',
						 	success: (res) => {
						 		if (res.confirm) {
						 
						 			uni.navigateBack({
						 				delta:1
						 			})
						 
						 		}
						 	}
						 });
					 }
					this.requestInfo=res.data.request
					this.socket.emit('addfriend', {reqid:this.userid,message:res.data.message,sendid:this.requestInfo[0].sendid})
					
					uni.showModal({
						title: '提示',
						content: '好友申请发送成功!',
						success: (res) => {
							if (res.confirm) {
					
								uni.navigateBack({
									delta:1
								})
					
							}
						}
					});
					
				})
				
			},
		}
	}
	
	
	
	

</script>

<style lang="scss">
	// @import "../../commons/css/myhead/myhead.scss";
	.tab-bar{
		border-bottom: 1px solid $uni-border-color;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		padding-top: var(--status-bar-height);
		background: rgba(255,255,255,1);
		
		.tab-left{
			float: left;
			position: absolute;
			margin-left: 20rpx;
			transform: translateY(-50%);
			top: 50%;
			image{
				width: 40rpx;
				height: 40rpx;
				border-radius: 16rpx;
			}
		}
		.tab-right{
			width:140rpx ;
			position: absolute;
			right: 0;
			transform: translateY(-50%);
			top: 50%;
		}
	}
	.bg{
		position: fixed;
		 // z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.bg-bai{
			width: 100%;
			height: 100%;
			//background-color: red;
			z-index: 22;
			
		}
		.bg-img{
			width: 110%;
			height: 110%;
			position: absolute;
			top: -10rpx;
			left: -10rpx;
			// z-index: 10;
			filter: blur(16px);
			opacity: 0.4;
		}
	}
	.main{
		text-align: center;
		padding-top: 148rpx;
		.user-header{
			width: 412rpx;
			height: 412rpx;
			position: relative;
			margin: 0 auto;
			
			
			.sex{
				position: absolute;
				bottom: 22rpx;
				right: 22rpx;
				width: 64rpx;
				height: 64rpx;
				
				border-radius: $uni-border-radius-circle;
				image{
					width: 32rpx;
					height: 32rpx;
					padding: 16rpx;
				}
				z-index: 2;
				
			}
			.user-img{
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(255,255,255,1);
				z-index: 1;
				box-shadow: 0px 36rpx 40rpx 0px rgba(39,40,50,0.1);
			}
		}
		.user-info{
			padding-top: 42rpx;
			
			.name{
				font-size: 52rpx;
				color: $uni-text-color;
				line-height: 74rpx;
				
			}
			
			.nickname{
				font-size: $uni-font-size-base;
				line-height: 40rpx;
				color: $uni-text-color;
				
			}
			
			.introudes{
				width: 552rpx;
				padding-top: 20rpx;
				
				font-size: $uni-font-size-base;
				color: $uni-text-color;
				margin: 0 auto;
				line-height: 48rpx;
				font-weight: 200;
			}
		}
		
		z-index: 12;
	}
	
	.bottom-bar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		padding:12rpx $uni-spacing-col-base;
		box-sizing: border-box;
		.bottom-btn{
			
			height: 80rpx;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
			text-align: center;
			color: $uni-text-color;
		}
	}


.add-msg{
	width: 100%;
	position: fixed;
	
	
	box-sizing: border-box;
	padding: 0 56rpx;
	background:rgba(255,255,255,1);
	.name{
		margin-top: 188rpx;
		padding-top: 168rpx 0 40rpx;
		font-size: 52rpx;
		color: $uni-text-color;
		line-height: 74rpx;
	}
	.message{
		width: 100%;
		box-sizing: border-box;
		padding: 18rpx 16rpx;
		height: 420rpx;
		background: $uni-bg-color-grey;
		border-radius: $uni-border-radius-base;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		line-height: 44rpx;
	}
}

.add-bt{
	position: fixed;
	bottom: -104rpx;
	width: 100%;
	height: 104rpx;
	padding:12rpx $uni-spacing-col-base;
	box-sizing: border-box;
	z-index: 4;
	height: 104rpx;
	display: flex;
	.close{
		// flex: auto;
		width: 172rpx;
		height: 80rpx;
		line-height: 80rpx;
		
		
		font-size: $uni-font-size-lg;
		background: $uni-bg-color-hover;
		border-radius: $uni-border-radius-sm;
		text-align: center;
		color: $uni-text-color;
	}
	.send{
		flex: auto;
		width: 684rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-left: $uni-spacing-col-base;
		font-size: $uni-font-size-lg;
		background: $uni-color-primary;
		border-radius: $uni-border-radius-sm;
		text-align: center;
		color: $uni-text-color;
	}
}
</style>
