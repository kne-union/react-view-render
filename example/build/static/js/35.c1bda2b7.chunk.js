(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[35],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(130),a=n(5),i=n(2),c=n.n(i),o=n(6),s=n.n(o),u=["variable","functions","components"],p=function(e){return"string"===typeof e&&0===e.indexOf("\\$")?e.replace("\\$","$"):e},f=function(e){return function(t){var n=Object(a.e)(),o=n.variable,f=n.functions,l=n.components,m=Object(a.c)(n,u),b=m.emitter,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={props:{},extract:{}};return Object.keys(e).forEach((function(n){"$"===n.charAt(0)?t.extract[n]=e[n]:t.props[p(n)]=e[n]})),t}(t),v=d.props,h=d.extract,O={},w=Object.assign({},o,h);return Object.keys(v).forEach((function(e){var t=v[e],n=function(e){if("string"!==typeof e)return{name:e,path:""};if(!/[.\[]/.test(e))return{name:e,path:""};var t=["[","."].map((function(t){return e.indexOf(t)})).filter((function(e){return e>-1}));if(0===t.length)return{name:e,path:""};var n=Math.min.apply(Math,Object(r.a)(t));return{name:e.substr(0,n),path:e.substr(n).replace(/^\./,"")}}(v[e]);if(w.hasOwnProperty(t))O[e]=w[t];else{if(!w.hasOwnProperty(n.name))return f.hasOwnProperty(t)?"string"===typeof f[t]?void(O[e]=function(){for(var e=new Function("args","variable","functions","lib",f[t]),n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e(r,w,f,m.lib)}):"function"===typeof f[t]?void(O[e]=f[t]):void 0:void(l.hasOwnProperty(t)?O[e]=c.a.createElement(a.b,{content:l[t],lib:m.lib,emitter:m.emitter}):O[e]=p(t));O[e]=s()(w[n.name],n.path)}})),Object(i.useEffect)((function(){return b&&b.emit("component-appended",w.$id),function(){b&&b.emit("component-removed",w.$id)}}),[b]),Object.keys(h).length>0?c.a.createElement(a.a,{value:Object.assign({},m,{functions:f,components:l,variable:w})},c.a.createElement(e,O)):c.a.createElement(e,O)}}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(5),a=n(2),i=n.n(a),c=n(265),o=n(124),s=n(12),u=n.n(s),p=(n(0),n(13),n(6),["className","align","direction","size","wrap","split","children"]),f=Object(o.a)((function(e){var t=e.className,n=e.align,a=e.direction,o=e.size,s=e.wrap,f=e.split,l=e.children,m=Object(r.c)(e,p);return i.a.createElement("div",Object(r.d)({},m,{className:u()(t,"view-render-space")}),i.a.createElement(c.b,{align:n,direction:a,size:o,wrap:s,split:f},l))}))}}]);
//# sourceMappingURL=35.c1bda2b7.chunk.js.map