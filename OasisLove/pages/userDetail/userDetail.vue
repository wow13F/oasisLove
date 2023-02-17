<template>
	<view class="content">
		<view class="tab-bar">
			<view class="tab-left" @tap="toback()">
				<image class="back" src="../../static/image/back.png"></image>
			</view>
			<view class="tab-center" style="font-size: 40rpx;">详情</view>

		</view>

		<view class="main">
			<view class="column heads">
				<view class="row head">
					<view class="title">头像</view>
					<view class="cont">
						<!-- <image :src="imgUrl" class="user-img"></image> -->

						<!-- <button @tap="upload" >上传</button> -->
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
						<image @tap="upload" :src="user_img" class="user-img" mode="aspectFit"></image>
						

					</view>
					<view class="more" @tap="upload">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
				</view>

				<view class="row">
					<view class="title">签名</view>
					<view class="cont">{{autograph}}</image>
					</view>
					<view class="more" @tap="modify('签名')">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
				</view>


				<view class="row">
					<view class="title">注册</view>
					<view class="cont">2020-04-04 22:23:14</image>
					</view>

				</view>
			</view>

			<!-- 第二块  ------------------------------>
			<view class="column">
				<view class="row">
					<view class="title">昵称</view>
					<view class="cont">{{nicName}}</view>
					<view class="more" @tap="modify('昵称')">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
				</view>

				<view class="row">
					<view class="title">性别</view>
					<view class="cont">
						<picker @change.stop="bindPickerChange"  :range="array">
							<view class="uni-input">{{gender}}</view>
						</picker>
					</view>
					<view class="more">
						<picker @change.stop="bindPickerChange"  :range="array">
							<view class="uni-input">
								<image src="../../static/image/back.png" mode="aspectFit"></image>
							</view>
						</picker>

					</view>
				</view>


				<view class="row">
					<view class="title">生日</view>
					<view class="cont">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{birthday}}</view>
						</picker>
					</view>
					<view class="more">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">
								<image src="../../static/image/back.png" mode="aspectFit">
								</image>
							</view>
						</picker>

					</view>
				</view>

				<view class="row">
					<view class="title">电话</view>
					<view class="cont">{{phone}}</view>
					<view class="more" @tap="modify('电话')">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
				</view>

				<view class="row">
					<view class="title">邮箱</view>
					<view class="cont">{{email}}</view>
					<view class="more" @tap="modify('邮箱')">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>

			<!-- 第三块 ---------------------------------------->
			<view class="column">
				<view class="row">
					<view class="title">密码</view>
					<view class="cont">******</view>
					<view class="more" @tap="modify('密码')">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>


			<!-- 第四块 ---------------------------------------->
			<view class="btn2" @tap="outLogin">
				退出登录
			</view>

			<!-- ------------------------修改内容组件-------------------- -->
			<view v-show="isshow" class="modify" :style="{bottom:-+modifyHeight+'px'}" :animation="animationData">
				<view class="modify-header">
					<view class="close" @tap="modify">取消</view>
					<view class="title">{{biaoti}}</view>
					<view class="define" @tap="updateuserInfo(),modify()">确定</view>
				</view>
				<view class="modify-main">
					<input v-if="isShowPwd" type="text" v-model="pwd" class="modify-pwd" placeholder="输入原密码"
						placeholder-style="color:#aaa;font-weight:400;" />

					<textarea v-model="data" class="modify-content" maxlength="12" ></textarea>
				</view>
			</view>
			
		</view>
		
			<bottom></bottom>
		
	</view>
	
</template>

