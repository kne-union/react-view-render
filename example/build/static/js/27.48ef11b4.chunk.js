(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[27],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n(2);var r=n(145),a=n(139),c=(n(5),n(0),n(13),n(12),n(6),n(124),n(138),Object(a.a)(r.m))},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(130),a=n(5),c=n(2),i=n.n(c),o=n(6),u=n.n(o),s=["variable","functions","components"],f=function(e){return"string"===typeof e&&0===e.indexOf("\\$")?e.replace("\\$","$"):e},p=function(e){return function(t){var n=Object(a.e)(),o=n.variable,p=n.functions,m=n.components,l=Object(a.c)(n,s),b=l.emitter,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={props:{},extract:{}};return Object.keys(e).forEach((function(n){"$"===n.charAt(0)?t.extract[n]=e[n]:t.props[f(n)]=e[n]})),t}(t),h=v.props,d=v.extract,O={},j=Object.assign({},o,d);return Object.keys(h).forEach((function(e){var t=h[e],n=function(e){if("string"!==typeof e)return{name:e,path:""};if(!/[.\[]/.test(e))return{name:e,path:""};var t=["[","."].map((function(t){return e.indexOf(t)})).filter((function(e){return e>-1}));if(0===t.length)return{name:e,path:""};var n=Math.min.apply(Math,Object(r.a)(t));return{name:e.substr(0,n),path:e.substr(n).replace(/^\./,"")}}(h[e]);if(j.hasOwnProperty(t))O[e]=j[t];else{if(!j.hasOwnProperty(n.name))return p.hasOwnProperty(t)?"string"===typeof p[t]?void(O[e]=function(){for(var e=new Function("args","variable","functions","lib",p[t]),n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e(r,j,p,l.lib)}):"function"===typeof p[t]?void(O[e]=p[t]):void 0:void(m.hasOwnProperty(t)?O[e]=i.a.createElement(a.b,{content:m[t],lib:l.lib,emitter:l.emitter}):O[e]=f(t));O[e]=u()(j[n.name],n.path)}})),Object(c.useEffect)((function(){return b&&b.emit("component-appended",j.$id),function(){b&&b.emit("component-removed",j.$id)}}),[b]),Object.keys(d).length>0?i.a.createElement(a.a,{value:Object.assign({},l,{functions:p,components:m,variable:j})},i.a.createElement(e,O)):i.a.createElement(e,O)}}},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(5),a=n(2),c=n.n(a),i=n(124),o=n(138),u=["className"],s=Object(o.a)(i.a,(function(e){return function(t){var n=t.className,a=Object(r.c)(t,u);return c.a.createElement(e,Object(r.d)({},a,{wrappedClassName:n}))}}))}}]);
//# sourceMappingURL=27.48ef11b4.chunk.js.map