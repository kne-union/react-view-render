(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[42],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(0);var r=n(218),a=n(212),i=(n(48),n(6),n(69),n(7),n(36),n(213),n(214),Object(a.a)(r.j))},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(215),a=n(48),i=n(0),c=n.n(i),o=n(36),u=n.n(o),f=n(213),s=n.n(f),p=n(214),b=n.n(p),l=["variable","functions","components"],m=function(e){return"string"===typeof e&&0===e.indexOf("\\$")?e.replace("\\$","$"):e},h=function(e){return function(t){var n=Object(a.e)(),o=n.variable,f=n.functions,p=n.components,h=Object(a.c)(n,l),v=h.emitter,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={props:{},extract:{}};return Object.keys(e).forEach((function(n){"$"===n.charAt(0)?t.extract[n]=e[n]:t.props[m(n)]=e[n]})),t}(t),O=y.props,d=y.extract,j=Object.assign({},o,d),g=function e(t){if("string"===typeof t){var n=t,o=function(e){if("string"!==typeof e)return{name:e,path:""};if(!/[.\[]/.test(e))return{name:e,path:""};var t=["[","."].map((function(t){return e.indexOf(t)})).filter((function(e){return e>-1}));if(0===t.length)return{name:e,path:""};var n=Math.min.apply(Math,Object(r.a)(t));return{name:e.substr(0,n),path:e.substr(n).replace(/^\./,"")}}(t);if(j.hasOwnProperty(n))return j[n];if(j.hasOwnProperty(o.name))return u()(j[o.name],o.path);if(f.hasOwnProperty(n)){return function e(t,n,r,a){var i=r[t];return"string"===typeof i?function(){var c=new Function("args","variable","functions","lib",i),o=b()(r,t),u={};Object.keys(o).forEach((function(t){u[t]=e(t,n,o,a)}));for(var f=arguments.length,s=new Array(f),p=0;p<f;p++)s[p]=arguments[p];return c(s,n,u,a)}:"function"===typeof i?i:void 0}(n,j,f,h.lib)}if(p.hasOwnProperty(n)){if("object"===typeof p[n])return c.a.createElement(a.b,{content:p[n],lib:h.lib,emitter:h.emitter});if("string"===typeof p[n])return c.a.createElement(a.b,Object(a.d)({url:p[n],lib:h.lib,emitter:h.emitter},h.renderProps))}return m(n)}if(s()(t)&&!Object(i.isValidElement)(t)){var l={};return Object.keys(t).forEach((function(n){l[n]=e(t[n])})),l}return Array.isArray(t)?t.map((function(t){return e(t)})):t}(O);return Object(i.useEffect)((function(){return v&&v.emit("component-appended",j.$id),function(){v&&v.emit("component-removed",j.$id)}}),[v]),Object.keys(d).length>0?c.a.createElement(a.a,{value:Object.assign({},h,{functions:f,components:p,variable:j})},c.a.createElement(e,g)):c.a.createElement(e,g)}}}}]);
//# sourceMappingURL=42.27fe14ae.chunk.js.map