<template>
    <view class="container">
		<view class="videoBackground">
			<video id="videoA" autoplay="true" :controls="false" object-fit="cover" :show-center-play-btn="false"></video>
			<view class="friendInfo">
				<image :src="friendsrc"></image>
				<p>{{friendName}}</p>
			</view>
			
			<view class="btns">
				<view class="title">{{title}}</view>
				<view class="close" @tap="closeMedia">
					<image src="../../static/image/guaduan.png"></image>				
				</view>
			</view>
		</view>
		<view class="videoBackground2" v-show="ishowSp2">
			<video id="videoB" autoplay="true" muted="true"  :controls="false" object-fit="cover" :show-center-play-btn="false">
					
			</video>
		</view>
    </view>
</template>

<script>
	import {getUserInfo} from '../../util/api.js'
	import {VideoInitiator,VideoReceiver} from '../../common/js/createRTCConnection.js'
    export default {
        data() {
            return {
				url:'',				// 推流地址				
				windowWidth:0,		// 设备宽度
				windowHeight:0, 	// 设备高度
				windowWidthPUSH:0,		// 设备宽度
				windowHeightPUSH:0, 	// 设备高度
				title:'等待对方接受邀请...',
				statusBarHeight:0,  //状态栏高度
				
				userName:'哒哒哒',	        // 用户名,
				type:"",					//通话类型 ：语音通话、视频通话
				friendName:"undefined",	    // 好友的昵称
				friendsrc:'',				// 好友头像地址
				friendId:-1,
				myid:-1,
				peerA:null,			// 发起端
				offer:null,
				answer:null,
				streamEmit:null,	// 视频发起者媒体流数据
				streamOn:null,		// 视频接收者媒体流数据
				setSDP:Object,   	// 设置会话描述
				clearPeerA:Object, 	// 清除 发起者
				offer:null,			// 通话接收者发来的offer
				ishowSp2:false,		// 是否显示对方的媒体流
				
			}
        },

		onLoad(option) {
			// this.getSysteminfo()
			 this.friendId = option.friendId
			 this.myid = option.fasongzeid
			 this.type = option.type.trim()
			 
			// if(option.HuiLiuUrl){
			// 	this.src = option.HuiLiuUrl
			// 	console.log(this.src)  
			// 	this.userName='哈哈哈'
			// 	this.title='通话中'
			// 	this.windowWidthPUSH = this.windowWidthPUSH/3
			// 	this.windowHeightPUSH = this.windowHeightPUSH/6
			// }
			//let t = this.getNewStream()
			//console.log(t)
			
			
			this.getFriendInfo()
			
			this.onCloseMedia()
			
			this.waitplay()
			
			
			
		},
		
        methods: {
			// 获取好友信息
			getFriendInfo(){
				
				getUserInfo(this.friendId.trim()).then(res=>{
					//console.log(res)
					this.friendName = res.data.result[0].nicName
					this.friendsrc = res.data.result[0].user_img
					this.getMedia()
				})
			},
			//获取媒体流数据
		    async getMedia(){	
				let obj			
				if(this.type =="yy"){ 			
					obj = {
						audio: true,
						video: false
					}
				}else{
					
					obj = {
						audio: true,
						
						video: {
						    width: 1920,
						    height: 1080
						  }
					}
				}
				//console.log(obj)
				this.streamEmit = await navigator.mediaDevices.getUserMedia(obj)
										
					// 在 video 标签上播放媒体流
					let videoElement = document.getElementsByTagName('video')[0]
					//let videoElement2 = document.getElementsByTagName('video')[1]
					videoElement.srcObject = this.streamEmit
					// console.log(this.streamEmit)
					
					this.setSDP = VideoInitiator(this.streamEmit,(offer)=>{
						// 将 发起者 的 offer发送给 peerB（接收端）
						console.log("live组件创建的offer",offer)
						this.socket.emit('livepush', this.friendId, offer,this.myid,"live",this.type)
					},(candidate,clearPeerA)=>{
						// 将 event.candidate 发送给 peerB端。
						this.socket.emit('pushCandidate', this.friendId, candidate,this.myid)
						this.clearPeerA = clearPeerA
					})
					
					
					// 监听peerB(接收端) 发来的 answer
					this.socket.on('onAnswer',async (data) => {
						//console.log(data)
						//console.log(this.setSDP)
						this.setSDP.then(res=>{
							res(data.answer)
						})
					    this.answer = data.answer
						//console.log(this.answer)																
					
					})
			},
			// 挂断视频通话
			closeMedia(){
				// this.streamEmit.getTracks().forEach(track=>{
				// 	track.stop()
				// })
				// this.streamEmit.getAudioTracks()[0].stop();
				// this.streamEmit.getVideoTracks()[0].stop();
				this.clearStream(this.streamEmit)
				if(this.streamOn){
					this.clearStream(this.streamOn)
				}
				uni.navigateBack()
				this.friendId = this.friendId.trim();
				this.socket.emit("MediaInfos",this.friendId, this.myid,"VideoInitiator","对方已挂断",)
				
				this.clearPeerA()
				
			},
			// 清除媒体流
			clearStream(stream){
				if(stream){
					stream.getTracks().forEach(track=>{
						track.stop()
					})
					stream.getAudioTracks()[0].stop();
				}
				if(stream && this.type==="sp"){
					
					stream.getVideoTracks()[0].stop();
				}
			},
				
			// 监听对方挂断
			onCloseMedia(){
				this.socket.on('CloseInfos', (jiesouzheid, faqizheid, type, message) => {
					this.title = message
					this.clearStream(this.streamOn)
					if(this.streamEmit){
						this.clearStream(this.streamEmit)
					}
					setTimeout(()=>{uni.navigateBack()},1000)				
				})
			},
			// 监听对方点击了接听
			waitplay(){				
				this.socket.on('waitplay', (data) => {
									
					this.offer = JSON.stringify(data.offer)
					this.offer = JSON.parse(this.offer)
					if(data.type==="waitplay"){
						console.log(data)
						this.init()
						}								
				})
			},
			// 对方接听了视频电话
			init(){
				this.ishowSp2 = true
				this.setIceCandidate = VideoReceiver(this.offer,(remoteStream)=>{
					let videoElement = document.getElementsByTagName('video')[1]
					this.streamOn = remoteStream
					console.log(this.streamOn)
					videoElement.srcObject = this.streamOn
					
					//console.log(remoteStream)
				},(answer,clearPeerB)=>{
					// 将 发起者 的 answer 传递给 接收者
					this.socket.emit('pushAnswer',this.friendId, answer, this.myid)
					this.clearPeerB = clearPeerB
				})
				
				// 监听 peerA （发起者）传来的 Candidate
				this.socket.on('onCandidate', (data) => {
					//console.log(data.Candidate)
					
					this.setIceCandidate.then(res=>{
						res(data.Candidate)
					})
				})
			
			},	
		
		  
        }
    }
</script>

<style lang="less">
	
	
.videoBackground{
	width: 100vw;
	height: 100vh;
	color: #fff;
	#videoA{
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	.friendInfo{
		width: 200rpx;
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translateX(-50%);
		
		image{
			margin: 0 auto;
			width: 120rpx;
			height: 120rpx;
		}
		p{
			margin: 0 auto;
			margin-top: 8rpx;
			font-size: 18px;
		}
	}
	.btns{
		width: 300rpx;
		position: absolute;
		left: 50%;
		bottom: 10%;
		transform: translateX(-50%);
		
		.title{
			padding-bottom: 100rpx;
			margin: 0 auto;
		}
		.close{
			width: 100rpx;
			height: 100rpx;
			margin: 0 auto;
			
			image{
				width: 100rpx;
				height: 100rpx;
				
			}
		}
	}
}

.videoBackground2{
		width: 250rpx;
		height: 400rpx;
		position: absolute;
		top: 2%;
		right: 0;
	} 
 
</style>
