
		
export default function	touch(e){
	
				//记录用户按下的坐标
				    let startX = e.changedTouches[0].clientX;
				    let startY = e.changedTouches[0].clientY;
					
				
				return function (e){
					
					 let endX = e.changedTouches[0].clientX;
					 let endY = e.changedTouches[0].clientY;
					
					 //滑动的方向
					 let direction = "";
					  //先判断用户滑动的距离  用[绝对值 ] 是否合法  合法：判断滑动的方向
					        if (Math.abs(endY - startY) > 20) {
					        //滑动方向  结束大于				 
					        direction = endY - startY > 0 ? "bottom" : "top";
							
					      } else {
							  
					        return "判断失误";
					      }
					 						
					   //    if(direction === "top"){
					 											
					 		// }else{
					 						 
					 		//  }
							startX = null
							startY = null
							endX = null
							endY = null
							return direction
				 }
				
			}