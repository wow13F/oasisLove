export function dateTime(t) {
	
		let time = new Date(t)
		let newtime = new Date()
		
		let d = time.getTime()
		
		let h = time.getHours()
		let m = time.getMinutes()
		let Y = time.getFullYear()
		let M = time.getMonth()+1
		let D = time.getDate()
		
		
		let nd = newtime.getTime()
		let nh = newtime.getHours()
		let nm = newtime.getMinutes()
		let nY = newtime.getFullYear()
		let nM = newtime.getMonth()+1
		let nD = newtime.getDate()
		//console.log(nD)
		
		// 当天的时间
		if(D===nD && Y===nY && M===nM){
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+m
			}
			return h+':'+m
		}
		
		
		//console.log(D+1==nD && Y==nY && M==nM)
		// 前天时间
		 if(D+1==nD && Y==nY && M==nM && M==nM){
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+m
			}
			return '昨天'+h+':'+m
		}
		else{
			
			//console.log(D)
			return Y+'/'+M+'/'+D
		}
	}


export function dateFormate(dates){
	
	let date = new Date(dates); //转换成Data();
	//console.log(date);
	let y = date.getFullYear();
	
	let m = date.getMonth() + 1;
	m = m < 10 ? '0' + m : m;
	
	let d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	
	
	return y + '-' + m + '-' + d;

}
export function Filepath(dates){
	
	let date = new Date(dates); //转换成Data();
	//console.log(date);
	let y = date.getFullYear();
	
	let m = date.getMonth() + 1;
	m = m < 10 ? '0' + m : m;
	
	let d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	
	
	return y + '-' + m + '-' + d;

}


export function dateTimeN(t,t2) {
		console.log(t2)
		let time = new Date(t)
		let time2 = new Date(t2)
		let newtime = new Date()
		
		let d = time.getTime()
		
		let h = time.getHours()
		let m = time.getMinutes()
		let Y = time.getFullYear()
		let M = time.getMonth()+1
		let D = time.getDate()
		
		let d2 = time2.getTime()
		
		let h2 = time2.getHours()
		let m2 = time2.getMinutes()
		let Y2 = time2.getFullYear()
		let M2 = time2.getMonth()+1
		let D2 = time2.getDate()
		
		if(Y2==Y && M2==M && D2==D){
			console.log(D2)
			if(h2==h){
				if((m2-m)<5)
					{
						console.log(m2-m)
						return ''
					}
			}
		}
		
		let nd = newtime.getTime()
		let nh = newtime.getHours()
		let nm = newtime.getMinutes()
		let nY = newtime.getFullYear()
		let nM = newtime.getMonth()+1
		let nD = newtime.getDate()
		//console.log(nD)
		
		// 当天的时间
		if(D===nD && Y===nY && M===nM){
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+m
			}
			
			if(nh-h==0 && nm-m<=5 )
			{
				return -(nm-m)
			}
			return h+':'+m
		}
		
		
		//console.log(D+1==nD && Y==nY && M==nM)
		// 前天时间
		 if(D+1==nD && Y==nY && M==nM && M==nM){
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+m
			}
			return '昨天'+h+':'+m
		}
		else{
			
			//console.log(D)
			return Y+'/'+M+'/'+D
		}
	}
	
	
export function dateTimeSend(t) {
	
		let time = new Date(t)
		
		
		let d = time.getTime()
		let s = time.getSeconds()
		let h = time.getHours()
		let m = time.getMinutes()
		let Y = time.getFullYear()
		let M = time.getMonth()+1
		let D = time.getDate()
		
		
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+m
			}
			if(s<10){
				s='0'+s
			}
			if(D<10){
				D='0'+D
			}
			if(M<10){
				M='0'+M
			}
		//2022-01-23 15:33:33
		//console.log(Y+'-'+M+'-'+D+' '+h+':'+m+':'+s)
		return Y+'-'+M+'-'+D+' '+h+':'+m+':'+s
		
	}	