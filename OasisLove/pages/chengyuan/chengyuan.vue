<template>
	<view class="content">
		<view class="tab-bar">
			<view class="tab-left" @tap="toback">
				<image class="back" src="../../static/image/back.png"></image>
			</view>



			<view class="tab-center">群成员 ({{num}})</view>


		</view>

		<view class="main">
			<view class="top">
				<input :class="{textalign:isfocus}" :focus="foc" v-model="data" class="search" @focus="focus"
					@input="input" type="text" />
				<view :class="{closewidth:isfocus}" class="close" v-if="isfocus" @tap="quxiao">取消</view>
				<view :class="{textalign:isfocus}" @tap="inputgetfoc" class="txt"> {{placeholder}}</view>
			</view>

			<!-- //搜索前显示 -->
			<view v-if="isallmanagers" class="center">
				<view class="user-li" v-for="(item,index) in managerInfo">
					<image v-if="user_SF=='admin'" @tap="del(index)" class="delete" src="../../static/image/del.png">
					</image>
					<image @tap="usermp(index,'nosearch')" class="user-img" :src="item.chengyuanimg"></image>
					<text class="user-name">{{item.chengyuannicname}}</text>
				</view>

			</view>

			<!-- //搜索后显示 -->
			<view v-if="!isallmanagers" class="serarch-list">
				<view v-if="searchInfo.length<=0&&data.length>0" class="none">没有找到"{{data}}"相关成员</view>
				<view class="search-li" v-for="(item,index) in searchInfo" @tap="usermp(index,'search')">
					<image class="img" :src="item.chengyuanimg"></image>
					<text class="name" v-html="highLight(item.chengyuannicname,data)">{{item.chengyuannicname}}</text>
				</view>


			</view>
		</view>
	</view>
</template>

