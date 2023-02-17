<template>
	<view>
		<view class="">
			<!-- <image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper> -->
			<image @tap="upload" :src="user_img" class="user-img" mode="aspectFit"></image>
			<view>send</view>
		</view>
	</view>
</template>

<script>
	import { baseUrl } from "../../util/config.js"
	import {Filepath} from '../../common/js/myfun.js'
	import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";
	export default {
		data() {
			return {
				tempFilePath: '',
				cropFilePath: '../../static/img/a1.png',
				user_img:'',
				filename:'',
				filepath:'',
				time:''
			}
		},
		components: {
			ImageCropper
		},
		methods: {
			upload() {
				uni.chooseImage({
					count: 10, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					//sourceType: ['album'], //从相册选择
					success: (res) => {
						
						
						this.tempFilePath = res.tempFilePaths
						
						this.confirm()
					}
				});
			},
			confirm(e) {
				//this.cropFilePath = e.detail.tempFilePath
				//this.user_img=this.cropFilePath
				
				this.filepath=Filepath(new Date())
				this.time=Date.now()
				console.log(this.filepath)
				
				for(let i=1;i<=this.tempFilePath.length;i++){
					this.filename=i
					uni.uploadFile({
						url: `${baseUrl}/upload/chatImg`,
						filePath: this.tempFilePath[i-1],
						name: 'file',
						header:{
							
							 Authorization:uni.getStorageSync('token')
						},
						formData:{
							filepath:'public/chatImages/'+this.filepath,
							filename:this.filename,
							time:this.time
						},
						success: (uploadFileRes) => {
							
							console.log(uploadFileRes.data);
							//uni.setStorageSync('user_img', uploadFileRes.data.path);
							
						}
					})
				}
				
			
				//console.log(this.tempFilePath)
				//console.log(this.cropFilePath)
				//this.socket.emit('uploadFile', this.tempFilePath);
				//let Imginput = document.getElementById('tupian');
				       //let file = Imginput.files[0];       //得到该图片
				// 	   let file = this.tempFilePath
				//        let reader = new FileReader();      //创建一个FileReader对象，进行下一步的操作
				//        reader.readAsDataURL(file);              //通过readAsDataURL读取图片
				
				//        reader.onload =function () {            //读取完毕会自动触发，读取结果保存在result中
				//            let data = {img: this.result};
				           
				//        }
				// console.log(this.tempFilePath)
				this.tempFilePath = ''
				
				
			
			},
			cancel() {
				//console.log('canceled')
			},
		}
	}
</script>

<style lang="scss">
	
	.user-img {
		width: $uni-img-size-lg;
		height: $uni-img-size-lg;
		border-radius: $uni-border-radius-base;
	}
</style>
