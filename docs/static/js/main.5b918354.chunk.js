(this.webpackJsonpgiftexpertapp=this.webpackJsonpgiftexpertapp||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(10),r=n.n(c),i=n(3),s=n(14),j=n(12),o=n(11),u=n(0),d=function(e){var t=e.setCategories,n=Object(a.useState)(" "),c=Object(i.a)(n,2),r=c[0],d=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),d(""))},children:[Object(u.jsx)(o.a,{icon:j.a,style:{marginRight:"12px"}}),Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){d(e.target.value)}})]})})},l=n(15),b=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounceInLeft",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},m=n(9),h=n.n(m),f=n(13),p=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a,c,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=okZw3zthSiahvRQcG9wzdvNhXkzLCJTL"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h5",{className:"animate__animated animate__bounceInDown",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash ",style:{fontSize:"1.5rem"},children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(b,Object(l.a)({},e),e.id)}))})]})};n(27);function x(){var e=Object(a.useState)(["Coding"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(u.jsxs)("div",{className:"container-fluid row",children:[Object(u.jsx)("a",{className:"navbar-brand ",href:"#",children:"GiftExpertApp"}),Object(u.jsx)("a",{className:"navbar-brand col",children:Object(u.jsx)(d,{setCategories:c})})]})}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("hr",{}),n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))]})]})}n(28);var v=document.getElementById("root");r.a.render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(x,{})}),v)}},[[29,1,2]]]);
//# sourceMappingURL=main.5b918354.chunk.js.map