<template>
	<view class="content">
		<view class="tab-bar">
			<view class="tab-left" @tap="toback()">
				<image class="back" src="../../static/image/back.png"></image>
			</view>
			<view class="tab-center" style="font-size: 40rpx;">创建群聊</view>
		
		</view>
		
		<view class="main">
			<view class="group-img">
				
				 <image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
				 <image @tap="upload" :src="qun_img" class="group-img" mode="aspectFit"></image>
			</view>
			
			<view class="group-name">
				<input class="group-name-input" v-model="qunName" type="text" placeholder="群聊的名称" placeholder-style="color:#aaa;" maxlength="20" />
			</view>
			
			<view class="friends">
				<view class="title">好友</view>
				
				<view class="user" v-for="(item,index) in friendList" :ket="index">
					<view class="selected" @tap="select(index)">
						<image v-if="friendList[index].isduigou" :key="index"  src="../../static/image/duigou.png" mode="" class="duigou"></image>
					</view>
					<image class="user-img" :src="item.friendimg" mode=""></image>
					<view class="name">{{item.friendremarks?item.friendremarks:item.friendnicname}}</view>
				</view> 
				
				
			</view>
			
			<view class="bottom-bar" @tap="creategroups">
				<view class="bottom-btn" :class="{btn1:selectNum}">创建群聊({{num}})</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { baseUrl } from "../../util/config.js"
	import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";
	import { creategroup,getfriends } from '../../util/api.js'
	import {dateTimeSend} from '../../common/js/myfun.js'
	export default {
		data() {
			return {
				tempFilePath:'',
				tempFilePath2:'',
				cropFilePath: '../../static/img/a1.png',
				qun_img:'',		// 群头像
				qunName:'',		// 群名称
				isduigou:false,	// 是否显示对勾，是否选中
				friendList:[],	// 好友列表
				selectNum:false,	// 选中好友数量是否大于零
				ids:[],				// 选中的好友
				num:0				,// 选中好友数量
				usreinfo:{},		// 用户自己的信息
			}
		},
		components: {
			ImageCropper
		},
		onLoad() {
			this.join()
		},
		methods: {
			toback(){
				uni.navigateBack({
					delta:1
				})
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
				this.qun_img=this.cropFilePath
				
				uni.uploadFile({
					url: `${baseUrl}/group/uploadgroupimg`,
					filePath: this.tempFilePath,
					name: 'file',
					header:{
						
						 Authorization:uni.getStorageSync('token')
					},
					success: (uploadFileRes) => {
						
						console.log(uploadFileRes.data);
						this.tempFilePath2 = uploadFileRes.data
						//uni.setStorageSync('user_img', uploadFileRes.data.path);
						
					}
				})
				console.log(this.tempFilePath)
				
				this.tempFilePath = ''
				
				
				
			
			},
			cancel() {
				//console.log('canceled')
			},
			creategroups(){
				if(this.qunName){
					
					//let ids=[]
					for(let i=0;i<this.friendList.length;i++){
						if(this.friendList[i].isduigou == true){
							this.ids.push(this.friendList[i])
						}
					}
					let time = dateTimeSend(new Date())
					let qunimg =''
					if(this.tempFilePath2){
						qunimg = this.tempFilePath2
						this.tempFilePath2 = ''
					}else{
						qunimg = uni.getStorageSync('user_img') 
					}
					
					//console.log(ids)
					
					if(this.ids.length>0){
						creategroup(this.qunName,time,qunimg,this.ids,this.usreinfo).then((res)=>{
							console.log(res)
							
							uni.showModal({
							    title: '提示',
							    content: '群聊创建成功',
								showCancel:false,
							    success: function (res) {
							        if (res.confirm) {
							            // console.log('用户点击确定');
										uni.navigateTo({
											url:'../home/home'
										})
							        } 
							    }
							});
							
						
						})
					}else{
						uni.showModal({
						    title: '提示',
						    content: '最少选中一个好友',
							showCancel:false,
						    success: function (res) {
						        if (res.confirm) {
						            // console.log('用户点击确定');
									
						        } 
						    }
						});
					}
					
				}else{
					uni.showModal({
					    title: '提示',
					    content: '输入群聊名称',
						showCancel:false,
					    success: function (res) {
					        if (res.confirm) {
					            // console.log('用户点击确定');
								
					        } 
					    }
					});
				}
			},
			
			join(){
				getfriends().then((res)=>{
					console.log(res)
					this.friendList = res.data
					this.usreinfo=this.friendList.pop()
					console.log(this.friendList)
					console.log(this.usreinfo)
					
					for(let i=0;i<this.friendList.length;i++){
						this.friendList[i].isduigou=false
					}
					//console.log(this.friendList)
				})
			},
			select(i){
					let that = this
					
					
					let x = this.friendList[i]
					x.isduigou = !x.isduigou
					
					this.$set( this.friendList,i,x)
					
				//this.$forceUpdate()	//强制刷新
				function f (value, index, ar) {
					
				    if(value.isduigou==true){
						
						return false
						
					}
					else {
						
					        return true;
					    }
				}
				
				if (this.friendList.every(f)) {
				    
					this.selectNum=false
				}else{
				    
					this.selectNum=true
				}
				let j=0
				for(let i=0;i<this.friendList.length;i++){
					
					if(this.friendList[i].isduigou == true){
						j+=1
					}
				}
				this.num=j
				j=0
				
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
	
	.main{
		padding-top: 148rpx;
		display: flex;
		flex-direction: column;
		.group-img{
			margin: 0 auto;
			width: 196rpx;
			height: 196rpx;
			background: $uni-color-primary;
			box-shadow: 0px 36rpx 40rpx 0px rgba(39,40,50,0.1);
			border-radius: 40rpx;
		}
		
		.group-name{
			padding: 62rpx $uni-spacing-col-base;
			
			.group-name-input{
				text-align: center;
				height: 92rpx;
				background: $uni-bg-color-grey;
				border-radius: 46rpx;
				font-size: 32rpx;
				color: $uni-text-color;
				line-height: 44rpx;
			}
		}
		
		.friends{
			padding: $uni-spacing-col-base $uni-spacing-row-base;
			.title{
				font-size: 44rpx;
			}
			
			.user{
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 120rpx;
				.selected{
					flex: none;
					position: relative;
					width: 48rpx;
					margin-right: 30rpx;
					height: 48rpx;
					background: rgba(255,228,49,0.5);
					border-radius: 24rpx;
					
					.duigou{
						width: 30rpx;
						height: 20rpx;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
					}
				}
				.isselected{
					background: rgba(255,228,49,1);
				}
				.user-img{
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
					
				}
				.name{
					font-size: 36rpx;
					color: $uni-text-color;
					padding-left: 32rpx;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:1;
					overflow: hidden;
				}
			}
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
				background:#808080 ;
				border-radius: $uni-border-radius-sm;
				text-align: center;
				color: $uni-text-color;
			}
			.btn1{
				background-color:$uni-color-primary ;
			}
		}
		
	}
	
</style>
