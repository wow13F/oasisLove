import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    state:{//存放状态
        "offer":null,
        
    },
	
	 mutations: {
	        addOffer(state,offer) {
	            // 变更状态
	            state.offer = offer
	        }
	    },
		
		actions:{
		        addCountAction (context,offer) {
		            context.commit('addOffer',offer)
		        }
		    }
})
export default store