(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08714bcc"],{1921:function(t,s,e){},"19c3":function(t,s,e){},"25e3":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"hover",on:{click:function(s){t.isActivityPanelOpen=!t.isActivityPanelOpen}}},[t.isActivityPanelOpen?e("div",{staticClass:"fc"},[e("div",{staticClass:"card p5"},[t._v("Last action opened")])]):t._e(),t.isActivityPanelOpen?t._e():e("div",["main"===t.$route.name||"reserve"===t.$route.name?e("SumGlobal",{on:{click:function(s){t.isActivityPanelOpen=!t.isActivityPanelOpen}}}):t._e()],1)]),e("SumMain",{attrs:{list:t.cList}}),t.isActivityPanelOpen?t._e():e("AltsList",{attrs:{list:t.cList}}),"main"===t.$route.name&&t.isActivityPanelOpen?e("SubTitle",{attrs:{title:"Last actions"}}):t._e(),t.isActivityPanelOpen?e("ActivityList"):t._e()],1)},i=[],n=(e("b0c0"),e("dda2")),c=e("4d9f"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sumContainer"},[e("div",{staticClass:"card p5 sumItemContainer pr"},[e("div",{staticClass:"sumBlock"},[e("span",{staticClass:"sumLabel"},[t._v("MC:")]),e("span",{staticClass:"sumNumber",on:{click:function(s){return t.$store.dispatch("loadMyGeckoCoins")}}},[t._v("$ "+t._s(t._f("numFormat")(t.$store.state.global.total_market_cap.usd,"0,0")))]),e("span",{staticClass:"sumNumber ml5",class:{green:t.$store.state.global.market_cap_change_percentage_24h_usd>0,red:t.$store.state.global.market_cap_change_percentage_24h_usd<0}},[t._v(" "+t._s(t._f("numFormat")(t.$store.state.global.market_cap_change_percentage_24h_usd,"0,0.0"))+"%")])]),e("div",{staticClass:"sumBlock"},[e("span",{staticClass:"sumLabel"},[t._v("BTC:")]),e("span",{staticClass:"sumNumber"},[t._v(t._s(t._f("numFormat")(t.$store.state.global.market_cap_percentage.btc,"0,0.0"))+"%")])]),e("div",{staticClass:"sumBlock"},[e("span",{staticClass:"sumLabel"},[t._v("ETH:")]),e("span",{staticClass:"sumNumber"},[t._v(t._s(t._f("numFormat")(t.$store.state.global.market_cap_percentage.eth,"0,0.0"))+"%")])])])])},o=[],r={},u=r,m=(e("44e8"),e("2877")),p=Object(m["a"])(u,l,o,!1,null,"0afe2ebb",null),_=p.exports,v=e("d6cd"),d=e("7342"),f=e("8b51"),C={props:["list"],components:{HypSide:f["a"],ActivityList:d["a"],SubTitle:v["a"],SumMain:c["a"],SumGlobal:_,AltsList:n["a"]},data:function(){return{isActivityPanelOpen:!1,isHypPanelOpen:!1}},computed:{cList:function(){return"main"===this.$route.name?this.$store.state[this.$store.state.isAK?"infoAK":"infoMain"].tradeList:this.list}}},b=C,y=(e("74e3"),Object(m["a"])(b,a,i,!1,null,"a9096f94",null));s["default"]=y.exports},"44e8":function(t,s,e){"use strict";e("a787")},7342:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"card p30"},t._l(t.cList,(function(s){return e("li",{key:s.id,attrs:{item:s}},[e("div",{staticClass:"alarmListItem pr"},[e("div",{staticClass:"symbolBox"},[e("img",{staticStyle:{width:"100%"},attrs:{src:s.coinUrl,alt:"coin ico"}})]),e("div",{staticClass:"coinBox"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",[t._v(t._s(s.coin.toUpperCase()))])]),e("div",{staticClass:"numberBox",class:{lightGreen:s.amount>0,lightRed:s.amount<0}},[t._v(t._s(s.amount<0?"sell":"buy"))]),e("div",{staticClass:"grey amBox"},[e("span",{staticClass:"label"},[t._v("amount: ")]),t._v(t._s(t._f("numFormat")(s.amount,"0,0.000")))]),e("div",[e("span",{staticClass:"grey label"},[t._v("price: ")]),t._v(t._s(t._f("numFormat")(s.price,"$ 0,0.00")))]),e("div",{staticClass:"prBox"},[e("span",{staticClass:"grey"},[t._v("= "+t._s(t._f("numFormat")(s.price*s.amount,"$ 0,0.00")))])]),e("div",{staticClass:"prBox curr"},[e("span",{staticClass:"grey label"},[t._v("cPrice: ")]),t._v(t._s(t._f("numFormat")(s.currentPrice,"$ 0,0.000")))]),e("div",{staticClass:"dateBox"},[e("span",{staticClass:"grey label"},[t._v("date: ")]),t._v(t._s(s.date))]),e("span",{staticClass:"grey label"},[t._v("comment: ")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.update.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.comment,expression:"item.comment"}],staticClass:"inputBox",attrs:{type:"text"},domProps:{value:s.comment},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:function(t){return t.target.blur()}.apply(null,arguments)},input:function(e){e.target.composing||t.$set(s,"comment",e.target.value)}}})]),e("button",{staticClass:"delBox",on:{click:function(e){return t.deleteItem(s.id)}}},[t._v("x")])])])})),0)},i=[],n={props:["list"],computed:{cList:function(){return this.list&&this.list.length?this.list:this.$store.state[this.$store.state.isAK?"infoAK":"infoMain"].lastActivityList}},methods:{deleteItem:function(t){this.$store.commit("deleteItem",{id:t,listName:"lastActivityList"})},update:function(){this.$store.dispatch("updateFB",{name:"lastActivityList",info:this.$store.state.isAK?"infoAK":"infoMain"})}}},c=n,l=(e("9a96"),e("2877")),o=Object(l["a"])(c,a,i,!1,null,"550fff12",null);s["a"]=o.exports},"74e3":function(t,s,e){"use strict";e("19c3")},"9a96":function(t,s,e){"use strict";e("1921")},a787:function(t,s,e){}}]);
//# sourceMappingURL=chunk-08714bcc.1df95143.js.map