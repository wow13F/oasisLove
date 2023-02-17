<template>
	<view class="content">
		<view class="tab-bar">
		
			
			<view class="tab-center">
				<text>通讯录</text>
			</view>
			
		</view>
		<view class="main">
			<view class="list" :class="{click:item.isclick}" v-for="(item,index) in friendList" :key="item.friendid" @tap="toFriendDetail(index,item.friendid)">
				<view class="list-left">
					<image :src="item.friendimg">
						
				</view>
				<view class="list-right">
					<span>{{item.friendnicname}}</span>
				</view>
			</view>
			
			
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	import {
		getAllFriends
	} from '../../util/api.js'
	
	import bottom from '../bottom/bottom.vue'
	export default {
		data() {
			return {
				friendList:[],
				isclick:false
			}
		},
		onLoad(){
			
			this.getFriends()
		},
		methods: {
			getFriends(){
				getAllFriends().then(res=>{
				
					this.friendList = res.data.request
					let len = this.friendList.length;
					for(let i =0;i<len;i++){
						this.friendList[i].isclick = false;
					}
						console.log(this.friendList)
				})
			},
			toFriendDetail(i,id){
			
				let tmp = this.friendList[i]
				tmp.isclick = !tmp.isclick
				this.friendList.splice(i,1,tmp)
				
				setTimeout(()=>{
					uni.navigateTo({
						// id: 表示 好友的id， ly：表示类型
						url:`../usermp/usermp?id=${id}&&qn=''&&ly='siliao'`
						
					})
					tmp.isclick = !tmp.isclick
					this.friendList.splice(i,1,tmp)
				},50)
			}
		},
		components:{
			bottom
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/myhead/myhead.scss";
	
	.main{
		display: flex;
		flex-direction: column;
		padding: 104rpx $uni-spacing-col-base 0;
		.list{
			padding-left: 20rpx;
			padding-top: 20rpx;
			display: flex;
			flex-direction: row;
			.list-left{
				image{
					width: 100rpx;
					height: 100rpx;
					border-radius: 16rpx;
				}
				
				
			}
			.list-right{
				height: 99rpx;
				line-height: 99rpx;
				margin-left: 32rpx;
				flex: 1;
				border-bottom: 1px solid #e9e4e4;
				font-size: 16px;
				span{
					vertical-align: middle;
				}
				
			}
		}
		.click{
			background-color: #e9e4e4;
		}
		
	}
</style>
