(this.webpackJsonpmonaco=this.webpackJsonpmonaco||[]).push([[0],{180:function(e,t,n){e.exports=n(338)},185:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),i=(n(185),n(110)),l=n(28),u=n(46),s=n(348),p=function(e){var t=e.name,n=e.list,a=e.handler;return r.a.createElement(s.a,{fluid:!0,selection:!0,onChange:function(e,t){console.log(t.value),a(t.value)},options:n,defaultValue:t})},m=n(349),d=function(e){var t=e.children;return r.a.createElement(m.a,null,t)},f=n(59),h=n(339),g=n(346),j=n(49);function v(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(auto-fit));\n    row-gap:10px;\n    text-align:center;\n    \n"]);return v=function(){return e},e}var b=j.a.div(v()),O=function(e){var t=e.obj,n=e.updater,c=e.index,o=Object(a.useState)(t),i=Object(l.a)(o,2),u=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{placeholder:"$name",value:Object.keys(u)[0],onChange:function(e){s(Object(f.a)({},e.target.value,Object.entries(u)[0][1])),n(c,Object(f.a)({},e.target.value,Object.entries(u)[0][1]))}}),r.a.createElement(g.a,{value:Object.entries(u)[0][1],placeholder:"2",onChange:function(e){s(Object(f.a)({},Object.keys(u)[0],e.target.value)),n(c,Object(f.a)({},Object.keys(u)[0],e.target.value))}}))},y=function(e){var t=e.varList,n=e.updater,a=e.createNewFeild;return r.a.createElement(b,null,r.a.createElement("h3",{style:{marginTop:"auto"}},"Name "),r.a.createElement("h3",{style:{marginTop:"auto"}},"Value"),t.map((function(e,t){return r.a.createElement(O,{obj:e,index:t,updater:n})})),r.a.createElement("div",null),r.a.createElement(h.a,{onClick:function(){a({"":""})},primary:!0,style:{width:"160px",justifySelf:"right"}},"Add Param"))},E=n(104),x=n.n(E);n(337);function k(){var e=Object(u.a)(["\n  display: grid;\n  justify-self: right;\n  grid-template-columns: 100px 100px;\n  column-gap: 10px;\n  justify-content: center;\n"]);return k=function(){return e},e}function w(){var e=Object(u.a)(["\n  display: grid;\n  margin: 0 200px;\n"]);return w=function(){return e},e}function S(){var e=Object(u.a)(["\n  display: grid;\n  margin-left: 90px;\n  margin-right: 90px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  grid-template-rows: 40px 80vh 40px;\n  row-gap: 10px;\n"]);return S=function(){return e},e}var C=j.a.div(S()),$=j.a.div(w()),F=j.a.div(k());var N=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("javascript"),u=Object(l.a)(o,2),s=u[0],m=u[1],f=Object(a.useState)("dark"),g=Object(l.a)(f,2),j=g[0],v=g[1],b=Object(a.useState)(""),O=Object(l.a)(b,2),E=O[0],k=O[1],w=Object(a.useState)(!1),S=Object(l.a)(w,2),N=S[0],T=S[1],W=Object(a.useState)([{$i:1}]),J=Object(l.a)(W,2),R=J[0],A=J[1],B=Object(a.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement(y,{varList:R,createNewFeild:function(e){var t=Object(i.a)(R);t.push(e),A(t)},updater:function(e,t){var n=Object(i.a)(R);n[e]=t,console.log(n),A(n)}})),r.a.createElement(C,null,r.a.createElement(F,null,r.a.createElement(p,{name:j,handler:v,list:["dark","light"].map((function(e){return{key:e,text:e,value:e}}))}),r.a.createElement(p,{name:s,handler:m,list:["javascript","python","php"].map((function(e){return{key:e,text:e,value:e}}))})),r.a.createElement(x.a,{value:"",language:s,theme:j,editorDidMount:function(e){c(!0),B.current=e}}),r.a.createElement(h.a,{style:{width:"160px",justifySelf:"right"},primary:!N,onClick:function(){!function(){for(var e={},t=0;t<R.length;t++){var n=Object.keys(R[t])[0];if("$"!==n)e[n.startsWith("$")?n:"$"+n]=Object.entries(R[t])[0][1]}console.log("varObj",e);var a={name:{python:"python",javascript:"node",php:"php"}[s],var_obj:e,text:B.current()};console.log("hello fetch"),T(!0),fetch("https://via-socket.herokuapp.com/parser",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e),k(e.output),T(!1)})).catch((function(e){console.log(e),T(!1)}))}()},disabled:!n},N?"Running":"Run"),r.a.createElement("h1",null,"Output"),r.a.createElement(d,{style:{minWidth:"40px"}},E)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[180,1,2]]]);
//# sourceMappingURL=main.f4a13215.chunk.js.map