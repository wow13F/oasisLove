<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video id="myVideo" :src="src"
                    @error="videoErrorCallback" :danmu-list="danmuList" 
					enable-danmu danmu-btn controls autoplay="true"></video>
            </view>
            <!-- #ifndef MP-ALIPAY -->
         <!--   <view class="uni-list uni-common-mt">
                <view class="uni-list-cell">
                    <view>
                        <view class="uni-label">弹幕内容</view>
                    </view>
                    <view class="uni-list-cell-db">
                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
                    </view>
                </view>
            </view> -->
           <!-- <view class="uni-btn-v">
                <button @click="sendDanmu" class="page-body-button">发送弹幕</button>
            </view> -->
            <!-- #endif -->
        </view>
		
		
		
		
		
			
			
		
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            src: '', //拉流地址
	            danmuList: [{
	                    text: '第 1s 出现的弹幕',
	                    color: '#ff0000',
	                    time: 1
	                },
	                {
	                    text: '第 3s 出现的弹幕',
	                    color: '#ff00ff',
	                    time: 3
	                }
	            ],
	            danmuValue: '',
				fid:'',
				url:'',
	        }
	    },
	    onReady: function(res) {
			
			
	        // #ifndef MP-ALIPAY
	        this.videoContext = uni.createVideoContext('myVideo')
			console.log(this.src)
	        // #endif
	    },
		onLoad(option) {
			
			this.src = option.url
			this.fid = option.fid
			
			 
		},
	    methods: {
	        sendDanmu: function() {
	            this.videoContext.sendDanmu({
	                text: this.danmuValue,
	                color: this.getRandomColor()
	            });
	            this.danmuValue = '';
	        },
	        videoErrorCallback: function(e) {
	            uni.showModal({
	                content: e.target.errMsg,
	                showCancel: false
	            })
	        },
	        getRandomColor: function() {
	            const rgb = []
	            for (let i = 0; i < 3; ++i) {
	                let color = Math.floor(Math.random() * 256).toString(16)
	                color = color.length == 1 ? '0' + color : color
	                rgb.push(color)
	            }
	            return '#' + rgb.join('')
	        }
	    }
	}
</script>

<style>
.bg-top{
		position: fixed;
		top: 0;
		left: 0;
	} 
 
 
 .top-title{
	 height: 88rpx;
	 position: fixed;
	 left: 0;
	 background-color: #808080;
	 opacity: 0.6;
	 display: flex;
	 justify-content: center;
 }
 .close-img{
	 height: 56rpx;
	 width: 56rpx;
	 position: absolute;
	 left: 48rpx;
	
 }
	 
 .title{
	 text-align: center;
	 opacity: 0.6;
	 font-size: 32rpx;
	 color: #FFFFFF;
 }
 
 .user{
	 display: flex;
	 position: fixed;
	 align-items: center;
	 
 }
 .user-img{
	 
	 width:160rpx;
	 height: 160rpx;
	 border-radius: 50%;
 }
 .user-name{
	 padding-top: 24rpx;
	 font-size: 40rpx;
	 color: #000000;
 }
 
 .btns{
	 display: flex;
	 flex-direction: row;
	 justify-content: space-around;
	 position: fixed;
	 bottom: 220rpx
 }
 .cancel{
	 display: flex;
	 justify-content: center;
	 width: 140rpx;
	 height: 180rpx;
 }
 .btn-img{
	 width: 140rpx;
	 height: 140rpx;
	 margin: 0 auto;
 }
.yuyin{
	 display: flex;
	 justify-content: center;
	 flex-wrap: nowrap;
	 width: 200rpx;
	 height: 180rpx;
 }
 .btn-text{
	 text-align: center;
	 margin-top: 20rpx;
	 font-size: 28rpx;
	 color: #000000;
	 letter-spacing: 0;
	 font-weight: 400;
 }
</style>
