import { baseUrl } from "./config.js"
// 注册接口
export function reguser(username,pwd,emails){
	return new Promise(function(reslove,reject){
			
			uni.request({
				
				url: `${baseUrl}/api/reguser`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				data:{
					username:username,
					password:pwd,
					email:emails
				},
				 success: res => {
				
				 	let result = res
					
						
					reslove(result)
				 },
				
			})
		});
}

// 验证用户名是否被占用
export function isUser(username){
	return new Promise(function(reslove,reject){
			
			uni.request({
				
				url: `${baseUrl}/api/isUser`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				data:{
					username:username
					
				},
				 success: res => {
				
				 	let result = res
					
						
					reslove(result)
				 },
				
			})
		});
}

// 登录接口
export function login(username,pwd){
	return new Promise(function(reslove,reject){
			
			uni.request({
				
				url: `${baseUrl}/api/login`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				data:{
					username:username,
					password:pwd,
					
				},
				 success: res => {
				
				 	let result = res
					
						
					reslove(result)
				 },
				
			})
		});
}

// 发送验证码
export function sendnumber(to,subject){
	return new Promise(function(reslove,reject){
			
			uni.request({
				
				url: `${baseUrl}/api/sendnumber`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				data:{
					to:to,
					subject: subject,
					
					
				},
				 success: res => {
				
				 	let result = res
					
						
					reslove(result)
				 },
				
			})
		});
}

// 搜索  用户/群   接口
export function search(value){
	// console.log(value)
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/friendsSearch`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					username:value,
					qunname:value,
					
				},
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// home 首页

export function index(){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/home`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// home 首页获取消息列表
export function getHomeList(){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/homeList`,
				method:'GET',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

export function upuserImg(cropFilePath){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/upuserImg`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					imgData:cropFilePath,
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


// 获取用户信息
export function getUserInfo(value){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/getUserInfo`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					userid:value
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 更新用户信息
export function updateUserInfos(value){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/updateUserInfo`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					autograph:value[0],
					nicName:value[1],
					gender:value[2],
					birthday:value[3],
					phone:value[4],
					email:value[5],
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 修改密码
export function updatepwd(opwd,npwd,S){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/updatepwd`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					password:opwd,
					passwordNew:npwd,
					S:S,
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


// 未读消息数
export function tipMessage(){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/tipMessage`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 标记为已读
export function UpdatetipMessage(value){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/UpdatetipMessage`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					friendid:value
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 一对一聊天记录
export function getonetoone(value,sum,ofSet,idlaiyuan){
	//console.log(value)
	return new Promise(function(reslove,reject){
			let src
			if(idlaiyuan=='user'){
				src = `${baseUrl}/my/getonetoone`
			} 
			else if(idlaiyuan=='group'){
				src = `${baseUrl}/group/getonetomore`
			}
			//console.log(src)
			uni.request({
				
				url: src,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					friendid:value,
					sum:sum,
					ofSet:ofSet,
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 创建 群聊
export function creategroup(qname,time,qunimg,idlist,userinfo){
	
	
	return new Promise(function(reslove,reject){
			 
			  idlist=JSON.stringify(idlist)
			  userinfo=JSON.stringify(userinfo)
			   //console.log(idlist)
			uni.request({
				
				url: `${baseUrl}/group/creategroup`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					qname:qname,
					createtimes:time,
					qunimg:qunimg,
					ids:idlist,
					userinfo:userinfo
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 获取所有好友
export function getfriends(){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/getfriends`,
				method:'GET',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

export function groupList(){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/groupList`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 群聊详细信息
export function groupDetail(id){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/groupDetail`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					qunid:id
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 更新群聊信息
export function updateGroupInfos(name,nicname,qunid,myid,sf){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/updateGroupInfos`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					qunname:name,
					chengyuannicname:nicname,
					qunid:qunid,
					userid:myid,
					sf:sf
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 移除群聊成员
export function deletemanager(qunid,userid,jb){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/deletemanager`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					qunid:qunid,
					chengyuanid:userid,
					delje:jb
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


// 搜索群聊成员
export function searchemanager(qunid,name){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/searchemanager`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					qunid:qunid,
					chengyuannicname:name,
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


export function isfriend(userid){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/isfriend`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					friendid:userid
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 添加好友
export function addfriend(userid,text){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/addfriend`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					friendid:userid,
					message:text
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}
// 查找是否有好友请求
export function findrequest(){
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/findrequest`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


export function userrequest(ids){
	
	ids=JSON.stringify(ids)
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/userrequest`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					ids:ids,
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 删除好友请求
export function delrquest(id){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/delrquest`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					sendid:id,
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


// 同意好友申请
export function agreerquest(id){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/agreerquest`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					sendid:id,
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

// 删除好友
export function delfriend(id){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/delfriend`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					friendid:id,
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}


// 邀请好友
export function adduser(ids,qunid,userid,qunimg,qunname){
	
	//userid:群主id
	ids=JSON.stringify(ids)
	console.log(ids)
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/group/adduser`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
				},
				data:{
					idList:ids,
					qunid:qunid,
					userid:userid,
					qunimg:qunimg,
					qunname:qunname,
					
					
				},
				
				 success: res => {
					let result = res
					reslove(result)
				 },
				
			})
		});
}

//忘记密码
export function respPwd(password,email){
	
	
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/api/respPwd`,
				method:'POST',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 
				},
				data:{
					pwd:password,
					email:email
				},
				
				 success: res => {
					
					reslove(res)
				 },
				
			})
		});
}


export function getAllFriends(){
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: `${baseUrl}/my/getAllFriends`,
				method:'GET',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
					 
				},
				data:{
					
				},
				
				 success: res => {
					
					reslove(res)
				 },
				
			})
		});
}


export function randomMp4(){
	return new Promise(function(reslove,reject){
			  
			uni.request({
				
				url: 'https://apibug.cn/api/sjws/&apiKey=7e99c26058470c7e83f2025645114316',
				method:'GET',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					
					 
				},
				data:{
					
				},
				
				 success: res => {
					
					reslove(res)
				 },
				
			})
		});
}

export function getcomments(type,videoID,floorID){
	return new Promise(function(reslove,reject){
			  let url
			  if(type ==="L"){
				  url = `${baseUrl}/video/getComments`
			  }else{
				  url = `${baseUrl}/video/getComments?videoID=${videoID}&&floorID=${floorID}`
			  }
			uni.request({
				
				url: url,
				method:'GET',
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					 Authorization:uni.getStorageSync('token')
					 
				},
				data:{
					
				},
				
				 success: res => {
					
					reslove(res)
				 },
				
			})
		});
}

export function emitcommentToLZ(data){
	data = JSON.stringify(data)
	return new Promise(function(resolve,reject){
		uni.request({
			url:`${baseUrl}/video/setComment`,
			method:'POST',
			header:{
				'Content-Type':'application/x-www-form-urlencoded',
				 Authorization:uni.getStorageSync('token')
				 
			},
			data:{
				data:data
			},
			success: (res) => {
				resolve(res)
			}
		})
	})
}