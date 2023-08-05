(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),i=c(2),d=c(8),l=c(1),r=(c(13),c(14),c(6)),o=c.n(r),j=c(0),u=function(e){var t=e.todo,c=e.setPickedTodo,s=e.pickedTodo,a=t.id,n=t.title,i=t.completed;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:a}),Object(j.jsx)("td",{className:"is-vcentered",children:i&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:o()({"has-text-success":i,"has-text-danger":!i}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:o()("far",{"fa-eye":(null===s||void 0===s?void 0:s.id)!==t.id,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===t.id})})})})})]})},b=function(e){var t=e.todos,c=e.setPickedTodo,s=e.pickedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(u,{todo:e,setPickedTodo:c,pickedTodo:s},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var h=function(e){var t=e.setFilteredBy,c=e.setQuery,a=e.query;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(j.jsx)("option",{value:s.ALL,children:"All"}),Object(j.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=500,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.pickedTodo,c=e.setPickedTodo,s=Object(l.useState)(!1),a=Object(i.a)(s,2),n=a[0],d=a[1],r=Object(l.useState)(),o=Object(i.a)(r,2),u=o[0],b=o[1],h=t.userId,x=t.id,f=t.title,p=t.completed;return Object(l.useEffect)((function(){d(!0),function(e){return O("/users/".concat(e))}(h).then(b).finally((function(){return d(!1)}))}),[h]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsx)(m,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(x)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:f}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[p?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===u||void 0===u?void 0:u.name})]})]})]})]})},f=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(l.useState)(!1),r=Object(i.a)(n,2),o=r[0],u=r[1],f=Object(l.useState)(null),p=Object(i.a)(f,2),v=p[0],N=p[1],y=Object(l.useState)(s.ALL),k=Object(i.a)(y,2),T=k[0],g=k[1],C=Object(l.useState)(""),L=Object(i.a)(C,2),E=L[0],P=L[1];Object(l.useEffect)((function(){u(!0),O("/todos").then(a).finally((function(){return u(!1)}))}),[]);var S=function(e,t,c){var a=Object(d.a)(e);if(t){var n=t.toLowerCase().trim();a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))}switch(c){case s.ALL:return a;case s.ACTIVE:return a.filter((function(e){return!e.completed}));case s.COMPLETED:return a.filter((function(e){return e.completed}));default:return a}}(c,E,T);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{setFilteredBy:g,setQuery:P,query:E})}),Object(j.jsxs)("div",{className:"block",children:[o&&Object(j.jsx)(m,{}),!o&&c.length>0&&Object(j.jsx)(b,{todos:S,setPickedTodo:N,pickedTodo:v})]})]})})}),v&&Object(j.jsx)(x,{pickedTodo:v,setPickedTodo:N})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.249a4e42.chunk.js.map