(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),l=(n(12),n(13),n(14),n(1)),i=function(e){var t=e.id,n=e.title,c=e.onEditCancel,r=e.onEditTodo,i=Object(a.useState)(n),s=Object(l.a)(i,2),u=s[0],m=s[1];return o.a.createElement("div",{className:"todo-form"},o.a.createElement("form",null,o.a.createElement("textarea",{className:"form-control",onChange:function(e){m(e.target.value)},value:u}),o.a.createElement("button",{onClick:function(){r(t,u),c()},type:"button",className:"btn btn-success btn-sm my-2 ml-2",disabled:""===u.trim()},"Save"),o.a.createElement("button",{onClick:c,type:"button",className:"btn btn-secondary btn-sm my-2 ml-2"},"Cancel")))},s=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],s=e.onStatusChange,u=e.onEditTodo,m=e.onDeleteTodo,d=e.todo,b=d.id,f=d.title,E=d.isDone,h=function(){r(!0)},v=function(){r(!1)},C=function(){m(b)};return o.a.createElement("li",{className:"list-group-item"},c?o.a.createElement(i,{id:b,title:f,onEditCancel:v,onEditTodo:u}):o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-outline-success btn-checkbox mr-3",onClick:function(){return s(b)}},E?o.a.createElement("i",{className:"fa fa-check"}):null),o.a.createElement("span",{className:E?"text-secondary line":""},f),o.a.createElement("button",{onClick:C,className:"btn btn-light btn-icon float-right text-secondary"},o.a.createElement("i",{className:"fa fa-trash"})),o.a.createElement("button",{onClick:h,className:"btn btn-light btn-icon float-right mr-3 text-secondary"},o.a.createElement("i",{className:"fa fa-pen"}))))},u=function(e){var t=e.todos,n=e.onStatusChange,a=e.onEditTodo,c=e.onDeleteTodo;return o.a.createElement("ul",{className:"list-group"},t.map((function(e){return o.a.createElement(s,{key:e.id,todo:e,onStatusChange:n,onEditTodo:a,onDeleteTodo:c})})))},m=n(6),d=n(17),b=[{id:Object(d.a)(),title:"First Todo",isDone:!0},{id:Object(d.a)(),title:"Second Todo",isDone:!0},{id:Object(d.a)(),title:"Third Todo",isDone:!1}],f=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],i=function(){r("")};return o.a.createElement("div",{className:"todo-form"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"todo-form"},"Todo Form"),o.a.createElement("input",{onChange:function(e){r(e.target.value)},className:"form-control",id:"todo-form",placeholder:"Enter your text here...",value:c})),o.a.createElement("button",{onClick:function(){e.onCreateTodo(c),i()},className:"btn btn-success my-2 ml-2",disabled:""===c.trim()},"Create"),o.a.createElement("button",{onClick:i,className:"btn btn-secondary my-2 ml-2"},"Clear"))},E=function(){var e=Object(a.useState)(b),t=Object(l.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"todo-container"},o.a.createElement("h2",{className:"text-center mb-4 text-secondary"},"TODO LIST"),o.a.createElement(u,{todos:n,onStatusChange:function(e){var t=function(e,t){return e.map((function(e){return e.id===t&&(e.isDone=!e.isDone),e}))}(n,e);c(t)},onEditTodo:function(e,t){var a=function(e,t,n){return e.map((function(e){return e.id===t&&(e.title=n),e}))}(n,e,t);c(a)},onDeleteTodo:function(e){var t=function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e);c(t)}}),o.a.createElement(f,{onCreateTodo:function(e){var t=function(e,t){return[].concat(Object(m.a)(e),[{id:Object(d.a)(),title:t,isDone:!1}])}(n,e);c(t)}}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.ebc6acc1.chunk.js.map