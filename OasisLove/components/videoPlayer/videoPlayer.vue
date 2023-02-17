<template>
	<view class="content">
			
		<view class="videoPlayer" @click="click">			
			<video
			:id="nextVideo?nextVideo.id:video.id" 
			 class="video" 
			:controls="false" 
			 :src= "nextVideo?nextVideo.videourl:video.videourl"
			ref="myVideo"
			:loop="true" 
			:autoplay="autoplay"
			:show-fullscreen-btn="false"
			:show-play-btn="false"
			:show-center-play-btn="false"
			
			@play="isplay()"></video>		
		</view>
		
		<!-- left :src= "nextVideo?nextVideo.videourl:video.videourl"   -->
		<view class="left">
			<p class="userName">{{nextVideo?nextVideo.author:video.author}}</p>
			<p class="title">{{nextVideo?nextVideo.title:video.title}}</p>
		</view>
		
		<!-- right -->
		<view class="right">
			<view class="userimg">
				<image src="../../static/defatlt.jpg"></image>
			</view>
			<view class="zan btn">
				<image src="../../static/image/zan.png"></image>
				<p>{{nextVideo?nextVideo.like:video.like}}</p>
			</view>
			<view class="pinglun btn" @tap="showcomments">
				<image src="../../static/image/pinglun.png"></image>
				<p>1.2万</p>
			</view>
			<view class="shouchang btn">
				<image src="../../static/image/shouchang.png"></image>
				<p>{{nextVideo?nextVideo.collection:video.collection}}</p>
			</view>
		</view>
		
		<transition name="plus" >			
			
				<view class="popover" v-if="isshowpopover">
					
						<view class="title">
							<span>{{commentLZ.length}} 条评论</span>							
						</view>
						
						<view class="center">
							<!-- 循环所有的楼主 -->
							<view class="Landlord" v-for="(item,index) in commentLZ">
								<!-- 楼主的头像 -->
								<view class="userimage">
									<image :src="item.floorimg"></image>
								</view>
								
								<!-- 楼主的内容 循环当前楼主下的所有层主--> 
								<view class="content" >
									<view class="userinfo">
										<span class="username">{{item.floornicname}}</span>
										<!-- <span class="author">作者</span> -->
									</view>
									<view class="text">
										{{item.floortext}}
									</view>
									<view class="sendTime">
										<span class="time">{{changeTIme(item.time)}}</span>
										<span class="btn" @tap="sendtoLZ(item.videoID,item.floorID,item.floornicname)">回复</span>
									</view>
									
									<view style="font-size: 12px;padding: 10px 0 0 10px;color: #808080;" v-if="item.cznums>0 &&!(item.flag)" @tap="showLayerComments(index,item.videoID,item.floorID)">展开 {{item.cznums}} 条回复</view>
									
									<view class="showcengzhu" v-if="item.flag" v-for="cz in item.commentCZ" >
										<!-- 层主的头像 -->
										<view class="userimage">
											<image :src="cz.layerimg"></image>
										</view>
										
										<!-- 层主的内容 -->					
										<view class="content">					
											<view class="userinfo">
												<span class="username">{{cz.layernicname}}</span>
												<span class="huifuze" v-if="cz.sendto">{{cz.sendto}}</span>
												<!-- <span class="author">作者</span> -->
											</view>
											
											<view class="text">
												{{cz.layertext}}
											</view>
											
											<view class="sendTime">
												<span class="time">{{cz.time}}</span>
												<span class="btn" @tap="sendtoLZ(cz.videoID,cz.floorID,cz.layernicname,cz.layernicname)">回复</span>
											</view>
											
										</view>
										
										
									</view>
									
									
								</view>
								
								
							</view>
						</view>
						
						<view class="submit">
							<view class="submit-chat">
								
								<view class="input">
									<!-- <textarea adjust-position="false" disable-default-padding="true" :cursor-spacing="subheight"
										@focus="focu" @blur="focu" v-show="qh" auto-height="true" class="chat-send btn" @input="inputs"
										v-model="msg">
									</textarea> -->
									<textarea :focus="isfocus" @focus="focus" :placeholder="placeHolder" placeholder-style="fontSize: 12px" adjust-position="false" auto-height="true" disable-default-padding="true" v-model="msg" @input="inputs"></textarea>
								</view>
								
							
								<view class="bt-img" @tap="showemoji">
									<image src="../../static/image/biaoqing.png"></image>
								</view>
							
								<!-- <view class="bt-img" @tap="more">
									<image src="../../static/image/tianjia.png"></image>
								</view> -->
							</view>
							
							<view class="emoji" :style="{height:260}" v-show="isemoji">
							
								<emoji @emojis="emojis"></emoji>
								<view class="emoji-send">
									<view @tap="backspace" class="emoji-send-del">
										<image src="../../static/image/bkspace.png"></image>
									</view>
									<view class="emoji-send-btn" @tap="inputs">发送</view>
								</view>
							</view>
							
						</view>
						
					
					
					
				</view>
			
			
		</transition>
	</view>	
	
