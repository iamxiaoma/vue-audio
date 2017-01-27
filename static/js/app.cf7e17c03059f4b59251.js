webpackJsonp([1,0],[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=i(8),o=n(r),a=i(4),s=n(a);new o.default({el:"#app",template:"<App/>",components:{App:s.default}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PLAY_CLASS="pause",t.PAUSE_CLASS="play",t.LOAD_CLASS="load",t.SINGLE_PLAY=0,t.ORDER_PLAY=1,t.SINGLE_CICLE=2,t.LISTING_CICLE=3,t.RANDOM_PLAY=4},function(e,t){},function(e,t){},function(e,t,i){var n,r;i(2),n=i(9);var o=i(6);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=n},function(e,t,i){var n,r;i(3),n=i(10);var o=i(7);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-4b3ead08",e.exports=n},function(e,t){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"app"}},[e._h("div",{staticClass:"parameter"},[e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",name:"single",id:"single"},domProps:{value:e.single_play,checked:e._q(e.type,e.single_play)},on:{change:function(t){e.type=e.single_play}}})," ",e._h("label",{attrs:{for:"single"}},["single-play"])," ",e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",name:"loop",id:"loop"},domProps:{value:e.single_cicle,checked:e._q(e.type,e.single_cicle)},on:{change:function(t){e.type=e.single_cicle}}})," ",e._h("label",{attrs:{for:"loop"}},["single-cicle"])," ",e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",name:"order",id:"order"},domProps:{value:e.order_play,checked:e._q(e.type,e.order_play)},on:{change:function(t){e.type=e.order_play}}})," ",e._h("label",{attrs:{for:"order"}},["order-play"])," ",e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",name:"listing",id:"listing"},domProps:{value:e.listing_cicle,checked:e._q(e.type,e.listing_cicle)},on:{change:function(t){e.type=e.listing_cicle}}})," ",e._h("label",{attrs:{for:"listing"}},["listing-cicle"])," ",e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",name:"random",id:"random"},domProps:{value:e.random_play,checked:e._q(e.type,e.random_play)},on:{change:function(t){e.type=e.random_play}}})," ",e._h("label",{attrs:{for:"random"}},["random-play"])])," ",e._h("div",{staticClass:"audio-container"},[e._l(e.lists,function(t,i){return e._h("vue-audio",{attrs:{source:t.source,time:t.time,index:i,type:e.type}})})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"player",on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.startPlay(t)}}},[e._h("svg",{staticClass:"progress",attrs:{width:e.svgOptions.width,height:e.svgOptions.height}},[e._h("path",{attrs:{fill:e.svgOptions.fill,stroke:e.svgOptions.stroke,"stroke-width":e.svgOptions.strokeWidth,d:e.d}})])," ",e._h("a",{class:e.currentState,attrs:{href:"javascript:void(0)"}},[e._h("audio",{staticClass:"vue-audio",attrs:{preload:"auto",src:e.source,duration:e.time,loop:e.loop},on:{ended:e._ended,playing:e._playing,pause:e._pause,error:e._error,timeupdate:e._timeupdate,waiting:e._waiting}})," ",e._h("p",{staticClass:"time",domProps:{textContent:e._s(e.currentProgress)}})])])},staticRenderFns:[]}},,function(e,t,i){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(5),a=r(o),s=i(1),u=n(s);t.default={name:"app",components:{vueAudio:a.default},data:function(){return{lists:[{source:"http://file.kuyinyun.com/group2/M00/EF/C0/rBBGelUPiWiACpYhAAQfE72-jHE679.mp3",time:"0:16"},{source:"http://file.kuyinyun.com/group2/M00/61/1A/rBBGelcTAZCAcQ4cAAcmErMReH4964.mp3",time:"0:22"},{source:"http://file.kuyinyun.com/group1/M00/94/83/rBBGdFYkXFuAYuTRAA2ax4_NmEk387.mp3",time:"0:55"},{source:"http://file.kuyinyun.com/group2/M00/84/DF/rBBGelZL7EuAKFL_ABiwByGtPBo792.mp3",time:"0:33"}],type:u.SINGLE_PLAY,single_play:u.SINGLE_PLAY,single_cicle:u.SINGLE_CICLE,order_play:u.ORDER_PLAY,listing_cicle:u.LISTING_CICLE,random_play:u.RANDOM_PLAY}}}},function(e,t,i){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),o=n(r),a=void 0;t.default={data:function(){return{currentTime:"",currentState:o.PAUSE_CLASS,audios:[],progress:"",d:""}},props:{source:{type:String,default:""},time:{type:String,default:""},type:{type:Number,default:o.SINGLE_PLAY},index:{type:Number,default:0},svgOptions:{type:Object,default:function(){return{width:40,height:40,fill:"none",stroke:"#007aff",strokeWidth:2}}}},mounted:function(){this.$nextTick(function(){this.audios=document.getElementsByClassName("vue-audio")})},computed:{loop:function(){return this.type===o.SINGLE_CICLE},currentProgress:function(){return this.progress||this.time}},methods:{startPlay:function(e){var t=e.currentTarget,i=t.querySelector("audio");i.paused||i.ended?i.play():i.pause()},_timeupdate:function(e){var t=e.target,i=t.currentTime,n=t.duration,r=(100/n*i).toFixed(1);(isNaN(r)||"0.0"===r)&&(r=0),this.progress=0===r?"":r+"%",r>100&&(r=100);var o=this.svgOptions.width/2,a=this.svgOptions.height/2,s=o-this.svgOptions.strokeWidth/2,u=o,p=a-s,l=0,d=1,c=2*Math.PI,_=0;r*c/100>=Math.PI&&(_=1);var f=o+s*Math.sin(c*r/100),h=a-s*Math.cos(c*r/100),y="M"+u+","+p+" A"+s+","+s+" "+l+" "+_+" "+d+" "+f+","+h;this.d=y},_playing:function(e){this.currentState=o.PLAY_CLASS,this._stopOther(e.path[2])},_pause:function(){this.currentState=o.PAUSE_CLASS},_waiting:function(){this.currentState=o.LOAD_CLASS},_ended:function(){this.progress="",this._pause(),this._typeControl()},_error:function(e){console.log(e)},_typeControl:function(){if(this.type!==o.SINGLE_PLAY){var e=this.index,t=void 0;return this.type===o.ORDER_PLAY&&e<this.audios.length-1?(t=e+1,void this.audios[t].play()):this.type===o.LISTING_CICLE?(t=e===this.audios.length-1?0:e+1,void this.audios[t].play()):void(this.type===o.RANDOM_PLAY&&(t=Math.floor((this.audios.length-1)*Math.random()),t>=e&&(t+=1),this.audios[t].play()))}},_stopOther:function(e){if(a&&a!==e){var t=a.querySelector("audio");t.pause(),t.currentTime>0&&(t.currentTime=0)}a=e}}}}]);
//# sourceMappingURL=app.cf7e17c03059f4b59251.js.map