<template>
	<view class="content">
		<view class="tab-bar" style="z-index: 99; opacity: 0.2;">

			<view class="tab-left" @tap="toback()">
				<image class="back" src="../../static/image/back.png"></image>
			</view>


			<!-- <view class="tab-right">

				<view class="more-img">
					<image style="width:58rpx;height: 14rpx;" src="../../static/image/more.png"></image>
				</view>
			</view> -->
		</view>

		<view class="bg">
			<image src="../../static/img/y1.jpg" mode="aspectFill" class="bg-img"></image>
		</view>

		<view class="main" v-if="!isshowAdd">
			<view class="main-inner">
				<view class="inf">
					<view class="name">{{groupInfo.qunname}}</view>
					<view class="time">{{dataFromate(groupInfo.createtimes)}}</view>
					<view class="notices">{{groupInfo.introduce?groupInfo.introduce:'群介绍~~'}}</view>
				</view>

				<view class="member">
					<view class="top">
						<view class="title">群成员</view>
						<view class="more" @tap="chengyuan">
							<text>{{userSF=='admin'?'管理群成员':'查看全部群成员'}}</text>

							<image class="more-img" src="../../static/image/back.png"></image>
						</view>


					</view>
					<view class="member-ls">
						<view class="member-li" v-for="(item,index) in managerInfo" :key="item.chengyuanid">
							<image @tap="tousermp(index)" class="user-img" :src="item.chengyuanimg" mode=""></image>
							<view class="user-name">{{item.chengyuannicname}}</view>
						</view>
						
						<view class="member-li" @tap="adduser()">
							<image class="user-img" src="../../static/image/adduser.png" mode=""></image>
							<view class="user-name">邀请成员</view>
						</view>
					</view>
					
					<view class="mitem">
						<view class="column">
							<view class="row">
								<view class="title">群名称</view>
								<view class="cont">{{groupInfo.qunname}}</view>
								<view v-if="userSF=='admin'" class="more" @tap="modify('qunname')">
									<image src="../../static/image/back.png" mode="aspectFit"></image>
								</view>
							</view>
							
							<!-- <view class="row">
								<view class="title">群公告</view>
								<view class="cont">9点半，牛马联盟准时集合！</view>
								<view class="more">
									<image src="../../static/image/back.png" mode="aspectFit"></image>
								</view>
							</view> -->
							
							<view class="row" >
								<view class="title">我在本群昵称</view>
								<view class="cont">{{nicname}}</view>
								<view class="more" @tap="modify('nicname')">
									<image src="../../static/image/back.png" mode="aspectFit"></image>
								</view>
							</view>
							
						
						
							
							
						</view>
						<view class="btn2" @tap="quit(userSF)">
							<text class="txt">{{userSF=='admin'?'解散群聊':'退出群聊'}}</text>
						</view>
						
						<!-- 修改内容组件 -->
						<view v-show="isshow" class="modify" :style="{bottom:-+modifyHeight+'px'}" :animation="animationData">
							<view class="modify-header">
								<view class="close" @tap="modify">取消</view>
								<view class="title">{{biaoti}}</view>
								<view class="define" @tap="updateuserInfo(),modify()">确定</view>
							</view>
							<view class="modify-main">
								
						
								<textarea v-model="data" class="modify-content" maxlength="12" ></textarea>
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		
		<!-- 邀请好友 -->
		<view class="add" v-if="isshowAdd">
			<view class="con">
				<view class="top">
					<view class="btn btn-close" @tap="close">取消</view>
					<view class="btn btn-ok" @tap="ok">确定</view>
				</view>
				<view class="footer">
					<view class="content" v-for="(item,index) in friendList">
						<view class="select" @tap="select(index)">
							<image v-if="item.issel" class="sel" src="../../static/image/duigou.png" mode=""></image>
						</view>
						<image class="user-img" :src="item.friendimg" mode=""></image>
						<view class="user-name">{{item.friendremarks?item.friendremarks:item.friendnicname}}</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { groupDetail,updateGroupInfos,quitgroup,getfriends ,adduser,deletemanager} from '../../util/api.js'
	import {
		dateTimeSend
	} from '../../common/js/myfun.js'
	export default {
		data() {
			return {
				qunid:'',	//群聊id
				groupInfo:{},	//群聊信息
				managerInfo:[],	// 群成员信息
				nicname:'',		// 在本群的昵称
				myid:0,			// 用户id
				isshow:false,	// 修改内容组件是否显示
				modifyHeight:0,	// 修改内容组件高度
				animationData:{},	
				biaoti:'',
				userSF:'',		// 当前用户是普通成员还是群主
				data:'',	// 输入的字符串
				isshowAdd:false,	// 是否显示邀请好友
				friendList:[],	//好友列表
			}
		},
		onLoad(option) {
			this.qunid = option.qunid
			this.myid = option.myid
			
			this.getgroupDetail()
		},
		methods: {
			toback() {

				uni.navigateBack({
					delta: 1
				})
			},
			getgroupDetail(){
				groupDetail(this.qunid).then((res)=>{
					
					this.groupInfo=res.data.groupInfo[0]
					this.userSF=this.groupInfo.userid==this.myid?'admin':'putong'
					this.managerInfo=res.data.managerInfo
					let strid=''
					
					// 查找我在本群的昵称
					for(let i=0;i<this.managerInfo.length;i++){
						strid=this.managerInfo[i].chengyuanid
						if(this.myid==strid){
							this.nicname=this.managerInfo[i].chengyuannicname
							break
						}
					}
					console.log(res)
				})
			},
			dataFromate(data){
				 return dateTimeSend(data)
			},
				
			chengyuan(){
				uni.navigateTo({
					url:`../chengyuan/chengyuan?qunid=${this.qunid}&&userSF=${this.userSF}`
				})
			},
			modify(bt) {
				
				
				if (bt == 'nicname') {
					this.biaoti = '修改昵称'
					this.data=this.nicname
					
				}
				if(bt=='qunname'){
					this.biaoti ='群名称'
					this.data=this.groupInfo.qunname
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
			updateuserInfo(){
				console.log(this.data)
				
				if(this.biaoti == '修改昵称'){
					this.nicname=this.data
				}
				if(this.biaoti=='群名称'){
					this.groupInfo.qunname=this.data
				}
				let sf=this.groupInfo.userid==this.myid?'admin':'putong'
				
				
				updateGroupInfos(this.groupInfo.qunname,this.nicname,this.qunid,this.myid,sf).then((res)=>{
					console.log(res)
				})
			},
			quit(sf){
				let tit = '退出群聊'
				let cont = '是否退出群聊？'
				
				if (sf=='admin') {
					tit = '解散群聊'
					cont = '是否解散本群?'
					
				}
				if (this.managerInfo.length == 2 && tit=='退出群聊') {
					cont = '群聊至少要有两个人'
				}
				uni.showModal({
					title: tit,
					content: cont,
					success: (res) => {
						if (res.confirm) {
				
							if (this.managerInfo.length > 2 || tit=='解散群聊') {
								
								deletemanager(this.qunid,this.myid,sf).then((res)=>{
									console.log(res)
								})
							}
				
						}
					}
				});
				
			},
			tousermp(index){
				
				uni.navigateTo({
					url:`../usermp/usermp?id=${this.managerInfo[index].chengyuanid}&&qn=${this.managerInfo[index].chengyuannicname}`
				})
			},
			adduser(){
				this.isshowAdd=!this.isshowAdd
				getfriends().then((res)=>{
					
					this.friendList=res.data
					this.friendList.splice(this.friendList.length-1,1)
				
					for(let i=0;i<this.friendList.length;i++){
						this.friendList[i].issel=false
					}
					
						for(let i = 0;i<this.friendList.length;i++){
								
							for(let j=0;j<this.managerInfo.length;j++){
								if(this.friendList[i].friendid==this.managerInfo[j].chengyuanid){
									this.friendList[i].issel=true
								}
							}
						}
					
					
					console.log(this.friendList)
				})
			},
			select(index){
				
				let x = this.friendList[index]
				x.issel = !x.issel
				
				this.$set( this.friendList,index,x)
				
				
			},
			close(){
				this.isshowAdd=!this.isshowAdd
			},
			ok(){
				uni.showLoading({
				    title: '执行中'
				});
				
				setTimeout(function () {
				    uni.hideLoading();
				}, 2000);
				let ids=[]
				let managersid=[]
				
				// console.log(this.friendList)
				// console.log(this.managerInfo)
				this.managerInfo.forEach((item,index)=>{
					managersid.push(item.chengyuanid)
				})
				
				this.friendList.forEach((item,index)=>{
					if(item.issel) ids.push(item.friendid)
				})
				
				this.managerInfo.forEach((item,index)=>{
					let i = ids.indexOf(item.chengyuanid)
					if(i!= -1){
						ids.splice(i,1)
					}
					
				})
				
				console.log(this.groupInfo)
				if(ids.length>0){
					
					adduser(ids,this.qunid,this.groupInfo.userid,this.groupInfo.qunimg,this.groupInfo.qunname).then(res=>{
						if(res.data.message==200){
							uni.showToast({
								title: '邀请成功',
								duration: 2000
							});
							this.close()
						}
						
					})
				}
				
			},
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		border-bottom: 1px solid $uni-border-color;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		padding-top: var(--status-bar-height);
		background: rgba(255, 255, 255, 1);

		.tab-left {
			float: left;
			position: absolute;
			margin-left: 20rpx;
			transform: translateY(-50%);
			top: 50%;

			image {
				width: 40rpx;
				height: 40rpx;
				border-radius: 16rpx;
			}
		}

		.tab-right {
			width: 140rpx;
			position: absolute;
			right: 0;
			transform: translateY(-50%);
			top: 50%;
		}
	}

	.bg {
		width: 100%;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;

		.bg-img {
			width: 100%;

		}
	}

	.main {
		padding-top: 360rpx;

		.main-inner {
			width: 100%;
			background-color: #fff;
			border-top-right-radius: 40rpx;
			border-top-left-radius: 40rpx;
		}

		.inf {

			flex-wrap: wrap;
			padding: $uni-spacing-row-base $uni-spacing-col-base 0;
			box-sizing: border-box;
			border-bottom: 1px solid #eee;

			.name {
				float: left;
				font-size: 48rpx;
				font-weight: 600;
				color: #272832;
				line-height: 66rpx;
			}

			.time {
				float: right;
				font-size: 28rpx;
				color: rgba(39, 40, 50, 0.5);
				line-height: 66rpx;
			}

			.notices {
				padding-top: 20rpx;
				font-size: 28rpx;
				color: #272832;
				line-height: 40rpx;
				clear: both;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}

		.member {
			border-bottom: 1px solid #eee;

			.top {
				padding: $uni-spacing-row-base $uni-spacing-col-base 0;
				box-sizing: border-box;
				height: 100rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;

				.title {
					color: #272832;
					font-weight: 600;
					font-size: 36rpx;
				}

				.more {
					font-weight: 400;
					font-size: 32rpx;
					color: rgba(39, 40, 50, 0.6);
					text{
						margin-right: 20rpx;
					}
					.more-img {
						width: 16rpx;
						height: 28rpx;
						transform: rotate(180deg);
					}

				}



			}
			
			.member-ls{
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.member-li{
					
					width: 104rpx;
					height: 152rpx;
					margin-left: 32rpx;
					margin-top: 40rpx;
					
					.user-img{
						width: 104rpx;
						height: 104rpx;
						border-radius: 20rpx;
					}
					.user-name{
						height: 40rpx;
						max-width: 110rpx;
						font-size: 28rpx;
						color: #272832;
						text-align: center;
						font-weight: 400;
						display: -webkit-box;
						-webkit-box-orient:vertical;
						-webkit-line-clamp:1;
						overflow: hidden;
					}
				}
			}
			
			.mitem{
				display: flex;
				flex-direction: column;
				padding-top: 22rpx;
				width: 100%;
				border-bottom: 1px solid #eee;
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
	
	.add{
		width: 100%;
		
		padding-top: 88rpx;
		background-color: #e7e7e7;
		.con{
			
			.top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				width: 100%;
				.btn{
					width: 100rpx;
					height: 40rpx;
					
					padding-top: 20rpx;
				}
				.btn-close{
					padding-left: 30rpx;
				}
				.btn-ok{
					padding-right: 30rpx;
				}
			}
			.footer{
				margin-top: 60rpx;
				.content{
					width: 100%;
					display: flex;
					background-color: #E9ECEF;
					align-items: center;
					padding-left: 30rpx;
					padding-top: 20rpx;
					.select{
						position: relative;
						flex: none;
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
						background-color: #fff;
						.sel{
							position: absolute;
							top: 0;
							left: 4rpx;
							width: 50rpx;
							height: 50rpx;
						}
					}
					.user-img{
						
						width: 120rpx;
						height: 120rpx;
						margin-left: 40rpx;
						border-radius: 15rpx;
					}
					.user-name{
						flex: 4;
						margin-left: 40rpx;
					}
				}
			}
		}
	}
</style>
