<template>
	<view>
	<view class="content" v-if="!showPreview">
		<view class="tab-bar">
			<view class="tab-left" @tap="tohome">
				<image class="back" src="../../static/image/back.png"></image>
			</view>

			<view v-if="liaotianSF=='siliao'" class="tab-center">
				{{siliaoinfo.friendremarks?siliaoinfo.friendremarks:siliaoinfo.nicName}}
			</view>

			<view v-if="liaotianSF=='group'" class="tab-center">{{groupname}}</view>

			<view class="tab-right" v-if="liaotianSF=='group'" @tap="togroupDetail">
			
				<view class="more-img">
					<image style="width:58rpx;height: 14rpx;" src="../../static/image/more.png"></image>
				</view>
			</view>
		</view>






		<!-- paddingBottom:inputs +'px', -->
		<!-- ,height:scorllHeight+'px' -->
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView"
			:style="{marginTop:tabBarheight+'px',paddingBottom:padingsub +'px',height:scorllHeight+'px'}">
			<pull_refresh_page v-model="refreshFlag" @refresh="onRefresh">

				<view class="chat-main" v-for="(item,index) in messagesInfos" :id="'msg'+index">
					
					<!-- 对方发送的消息 -->
					<view class="chat-ls" v-if="item.sf=='T'" :id="'msg'+index">
						<!-- <view class="chat-time">{{formate(messagesInfos[index])-formate(messagesInfos[index]-1)>5?formate(item.times):''}}</view> -->
						<view class="msg-m msg-left">

							<!-- 群聊展示的头像 -->
							<image @tap="tousermp(index)" v-if="liaotianSF=='group'" :src="messagesInfos[index].user_img" mode=""
								class="user-img"></image>

							<!-- 私聊展示的头像 -->
							<image @tap="tousermp()" v-if="liaotianSF=='siliao'" :src="siliaoinfo.user_img" mode="" class="user-img">
							</image>
							<!-- -----------------------文字-------------------- -->
							<view v-if="item.messageTYPE==1" class="message">
								<view class="nicname">{{item.nicname}}</view>
								<view class="msg-text">{{item.messageTxt}}</view>
							</view>

							<!-- -----------------------图片-------------------- -->
							<view v-if="item.messageTYPE==2" class="message">
								<view class="nicname">{{item.nicname}}</view>
								<image mode="widthFix" class="msg-img" :src="item.messageImg"
									@tap="previeImg(item.messageImg)"></image>
							</view>
							
							

							<!-- -----------------------语音-------------------- -->
							<view v-if="item.messageTYPE==3" class="message" @tap="playvoice(item.messageMp3)">
								<view class="nicname">{{item.nicname}}</view>
								<view class="msg-text voice" :style="{width:item.messageTxt*6+'px'}">
									<image src="../../static/image/yytb.png" class="voice-img"></image>
									{{item.messageTxt}}"
								</view>
							</view>


							<!-- -----------------------位置-------------------- -->
							<view v-if="item.messageTYPE==4" class="message" @tap="toMapDetail(item.covers)">
								<view class="nicname">{{item.nicname}}</view>
								<view class="msg-map">
									<view class="map-name">{{item.locationName}}</view>
									<view class="map-address">{{item.locationAddress}}</view>								
									<view class="mapFather">
										<map class="map" show-compass="true" :longitude="item.longitude" :latitude="item.latitude" :markers="item.covers"></map>
									</view>
									
								</view>
							</view>
							
							
							<!-- -----------------------文件-------------------- -->
							<view v-if="item.messageTYPE==5" class="message" @tap="handleDownLoadFile(index)">
								
								<view class="msg-file clearfix">
									<view class="fileInfo ">
										<p class="title">{{item.messageFileName}}</p>
										<p class="size">{{item.size}}kb</p>
									</view>
									<view class="fileImg" :class="item.fileImg">
										
									</view>
								</view>
							</view>
							
							
						</view>
					</view>

						<!-- 我发送的消息 -->
					<view class="chat-ls" v-if="item.sf=='W'" :id="'msg'+index">
						<view v-if="isTime" class="chat-time">{{formate(item.times)}}</view>
						<view class="msg-m msg-right">
							<image :src="my_img" mode="" class="user-img" ></image>


							<!-- -----------------------文字-------------------- -->
							<view v-if="item.messageTYPE==1" class="message">
								<view class="msg-text">{{item.messageTxt}}</view>
							</view>


							<!-- -----------------------图片-------------------- -->
							<view v-if="item.messageTYPE==2" class="message">
								<image mode="widthFix" class="msg-img" :src="item.messageImg"
									@tap="previeImg(item.messageImg)"></image>

							</view>


							<!-- -----------------------语音-------------------- -->
							<view v-if="item.messageTYPE==3" class="message" @tap="playvoice(item.messageMp3)">
								<view class="msg-text voice" :style="{width:item.messageTxt*6+'px'}">
									<image src="../../static/image/yytb.png" class="voice-img"></image>
									{{item.messageTxt}}"
								</view>
							</view>

							<!-- -----------------------位置-------------------- -->
							<view v-if="item.messageTYPE==4" class="message" @tap="toMapDetail(item.covers)">
								<view class="msg-map">
									<view class="map-name">{{item.locationName}}</view>
									<view class="map-address">{{item.locationAddress}}</view>	
									<view class="mapFather">
										<map class="map" show-compass="true" :longitude="item.longitude" :latitude="item.latitude" :markers="item.covers"></map>
									</view>
								</view>
							</view>
							
							<!-- -----------------------文件-------------------- -->
							<view v-if="item.messageTYPE==5" class="message" @tap="handleDownLoadFile(index)">
								
								<view class="msg-file clearfix">
									<view class="fileInfo ">
										<p class="title">{{item.messageFileName}}</p>
										<p class="size">{{item.size}}kb</p>
									</view>
									<view class="fileImg" :class="item.fileImg">
										
									</view>
								</view>
							</view>

						</view>
					</view>
				</view>
				<!-- <view class="padbt"></view> -->

			</pull_refresh_page>
		</scroll-view>



		<submits class="sub" @msgsImg="msgsImg" @msgs="messages" @heights="heights" :friendid="userid" :userid="myid"
			:chatSF="liaotianSF" :qunid="qunid">
		</submits>
	</view>
	<iframe class="filename" v-if="showPreview" :src="fileUrl" width='100%' height='600' frameborder='1' ></iframe>
	<!-- <mumu-previewOffce :fileUrl='fileUrl' v-model='showPreview' v-if="showPreview"></mumu-previewOffce> -->
	</view>