<script>
	import {
		groupDetail,
		deletemanager,
		searchemanager
	} from '../../util/api.js'
	export default {
		data() {
			return {
				qunid: '', //群聊id
				num: '', // 群聊成员总数
				managerInfo: [], //成员信息
				groupInfo: {}, //群聊信息
				isfocus: false,
				isallmanagers: true, // 显示所有成员
				data: '', //要搜索的内容
				user_SF: '', //用户身份
				placeholder: '搜索', // 输入内容前显示的文字
				foc: false,
				searchInfo: [], //搜索结果
			}
		},
		onLoad(option) {
			this.qunid = option.qunid
			this.user_SF = option.userSF
			this.join()
		},
		methods: {
			highLight(title, searchVal) {
				if (title.includes(searchVal)) {
					title = title.replace(
						searchVal,
						// 这里是替换成html格式的数据，最好再加一个样式权重，保险一点
						'<font style="color:yellow!important;">' + searchVal + '</font>'
					)
					return title
				}
				// 不包含的话还用这个
				else {
					return title
				}

			},
			toback() {

				uni.navigateBack({
					delta: 1
				})
			},
			inputgetfoc() {
				this.foc = !this.foc

			},
			quxiao() {

				this.isallmanagers = true
				this.data = ''
				this.blur()
			},
			focus() {
				if (this.data.length) {
					this.placeholder = ''
				}
				this.isfocus = true
				// var animation = uni.createAnimation({
				// 	duration: 1000,
				// 	timingFunction: 'ease',
				// })


				// animation.translateY(600).step()
				// this.animationData = animation.export()
			},
			blur() {
				this.placeholder = '搜索'
				this.data = ''
				this.isfocus = false
				this.foc = false
			},
			input() {
				this.placeholder = ''

				if (this.data.length > 0) {
					searchemanager(this.qunid, this.data).then((res) => {
						this.searchInfo = res.data.request
						if (this.searchInfo.length > 0) {
							this.isallmanagers = false
						}
						console.log(this.searchInfo)
						//console.log(this.data)
					})
				} else {
					this.isallmanagers = true
				}


			},
			join() {
				groupDetail(this.qunid).then((res) => {
					this.managerInfo = res.data.managerInfo
					this.groupInfo = res.data.groupInfo[0]
					this.num = this.managerInfo.length
					console.log(res)
				})
			},
			del(index) {
				let tit = '移除成员'
				let cont = '是否删除成员!'
				let deljb = 'manager' // 删除普通成员
				if (this.managerInfo[index].chengyuanid == this.managerInfo[index].qunadminID) {
					tit = '解散群聊'
					cont = '是否解散本群!'
					deljb = 'admin' // 解散群
				}
				if (this.managerInfo.length == 2 && tit=='移除成员') {
					cont = '群聊至少要有两个人'
				}
				uni.showModal({
					title: tit,
					content: cont,
					success: (res) => {
						if (res.confirm) {

							if (this.managerInfo.length > 2 || tit=='解散群聊') {
								let userid = this.managerInfo[index].chengyuanid
								let qunid = this.groupInfo.qunid

								deletemanager(qunid, userid, deljb).then((res) => {
									this.join()
								})
							}

						}
					}
				});
			},
			usermp(index,ly) {
				if(ly=='search'){
					uni.navigateTo({
						url:`../usermp/usermp?id=${this.searchInfo[index].chengyuanid}&&qn=${this.searchInfo[index].chengyuannicname}`
					})
				}
				else{
					uni.navigateTo({
						url:`../usermp/usermp?id=${this.managerInfo[index].chengyuanid}&&qn=${this.managerInfo[index].chengyuannicname}`
					})
				}
				
			},
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";

	.tab-bar {
		display: fixed;
		background-color: #d8d8d8;
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

	.main {
		display: flex;
		flex-direction: column;
		margin-top: var(--status-bar-height);
		width: 100%;


		.top {
			width: 100%;
			height: 100rpx;
			background-color: #d8d8d8;

			margin-top: 88rpx;

			position: relative;
			border-top: 1px solid transparent;

			.txt {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				transition: all 0.3s ease-out;
				text-align: center;
				color: #b9b9b9;
				z-index: 0;
			}

			.search {
				display: inline-block;
				width: 96%;
				height: 60rpx;
				margin-left: 2%;
				margin-top: 20rpx;
				border: 1px solid white;
				background-color: white;


				border-radius: 7rpx;
				transition: all 0.3s linear;
				z-index: 1;
			}

			.close {
				display: inline-block;
				width: 0;
				margin-left: 2%;
				height: 60rpx;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				text-align: center;
				color: #051f7f;
				font-size: 32rpx;
				line-height: 60rpx;

			}

			// 取消按钮宽度
			.closewidth {
				width: 14%;
			}

			.textalign {
				transition: all 0.3s linear;
				left: 10%;
				width: 80%;


			}
		}

		.center {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.user-li {
				position: relative;
				width: 104rpx;
				height: 152rpx;
				margin-left: 20rpx;
				margin-top: 40rpx;

				.user-img {
					width: 104rpx;
					height: 104rpx;
					border-radius: 15rpx;
				}

				.delete {
					position: absolute;
					top: -20rpx;
					left: 0;
					width: 32rpx;
					height: 32rpx;
					z-index: 2;

				}

				.user-name {
					height: 40rpx;
					max-width: 110rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					font-size: 28rpx;
					color: #acacac;
					text-align: center;
				}
			}
		}

		.serarch-list {
			width: 100%;
			position: relative;

			.none {
				position: absolute;
				left: 50%;
				margin-top: 20%;
				transform: translateX(-50%)
			}

			.search-li {
				display: flex;
				width: 100%;
				margin-top: 20rpx;
				height: 140rpx;
				margin-left: 20rpx;
				line-height: 140rpx;

				.img {
					flex: 1;
					width: 100rpx;
					max-width: 100rpx;
					height: 100rpx;
					margin-top: 20rpx;
					border-radius: 12rpx;
				}

				.name {
					flex: 5;
					color: #505256;
					border-bottom: 1px solid #CBD3DA;
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
