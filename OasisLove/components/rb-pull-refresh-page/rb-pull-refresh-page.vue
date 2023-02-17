<template>
	<view class="pull-refresh-page-box">
		<scroll-view class="pull-refresh__track" id="transform-box" :style="{'transition-duration':`${duration}ms`,transform: `translateY(${move}px)`}" @touchstart="touchstartFun($event)" @touchmove="touchmoveFun" @touchend="touchendFun">
			<view class="top-tips-box" :style="{opacity:pullStatusObj.opacity}">
				<view v-if="pullStatusObj.status == 'pulling'">{{pullingText}}</view>
				<view v-if="pullStatusObj.status == 'loosing'">{{loosingText}}</view>
				<view v-if="pullStatusObj.status == 'loading'" class="loading-box">
					<image src="../static/images/loading.png"></image>
					<text>{{loadingText}}</text>
				</view>
			</view>
			<slot></slot>
			<!-- <view class="bottom-tips-box" :style="{opacity:pullStatusObj.opacity}">
				<view v-if="pullStatusObj.status == 'pulling'">{{downingText}}</view>
				<view v-if="pullStatusObj.status == 'loosing'">{{downloosingText}}</view>
				<view v-if="pullStatusObj.status == 'loading'" class="loading-box">
					<image src="../static/images/loading.png"></image>
					<text>{{loadingText}}</text>
				</view>
			</view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'pull-refresh-page',
		props:{
			value:{
				type:Boolean,
				required:true
			},
			downingText:{
				type:String,
				default:'上拉加载'
			},
			downloosingText:{
				type:String,
				default:'释放加载'
			},
			pullingText:{
				type:String,
				default:'下拉加载更多'
			},
			loosingText:{
				type:String,
				default:'释放进行加载'
			},
			loadingText:{
				type:String,
				default:'正在加载...'
			},
		},
		watch:{
			value:function(value){
				if(!value){
					this.close();
				}
			}
		},
		data(){
			return{
				gap:100,
				touchFlag:false,
				startY:null,
				move:0,
				pullStatusObj:{
					status:'pulling',
					opacity:0
				},
				duration:0,
				elHeight:0,
			}
		},
		methods:{
			touchstartFun(event){
				if(!this.value && this.pullStatusObj.status === 'pulling'){
					let _this = this;
					let el = uni.createSelectorQuery().selectViewport('#transform-box');
					el.fields({'size':true},res=>{_this.elHeight = res.height;}).exec();
					this.duration = 0;
					this.touchFlag = true;
					this.startY = event.touches[0].clientY;
				}
			},
			touchmoveFun(event){
				let _this = this;
				if(this.touchFlag){
					let endY = event.touches[0].clientY;
					uni.createSelectorQuery().selectViewport('#transform-box').scrollOffset(res =>{
						if(res.scrollTop <= 0){
							// console.log('下拉刷新')
							let top = (endY - this.startY) * 0.3;
							if(top < this.gap / 2){
								this.pullStatusObj.status = 'pulling';
							}else if(top > (this.gap / 2) + 10){
								this.pullStatusObj.status = 'loosing'
							}
							if(top <= 0){
								top = 0;
							}else if(top >= this.gap){
								top = this.gap;
							}
							this.move = top;
							let opacity = (top*0.015).toFixed(2) > 1 ? 1 : (top*0.015).toFixed(2);
							this.pullStatusObj.opacity = opacity;
						}else if(res.scrollHeight - res.scrollTop <= this.elHeight){
							// console.log('上拉加载')
							let top = (endY - this.startY) * 0.3;
							if(Math.abs(top) < this.gap / 2){
								this.pullStatusObj.status = 'pulling';
							}else if(Math.abs(top) > (this.gap / 2) + 10){
								this.pullStatusObj.status = 'loosing'
							}
							if(Math.abs(top) >= this.gap){
								top = -this.gap;
							}
							this.move = top;
							let opacity = Math.abs((top*0.015)).toFixed(2) > 1 ? 1 :  Math.abs((top*0.015)).toFixed(2);
							this.pullStatusObj.opacity = opacity;
						}
					}).exec()
				
				}
			},
			touchendFun(){
				this.duration = 300;
				if(this.pullStatusObj.status === 'pulling'){
					this.reset();
				}else if(this.pullStatusObj.status === 'loosing'){
					const _this = this;
					this.touchFlag = false;
					this.pullStatusObj.status = 'loading';
					if(this.move > 0){
						this.move = 50;
					}else{
						this.move = -50;
					}
					
					this.$emit("input", true);
					setTimeout(function(){
						if(_this.move > 0){
							_this.$emit('refresh');
						}else{
							_this.$emit('reload');
						}
					},10)
				}
			},
			close(){
				if(this.pullStatusObj.status === 'loading'){
					this.reset()
				}
			},
			reset(){
				this.touchFlag = false;
				this.startY = null;
				this.move = 0;
				this.pullStatusObj = {
					status:'pulling',
					opacity:0
				};
			}
		},
		mounted(){
			this.reset();
		}
	}
</script>

<style lang="scss" scoped>
	.pull-refresh-page-box{
		overflow: hidden;
		user-select: none;
		.pull-refresh__track{
			display: inline-block;
			position: relative;
			height: 100%;
			
			/deep/.uni-scroll-view{
				overflow: initial !important;
				display: inline-block;
			}
			.top-tips-box{
				position: absolute;
				left: 0;
				right: 0;
				transform: translateY(-100%);
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50px;
				text-align: center;
				opacity: 0;
				overflow: hidden;
				font-size: 14px;
				z-index: -1;
				.loading-box{
					height: 100%;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 18px;
						height: 18px;
						animation: rotate 1s linear infinite;
						@keyframes rotate{
							from{transform: rotate(0deg)}
						    to{transform: rotate(360deg)}
						}
					}
					text{
						margin-left: 5px;
					}
				}
			}
			
			.bottom-tips-box{
				position: absolute;
				left: 0;
				right: 0;
				transform: translateY(0%);
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50px;
				text-align: center;
				opacity: 0;
				overflow: hidden;
				font-size: 14px;
				z-index: -1;
				.loading-box{
					height: 100%;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 18px;
						height: 18px;
						animation: rotate 1s linear infinite;
						@keyframes rotate{
							from{transform: rotate(0deg)}
						    to{transform: rotate(360deg)}
						}
					}
					text{
						margin-left: 5px;
					}
				}
			}
		}
	}
	
	
</style>
