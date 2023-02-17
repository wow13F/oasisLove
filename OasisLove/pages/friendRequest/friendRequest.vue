<template>
	<view class="content">
		<view class="tab-bar">
		    <view class="tab-left" @tap="toback">
				<image class="back" src="../../static/image/back.png"></image>
			</view>
			<view class="tab-center">
				<view class="title">
					好友请求
				</view>
			</view>
			<view class="tab-right">
				<view class="pice">
					
				</view>
			</view>
		</view>
	    
		<view class="main">
			<view v-if="requestinfo.length>0" class="requester" v-for="(item,index) in requestinfo">
				<view class="request-top">
					<view class="reject btn" @tap="no(index)">拒绝</view>
					<view class="header-img">
						<image :src="item.userimg" ></image>
					</view>
					<view class="aggree btn" @tap="yes(index)">同意</view>
					
				</view>
				
				<view class="request-center">
					<view class="title">{{item.nicName}}</view>
					<!-- <view class="time">2022-1-13</view> -->
				</view>
				
				<view class="request-bottom">
					<text>留言:</text>
					{{item.message}}
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	import {
		userrequest,delrquest,agreerquest
	} from '../../util/api.js'
	export default {
		data() {
			return {
				requestinfo:[],
				requestids:[],
			}
		},
		onLoad(option) {
			this.requestinfo=JSON.parse(option.info)
			
			this.join()
		},
		methods: {
			toback(){
				uni.navigateBack({
					delta:1
				})
			},
			join(){
				let ids = new Array()
				for(let i=0;i<this.requestinfo.length;i++){
					ids.push(this.requestinfo[i].sendid)
				}
				
				
					
				userrequest(ids).then((res)=>{
					this.requestids=res.data
					for(let j=0;j<this.requestinfo.length;j++){
						
						for(let i=0;i<this.requestids.length;i++){
							if(this.requestinfo[j].sendid==this.requestids[i].userid){
								this.requestinfo[j].userimg=this.requestids[i].user_img
								this.requestinfo[j].nicName=this.requestids[i].nicName
							}
						}
					}
					console.log(this.requestinfo)
					this.$forceUpdate()	//强制刷新
				})
			},
			//拒绝成为好友
			no(index){
				console.log(index)
				let id = this.requestinfo[index].sendid
				this.requestinfo.splice(index,1)
				//this.requestinfo[index]={}
				//this.$forceUpdate()	//强制刷新
				delrquest(id).then((res)=>{
					console.log(res)
				})
				console.log(this.requestinfo)
			},
			//同意成为好友
			yes(index){
				console.log(index)
				let id = this.requestinfo[index].sendid
				this.requestinfo.splice(index,1)
				delrquest(id).then((res)=>{
					
					return agreerquest(id)
				})
				.then((res)=>{
					console.log(res)
				})
			},
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
		
		padding: 108rpx $uni-spacing-col-base;
		.requester{
			
			margin-top: 112rpx;
			padding: $uni-spacing-col-base;
			background: rgba(255,255,255,1);
			box-shadow: 0px 24rpx 64rpx -8rpx rgba(0,0,0,0.1);
			border-radius: $uni-border-radius-base;
		}
		.request-top{
			
			display: flex;
			 .btn{
				flex: auto;
				width: 160rpx;
				height: 64rpx;
				 background: rgba(255,93,91,0.1);
				 border-radius: 40rpx;
				 text-align: center;
				 font-size: $uni-font-size-lg;
				 line-height: 64rpx;
			 }
			 .reject{
				 color: $uni-color-warning;
				 background: rgba(255,93,91,0.1);
			 }
			 .aggree{
				 color: $uni-text-color;
				 background-color: $uni-color-primary;
			 }
			 .header-img{
				 flex: auto;
				 margin-top: -104rpx;
				 text-align: center;
				 image{
					 width: 144rpx;
					 height: 144rpx;
					 border-radius: 50%;
				 }
			 }
		}
		
		.request-center{
			text-align: center;
			padding-top: 40rpx;
			padding-bottom: 40rpx;
			.title{
				font-size:36rpx;
				color: $uni-text-color;
				line-height: 50rpx;
				font-weight: 500;
			}
			.time{
				font-size: 24rpx;
				font-size: $uni-font-size-sm;
				color:$uni-text-color-disable ;
			}
		}
		
		.request-bottom{
			padding: $uni-spacing-row-sm $uni-spacing-col-base;
			border-radius: $uni-border-radius-base;
			background-color: $uni-bg-color-grey;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			line-height: 40rpx;
		}
	}
</style>
