(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"27b1":function(i,e,s){"use strict";(function(i){s("ca5e"),s("921b");o(s("66fd"));var e=o(s("bfab"));function o(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,s("543d")["createPage"])},"36c0":function(i,e,s){"use strict";s.r(e);var o=s("7603"),t=s.n(o);for(var n in o)"default"!==n&&function(i){s.d(e,i,function(){return o[i]})}(n);e["default"]=t.a},4839:function(i,e,s){},7603:function(i,e,s){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(s("c803"));function t(i){return i&&i.__esModule?i:{default:i}}var n=function(){return s.e("pages/cart/icon-link").then(s.bind(null,"4b5f"))},l={components:{cart:n},data:function(){return{scrollTop:0,amapPlugin:null,key:"820ff2213924c04f7e4dc891190b1c1e",location:{longitude:"116.46",latitude:"39.92",name:"加载中"},swiperList:[{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"}],categoryList:[{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],saleList:[{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}],shopsList:[{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}]}},onLoad:function(){this.getCurLocation()},onReady:function(){},onReachBottom:function(){i.showLoading({title:"加载中",mask:!0}),setTimeout(function(){i.hideLoading()},1e3)},onPullDownRefresh:function(){setTimeout(function(){i.stopPullDownRefresh()},1e3)},onPageScroll:function(i){this.scrollTop=i.scrollTop},methods:{getCurLocation:function(){var i=this;this.amapPlugin=new o.default.AMapWX({key:this.key}),this.amapPlugin.getRegeo({success:function(e){i.location.longitude=e[0].longitude,i.location.latitude=e[0].latitude,i.location.name=e[0].desc,i.location.address=e[0].name},fail:function(e){i.location.name="暂未获取"}})},setLocation:function(){var e=this;i.chooseLocation({success:function(i){i.name&&(e.location.name=i.name,e.location.address=i.address,e.location.latitude=i.latitude,e.location.longitude=i.longitude)}})},jump2search:function(){i.navigateTo({url:"/pages/search/index"})},jump2searchDetail:function(e,s){i.navigateTo({url:"/pages/search/result"})},jump2item:function(e,s){i.navigateTo({url:"/pages/item/index"})},jump2formShopsSign:function(){i.navigateTo({url:"/pages/form/shops/sign-in"})},jump2test:function(){i.navigateTo({url:"/pages/index/test2"})},jump2shopsDetail:function(e,s){i.navigateTo({url:"/pages/shops/detail"})}}};e.default=l}).call(this,s("543d")["default"])},"7e46":function(i,e,s){"use strict";var o=function(){var i=this,e=i.$createElement;i._self._c},t=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return t})},bfab:function(i,e,s){"use strict";s.r(e);var o=s("7e46"),t=s("36c0");for(var n in t)"default"!==n&&function(i){s.d(e,i,function(){return t[i]})}(n);s("f278");var l=s("2877"),a=Object(l["a"])(t["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},f278:function(i,e,s){"use strict";var o=s("4839"),t=s.n(o);t.a}},[["27b1","common/runtime","common/vendor"]]]);