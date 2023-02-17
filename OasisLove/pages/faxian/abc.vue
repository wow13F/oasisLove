<template>
	<view class="content">
		<view class="main">
			
			<!-- http://v.nrzj.vip/video.php -->
			
			<view class="videos" @touchstart="touchStart" @touchend="touchEnd">				
				<video id="player"  @error="playError" :src="src" :autoplay="true"  :show-fullscreen-btn="false" :show-center-play-btn="false" :show-play-btn="false" object-fit="fill"  loop="true"></video>
				
				
			</view>
			
			<!-- 	按钮区 -->
			<view class="function">
				<view class="like">
				
					<view class="HeartShape"></view>
				</view>
				<view class="comments">
					
				</view>
				
				<view class="forward">
				
				</view>
			</view>
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	import bottom from '../bottom/bottom.vue'
	import {randomMp4} from '../../util/api.js'
	import touch from '../../common/js/FingerSwipe.js'
	export default {
		data() {
			return {
				src:'http://v.weishi.qq.com/v.weishi.qq.com/gzc_7899_1047_0bc34abuoaadmeahoxe7ufrrjyaei7qagr2a.f70.mp4?dis_k=4532a402aebf34685576827b2a714dfa&dis_t=1672475945&fromtag=0&pver=8.84.1',
				videoList:[],
				touchend:Object,
				videoContext:null,	//video 实例对象
				
			}
		},
		onLoad(){
			this.getVideo()		
		},
		onReady(){
			this.videoContext = uni.createVideoContext('player');//创建视频实例指向video
			this.playVideo()
		},
		 onShow() {
		            
		            // 获取屏幕高度
		            // let self = this;
		            // uni.getSystemInfo({
		            //     success: function(res) {
		            //         console.log(res.screenHeight); //屏幕高度  注意这里获得的高度宽度都是px 需要转换rpx
		            //         console.log(res.windowWidth); //可使用窗口宽度
		            //         console.log(res.windowHeight); //可使用窗口高度
		            //         console.log(res.screenWidth); //屏幕宽度
		            //         self.emulator_Height = (res.screenHeight * (750 / res.windowWidth)) //将px 转换rpx
		            //         console.log("rpx*********", self.emulator_Height)
		            //     }
		            // });
		        },
		methods: {
			async getVideo(){
				 for(let i = 0;i<10;i++){
					// await randomMp4().then(res=>{
						
					// 	if(res.statusCode === 200){
					// 		this.videoList.push(res.data)
					// 		if(this.videoList.length === 1){
					// 			this.src = res.data.videourl
					// 		}
							
					// 	}						
					// })
				}
				//console.log(this.videoList)
			
				
			},
			touchStart(e){
			this.touchend =	touch(e)
				
				
			},
			touchEnd(e){
				
				let result = this.touchend(e)
				console.log(result)
				
			},
			playVideo(e){
				
				
				this.videoContext.play(); 
				 let video = document.getElementsByTagName("video")[0]
				 console.log(video.srcObject)
				console.log(this.videoContext)
				
			},
			playPause(){
				this.videoContext.pause(); 
			},
			playError(e){
				console.log(e)
			}
			
		},
		components:{
			bottom
		}
	}
</script>

<style lang="scss">

.main{
	position: relative;
	.function{
		width: 120rpx;
		
		position: absolute;
		top: 45%;
		right: 0;
		.like{
			width: 100%;
			height: 120rpx;
			background-color: yellow;
			position: relative;
			.HeartShape{
				position: absolute;
				top: 50%;
				left: 50%;
				
				width: 50rpx;
				height: 50rpx;
				background-color: tomato;
				transform: rotate(-45deg) translate(-12%,-55%);
			}
			.HeartShape:before{
				content: '';
				position: absolute;
				top: -30rpx;
				left: 0;
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				background-color: tomato;
				
			}
			.HeartShape::after{
				content: '';
				position: absolute;
				top: 0;
				left: 30rpx;
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				background-color: tomato;
			}
		}
		.comments{
			width: 100%;
			height: 120rpx;
			background-color: greenyellow;
		}
		.forward{
			width: 100%;
			height: 120rpx;
			background-color: peru;
		}
		
	}
	.videos{
		background-color: yellow;
		width: 100%;
		height:  calc(100vh - 130rpx);     
		position: relative;
		
		
		#player{
			position: absolute;
			width: 100vw;
			height: 100%;
			
			 
			// left: 0;
			// right: 0;
			
			z-index: 0;
			
		}
		
	}
}
</style>
