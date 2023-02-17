<template>
	<view class="content">
		<view class="tab-bar">

			<view class="tab-left">
				<image src="../../static/img/logo.png" mode="widthFix"></image>
			</view>
			<view class="tab-center">
				<text>绿洲之恋</text>
			</view>
			<view class="tab-right">
				<view class="serch" @tap="tosearch">
					<image src="../../static/image/search.png" mode=""></image>
				</view>
				<view class="add" @tap="tocreategroup">
					<image src="../../static/image/add.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="main">
			<view class="apply" v-if="requestInfo.length>0">
				<view class="friend-list" @tap="tofriendRequest">
					<view class="friend-list-left">
						<text class="tip">{{requestInfo.length}}</text>
						<image src="../../static/image/adduser.png"></image>
					</view>

					<view  class="friend-list-right">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time"></view>
						</view>

						<view class="text">{{requestInfo[0].message}}</view>
					</view>
				</view>
			</view>
			<view class="friends">
											
								
				<view class="friend-list" v-for="(item,index) in friendsMeg" :key="item.friendid"
					@tap="tochat(item.friendid,item.qunid,item.nicName)" @touchstart="touchStart" @touchend="touchEnd(index,$event)">					
				  <view class="all" :animation="animationList[index]">
						
					<view class="friend-list-left">
						
						<text v-show="item.num>0" class="tip">{{item.num}}</text>
						<image :src="item.user_img"></image>
					</view>


					<view class="friend-list-right">
						<view class="top">
							<view class="name">{{item.friendremarks?item.friendremarks:item.nicName}}</view>
							<view class="time">{{changeTIme(item.time)=='NaN/NaN/NaN'?'现在':changeTIme(item.time)}}
							</view>
						</view>

						<view class="text">{{item.lastMessage}}</view>

					</view>
				  </view>
				 <view  class="del" :animation="animationList[index]"   >
					<view class="btn-list" v-if=" item.btnData && item.btnData.isshow">
						
						<view class="read" @tap.stop="handleRead(index)"  >{{item.btnData.touchText[0]}}</view>
						<view class="noshow" @tap.stop="handleShow(index)" >{{item.btnData.touchText[1]}}</view>
						<view  class="clear" @tap.stop="handleDel(index,$event)"> {{item.btnData.touchText[2]}}</view>
					</view>
				 
					<view :class="{'active-clear':isactive_clear,'active-show':isactive_show,'active-read':isactive_read}" class="btn-all" v-if=" item.btnData && !item.btnData.isshow" @tap.stop="handleAll(item.btnData.text,index)">{{item.btnData.text}}
					</view>
				  </view>
				</view>
			</view>
		</view>
		
		<bottom></bottom>

	</view>
</template>

