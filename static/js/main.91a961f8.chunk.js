(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(9),i=n.n(r),d=(n(15),n(4)),s=n(6),l=n(10),u=(n(18),n(0)),a=function(e){var t=e.addTodo,n=Object(c.useRef)();return Object(u.jsxs)("div",{className:"AddTodo",children:[Object(u.jsx)("input",{ref:n,type:"text",placeholder:"Type a new todo"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),t(n.current.value)},children:"Add"})]})},j=(n(20),function(e){var t=e.todos,n=e.renderItem;return Object(u.jsx)("div",{className:"TodoList",children:Object(u.jsx)("ul",{children:t.map((function(e){return n(e)}))})})}),f=(n(21),function(e){var t=e.todo,n=e.removeTodo,c=e.updateCompletion,o=function(e){return e=e.replace(/ /g,"_")};return Object(u.jsxs)("li",{className:"Todo",id:t.id,children:[Object(u.jsx)("input",{onChange:function(){return c(t)},type:"checkbox",id:o(t.name),checked:t.completed}),Object(u.jsx)("label",{className:t.completed?"isCompleted":"isNotCompleted",htmlFor:o(t.name),children:t.name}),Object(u.jsx)("button",{onClick:function(){return n(t)},children:"Remove"})]})}),m=(n(22),"MyTodoApp"),b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),b=i[0],p=i[1],O=function(e){!1===e.completed?o(n.filter((function(t){return t.id!==e.id}))):p(b.filter((function(t){return t.id!==e.id})))},h=function(e){!1===e.completed?(p([].concat(Object(d.a)(b),[e])),o((function(e){return n.filter((function(e){return!1===e.completed}))}))):(o([].concat(Object(d.a)(n),[e])),p((function(e){return b.filter((function(e){return!0===e.completed}))}))),e.completed=!e.completed};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(m+".todos_to_complete")),t=JSON.parse(localStorage.getItem(m+".todos_completed"));o(e),p(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(m+".todos_to_complete",JSON.stringify(n))}),[n]),Object(c.useEffect)((function(){localStorage.setItem(m+".todos_completed",JSON.stringify(b))}),[b]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Todos"}),Object(u.jsx)(a,{addTodo:function(e){o([].concat(Object(d.a)(n),[{id:Object(l.v4)(),name:e,completed:!1}]))}})]}),Object(u.jsxs)("main",{children:[n.length>0?Object(u.jsx)("section",{children:Object(u.jsx)(j,{todos:n,renderItem:function(e){return Object(u.jsx)(f,{todo:e,removeTodo:O,updateCompletion:h},e.id)}})}):null,b.length>0?Object(u.jsxs)("section",{children:[Object(u.jsxs)("h2",{children:[b.length," taks completed"]}),Object(u.jsx)(j,{todos:b,renderItem:function(e){return Object(u.jsx)(f,{todo:e,removeTodo:O,updateCompletion:h},e.id)}})]}):null]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),p()}},[[23,1,2]]]);
//# sourceMappingURL=main.91a961f8.chunk.js.map