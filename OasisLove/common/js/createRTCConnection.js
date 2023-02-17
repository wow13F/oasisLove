export async function VideoInitiator(stream,sendOffer,sendCandidate){	   				   
				   // 创建链接实例 peerA（发起端）
				    const peerA = new RTCPeerConnection()				   					
					
					// 为 peerA（发起端）添加媒体流数据
				   stream.getTracks().forEach(track => {
				   	 peerA.addTrack(track, stream)
				   })
				   
				   // 为peerA（发起端）创建 offer
				   const offer = await peerA.createOffer()
				   
				   // 将 发起者 创建的 offer 发送给 接收者
				 
				   sendOffer(offer)
				   
				   // 设置会话描述
				  function setSessionDescription(answer){
					 // 将 发起者 创建的offer 设置为 发起者 的本地描述（SDP）
					  peerA.setLocalDescription(offer)
					 
					 // 将 接收者 发来的answer 设置为 发起者 的远程描述(SDP)
					  peerA.setRemoteDescription(answer)
				 }
				   
				   // 当 发起者 设置了  peerA.setLocalDescription(this.offer) 后 会触发下面这个监听函数
				   peerA.onicecandidate = event => {
				     if (event.candidate) {
						 // 将 event.candidate 发送给 接收者
						sendCandidate(event.candidate,clearPeerA)				        
				     }
				   }
				   function clearPeerA(){
					   
					  peerA.close()
					  
					   
				   }
				   return setSessionDescription
				   // this.peerA.onconnectionstatechange = event => {
				   //   if (this.peerA.connectionState === 'connected') {
				   //     console.log('对等连接成功！')
				   //   }
				   //   if (this.peerA.connectionState === 'disconnected') {
				   //     console.log('连接已断开！')
				   //   }
				   // }	 
	 
}

export async function VideoReceiver(offer,onTrack,sendAnswer){
	
	const peerB = new RTCPeerConnection()
	console.log("createRTC连接函数拿到的offer",offer)
	
	peerB.ontrack = async event => {
	  let [ remoteStream ] = event.streams
	  console.log("peerB.ontrack函数执行了,拿到的媒体流",remoteStream)
	  onTrack(remoteStream)
	 
	};
	// 将 peerA 发来的offer 设置为自己的远程描述(SDP)			
	await peerB.setRemoteDescription(offer,(res)=>{
		console.log("peerB 设置远程描述成功!!!",res)
	},(err)=>{
		console.log("peerB 设置远程描述失败!!!",err)
	})
	
	// 创建 peerB接收端的 answer
	const answer = await peerB.createAnswer();
	
	// 将自己创建的answer 设置为自己的本地描述（SDP）				
	await peerB.setLocalDescription(answer)
	
	function clearPeerB(){
						   
		//peerB.close()
		console.log("peerB",peerB)
		
						   
	}
	//  将 接收者 的 answer 传递给 发起者
	sendAnswer(answer,clearPeerB)
	
	
	function addIceCandidate(Candidate){
		 peerB.addIceCandidate(Candidate)
	}
	return addIceCandidate
	
}