(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-friendrequest-friendrequest"],{"33b3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={dataTime:function(e){var t=new Date(e),i=new Date,n=(t.getTime(),t.getHours()),a=t.getMinutes(),r=t.getFullYear(),s=t.getMonth()+1,o=t.getDate(),u=(i.getTime(),i.getHours(),i.getMinutes(),i.getFullYear()),d=i.getMonth(),c=i.getDate();return o===c&&s===d&&r===u?(n<10&&(n="0"+n),a<10&&(a="0"+a),n+":"+a):o+1===c&&s===d&&r===u?(n<10&&(n="0"+n),a<10&&(a="0"+a),"昨天"+n+":"+a):r+"/"+s+"/"+o},dataTime1:function(e){var t=new Date(e),i=new Date,n=(t.getTime(),t.getHours()),a=t.getMinutes(),r=t.getFullYear(),s=t.getMonth()+1,o=t.getDate(),u=(i.getTime(),i.getHours(),i.getMinutes(),i.getFullYear()),d=i.getMonth(),c=i.getDate();return o===c&&s===d&&r===u?(n<10&&(n="0"+n),a<10&&(a="0"+a),n+":"+a):o+1===c&&s===d&&r===u?(n<10&&(n="0"+n),a<10&&(a="0"+a),"昨天"+n+":"+a):r===u?(n<10&&(n="0"+n),a<10&&(a="0"+a),s+"月"+o+"日"+n+":"+a):(n<10&&(n="0"+n),a<10&&(a="0"+a),r+"年"+s+"月"+o+"日"+n+":"+a)},debounce:function(e,t){var i,n=t||500;return function(){var t=this,a=arguments;i&&clearTimeout(i),i=setTimeout((function(){i=null,e.apply(t,a)}),n)}},paixu:function(e,t,i){var n;if(0==i){for(var a=1;a<e.length;a++)for(var r=a;r>0;r--)e[r][t]>e[r-1][t]&&(n=e[r],e[r]=e[r-1],e[r-1]=n);return e}if(1==i){for(var s=1;s<e.length;s++)for(var o=s;o>0;o--)e[o][t]<e[o-1][t]&&(n=e[o],e[o]=e[o-1],e[o-1]=n);return e}}};t.default=n},3433:function(e,t,i){"use strict";var n=i("4ea4");i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("896b")),r=n(i("33b3")),s={data:function(){return{requesters:[],uid:"",myname:"",token:""}},methods:{getStorages:function(){try{var e=uni.getStorageSync("user");e?(this.uid=e.id,this.token=e.token,this.myname=e.name):uni.navigateTo({url:"../signin/signin"})}catch(t){}},backOne:function(){uni.navigateBack({delta:1})},changeTime:function(e){return r.default.dataTime(e)},getRequesters:function(){this.requesters=a.default.friends();for(var e=0;e<this.requesters.length;e++)this.requesters[e].imgurl="../../static/images/index/"+this.requesters[e].imgurl},friendRequest:function(){var e=this;uni.request({url:this.serverUrl+"/index/getfriend",data:{uid:this.uid,state:1,token:this.token},method:"POST",success:function(t){console.log(t);var i=t.data.status;if(200==i){for(var n=t.data.result,a=0;a<n.length;a++)n[a].imgurl=e.serverUrl+"/user/"+n[a].imgurl,e.getLeave(n,a);e.requesters=n}else 500==i?uni.showToast({title:"服务器出错啦",icon:"none",duration:1500}):300==i&&uni.navigateTo({url:"../signin/signin?name="+e.myname})}})},getLeave:function(e,t){var i=this;uni.request({url:this.serverUrl+"/index/getlastmsg",data:{uid:this.uid,fid:e[t].id,token:this.token},method:"POST",success:function(n){var a=n.data.status;if(200==a){var r=n.data.result,s=e[t];s.msg=r.message,e.splice(t,1,s)}else 500==a?uni.showToast({title:"服务器出错啦",icon:"none",duration:1500}):300==a&&uni.navigateTo({url:"../signin/signin?name="+i.myname})}})},refuse:function(e){var t=this;uni.request({url:this.serverUrl+"/friend/deletefriend",data:{uid:this.uid,fid:e,token:this.token},method:"POST",success:function(i){var n=i.data.status;if(console.log(i.data),200==n){for(var a=0;a<t.requesters.length;a++)t.requesters[a].id==e&&t.requesters.splice(a,1);t.requesters}else 500==n?uni.showToast({title:"服务器出错啦",icon:"none",duration:1500}):300==n&&uni.navigateTo({url:"../signin/signin?name="+t.myname})}})},agree:function(e){var t=this;uni.request({url:this.serverUrl+"/friend/updatefriendState",data:{uid:this.uid,fid:e,token:this.token},method:"POST",success:function(i){var n=i.data.status;if(console.log(i.data),200==n){for(var a=0;a<t.requesters.length;a++)t.requesters[a].id==e&&t.requesters.splice(a,1);t.requesters}else 500==n?uni.showToast({title:"服务器出错啦",icon:"none",duration:1500}):300==n&&uni.navigateTo({url:"../signin/signin?name="+t.myname})}})}},onLoad:function(){this.getStorages(),this.friendRequest(),console.log(this.requesters)}};t.default=s},"5a08":function(e,t,i){"use strict";i.r(t);var n=i("8fe2"),a=i("f76a");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("7c46");var s,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5756e70a",null,!1,n["a"],s);t["default"]=u.exports},"7c46":function(e,t,i){"use strict";var n=i("f830"),a=i.n(n);a.a},"896b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={friends:function(){var e=[{id:1,imgurl:"11.png",tip:2,name:"大海",time:new Date,news:"sadasdasd你娘的就能取暖ssssssssssssssssssss"},{id:2,imgurl:"12.png",tip:10,name:"能够",time:new Date,news:"sadas你娘的就能取暖"},{id:3,imgurl:"13.png",tip:12,name:"带走",time:new Date,news:"你娘的就能取暖"},{id:4,imgurl:"10.png",tip:100,name:"我的",time:new Date,news:"的就能取暖"},{id:5,imgurl:"11.png",tip:88,name:"忧愁",time:new Date,news:"能取暖"}];return e},isFriend:function(){var e=[{userid:1,friend:2},{userid:1,friend:5},{userid:1,friend:6},{userid:1,friend:8}];return e},message:function(){var e=[{id:"a",imgurl:"10.png",message:"你好啊",types:0,time:new Date-18e4,tip:0},{id:"a",imgurl:"10.png",message:"你好不好",types:0,time:new Date-6e4,tip:1},{id:"b",imgurl:"10.png",message:"你好",types:0,time:new Date-6e3,tip:2},{id:"b",imgurl:"10.png",message:"11.png",types:1,time:new Date-1e3,tip:3},{id:"a",imgurl:"10.png",message:"11.png",types:1,time:new Date-216e4,tip:4},{id:"b",imgurl:"10.png",message:"11.png",types:1,time:new Date-216e4,tip:5},{id:"a",imgurl:"10.png",message:"11.png",types:1,time:new Date-216e4,tip:6}];return e}};t.default=n},"8fe2":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"top-bar"},[n("v-uni-view",{staticClass:"top-bar-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backOne.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("eaa6")}})],1),n("v-uni-view",{staticClass:"top-bar-center"},[e._v("好友请求")]),n("v-uni-view",{staticClass:"zhanwei"})],1),e._l(e.requesters,(function(t){return n("v-uni-view",{key:t.id,staticClass:"main animate__animated animate__flipInX animate__faster"},[n("v-uni-view",{staticClass:"main1"},[n("v-uni-view",{staticClass:"reject",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.refuse(t.id)}}},[n("v-uni-view",{staticClass:"reject-1"},[e._v("拒绝")])],1),n("v-uni-view",{staticClass:"image"},[n("v-uni-image",{attrs:{src:t.imgurl,mode:""}})],1),n("v-uni-view",{staticClass:"agree",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.agree(t.id)}}},[n("v-uni-view",{staticClass:"agree-1"},[e._v("同意")])],1)],1),n("v-uni-view",{staticClass:"main2"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),n("v-uni-view",{staticClass:"date"},[e._v(e._s(e.changeTime(t.lastTime)))]),n("v-uni-view",{staticClass:"message"},[n("v-uni-view",{staticClass:"message1"},[e._v("留言："+e._s(t.msg))])],1)],1)],1)}))],2)},r=[]},a517:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-5756e70a]{width:100%;min-width:%?320?%;max-width:%?750?%;height:%?1536?%;margin:0 auto;display:flex;flex-direction:column}.container .top-bar[data-v-5756e70a]{border-bottom:1px solid rgba(39,40,50,.1);display:flex;justify-content:space-between}.container .top-bar .top-bar-left[data-v-5756e70a]{padding-left:%?24?%;padding-top:%?20?%}.container .top-bar .top-bar-left uni-image[data-v-5756e70a]{width:%?48?%;height:%?48?%}.container .top-bar .top-bar-center[data-v-5756e70a]{text-align:center;flex:1;padding-top:%?16?%;padding-bottom:%?16?%;font-size:20px;color:#272832}.container .top-bar .zhanwei[data-v-5756e70a]{width:%?72?%;height:%?84?%}.container .main[data-v-5756e70a]{display:flex;flex-direction:column;width:%?686?%;height:%?388?%;background:#fff;box-shadow:%?0?% %?24?% %?64?% %?-8?% rgba(0,0,0,.1);border-radius:%?20?%;margin-left:%?32?%;margin-top:%?100?%}.container .main .main1[data-v-5756e70a]{display:flex;justify-content:space-around;align-items:center;height:%?88?%}.container .main .main1 .reject[data-v-5756e70a]{width:%?160?%;height:%?64?%;display:flex;justify-content:center;align-items:center;background:rgba(255,93,91,.1);border-radius:%?20?%}.container .main .main1 .reject .reject-1[data-v-5756e70a]{font-size:%?32?%;font-weight:400;line-height:%?44?%;color:#ff5d5b}.container .main .main1 .image[data-v-5756e70a]{width:%?144?%;height:%?144?%}.container .main .main1 .image uni-image[data-v-5756e70a]{width:%?144?%;height:%?144?%;border-radius:50%;margin-top:%?-50?%;background-color:#ffe431}.container .main .main1 .agree[data-v-5756e70a]{width:%?160?%;height:%?64?%;display:flex;justify-content:center;align-items:center;background:#ff0;border-radius:%?20?%;background-color:#ffe431}.container .main .main1 .agree .agree-1[data-v-5756e70a]{font-size:%?32?%;font-weight:400;line-height:%?44?%}.container .main .main2[data-v-5756e70a]{display:flex;flex-direction:column;align-items:center;padding-top:%?20?%}.container .main .main2 .name[data-v-5756e70a]{font-size:%?36?%;font-weight:800;color:#272832;line-height:%?50?%}.container .main .main2 .date[data-v-5756e70a]{font-size:%?24?%;color:rgba(39,40,50,.4);line-height:%?34?%}.container .main .main2 .message[data-v-5756e70a]{background-color:#f3f4f6;border-radius:%?20?%;margin:0 %?32?%}.container .main .main2 .message .message1[data-v-5756e70a]{padding:%?20?% %?32?%;font-size:%?28?%;font-weight:400;color:rgba(39,40,50,.8);line-height:%?40?%}',""]),e.exports=t},eaa6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAZpJREFUaN7tmLGKwjAYgJN4IPQFBAc3EcUnEOxQqYvUycnBQWrcBRE6OQlVdFeKg7OTgoJgB8U3ELUvIPgCTjW5ofQO7ritNrmSb2sD+fN9Q2kLgEAgEAj4o9ltdpvdZLLltJyWs9vhOI7j+HAY9BzEWvQv8Vgv1ov1bBuO4RiOVRWkQRqk6/XIBvglbkADGpmMt/p8kiVZkmWjEfRcyFpcz+t5PZ9IIBe5yLVtIAMZyLmcLw6P8AiP1er0Or1Or/t9ZAKwFmcWgBfx0APwJh5aAF7F3x6Ad/G3Bfgv4j4fQW+ICqiACpuNd/UtTjqkQzqaZs2smTWzbdbiX+cNfMc+6IM+pazFmAUgZVIm5UoFHMABHC4X764koQmaoMl63c62s+1sqcRa3Ec8BN89gPcQ4kUorEG8hhAfQ6wC8BKC+Q8R62ydrfPj4Wqu5mqqSgd0QAeO461KEi3SIi2uVvpNv+k3RYlcAJ/5aD6aj+73l/kyX6ai/AyBaqiGaosF63OGhv+LDKdwCqe2W3zCJ3wyTdbnEggEgkjxCbMIY3VKnVAYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTI2VDEwOjAzOjIwKzA4OjAwCNe1sAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0yNlQxMDowMzoyMCswODowMHmKDQwAAABJdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2V3aWsxdG9paXZyL2Zhbmh1aS5zdmcnTsyBAAAAAElFTkSuQmCC"},f76a:function(e,t,i){"use strict";i.r(t);var n=i("3433"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},f830:function(e,t,i){var n=i("a517");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("0150cef4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);