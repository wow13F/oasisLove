<template>
	<view class="content">
		<view class="submit">


			<view class="submit-chat">
				<view class="bt-img" @tap="keyOrrecord">
					<image :src="record"></image>
				</view>

				<textarea adjust-position="false" disable-default-padding="true" :cursor-spacing="subheight"
					@focus="focu" @blur="focu" v-show="qh" auto-height="true" class="chat-send btn" @input="inputs"
					v-model="msg">
				</textarea>
				<view v-show="!qh" class="record btn" @touchstart="touchstart" @touchend="touchend"
					@touchmove="touchmove">按住说话</view>

				<view class="bt-img" @tap="showemoji">
					<image src="../../static/image/biaoqing.png"></image>
				</view>

				<view class="bt-img" @tap="more">
					<image src="../../static/image/tianjia.png"></image>
				</view>
			</view>


			<view class="emoji" :style="{height:260}" v-show="isemoji" @tap="getheight()">

				<emoji @emojis="emojis"></emoji>
				<view class="emoji-send">
					<view @tap="backspc" class="emoji-send-del">
						<image src="../../static/image/bkspace.png"></image>
					</view>
					<view class="emoji-send-btn" @tap="sendEmoji">发送</view>
				</view>
			</view>


			<view class="more" :style="{height:260}" v-show="ismore" @tap="getheight()">
				<view @tap="sendImg('album')" class="more-list">
					<image src="../../static/image/tp.png"></image>
					<view class="more-list-title">图片</view>
				</view>

				<view @tap="sendImg('camera')" class="more-list">
					<image src="../../static/image/paishe.png"></image>
					<view class="more-list-title">拍摄</view>
				</view>

				<view class="more-list" @tap="liveplay">
					<image src="../../static/image/yuyinth.png"></image>
					<view class="more-list-title">语音通话</view>
				</view>

				<view class="more-list" @tap="live">
					<image src="../../static/image/shiping.png"></image>
					<view class="more-list-title">视频通话</view>
				</view>

				<view class="more-list" @tap="chooseLocation">
					<image src="../../static/image/weizhi.png"></image>
					<view class="more-list-title">位置</view>
				</view>

				<view class="more-list" @tap="chooseFile">
					<image src="../../static/image/uploadFile.png"></image>
					<view class="more-list-title">文件</view>
				</view>

				<view class="more-list" @tap="businessCard">
					<image src="../../static/image/kard.png"></image>
					<view class="more-list-title">名片</view>
				</view>

			</view>
		</view>

		<view v-show="isvoice" class="voice-bg">
			<view class="close" :class="{ 'anxia': isanxia }">x</view>
		</view>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager() // 录音API
	const innerAudioContext = uni.createInnerAudioContext()
	import {
		baseUrl
	} from "../../util/config.js"
	import emoji from '../emoji/emoji.vue'
	import {
		dateTimeSend,
		Filepath
	} from '../../common/js/myfun.js'
	export default {
		props: ["friendid", "userid", "chatSF", "qunid"],
		data() {
			return {
				qh: true,
				record: '../../static/image/yuyin.png', // 键盘或者语音图片路径
				isemoji: false,
				ismore: false,
				subheight: 0, //submit高度
				msg: '',
				times: '', // 时间格式 2022-09-22 12:22:56
				filepath: '',
				tempFilePath: '',
				fid: 0, // 好友id
				groupid: '', // 群聊id
				fasongzeid: 9, // 发送者id
				chatsSF: '', // 聊天身份 群聊还是私聊
				dataInfoImg: {},
				dataInfo: {},
				luyin: '', // 录音定时器
				luyinTime: 1, //录音时长
				dataInfoMp3: {}, // 语音对象
				isvoice: false, // 语音遮罩层是否显示
				isanxia: false, //取消按钮,
				pagex: 0, // 取消按钮 x 轴位置
				pagey: 0, // 取消按钮 y 轴位置
				lastpageX: 0,
				lastpageY: 0,
				submitHeight: 0, // submit 高度
				isvoicesend: true, // 是否发送语音
			}
		},
		components: {
			emoji
		},
		created() {
			var that = this
			this.fid = that.friendid
			this.fasongzeid = that.userid
			this.chatsSF = that.chatSF
			this.groupid = that.qunid		
		},
		onReady() {
			setTimeout(() => {
				this.getheight()
			}, 20)
		},
		methods: {
			// 关闭 表情 和 更多功能
			keyOrrecord() {				
				this.isemoji = false
				this.ismore = false
				setTimeout(() => {
					this.getheight()
				}, 20)
				if (this.qh) {
					this.record = '../../static/image/jianpan.png'
					this.qh = false
				} else {
					this.record = '../../static/image/yuyin.png'
					this.qh = true
				}
			},
			emojis(e) {				
				this.msg = this.msg + e			
			},
			// 表情
			showemoji() {
				this.ismore = false
				this.isemoji = !this.isemoji
				this.qh = true
				this.record = '../../static/image/yuyin.png'
				setTimeout(() => {
					this.getheight()
				}, 20)
			},
			// 文字发送
			inputs(e) {
				
				if(e){
					let chatmsg = e.detail.value
					let pos = chatmsg.indexOf('\n')
					if (pos != -1 && chatmsg.length > 1) {
						this.dataInfo = {
							messageImg: null,
							messageMp3: null,
							messageMp4: null,
							messageTYPE: 1,
							messageTxt: this.msg,
							sendTYPE: 1,
							times: dateTimeSend(new Date()),
											
						}
						//console.log(this.dataInfo)
						this.$emit('msgs', this.dataInfo)
						setTimeout(() => {
							this.msg = ''
						}, 10)
					}
				}else{
					this.dataInfo = {
						messageImg: null,
						messageMp3: null,
						messageMp4: null,
						messageTYPE: 1,
						messageTxt: this.msg,
						sendTYPE: 1,
						times: dateTimeSend(new Date()),
										
					}
					//console.log(this.dataInfo)
					this.$emit('msgs', this.dataInfo)
					setTimeout(() => {
						this.msg = ''
					}, 10)
				}
				
			},

			// 输入框获得焦点
			focu() {

				this.isemoji = false
				this.ismore = false
				setTimeout(() => {
					this.getheight()
				}, 20)
			},
			// 发送表情
			sendEmoji() {
				this.inputs()
				
			},

			// 更多 显示与隐藏
			more() {
				this.isemoji = false
				this.ismore = !this.ismore
				this.qh = true
				this.record = '../../static/image/yuyin.png'
				setTimeout(() => {
					this.getheight()
				}, 20)

			},
			backspc() {
				if (this.msg.length > 0) {
					this.msg = this.msg.substr(0, this.msg.length - 2)
				}
			},
			
			// 获取页面高度
			getheight() {

				const query = uni.createSelectorQuery().in(this);
				query.select('.submit').boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					// console.log("节点离页面顶部的距离为" + data.top);
					this.$emit('heights', data.height)
					this.subheight = data.height
				}).exec();
			},

			// 发送图片 或者 拍摄
			sendImg(x) {
				let count = 1
				if (x == 'album') {
					count = 10
				} else {
					count = 1
				}

				uni.chooseImage({
					count: count, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: [x],
					success: (res) => {
						//console.log(JSON.stringify(res.tempFilePaths));
						this.tempFilePath = res.tempFilePaths
						this.confirm()
					}
				});
			},

			// 上传文件
			confirm(type="img") {			
				let that = this;
				this.filepath = Filepath(new Date())	//this.filepath ：用当前时间作为文件夹名称
				this.time = Date.now()
				this.times = dateTimeSend(new Date())
				let messageImg=null;
				let messageFile=null;
				let url = ''
				let filepath = ''
				let size=[];
				let messageTYPE =-1;
				if(type === "img"){
					
					messageImg = ''
					messageFile = null
					url=`${baseUrl}/upload/chatImg`
					filepath = 'public/chatImages/' + this.filepath // 文件全路径
					messageTYPE = 2
					upFile(this)
				}else{
					filepath = 'public/chatFiles/' + this.filepath // 文件全路径
					messageImg = null
					messageFile = ''
					url=`${baseUrl}/upload/chatFile`
					filepath = filepath
					messageTYPE = 5
					for(let i =0 ;i<this.tempFilePath.length;i++){
						
						uni.getFileInfo({
							
							filePath:that.tempFilePath[i],
							
							success(res) {
								
								
								size.push(Math.floor(res.size/1000))
								
								upFile(that,5)
								
							}
						})
					}		
					
				}
				
				
				function upFile(that){																			
					// 上传图片和文件					
					for (let i = 1; i <= that.tempFilePath.length; i++) {										
						that.dataInfoImg = {				
							friendid: that.fid,
							messageTxt: null,
							messageImg: messageImg,
							messageMp3: null,
							messageMp4: null,
							messageTYPE: messageTYPE,
							messageFile:messageFile,
							isRead: 1,
							sendTYPE: 1,
							times: that.times,
							size:size[i-1],
							messageFileName:'',
						}
						
						//sthis.filename = i
						
						uni.uploadFile({
							url: url,
							filePath: that.tempFilePath[i - 1],
							name: 'file',
							header: {
					
								Authorization: uni.getStorageSync('token')
							},
							formData: {
								filepath: filepath,
								filename: that.filename,
								time: that.time,
								friendid: that.fid,
								times: that.times,
								chatSF: that.chatsSF,
								qunid: that.groupid,
								fileType:type,
								size:size[i-1],
					
					
							},
							success: (res) => {
								
								let result = JSON.parse(res.data)
							    that.$emit('msgsImg', that.dataInfoImg, result)
								
								// 向接收消息的人推送提醒 （图片消息 和 上传文件消息）
								let arr = result.fileName.split('.')
								that.socket.emit('messageIMG', {
									messageImg: that.dataInfoImg.messageImg,
									messageFile:that.dataInfoImg.messageFile,
									messageFileName:that.dataInfoImg.messageFileName,
									messageTYPE: that.dataInfoImg.messageTYPE,
									friendid: that.fid,
									userid: that.fasongzeid,
									qunid: that.groupid,
									size: that.dataInfoImg.size,
									fileImg:arr[arr.length-1]
					
								})
								
					
							}
						})
					}
				}

			},

			// 开始录音
			touchstart(e) {
				this.isvoice = true // 遮罩层显示
				recorderManager.start();
				this.lastpageX = e.changedTouches[0].pageX
				this.lastpageY = e.changedTouches[0].pageY
				console.log(e.changedTouches[0].pageY)
				this.$nextTick(() => {

					const query = uni.createSelectorQuery().in(this);
					query.select('.close').boundingClientRect(data => {
						//console.log("得到布局位置信息" +JSON.stringify(data));
						//console.log("节点离页面顶部的距离为" + data.top); 
						this.pagey = data.bottom
						this.pagex = data.left
					}).exec();

					query.select('.submit').boundingClientRect(data => {
						//console.log("得到布局位置信息" +JSON.stringify(data));
						//console.log("节点离页面顶部的距离为" + data.height); 
						this.submitHeight = data.height
					}).exec();

				})




				this.luyin = setInterval(() => {
					this.luyinTime = this.luyinTime + 1
				}, 1000)
				if (this.luyinTime == 60) {
					clearInterval(this.luyin)
					this.touchend()
				}

			},
			touchend() {

				clearInterval(this.luyin)
				setTimeout(function(){
					recorderManager.stop();
				},1000)

				recorderManager.onStop((res) => {
					this.dataInfoMp3 = {


						messageTxt: this.luyinTime,
						messageImg: null,
						messageMp3: res.tempFilePath,
						messageMp4: null,
						messageTYPE: 3,

						sendTYPE: 1,
						times: dateTimeSend(new Date()),
					}

					this.luyinTime = 1
					this.time = Date.now()

					this.isvoice = false // 关闭遮罩层
					if (this.isvoicesend) {
						uni.uploadFile({
							url: `${baseUrl}/upload/chatMp3`, 
							filePath: res.tempFilePath,
							name: 'file',
							header: {
							
								Authorization: uni.getStorageSync('token')
							},
							formData: {
								filepath: 'public/chatMp3s/' + this.filepath,
								filename: 'lv_',
								time: this.time,
								friendid: this.fid,
								times: this.times,
								chatSF: this.chatsSF,
								qunid: this.groupid
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
								this.dataInfoMp3.messageMp3='http://192.168.137.1:3007/'+uploadFileRes.data
								this.$emit('msgs', this.dataInfoMp3)
							}
						});
						
					}
					//res.tempFilePath;
				});

				this.isanxia = false
			},
			touchmove(e) {
				//console.log(this.lastpageY-e.changedTouches[0].pageY)
				if ((this.lastpageY - e.changedTouches[0].pageY) >= (this.pagey / 2 - this.submitHeight * 2 - 55)) {
					this.isanxia = true
					this.isvoicesend = false
					//this.isvoice = false

					//console.log(this.pagey)
					//console.log(e.changedTouches[0].pageY)
				} else {
					this.isvoicesend = true
					this.isanxia = false
				}

			},
			// 视频通话
			live() {
				
				uni.navigateTo({
					url: `../../pages/live/live?friendId=${this.fid}&&fasongzeid=${this.fasongzeid}&&type=sp`
				})
			},
			// 语音通话
			liveplay() {
				uni.navigateTo({
					url: `../../pages/live/live?friendId=${this.fid}&&fasongzeid=${this.fasongzeid}&&type=yy`
				})
			},
			
				
				//发送位置
			chooseLocation(){
				uni.chooseLocation({
				    success:  (res)=> {
				        // console.log('位置名称：' + res.name);
				        // console.log('详细地址：' + res.address);
				        // console.log('纬度：' + res.latitude);
				        // console.log('经度：' + res.longitude);
						let LocationInfo={
							name:res.name,
							address:res.address,
							latitude:res.latitude,
							longitude:res.longitude
						}
						this.dataInfo = {
							messageImg: null,
							messageMp3: null,
							messageMp4: null,
							latitude:res.latitude,
							longitude:res.longitude,
							locationName:res.name,
							locationAddress:res.address,
							messageTYPE: 4,
							messageTxt: '',
							sendTYPE: 1,
							times: dateTimeSend(new Date()),
						
						}
						this.$emit('msgs', this.dataInfo)
				    }
				});
			},
			
			
			// 选择文件
			chooseFile(){
				let that = this;
				uni.chooseFile({
				  count: 10, //默认100
				  extension:['.zip','.rar','.7z','.war','.doc','.xls','.xlsx','.docx','.pdf'],				  
					success: function (res) {						
						that.tempFilePath = res.tempFilePaths									
						that.confirm("file")
					},
				
				});
			},
			
			
			// 发送名片
			businessCard(){
				alert("此功能正在开发...")
				// uni.navigateTo({
				// 	url:'../../pages/chooseBusinessCard/chooseBusinessCard'
				// })
			}

		}
	}
</script>

<style lang="scss">
	.submit {
		background: rgba(244, 244, 244, 0.96);
		border-top: 1px solid $uni-border-color;
		width: 100%;

		position: fixed;
		bottom: 0;
		z-index: 101;
		padding-bottom: 20rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.submit-chat {
		width: 100%;

		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		padding: 14rpx 14rpx;

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
