# 插件介绍

** 预览的文件地址必须是可以通过互联网访问的！！！ **

** 预览的文件地址必须是可以直接复制在浏览器地址中访问的！！！ **

## 插件原理

> pdf 文件预览是通过 `pdf.js` 开源库，搭建了一个pdf预览的网站。前端只需要使用 iframe 加载这个网站即可。[pdf.js 官网](http://mozilla.github.io/pdf.js/api/draft/index.html)
>
> offce 文件的预览是通过微软offce在线接口进行解析的。offce在线地址：https://view.officeapps.live.com/op/embed.aspx?src=‘你的文件网络地址’
>
> 在微信小程序中，是通过小程序中的API进行预览的。[小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html)

## 使用环境

** 不支持nvue 。小程序中使用官方提供的api。h5与其他环境是通过上面介绍的插件原理加载。**

## 插件使用

**插件已支持 uni_modules 支持组件easycom，以下代码演示的是普通使用**

``` html
<!-- HTML -->
<mumu-previewOffce :fileUrl='fileUrl' v-model='showPreview'></mumu-previewOffce>

<button @click='showPreview = true'></button>
```

``` js
	import MumuPreviewOffce from '@/uni_modules/mumu-previewOffce/components/mumu-previewOffce/mumu-previewOffce.vue'
	export default {
		components: {
			MumuPreviewOffce
		},
    data() {
			return {
				showPreview: false,
				fileUrl: 'https://h5plugin.mumudev.top/public/previewOffce/333.docx'
			}
		},
     methods: {
     
			},
    }
```

## 相关 API

### 可传属性（Props）

| 参数    | 说明                     | 类型    | 默认值 | 可选         |
| ------- | ------------------------ | ------- | ------ | ------------ |
| v-model | 双向绑定，显示或隐藏组件 | Boolean | false  | false / true |
| fileUrl | 预览文件的网络地址       | String  | -      | -            |



## 打开本地预览

本地预览功能还在开发中...

开发思路是：

> 选择打开本地文件，上传到服务器。获取到服务器中的文件地址，传递给当前组件展示。

没有办法直接在本地打开，所有采取这种方案。有条件的同学可以自己开发。我也会尽快把这个功能做出来。



## 案例演示

![](https://h5plugin.mumudev.top/public/previewOffce/qrcode.png)

## 支持作者

![支持作者](https://student.mumudev.top/wxMP.jpg)