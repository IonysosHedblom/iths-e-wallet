(function(t){function e(e){for(var r,n,i=e[0],s=e[1],d=e[2],u=0,l=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&l.push(c[n][0]),c[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(l.length)l.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},c={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7cde015c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"036ba247"}[t]+".css",c=s.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var d=o[i],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===r||u===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],u=d.getAttribute("data-href");if(u===r||u===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=c[t]=[e,a]}));e.push(r[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var l=new Error;d=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=c[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}c[t]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0617":function(t,e,a){"use strict";a("ebd3")},1198:function(t,e,a){"use strict";a("719c")},"15a2":function(t,e,a){t.exports=a.p+"img/vendor-evilcorp.8f71b540.svg"},"18e7":function(t,e,a){t.exports=a.p+"img/chip-light.9df3dc96.svg"},5146:function(t,e,a){"use strict";a("fff1")},5492:function(t,e,a){t.exports=a.p+"img/chip-dark.3f463c7c.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],o=(a("034f"),a("2877")),i={},s=Object(o["a"])(i,n,c,!1,null,null,null),d=s.exports,u=(a("d3b7"),a("8c4f")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("Top",{attrs:{header:"e-wallet",subheader:"active card"}}),t.cards[t.active]?a("Card",{attrs:{cardData:t.cards[t.active]}}):t._e(),t.modalOpen||0===t.cards.length?t._e():a("a",{staticClass:"btn delete",attrs:{href:"#"},on:{click:function(e){t.modalOpen=!0}}},[t._v("Remove card")]),t.modalOpen?a("Confirm",{attrs:{closeModal:t.closeModal,setActive:t.setNewActiveCard,cards:t.cards,active:t.active}}):t._e(),a("CardStack",{attrs:{isActive:t.active,setActive:t.setNewActiveCard,cards:t.cards}}),a("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeRoute(e)}}},[t._v("Add new card")])],1)},f=[],p=a("e9c9"),v=a("ae8d"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"card-stack"},t._l(t.cards,(function(e,r){return a("Card",{key:r,attrs:{cardData:e},nativeOn:{click:function(e){return t.setActive(r)}}})})),1)},m=[],b={components:{Card:v["a"]},props:{cards:Array,setActive:Function}},g=b,_=(a("0617"),Object(o["a"])(g,h,m,!1,null,"64e9991e",null)),y=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("h3",[t._v("Are you sure?")]),a("div",{staticClass:"buttons"},[a("a",{staticClass:"btn cancel",attrs:{href:"#"},on:{click:t.closeModal}},[t._v("Cancel")]),a("a",{staticClass:"btn confirm",attrs:{href:"#"},on:{click:t.deleteCard}},[t._v("Confirm")])])])},k=[],D=(a("a434"),a("a9e3"),{props:{closeModal:Function,active:Number,setActive:Function},methods:{deleteCard:function(){this.$root.cards.splice(this.active,1),this.setActive(0),this.closeModal()}}}),N=D,j=(a("f0de"),Object(o["a"])(N,C,k,!1,null,"042b7e7e",null)),O=j.exports,w={name:"Home",components:{Top:p["a"],Card:v["a"],CardStack:y,Confirm:O},data:function(){return{active:0,modalOpen:!1}},computed:{cards:function(){return this.$root.cards}},methods:{changeRoute:function(){this.$router.push("/add-card")},setNewActiveCard:function(t){return this.active=t,this.active},closeModal:function(){this.modalOpen=!1}}},A=w,x=(a("1198"),Object(o["a"])(A,l,f,!1,null,"09c2bfd8",null)),E=x.exports;r["a"].use(u["a"]);var B=[{path:"/",name:"Home",component:E},{path:"/add-card",name:"AddCard",component:function(){return a.e("about").then(a.bind(null,"098f"))}}],I=new u["a"]({mode:"history",base:"/",routes:B}),S=I;r["a"].config.productionTip=!1,new r["a"]({data:{cards:[{id:1610801447119,cardNumber:"1337133713371337",cardName:"Ionysos Hedblom",month:"03",year:"21",vendor:"Ninja Bank"},{id:1610801447120,cardNumber:"1337133713371337",cardName:"Ionysos Hedblom",month:"06",year:"24",vendor:"Bitcoin Inc"},{id:1610801447121,cardNumber:"1337133713371337",cardName:"Ionysos Hedblom",month:"04",year:"22",vendor:"Blockchain Inc"},{id:1610801447122,cardNumber:"1337133713371337",cardName:"Ionysos Hedblom",month:"12",year:"25",vendor:"Evil Corp"}]},router:S,render:function(t){return t(d)}}).$mount("#app")},"719c":function(t,e,a){},"85ec":function(t,e,a){},"8dfb":function(t,e,a){t.exports=a.p+"img/vendor-blockchaininc.f8c46e1a.svg"},aa42:function(t,e,a){t.exports=a.p+"img/vendor-ninjabank.2536becf.svg"},ae8d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"card",class:["Ninja Bank"===t.cardData.vendor?"ninja":"Bitcoin Inc"===t.cardData.vendor?"bitcoin":"Blockchain Inc"===t.cardData.vendor?"blockchain":"Evil Corp"===t.cardData.vendor?"evil":"blank"]},[r("header",["Bitcoin Inc"!==t.cardData.vendor?r("img",{attrs:{src:a("18e7"),alt:"Light chip"}}):r("img",{attrs:{src:a("5492"),alt:"Dark chip"}}),"Ninja Bank"===t.cardData.vendor?r("img",{attrs:{src:a("aa42"),alt:"Ninja Bank logo"}}):"Bitcoin Inc"===t.cardData.vendor?r("img",{attrs:{src:a("f717"),alt:"Bitcoin Inc logo"}}):"Blockchain Inc"===t.cardData.vendor?r("img",{attrs:{src:a("8dfb"),alt:"Blockchain Inc logo"}}):"Evil Corp"===t.cardData.vendor?r("img",{attrs:{src:a("15a2"),alt:"Blockchain Inc logo"}}):t._e()]),r("section",{staticClass:"number"},[t._v(" "+t._s(t.addSpacesToCardNum())+" ")]),r("section",{staticClass:"info"},[r("aside",{staticClass:"holder"},[r("span",[t._v("Cardholder Name")]),r("p",[t._v(t._s(t.cardData.cardName))])]),r("aside",{staticClass:"valid"},[r("span",[t._v("Valid until")]),t.cardData.month||t.cardData.year?t.cardData.month&&!t.cardData.year?r("p",[t._v(" "+t._s(t.cardData.month)+"/YY ")]):!t.cardData.month&&t.cardData.year?r("p",[t._v(" MM/"+t._s(t.cardData.year)+" ")]):r("p",[t._v(t._s(t.cardData.month)+"/"+t._s(t.cardData.year))]):r("p",[t._v("MM/YY")])])])])},n=[],c=(a("a15b"),a("ac1f"),a("466d"),{props:{cardData:Object},methods:{addSpacesToCardNum:function(){if(this.cardData.cardNumber.length>0){var t=this.cardData.cardNumber.match(/.{1,4}/g).join(" ");return t}}}}),o=c,i=(a("c626"),a("2877")),s=Object(i["a"])(o,r,n,!1,null,"8b343388",null);e["a"]=s.exports},bf62:function(t,e,a){},c626:function(t,e,a){"use strict";a("bf62")},e9c9:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"top"},[a("h1",[t._v(t._s(t.header))]),a("p",[t._v(t._s(t.subheader))])])},n=[],c={name:"Top",props:{header:String,subheader:String}},o=c,i=(a("5146"),a("2877")),s=Object(i["a"])(o,r,n,!1,null,"7e481559",null);e["a"]=s.exports},ebd3:function(t,e,a){},f0de:function(t,e,a){"use strict";a("f241")},f241:function(t,e,a){},f717:function(t,e,a){t.exports=a.p+"img/vendor-bitcoininc.001be558.svg"},fff1:function(t,e,a){}});
//# sourceMappingURL=app.3118dc31.js.map