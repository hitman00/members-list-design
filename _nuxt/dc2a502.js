(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(e,t,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(53).default)("61e782ff",content,!0,{sourceMap:!1})},288:function(e,t,r){"use strict";var n=r(279),d=r.n(n);r.d(t,"default",(function(){return d.a}))},289:function(e,t,r){var n=r(52)(!1);n.push([e.i,".user_main_5jKRM{width:80%;float:right;padding:2% 2% 0 1%;color:#626c7b}.box_1ayo_{background:#fff;width:80%;margin:4% auto;padding:5%;border-radius:5px;box-shadow:0 0 3px rgba(3,3,3,.47843)}.title_DDRRb{font-weight:600;font-size:30px;padding:0 0 3%;border-bottom:1px solid grey}.detals_22yyP div{padding:3% 0 0}@media(max-width:500px){.title_DDRRb{font-size:20px}.detals_22yyP{font-size:14px}}",""]),n.locals={user_main:"user_main_5jKRM",box:"box_1ayo_",title:"title_DDRRb",detals:"detals_22yyP"},e.exports=n},295:function(e,t,r){"use strict";r.r(t);var n=r(8),d=(r(54),{name:"PageUserId",data:function(){return{user:{}}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("https://jsonplaceholder.typicode.com/users/"+e.$route.params.id);case 2:r=t.sent,data=r.data,e.user=data;case 5:case"end":return t.stop()}}),t)})))()}}),o=r(288),l=r(21);var component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.user_main},[r("div",{class:e.$style.box},[e.$fetchState.pending?r("div",{class:e.$style.pre},[e._v("loading")]):e.$fetchState.error?r("div",{class:e.$style.pre},[e._v("error")]):r("div",{class:e.$style.pre},[r("div",{class:e.$style.title},[e._v(e._s(e.user.name))]),e._v(" "),r("div",{class:e.$style.detals},[r("div",[e._v("E-mail: "+e._s(e.user.email))]),e._v(" "),r("div",[e._v("City: "+e._s(e.user.address.city))]),e._v(" "),r("div",[e._v("Zip-Code: "+e._s(e.user.address.zipcode))]),e._v(" "),r("div",[e._v("Street: "+e._s(e.user.address.street))])])])])])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports}}]);