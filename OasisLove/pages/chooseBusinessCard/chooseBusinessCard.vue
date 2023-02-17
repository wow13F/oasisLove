<template>
	<view class="content">
		<!-- 顶部标签 -->
		<view class="topLabel">
			<view class="icon">
				<!-- <icon type="cancel" size="24" color="#000"/> -->
				<text>通讯录</text>
			</view>
		</view>
		
		<!-- 搜索部分 -->
		<view class="serach">
			<view class="icon" v-show="isShowIcon">
				<icon type="search" size="20"/>	
				
			</view>
			<input  @input="fangdou(search,1000)" v-model="searchMsg" @focus="focus" @blur="blur"/>	
			
				
			
		</view>
		
		<!-- 好友列表部分 -->
		<view class="friendList">
			 <!-- 左侧通讯录 -->
			 <view class="left">
				 
			
			    <scroll-view show-scrollbar="true" class="scroll-container" scroll-y="true"  :scroll-into-view="toView" scroll-with-animation="true">
			      <view class="handleClick" @tap="handleClick">
					  <view class="address-book" v-for="(item, index) in searchList.length>0?searchList:friendsList" :key="index" >
					    <view class="address-book-index">{{ item.id }}</view>
					    <view class="contact-container" v-for="(items, index) in item.data" :key="index" :id="items.friendid">
					      <img class="contact-img" :src="items.friendimg" alt="" :id="items.friendid" />
					      <view :id="items.friendid" class="contact-detail-container" :class="{isboder:(item.data.length>1)}">{{ items.friendname }}</view>
					    </view>
					  </view>
				  </view>
			    </scroll-view>
			</view>
			
			<!-- 搜索后显示 -->
			<!-- <view class="left" v-show="searchList.length>0">
				 
			
			    <scroll-view show-scrollbar="true" class="scroll-container" scroll-y="true"  :scroll-into-view="toView" scroll-with-animation="true">
			      <view class="handleClick" @tap="handleClick">
					  <view class="address-book" v-for="(item, index) in searchList" :key="index" >
					    <view class="address-book-index">{{ item.id }}</view>
					    <view class="contact-container" v-for="(items, index) in item.data" :key="index" :id="items.friendid"  >
					      <img class="contact-img" :src="items.friendimg" alt="" :id="items.friendid" />
					      <view :id="items.friendid" class="contact-detail-container" :class="{isboder:(item.data.length>1)}">{{ items.friendname }}--{{items.friendid}}</view>
					    </view>
					  </view>
				  </view>
			    </scroll-view>
			</view> -->
			    <!-- 右侧字母导航条 -->
			    <view class="letter-nav" >
			      <view class="item"  v-for="(item, index) in searchzimu.length>0?searchzimu:zimuList" :key="index" :id="index" @click="toSelectIndex(item)">{{ item }}</view>
			    </view>			
			<!-- <uni-indexed-list :options="list" :show-select="true" @click="bindClick" /> -->
		</view>
		<bottom></bottom>
	</view>
</template>

