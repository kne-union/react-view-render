(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[10],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(48),a=n(0),c=n.n(a),i=n(219),u=n(218),o=n(217),s=(n(6),n(69),n(7),n(36),n(212),n(213),n(214),n(216),["title","name","wrappedClassName","children","groupItem","empty"]),f=Object(o.a)((function(e){var t=e.name,n=e.wrappedClassName,o=e.children,f=e.groupItem,p=e.empty,l=Object(r.c)(e,s),m=Object(a.useRef)(null);return c.a.createElement("div",Object(r.d)({},l,{className:n}),c.a.createElement(i.a,{functions:{$onAdd:function(){var e;return(e=m.current).onAdd.apply(e,arguments)}},variable:{$groupList:c.a.createElement(u.f,{ref:m,name:t,empty:p},(function(e,t){var n=t.onAdd,r=t.onRemove;return c.a.createElement(i.a,{variable:{$key:e},functions:{$onAdd:n,$onRemove:function(){return r(e)}}},f)}))}},o))}))},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(215),a=n(48),c=n(0),i=n.n(c),u=n(36),o=n.n(u),s=n(213),f=n.n(s),p=n(214),l=n.n(p),m=["variable","functions","components"],b=function(e){return"string"===typeof e&&0===e.indexOf("\\$")?e.replace("\\$","$"):e},v=function(e){return function(t){var n=Object(a.e)(),u=n.variable,s=n.functions,p=n.components,v=Object(a.c)(n,m),d=v.emitter,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={props:{},extract:{}};return Object.keys(e).forEach((function(n){"$"===n.charAt(0)?t.extract[n]=e[n]:t.props[b(n)]=e[n]})),t}(t),j=O.props,h=O.extract,y=Object.assign({},u,h),g=function e(t){if("string"===typeof t){var n=t,u=function(e){if("string"!==typeof e)return{name:e,path:""};if(!/[.\[]/.test(e))return{name:e,path:""};var t=["[","."].map((function(t){return e.indexOf(t)})).filter((function(e){return e>-1}));if(0===t.length)return{name:e,path:""};var n=Math.min.apply(Math,Object(r.a)(t));return{name:e.substr(0,n),path:e.substr(n).replace(/^\./,"")}}(t);if(y.hasOwnProperty(n))return y[n];if(y.hasOwnProperty(u.name))return o()(y[u.name],u.path);if(s.hasOwnProperty(n)){return function e(t,n,r,a){var c=r[t];return"string"===typeof c?function(){var i=new Function("args","variable","functions","lib",c),u=l()(r,t),o={};Object.keys(u).forEach((function(t){o[t]=e(t,n,u,a)}));for(var s=arguments.length,f=new Array(s),p=0;p<s;p++)f[p]=arguments[p];return i(f,n,o,a)}:"function"===typeof c?c:void 0}(n,y,s,v.lib)}if(p.hasOwnProperty(n)){if("object"===typeof p[n])return i.a.createElement(a.b,{content:p[n],lib:v.lib,emitter:v.emitter});if("string"===typeof p[n])return i.a.createElement(a.b,Object(a.d)({url:p[n],lib:v.lib,emitter:v.emitter},v.renderProps))}return b(n)}if(f()(t)&&!Object(c.isValidElement)(t)){var m={};return Object.keys(t).forEach((function(n){m[n]=e(t[n])})),m}return Array.isArray(t)?t.map((function(t){return e(t)})):t}(j);return Object(c.useEffect)((function(){return d&&d.emit("component-appended",y.$id),function(){d&&d.emit("component-removed",y.$id)}}),[d]),Object.keys(h).length>0?i.a.createElement(a.a,{value:Object.assign({},v,{functions:s,components:p,variable:y})},i.a.createElement(e,g)):i.a.createElement(e,g)}}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(48),a=n(0),c=n.n(a),i=n(212),u=n(216),o=["className"],s=Object(u.a)(i.a,(function(e){return function(t){var n=t.className,a=Object(r.c)(t,o);return c.a.createElement(e,Object(r.d)({},a,{wrappedClassName:n}))}}))},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(48),a=n(0),c=n.n(a),i=n(212),u=["variable","functions"],o=Object(i.a)((function(e){var t=e.children,n=e.functions,a=e.variable,i=Object(r.e)(),o=i.variable,s=i.functions,f=Object(r.c)(i,u),p=Object.assign({},o,a),l=Object.assign({},s,n);return c.a.createElement(r.a,{value:Object.assign({},f,{variable:p,functions:l})},t)}))}}]);
//# sourceMappingURL=10.4ac59d3f.chunk.js.map