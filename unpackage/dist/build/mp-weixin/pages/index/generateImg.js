(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/generateImg"],{1857:function(t,e,r){"use strict";(function(t){function r(t){return a(t)||n(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={props:{img:Array,text:Array,canvasH:Number,canvasW:{type:Number,default:720}},data:function(){return{ctx:null,k:""}},onReady:function(){this.k=t.getSystemInfoSync().screenWidth/750,this.ctx=t.createCanvasContext("generate",this)},methods:{px2rpx:function(){if(1===arguments.length)return Math.floor(arguments[0]/this.k);var t=[],e=!0,r=!1,i=void 0;try{for(var n,a=arguments[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var c=n.value;t.push(Math.floor(c/this.k))}}catch(s){r=!0,i=s}finally{try{e||null==a.return||a.return()}finally{if(r)throw i}}return t},rpx2px:function(){if(1===arguments.length)return Math.floor(arguments[0]*this.k);var t=[],e=!0,r=!1,i=void 0;try{for(var n,a=arguments[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var c=n.value;t.push(Math.floor(c*this.k))}}catch(s){r=!0,i=s}finally{try{e||null==a.return||a.return()}finally{if(r)throw i}}return t},generate:function(){var e,i=this;this.ctx.setFillStyle("#FFFFFF"),(e=this.ctx).fillRect.apply(e,[0,0].concat(r(this.rpx2px(this.canvasW,this.canvasH))));var n=!0,a=!1,c=void 0;try{for(var s,o=this.img[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l,h,x,u,p,f=s.value;if(this.ctx.beginPath(),this.ctx.save(),f.mirror)(h=this.ctx).translate.apply(h,r(this.rpx2px(f.x+f.w/2,f.y+f.h/2))),this.ctx.scale(-1,1),(x=this.ctx).translate.apply(x,r(this.rpx2px(-f.x-f.w/2,-f.y-f.h/2)));if(f.degrees)(u=this.ctx).translate.apply(u,r(this.rpx2px(f.x+f.w/2,f.y+f.h/2))),this.ctx.rotate(f.degrees*Math.PI/180),(p=this.ctx).translate.apply(p,r(this.rpx2px(-f.x-f.w/2,-f.y-f.h/2)));this.radiusRect.apply(this,r(this.rpx2px(f.x,f.y,f.w,f.h,f.r))),this.ctx.clip(),(l=this.ctx).drawImage.apply(l,[f.src].concat(r(this.rpx2px(f.x,f.y,f.w,f.h)))),this.ctx.restore()}}catch(j){a=!0,c=j}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}var y=!0,v=!1,d=void 0;try{for(var g,m=this.text[Symbol.iterator]();!(y=(g=m.next()).done);y=!0){var b,w,T,S=g.value,k="",F=0,A=0;if(S.w=this.rpx2px(S.w),this.ctx.font="".concat(S.weight," ").concat(this.rpx2px(S.size),"px/").concat(this.rpx2px(S.lineHeight),"px sans-serif"),this.ctx.setFillStyle(S.color),this.ctx.setTextBaseline("top"),this.ctx.measureText(S.content).width<=S.w){if((b=this.ctx).fillText.apply(b,[S.content].concat(r(this.rpx2px(S.x,S.y)))),S.lineThrough)this.ctx.beginPath(),(w=this.ctx).moveTo.apply(w,r(this.rpx2px(S.x,S.y+S.size/2-3))),(T=this.ctx).lineTo.apply(T,r(this.rpx2px(S.x+this.px2rpx(this.ctx.measureText(S.content).width),S.y+S.size/2-3))),this.ctx.setStrokeStyle(S.color),this.ctx.setLineWidth(1.6),this.ctx.stroke()}else for(var M=0;M<S.content.length;M++)if(k+=S.content[M],this.ctx.measureText(k).width>=S.w){if(F===S.maxLineNum){var P;(P=this.ctx).fillText.apply(P,[S.content.substring(A,M-1)+"..."].concat(r(this.rpx2px(S.x,S.y+S.lineHeight*F))));break}var H;(H=this.ctx).fillText.apply(H,[S.content.substring(A,M+1)].concat(r(this.rpx2px(S.x,S.y+S.lineHeight*F)))),A=M+1,F+=1,k=""}else{var I;if(M===S.content.length-1)(I=this.ctx).fillText.apply(I,[k].concat(r(this.rpx2px(S.x,S.y+S.lineHeight*F))))}}}catch(j){v=!0,d=j}finally{try{y||null==m.return||m.return()}finally{if(v)throw d}}this.ctx.draw(!1,function(e){t.canvasToTempFilePath({canvasId:"generate",success:function(t){i.$emit("exportSuccess",t.tempFilePath)}},i)})},radiusRect:function(t,e,r,i,n){(n>r/2||n>i/2)&&(n=Math.min(r,i)/2),this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.arcTo(t+r,e,t+r,e+n,n),this.ctx.lineTo(t+r,e),this.ctx.arcTo(t+r,e+i,t+r-n,e+i,n),this.ctx.lineTo(t+r,e+i),this.ctx.arcTo(t,e+i,t,e+i-n,n),this.ctx.lineTo(t,e+i),this.ctx.arcTo(t,e,t+n,e,n),this.ctx.lineTo(t,e)}}};e.default=c}).call(this,r("543d")["default"])},5984:function(t,e,r){"use strict";r.r(e);var i=r("8d58"),n=r("8c49");for(var a in n)"default"!==a&&function(t){r.d(e,t,function(){return n[t]})}(a);var c,s=r("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=o.exports},"8c49":function(t,e,r){"use strict";r.r(e);var i=r("1857"),n=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},"8d58":function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},a=[];r.d(e,"b",function(){return n}),r.d(e,"c",function(){return a}),r.d(e,"a",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/generateImg-create-component',
    {
        'pages/index/generateImg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5984"))
        })
    },
    [['pages/index/generateImg-create-component']]
]);
