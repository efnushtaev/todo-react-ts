(this["webpackJsonptodo-react-ts"]=this["webpackJsonptodo-react-ts"]||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),l=n.n(r),o=(n(25),n(7)),i=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper teal darken-3 px1"},c.a.createElement("a",{href:"/index",className:"brand-logo"},"React + TypeScript"),c.a.createElement("ul",{className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/about"},"\u0418\u043d\u043e\u0444\u0440\u043c\u0430\u0446\u0438\u044f")))))},u=n(1),m=function(){var e=Object(u.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"),c.a.createElement("p",null,"\u0412\u0430\u0436\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432\u0430\u0436\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442"),c.a.createElement("button",{onClick:function(){return e.push("/")},className:"btn"},"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"))},s=n(19),d=n(11),f=function(e){var t=e.onAdd,n=Object(a.useState)(""),r=Object(d.a)(n,2),l=r[0],o=r[1];return c.a.createElement("div",{className:"input-field mt2"},c.a.createElement("input",{onChange:function(e){o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(t(l),o(""))},value:l,type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"}),c.a.createElement("label",{htmlFor:"title",className:"active"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"))},E=function(e){var t=e.todos,n=e.onRemove,a=e.onToggle;if(0===t.length)return c.a.createElement("p",{className:"center"},"\u041f\u043e\u043a\u0430 \u0434\u0435\u043b \u043d\u0435\u0442!");return c.a.createElement("ul",null,t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),c.a.createElement("li",{className:t.join(" "),key:e.id},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.completed,onClick:function(){return a(e.id)}}),c.a.createElement("span",{className:"grey-text text-darken-2"},e.title),c.a.createElement("i",{onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},className:"material-icons red-text"},"delete")))})))},p=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");r(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n)),console.log("rerender")}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};r((function(e){return[t].concat(Object(s.a)(e))}))}}),c.a.createElement(E,{todos:n,onToggle:function(e){r(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},onRemove:function(e){confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442?")&&r((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},h=function(){return c.a.createElement(o.a,null,c.a.createElement(i,null),c.a.createElement("div",{className:"container"},c.a.createElement(u.c,null,c.a.createElement(u.a,{component:p,path:"/",exact:!0}),c.a.createElement(u.a,{component:m,path:"/about",exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f17d188a.chunk.js.map