</template>

<script>
	import MumuPreviewOffce from '@/uni_modules/mumu-previewOffce/components/mumu-previewOffce/mumu-previewOffce.vue'
	const innerAudioContext = uni.createInnerAudioContext(); // 播放录音s
	import submits from '../../components/submit/submit.vue'
	import pull_refresh_page from '../../components/rb-pull-refresh-page/rb-pull-refresh-page.vue'
	import {
		dateTimeN
	} from '../../common/js/myfun.js'
	import {
		getonetoone,
		UpdatetipMessage
	} from '../../util/api.js'
	export default {


		data() {
			return {
				showPreview:false,	// 是否显示预览office
				fileUrl:'',			// 要预览的 文件 网络url
				// testscorll: 562,
				userid: 0, //接收者 好友 id
				myid: 0, // 发送者 id
				messagesInfos: [],
				groupname: '', //群名称
				qunid: '', // 群聊 id
				friendInfo: '', // 群聊好友信息
				siliaoinfo: '', //私聊好友信息
				liaotianSF: '', //当前是群聊还是私聊
				groupids: [], // 群聊成员的id
				my_img: '',
				imgsrc: '../../static/defatlt.jpg',
				imgArray: [], // 聊天图片查看
				scrollToView: '',
				inputs: 0,
				pages: 0, // 总页数
				Count: 0, //消息总数
				ofSet: 1, //当前页数
				sum: 10, //每页数量
				refreshFlag: false, //必须 初始值:false 根据refreshFlag监听状态
				NewscrollTop: 0, // 记录当前位置
				OldscrollTop: 0,
				isTime: false,
				scorllHeight: 0,
				oldscorllHeight: 0,
				padingsub: 70,
				windowHeight: 0, //设备屏幕高度
				tabBarheight: 45, //导航栏高度
				keyBoardHeight: 0, //键盘高度
				
				fillImg:'',
				
				// covers: [{
				// 				latitude: 39.922067,
				// 				longitude: 116.459062,
				// 				iconPath: '../../static/image/dw.png'									
				// 			 }]
			};
		},

		onLoad(option) {
			this.my_img = uni.getStorageSync('user_img')
			
			this.userid = option.userid
			this.qunid = option.qunid
			if (this.qunid) {
				this.groupname = option.qunname
				this.liaotianSF = 'group'

			} else {
				this.liaotianSF = 'siliao'
			}
			this.myid = option.fasongzeid

		},

		onReady() {
			this.my_img = uni.getStorageSync('user_img')
			this.getChat()
			this.join()
			this.getheight()


			uni.getSystemInfo({
				success: (res) => {


					// console.log(res.windowWidth);
					// console.log(res.windowHeight);
					this.windowHeight = res.windowHeight
					this.getTab_bar()
					this.heights()

				}
			});


		},

		components: {
			submits,
			pull_refresh_page,
			MumuPreviewOffce
		},

		methods: {
			scroll() {

				this.$nextTick(() => {
					setTimeout(() => {
						let index = this.messagesInfos.length - 1
						this.scrollToView = "msg" + index
					}, 200)

				});
				this.scrollToView = '' //不清空再次跳到锚点位置会不起作用
			},



			onRefresh() {
				//下拉刷新回调 //下拉加载

				this.pages = Math.ceil(this.Count / this.sum)
				this.ofSet = this.ofSet + 1


				if (this.ofSet <= this.pages) {
					//this.heights()
					this.refreshFlag = true;
					this.getChat()
				} else {
					this.refreshFlag = false;
				}

			},
			// onReload(){
			//     //上拉加载回调
			//     this.refreshFlag = false;
			// },
			formate(date, date2) {
				return dateTimeN(date, date2)
			},
			tohome() {
				uni.navigateTo({
					url: '../home/home'
				})
			},
			onPageScroll(e) {
				//this.scrollTop = e.scrollTop;
				//console.log(this.scrollTop)
			},
			async getChat() {
				let userorqunid, idLaiyuan
				if (this.userid) {
					userorqunid = this.userid
					idLaiyuan = 'user'


				} else if (this.qunid) {
					userorqunid = this.qunid
					idLaiyuan = 'group'

				}
				await getonetoone(userorqunid, this.sum, this.ofSet, idLaiyuan).then(res => {
					var middle = []
					//console.log(res)
					//this.myid = res.data.myid
					this.friendInfo = res.data.friendInfo

					for (let i = 0; i < this.friendInfo.length; i++) {
						this.groupids.push(this.friendInfo[i].userid)
					}
					//console.log(this.groupids)
					this.siliaoinfo = res.data.friendInfo[0]
					
					if (this.messagesInfos.length > 0) { // 下拉加载更多后
						//this.messagesInfos=this.messagesInfos.reverse()
						middle = res.data.messageInfo
						middle = middle.reverse()



						this.messagesInfos = [...middle, ...this.messagesInfos]
						this.messagesInfos = this.messagesInfos.reverse()
						setTimeout(() => {
							this.getheight()
						}, 100);
						var timer = setTimeout(() => {

							uni.pageScrollTo({
								scrollTop: this.scrollTop, //距离页面顶部的距离
								duration: 0
							});
							clearTimeout(timer);
						}, 10)

						this.refreshFlag = false
					} else {

						this.messagesInfos = res.data.messageInfo
						setTimeout(() => {
							this.getheight()
						}, 100)
						this.scroll()
						
						//this.messagesInfos=this.messagesInfos.reverse()
					}

					this.messagesInfos = this.messagesInfos.reverse()

					for (let j = 0; j < this.messagesInfos.length; j++) {
						for (let i = 0; i < this.friendInfo.length; i++) {
							if (this.friendInfo[i].userid == this.messagesInfos[j].userid) {
								this.messagesInfos[j].user_img = this.friendInfo[i].user_img
								this.messagesInfos[j].nicname = this.friendInfo[i].nicName
							}
						}
					}
					this.Count = res.data.Count
					

					//console.log(this.messagesInfos)
					let tmp = null
					let obj = []
					for (let i = 0; i < this.messagesInfos.length; i++) {
						
						//如果当前消息类型是图片，那就把图片添加到 图片预览数组里面
						if (this.messagesInfos[i].messageImg) {
							this.imgArray.push(this.messagesInfos[i].messageImg)
						}
						if(this.messagesInfos[i].messageTYPE === 5){
							
							obj = this.messagesInfos[i]
							tmp = obj.messageFileName.split('.')
							obj.fileImg = tmp[tmp.length-1]
							this.messagesInfos.splice(i,1,obj)

						}
						if(this.messagesInfos[i].messageTYPE === 4){
							 obj = this.messagesInfos[i]
							 obj.covers = [{
								 latitude: obj.latitude,
								 longitude: obj.longitude,
								 iconPath: '../../static/image/dw.png'	
							 }]
							 
							
							
							
							 this.messagesInfos.splice(i,1,obj)
							 console.log(this.messagesInfos[i])
						}
					}
						tmp = null;
						obj = null;


				});
					
			},
						
			// 获取输入框的内容
			messages(e) {						
				let dataInfo = {
					userid: this.myid,
					friendid: this.userid,
					messageTxt: e.messageTxt,					
					messageImg: e.messageImg,
					messageMp3: e.messageMp3,
					messageMp4: e.messageMp4,
					latitude:e.latitude,
					longitude:e.longitude,
					locationName:e.locationName,
					locationAddress:e.locationAddress,
					messageTYPE: e.messageTYPE,
					isRead: 1,
					sendTYPE: e.sendTYPE,
					
					times: e.times,
					sf: 'W',

				}
				let dataInfos = {
					userid: this.myid,
					friendid: this.userid,
					messageTxt: e.messageTxt,
					messageImg: e.messageImg,
					messageMp3: e.messageMp3,
					messageMp4: e.messageMp4,
					latitude:e.latitude,
					longitude:e.longitude,
					locationName:e.locationName,
					locationAddress:e.locationAddress,
					messageTYPE: e.messageTYPE,
					isRead: 1,
					sendTYPE: e.sendTYPE,
					chatTYPE: '',
					times: e.times,
				}
				this.messagesInfos.push(dataInfo)
				//console.log(dataInfos, this.qunid)
				this.$nextTick(function() {
					
					this.scroll()
				})
				// 消息发送到服务器
				
				if (this.userid) {
					dataInfos.chatTYPE = 'siliao'
					
					this.socket.emit('messageText', dataInfos, this.userid)
				} else if (this.qunid) {
					dataInfos.chatTYPE = 'group'
					console.log("12333333")
					this.socket.emit('messageText', dataInfos, this.qunid, this.groupids)
				}



			},
			// 图片消息 和 发送文件消息
			msgsImg(e, result) {
				let sf = "sf"
				let value = 'W'
				e[sf] = value
				//console.log(e)
				if(e.messageImg!==null){
					e.messageImg = result.filePath
				}else{
					e.messageFileName = result.fileName
					e.messageFile = result.filePath
					
					let arr = result.fileName.split('.')
					
					e.fileImg = arr[arr.length-1]
				}
				
				//console.log(e)
				this.messagesInfos.push(e)
			
				this.$nextTick(function() {
					this.scroll()
				})
			},
		
			join() {


				// console.log(Math.ceil(30/10))
				let bs = uni.getStorageSync('bs')
				//console.log('执行了join方法')
				this.socket.emit('clientMsg', bs)

				// 获取从服务器传来的  文本  数据(好友的信息)
				this.socket.on('oneToOne', (data) => {
					//console.log(123)
					let sf = "sf"
					let value = 'T'

					data[sf] = value
					this.messagesInfos.push(data)

				

					let routes = getCurrentPages() //获取当前页面栈
					let curRoute = routes[routes.length - 1].route //获取当前页面的路由



					if (curRoute.search('chatroom') != -1) {
						UpdatetipMessage(this.userid).then(res => {
							//console.log(res)
						})
					}
					this.scroll()

				})


				this.socket.on('connectToRoom', (data) => {
				
					let sf = "sf"
					let value = 'T'
					data[sf] = value
					this.messagesInfos.push(data)

					this.$nextTick(function() {
						this.scroll()
					})
					// 	let routes = getCurrentPages() //获取当前页面栈
					// 	let curRoute = routes[routes.length - 1].route //获取当前页面的路由



					// 	if(curRoute.search('chatroom') != -1){
					// 		UpdatetipMessage(this.userid).then(res=>{
					// 			//console.log(res)
					// 		})
					// 	}  connectToRoomIMG

				})





			},
			heights(e) {
				// e 为submit 的高度
				// 获取键盘高度
				uni.onKeyboardHeightChange(res => {
					this.keyBoardHeight = res.height // 键盘的高度
					
					if (this.keyBoardHeight == 0 || this.keyBoardHeight > 0) {
						this.scorllHeight = this.oldscorllHeight
					}
					this.inputs = this.keyBoardHeight


				})

				if (e > 120) {
					if (this.scorllHeight == this.oldscorllHeight) {
						this.padingsub = 20
						this.scorllHeight = this.scorllHeight - e
					}
				} else if (this.keyBoardHeight > 120) {
					if (this.scorllHeight == this.oldscorllHeight) {
						this.padingsub = 20
						this.scorllHeight = this.scorllHeight - this.keyBoardHeight - e
					}
				} else {
					this.padingsub = 70
					this.scorllHeight = this.oldscorllHeight
				}
				this.scroll()





				// this.scorllHeight=this.scorllHeight-this.inputs



			},
			getheight() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.chat').boundingClientRect(data => {

					//console.log(data.height)
					this.OldscrollTop = this.NewscrollTop

					this.NewscrollTop = data.height


					if (this.OldscrollTop > 0) {
						var timer = setTimeout(() => {
							this.OldscrollTop = 0 - this.OldscrollTop
							uni.pageScrollTo({
								scrollTop: this.NewscrollTop - this.OldscrollTop - 60, //距离页面顶部的距离
								duration: 0
							});
							clearTimeout(timer);
						}, 100)
					}

					// if(this.ofSet<this.pages){
					// 	this.scrollTop=data.height
					// }

					// this.$emit('heights', data.height)
				}).exec();
			},
			getTab_bar() {

				const query = uni.createSelectorQuery().in(this);
				query.select('.tab-bar').boundingClientRect(data => {
					// console.log(this.windowHeight)
					// console.log(data.height)
					// console.log(this.inputs)
					this.scorllHeight = this.windowHeight - data.height - this.inputs
					this.oldscorllHeight = this.scorllHeight
					//console.log(this.scorllHeight)
				}).exec();
			},
			// 预览图片
			previeImg(imgurl) {
				let index = 0

				//console.log(this.imgArray)
				for (let i = 0; i < this.imgArray.length; i++) {
					if (this.imgArray[i] == imgurl) {

						index = i
						break
					}

				}


				uni.previewImage({
					current: index,
					urls: this.imgArray,

					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							// 点击取消后来到这里
							
						}
					}
				})
			},
			// 播放语音
			playvoice(e) {
				//console.log(e)

				innerAudioContext.autoplay = true;
				innerAudioContext.src = e;
				innerAudioContext.onPlay(function() {
					//console.log('开始播放');
				});

				// innerAudioContext.onError((res) => {
				//   console.log(res.errMsg);
				//   console.log(res.errCode);
				// });
			},
			togroupDetail(){
				uni.navigateTo({
					url:`../groupdetail/groupdetail?qunid=${this.qunid}&&myid=${this.myid}`
				})
			},
			tousermp(index){
				let id=0
				let qunnicname=''
				
				if(this.liaotianSF=='siliao'){
					
					id=this.userid
					qunnicname=''
				}else{
					
					id=this.messagesInfos[index].userid
					for(let i=0;i<this.friendInfo.length;i++){
						if(this.friendInfo[i].userid==id){
							qunnicname=this.friendInfo[i].nicName
							break
						}
					}
					
				}
				
				uni.navigateTo({
					url:`../usermp/usermp?id=${id}&&qn=${qunnicname}&&ly=${this.liaotianSF}`
				})
			},
			handleDownLoadFile(i){
				console.log(this.messagesInfos[i])
				if(this.messagesInfos[i].fileImg === 'pdf'){
					 this.fileUrl = this.messagesInfos[i].messageFile
				}else{
					 //this.fileUrl = this.messagesInfos[i].messageFile
					 let url = `https://view.xdocin.com/view?src=${this.messagesInfos[i].messageFile}`
					 this.fileUrl = url
					console.log(url)
				}
				
				this.showPreview = !this.showPreview;
				
			
			},
			toMapDetail(covers){
				covers[0].id=101
				covers = JSON.stringify(covers)
				console.log(covers)
				uni.navigateTo({
					url:`../mapDetail/mapDetail?detail=${covers}`
				})
			}

		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";

	page {
		background-color: rgba(244, 244, 244, 1);
	}

	.clearfix::after{
		content: '';
		display: block;
		clear: both;
	}
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

	.chat {
		background: rgba(244, 244, 244, 0.96);
		height: 100%;
		//background-color: yellow;
		box-sizing: border-box;
		//height: 100%;
		
		padding-top: var(--status-bar-height);
		margin-top: 88rpx;
		z-index: 999;

		.padbt {
			height: var(--status-bar-height);
			width: 100%;
		}

		.chat-main {
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			// padding-top: 100rpx;
			// padding-bottom: 120rpx;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;


		}

		.chat-ls {
			.chat-time {
				font-size: $uni-font-size-sm;
				color: rgba(39, 40, 50, 0.3);
				padding: 20rpx 0;
				text-align: center;
				line-height: 34rpx;

			}

			.msg-m {
				display: flex;
				padding: 20rpx 0;

				.user-img {
					flex: none;
					width: $uni-img-size-base;
					height: $uni-img-size-base;
					border-radius: $uni-border-radius-base;
				}
				
				.message {
					flex: none;
					max-width: 480rpx;

					.msg-text {

						font-size: $uni-font-size-lg;
						color: $uni-text-color;
						padding: 18rpx 24rpx;
						line-height: 44rpx;
					}

					.msg-img {
						max-width: 400rpx;
						max-height: 400rpx;
						border-radius: $uni-border-radius-base;
					}
				
					.msg-map {
						background-color: white;
						width: 464rpx;
						height: 284rpx;
						overflow: hidden;

						.map-name {
							font-size: $uni-font-size-lg;
							color: $uni-text-color;
							line-height: 44rpx;
							padding: 18rpx 24rpx 0 24rpx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
						}

						.map-address {
							font-size: $uni-font-size-sm;
							color: $uni-text-color-disable;
							padding: 0 24rpx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;

						}

						.map {
							width: 464rpx;
							height: 190rpx;
							padding-top: 8rpx;
							position: absolute;
							top: 0;
							left: 0;
							z-index: 0;

						}
						.mapFather{
							position: relative;
							
							width: 464rpx;
							height: 190rpx;
							padding-top: 8rpx;
						}
					}


				}
				.nicname{
					font-size: 20rpx;
					display: -webkit-box;
					color: #555555;
					margin-bottom: 5rpx;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					padding-left: 24rpx;
				}
			}

			.msg-left {
				flex-direction: row;

				.msg-text {
					margin-left: 16rpx;
					background-color: #fff;
					border-radius: 0 20rpx 20rpx 20rpx;
				}

				.msg-img {
					margin-left: 16rpx;
				}

				.msg-map {
					margin-left: 16rpx;
					border-radius: 0 20rpx 20rpx 20rpx;
				}
				.msg-file{
					width: 480rpx;
					margin-right: 16rpx;
					background-color:#fff;
					border-radius: 0 10px 10px 10px;
					.fileImg{
						float:left;
						display: inline-block;
						margin-right: 20rpx;
						width: 100rpx;
						height: 120rpx;
						
						background-image: url("../../static/image/fileType2.png");
						background-repeat: no-repeat;
						
						
					}
					.pdf{
						background-position: -1552rpx -700rpx;
					}
					.doc,.docx{
						background-position: -694rpx -700rpx;
					}
					.xlsx,.xls{
					
						background-position: -1126rpx -1640rpx;
					}
					.zip,.war,.rar,.7z{
						background-position: -266rpx -2096rpx;
					}
					.fileInfo{
						display: inline-block;
						
						.title{
							margin-top: 12rpx;
							font-size: 16px;
							width: 340rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							-o-text-overflow:ellipsis;
							
						}
						.size{
							padding-top: 12rpx;
							font-size: 12px;
							color: #adaeae;
						}
						p{
							
							padding-left: 20rpx;
						}
					}
					
				}

				.voice {
					max-width: 400rpx;
					min-width: 80rpx;
					text-align: right;
				}

				.voice-img {
					float: left;
					width: 44rpx;
					height: 44rpx;
				}
			}

			.msg-right {
				flex-direction: row-reverse;

				.msg-text {
					margin-right: 16rpx;
					background-color: #fff260;
					border-radius: 0 20rpx 20rpx 20rpx;
				}
				
				.msg-img {
					margin-right: 16rpx;
				}

				.msg-map {
					margin-right: 16rpx;
					border-radius: 20rpx 0rpx 20rpx 20rpx;
				}
				
				.msg-file{
					width: 480rpx;
					margin-right: 16rpx;
					background-color:#fff;
					.fileImg{
						float:right;
						display: inline-block;
						margin-right: 20rpx;
						width: 100rpx;
						height: 120rpx;
						
						background-image: url("../../static/image/fileType2.png");
						background-repeat: no-repeat;
						
						
					}
					.pdf{
						background-position: -1552rpx -700rpx;
					}
					.doc,.docx{
						background-position: -694rpx -700rpx;
					}
					.xlsx,.xls{
						background-position: -1126rpx -1640rpx;
					}
					.zip{
						
						background-position: -266rpx -2096rpx;
					}
					.fileInfo{
						display: inline-block;
						
						.title{
							margin-top: 12rpx;
							font-size: 16px;
							width: 340rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							-o-text-overflow:ellipsis;
							
						}
						.size{
							padding-top: 12rpx;
							font-size: 12px;
							color: #adaeae;
						}
						p{
							
							padding-left: 20rpx;
						}
					}
					
				}

				.voice {
					max-width: 400rpx;
					min-width: 80rpx;
					text-align: left;
				}

				.voice-img {
					float: right;
					transform: rotate(180deg);
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>
