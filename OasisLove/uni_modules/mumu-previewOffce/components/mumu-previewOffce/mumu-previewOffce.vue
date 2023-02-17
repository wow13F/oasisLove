<template>
	<view class="preview" v-if="value && isMp === false">
		<view class="right" :class="previewType"></view>
		<view class="left" :class="previewType"></view>
		<iframe :src="previewUrl" width="100%" frameborder="0" id="if"></iframe>
		<view class="error" v-if="isError">传入文件格式不正确</view>
		<view class="loading">预览模块加载中...</view>

		<view class="close" @click="closePre()">关闭</view>
	</view>
</template>
<script>
export default {
	model: {
		event: 'change'
	},
	props: {
		fileUrl: {
			type: String,
			default: ''
		},
		value: {
			type: Boolean
		}
	},
	data() {
		return {
			previewUrl: ``,
			isError: false,
			isMp: false
		}
	},
	watch: {
		fileUrl: {
			handler(newValue) {
				if (!newValue) return
				//#ifdef MP
				this.isMp = true
				uni.downloadFile({
					url: newValue,
					success: res => {
						const filePath = res.tempFilePath
						uni.openDocument({
							filePath: filePath,
							success: res => {
								console.log('打开文档成功')
							}
						})
					}
				})

				//#endif

				//#ifndef MP
				let exit = newValue.split('.')
				if (!exit.length) return (this.isError = true)
				exit = exit.pop()
				const arr = ['pptx', 'ppt', 'docx', 'doc', 'xlsx', 'xls', 'pdf']
				if (arr.indexOf(exit) === -1) return (this.isError = true)
				this.isError = false
				if (exit === 'pdf') return (this.previewUrl = this.pasePdfUrl(newValue))
				this.previewUrl = this.paseOfficeUrl(newValue)
				//#endif
			},
			immediate: true
		}
	},
	methods: {
		closePre() {
			this.$emit('change', false)
		},
		paseOfficeUrl(url) {
			url = encodeURIComponent(url)
			return `https://view.officeapps.live.com/op/embed.aspx?src=${url}&amp;wdPrint=0&amp;wdEmbedCode=0&amp;wdStartOn=1`
		},
		pasePdfUrl(url) {
			//url = encodeURIComponent(url)
			return `https://previewpdf.mumudev.top/?file=${url}`
		}
	},
	computed: {
		previewType() {
			let exit = this.fileUrl.split('.')
			if (!exit.length) return console.log('传入文件格式不正确')
			exit = exit.pop()

			switch (exit) {
				case 'pptx':
				case 'ppt':
					return 'ppt'
				case 'docx':
				case 'doc':
					return 'word'
				case 'xlsx':
				case 'xls':
					return 'excel'
				case 'pdf':
					return ''
				default:
					console.log('传入文件格式不正确')
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.preview {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
	z-index: 100;

	.right,
	.left {
		position: absolute;
		z-index: 99999;
	}

	.ppt {
		height: 20px;
		width: 80px;
		background-color: #444444;

		&.right {
			bottom: 2px;
			right: 4px;
		}

		&.left {
			left: 4px;
			bottom: 2px;
			width: 50px;
		}
	}

	.word {
		position: absolute;
		width: 80px;
		height: 17px;
		background-color: #ffffff;

		&.right {
			bottom: 2px;
			right: 2px;
		}

		&.left {
			left: 2px;
			bottom: 2px;
			width: 40px;
		}
	}

	.excel {
		position: absolute;
		width: 90px;
		height: 23px;
		background-image: linear-gradient(#3f4244, #36383a);

		&.right {
			bottom: 2px;
			right: 2px;
		}

		&.left {
			left: 2px;
			bottom: 2px;
		}
	}

	.close {
		position: absolute;
		top: 50px;
		right: 10px;
		background-color: #ccc;
		color: #fff;
		padding: 5px 10px;
		border-radius: 5px;
		font-size: 12px;
		z-index: 102;
	}

	.error {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #ccc;
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #ccc;
	}

	#if {
		height: 100%;
		position: relative;
		z-index: 101;
	}
}
</style>
