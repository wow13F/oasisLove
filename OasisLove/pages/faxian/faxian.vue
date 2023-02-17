<template>
	<view class="videoList">
		<view class="tapF">
			<view class="tab">
				<view class="recommend"  :class="{actived:isrecomment}" @tap="torecommend">推荐</view>
				<view class="friendLiked" :class="{actived:!isrecomment}" @tap="tofriendLiked">朋友赞过</view>
				<view class="postwork" @tap="postwork">
					<image src="../../static/image/adduser.png"></image>
				</view>
			</view>
		</view>
		
		<view class="swiper-box">
			<swiper :disable-touch="disableTouchFlag" class="swiper"  :vertical="true" @change="changeplay" @touchstart="touchStart" @touchend="touchEnd" :current="currentIndex" :circular="true">
				<swiper-item v-for="(item,index) in itemlist" :key="index">
					<view class="swiper-item"  style="color: #000000;">
						<video-player @disable-touch="disableTouch" @changeClick='changeClick' :ref="item.id" :video="videos[index]" :index="index"></video-player>
					</view>
					
				</swiper-item>
			</swiper>
		</view>
		
		
		<bottom></bottom>
	
	</view>
</template>

<script>
	import videoPlayer from '../../components/videoPlayer/videoPlayer.vue'
	import bottom from '../bottom/bottom.vue'
	import { baseUrl } from "../../util/config.js"
	import {randomMp4} from '../../util/api.js'
	var time = null
	export default {
		props:['list'],
		name:"videoList",
		components:{
			videoPlayer,		
			bottom,
			
			
		},
		data() {
			return {
				videos:[],
				pageStatrY:0,
				pageEndY:0,
				page:0,
				currentIndex:0,
				itemlist:[{id:'play0'},{id:'play1'},{id:'play2'}],
				playIndex:0,
				nextVideo:null,
				disableTouchFlag:false,
				isrecomment:true,
				src:'',
			};
		},
	
		onLoad() {
			this.initVideo(3)
		},
		
		methods:{
		postwork(){
			uni.chooseVideo({						
				sourceType: ['camera'],
				success: (res) => {									
					this.upload(res.tempFilePath)								 
					}
				})
			},
			upload(FilePath){
				uni.request({
					url:`${baseUrl}/video/uploadVideo`,
					method:'POST',
					header:{
						'Content-Type':'application/x-www-form-urlencoded',
						 Authorization:uni.getStorageSync('token')
						 
					},
					data:{
						data:FilePath
					},
					success: (res) => {
						console.log(res)
					}
				})
			},
			disableTouch(flag){
				this.disableTouchFlag = flag
			},
			tofriendLiked(){
				this.isrecomment = false
			},
			torecommend(){
				this.isrecomment = true
			},
			async initVideo(len){
				for(let i = 0;i<len;i++){
					await randomMp4().then(res=>{
						
						if(res.statusCode === 200){
							let data = res.data
							data.id = "video"+i
							data.comments = [{userimg:"../../static/defatlt.jpg",username:"怎么天天犯困",text:"好帅,短发也很美",reply:[{userimg:"../../static/defatlt.jpg",username:"阿智",text:"有一说一,确实很棒!",discuss:[{userimg:"../../static/defatlt.jpg",username:"黄辉冯",text:"说得对",discuss:[]}]}]},{userimg:"../../static/defatlt.jpg",username:"我要当楼主",text:"赞我的必中500万",reply:[]}]
							data.like = 12000
							data.collection = 28000
							this.videos.push(data)
							
						}						
					})
				}
				console.log(this.videos)
				console.log("当前播放第",this.playIndex,"个视频")
			},
			getVideo(){
				let p
				randomMp4().then(res=>{
					if(res.statusCode === 200){
						let data = res.data
						if(this.page ===2){
							p = 0
						}else{
							p = this.page+1
						}
						console.log("发现:p",p)
				
						data.id = "video"+p
						this.videos.push(data)
						this.nextVideo = data
													
					}
				})
				
			},
			changeClick(){
				//双击点赞 调用子组件listright的方法
				this.$refs.right[0].change()
			},
			//上下滑动触发事件
			changeplay(res){
				clearTimeout(time)
				let name
				this.page = res.detail.current
				console.log("当前页",this.page)
				time=setTimeout(()=>{
					
					if(this.pageStatrY < this.pageEndY){
						
						// setTimeout(()=>{
						// 	this.$refs.player[this.page].player()
						// },20)
						
						//this.$refs.player[].pause()
						// this.pageStatrY=0
						// this.pageEndY=0
						
						if(this.playIndex>0){
							this.playIndex-=1
							console.log("当前播放第",this.playIndex,"个视频")
							if(this.page === 2){
								name = this.itemlist[0].id
							}else{
								name = this.itemlist[this.page+1].id
							}
							
							this.$refs[name][0].pause()
							
							name = this.itemlist[this.page].id
							this.$refs[name][0].nextVideo = this.videos[this.playIndex]
							
							setTimeout(()=>{this.$refs[name][0].player()},10)
						}else{
							alert("开始刷新")
						}
						
						
					}else{

						if(this.page === 0){
							name = this.itemlist[2].id
						}else{
							name = this.itemlist[this.page-1].id
						}
						
						//暂停上一个
						this.$refs[name][0].pause()
						
						name = this.itemlist[this.page].id
						
						this.playIndex+=1
						console.log("当前播放第",this.playIndex,"个视频")
						// if(this.playIndex<2){
						// 	this.$refs[name][0].player()
						// }
						
						if(this.playIndex>=this.videos.length-1){
							if(this.playIndex >=2){
								if(this.nextVideo){
									this.$refs[name][0].nextVideo = this.nextVideo
									this.nextVideo = null
									console.log("发现页",this.$refs[name][0].nextVideo)	
								}
								this.getVideo(1)
							}
						}else{
							this.$refs[name][0].nextVideo = this.videos[this.playIndex]
						}
						
						setTimeout(()=>{this.$refs[name][0].player()},10)
						
					}
				},1)	
			},
			//获取向下滑动的值
			touchStart(res){
				
				this.pageStatrY = res.changedTouches[0].pageY
				//console.log(this.pageStatrY)
			},
			//获取向上滑动的值
			touchEnd(res){		
				
				this.pageEndY = res.changedTouches[0].pageY
				//console.log(this.pageEndY)
			}
		}
	}
