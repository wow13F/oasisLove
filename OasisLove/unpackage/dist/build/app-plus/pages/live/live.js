!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e){t.exports={"@VERSION":2}},function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,a,u,c){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(f.functional){f._injectStyles=l;var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},,function(t,e,n){"use strict";var i=n(11),r=n(7),o=n(1);var s=Object(o.a)(r.default,i.b,i.c,!1,null,null,"248582ec",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(17).default,this.options.style):Object.assign(this.options.style,n(17).default)}).call(s),e.default=s.exports},,,,function(t,e,n){"use strict";var i=n(8),r=n.n(i);e.default=r.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=(i=n(20))&&i.__esModule?i:{default:i};var o={data:function(){return{url:"",src:"",windowWidth:0,windowHeight:0,windowWidthPUSH:0,windowHeightPUSH:0,title:"\u7b49\u5f85\u5bf9\u65b9\u63a5\u6536\u9080\u8bf7...",statusBarHeight:0,userName:"\u54d2\u54d2\u54d2"}},onReady:function(){var e=this;this.context=uni.createLivePusherContext("livePusher",this),setTimeout((function(){e.start(),e.join()}),10),this.src=r.default.state.duifangHuiLiuUrl,t("log",this.src," at pages/live/live.nvue:95"),t("log",r.default.state.duifangHuiLiuUrl," at pages/live/live.nvue:96")},computed:{duifangHuiLiuUrl:function(){return r.default.state.duifangHuiLiuUrl}},onLoad:function(e){this.getSysteminfo(),this.url=e.url,e.HuiLiuUrl&&(this.src=e.HuiLiuUrl,t("log",this.src," at pages/live/live.nvue:110"),this.userName="\u54c8\u54c8\u54c8",this.title="\u901a\u8bdd\u4e2d",this.windowWidthPUSH=this.windowWidthPUSH/3,this.windowHeightPUSH=this.windowHeightPUSH/6)},methods:{getSysteminfo:function(){var t=this;uni.getSystemInfo({success:function(e){t.windowWidth=e.windowWidth,t.windowHeight=e.windowHeight,t.windowWidthPUSH=e.windowWidth,t.windowHeightPUSH=e.windowHeight,t.statusBarHeight=e.statusBarHeight}})},statechange:function(t){},netstatus:function(e){t("log","netstatus:"+JSON.stringify(e)," at pages/live/live.nvue:145")},error:function(e){t("log","error:"+JSON.stringify(e)," at pages/live/live.nvue:148")},start:function(){this.context.start({success:function(t){}})},close:function(){this.context.close({success:function(e){t("log","livePusher.close:"+JSON.stringify(e)," at pages/live/live.nvue:160")}})},snapshot:function(){this.context.snapshot({success:function(e){t("log",JSON.stringify(e)," at pages/live/live.nvue:167")}})},resume:function(){this.context.resume({success:function(e){t("log","livePusher.resume:"+JSON.stringify(e)," at pages/live/live.nvue:174")}})},pause:function(){this.context.pause({success:function(e){t("log","livePusher.pause:"+JSON.stringify(e)," at pages/live/live.nvue:181")}})},stop:function(){this.context.stop({success:function(t){uni.navigateBack({delta:1})}})},switchCamera:function(){this.context.switchCamera({success:function(e){t("log","livePusher.switchCamera:"+JSON.stringify(e)," at pages/live/live.nvue:198")}})},startPreview:function(){this.context.startPreview({success:function(e){t("log","livePusher.startPreview:"+JSON.stringify(e)," at pages/live/live.nvue:205")}})},stopPreview:function(){this.context.stopPreview({success:function(e){t("log","livePusher.stopPreview:"+JSON.stringify(e)," at pages/live/live.nvue:212")}})},join:function(){}}};e.default=o}).call(this,n(15).default)},function(t,e){t.exports={".livePusher":{"":{position:["fixed",0,0,1],right:[0,0,0,1],top:[0,0,0,1]}},".bg-top":{"":{position:["fixed",0,0,2],top:[0,0,0,2],left:[0,0,0,2]}},".top-title":{"":{height:["88rpx",0,0,3],position:["fixed",0,0,3],left:[0,0,0,3],backgroundColor:["#808080",0,0,3],opacity:[.6,0,0,3],display:["flex",0,0,3],justifyContent:["center",0,0,3]}},".close-img":{"":{height:["56rpx",0,0,4],width:["56rpx",0,0,4],position:["absolute",0,0,4],left:["48rpx",0,0,4]}},".title":{"":{textAlign:["center",0,0,5],opacity:[.6,0,0,5],fontSize:["32rpx",0,0,5],color:["#FFFFFF",0,0,5]}},".user":{"":{display:["flex",0,0,6],position:["fixed",0,0,6],alignItems:["center",0,0,6]}},".user-img":{"":{width:["160rpx",0,0,7],height:["160rpx",0,0,7],borderRadius:[50,0,0,7]}},".user-name":{"":{paddingTop:["24rpx",0,0,8],fontSize:["40rpx",0,0,8],color:["#000000",0,0,8]}},".btns":{"":{display:["flex",0,0,9],flexDirection:["row",0,0,9],justifyContent:["space-around",0,0,9],position:["fixed",0,0,9],bottom:["220rpx",0,0,9]}},".cancel":{"":{display:["flex",0,0,10],justifyContent:["center",0,0,10],width:["140rpx",0,0,10],height:["180rpx",0,0,10]}},".btn-img":{"":{width:["140rpx",0,0,11],height:["140rpx",0,0,11],marginTop:[0,0,0,11],marginBottom:[0,0,0,11]}},".yuyin":{"":{display:["flex",0,0,12],justifyContent:["center",0,0,12],flexWrap:["nowrap",0,0,12],width:["200rpx",0,0,12],height:["180rpx",0,0,12]}},".btn-text":{"":{textAlign:["center",0,0,13],marginTop:["20rpx",0,0,13],fontSize:["28rpx",0,0,13],color:["#000000",0,0,13],letterSpacing:[0,0,0,13],fontWeight:["400",0,0,13]}},"@VERSION":2}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",[n("view",{staticClass:["uni-padding-wrap","uni-common-mt"]},[n("view",[n("u-video",{style:{width:t.windowWidth+"px",height:t.windowHeight+"px"},attrs:{id:"myVideo",src:t.src,controls:!0,autoplay:"true"},on:{error:t.videoErrorCallback}})],1)]),n("live-pusher",{ref:"livePusher",staticClass:["livePusher"],style:{width:t.windowWidthPUSH+"px",height:t.windowHeightPUSH+"px"},attrs:{id:"livePusher",url:t.url,mode:"SD",muted:!0,enableCamera:!0,autoFocus:!0,beauty:1,whiteness:"2",aspect:"9:16"},on:{statechange:t.statechange,netstatus:t.netstatus,error:t.error}}),n("view",{staticClass:["bg"]},[n("u-image",{staticClass:["bg-top"],style:{width:t.windowWidth+"px",height:t.windowHeight+"px"},attrs:{src:"",mode:""}})],1),n("view",{staticClass:["top-title"],style:{width:t.windowWidth+"px",top:t.statusBarHeight+"px"}},[n("u-image",{staticClass:["close-img"],attrs:{src:"../../static/image/suoxiao.png"}}),n("u-text",{staticClass:["title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.title))])],1),n("view",{staticClass:["user"],style:{width:t.windowWidth+"px",top:t.statusBarHeight+84+"px"}},[n("u-image",{staticClass:["user-img"],attrs:{src:"../../static/logo.png"}}),n("u-text",{staticClass:["user-name"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.duifangHuiLiuUrl))])],1),n("view",{staticClass:["btns"],style:{width:t.windowWidth+"px"}},[n("view",{staticClass:["cancel"],on:{click:function(e){t.stop()}}},[n("u-image",{staticClass:["btn-img"],attrs:{src:"../../static/image/guaduan.png"}}),n("u-text",{staticClass:["btn-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u53d6\u6d88")])],1),n("view",{staticClass:["yuyin"],on:{click:function(e){t.stopPreview()}}},[n("u-image",{staticClass:["btn-img"],attrs:{src:"../../static/image/qhyy.png"}}),n("u-text",{staticClass:["btn-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5207\u6362\u5230\u8bed\u97f3\u901a\u8bdd")])],1)])],1)])},r=[]},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(13).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=r.a},function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}},function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"==typeof __channelId__&&__channelId__}function o(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)},e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(n){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[s](u)}},,function(t,e,n){"use strict";n.r(e);var i=n(9),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=r.a},,function(t,e,n){"use strict";n.r(e);n(12),n(14);var i=n(3);i.default.mpType="page",i.default.route="pages/live/live",i.default.el="#root",new Vue(i.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(21)),r=o(n(22));function o(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var s=new r.default.Store({state:{duifangHuiLiuUrl:"abc"},mutations:{changeduifangHuiLiuUrl:function(t,e){t.duifangHuiLiuUrl=e}},actions:{addCountAction:function(t,e){t.commit("changeduifangHuiLiuUrl",e)}}});e.default=s},function(t,e){t.exports=Vue},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=y,e.mapState=e.mapMutations=e.mapGetters=e.mapActions=e.createNamespacedHelpers=e.Store=e.default=void 0;var i=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function o(t){return null!==t&&"object"==typeof t}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.hasChild=function(t){return t in this._children},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){r(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,a);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},u.prototype.update=function(t){!function t(e,n,i){0;if(n.update(i),i.modules)for(var r in i.modules){if(!n.getChild(r))return void 0;t(e.concat(r),n.getChild(r),i.modules[r])}}([],this.root,t)},u.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var o=new s(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&r(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)},u.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return e.hasChild(n)};var c;var l=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var o=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(o,t,e)},this.commit=function(t,e,n){return a.call(o,t,e,n)},this.strict=r;var l=this._modules.root.state;v(this,l,[],this._modules.root),h(this,l),n.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){i.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){i.emit("vuex:action",t,e)}),{prepend:!0}))}(this)};e.Store=l;var f={state:{configurable:!0}};function p(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,s={};r(o,(function(e,n){s[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var a=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:s}),c.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),c.nextTick((function(){return i.$destroy()})))}function v(t,e,n,i,r){var o=!n.length,s=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=i),!o&&!r){var a=g(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit((function(){c.set(a,u,i.state)}))}var l=i.context=function(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=m(n,i,r),s=o.payload,a=o.options,u=o.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:i?t.commit:function(n,i,r){var o=m(n,i,r),s=o.payload,a=o.options,u=o.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return g(t.state,n)}}}),r}(t,s,n);i.forEachMutation((function(e,n){!function(t,e,n,i){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,i.state,e)}))}(t,s+n,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:s+n,r=e.handler||e;!function(t,e,n,i){(t._actions[e]||(t._actions[e]=[])).push((function(e){var r,o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return(r=o)&&"function"==typeof r.then||(o=Promise.resolve(o)),t._devtoolHook?o.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):o}))}(t,i,r,l)})),i.forEachGetter((function(e,n){!function(t,e,n,i){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)}}(t,s+n,e,l)})),i.forEachChild((function(i,o){v(t,e,n.concat(o),i,r)}))}function g(t,e){return e.reduce((function(t,e){return t[e]}),t)}function m(t,e,n){return o(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function y(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(t){0},l.prototype.commit=function(t,e,n){var i=this,r=m(t,e,n),o=r.type,s=r.payload,a=(r.options,{type:o,payload:s}),u=this._mutations[o];u&&(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},l.prototype.dispatch=function(t,e){var n=this,i=m(t,e),r=i.type,o=i.payload,s={type:r,payload:o},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(t){0}var u=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){u.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(t){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(t){0}e(t)}))}))}},l.prototype.subscribe=function(t,e){return p(t,this._subscribers,e)},l.prototype.subscribeAction=function(t,e){return p("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},l.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},l.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},l.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=g(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])})),d(this)},l.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},l.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,f);var _=O((function(t,e){var n={};return S(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=A(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n}));e.mapState=_;var w=O((function(t,e){var n={};return S(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=A(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"==typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n}));e.mapMutations=w;var b=O((function(t,e){var n={};return S(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||A(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n}));e.mapGetters=b;var x=O((function(t,e){var n={};return S(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=A(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"==typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n}));e.mapActions=x;var C=function(t){return{mapState:_.bind(null,t),mapGetters:b.bind(null,t),mapMutations:w.bind(null,t),mapActions:x.bind(null,t)}};function S(t){return function(t){return Array.isArray(t)||o(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function O(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function A(t,e,n){return t._modulesNamespaceMap[n]}e.createNamespacedHelpers=C;var P={Store:l,install:y,version:"3.4.0",mapState:_,mapMutations:w,mapGetters:b,mapActions:x,createNamespacedHelpers:C};e.default=P}]);