<template>
	<view class="content">
		<view class="bigImg">
			
		</view>
		<view class="ty" v-if="tyisShow">
			<image src="../../static/img/ty.png" mode=""></image>
			<view class="aggree" @tap="next">同意并继续</view>
			<view class="no">退出</view>
		</view>
	</view>
</template>

<script>
	import {index} from '../../util/api.js'
	export default {
		data() {
			return {
				tyisShow:false
			}
		},
		
		onLoad() {
			this.yd()
		},
		
		methods: {
			yd(){
				// 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
				let value = uni.getStorageSync('launchFlag');
				
				if (value) {
							 
				   // 如何已经有，判断本地是否有token
							let token = uni.getStorageSync('token')
							
							if(token){
								index().then((res)=>{
									// console.log(res.data.agree)
									if(res.data.agree){
										uni.redirectTo({
										  url: '../home/home'
										});
									}
									else{
										uni.redirectTo({
										  url: '../login/login'
										});
									}
									
								})
								
							}
							// 如果没有跳转到登录页
							else{
								
								uni.redirectTo({
									url:'../login/login'
								})
							}
				
				} 
				else {
						console.log('执行interval函数')
				  // 没有值，跳到引导页，并存储，下次打开就不会进去引导页
				  uni.setStorage({
				    key: 'launchFlag',
				    data: true
				  });
				this.interval()
				 
				}
			},
			interval(){
				
				
			 this.tyisShow=true
				
			},
			next(){
				console.log('跳转到引导页')
				uni.redirectTo({
				    url: '../yindao/yindao'
				});
			}  
		}
	}
</script>

<style lang="scss">
  .bigImg{
	  position: relative;
	  width: 100%;
	  height: 100vh;
	  background-image: url(../../static/img/qidong.png);
	  background-position: 0 0;
	  background-size: 100% 100%;
	  background-repeat: no-repeat;
	
	
  }
  .ty{
	  background-color: white;
		   display: block;
  		  position: absolute;
  		  bottom: 2%;
  		  width: 100%;
  		  
  		  image{
  			  width: 100%;
  			  height: 900rpx;
  		  }
		  .aggree{
			  width: 70%;
			  height: 88rpx;
			  margin: 0 auto;
			 background-color: $uni-color-primary;
			 text-align: center;
			 line-height: 88rpx;
			 border-radius: 44rpx;
			 color: $uni-font-size-lg;
		  }
		  .no{
			   width: 70%;
			   height: 60rpx;
			   line-height: 60rpx;
			   text-align: center;
			   margin: 0 auto;
			   color: $uni-text-color-placeholder;
			   font-size: $uni-font-size-sm;
		  }
  }
</style>