<script>
	import bottom from '../bottom/bottom.vue'
	import airport from '../../common/js/airport.js'
	import {getChineseHeadLetter} from '../../common/js/toPinyin.js'
	import {getfriends} from '../../util/api.js'
	export default {
		data() {
			return {				
				isShowIcon:true	, //是否显示搜索图标
				searchMsg:''	, //搜索内容
				list: airport.list,
				friendsList:[],				
				toView: '',
				allFriends:[],
				zimuList:[],
				searchList:[],
				searchzimu:[],
				timer:null,
			}
		},
		created() {
			getfriends().then(res=>{
				
				let LIST=[]
				this.allFriends = res.data
				let s = this.allFriends.map(item=>{
					item.id = getChineseHeadLetter(item.friendname)
					
					LIST.push(item)
					return item.id
				})	
				this.zimuList = [...new Set(s)]
				this.zimuList.forEach(item =>{
					let d = {}
					d.id = item
					d.data=[]
					this.friendsList.push(d)
				})
				this.zimuList.sort(function(a,b){
					return  a[0].charCodeAt() - b[0].charCodeAt()
				})
				this.friendsList.sort(function(a,b){
					
					return a.id.charCodeAt() - b.id.charCodeAt()
				})
				let len = this.friendsList.length
				LIST.forEach(item =>{
					
					for(let i = 0;i<len;i++){
						if(item.id === this.friendsList[i].id){
							this.friendsList[i].data.push(item)
						}
					}
				})
				//      console.log(this.friendsList)
			})
			
		},
		methods: {
			input(){
				
			
			
			},
			search(){
				let ids
					try{
						this.searchList = []
						this.searchzimu = []
						this.friendsList.forEach(item=>{
							 ids = getChineseHeadLetter(this.searchMsg)
							if(item.id === ids ){
								this.searchzimu.push(item.id)
								let da = {}
								da.id = item.id
								da.data = []
								this.searchList.push(da)
								item.data.forEach(i=>{
									if(i.friendname.includes(this.searchMsg)){
										this.searchList[0].data.push(i)
									}
								})
								console.log(this.searchList)
								throw new Error("endForeach")
							}
						})
						this.searchList.push({})
						this.searchList[0].id = ids
						this.searchList[0].data = []
						this.searchList[0].data.push({})
						this.searchList[0].data[0].friendname = "未找到"
						this.searchList[0].data[0].friendimg = "../../static/defatlt.jpg"
					}catch(e){
					if(e.message!="endForeach") throw e;
					else{console.log(e.message)}
				}
				
				},
			fangdou(fn,delay){
				let that = this
				console.log(this.searchMsg)
				if(this.searchMsg.length<=0){
					this.blur()
					return 
				}
				return function(){
					
					if(that.timer){
						clearTimeout(that.timer)
						
					}
					
					that.timer = setTimeout(function(){
						
						fn.call(that)
					},delay)
				}()
			},
			focus(){
				this.isShowIcon = false
				this.searchMsg = ''
				this.searchList = []
				this.searchzimu = []
				
			},
			blur(){
				 this.isShowIcon = true
				// // this.searchMsg = ''
				// this.searchList = []
				// this.searchzimu = []
			},
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			},
			toSelectIndex(item){
				this.toView = item
				
				
			},
			handleClick(e,id=0){
				console.log(e,id)
				if(e.target.id){
					uni.navigateTo({
						url:`../usermp/usermp?id=${e.target.id}&&ly='siliao'`
					})
					
				}
			}
		},
		components:{
			bottom
		}
	}
</script>

<style lang="scss">
	// 去除scroll-view 滚动条
	/deep/::-webkit-scrollbar {
			 display: none;
			 width: 0;
			 height: 0;
			} 
.content{
	background-color: #ebeaea;
	height: 100vh;
	overflow: hidden;
}
 // 顶部标签 	
.topLabel{
	width: 100%;
	margin-top: 20rpx;
	.icon{
		width: 100%;		
		height: 52rpx;
		text-align: center;
		icon{		
			float:left;
			width: 60rpx;						
		}
		text{						
			width: 200rpx;
			line-height: 52rpx;
			text-align: center;			
		}
	}
}

// 搜索部分 
.serach{
	position: relative;
	width: 90%;
	margin-left: 5%;
	margin-top: 40rpx;
	height: 60rpx;
	
	.icon{
		position: absolute;
		left:4%;
		margin-right: 10rpx;
		transform: translateX(-10rpx);
		-webkit-transform: translateX(-5px);
		text-align: center;		
	}
	input{
		background-color:#FFFFFF;
		text-align: center;
		height: 60rpx;
	}
}

	// 好友列表部分 
.friendList{
	display: flex;
	
	justify-content: space-between;
	
	.left{
		width: 100vw;
		.scroll-container{
			height: 100vh;
		}
		.address-book-index{
			height: 50rpx;
			line-height: 50rpx;
			background-color: #ebeaea;
			color: #717171;	
			padding-left: 30rpx;
			padding-top: 10rpx;
		}
		.contact-container{
			display: flex;
			background-color: #FFFFFF;
			padding-left: 30rpx;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			.contact-img{
				width: 60rpx;
				height: 60rpx;
			}
			.contact-detail-container{
				height: 60rpx;
				line-height: 60rpx;
				margin-left: 20rpx;
				width: 100%;
				
			}
			.isboder{
				border-bottom: 1px solid #f2eded;
			}
		}
	}
	.letter-nav{
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateX(-50%);
		.item{
			width: 24rpx;
			height: 24rpx;
			line-height: 24rpx;
			padding-top: 20rpx;
			color: #717171;
		}
	}
}
</style>