</script>

<style lang="less">
.videoList{
	
	width: 100vw;
	height: calc(100vh - 130rpx);
}
.tabF{
	
	
}
.tab{
	width: 100vw;
	display: flex;
	position: relative;
	color: #FFFFFF;
	height: 68rpx;
	font-size: 14px;
	position: absolute;
	top: 5%;
	justify-content: center;	
	z-index: 11;
	.recommend{
		padding-top: 10rpx;
		
	}
	.actived{
		border-bottom: 2px solid #FFFFFF;
	}
	.friendLiked{
		padding-top: 10rpx;
		margin-left: 20rpx;
	}
	.postwork{
		position: absolute;
		right: 20rpx;
		image{
			width: 60rpx;
			height: 60rpx;
			
		}
	}
}
.swiper-box{
	height: 100%;
	width: 100%;
}
.swiper{
	height: 100%;
	width: 100%;
}
.swiper-item{
	height: 100%;
	width: 100%;
	z-index:19;
}
.title{
	color: #FFFFFF;
}
/deep/.listleftbox{
	z-index:20;
	position: absolute;
	bottom: 50px;
	left: 10px;
}
/deep/.listrightbox{
	z-index:20;
	position: absolute;
	bottom: 50px;
	right: 10px;
	color: #FFFFFF;
}


</style>
