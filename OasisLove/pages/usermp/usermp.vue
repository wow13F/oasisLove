<template>
	<view class="content">
		<view class="tab-bar">
			<view class="tab-left" @tap="toback">
				<image class="back" src="../../static/image/back.png"></image>
			</view>
			
			<view class="tab-right"  @click.stop="isshow=!isshow">
			
				<view class="more-img">
					<image style="width:58rpx;height: 14rpx;" src="../../static/image/more.png"></image>
				</view>
				
				<view v-if="isshow" class="caidan">
					<view class="sanjiao"></view>
					<view v-if="isfriend" class="del" @tap="delfriend()">删除好友</view>
				</view>
			</view>
		</view>
		
		<view class="main">
			<view class="top">
				<view class="top-left">
					<image :src="userInfo.user_img" mode=""></image>
				</view>
				
				<view class="top-right">
					<view class="remarks">{{markers}}</view>
					<view class="nicname"><text class="nic">昵称：</text>{{userInfo.nicName}}</view>
					<view v-if="qunnicname" class="qunnicname"><text class="nic">群昵称：</text>{{qunnicname}}</view>
				</view>
			</view>
			
			<view class="center">
				<view class="center-top">
					<view class="gq">
						<text class="geqian lef">个性签名</text> 
						<text class="cont">{{userInfo.autograph}}</text>
					</view>
				</view>
				
				<view class="center-bottom">
					<view class="pyq"><text class="geqian">朋友圈</text></view>
				</view>
			</view>
			
			<view class="bottom">
				<view v-if="isfriend &&isme==false" class="btn-send btn" @tap="tochatroom">发消息</view>
				<view v-if="!isfriend &&isme==false" class="btn-join btn" @tap="addFriend()">加好友</view>
			</view>
		</view>
	</view>
</template>

<script>
		import { getUserInfo,isfriend,delfriend ,addfriend} from '../../util/api.js'
	export default {
		data() {
			return {
				isfriend:true,
				isme:false,
				myid:0,
				userid:0,
				userInfo:{},
				qunnicname:'',
				markers:'',	//好友备注
				isshow:false, //菜单栏显示
				
			}
		},
		onLoad(option) {
			this.userid=Number(option.id)
			console.log(this.userid,"userid")
			this.qunnicname=option.qn
			this.join()
		},
		methods: {
			toback(){
				uni.navigateBack({
					delta:1
				})
			},
			join(){
					
				getUserInfo(this.userid).then((res)=>{
					this.userInfo=res.data.result[0]
					 
					 this.myid = Number(res.data.myid)
					console.log(this.myid)
					return isfriend(this.userid)
				})
				.then((r)=>{
					this.isfriend=r.data.isfriend
					if(r.data.request2){
						if(r.data.request2[0].friendremarks){
							this.markers=r.data.request2[0].friendremarks
						}else{
							this.markers=this.userInfo.nicName
						}
					}
					if(r.data.isme){
						this.isme=true
					}else{
						this.isme=false
					}
					console.log(r)
				})
			},
			tochatroom(){
				uni.navigateTo({
					url: `../chatroom/chatroom?userid=${this.userid}&&fasongzeid=${this.myid} `
				})
			},
			delfriend(){
				uni.showModal({
				    title: '删除好友',
				    content: '确定要删除好友？',
				    success:  (res)=> {
				        if (res.confirm) {
							delfriend(this.userInfo.userid).then((res)=>{
								console.log(res)
								uni.navigateBack({
									delta:1
								})
							})
							//this.userInfo.userid
				            
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			addFriend(){
				let str = `来自群聊的${this.qunnicname}`
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
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";
	.tab-bar {
	
		background-color: #FFFFFF;
		//border-bottom: 1px solid $uni-border-color;
		border-bottom: 1px solid transparent;
		margin-bottom: 88rpx;
		.tab-left {
			width: 40rpx;
			height: 40rpx;
	
			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
		.tab-right{
			
			.caidan{
				width: 200rpx;
				height: 400rpx;
				text-align: center;
				position: absolute;
				top: 88rpx;
				border-radius: 10rpx;
				right: 60rpx;
				background-color: #595959;
				.sanjiao{
					position: absolute;
					top: -60rpx;
					right: 10rpx;
					width: 0;
					height: 0;
					border: 40rpx solid rgba(255,255,255,0);
					border-bottom-color: #595959;
				}
				.del{
					width: 100%;
					height:100rpx ;
					padding-top: 40rpx;
					color: #FFFFFF;
				}
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
	.content{
		background-color: #eaeaea;
		width: 100%;
		height: 100vh;
	}
	.main{
		width: 100%;
		margin-top: var(--status-bar-height);
		padding-top:50rpx ;
		
		
		.top{
			display: flex;
			width: 100%;
			padding-top: 88rpx;
			background-color: #FFFFFF;
			border-bottom: 1px solid #808080;
			padding-left: 40rpx;
			padding-bottom: 40rpx;
			.top-left{
				flex: 1;
				
				image{
					width: 120rpx;
					height: 120rpx;
					border-radius: 25rpx;
				}
			}
			.top-right{
				flex: 3;
				.remarks{
					font-size: 40rpx;
					font-weight: 600;
					color: #000000;
				}
				.nicname{
					margin-top: 10rpx;
					font-size: 32rpx;
					color: #808080;
				}
				.qunnicname{
					margin-top: 10rpx;
					font-size: 28rpx;
					color: #808080;
				}
				.nic{
					
				}
			}
		}
		.center{
			width: 100%;
			background-color: #FFFFFF;
			margin-top: 20rpx;
			padding-left: 40rpx;
			.center-top{
				
				border-bottom: 1px solid #e2e2e2;
				// height: 100rpx;
				// line-height: 100rpx;
				
				.gq{
					display: flex;
					align-items: center;
					color: #808080;
					overflow: hidden;
					.cont{
						flex: 4;
						line-height: 60rpx;
						display:-webkit-box;
						margin-right: 30rpx;
						
						-webkit-box-orient:vertical;  
						-webkit-line-clamp:3;/*规定最多显示两行*/  
						
					}
					.lef{
						flex: 1;
						
						
					}
				}
			}
			.center-bottom{
				height: 100rpx;
				line-height: 100rpx;
				.pyq{
					color: #808080;
				}
			}
			.geqian{
				font-size: 32rpx;
				font-weight: 400;
				color: #000000;
				padding-right: 20rpx;
			}
		}
		.bottom{
			width: 100%;
			margin-top: 20rpx;
			text-align: center;
			
			.btn{
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				margin-bottom: 2rpx;
				background-color: #FFFFFF;
				color: #3d569d;
			}
			
		}
	}
</style>