</template>

<script>
	
	import submits from '../../components/submit/submit.vue'
	import emoji from '../../components/emoji/emoji.vue'
	import {getcomments,emitcommentToLZ} from '../../util/api.js'
	import {dateTimeSend} from '../../common/js/myfun.js'
	import {
		dateFormate,
		dateTime
		
	} from '../../common/js/myfun.js'
	var timer=null
	export default {
	
		props:{
			video:{
				type:Object,
				default:function(){
					return {}
				}
			},
			index:{
				type:Number,
				default:0
			}
		},
		data() { 	
		
			return {
				play:false,
				dblClick:false,
				autoplay:false,
				videoContext:null,
				videoInfo:{},
				flag:false,
				nextVideo:null,
				touchNum:0,
				isshowpopover:false,
				commentLZ:[],
				isemoji:false,
				msg:'',
				placeHolder:"善于结善缘,恶语伤人心",
				isfocus:false,	
				senddata:{},
				commentType:"LZ"
			};
		},	
		created() {
			
			this.videoInfo = this.$props.video		
			this.atuo()
		},
		components: {
			submits,
			emoji
		},
		methods:{
			isplay(){
				// if(this.nextVideo){
				// 	//console.log(this.nextVideo.id)
				// }
				
				
			},
			changeTIme(data) {
				return dateTime(data)
			},
			click(){								
				this.touchNum ++
				setTimeout(()=>{
				if(this.touchNum == 1){
					console.log('单击')
					
					this.touchNum = 0
					
					this.$emit('disable-touch', this.isshowpopover)
					if(!this.isshowpopover){
						if(this.play === true){
							this.pause()
						}else{
							this.player()
							}
					}
					this.isshowpopover = false
				}
				if(this.touchNum >= 2){
					console.log('双击')
					console.log("双击,点赞数量加一")
				}
					this.touchNum = 0
				},250)
																								
			},
			player(){											
				uni.createVideoContext(this.video.id,this).play();
				this.play = true
				
			},
			pause(){
				uni.createVideoContext(this.video.id).pause();
				this.play = false							
			},
			playThis(){
				//播放当前视频
				if(this.play===false){
					this.videoContext.play()
					this.play=true
				}
			},
			//首个视频自动播放
			atuo(){
				//首个视频自动播放
				if(this.index===0){
					this.autoplay=true
					this.play = true
				}
			},
			
			// 获取楼的评论
			showcomments(){			
				
				if(this.commentLZ.length===0){
					this.isshowpopover = true
					this.$emit('disable-touch', this.isshowpopover)
					getcomments("L").then(res=>{
											
						let data = res.data.comments
						data.forEach((item)=>{
							item.flag=false
						})
						
						this.commentLZ = data
						data = null
						console.log(this.commentLZ)
					})
				}else{
					
					this.isshowpopover = true
					this.$emit('disable-touch', this.isshowpopover)
				}
				
			},
			// 展示层的评论
			showLayerComments(index,videoID,floorID){
				
				// 开始请求层的评论
				getcomments("C",videoID,floorID).then(res=>{
					//this.isshowpopover = true
					console.log(res)
					let data
					if(res.data.state ===1){						
						data = Object.freeze(res.data.comments)
						this.commentLZ[index].commentCZ = data
						console.log(this.commentLZ[index])
						this.commentLZ[index].flag = true
					}
					
					// let data = res.data.comments
					// data.forEach((item)=>{
					// 	item.flag=false
					// })
					
					// this.commentLZ = data
					// data = null
					// console.log(this.commentLZ)
				})
			},
			// 回复楼主的评论
			sendtoLZ(videoID,floorID,floornicname,to=""){
				this.placeHolder = "回复 @ "+floornicname
				this.isfocus = true
				this.commentType = "CZ"
				this.senddata.videoID = videoID
				this.senddata.floorID = floorID
				this.senddata.sendto = to
				this.senddata.layerID = -1
				
				
				
			},
			sendComment(){
				emitcommentToLZ(this.senddata).then(res=>{
					console.log(res)
				})
			},
			showemoji(){
				this.isemoji = !this.isemoji
			},
			emojis(e) {
				this.msg = this.msg + e			
			},
			backspace(){
				
				let number = this.msg.substr(this.msg.length - 2, this.msg.length).search(/(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/i)==-1?1:2;
				this.msg = this.msg.substr(0, this.msg.length - number);
			},
			focus(){
				if(this.isemoji){
					this.isemoji =false
				}
			},
			inputs(e){
				let flag=false
				
				if(e.type==="input"){
					let chatmsg = e.detail.value
					let pos = chatmsg.indexOf('\n')
					if (pos != -1 && chatmsg.length > 1) {
						console.log(this.msg)
						flag = true
						
					}
				}else{
					console.log(this.msg)
					flag = true
					
				}
				
				if(flag){
					if(this.commentType ==="LZ"){
						this.senddata.videoID = "aaa"
						this.senddata.floormanagerID=-1
						this.senddata.floortext=this.msg
					    let img = uni.getStorageSync('user_img');
						let name = uni.getStorageSync('username');
						this.senddata.floorimg=img
						this.senddata.floornicname=name
						this.senddata.time=dateTimeSend(new Date())
						this.senddata.type="LZ"
					}else{
						
						
						this.senddata.layertext=this.msg
						let img = uni.getStorageSync('user_img');
						let name = uni.getStorageSync('username');
						this.senddata.layerimg=img
						this.senddata.layernicname=name
						this.senddata.time=dateTimeSend(new Date())
						this.senddata.type="CZ"
					}
					this.sendComment()
					this.msg = ""
				}
				
				
			}
		},
	
	}
	
</script>
 
<style lang="scss">
	  .plus-enter-active{
	    transition: opacity .5s;
	  }
	  .plus-enter{
	     opacity: 0;
	  }
	  .plus-leave-active{
	    transition: opacity .5s;
	  }
	  .plus-leave-to{
	    opacity: 0;
	  }
	  .plus-enter-to{
	     opacity: 1;
	  }
	  
	  
	
.content{
	position: relative;
	.videoPlayer{
		height: 100vh;
		width:100vw;
		.video{
			width: 100%;
			height: 100%;
			
		}
	}
	.left{
		width: 75%;
		
		position: absolute;
		left: 20rpx;
		bottom: 150rpx;
		
		color: #fff;
		.userName{
			font-size: 16px;
		}
		.title{
			padding-top: 10rpx;
			font-size: 14px;
		}
	}
	.right{
		width: 80rpx;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		right: 20rpx;
		bottom: 200rpx;
		
		font-size: 12px;
		color: #fff;
		
		image{
			width: 60rpx;
			height: 60rpx;
		}
		
		.userimg{
			margin-bottom: 30rpx;
			image{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
		}
		.btn{
			margin-top: 32rpx;
			
		}
	}
	
	.popover{
		width: 100vw;
		
		height: 70%;
		position: absolute;		
		bottom: 130rpx;
		z-index: 9;
		background-color: #161515;
		color: #fff;
		overflow-y: scroll;
		image{
			border-radius: 50%;
		}
		.title{
			width: 400rpx;
			margin: 0 auto;
			
		}
		.center{
			margin-bottom: 112rpx;
		}
		.Landlord{
			width: 100%;
			display: flex;
			box-sizing: border-box;
			padding: 30rpx 0 0 20rpx;
			font-size: 14px;
			.userimage{
				image{
					width: 60rpx;
					height: 60rpx;
				}
			}
			.content{
				margin-left: 10rpx;
				.userinfo{
					color: gray;
					font-size: 12px;
					position: relative;
					.author{
						color: #fff;
						background-color: red;
						margin-left: 10rpx;
					}
					.huifuze{
						padding-left:36rpx ;
					}
					.huifuze::after{
						content: "";
						height: 0;
						width: 0;
						border-top: 10rpx solid transparent;
					    border-left: 20rpx solid #808080;
						border-right: 20rpx solid transparent;
						border-bottom: 10rpx solid transparent;
						
						position: absolute;
						top: 8rpx;
						left: 56rpx;
						
					}
				}
				.text{
					
				}
			
				.sendTime{
					font-size: 12px;
					margin-top: 14rpx;
					.time{
						color: gray;
						
					}
					.btn{
						margin-left: 20rpx;
						color: #bebebe;
					}
				}
				
				.showcengzhu{
					display: flex;
					margin-top: 20rpx;
				}
			}
			
		}
		
	}
}


.submit {
		background-color: #000;
		border-top: 1px solid $uni-border-color;
		width: 100%;

		position: fixed;
		bottom: 0;
		z-index: 101;
		padding-bottom: 20rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

.submit-chat {
		width: 100vw;
		height: 100rpx;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		padding: 14rpx 14rpx;
		background-color: #161515;
		
		image {
			width: 56rpx;
			height: 56rpx;
			margin: 0 10rpx;
			flex: auto;

		}

		.btn {
			flex: auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;
			max-height: 160rpx;
			margin: 0 10rpx;

		}
		.input{
			
			width: 80%;
			height:64rpx;
			color: #fff;
			
		}
		.chat-send {
			line-height: 44rpx;
			
		}

		.record {
			text-align: center;
			line-height: 44rpx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color-grey;

		}
	}

	.emoji {
		width: 100%;
		height: 460rpx;
		background: rgba(236, 237, 238, 1);
		box-shadow: 0 -1rpx 0px 0px rgba(0, 0, 0, 0.1);

		.emoji-send {
			width: 280rpx;
			height: 104rpx;
			padding-top: 24rpx;
			background-color: rgba(236, 237, 238, 0.8);
			position: fixed;
			bottom: env(safe-area-inset-bottom);
			right: 0;
			display: flex;

			.emoji-send-btn,
			.emoji-send-del {
				flex: 1;


				height: 80rpx;

				font-size: 32rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 12rpx;

			}

			.emoji-send-btn {
				margin: 0 32rpx 0 20rpx;
				background: rgba(255, 228, 49, 1);
			}

			.emoji-send-del {
				margin-left: 24rpx;
				background: #fff;
				position: relative;

				image {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 42rpx;
					height: 42rpx;
				}
			}
		}
	}

	.more {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 436rpx;

		.more-list {

			width: 25%;
			text-align: center;
			margin-top: 32rpx;

			image {
				width: 64rpx;
				height: 64rpx;
				padding: 24rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 24rpx;
			}

			.more-list-title {
				font-size: 24rpx;
				color: rgba(39, 40, 50, 0.5);
				line-height: 34rpx;
			}
		}
	}

	.voice-bg {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: 100;

		.close {
			position: absolute;
			bottom: 248rpx;
			left: 50%;
			transform: translateX(-50%);
			margin-bottom: env(safe-area-inset-bottom);
			width: 100rpx;
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 50rpx;
			background-color: pink;
			text-align: center;

			color: #fff;
			font-size: 40px;
		}

		// .close:hover{
		// 	transition: all 0.5s ease;
		// 	width: 200rpx;
		// 	height: 200rpx;
		// 	line-height:200rpx;
		// 	border-radius: 100rpx;
		// 	color: red;
		// 	font-size:48px;
		// }
		.anxia {
			transition: all 0.5s ease;
			width: 200rpx;
			height: 200rpx;
			line-height: 200rpx;
			border-radius: 100rpx;
			color: red;
			font-size: 48px;
		}
	}


</style>
