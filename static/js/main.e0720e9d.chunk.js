(this.webpackJsonpappstoredemo=this.webpackJsonpappstoredemo||[]).push([[0],{31:function(e,t,n){e.exports=n(70)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),i=(n(36),n(37),n(6)),s=n(7),l=n(8),u=n(11),m=n(9),p=n(12),d=(n(38),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleOnChange=function(e){n.props.handleSearchEvent(e.target.name,e.target.value)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"searchbarInput",type:"text",placeholder:"\uf002 \u641c\u5c0b",name:"searchInput",value:this.props.searchInput,onChange:this.handleOnChange}))}}]),t}(a.Component)),f=(n(39),function(e){var t=e.listItem;return r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:t.appIcon,alt:""}),r.a.createElement("div",{className:"appName"},t.name),r.a.createElement("div",{className:"grey-text"},t.genre))}),h=(n(40),function(e){var t=e.recommendedList.map((function(e){return r.a.createElement(f,{key:e.id,listItem:e})}));return r.a.createElement("div",null,r.a.createElement("h3",null,"\u63a8\u4ecb"),r.a.createElement("div",{className:"recommendation-container"},t))}),E=(n(41),function(e){var t=e.listItem,n=e.order,a=n%2===0?"listImage circle":"listImage",c="undefined"===t.userCount?0:t.userCount;return r.a.createElement("div",{className:"appItem",style:{display:"flex",flexDirection:"row",justifyContent:"flexStart"}},r.a.createElement("div",{className:"order"},n),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("img",{src:t.appIcon,alt:"",className:a})),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("ul",{className:"listUl"},r.a.createElement("li",null,r.a.createElement("div",null,t.name)),r.a.createElement("li",{className:"liGenre"},t.genre),r.a.createElement("li",null,r.a.createElement("div",{className:"stars-outer"},r.a.createElement("div",{className:"stars-inner",style:{width:"".concat(function(e){var t=e/5*100;return"".concat(10*Math.round(t/10),"%")}(t.starRating))}}))," ",r.a.createElement("span",{style:{color:"grey"}},"(",c,")")))))}),g=function(e){var t=e.appList,n=0,a=t.map((function(e){return n+=1,r.a.createElement(E,{key:e.id,listItem:e,order:n})}));return r.a.createElement("div",null,r.a.createElement("div",null,a))},v=n(10),y=n(13),O=n.n(y),b=(n(63),n(64),function(e){var t=e.item;return r.a.createElement("div",{className:"resultItem"},r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("img",{src:t.appIcon,className:"itemImage",alt:""})),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("ul",{className:"listResultUl"},r.a.createElement("li",null,r.a.createElement("div",null,t.name)),r.a.createElement("li",{className:"liGenre"},t.genre))))}),I=function(e){var t=e.filteredList,n=t.filter((function(e,n){return n===t.findIndex((function(t){return JSON.stringify(t.id)===JSON.stringify(e.id)}))})).map((function(e){return r.a.createElement(b,{key:e.id,item:e})}));return r.a.createElement("div",{className:"result-container"},n)},j=n(28),w=n.n(j);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={startPoint:0,currentItem:10,firstTime:!0,searchInput:""},n.loadMore=function(){document.getElementById("loading").style.display="block",n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state,{currentItem:n.state.firstTime?n.state.currentItem+0:n.state.currentItem+10,firstTime:!1}),(function(){return n.props.fetchAppList(n.state.currentItem)}))},n.handleSearchEvent=function(e,t){n.setState(Object(i.a)({},e,t))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchRecommended(),this.props.fetchAppList(this.state.currentItem),this.scrollListener=window.addEventListener("scroll",(function(t){window.innerHeight+window.scrollY>=document.body.offsetHeight&&e.state.currentItem<100&&(""===e.state.searchInput||null===e.state.searchInput)?e.loadMore():e.state.currentItem>=100&&(""===e.state.searchInput||null===e.state.searchInput)&&(document.getElementById("loading").style.display="none")}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.recommendedList,a=t.appList,c=t.loaded,o=n.concat(a).filter((function(t){return-1!==t.name.indexOf(e.state.searchInput)||-1!==t.author.indexOf(e.state.searchInput)||-1!==t.genre.indexOf(e.state.searchInput)}));return""===this.state.searchInput||null===this.state.searchInput?r.a.createElement("div",null,r.a.createElement(d,{searchInput:this.state.searchInput,handleSearchEvent:this.handleSearchEvent}),r.a.createElement("hr",{style:{borderColor:"white"}}),r.a.createElement(w.a,{loaded:c},"   ",r.a.createElement(h,{recommendedList:n}),r.a.createElement("hr",{style:{borderColor:"white"}}),r.a.createElement(g,{id:"appListing",appList:a})),r.a.createElement("div",{id:"loading",style:{display:"none"}},r.a.createElement("div",{className:"fa-3x"},"         ",r.a.createElement("i",{className:"fas fa-spinner fa-pulse"})))):r.a.createElement("div",null,r.a.createElement(d,{searchInput:this.state.searchInput,handleSearchEvent:this.handleSearchEvent}),r.a.createElement("hr",{style:{borderColor:"white"}}),r.a.createElement(I,{filteredList:o}))}}]),t}(a.Component),S={fetchRecommended:function(){return function(e){O.a.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/10/explicit.json").then((function(e){return e.data.feed.results.map((function(e){return{id:"".concat(e.id),name:"".concat(e.name),appIcon:"".concat(e.artworkUrl100),genre:"".concat(e.genres[0].name),author:"".concat(e.artistName)}}))})).then((function(t){return e({type:"FETCH_RECOMMENDED",payload:t})})).catch((function(e){return console.log("fetchRecommended: ",e)}))}},fetchAppList:function(e){return function(t){O.a.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/".concat(e,"/explicit.json")).then((function(e){return e.data.feed.results.map((function(e){return parseInt(e.id)}))})).then((function(e){return O.a.get("https://cors-anywhere.herokuapp.com/https://itunes.apple.com/hk/lookup?id=".concat(e))})).then((function(e){return e.data.results.map((function(e){return{id:"".concat(e.trackId),name:"".concat(e.trackName),appIcon:"".concat(e.artworkUrl100),genre:"".concat(e.genres[0]),author:"".concat(e.artistName),starRating:"".concat(e.averageUserRating),userCount:"".concat(e.userRatingCount)}}))})).then((function(e){return t({type:"FETCH_APPLIST",payload:e})})).catch((function(e){return console.log("fetchAppList: ",e)}))}}},k=Object(v.b)((function(e){return{recommendedList:e.rootRD.recommendedList,appList:e.rootRD.appList,loaded:e.rootRD.loaded}}),S)(L),P=n(4),C=n(29),D=n.n(C),R=n(30);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={recommendedList:[],appList:[],loaded:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RECOMMENDED":return T({},e,{recommendedList:t.payload,loaded:!0});case"FETCH_APPLIST":return T({},e,{appList:t.payload,loaded:!0});default:return e}},H=Object(P.c)({rootRD:M}),J=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("loadFromLocalStorage error: ",t)}}(),F=[R.a],U=Object(P.d)(H,J,P.a.apply(void 0,F.concat([D.a])));U.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log("saveTolocalStorage error: ",n)}}(U.getState())}));var _=U;var B=function(){return r.a.createElement(v.a,{store:_},r.a.createElement("div",{className:"App"},r.a.createElement(k,null)))};o.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e0720e9d.chunk.js.map