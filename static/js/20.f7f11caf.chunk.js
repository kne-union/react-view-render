(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[20],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(0);var r=n(218),a=n(217),i=(n(48),n(6),n(69),n(7),n(36),n(212),n(213),n(214),n(216),Object(a.a)(r.b))},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(215),a=n(48),i=n(0),c=n.n(i),u=n(36),o=n.n(u),f=n(213),s=n.n(f),p=n(214),b=n.n(p),l=["variable","functions","components"],m=function(e){return"string"===typeof e&&0===e.indexOf("\\$")?e.replace("\\$","$"):e},v=function(e){return function(t){var n=Object(a.e)(),u=n.variable,f=n.functions,p=n.components,v=Object(a.c)(n,l),h=v.emitter,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={props:{},extract:{}};return Object.keys(e).forEach((function(n){"$"===n.charAt(0)?t.extract[n]=e[n]:t.props[m(n)]=e[n]})),t}(t),d=O.props,y=O.extract,j=Object.assign({},u,y),g=function e(t){if("string"===typeof t){var n=t,u=function(e){if("string"!==typeof e)return{name:e,path:""};if(!/[.\[]/.test(e))return{name:e,path:""};var t=["[","."].map((function(t){return e.indexOf(t)})).filter((function(e){return e>-1}));if(0===t.length)return{name:e,path:""};var n=Math.min.apply(Math,Object(r.a)(t));return{name:e.substr(0,n),path:e.substr(n).replace(/^\./,"")}}(t);if(j.hasOwnProperty(n))return j[n];if(j.hasOwnProperty(u.name))return o()(j[u.name],u.path);if(f.hasOwnProperty(n)){return function e(t,n,r,a){var i=r[t];return"string"===typeof i?function(){var c=new Function("args","variable","functions","lib",i),u=b()(r,t),o={};Object.keys(u).forEach((function(t){o[t]=e(t,n,u,a)}));for(var f=arguments.length,s=new Array(f),p=0;p<f;p++)s[p]=arguments[p];return c(s,n,o,a)}:"function"===typeof i?i:void 0}(n,j,f,v.lib)}if(p.hasOwnProperty(n)){if("object"===typeof p[n])return c.a.createElement(a.b,{content:p[n],lib:v.lib,emitter:v.emitter});if("string"===typeof p[n])return c.a.createElement(a.b,Object(a.d)({url:p[n],lib:v.lib,emitter:v.emitter},v.renderProps))}return m(n)}if(s()(t)&&!Object(i.isValidElement)(t)){var l={};return Object.keys(t).forEach((function(n){l[n]=e(t[n])})),l}return Array.isArray(t)?t.map((function(t){return e(t)})):t}(d);return Object(i.useEffect)((function(){return h&&h.emit("component-appended",j.$id),function(){h&&h.emit("component-removed",j.$id)}}),[h]),Object.keys(y).length>0?c.a.createElement(a.a,{value:Object.assign({},v,{functions:f,components:p,variable:j})},c.a.createElement(e,g)):c.a.createElement(e,g)}}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(48),a=n(0),i=n.n(a),c=n(212),u=n(216),o=["className"],f=Object(u.a)(c.a,(function(e){return function(t){var n=t.className,a=Object(r.c)(t,o);return i.a.createElement(e,Object(r.d)({},a,{wrappedClassName:n}))}}))}}]);
//# sourceMappingURL=20.f7f11caf.chunk.js.map