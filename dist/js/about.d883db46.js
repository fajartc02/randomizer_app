(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),i=n("8e60"),a=n("63b6"),u=n("9138"),c=n("ebfd").KEY,f=n("294c"),s=n("dbdb"),l=n("45f2"),h=n("62a0"),p=n("5168"),d=n("ccb9"),v=n("6718"),b=n("47ee"),y=n("9003"),g=n("e4ae"),m=n("f772"),w=n("241e"),x=n("36c3"),S=n("1bc3"),E=n("aebd"),O=n("a159"),_=n("0395"),k=n("bf0b"),j=n("9aa9"),A=n("d9f6"),F=n("c3a1"),I=k.f,N=A.f,R=_.f,P=r.Symbol,T=r.JSON,C=T&&T.stringify,D="prototype",U=p("_hidden"),W=p("toPrimitive"),V={}.propertyIsEnumerable,L=s("symbol-registry"),M=s("symbols"),$=s("op-symbols"),B=Object[D],J="function"==typeof P&&!!j.f,K=r.QObject,G=!K||!K[D]||!K[D].findChild,Y=i&&f((function(){return 7!=O(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=I(B,e);r&&delete B[e],N(t,e,n),r&&t!==B&&N(B,e,r)}:N,q=function(t){var e=M[t]=O(P[D]);return e._k=t,e},X=J&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},z=function(t,e,n){return t===B&&z($,e,n),g(t),e=S(e,!0),g(n),o(M,e)?(n.enumerable?(o(t,U)&&t[U][e]&&(t[U][e]=!1),n=O(n,{enumerable:E(0,!1)})):(o(t,U)||N(t,U,E(1,{})),t[U][e]=!0),Y(t,e,n)):N(t,e,n)},Q=function(t,e){g(t);var n,r=b(e=x(e)),o=0,i=r.length;while(i>o)z(t,n=r[o++],e[n]);return t},H=function(t,e){return void 0===e?O(t):Q(O(t),e)},Z=function(t){var e=V.call(this,t=S(t,!0));return!(this===B&&o(M,t)&&!o($,t))&&(!(e||!o(this,t)||!o(M,t)||o(this,U)&&this[U][t])||e)},tt=function(t,e){if(t=x(t),e=S(e,!0),t!==B||!o(M,e)||o($,e)){var n=I(t,e);return!n||!o(M,e)||o(t,U)&&t[U][e]||(n.enumerable=!0),n}},et=function(t){var e,n=R(x(t)),r=[],i=0;while(n.length>i)o(M,e=n[i++])||e==U||e==c||r.push(e);return r},nt=function(t){var e,n=t===B,r=R(n?$:x(t)),i=[],a=0;while(r.length>a)!o(M,e=r[a++])||n&&!o(B,e)||i.push(M[e]);return i};J||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call($,n),o(this,U)&&o(this[U],t)&&(this[U][t]=!1),Y(this,t,E(1,n))};return i&&G&&Y(B,t,{configurable:!0,set:e}),q(t)},u(P[D],"toString",(function(){return this._k})),k.f=tt,A.f=z,n("6abf").f=_.f=et,n("355d").f=Z,j.f=nt,i&&!n("b8e3")&&u(B,"propertyIsEnumerable",Z,!0),d.f=function(t){return q(p(t))}),a(a.G+a.W+a.F*!J,{Symbol:P});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)p(rt[ot++]);for(var it=F(p.store),at=0;it.length>at;)v(it[at++]);a(a.S+a.F*!J,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=P(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!J,"Object",{create:H,defineProperty:z,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ut=f((function(){j.f(1)}));a(a.S+a.F*ut,"Object",{getOwnPropertySymbols:function(t){return j.f(w(t))}}),T&&a(a.S+a.F*(!J||f((function(){var t=P();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(m(e)||void 0!==t)&&!X(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,C.apply(T,r)}}),P[D][W]||n("35e8")(P[D],W,P[D].valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"02f4":function(t,e,n){var r=n("4588"),o=n("be13");t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),f=u.length;return c<0||c>=f?t?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===f||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},"09fa":function(t,e,n){var r=n("4588"),o=n("9def");t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=o(e);if(e!==n)throw RangeError("Wrong length!");return n}},"0a49":function(t,e,n){var r=n("9b43"),o=n("626a"),i=n("4bf8"),a=n("9def"),u=n("cd1c");t.exports=function(t,e){var n=1==t,c=2==t,f=3==t,s=4==t,l=6==t,h=5==t||l,p=e||u;return function(e,u,d){for(var v,b,y=i(e),g=o(y),m=r(u,d,3),w=a(g.length),x=0,S=n?p(e,w):c?p(e,0):void 0;w>x;x++)if((h||x in g)&&(v=g[x],b=m(v,x,y),t))if(n)S[x]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:S.push(v)}else if(s)return!1;return l?-1:f||s?s:S}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0f88":function(t,e,n){var r,o=n("7726"),i=n("32e9"),a=n("ca5a"),u=a("typed_array"),c=a("view"),f=!(!o.ArrayBuffer||!o.DataView),s=f,l=0,h=9,p="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");while(l<h)(r=o[p[l++]])?(i(r.prototype,u,!0),i(r.prototype,c,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:u,VIEW:c}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),o=n("32e9"),i=n("79e5"),a=n("be13"),u=n("2b4c"),c=n("520a"),f=u("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=u(t),p=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[f]=function(){return n}),n[h](""),!e})):void 0;if(!p||!d||"replace"===t&&!s||"split"===t&&!l){var v=/./[h],b=n(a,h,""[t],(function(t,e,n,r,o){return e.exec===c?p&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=b[0],g=b[1];r(String.prototype,t,y),o(RegExp.prototype,h,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),o=n("cb7c"),i=n("ebd6"),a=n("0390"),u=n("9def"),c=n("5f1b"),f=n("520a"),s=n("79e5"),l=Math.min,h=[].push,p="split",d="length",v="lastIndex",b=4294967295,y=!s((function(){RegExp(b,"y")}));n("214f")("split",2,(function(t,e,n,s){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(o,t,e);var i,a,u,c=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===e?b:e>>>0,y=new RegExp(t.source,s+"g");while(i=f.call(y,o)){if(a=y[v],a>l&&(c.push(o.slice(l,i.index)),i[d]>1&&i.index<o[d]&&h.apply(c,i.slice(1)),u=i[0][d],l=a,c[d]>=p))break;y[v]===i.index&&y[v]++}return l===o[d]?!u&&y.test("")||c.push(""):c.push(o.slice(l)),c[d]>p?c.slice(0,p):c}:"0"[p](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):g.call(String(o),n,r)},function(t,e){var r=s(g,t,this,e,g!==n);if(r.done)return r.value;var f=o(t),h=String(this),p=i(f,RegExp),d=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(y?"y":"g"),m=new p(y?f:"^(?:"+f.source+")",v),w=void 0===e?b:e>>>0;if(0===w)return[];if(0===h.length)return null===c(m,h)?[h]:[];var x=0,S=0,E=[];while(S<h.length){m.lastIndex=y?S:0;var O,_=c(m,y?h:h.slice(S));if(null===_||(O=l(u(m.lastIndex+(y?0:S)),h.length))===x)S=a(h,S,d);else{if(E.push(h.slice(x,S)),E.length===w)return E;for(var k=1;k<=_.length-1;k++)if(E.push(_[k]),E.length===w)return E;S=x=O}}return E.push(h.slice(x)),E}]}))},"355d":function(t,e){e.f={}.propertyIsEnumerable},"36bd":function(t,e,n){"use strict";var r=n("4bf8"),o=n("77f1"),i=n("9def");t.exports=function(t){var e=r(this),n=i(e.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,f=void 0===c?n:o(c,n);while(f>u)e[u++]=t;return e}},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("2d00"),a=n("37c8"),u=n("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var a,u=n(t),c=i.f,f=0;while(u.length>f)c.call(t,a=u[f++])&&e.push(a)}return e}},4917:function(t,e,n){"use strict";var r=n("cb7c"),o=n("9def"),i=n("0390"),a=n("5f1b");n("214f")("match",1,(function(t,e,n,u){return[function(n){var r=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=u(n,t,this);if(e.done)return e.value;var c=r(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;var l,h=[],p=0;while(null!==(l=a(c,f))){var d=String(l[0]);h[p]=d,""===d&&(c.lastIndex=i(f,o(c.lastIndex),s)),p++}return 0===p?null:h}]}))},"520a":function(t,e,n){"use strict";var r=n("0bfb"),o=RegExp.prototype.exec,i=String.prototype.replace,a=o,u="lastIndex",c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[u]||0!==e[u]}(),f=void 0!==/()??/.exec("")[1],s=c||f;s&&(a=function(t){var e,n,a,s,l=this;return f&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),c&&(e=l[u]),a=o.call(l,t),c&&a&&(l[u]=l.global?a.index+a[0].length:e),f&&a&&a.length>1&&i.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=a},"5d58":function(t,e,n){t.exports=n("d8d6")},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),a=n("ccb9"),u=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},"67ab":function(t,e,n){var r=n("ca5a")("meta"),o=n("d3f4"),i=n("69a8"),a=n("86cc").f,u=0,c=Object.isExtensible||function(){return!0},f=!n("79e5")((function(){return c(Object.preventExtensions({}))})),s=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},h=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},p=function(t){return f&&d.NEED&&c(t)&&!i(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},"67bb":function(t,e,n){t.exports=n("f921")},"69d3":function(t,e,n){n("6718")("asyncIterator")},"6aa2":function(t,e,n){n("ec30")("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}),!0)},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"765d":function(t,e,n){n("6718")("observable")},"7bbc":function(t,e,n){var r=n("6821"),o=n("9093").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in o||n("9e1e")&&r(o,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8a81":function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("9e1e"),a=n("5ca1"),u=n("2aba"),c=n("67ab").KEY,f=n("79e5"),s=n("5537"),l=n("7f20"),h=n("ca5a"),p=n("2b4c"),d=n("37c8"),v=n("3a72"),b=n("d4c0"),y=n("1169"),g=n("cb7c"),m=n("d3f4"),w=n("4bf8"),x=n("6821"),S=n("6a99"),E=n("4630"),O=n("2aeb"),_=n("7bbc"),k=n("11e9"),j=n("2621"),A=n("86cc"),F=n("0d58"),I=k.f,N=A.f,R=_.f,P=r.Symbol,T=r.JSON,C=T&&T.stringify,D="prototype",U=p("_hidden"),W=p("toPrimitive"),V={}.propertyIsEnumerable,L=s("symbol-registry"),M=s("symbols"),$=s("op-symbols"),B=Object[D],J="function"==typeof P&&!!j.f,K=r.QObject,G=!K||!K[D]||!K[D].findChild,Y=i&&f((function(){return 7!=O(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=I(B,e);r&&delete B[e],N(t,e,n),r&&t!==B&&N(B,e,r)}:N,q=function(t){var e=M[t]=O(P[D]);return e._k=t,e},X=J&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},z=function(t,e,n){return t===B&&z($,e,n),g(t),e=S(e,!0),g(n),o(M,e)?(n.enumerable?(o(t,U)&&t[U][e]&&(t[U][e]=!1),n=O(n,{enumerable:E(0,!1)})):(o(t,U)||N(t,U,E(1,{})),t[U][e]=!0),Y(t,e,n)):N(t,e,n)},Q=function(t,e){g(t);var n,r=b(e=x(e)),o=0,i=r.length;while(i>o)z(t,n=r[o++],e[n]);return t},H=function(t,e){return void 0===e?O(t):Q(O(t),e)},Z=function(t){var e=V.call(this,t=S(t,!0));return!(this===B&&o(M,t)&&!o($,t))&&(!(e||!o(this,t)||!o(M,t)||o(this,U)&&this[U][t])||e)},tt=function(t,e){if(t=x(t),e=S(e,!0),t!==B||!o(M,e)||o($,e)){var n=I(t,e);return!n||!o(M,e)||o(t,U)&&t[U][e]||(n.enumerable=!0),n}},et=function(t){var e,n=R(x(t)),r=[],i=0;while(n.length>i)o(M,e=n[i++])||e==U||e==c||r.push(e);return r},nt=function(t){var e,n=t===B,r=R(n?$:x(t)),i=[],a=0;while(r.length>a)!o(M,e=r[a++])||n&&!o(B,e)||i.push(M[e]);return i};J||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call($,n),o(this,U)&&o(this[U],t)&&(this[U][t]=!1),Y(this,t,E(1,n))};return i&&G&&Y(B,t,{configurable:!0,set:e}),q(t)},u(P[D],"toString",(function(){return this._k})),k.f=tt,A.f=z,n("9093").f=_.f=et,n("52a7").f=Z,j.f=nt,i&&!n("2d00")&&u(B,"propertyIsEnumerable",Z,!0),d.f=function(t){return q(p(t))}),a(a.G+a.W+a.F*!J,{Symbol:P});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)p(rt[ot++]);for(var it=F(p.store),at=0;it.length>at;)v(it[at++]);a(a.S+a.F*!J,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=P(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!J,"Object",{create:H,defineProperty:z,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ut=f((function(){j.f(1)}));a(a.S+a.F*ut,"Object",{getOwnPropertySymbols:function(t){return j.f(w(t))}}),T&&a(a.S+a.F*(!J||f((function(){var t=P();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(m(e)||void 0!==t)&&!X(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,C.apply(T,r)}}),P[D][W]||n("32e9")(P[D],W,P[D].valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a481:function(t,e,n){"use strict";var r=n("cb7c"),o=n("4bf8"),i=n("9def"),a=n("4588"),u=n("0390"),c=n("5f1b"),f=Math.max,s=Math.min,l=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,v){return[function(r,o){var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=v(n,t,this,e);if(o.done)return o.value;var l=r(t),h=String(this),p="function"===typeof e;p||(e=String(e));var y=l.global;if(y){var g=l.unicode;l.lastIndex=0}var m=[];while(1){var w=c(l,h);if(null===w)break;if(m.push(w),!y)break;var x=String(w[0]);""===x&&(l.lastIndex=u(h,i(l.lastIndex),g))}for(var S="",E=0,O=0;O<m.length;O++){w=m[O];for(var _=String(w[0]),k=f(s(a(w.index),h.length),0),j=[],A=1;A<w.length;A++)j.push(d(w[A]));var F=w.groups;if(p){var I=[_].concat(j,k,h);void 0!==F&&I.push(F);var N=String(e.apply(void 0,I))}else N=b(_,h,k,j,F,e);k>=E&&(S+=h.slice(E,k)+N,E=k+_.length)}return S+h.slice(E)}];function b(t,e,r,i,a,u){var c=r+t.length,f=i.length,s=p;return void 0!==a&&(a=o(a),s=h),n.call(u,s,(function(n,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":u=a[o.slice(1,-1)];break;default:var s=+o;if(0===s)return n;if(s>f){var h=l(s/10);return 0===h?n:h<=f?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):n}u=i[s-1]}return void 0===u?"":u}))}}))},aae3:function(t,e,n){var r=n("d3f4"),o=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},aeb1:function(t,e,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})(0,(function(){return function t(e,n,r){var o,i,a=window,u="application/octet-stream",c=r||u,f=e,s=!n&&!r&&f,l=document.createElement("a"),h=function(t){return String(t)},p=a.Blob||a.MozBlob||a.WebKitBlob||h,d=n||"download";if(p=p.call?p.bind(a):Blob,"true"===String(this)&&(f=[f,c],c=f[0],f=f[1]),s&&s.length<2048&&(d=s.split("/").pop().split("?")[0],l.href=s,-1!==l.href.indexOf(s))){var v=new XMLHttpRequest;return v.open("GET",s,!0),v.responseType="blob",v.onload=function(e){t(e.target.response,d,u)},setTimeout((function(){v.send()}),0),v}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(f)){if(!(f.length>2096103.424&&p!==h))return navigator.msSaveBlob?navigator.msSaveBlob(m(f),d):w(f);f=m(f),c=f.type||u}else if(/([\x80-\xff])/.test(f)){var b=0,y=new Uint8Array(f.length),g=y.length;for(b;b<g;++b)y[b]=f.charCodeAt(b);f=new p([y],{type:c})}function m(t){var e=t.split(/[:;,]/),n=e[1],r="base64"==e[2]?atob:decodeURIComponent,o=r(e.pop()),i=o.length,a=0,u=new Uint8Array(i);for(a;a<i;++a)u[a]=o.charCodeAt(a);return new p([u],{type:n})}function w(t,e){if("download"in l)return l.href=t,l.setAttribute("download",d),l.className="download-js-link",l.innerHTML="downloading...",l.style.display="none",document.body.appendChild(l),setTimeout((function(){l.click(),document.body.removeChild(l),!0===e&&setTimeout((function(){a.URL.revokeObjectURL(l.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,u)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,u)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(o=f instanceof p?f:new p([f],{type:c}),navigator.msSaveBlob)return navigator.msSaveBlob(o,d);if(a.URL)w(a.URL.createObjectURL(o),!0);else{if("string"===typeof o||o.constructor===h)try{return w("data:"+c+";base64,"+a.btoa(o))}catch(x){return w("data:"+c+","+encodeURIComponent(o))}i=new FileReader,i.onload=function(t){w(this.result)},i.readAsDataURL(o)}return!0}}))},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},ba92:function(t,e,n){"use strict";var r=n("4bf8"),o=n("77f1"),i=n("9def");t.exports=[].copyWithin||function(t,e){var n=r(this),a=i(n.length),u=o(t,a),c=o(e,a),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?a:o(f,a))-c,a-u),l=1;c<u&&u<c+s&&(l=-1,c+=s-1,u+=s-1);while(s-- >0)c in n?n[u]=n[c]:delete n[u],u+=l,c+=l;return n}},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),a=n("1bc3"),u=n("07e3"),c=n("794b"),f=Object.getOwnPropertyDescriptor;e.f=n("8e60")?f:function(t,e){if(t=i(t),e=a(e,!0),c)try{return f(t,e)}catch(n){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},ccb9:function(t,e,n){e.f=n("5168")},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},d4c0:function(t,e,n){var r=n("0d58"),o=n("2621"),i=n("52a7");t.exports=function(t){var e=r(t),n=o.f;if(n){var a,u=n(t),c=i.f,f=0;while(u.length>f)c.call(t,a=u[f++])&&e.push(a)}return e}},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},e853:function(t,e,n){var r=n("d3f4"),o=n("1169"),i=n("2b4c")("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),a=n("d9f6").f,u=0,c=Object.isExtensible||function(){return!0},f=!n("294c")((function(){return c(Object.preventExtensions({}))})),s=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},h=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},p=function(t){return f&&d.NEED&&c(t)&&!i(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},ec30:function(t,e,n){"use strict";if(n("9e1e")){var r=n("2d00"),o=n("7726"),i=n("79e5"),a=n("5ca1"),u=n("0f88"),c=n("ed0b"),f=n("9b43"),s=n("f605"),l=n("4630"),h=n("32e9"),p=n("dcbc"),d=n("4588"),v=n("9def"),b=n("09fa"),y=n("77f1"),g=n("6a99"),m=n("69a8"),w=n("23c6"),x=n("d3f4"),S=n("4bf8"),E=n("33a4"),O=n("2aeb"),_=n("38fd"),k=n("9093").f,j=n("27ee"),A=n("ca5a"),F=n("2b4c"),I=n("0a49"),N=n("c366"),R=n("ebd6"),P=n("cadf"),T=n("84f2"),C=n("5cc5"),D=n("7a56"),U=n("36bd"),W=n("ba92"),V=n("86cc"),L=n("11e9"),M=V.f,$=L.f,B=o.RangeError,J=o.TypeError,K=o.Uint8Array,G="ArrayBuffer",Y="Shared"+G,q="BYTES_PER_ELEMENT",X="prototype",z=Array[X],Q=c.ArrayBuffer,H=c.DataView,Z=I(0),tt=I(2),et=I(3),nt=I(4),rt=I(5),ot=I(6),it=N(!0),at=N(!1),ut=P.values,ct=P.keys,ft=P.entries,st=z.lastIndexOf,lt=z.reduce,ht=z.reduceRight,pt=z.join,dt=z.sort,vt=z.slice,bt=z.toString,yt=z.toLocaleString,gt=F("iterator"),mt=F("toStringTag"),wt=A("typed_constructor"),xt=A("def_constructor"),St=u.CONSTR,Et=u.TYPED,Ot=u.VIEW,_t="Wrong length!",kt=I(1,(function(t,e){return Nt(R(t,t[xt]),e)})),jt=i((function(){return 1===new K(new Uint16Array([1]).buffer)[0]})),At=!!K&&!!K[X].set&&i((function(){new K(1).set({})})),Ft=function(t,e){var n=d(t);if(n<0||n%e)throw B("Wrong offset!");return n},It=function(t){if(x(t)&&Et in t)return t;throw J(t+" is not a typed array!")},Nt=function(t,e){if(!(x(t)&&wt in t))throw J("It is not a typed array constructor!");return new t(e)},Rt=function(t,e){return Pt(R(t,t[xt]),e)},Pt=function(t,e){var n=0,r=e.length,o=Nt(t,r);while(r>n)o[n]=e[n++];return o},Tt=function(t,e,n){M(t,e,{get:function(){return this._d[n]}})},Ct=function(t){var e,n,r,o,i,a,u=S(t),c=arguments.length,s=c>1?arguments[1]:void 0,l=void 0!==s,h=j(u);if(void 0!=h&&!E(h)){for(a=h.call(u),r=[],e=0;!(i=a.next()).done;e++)r.push(i.value);u=r}for(l&&c>2&&(s=f(s,arguments[2],2)),e=0,n=v(u.length),o=Nt(this,n);n>e;e++)o[e]=l?s(u[e],e):u[e];return o},Dt=function(){var t=0,e=arguments.length,n=Nt(this,e);while(e>t)n[t]=arguments[t++];return n},Ut=!!K&&i((function(){yt.call(new K(1))})),Wt=function(){return yt.apply(Ut?vt.call(It(this)):It(this),arguments)},Vt={copyWithin:function(t,e){return W.call(It(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return nt(It(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return U.apply(It(this),arguments)},filter:function(t){return Rt(this,tt(It(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(It(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return ot(It(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(It(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return at(It(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return it(It(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return pt.apply(It(this),arguments)},lastIndexOf:function(t){return st.apply(It(this),arguments)},map:function(t){return kt(It(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply(It(this),arguments)},reduceRight:function(t){return ht.apply(It(this),arguments)},reverse:function(){var t,e=this,n=It(e).length,r=Math.floor(n/2),o=0;while(o<r)t=e[o],e[o++]=e[--n],e[n]=t;return e},some:function(t){return et(It(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return dt.call(It(this),t)},subarray:function(t,e){var n=It(this),r=n.length,o=y(t,r);return new(R(n,n[xt]))(n.buffer,n.byteOffset+o*n.BYTES_PER_ELEMENT,v((void 0===e?r:y(e,r))-o))}},Lt=function(t,e){return Rt(this,vt.call(It(this),t,e))},Mt=function(t){It(this);var e=Ft(arguments[1],1),n=this.length,r=S(t),o=v(r.length),i=0;if(o+e>n)throw B(_t);while(i<o)this[e+i]=r[i++]},$t={entries:function(){return ft.call(It(this))},keys:function(){return ct.call(It(this))},values:function(){return ut.call(It(this))}},Bt=function(t,e){return x(t)&&t[Et]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Jt=function(t,e){return Bt(t,e=g(e,!0))?l(2,t[e]):$(t,e)},Kt=function(t,e,n){return!(Bt(t,e=g(e,!0))&&x(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?M(t,e,n):(t[e]=n.value,t)};St||(L.f=Jt,V.f=Kt),a(a.S+a.F*!St,"Object",{getOwnPropertyDescriptor:Jt,defineProperty:Kt}),i((function(){bt.call({})}))&&(bt=yt=function(){return pt.call(this)});var Gt=p({},Vt);p(Gt,$t),h(Gt,gt,$t.values),p(Gt,{slice:Lt,set:Mt,constructor:function(){},toString:bt,toLocaleString:Wt}),Tt(Gt,"buffer","b"),Tt(Gt,"byteOffset","o"),Tt(Gt,"byteLength","l"),Tt(Gt,"length","e"),M(Gt,mt,{get:function(){return this[Et]}}),t.exports=function(t,e,n,c){c=!!c;var f=t+(c?"Clamped":"")+"Array",l="get"+t,p="set"+t,d=o[f],y=d||{},g=d&&_(d),m=!d||!u.ABV,S={},E=d&&d[X],j=function(t,n){var r=t._d;return r.v[l](n*e+r.o,jt)},A=function(t,n,r){var o=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),o.v[p](n*e+o.o,r,jt)},F=function(t,e){M(t,e,{get:function(){return j(this,e)},set:function(t){return A(this,e,t)},enumerable:!0})};m?(d=n((function(t,n,r,o){s(t,d,f,"_d");var i,a,u,c,l=0,p=0;if(x(n)){if(!(n instanceof Q||(c=w(n))==G||c==Y))return Et in n?Pt(d,n):Ct.call(d,n);i=n,p=Ft(r,e);var y=n.byteLength;if(void 0===o){if(y%e)throw B(_t);if(a=y-p,a<0)throw B(_t)}else if(a=v(o)*e,a+p>y)throw B(_t);u=a/e}else u=b(n),a=u*e,i=new Q(a);h(t,"_d",{b:i,o:p,l:a,e:u,v:new H(i)});while(l<u)F(t,l++)})),E=d[X]=O(Gt),h(E,"constructor",d)):i((function(){d(1)}))&&i((function(){new d(-1)}))&&C((function(t){new d,new d(null),new d(1.5),new d(t)}),!0)||(d=n((function(t,n,r,o){var i;return s(t,d,f),x(n)?n instanceof Q||(i=w(n))==G||i==Y?void 0!==o?new y(n,Ft(r,e),o):void 0!==r?new y(n,Ft(r,e)):new y(n):Et in n?Pt(d,n):Ct.call(d,n):new y(b(n))})),Z(g!==Function.prototype?k(y).concat(k(g)):k(y),(function(t){t in d||h(d,t,y[t])})),d[X]=E,r||(E.constructor=d));var I=E[gt],N=!!I&&("values"==I.name||void 0==I.name),R=$t.values;h(d,wt,!0),h(E,Et,f),h(E,Ot,!0),h(E,xt,d),(c?new d(1)[mt]==f:mt in E)||M(E,mt,{get:function(){return f}}),S[f]=d,a(a.G+a.W+a.F*(d!=y),S),a(a.S,f,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i((function(){y.of.call(d,1)})),f,{from:Ct,of:Dt}),q in E||h(E,q,e),a(a.P,f,Vt),D(f),a(a.P+a.F*At,f,{set:Mt}),a(a.P+a.F*!N,f,$t),r||E.toString==bt||(E.toString=bt),a(a.P+a.F*i((function(){new d(1).slice()})),f,{slice:Lt}),a(a.P+a.F*(i((function(){return[1,2].toLocaleString()!=new d([1,2]).toLocaleString()}))||!i((function(){E.toLocaleString.call([1,2])}))),f,{toLocaleString:Wt}),T[f]=N?I:R,r||N||h(E,gt,R)}}else t.exports=function(){}},ed0b:function(t,e,n){"use strict";var r=n("7726"),o=n("9e1e"),i=n("2d00"),a=n("0f88"),u=n("32e9"),c=n("dcbc"),f=n("79e5"),s=n("f605"),l=n("4588"),h=n("9def"),p=n("09fa"),d=n("9093").f,v=n("86cc").f,b=n("36bd"),y=n("7f20"),g="ArrayBuffer",m="DataView",w="prototype",x="Wrong length!",S="Wrong index!",E=r[g],O=r[m],_=r.Math,k=r.RangeError,j=r.Infinity,A=E,F=_.abs,I=_.pow,N=_.floor,R=_.log,P=_.LN2,T="buffer",C="byteLength",D="byteOffset",U=o?"_b":T,W=o?"_l":C,V=o?"_o":D;function L(t,e,n){var r,o,i,a=new Array(n),u=8*n-e-1,c=(1<<u)-1,f=c>>1,s=23===e?I(2,-24)-I(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=F(t),t!=t||t===j?(o=t!=t?1:0,r=c):(r=N(R(t)/P),t*(i=I(2,-r))<1&&(r--,i*=2),t+=r+f>=1?s/i:s*I(2,1-f),t*i>=2&&(r++,i/=2),r+f>=c?(o=0,r=c):r+f>=1?(o=(t*i-1)*I(2,e),r+=f):(o=t*I(2,f-1)*I(2,e),r=0));e>=8;a[l++]=255&o,o/=256,e-=8);for(r=r<<e|o,u+=e;u>0;a[l++]=255&r,r/=256,u-=8);return a[--l]|=128*h,a}function M(t,e,n){var r,o=8*n-e-1,i=(1<<o)-1,a=i>>1,u=o-7,c=n-1,f=t[c--],s=127&f;for(f>>=7;u>0;s=256*s+t[c],c--,u-=8);for(r=s&(1<<-u)-1,s>>=-u,u+=e;u>0;r=256*r+t[c],c--,u-=8);if(0===s)s=1-a;else{if(s===i)return r?NaN:f?-j:j;r+=I(2,e),s-=a}return(f?-1:1)*r*I(2,s-e)}function $(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function B(t){return[255&t]}function J(t){return[255&t,t>>8&255]}function K(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function G(t){return L(t,52,8)}function Y(t){return L(t,23,4)}function q(t,e,n){v(t[w],e,{get:function(){return this[n]}})}function X(t,e,n,r){var o=+n,i=p(o);if(i+e>t[W])throw k(S);var a=t[U]._b,u=i+t[V],c=a.slice(u,u+e);return r?c:c.reverse()}function z(t,e,n,r,o,i){var a=+n,u=p(a);if(u+e>t[W])throw k(S);for(var c=t[U]._b,f=u+t[V],s=r(+o),l=0;l<e;l++)c[f+l]=s[i?l:e-l-1]}if(a.ABV){if(!f((function(){E(1)}))||!f((function(){new E(-1)}))||f((function(){return new E,new E(1.5),new E(NaN),E.name!=g}))){E=function(t){return s(this,E),new A(p(t))};for(var Q,H=E[w]=A[w],Z=d(A),tt=0;Z.length>tt;)(Q=Z[tt++])in E||u(E,Q,A[Q]);i||(H.constructor=E)}var et=new O(new E(2)),nt=O[w].setInt8;et.setInt8(0,2147483648),et.setInt8(1,2147483649),!et.getInt8(0)&&et.getInt8(1)||c(O[w],{setInt8:function(t,e){nt.call(this,t,e<<24>>24)},setUint8:function(t,e){nt.call(this,t,e<<24>>24)}},!0)}else E=function(t){s(this,E,g);var e=p(t);this._b=b.call(new Array(e),0),this[W]=e},O=function(t,e,n){s(this,O,m),s(t,E,m);var r=t[W],o=l(e);if(o<0||o>r)throw k("Wrong offset!");if(n=void 0===n?r-o:h(n),o+n>r)throw k(x);this[U]=t,this[V]=o,this[W]=n},o&&(q(E,C,"_l"),q(O,T,"_b"),q(O,C,"_l"),q(O,D,"_o")),c(O[w],{getInt8:function(t){return X(this,1,t)[0]<<24>>24},getUint8:function(t){return X(this,1,t)[0]},getInt16:function(t){var e=X(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=X(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return $(X(this,4,t,arguments[1]))},getUint32:function(t){return $(X(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return M(X(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return M(X(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){z(this,1,t,B,e)},setUint8:function(t,e){z(this,1,t,B,e)},setInt16:function(t,e){z(this,2,t,J,e,arguments[2])},setUint16:function(t,e){z(this,2,t,J,e,arguments[2])},setInt32:function(t,e){z(this,4,t,K,e,arguments[2])},setUint32:function(t,e){z(this,4,t,K,e,arguments[2])},setFloat32:function(t,e){z(this,4,t,Y,e,arguments[2])},setFloat64:function(t,e){z(this,8,t,G,e,arguments[2])}});y(E,g),y(O,m),u(O[w],a.VIEW,!0),e[g]=E,e[m]=O},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("download-excel",{staticClass:"btn btn-default",attrs:{data:t.json_data,fields:t.json_fields,worksheet:"My Worksheet",name:"data_employees_QCC.xls"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Excel Download")])]),n("table",{staticClass:"table table-hover"},[t._m(0),t.noData?t._e():n("tbody",t._l(t.employees,(function(e,r){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),n("td",[t._v(t._s(e.noreg))]),n("td",[t._v(t._s(e.fullname))])])})),0),t.noData?n("tbody",[t._m(1)]):t._e()])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("No")]),n("th",{attrs:{scope:"col"}},[t._v("Noreg")]),n("th",{attrs:{scope:"col"}},[t._v("Name")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{scope:"row",colspan:"3"}},[t._v("No Data Entry")])])}],i=(n("8615"),n("ac6a"),n("dc59")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v("\n\t\tDownload "+t._s(t.name)+"\n\t")])],2)},u=[],c=(n("6aa2"),n("ac4d"),n("8a81"),n("28a5"),n("5d58")),f=n.n(c),s=n("67bb"),l=n.n(s);function h(t){return h="function"===typeof l.a&&"symbol"===typeof f.a?function(t){return typeof t}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":typeof t},h(t)}function p(t){return p="function"===typeof l.a&&"symbol"===h(f.a)?function(t){return h(t)}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":h(t)},p(t)}n("4917"),n("456d"),n("7f7f"),n("a481"),n("96cf");var d=n("3b8d"),v=n("aeb1"),b=n.n(v),y={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){var t=(new Date).getTime();return"export_"+t},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof this.beforeGenerate){t.next=3;break}return t.next=3,this.beforeGenerate();case 3:if(e=this.data,"function"!==typeof this.fetch&&e){t.next=8;break}return t.next=7,this.fetch();case 7:e=t.sent;case 8:if(e&&e.length){t.next=10;break}return t.abrupt("return");case 10:if(n=this.getProcessedJson(e,this.downloadFields),"html"!==this.type){t.next=15;break}return t.abrupt("return",this.export(this.jsonToXLS(n),this.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==this.type){t.next=17;break}return t.abrupt("return",this.export(this.jsonToCSV(n),this.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",this.export(this.jsonToXLS(n),this.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),export:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=this.base64ToBlob(e,r),"function"!==typeof this.beforeFinish){t.next=4;break}return t.next=4,this.beforeFinish();case 4:b()(o,n,r);case 5:case"end":return t.stop()}}),t,this)})));function e(e,n,r){return t.apply(this,arguments)}return e}(),jsonToXLS:function(t){var e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',n="<thead>",r=Object.keys(t[0]).length,o=this;for(var i in null!=this.title&&(n+=this.parseExtraData(this.title,'<tr><th colspan="'+r+'">${data}</th></tr>')),n+="<tr>",t[0])n+="<th>"+i+"</th>";return n+="</tr>",n+="</thead>",n+="<tbody>",t.map((function(t,e){for(var r in n+="<tr>",t)n+="<td>"+o.valueReformattedForMultilines(t[r])+"</td>";n+="</tr>"})),n+="</tbody>",null!=this.footer&&(n+="<tfoot>",n+=this.parseExtraData(this.footer,'<tr><td colspan="'+r+'">${data}</td></tr>'),n+="</tfoot>"),e.replace("${table}",n).replace("${worksheet}",this.worksheet)},jsonToCSV:function(t){var e=[];for(var n in null!=this.title&&e.push(this.parseExtraData(this.title,"${data}\r\n")),t[0])e.push(n),e.push(",");return e.pop(),e.push("\r\n"),t.map((function(t){for(var n in t){var r='="'+t[n]+'"';r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"'),e.push(r),e.push(",")}e.pop(),e.push("\r\n")})),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson:function(t,e){var n=this.getKeys(t,e),r=[],o=this;return t.map((function(t,e){var i={};for(var a in n){var u=n[a];i[a]=o.getValue(u,t)}r.push(i)})),r},getKeys:function(t,e){if(e)return e;var n={};for(var r in t[0])n[r]=r;return n},parseExtraData:function(t,e){var n="";if(Array.isArray(t))for(var r=0;r<t.length;r++)n+=e.replace("${data}",t[r]);else n+=e.replace("${data}",t);return n},getValue:function(t,e){var n="object"!==p(t)?t:t.field,r="string"!==typeof n?[]:n.split("."),o=this.defaultValue;return o=n?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[n]):e,t.hasOwnProperty("callback")&&(o=this.getValueFromCallback(o,t.callback)),o},valueReformattedForMultilines:function(t){return"string"==typeof t?t.replace(/\n/gi,"<br/>"):t},getValueFromNestedItem:function(t,e){var n=t,r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var c=a.value;n&&(n=n[c])}}catch(f){o=!0,i=f}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return this.parseValue(n)},getValueFromCallback:function(t,e){if("function"!==typeof e)return this.defaultValue;var n=e(t);return this.parseValue(n)},parseValue:function(t){return t||0===t||"boolean"===typeof t?t:this.defaultValue},base64ToBlob:function(t,e){var n=window.btoa(window.unescape(encodeURIComponent(t))),r=atob(n),o=r.length,i=new Uint8ClampedArray(o);while(o--)i[o]=r.charCodeAt(o);return new Blob([i],{type:e})}}},g=y,m=n("2877"),w=Object(m["a"])(g,a,u,!1,null,null,null),x=w.exports,S={data:function(){return{employees:"",count:0,json_fields:{Name:"fullname",Noreg:"noreg"},json_data:[],noData:!0,totalKehadiran:0}},components:{"download-excel":x},methods:{loadData:function(){var t=this;this.noData=!1,i["a"].ref("/absence").on("value",(function(e){var n=[];t.containerEmployees=[],e.val()&&(Object.values(e.val()).forEach((function(t,e){console.log(t),n.push(t)})),t.json_data=n,t.employees=n,t.totalKehadiran=t.employees.length)}))}},mounted:function(){this.loadData(),0===this.employees.length?this.noData=!0:this.noData=!1}},E=S,O=Object(m["a"])(E,r,o,!1,null,null,null);e["default"]=O.exports},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol}}]);
//# sourceMappingURL=about.d883db46.js.map