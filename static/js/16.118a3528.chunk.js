(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[16],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(130),a=n(5),i=n(2),o=n.n(i),c=n(6),u=n.n(c),s=["variable","functions","components"],f=function(e){return"string"===typeof e&&0===e.indexOf("\\$")?e.replace("\\$","$"):e},p=function(e){return function(t){var n=Object(a.e)(),c=n.variable,p=n.functions,l=n.components,m=Object(a.c)(n,s),b=m.emitter,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={props:{},extract:{}};return Object.keys(e).forEach((function(n){"$"===n.charAt(0)?t.extract[n]=e[n]:t.props[f(n)]=e[n]})),t}(t),v=d.props,h=d.extract,y={},O=Object.assign({},c,h);return Object.keys(v).forEach((function(e){var t=v[e],n=function(e){if("string"!==typeof e)return{name:e,path:""};if(!/[.\[]/.test(e))return{name:e,path:""};var t=["[","."].map((function(t){return e.indexOf(t)})).filter((function(e){return e>-1}));if(0===t.length)return{name:e,path:""};var n=Math.min.apply(Math,Object(r.a)(t));return{name:e.substr(0,n),path:e.substr(n).replace(/^\./,"")}}(v[e]);if(O.hasOwnProperty(t))y[e]=O[t];else{if(!O.hasOwnProperty(n.name))return p.hasOwnProperty(t)?"string"===typeof p[t]?void(y[e]=function(){for(var e=new Function("args","variable","functions","lib",p[t]),n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e(r,O,p,m.lib)}):"function"===typeof p[t]?void(y[e]=p[t]):void 0:void(l.hasOwnProperty(t)?y[e]=o.a.createElement(a.b,{content:l[t],lib:m.lib,emitter:m.emitter}):y[e]=f(t));y[e]=u()(O[n.name],n.path)}})),Object(i.useEffect)((function(){return b&&b.emit("component-appended",O.$id),function(){b&&b.emit("component-removed",O.$id)}}),[b]),Object.keys(h).length>0?o.a.createElement(a.a,{value:Object.assign({},m,{functions:p,components:l,variable:O})},o.a.createElement(e,y)):o.a.createElement(e,y)}}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(133);var a=n(137);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},133:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(133);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(5),a=n(2),i=n.n(a),o=n(124),c=n(12),u=n.n(c),s=(n(0),n(13),n(6),["resource","expression","children","className"]),f=Object(o.a)((function(e){var t=e.resource,n=e.expression,a=e.children,o=e.className,c=Object(r.c)(e,s),f=("function"===typeof n?n(t):t)?a:null;return i.a.createElement("div",Object(r.d)({},c,{className:u()(o,"view-render-condition")}),f)}))}}]);
//# sourceMappingURL=16.118a3528.chunk.js.map