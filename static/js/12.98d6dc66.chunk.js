(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[12],{113:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(1),a=n(215),i=n(5),c=n(2),o=n.n(c),u=n(159),s=n(124),f=n(12),l=n.n(f),b=(n(0),n(13),n(6),["initValue","setStateName","children","className"]),m=Object(s.a)((function(t){var e=t.initValue,n=t.setStateName,s=t.children,f=t.className,m=Object(i.c)(t,b),p=Object(c.useState)(e),v=Object(a.a)(p,2),d=v[0],y=v[1],O=n?0===n.indexOf("$")?n:"$"+n:"$setState";return o.a.createElement("div",Object(i.d)({},m,{className:l()(f,"view-render-state")}),o.a.createElement(u.a,{variable:{$item:d},functions:Object(r.a)({},O,y)},s))}))},124:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(130),a=n(5),i=n(2),c=n.n(i),o=n(6),u=n.n(o),s=["variable","functions","components"],f=function(t){return"string"===typeof t&&0===t.indexOf("\\$")?t.replace("\\$","$"):t},l=function(t){return function(e){var n=Object(a.e)(),o=n.variable,l=n.functions,b=n.components,m=Object(a.c)(n,s),p=m.emitter,v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={props:{},extract:{}};return Object.keys(t).forEach((function(n){"$"===n.charAt(0)?e.extract[n]=t[n]:e.props[f(n)]=t[n]})),e}(e),d=v.props,y=v.extract,O={},h=Object.assign({},o,y);return Object.keys(d).forEach((function(t){var e=d[t],n=function(t){if("string"!==typeof t)return{name:t,path:""};if(!/[.\[]/.test(t))return{name:t,path:""};var e=["[","."].map((function(e){return t.indexOf(e)})).filter((function(t){return t>-1}));if(0===e.length)return{name:t,path:""};var n=Math.min.apply(Math,Object(r.a)(e));return{name:t.substr(0,n),path:t.substr(n).replace(/^\./,"")}}(d[t]);if(h.hasOwnProperty(e))O[t]=h[e];else{if(!h.hasOwnProperty(n.name))return l.hasOwnProperty(e)?"string"===typeof l[e]?void(O[t]=function(){for(var t=new Function("args","variable","functions","lib",l[e]),n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t(r,h,l,m.lib)}):"function"===typeof l[e]?void(O[t]=l[e]):void 0:void(b.hasOwnProperty(e)?O[t]=c.a.createElement(a.b,{content:b[e],lib:m.lib,emitter:m.emitter}):O[t]=f(e));O[t]=u()(h[n.name],n.path)}})),Object(i.useEffect)((function(){return p&&p.emit("component-appended",h.$id),function(){p&&p.emit("component-removed",h.$id)}}),[p]),Object.keys(y).length>0?c.a.createElement(a.a,{value:Object.assign({},m,{functions:l,components:b,variable:h})},c.a.createElement(t,O)):c.a.createElement(t,O)}}},130:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(133);var a=n(137);function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},133:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},137:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(133);function a(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(5),a=n(2),i=n.n(a),c=n(124),o=["variable","functions"],u=Object(c.a)((function(t){var e=t.children,n=t.functions,a=t.variable,c=Object(r.e)(),u=c.variable,s=c.functions,f=Object(r.c)(c,o),l=Object.assign({},u,a),b=Object.assign({},s,n);return i.a.createElement(r.a,{value:Object.assign({},f,{variable:l,functions:b})},e)}))},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(137);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=12.98d6dc66.chunk.js.map