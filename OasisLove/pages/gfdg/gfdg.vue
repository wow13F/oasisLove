<template>
	<view>
		<scroll-view class="chat"  scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView">
			<view class="msg" id="msg1">
				1
			</view>
			
			<view class="msg" id="msg2">
				2
			</view>
			
			<view class="msg" id="msg3">
				3
			</view>
			
			<view class="msg" id="msg4">
				4
			</view>
			
			<view class="msg" id="msg5">
				5
			</view>
			<view class="msg" id="msg6">
				6
			</view>
			<view class="msg" id="msg7">
				7
			</view>
			<view class="msg" id="msg8">
				8
			</view>
			<view class="msg" id="msg9">
				9
			</view>
			
			</scroll-view>
			
			<view class="tt">
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
				系噶改价哦基督教国家
				反对反对的反对法
				打发打发打发打发打发
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollToView:'msg9'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.chat{
	width: 100%;
	height: 300rpx;
	border: 1px solid red;
	
}
.msg{
	width: 100%;
	/* height: 100rpx; */
	background-color: yellow;
}
</style>
<view class="chat-main" v-for="(item,index) in messagesInfos" :id="'msg'+index">
					<view class="chat-ls" v-if="item.sf=='T'" :id="'msg'+index">
						<!-- <view class="chat-time">{{formate(messagesInfos[index])-formate(messagesInfos[index]-1)>5?formate(item.times):''}}</view> -->
						<view class="msg-m msg-left">

							<!-- 群聊展示的头像 -->
							<image v-if="liaotianSF=='group'" :src="messagesInfos[index].user_img" mode=""
								class="user-img"></image>

							<!-- 私聊展示的头像 -->
							<image v-if="liaotianSF=='siliao'" :src="siliaoinfo.user_img" mode="" class="user-img">
							</image>
							<!-- -----------------------文字-------------------- -->
							<view v-if="item.messageTYPE==1" class="message">
								<view class="msg-text">{{item.messageTxt}}</view>
							</view>

							<!-- -----------------------图片-------------------- -->
							<view v-if="item.messageTYPE==2" class="message">
								<image mode="widthFix" class="msg-img" :src="item.messageImg"
									@tap="previeImg(item.messageImg)"></image>
							</view>

							<!-- -----------------------语音-------------------- -->
							<view v-if="item.messageTYPE==3" class="message" @tap="playvoice(item.messageMp3)">
								<view class="msg-text voice" :style="{width:item.messageTxt*6+'px'}">
									<image src="../../static/image/yytb.png" class="voice-img"></image>
									{{item.messageTxt}}"
								</view>
							</view>
						</view>
					</view>

					<view class="chat-ls" v-if="item.sf=='W'" :id="'msg'+index">
						<view v-if="isTime" class="chat-time">{{formate(item.times)}}</view>
						<view class="msg-m msg-right">
							<image :src="my_img" mode="" class="user-img" @tap="test()"></image>


							<!-- -----------------------文字-------------------- -->
							<view v-if="item.messageTYPE==1" class="message">
								<view class="msg-text">{{item.messageTxt}}</view>
							</view>


							<!-- -----------------------图片-------------------- -->
							<view v-if="item.messageTYPE==2" class="message">
								<image mode="widthFix" class="msg-img" :src="item.messageImg"
									@tap="previeImg(item.messageImg)"></image>

							</view>


							<!-- -----------------------语音-------------------- -->
							<view v-if="item.messageTYPE==3" class="message" @tap="playvoice(item.messageMp3)">
								<view class="msg-text voice" :style="{width:item.messageTxt*6+'px'}">
									<image src="../../static/image/yytb.png" class="voice-img"></image>
									{{item.messageTxt}}"
								</view>
							</view>


						</view>
					</view>
				</view>
