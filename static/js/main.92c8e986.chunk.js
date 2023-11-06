(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(3),r=c(16),l=c(7),o=c(14),i=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(5),h=function(e){return{type:"filterTodo/Status",payload:e}},O=function(e){return{type:"filterTodo/Query",payload:e}},f=function(){return{type:"filterTodo/ResetQuery"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filterTodo/Status":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"filterTodo/Query":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filterTodo/ResetQuery":return Object(b.a)(Object(b.a)({},e),{},{query:""});default:return e}},x=function(e){return{type:"todos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:j,filter:m,todos:p}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),N=c(4),g=c(0),T=(c(25),c(26),c(17)),w=c(12),k=c.n(w),S=(s.b,s.c),E=c(1);var C=function(){var e=Object(s.b)(),t=S((function(e){return e})),c=t.todos,n=t.filter,a=n.status,r=n.query,l=t.currentTodo,o=function(e,t,c){var n=Object(T.a)(e);switch(c){case"active":return n.filter((function(e){return!e.completed}));case"completed":return n.filter((function(e){return e.completed}));case"all":break;default:throw new Error("There is an issue with todo status type definition(")}return t&&(n=n.filter((function(e){e.title.toLocaleLowerCase().includes(t.toLocaleLowerCase().trim())}))),n}(c,r,a);return Object(E.jsxs)(E.Fragment,{children:[o.length=0,Object(E.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:" "})]})}),Object(E.jsx)("tbody",{children:o.map((function(t){return Object(E.jsxs)("tr",{"data-cy":"todo",className:k()({"has-background-info-light":(null===l||void 0===l?void 0:l.id)===t.id}),children:[Object(E.jsx)("td",{className:"is-vcentered",children:t.id}),Object(E.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(E.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("td",{className:"is-vcentered is-expanded",children:Object(E.jsx)("p",{className:k()(t.completed?"has-text-success":"has-text-danger"),children:t.title})}),Object(E.jsx)("td",{className:"has-text-right is-vcentered",children:Object(E.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(d(t))}(t)},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]})]})},L=function(){var e=Object(s.b)(),t=S((function(e){return e.filter})),c=t.status,n=t.query;return Object(E.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("span",{className:"select",children:Object(E.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){e(h(t.target.value))},children:[Object(E.jsx)("option",{value:"all",children:"All"}),Object(E.jsx)("option",{value:"active",children:"Active"}),Object(E.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(E.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(E.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(t){e(O(t.target.value))}}),Object(E.jsx)("span",{className:"icon is-left",children:Object(E.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(E.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(E.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(f())}})})]})]})};function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(28);var R=function(){return Object(E.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(E.jsx)("div",{className:"Loader__content"})})},_=function(){var e=Object(s.b)(),t=Object(g.useState)(!0),c=Object(N.a)(t,2),n=c[0],a=c[1],r=Object(g.useState)(null),l=Object(N.a)(r,2),o=l[0],i=l[1],d=S((function(e){return e.currentTodo}));Object(g.useEffect)((function(){var e;d&&(e=d.userId,q("/users/".concat(e))).then(i).finally((function(){return a(!1)}))}),[]);return Object(E.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(E.jsx)("div",{className:"modal-background"}),n&&Object(E.jsx)(R,{}),Object(E.jsxs)("div",{className:"modal-card",children:[Object(E.jsxs)("header",{className:"modal-card-head",children:[Object(E.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===d||void 0===d?void 0:d.id)}),Object(E.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(u())}})]}),Object(E.jsxs)("div",{className:"modal-card-body",children:[Object(E.jsx)("p",{className:"block","data-cy":"modal-title",children:null===d||void 0===d?void 0:d.title}),Object(E.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==d&&void 0!==d&&d.completed?Object(E.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(E.jsx)("strong",{className:"has-text-danger",children:"Planned"}),"()"," by ",Object(E.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name})]})]})]})]})},Q=function(){var e=Object(g.useState)(!0),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(s.b)(),r=S((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){q("/todos").then((function(e){return a(x(e))})).finally((function(){return n(!1)}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"section",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"box",children:[Object(E.jsx)("h1",{className:"title",children:"Todos:"}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(L,{})}),Object(E.jsx)("div",{className:"block",children:c?Object(E.jsx)(R,{}):Object(E.jsx)(C,{})})]})})}),r&&Object(E.jsx)(_,{})]})},B=function(){return Object(E.jsx)(s.a,{store:y,children:Object(E.jsx)(r.a,{children:Object(E.jsx)(Q,{})})})};a.a.render(Object(E.jsx)(B,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.92c8e986.chunk.js.map