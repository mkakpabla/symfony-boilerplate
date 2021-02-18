(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(137)),o={title:"Overview",slug:"/"},c={unversionedId:"01_Get Started/1_Overview",id:"01_Get Started/1_Overview",isDocsHomePage:!1,title:"Overview",description:"The Symfony Boilerplate provides a dummy application with core concepts and functionalities to help you build",source:"@site/docs/01_Get Started/1_Overview.md",slug:"/",permalink:"/symfony-boilerplate/docs/",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/tree/master/docs/docs/01_Get Started/1_Overview.md",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/symfony-boilerplate/docs/installation"}},l=[{value:"Application Layer",id:"application-layer",children:[]},{value:"Data Layer",id:"data-layer",children:[]},{value:"Additional Services",id:"additional-services",children:[]}],s={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Symfony Boilerplate provides a dummy application with core concepts and functionalities to help you build\na modern web application."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Users page",src:a(181).default})),Object(i.b)("p",null,"Many services compose this boilerplate."),Object(i.b)("h2",{id:"application-layer"},"Application Layer"),Object(i.b)("p",null,"This layer has two services:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The GraphQL API, built with ",Object(i.b)("a",{parentName:"li",href:"https://symfony.com/"},"Symfony 5"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/thecodingmachine/tdbm"},"TDBM"),", and\n",Object(i.b)("a",{parentName:"li",href:"https://graphqlite.thecodingmachine.io/"},"GraphQLite"),"."),Object(i.b)("li",{parentName:"ol"},"The Web Application, built with ",Object(i.b)("a",{parentName:"li",href:"https://nuxtjs.org"},"Nuxt.js"),".")),Object(i.b)("h2",{id:"data-layer"},"Data Layer"),Object(i.b)("p",null,"This layer has 3 services:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"MySQL for storing sessions and business data."),Object(i.b)("li",{parentName:"ol"},"Redis for queueing asynchronous tasks (e.g., emails)."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://min.io/"},"MinIO")," for storing files (e.g., uploads).")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","In production, you may externalize them to the equivalent services from your provider."))),Object(i.b)("h2",{id:"additional-services"},"Additional Services"),Object(i.b)("p",null,"These services are mostly useful in development:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/"},"Traefik"),", a reverse proxy."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://github.com/mailhog/MailHog"},"MailHog"),", an email trapper with a web UI."),Object(i.b)("li",{parentName:"ol"},"phpMyAdmin, a web UI for displaying your database's data.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","In production, you may externalize them to the equivalent services from your provider."))))}p.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},181:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/users_page-fc5af1d69d350c4b1391c92b64761f5b.png"}}]);