<script>
	import { baseUrl } from "../../util/config.js"
	import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";
	import {dateFormate,dateTime} from '../../common/js/myfun.js'
	import {
		upuserImg,getUserInfo,updateUserInfos,updatepwd
	} from '../../util/api.js';
		import bottom from '../bottom/bottom.vue'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				data: '',
				array: ['男', '女', '偏男', '偏女', '两性', '未知'],
				deftxt:'', //
				date: currentDate,
				tempFilePath: '',
				cropFilePath: '../../static/img/a1.png',
				
				animationData: {}, // 动画
				ismodify: false, // 是否弹窗
				modifyHeight: 0, // 弹窗高度
				isshow: false, // 弹窗是否显示
				biaoti: '', // 弹窗标题
				isShowPwd: false,
				user_img:'', //用户头像
				autograph:'' ,//个性签名
				nicName:''  ,// 昵称
				gender:'', //性别
				birthday:'',//生日
				phone:'' ,// 电话
				email:'',//邮箱
				pwd: '', // 密码
				ziduanValue:[] // value数组值
				
				
				
			};
		},
		components: {
			ImageCropper,
			bottom
		},
		onReady() {
			this.getheight(),
			this.getUser()
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			
			getUser(){
				getUserInfo(0).then((res)=>{
					
					 console.log(res)
					
					this.user_img=res.data.result[0].user_img
					if(res.data.result[0].user_img){
						this.user_img=this.user_img.replace(/\\/,'/')
					}
					this.autograph=res.data.result[0].autograph
					this.email=res.data.result[0].email
					this.nicName=res.data.result[0].nicName
					this.gender=res.data.result[0].gender
					this.birthday=res.data.result[0].birthday
					this.phone=res.data.result[0].phone
					this.birthday=this.formatdate(this.birthday)
					uni.setStorageSync('user_img', res.data.result[0].user_img);
					
					
				})
			},
			formatdate(data){
				
				return dateFormate(data)
			},
			tologin() {
				uni.navigateBack({
					delta: 1
				})
			},
			outLogin(){
				uni.setStorageSync('token', '');
				uni.setStorageSync('bs', '');
				uni.navigateTo({
					url:'../login/login'
				})
			},
			// 性别选择器	
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value)
				//this.index = e.target.value
				this.gender=this.array[e.target.value]
				this.ziduan='gender'
				this.updateuserInfo()
			},
			// 日期选择器
			bindDateChange: function(e) {
				this.birthday=e.target.value
				//this.date = e.target.value
				this.updateuserInfo()
			},
			updateuserInfo(){

			 
				if(this.biaoti=='签名'){
					
					this.autograph=this.data
					this.data=''
					
				}
				else if(this.biaoti=='昵称'){
					this.nicName=this.data
					this.data=''
				}
				
				else if(this.biaoti=='电话'){
					
					
					
					if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.data))){
						this.phone=''
						this.data=''
						uni.showModal({
						    title: '提示',
						    content: '请输入正确的手机号!',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            // console.log('用户点击确定');
						        }
						    }
						});
					}
					this.phone=this.data
					this.data=''
					
				}
				
				else if(this.biaoti=='邮箱'){
						
					if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.data))){
						this.email=''
						this.data=''
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
						
						
					}
					this.email=this.data
					this.data=''
				}
				
				else if(this.biaoti=='密码'){
					
					if(this.pwd.length>=6 && this.pwd.length<=12){
						updatepwd(this.pwd,this.data).then((res)=>{
							console.log(res)
							this.data=''
						})
					}
					else{
						uni.showModal({
						    title: '提示',
						    content: '请输入正确的密码!',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            // console.log('用户点击确定');
						        }
						    }
						});
						this.data=''
					}
					return 0
				}
				
				this.ziduanValue[0]=this.autograph
				this.ziduanValue[1]=this.nicName
				this.ziduanValue[2]=this.gender
				this.ziduanValue[3]=this.birthday
				this.ziduanValue[4]=this.phone
				this.ziduanValue[5]=this.email
				updateUserInfos(this.ziduanValue).then((res)=>{
					//console.log(res)
				})
				
				
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 0;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},

			// 图片裁剪
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					//sourceType: ['album'], //从相册选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift()
					}
				});
			},
			confirm(e) {
				this.cropFilePath = e.detail.tempFilePath
				this.user_img=this.cropFilePath
				
				uni.uploadFile({
					url: `${baseUrl}/my/upuserImg`,
					filePath: this.tempFilePath,
					name: 'file',
					header:{
						
						 Authorization:uni.getStorageSync('token')
					},
					success: (uploadFileRes) => {
						
						console.log(uploadFileRes.data);
						uni.setStorageSync('user_img', uploadFileRes.data.path);
						
					}
				})
				// console.log(this.tempFilePath)
				this.tempFilePath = ''
				
				

			},
			cancel() {
				//console.log('canceled')
			},

			// 获取页面高度
			getheight() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.modify').boundingClientRect(data => {

					this.modifyHeight = data.height
				}).exec();
			},

			// 动画函数
			modify(bt) {
				
				this.biaoti = bt
				if (this.biaoti == '密码') {
					
					this.isShowPwd = true
				} else {
					if(this.biaoti=='昵称'){this.data=this.nicName}
					else if(this.biaoti=='签名'){this.data=this.autograph}
					else if(this.biaoti=='电话'){this.data=this.phone}
					else if(this.biaoti=='邮箱'){this.data=this.email}
					this.isShowPwd = false
				}
				this.isshow = !this.isshow
				this.ismodify = !this.ismodify
				var animation = uni.createAnimation({
					duration: 1000,
					timingFunction: 'ease',
				})

				if (this.ismodify) {
					animation.bottom(0).step()
				} else {
					animation.bottom(-this.modifyHeight).step()
				}
				this.animationData = animation.export()
				
				return 0
			},
			toback(){
				uni.navigateBack({
					delta:1
				})
			}

		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";

	.tab-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1px solid $uni-border-color;
		.tab-left{
			width: 40rpx;
			height: 40rpx;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}