<script>
	import datas from '../../common/js/datas.js'
	import myfun from '../../common/js/myfun.js'
	import {
		getHomeList,
		tipMessage,
		groupList,
		findrequest
	} from '../../util/api.js'
	import bottom from '../bottom/bottom.vue'
	import {
		dateFormate,
		dateTime,
		dateTimeSend
	} from '../../common/js/myfun.js'
	import store from '@/store/index.js'; //需要引入store
	export default {
		data() {
			return {
				myid:0,
				friends: [],
				friendsMeg: [{}],
				isReadMsg: [],
				fasongzeid: 0, //发送者id 好友或者群聊，最后一个人会话的id
				rooms: [], //把用户所有群聊的群聊id当作房间id
				requestInfo:[],	//好友请求
				//按下的坐标
				startX: 0,
				startY: 0,
				isactive_clear:false,
				isactive_show:false,
				isactive_read:false,
				animationList:[],
				prevIndex:0,   //记录上一次动画的索引
				isshowBtnAll:false,	
				noShow:{},
				
			}
		},
		onLoad() {	
			
			
				
				this.getFriend()
			
			
			
			//创建动画实例
			this.animation = uni.createAnimation() 
			 
			 
		},
	
		onShow() {
			
			let temp =null
			uni.getStorage({
			    key: 'noShow',
			    success: function (res) {
			        //console.log(res.data);
			       temp = res.data;
					
			    },
				
			});
			if(temp){
				this.noShow = temp
				temp = null
			}
		},
		onReady() {
			
			setTimeout(res => {
				this.join()
			}, 1000)
		},
		
		methods: {
			changeTIme(data) {
				return dateTime(data)
			},
			getFriend() {
				let that = this
				this.friendsMeg = []
				getHomeList().then(res => {
						//console.log(res)
						if (res.data.status == 1) {
							this.friendsMeg = res.data.requests
							this.fasongzeid = res.data.fasongzeid
							this.myid = this.fasongzeid
							for (let i = 0; i < this.friendsMeg.length; i++) {
								if (this.friendsMeg[i].messageTYPE == 2) {

									this.friendsMeg[i].lastMessage = '[图片]'
								} else if (this.friendsMeg[i].messageTYPE == 3) {
									this.friendsMeg[i].lastMessage = '[语音]'
								} else if (this.friendsMeg[i].messageTYPE == 6) {
									this.friendsMeg[i].lastMessage = '[视频]'
								} else if (this.friendsMeg[i].messageTYPE == 4) {
									this.friendsMeg[i].lastMessage = '[位置]'
								} else if (this.friendsMeg[i].messageTYPE == 5) {
									this.friendsMeg[i].lastMessage = '[文件]'
								}
								for (let j = 0; j < res.data.request2.length; j++) {

									if (this.friendsMeg[i].friendid == res.data.request2[j].friendid) {
										this.friendsMeg[i].friendremarks = res.data.request2[j].friendremarks
										this.friendsMeg[i].nicName = res.data.request2[j].nicName
										this.friendsMeg[i].user_img = res.data.request2[j].user_img

									}								
									if (this.friendsMeg[i].user_img) {
										this.friendsMeg[i].user_img = this.friendsMeg[i].user_img.replace(/\\/, '/')
									}
								}
							}


						}else{
							uni.navigateTo({
								url:'../login/login'
							})
						}

						return tipMessage()
					})
					.then(res => {
						this.isReadMsg = res.data.request
						
						if (res.lengths == 0) {
							
						} else {
							let obj={}
							for (let i = 0; i < this.friendsMeg.length; i++) {

								for (let j = 0; j < this.isReadMsg.length; j++) {

									if (this.friendsMeg[i].friendid == this.isReadMsg[j].userid) {
										//console.log(this.isReadMsg[j].num)
										this.friendsMeg[i].num = this.isReadMsg[j].num
									}else{
										this.friendsMeg[i].num = 0
									}
								}	
							}
						}						
						return groupList()
					})
					.then(res => {
						let x = new Object()
						//console.log(res)
						if (res.data.groupinfo) {
							for (let i = 0; i < res.data.groupinfo.length; i++) {
								x.user_img = res.data.groupinfo[i].qunimg //群头像(和好友共用)
								x.nicName = res.data.groupinfo[i].qunname //群名称(和好友共用)
								x.qunid = res.data.groupinfo[i].qunid
								this.rooms.push(res.data.groupinfo[i].qunid)


								
								for (let j = 0; j < res.data.lastmessage.length; j++) {
									if (res.data.groupinfo[i].qunid === res.data.lastmessage[j].qunid) {

										x.time = res.data.lastmessage[j].times //时间(和好友共用)

										if (res.data.lastmessage[j].messageTYPE==1) {
											x.lastMessage = res.data.lastmessage[j].messageTxt
										} else if (res.data.lastmessage[j].messageTYPE ===2) {
											x.lastMessage = '[图片]'
										} else if (res.data.lastmessage[j].messageTYPE===3) {
											x.lastMessage = '[语音]'
										 } else if (res.data.lastmessage[j].messageTYPE ===4) {
										 	x.lastMessage = '[位置]'
										 } else if (res.data.lastmessage[j].messageTYPE===5) {
										 	x.lastMessage = '[文件]'
										 } 
									} 
								}
								this.friendsMeg.push(x)
								x = {}

							}
						}
						
						// 设置 删除、不显示、已读按钮
					
						let arr = Object.keys(this.noShow) 
						
						let temp = []
						let t;
						this.friendsMeg.forEach((item,index)=>{
							t = arr.indexOf(item.nicName);
							if(t>-1){
								temp.push(item.nicName)
							}
						})
						temp.forEach((item,index)=>{
							this.friendsMeg.splice(Number(item),1)
						})
					
						let text = ''
						this.friendsMeg.forEach((item,index)=>{	
							if(item.num){
								text = '标为已读'
							}else{
								text = '标为未读'
							}
								item.btnData = {
									touchText:[text,'不显示','删除'],
									text:'',
									isshow:true,
								}
								this.animationList.push({})	
							
							
							
						})
						
						
						// 对消息排序
						this.sort()

						return findrequest()
					})
					.then((res)=>{
						this.requestInfo=res.data.request
						//console.log(this.requestInfo)											
					})										
			},
			tosearch() {
				uni.navigateTo({
					url: `../search/search?id=${this.myid}`
				})
			},
			tochat(id, qunid, qunname) {

				if (qunid) {
					uni.navigateTo({
						url: `../chatroom/chatroom?qunid=${qunid}&&qunname=${qunname}&&fasongzeid=${this.fasongzeid} `
					})
				} else {
					uni.navigateTo({
						url: `../chatroom/chatroom?userid=${id}&&fasongzeid=${this.fasongzeid} `
					})
				}

			},
			tofriendRequest() {
				let x=this.requestInfo
				x=JSON.stringify(x)
				uni.navigateTo({
					url: `../friendRequest/friendRequest?info=${x}`
				})
			},
			async join() {				
				let bs = uni.getStorageSync('bs')				
				//console.log(this.rooms)
				this.socket.emit('clientMsg', bs, this.rooms)


				// 获取从服务器传来的  文本  数据
				await this.socket.on('oneToOne', (data) => {
					
					for (let i = 0; i < this.friendsMeg.length; i++) {
						if (this.friendsMeg[i].friendid == data.userid) {
							this.friendsMeg[i].time = data.times
							
							if (data.messageTYPE==1) {
								this.friendsMeg[i].lastMessage = data.messageTxt
							} else if (data.messageTYPE == 3) {
								this.friendsMeg[i].lastMessage = '[语音]'
							} else if (data.messageTYPE ==6) {
								this.friendsMeg[i].lastMessage = '[视频]'
							} else if (data.messageTYPE == 2) {
								this.friendsMeg[i].lastMessage = '[图片]'
							}else if (data.messageTYPE == 4) {
								this.friendsMeg[i].lastMessage = '[位置]'
							}else if (data.messageTYPE == 5) {
								this.friendsMeg[i].lastMessage = '[文件]'
							}
							
							
							
							
							let x = this.friendsMeg[i]
							x.time = data.times

							this.$set(this.friendsMeg, i, x)

							break
						}
						if (this.friendsMeg[i].friendid == data.userid) {
							if (data.messageTYPE == 2) {
								this.friendsMeg[i].lastMessage = '[图片]'
							}
						}
					}
					tipMessage().then((res) => {
						this.isReadMsg = res.data.request
						//console.log(res)
						if (res.lengths == 0) {
							//console.log(123)
						} else {
							for (let i = 0; i < this.friendsMeg.length; i++) {

								for (let j = 0; j < this.isReadMsg.length; j++) {

									if (this.friendsMeg[i].friendid == this.isReadMsg[j].userid) {
										//console.log(this.isReadMsg[j].num)
										this.friendsMeg[i].num = this.isReadMsg[j].num
									}
								}
							}
						}
					})
					this.sort()

				})

				this.socket.on('liveplay',async (data) => {
					//console.log(data)
					console.log("home组件拿到的offer",data.offer)
					let offer = JSON.stringify(data.offer)
					
					//console.log(data.type)
					//store.dispatch('addCountAction',data.url)
					store.commit('addOffer', data.offer)
					// console.log(store.state.offer)					
					
					uni.navigateTo({
						url: `../../pages/waitplay/waitplay?offer=${offer} &&friendId=${data.friendId} &&fasongzeid=${data.fasongzeid}&&mediaType=${data.mediaType}`
						})										
				})
		

				this.socket.on('connectToRoom', (data) => {
					
					
					for (let i = 0; i < this.friendsMeg.length; i++) {
						if (this.friendsMeg[i].qunid === data.qunid) {
							
							if(!data.times){
								let t=new Date()
								data.times=t
							}
							if(data.messageTYPE==1){
								this.friendsMeg[i].lastMessage = data.messageTxt
							}
							else if(data.messageTYPE==2){
								this.friendsMeg[i].lastMessage = '[图片]'
							}
							else if(data.messageTYPE==3){
								this.friendsMeg[i].lastMessage = '[语音]'
							}
							else if(data.messageTYPE==4){
								this.friendsMeg[i].lastMessage = '[位置]'
							}
							else if(data.messageTYPE==5){
								this.friendsMeg[i].lastMessage = '[文件]'
							}
							this.friendsMeg[i].time = data.times
							break
						}
					}
					this.sort()			
				})

				this.socket.on('friendRequest', (data) => {
					
					
					this.requestInfo.push(data)
				})


			},
			tocreategroup() {
				uni.navigateTo({
					url: '../creategroup/creategroup'
				})
			},
			sort() {
				function dateData(property, bol) {
					return function(a, b) {
						var value1 = a[property];
						var value2 = b[property];

						if (bol) {
							// 升序
							return Date.parse(value1) - Date.parse(value2);
						} else {
							// 降序
							return Date.parse(value2) - Date.parse(value1)
						}

					}
				}
				this.friendsMeg.sort(dateData("time", false))
				
			},
			//手指触摸开始
			touchStart(e){
					
				 //记录用户按下的坐标
				     this.startX = e.changedTouches[0].clientX;
				     this.startY = e.changedTouches[0].clientY;
			},
			//手指触摸结束
			touchEnd(index,e){
				
				 const endX = e.changedTouches[0].clientX;
				 const endY = e.changedTouches[0].clientY;
				 
				 //滑动的方向
			     let direction = "";
				  //先判断用户滑动的距离  用[绝对值 ] 是否合法  合法：判断滑动的方向
				        if (Math.abs(endX - this.startX) > 20&&Math.abs(endY-this.startY)<10) {
				        //滑动方向  结束大于				 
				        direction = endX - this.startX > 0 ? "right" : "left";
				      } else {
				        return;
				      }
				 						
				      if(direction === "left"){
						 let obj = {}						  
						this.runAnimation(index)						
					  }else{
						  if(this.prevIndex === index){
							  this.endAnimation(index)
						  }
						 else{
							 this.endAnimation(this.prevIndex)
						 }
					  }
				
			},
			runAnimation(index){
				 this.endAnimation(this.prevIndex)
				 this.createAnimation(index,-240,300)
				 this.prevIndex = index;
				 
				
			},
			endAnimation(i){
				this.createAnimation(i,0,300)				
				let obj = this.friendsMeg[this.prevIndex]			
				obj.btnData.isshow = true			
				obj.btnData.text = ''
				this.friendsMeg.splice(i,1,obj)
			},
			createAnimation(i,lateX,duration){
				this.animation.translateX(lateX).step({duration:duration})  //缩回
				let obj = {}
				obj = this.animation.export() 
				this.animationList.splice(i,1,obj)
				
			},
			// 处理删除聊天
			handleDel(i,e){
				// console.log(i,e)
				let obj = this.friendsMeg[i]
				obj.btnData.isshow = false
				obj.btnData.text = '删除该聊天'
				this.friendsMeg.splice(i,1,obj)
				this.isactive_read=false;
				this.isactive_show=false;
				this.isactive_clear=true
				
					
			},
			handleRead(i){
				let obj = this.friendsMeg[i]				
				obj.btnData.isshow = false				
				obj.btnData.text = obj.btnData.touchText[0]
				this.friendsMeg.splice(i,1,obj)
				this.isactive_clear=false;
				this.isactive_show=false;
				this.isactive_read=true
			},
			handleShow(i){				
				let obj = this.friendsMeg[i]		
				obj.btnData.isshow = false
				obj.btnData.text = '不显示该聊天'
				this.friendsMeg.splice(i,1,obj)
				this.isactive_clear=false;
				this.isactive_read=false;
				this.isactive_show=true
			},
			handleAll(text,i){
				if(text === '删除该聊天' || text === '不显示该聊天'){
					
					this.endAnimation(i)
					
					let data ={
						[this.friendsMeg[i].nicName]:this.friendsMeg[i].nicName
					}
					uni.getStorage({
					    key: 'noShow',
					    success: function (res) {	
							Object.assign(res.data,data)	
							uni.setStorage({key: "noShow",data:res.data });
					    },
						fail(err) {
							uni.setStorage({key: "noShow",data: data});
							
							
						}
						
					});
					this.friendsMeg.splice(i,1)				
					
					
				}
				else{
					this.endAnimation(i)
					let data = this.friendsMeg[i]
					
					if(data.btnData.touchText[0] === '标为已读'){
						
						this.$set(data, 'num', 0)
						data.btnData.touchText[0] = '标为未读'
						
					}else{
						
						this.$set(data, 'num', 1)
						data.btnData.touchText[0] = '标为已读'
					}
					
					this.friendsMeg.splice(i,1,data)
					
				}
				
			},
		},
		components: {
			bottom
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";
	.active-clear {
		animation: animationClear 300ms ease;
		animation-fill-mode:forwards;
		background-color: red;
		
	}
	.active-show{
		display: inline-block;
		animation: animationShow 300ms ease;
		animation-fill-mode:forwards;
		background-color: orange;
	}
	.active-read{
		animation: animationRead 300ms ease;
		animation-fill-mode:forwards;
		background-color: steelblue;
		
	}
	
	// 不显示按钮动画
	@keyframes animationShow{
		0%{
			right: -60rpx;			
		}
		100%{
			right: 0rpx;			
		}
	}
	// 已读按钮动画
	@keyframes animationRead{
		0%{	
			width: 120rpx;
		}
		100%{
			width: 480rpx;
		}
	}
	body{
		text-align: center;
	}
	
	// 删除该聊天动画
	@keyframes animationClear{
		0%{
			right: -480rpx;
		}
		100%{
			right: 0rpx;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;
	}


	.main {
		width: 100%;
		padding: 104rpx $uni-spacing-col-base 0;


	}

	.friend-list {
		position: relative;
		height: 96rpx;
		padding: 16rpx 0;
		overflow: hidden;
		flex-wrap: wrap;
		&:active {
			background-color: $uni-bg-color-grey;
		}
		
		.all{
			
			position: absolute;
			width: 100%;
		}
		
		 .del{
			position: absolute;
			
			top: 0;
			right: -480rpx;
			
			
			height: 96rpx;
			line-height: 96rpx;
			width: 480rpx;
			text-align: center;
			color: white;
			transition: all 300 ease 0;
			.noshow{
				float: left;
				width:160rpx;
				background-color: orange;
				
			}
			.read{
				float: left;
				width:200rpx;
				background-color: steelblue;
			}
			.clear{
				float: left;
				 margin: 0 0 0 auto;
				width:120rpx;
				background-color: red;	
			}
			
			.btn-all{
				position: absolute;
				top: 0;
				// right: -480rpx;
				width: 480rpx;
				height: 96rpx;
				line-height: 96rpx;
				transition: all 0.1s linear;
			}
			
		}

		.friend-list-left {
			position: relative;
			padding-left: 20rpx;
			float: left;

			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}

			.tip {
				position: absolute;
				top: -6rpx;
				left: 88rpx;
				min-width: 36rpx;
				height: 36rpx;
				line-height: 36rpx;
				background: $uni-color-warning;
				border-radius: $uni-border-radius-circle;
				z-index: 8;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				text-align: center;
			}
		}

		.friend-list-right {
			padding-left: 148rpx;

			.top {
				height: 50rpx;

				.name {
					float: left;
					font-size: 36rpx;
					color: $uni-text-color;
					line-height: 50rpx;
					font-weight: 400;
				}

				.time {
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
					padding-right: 20rpx;
				}
			}

			.text {
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				line-height: 40rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}

	}
	#videoA{
		width: 300rpx;
		height: 300rpx;
		position:absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 10%;
	}
</style>
