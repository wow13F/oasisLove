<template>
	<view class="content">
		<view class="tab-bar">
			
			<view class="search-div">
				<input type="search" @input="search" v-model.trim="searchVal" placeholder="搜索用户/群" class="search" placeholder-style="color:#aaa;font-weight:400;"></input>
				<image src="../../static/image/search.png" class="search-img"></image>
			</view>
			
			
			<view class="tab-right">
				
				<view class="add" @tap="tohome">
					<view class="text">取消</view>
				</view>
			</view>
		</view>
		
		<view class="main">
			<view class="search-user result">
				<view class="title" v-show="requests.length>0">用户</view>
				<view class="list user" v-for="(item,index) in requests":key="item.userid" @tap="tonext(item.isfriend,item.userid)">
					 <image :src="item.user_img"></image>
					<view class="names">
						<view class="name" v-html="highLight(item.username,searchVal)">{{item.username}}</view>
						<view class="email">{{item.email}}</view>
					</view>
					<view class="right-btn":class="item.isfriend?'send':'add'">{{item.isfriend?'发消息':'加好友'}}</view>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	import {search} from '../../util/api.js'
	export default {
		data() {
			return {
				searchVal:'',
				requests:[]
			}
		},
		onLoad(option){
			this.myid = Number(option.id)
			console.log(this.myid)
		},
		methods: {
			highLight(title,searchVal){
				if(title.includes(searchVal)){
				        title = title.replace(
				            searchVal, 
				            // 这里是替换成html格式的数据，最好再加一个样式权重，保险一点
				            '<font style="color:yellow!important;">'+ searchVal +'</font>'
				        )
				        return title
				      }
				      // 不包含的话还用这个
				      else{
				        return title
				      }
				    
			},
		 search(){
			 // console.log(this.searchVal)
			if(this.searchVal.length>0){
				this.requests.length=0
				search(this.searchVal).then((res)=>{
					this.requests=res.data.requests
					
					//console.log(this.requests)
				})
			}
		 },
		 tohome(){
			 uni.navigateTo({
			 	url:'../home/home'
			 })
		 },
		 tonext(isfriend,userid){
			 if(isfriend){
				 
				 uni.navigateTo({
					 url: `../chatroom/chatroom?userid=${userid}&&fasongzeid=${this.myid} `
				 	//url:`../chatroom/chatroom?userid=${userid}`
				 })
			 }
			 else{
				 
				 uni.navigateTo({
				 	url:`../userhome/userhome?userid=${userid}`
				 })
			 }
		 }
			
		},
	
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";
	
	.content {
	
		padding-top: var(--status-bar-height);
		
	}
	
	.tab-bar{
		background: rgba(255,255,255,0.9);
		border-bottom: 1px solid $uni-border-color;
		.search-div{
			box-sizing: border-box;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			padding: 14rpx 118rpx 14rpx 32rpx;
		}
		.search{
			
			height:60rpx;
			background: $uni-bg-color-grey;
			border-radius: 10rpx;
			padding: 0 60rpx 0 12rpx;
			
			
		}
		.search-img{
			position: absolute;
			top: 22rpx;
			right: 130rpx;;
			width: 40rpx;
			height: 40rpx;
			float: right;
			
		}
	}
	
	.tab-right{
		.add{
			float: right;
		}
	}
	
	.main{
		padding: 88rpx $uni-spacing-col-base;
		.result{
			padding-top: $uni-spacing-col-base;
			.title{
				
				font-size: 42rpx;
				color: $uni-text-color;
				line-height: 60rpx;
				font-weight: 600;
				padding-left: 20rpx;
			}
			.list{
				width: 100%;
				
				height: 80rpx;
				padding: 20rpx 10rpx;
				image{
					float: left;
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.names{
				padding-left: 30rpx;
				float: left;
			}
			.name{
				font-size: 36rpx;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.email{
				font-size: $uni-font-size-sm;
				color: $uni-text-color;
				line-height: 28rpx;
				
			}
			.right-btn{
				float: right;
				width: 120rpx;
				height: 48rpx;
				
				border-radius: 24rpx;
				font-size: $uni-font-size-sm;
				margin-right: 20rpx;
				line-height: 48rpx;
				text-align: center;
				margin-top: 12rpx;
				
			}
			
			.send{
				background: $uni-color-primary;
				color: $uni-text-color;
			}
			.add{
				background: rgba(74,170,255,0.1);
				color: $uni-color-success;
			}
		}
	}
</style>