.bottom{
	width: 100%;
	height: 164rpx;
	position: absolute;
	bottom: 0;
	
	
	background-color: red ;
}
	.main {
		padding-top: 118rpx;
		padding-bottom: 164rpx;
		display: flex;
		flex-direction: column;

		.column {
			display: flex;
			flex-direction: column;
			padding-top: 12rpx;
			border-bottom: 1px solid $uni-border-color;
			width: 100%;

			.row {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
			}

			.title {
				flex: none;
				padding: 0 $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 112rpx;
			}

			.head {
				height: 148rpx;
				display: flex;
				align-items: center;
			}

			.user-img {
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
				border-radius: $uni-border-radius-base;
			}

			.cont {
				
				
				width: 558rpx;
				
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis !important;
				height: 112rpx;
				// display: flex;
				// flex-wrap: nowrap;
				// align-items: center;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-grey;
				 line-height: 112rpx;
				-webkit-line-clamp:1;
			}
			

			.more {
				flex: none;
				height: 112rpx;
				display: flex;
				align-items: center;

				image {
					width: 80rpx;
					height: 28rpx;
					transform: rotate(180deg);
				}
			}
		}

		.btn2 {
			text-align: center;
			margin-top: 40rpx;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 88rpx;
		}
	}

	.modify {

		position: absolute;
		z-index: 999;
		// bottom: 0;
		left: 0;


		height: 100%;
		width: 100%;
		background-color: #FFFFFF;

		.modify-header {
			width: 100%;
			height: 88rpx;
			padding-top: var(--status-bar-height);
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid $uni-border-color;

			.close {
				padding-left: 32rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}

			.title {
				flex: auto;
				text-align: center;
				font-size: 40rpx;
				color: $uni-text-color;
				line-height: 88rpx;
			}

			.define {
				padding-right: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-color-success;
				line-height: 44rpx;
			}
		}

		.modify-main {
			display: flex;
			padding: $uni-spacing-col-base;
			flex-direction: column;

			.modify-pwd {
				padding: 0 20rpx;
				box-sizing: border-box;
				width: 100%;
				// flex: auto;
				height: 88rpx;
				margin-bottom: $uni-spacing-col-base;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 88rpx;
			}

			.modify-content {
				padding: 16rpx 20rpx;
				flex: auto;
				width: 100%;
				box-sizing: border-box;
				height: 386rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
		}
	}
</style>
