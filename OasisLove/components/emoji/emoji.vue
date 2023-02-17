<template>
	<view class="emoji" :style="{height:height+'px'}">
		<view class="emoji-line" v-for="(line,index) in emoji":key='index'>
			<view class="emoji-line-item" v-for="(item,i) in line" :key="i" @tap="xz(item)">{{item}}</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			height:{
				type:Number,
				default:260
			}
		},
		data() {
			return {
				emoji:[
					['😆','😅','😄','😃','🤣','😂','😁'],
					
					['😉','😊','😋','😎','😍','😘','😗'],
					['😚','🙂','🤗','🤔','😐','😑','😶'],
					['😏','😣','😥','😮','🤐','😯','😪'],
					['😴','😌','😛','😝','🤤','😒','😓'],
					['😕','🙃','🤑','🙁','😭','👻','💩'],
					['😇','🤢','😷','😱','😰','😨','😀'],
					['👑','👽','😔','😫','🙄','😙','🤡']
					
				]
			}
		},
		methods: {
			xz(x){
				this.$emit('emojis',x )
			}
		},
		
	}
</script>

<style lang="scss">
	.emoji{
		width: 100%;
		
		padding: 16rpx 10rpx 170rpx 10rpx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
		.emoji-line{
			display: flex;
			.emoji-line-item{
				flex: 1;
				text-align: center;
				font-size: 52rpx;
				line-height: 80rpx;
				
				
			}
		}
	}
	
	
</style>
