<template>
	<view>
		<map class="map" style="width: 100vw; height: 100vh;" @markertap="markertap"  :longitude="covers.longitude" :latitude="covers.latitude" :markers="covers">
			
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				covers:''
			}
		},
		onLoad(option) {			
			this.covers = JSON.parse(option.detail)
				console.log(this.covers)
		},
		
		methods: {
			markertap(e) {
							console.log("===你点击了标记点===")
							console.log("你点击的标记点ID是:" + e.detail.markerId)
							console.log(e)
						},
		}
	}
</script>

<style>

</style>
