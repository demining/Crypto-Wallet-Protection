(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function q(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
function ja(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ua={};try{ua.__proto__=sa;ra=ua.a;break a}catch(a){}ra=!1}pa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=pa;
function u(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ta=b.prototype}
function wa(){this.H=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.v=this.j=null}
function xa(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
wa.prototype.Z=function(a){this.i=a};
function ya(a,b){a.j={md:b,wd:!0};a.h=a.s||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.md;a.j=null;return b}
function Ca(a){a.v=[a.j];a.s=0;a.m=0}
function Da(a){var b=a.v.splice(0)[0];(b=a.j=a.j||b)?b.wd?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.wd)throw b.md;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.Z):(a.h.Z(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.Z):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
q("Reflect",function(a){return a?a:{}});
q("Reflect.construct",function(){return na});
q("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
q("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.m)}};
b.prototype.V=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.R(g):this.s(g)}};
b.prototype.R=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ia(h,g):this.s(g)};
b.prototype.m=function(g){this.Z(2,g)};
b.prototype.s=function(g){this.Z(1,g)};
b.prototype.Z=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.v()};
b.prototype.Y=function(){var g=this;e(function(){if(g.N()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.N=function(){if(this.H)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.v=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.cc(h.resolve,h.reject)};
b.prototype.ia=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(v,t){return"function"==typeof v?function(z){try{m(v(z))}catch(D){n(D)}}:t}
var m,n,p=new b(function(v,t){m=v;n=t});
this.cc(k(g,m),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=r(g),n=m.next();!n.done;n=m.next())d(n.value).cc(h,k)})};
b.all=function(g){var h=r(g),k=h.next();return k.done?d([]):new b(function(m,n){function p(z){return function(D){v[z]=D;t--;0==t&&m(v)}}
var v=[],t=0;do v.push(void 0),t++,d(k.value).cc(p(v.length-1),n),k=h.next();while(!k.done)})};
return b});
q("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=r(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ca(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n.delete(k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
q("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.data_[m];if(n&&ka(h.data_,m))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:m,list:n,index:h,entry:p}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
q("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
q("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
q("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
q("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
q("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
q("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
q("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
q("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
q("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
q("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
q("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
q("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Na(a){return a?a:Array.prototype.fill}
q("Int8Array.prototype.fill",Na);q("Uint8Array.prototype.fill",Na);q("Uint8ClampedArray.prototype.fill",Na);q("Int16Array.prototype.fill",Na);q("Uint16Array.prototype.fill",Na);q("Int32Array.prototype.fill",Na);q("Uint32Array.prototype.fill",Na);q("Float32Array.prototype.fill",Na);q("Float64Array.prototype.fill",Na);q("Object.setPrototypeOf",function(a){return a||va});
q("Set",function(a){function b(c){this.h=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
q("globalThis",function(a){return a||ea});
q("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.ta=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ft=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a,b){this.j=b===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.j=b===Nb?a:""}
Mb.prototype.toString=function(){return this.j.toString()};
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Pb;try{new URL("s://g"),Pb=!0}catch(a){Pb=!1}var Sb=Pb,Nb={},Tb=new Mb("about:invalid#zClosurez",Nb);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Ub().indexOf(a)}
;function Vb(){return C("Trident")||C("MSIE")}
function Wb(){return C("Firefox")||C("FxiOS")}
function Xb(){return C("Safari")&&!(Yb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Wb()||C("Silk")||C("Android"))}
function Yb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Zb(){return C("Android")&&!(Yb()||Wb()||C("Opera")||C("Silk"))}
function $b(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ac(a){var b=Ub();if("Internet Explorer"===a){if(Vb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=$b(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Yb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Wb()||"Safari"===a&&Xb()||"Android Browser"===a&&Zb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function bc(a){a=ac(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var cc={};function dc(a){this.j=cc===cc?a:"";this.i=!0}
dc.prototype.h=function(){return this.j.toString()};
dc.prototype.toString=function(){return this.j.toString()};function ec(a,b){if(!(b instanceof Mb||b instanceof Mb)){b="object"==typeof b&&b.i?b.h():String(b);b:{var c=b;if(Sb){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"!==c||(b="about:invalid#zClosurez");b=new Mb(b,Nb)}a.href=Ob(b)}
function fc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=gc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function hc(){return gc("script[nonce]")}
var ic=/^[\w+/_-]+[=]{0,2}$/;function gc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&ic.test(a)?a:"":""}
;function jc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lc(a){return a?decodeURI(a):a}
function mc(a,b){return b.match(kc)[a]||null}
function pc(a){return lc(mc(3,a))}
function qc(a){var b=a.match(kc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function rc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)sc(a[b],a[b+1],c);return c.join("&")}
function uc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
function vc(a,b){var c=2==arguments.length?tc(arguments[1],0):tc(arguments,1);return rc(a,c)}
function wc(a,b){b=uc(b);return rc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return rc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Ac=/[?&]($|#)/;function Bc(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ac,"$1")}
;function Cc(a){y.setTimeout(function(){throw a;},0)}
;function Dc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Ec(){var a=Ub(),b="";C("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Dc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Ub().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Kb(String(b||"")).split(".");for(var c=Kb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Lb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Lb(0==f[2].length,0==g[2].length)||Lb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Fc(a){Fc[" "](a);return a}
Fc[" "]=function(){};var Gc=C("Opera"),Hc=Vb(),Ic=C("Edge"),Jc=C("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Kc=-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"),Lc=C("Android");function Mc(){var a=y.document;return a?a.documentMode:void 0}
var Nc;a:{var Oc="",Pc=function(){var a=Ub();if(Jc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ic)return/Edge\/([\d\.]+)/.exec(a);if(Hc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kc)return/WebKit\/(\S+)/.exec(a);if(Gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Pc&&(Oc=Pc?Pc[1]:"");if(Hc){var Qc=Mc();if(null!=Qc&&Qc>parseFloat(Oc)){Nc=String(Qc);break a}}Nc=Oc}var Uc=Nc,Vc;if(y.document&&Hc){var Wc=Mc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;var Yc=Dc()||C("iPod"),Zc=C("iPad");Zb();Yb();var $c=Xb()&&!(Dc()||C("iPad")||C("iPod"));var ad={},bd=null;function cd(a,b){Qa(a);void 0===b&&(b=0);dd();b=ad[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function ed(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;fd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function fd(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),n=bd[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
dd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function dd(){if(!bd){bd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ad[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===bd[f]&&(bd[f]=e)}}}}
;var gd="undefined"!==typeof Uint8Array,hd=!Hc&&"function"===typeof y.btoa;function id(a){if(!hd)return cd(a);for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);return btoa(b)}
var jd=RegExp("[-_.]","g");function kd(a){switch(a){case "-":return"+";case "_":return"/";case ".":return"=";default:return""}}
function ld(a){return gd&&null!=a&&a instanceof Uint8Array}
var md={};var nd;function od(a){if(a!==md)throw Error("illegal external caller");}
function pd(a,b){od(b);this.za=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function qd(){return nd||(nd=new pd(null,md))}
pd.prototype.Kb=function(){return null==this.za};
pd.prototype.sizeBytes=function(){od(md);var a=this.za;if(null!=a&&!ld(a))if("string"===typeof a)if(hd){jd.test(a)&&(a=a.replace(jd,kd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=ed(a);else Pa(a),a=null;return(a=null==a?a:this.za=a)?a.length:0};var rd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function sd(a,b){if(rd)return a[rd]|=b;if(void 0!==a.Ea)return a.Ea|=b;Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function td(a,b){var c=ud(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),vd(a,c|b));return a}
function wd(a,b){rd?a[rd]&&(a[rd]&=~b):void 0!==a.Ea&&(a.Ea&=~b)}
function ud(a){var b;rd?b=a[rd]:b=a.Ea;return null==b?0:b}
function vd(a,b){rd?a[rd]=b:void 0!==a.Ea?a.Ea=b:Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function xd(a){sd(a,1);return a}
function yd(a){return!!(ud(a)&2)}
function zd(a,b){vd(b,(a|0)&-51)}
function Ad(a,b){vd(b,(a|18)&-41)}
;var Bd={};function Cd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Dd,Ed,Fd=[];vd(Fd,23);Ed=Object.freeze(Fd);function Gd(a){if(yd(a.M))throw Error("Cannot mutate an immutable Message");}
function Hd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Cd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Id(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Jd(a){return a.displayName||a.name||"unknown type name"}
function Kd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Jd(b)+" but got "+(a&&Jd(a.constructor)));return a}
;function Ld(a){var b=a.j+a.fb;return a.wa||(a.wa=a.M[b]={})}
function Md(a,b,c){return-1===b?null:b>=a.j?a.wa?a.wa[b]:void 0:c&&a.wa&&(c=a.wa[b],null!=c)?c:a.M[b+a.fb]}
function E(a,b,c,d){Gd(a);return Rd(a,b,c,d)}
function Rd(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return Ld(a)[b]=c,a;a.M[b+a.fb]=c;(c=a.wa)&&b in c&&delete c[b];return a}
function Sd(a,b){a&&yd(b.M)&&yd(a.M);return a}
function Td(a,b,c,d,e){var f=Md(a,b,d);Array.isArray(f)||(f=Ed);var g=ud(f);g&1||xd(f);if(e)g&2||sd(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&wd(f,16):(f=xd(Array.prototype.slice.call(f)),Rd(a,b,f,d))}return f}
function Ud(a,b,c,d){Gd(a);(c=Vd(a,c))&&c!==b&&null!=d&&Rd(a,c,void 0,!1);return Rd(a,b,d)}
function Vd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Md(a,e)&&(0!==c&&Rd(a,c,void 0,!1),c=e)}return c}
function Wd(a,b,c,d){var e=d=void 0===d?!1:d,f=Md(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.Jc!==Bd?g?new b(f):void 0:f;h!==f&&null!=h&&(Rd(a,c,h,e),sd(h.M,ud(a.M)&18));b=Sd(h,a);if(null==b)return b;yd(a.M)||(e=Xd(b),e!==b&&(b=e,Rd(a,c,b,d)));return Sd(b,a)}
function Yd(a,b,c,d,e,f){a.i||(a.i={});var g=a.i[c],h=Td(a,c,3,d,f);if(!g){var k=h;g=[];var m=!!(ud(a.M)&16);h=yd(k);var n=k;!f&&h&&(k=Array.prototype.slice.call(k));for(var p=h,v=0;v<k.length;v++){var t=k[v];var z=b,D=!1;D=void 0===D?!1:D;t=Array.isArray(t)?new z(t):D?new z:void 0;if(void 0!==t){z=t.M;var F=D=ud(z);h&&(F|=2);m&&(F|=16);F!=D&&vd(z,F);z=F;p=p||!!(2&z);g.push(t)}}a.i[c]=g;b=k;k=!p;m=ud(b);p=m|33;p=k?p|8:p&-9;m!=p&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),vd(b,p));k=b;
n!==k&&Rd(a,c,k,d);(f||e&&h)&&sd(g,2);e&&Object.freeze(g);return g}f||(d=Object.isFrozen(g),e&&!d?Object.freeze(g):!e&&d&&(g=Array.prototype.slice.call(g),a.i[c]=g));return g}
function Zd(a,b,c,d){var e=yd(a.M);b=Yd(a,b,c,d,e,e);a=Td(a,c,3,d,e);if(!(e||ud(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=Xd(c),c!==d&&(b[e]=d,a[e]=d.M);sd(a,8)}return b}
function G(a,b,c,d){Gd(a);null!=d?Kd(d,b):d=void 0;return Rd(a,c,d)}
function $d(a,b,c,d,e){Gd(a);null!=e?Kd(e,b):e=void 0;Ud(a,c,d,e)}
function ae(a,b,c,d,e){Gd(a);var f=null==d?Ed:xd([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Kd(k,b);g=g&&!yd(k.M);f[h]=k.M}f=td(f,(g?8:0)|1);a.i||(a.i={});a.i[c]=d}else a.i&&(a.i[c]=void 0);return Rd(a,c,f,e)}
function be(a,b,c,d){Gd(a);var e=Yd(a,c,b,void 0,!1,!1);c=null!=d?Kd(d,c):new c;a=Td(a,b,2,void 0,!1);e.push(c);a.push(c.M);yd(c.M)&&wd(a,8)}
function ce(a,b){return null==a?b:a}
function de(a,b){return ce(Md(a,b),"")}
;var ee;function fe(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(ud(a)&128))return a=Array.prototype.slice.call(a),Hd(a),a}else{if(ld(a))return id(a);if(a instanceof pd){var b=a.za;return null==b?"":"string"===typeof b?b:a.za=id(b)}}}return a}
;function ge(a,b,c,d){if(null!=a){if(Array.isArray(a))a=he(a,b,c,void 0!==d);else if(Cd(a)){var e={},f;for(f in a)e[f]=ge(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function he(a,b,c,d){var e=ud(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=ge(a[f],b,c,d);c(e,a);return a}
function ie(a){return a.Jc===Bd?a.toJSON():fe(a)}
function je(a,b){a&128&&Hd(b)}
;function ke(a,b,c){c=void 0===c?Ad:c;if(null!=a){if(gd&&a instanceof Uint8Array)return a.length?new pd(new Uint8Array(a),md):qd();if(Array.isArray(a)){var d=ud(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return vd(a,d|2),a;a=he(a,ke,d&4?Ad:c,!0);b=ud(a);b&4&&b&2&&Object.freeze(a);return a}return a.Jc===Bd?le(a):a}}
function me(a,b,c,d,e,f,g){(a=a.i&&a.i[c])?(d=0<a.length?a[0].constructor:void 0,f=ud(a),f&2||(a=ib(a,le),Ad(f,a),Object.freeze(a)),ae(b,d,c,a,e)):E(b,c,ke(d,f,g),e)}
function le(a){if(yd(a.M))return a;a=ne(a,!0);sd(a.M,2);return a}
function ne(a,b){var c=a.M,d=[];sd(d,16);var e=a.constructor.h;e&&d.push(e);e=a.wa;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(ud(c)&128)&&Hd(d);b=b||yd(a.M)?Ad:zd;f=a.constructor;ud(d);ee=d;d=new f(d);ee=void 0;a.vd&&(d.vd=a.vd.slice());f=!!(ud(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)me(a,d,h-a.fb,c[h],!1,f,b);if(e)for(var k in e)c=e[k],g=+k,Number.isNaN(g),me(a,d,g,c,!0,f,b);return d}
function Xd(a){if(!yd(a.M))return a;var b=ne(a,!1);b.m=a;return b}
;function H(a,b,c){null==a&&(a=ee);ee=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=48;var k=!0;e&&(d=0,h|=128);vd(a,h)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var m=h=sd(a,0);if(k=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)d=0;else{if(0<a.length){var n=a[a.length-1];if(Cd(n)&&"g"in n){d=0;m|=128;delete n.g;var p=!0,v;for(v in n){p=!1;break}p&&a.pop()}}}else if(128&m)throw Error();h!==m&&vd(a,m)}this.fb=(f?0:-1)-d;
this.i=void 0;this.M=a;a:{f=this.M.length;d=f-1;if(f&&(f=this.M[d],Cd(f))){this.wa=f;this.j=d-this.fb;break a}void 0!==b&&-1<b?(this.j=Math.max(b,d+1-this.fb),this.wa=void 0):this.j=Number.MAX_VALUE}if(!e&&this.wa&&"g"in this.wa)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=k&&!g&&!0;e=this.j;var t;for(k=0;k<c.length;k++)g=c[k],g<e?(g+=this.fb,(d=a[g])?oe(d,b):a[g]=Ed):(t||(t=Ld(this)),(d=t[g])?oe(d,b):t[g]=Ed)}}
H.prototype.toJSON=function(){var a=this.M,b;Dd?b=a:b=he(a,ie,je);return b};
function pe(a){Dd=!0;try{return JSON.stringify(a.toJSON(),qe)}finally{Dd=!1}}
H.prototype.clone=function(){return ne(this,!1)};
function oe(a,b){if(Array.isArray(a)){var c=ud(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&vd(a,c|d)}}
H.prototype.Jc=Bd;H.prototype.toString=function(){return this.M.toString()};
function qe(a,b){return fe(b)}
;function re(a){var b=this.h,c=this.i;return this.isRepeated?Zd(a,b,c,!0):Wd(a,b,c,!0)}
;function se(a){this.fd=a}
;function te(a,b,c){this.i=a;this.l=b;this.h=c||[];this.qb=new Map}
l=te.prototype;l.Zd=function(a){var b=Ka.apply(1,arguments),c=this.yc(b);c?c.push(new se(a)):this.Jd(a,b)};
l.Jd=function(a){this.qb.set(this.od(Ka.apply(1,arguments)),[new se(a)])};
l.yc=function(){var a=this.od(Ka.apply(0,arguments));return this.qb.has(a)?this.qb.get(a):void 0};
l.qe=function(){var a=this.yc(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.qb.clear()};
l.od=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function ue(a,b){te.call(this,a,3,b)}
u(ue,te);ue.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.qe(b);d&&(c=d.fd);this.Jd(c+a,b)};function ve(a,b){te.call(this,a,2,b)}
u(ve,te);ve.prototype.j=function(a){this.Zd(a,Ka.apply(1,arguments))};function we(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function xe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?xe.apply(null,d):we(d)}}
;function J(){this.Z=this.Z;this.H=this.H}
J.prototype.Z=!1;J.prototype.h=function(){return this.Z};
J.prototype.dispose=function(){this.Z||(this.Z=!0,this.L())};
function ye(a,b){ze(a,Ya(we,b))}
function ze(a,b){a.Z?b():(a.H||(a.H=[]),a.H.push(b))}
J.prototype.L=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Ae(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ae.prototype.stopPropagation=function(){this.j=!0};
Ae.prototype.preventDefault=function(){this.defaultPrevented=!0};function Be(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ce(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,De[c])c=De[c];else{c=String(c);if(!De[c]){var f=/function\s+([^\(]+)/m.exec(c);De[c]=f?f[1]:"[Anonymous]"}c=De[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ce(a,b){b||(b={});b[Ee(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ee(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ce(a,b));return c}
function Ee(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var De={};var Fe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Ge(a,b){Ae.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Ge,Ae);var He={2:"touch",3:"pen",4:"mouse"};
Ge.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Jc){a:{try{Fc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:He[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ge.ta.preventDefault.call(this)};
Ge.prototype.stopPropagation=function(){Ge.ta.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ge.prototype.preventDefault=function(){Ge.ta.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ie="closure_listenable_"+(1E6*Math.random()|0);var Je=0;function Ke(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++Je;this.Ob=this.ac=!1}
function Le(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function Me(a){this.src=a;this.listeners={};this.h=0}
Me.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ne(a,b,d,e);-1<g?(b=a[g],c||(b.ac=!1)):(b=new Ke(b,this.src,f,!!d,e),b.ac=c,a.push(b));return b};
Me.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ne(e,b,c,d);return-1<b?(Le(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Oe(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Le(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ne(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var Pe="closure_lm_"+(1E6*Math.random()|0),Qe={},Re=0;function Se(a,b,c,d,e){if(d&&d.once)Te(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else c=Ue(c),a&&a[Ie]?a.Ma(b,c,Ra(d)?!!d.capture:!!d,e):Ve(a,b,c,!1,d,e)}
function Ve(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=We(a);h||(a[Pe]=h=new Me(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Xe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Fe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ye(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Re++}}
function Xe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ze;return a}
function Te(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Te(a,b[f],c,d,e);else c=Ue(c),a&&a[Ie]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Ve(a,b,c,!0,d,e)}
function $e(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$e(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Ue(c),a&&a[Ie])?a.l.remove(String(b),c,d,e):a&&(a=We(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ne(b,c,d,e)),(c=-1<a?b[a]:null)&&af(c))}
function af(a){if("number"!==typeof a&&a&&!a.Ob){var b=a.src;if(b&&b[Ie])Oe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ye(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Re--;(c=We(b))?(Oe(c,a),0==c.h&&(c.src=null,b[Pe]=null)):Le(a)}}}
function Ye(a){return a in Qe?Qe[a]:Qe[a]="on"+a}
function Ze(a,b){if(a.Ob)a=!0;else{b=new Ge(b,this);var c=a.listener,d=a.hc||a.src;a.ac&&af(a);a=c.call(d,b)}return a}
function We(a){a=a[Pe];return a instanceof Me?a:null}
var bf="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ue(a){if("function"===typeof a)return a;a[bf]||(a[bf]=function(b){return a.handleEvent(b)});
return a[bf]}
;function cf(){J.call(this);this.l=new Me(this);this.Wd=this;this.Qa=null}
Za(cf,J);cf.prototype[Ie]=!0;cf.prototype.addEventListener=function(a,b,c,d){Se(this,a,b,c,d)};
cf.prototype.removeEventListener=function(a,b,c,d){$e(this,a,b,c,d)};
function df(a,b){var c=a.Qa;if(c){var d=[];for(var e=1;c;c=c.Qa)d.push(c),++e}a=a.Wd;c=b.type||b;"string"===typeof b?b=new Ae(b,a):b instanceof Ae?b.target=b.target||a:(e=b,b=new Ae(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=kf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=kf(g,c,!0,b)&&e,b.j||(e=kf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=kf(g,c,!1,b)&&e}
cf.prototype.L=function(){cf.ta.L.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Le(d[e]);delete a.listeners[c];a.h--}}this.Qa=null};
cf.prototype.Ma=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function kf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.hc||g.src;g.ac&&Oe(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function lf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
lf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function mf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function nf(a,b){return a+Math.random()*(b-a)}
;function of(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=of.prototype;l.clone=function(){return new of(this.x,this.y)};
l.equals=function(a){return a instanceof of&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function pf(a,b){this.width=a;this.height=b}
l=pf.prototype;l.clone=function(){return new pf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Kb=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function qf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function rf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function sf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var tf;function uf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=rf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ed;c.ed=null;e()}};
return function(e){d.next={ed:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function vf(){this.i=this.h=null}
vf.prototype.add=function(a,b){var c=wf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
vf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var wf=new lf(function(){return new xf},function(a){return a.reset()});
function xf(){this.next=this.scope=this.h=null}
xf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
xf.prototype.reset=function(){this.next=this.scope=this.h=null};var yf,zf=!1,Af=new vf;function Bf(a,b){yf||Cf();zf||(yf(),zf=!0);Af.add(a,b)}
function Cf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);yf=function(){a.then(Df)}}else yf=function(){var b=Df;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(tf||(tf=uf()),tf(b)):y.setImmediate(b)}}
function Df(){for(var a;a=Af.remove();){try{a.h.call(a.scope)}catch(b){Cc(b)}mf(wf,a)}zf=!1}
;function Ef(a){this.h=0;this.H=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Ff(b,2,c)},function(c){Ff(b,3,c)})}catch(c){Ff(this,3,c)}}
function Gf(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Gf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Hf=new lf(function(){return new Gf},function(a){a.reset()});
function If(a,b,c){var d=Hf.get();d.j=a;d.i=b;d.context=c;return d}
function Jf(a){return new Ef(function(b,c){c(a)})}
Ef.prototype.then=function(a,b,c){return Kf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ef.prototype.$goog_Thenable=!0;l=Ef.prototype;l.sc=function(a,b){return Kf(this,null,a,b)};
l.catch=Ef.prototype.sc;l.cancel=function(a){if(0==this.h){var b=new Lf(a);Bf(function(){Mf(this,b)},this)}};
function Mf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Mf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Nf(c),Of(c,e,3,b)))}a.j=null}else Ff(a,3,b)}
function Pf(a,b){a.i||2!=a.h&&3!=a.h||Qf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Kf(a,b,c,d){var e=If(null,null,null);e.h=new Ef(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Lf?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Pf(a,e);return e.h}
l.gf=function(a){this.h=0;Ff(this,2,a)};
l.hf=function(a){this.h=0;Ff(this,3,a)};
function Ff(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.gf,f=a.hf;if(d instanceof Ef){Pf(d,If(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){Rf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,Qf(a),3!=b||c instanceof Lf||Sf(a,c))}}
function Rf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Qf(a){a.s||(a.s=!0,Bf(a.le,a))}
function Nf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.le=function(){for(var a;a=Nf(this);)Of(this,a,this.h,this.H);this.s=!1};
function Of(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Tf(b,c,d);else try{b.l?b.j.call(b.context):Tf(b,c,d)}catch(e){Uf.call(null,e)}mf(Hf,b)}
function Tf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Sf(a,b){a.m=!0;Bf(function(){a.m&&Uf.call(null,b)})}
var Uf=Cc;function Lf(a){bb.call(this,a)}
Za(Lf,bb);Lf.prototype.name="cancel";function Vf(a,b){cf.call(this);this.j=a||1;this.i=b||y;this.m=Xa(this.ef,this);this.s=Date.now()}
Za(Vf,cf);l=Vf.prototype;l.enabled=!1;l.ya=null;function Wf(a,b){a.j=b;a.ya&&a.enabled?(a.stop(),a.start()):a.ya&&a.stop()}
l.ef=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.ya=this.i.setTimeout(this.m,this.j-a):(this.ya&&(this.i.clearTimeout(this.ya),this.ya=null),df(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ya||(this.ya=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ya&&(this.i.clearTimeout(this.ya),this.ya=null)};
l.L=function(){Vf.ta.L.call(this);this.stop();delete this.i};
function Xf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Yf(a){this.H=a;this.h=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Vf(this.flushInterval);this.i.Ma("tick",this.vc,!1,this);this.m=!1}
l=Yf.prototype;l.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Zf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.vc()}
l.vc=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.qb.size});
a.length&&this.H.flush(a,this.m);$f(a);this.j=0;this.i.enabled&&this.i.stop()};
l.Zc=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new ue(a,b))};
l.bd=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new ve(a,b))};
function ag(a,b){return a.s.has(b)?void 0:a.h.get(b)}
l.tc=function(a){this.Ud.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
l.Ud=function(a,b){var c=Ka.apply(2,arguments),d=ag(this,a);d&&d instanceof ue&&(d.j(b,c),Zf(this))};
l.uc=function(a,b){var c=Ka.apply(2,arguments),d=ag(this,a);d&&d instanceof ve&&(d.j(b,c),Zf(this))};
function $f(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function bg(a){this.h=a;this.h.Zc("/client_streamz/bg/fiec",{Jb:3,Ib:"rk"},{Jb:2,Ib:"ec"})}
function cg(a,b,c){a.h.tc("/client_streamz/bg/fiec",b,c)}
function dg(a){this.h=a;this.h.bd("/client_streamz/bg/fil",{Jb:3,Ib:"rk"})}
function eg(a){this.h=a;this.h.Zc("/client_streamz/bg/fsc",{Jb:3,Ib:"rk"})}
function fg(a){this.h=a;this.h.bd("/client_streamz/bg/fsl",{Jb:3,Ib:"rk"})}
;var gg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function hg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ig(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=jg(a,h),d+=jg(a,h+4),e+=jg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return gg.toString(e)}
function ig(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function jg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function kg(a){H.call(this,a)}
u(kg,H);var lg=[1,2,3];function mg(a){H.call(this,a)}
u(mg,H);var ng=[1,2,3];function og(a){H.call(this,a,-1,pg)}
u(og,H);var pg=[1];function qg(a){H.call(this,a,-1,rg)}
u(qg,H);var rg=[3,6,4];function sg(a){H.call(this,a,-1,tg)}
u(sg,H);var tg=[1];function ug(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function vg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(p){for(var v=g,t=0;64>t;t+=4)v[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=v[t-3]^v[t-8]^v[t-14]^v[t-16],v[t]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],D=e[2],F=e[3],N=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var O=F^z&(D^F);var T=1518500249}else O=z^D^F,T=1859775393;else 60>t?(O=z&D|F&(z|D),T=2400959708):(O=z^D^F,T=3395469782);O=((p<<5|p>>>27)&4294967295)+O+N+T+v[t]&4294967295;N=F;F=D;D=(z<<30|z>>>2)&4294967295;z=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+N&4294967295}
function c(p,v){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],z=0,D=p.length;z<D;++z)t.push(p.charCodeAt(z));p=t}v||(v=p.length);t=0;if(0==m)for(;t+64<v;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<v;)if(f[m++]=p[t++],n++,64==m)for(m=0,b(f);t+64<v;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],v=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=v&255,v>>>=8;b(f);for(t=v=0;5>t;t++)for(var z=24;0<=z;z-=8)p[v++]=e[t]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,he:function(){for(var p=d(),v="",t=0;t<p.length;t++)v+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return v}}}
;function wg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,xg(ug(d),a,c||null)].join(" "):null}
function xg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),yg(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=yg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function yg(a){var b=vg();b.update(a);return b.he().toLowerCase()}
;var zg={};function Ag(a){this.h=a||{cookie:""}}
l=Ag.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Kb())return!0;this.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Xt;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.kc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{kc:0,path:b,domain:c});return d};
l.Bc=function(){return Bg(this).keys};
l.Kb=function(){return!this.h.cookie};
l.clear=function(){for(var a=Bg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Bg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Cg=new Ag("undefined"==typeof document?null:document);function Dg(a){return!!zg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Eg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Dg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Ag(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Dg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Fg(a,b,c,d){(a=y[a])||(a=(new Ag(document)).get(b));return a?wg(a,c,d):null}
function Gg(a,b){b=void 0===b?!1:b;var c=ug(String(y.location.href)),d=[];if(Eg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Ag(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?wg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Dg(b)&&((b=Fg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Fg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Hg(a){H.call(this,a,-1,Ig)}
u(Hg,H);var Ig=[2];function Jg(a){this.h=this.i=this.j=a}
Jg.prototype.reset=function(){this.h=this.i=this.j};
Jg.prototype.getValue=function(){return this.i};function Kg(a){var b=[];Lg(new Mg,a,b);return b.join("")}
function Mg(){}
function Lg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Lg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ng(d,c),c.push(":"),Lg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ng(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Og={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Pg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ng(a,b){b.push('"',a.replace(Pg,function(c){var d=Og[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Og[c]=d);return d}),'"')}
;function Qg(){}
Qg.prototype.h=null;Qg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Rg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Sg;function Tg(){}
Za(Tg,Qg);function Ug(a){return(a=Rg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Rg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Sg=new Tg;function Vg(a){cf.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.R=this.F=null;this.m=this.ia="";this.j=this.aa=this.v=this.Y=!1;this.s=0;this.N=null;this.Aa="";this.oa=this.qa=!1}
Za(Vg,cf);var Wg=/^https?$/i,Xg=["POST","PUT"],Yg=[];function Zg(a,b,c,d,e,f,g){var h=new Vg;Yg.push(h);b&&h.Ma("complete",b);h.l.add("ready",h.ee,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.qa=g);h.send(a,c,d,e)}
l=Vg.prototype;l.ee=function(){this.dispose();lb(Yg,this)};
l.send=function(a,b,c,d){if(this.F)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ia+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ia=a;this.m="";this.Y=!1;this.i=!0;this.F=this.V?Ug(this.V):Ug(Sg);this.R=this.V?this.V.getOptions():Sg.getOptions();this.F.onreadystatechange=Xa(this.Ad,this);try{this.getStatus(),this.aa=!0,this.F.open(b,String(a),!0),this.aa=!1}catch(g){this.getStatus();$g(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(Xg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.F.setRequestHeader(d,c);this.Aa&&(this.F.responseType=this.Aa);"withCredentials"in this.F&&this.F.withCredentials!==this.qa&&(this.F.withCredentials=this.qa);try{ah(this),0<this.s&&(this.oa=bh(this.F),this.getStatus(),this.oa?(this.F.timeout=this.s,this.F.ontimeout=Xa(this.Nd,
this)):this.N=Xf(this.Nd,this.s,this)),this.getStatus(),this.v=!0,this.F.send(a),this.v=!1}catch(g){this.getStatus(),$g(this,g)}};
function bh(a){return Hc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.Nd=function(){"undefined"!=typeof Oa&&this.F&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),df(this,"timeout"),this.abort(8))};
function $g(a,b){a.i=!1;a.F&&(a.j=!0,a.F.abort(),a.j=!1);a.m=b;ch(a);dh(a)}
function ch(a){a.Y||(a.Y=!0,df(a,"complete"),df(a,"error"))}
l.abort=function(){this.F&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.F.abort(),this.j=!1,df(this,"complete"),df(this,"abort"),dh(this))};
l.L=function(){this.F&&(this.i&&(this.i=!1,this.j=!0,this.F.abort(),this.j=!1),dh(this,!0));Vg.ta.L.call(this)};
l.Ad=function(){this.h()||(this.aa||this.v||this.j?eh(this):this.Ie())};
l.Ie=function(){eh(this)};
function eh(a){if(a.i&&"undefined"!=typeof Oa)if(a.R[1]&&4==fh(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==fh(a))Xf(a.Ad,0,a);else if(df(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(gh(a))df(a,"complete"),df(a,"success");else{try{var b=2<fh(a)?a.F.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";ch(a)}}finally{dh(a)}}}
function dh(a,b){if(a.F){ah(a);var c=a.F,d=a.R[0]?function(){}:null;
a.F=null;a.R=null;b||df(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function ah(a){a.F&&a.oa&&(a.F.ontimeout=null);a.N&&(y.clearTimeout(a.N),a.N=null)}
l.isActive=function(){return!!this.F};
l.isComplete=function(){return 4==fh(this)};
function gh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=mc(1,String(a.ia)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Wg.test(a?a.toLowerCase():"");c=b}return c}
function fh(a){return a.F?a.F.readyState:0}
l.getStatus=function(){try{return 2<fh(this)?this.F.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function hh(a){H.call(this,a,-1,ih)}
u(hh,H);var ih=[1];function jh(a){H.call(this,a)}
u(jh,H);var kh=["platform","platformVersion","architecture","model","uaFullVersion"];new hh;function lh(a){H.call(this,a)}
u(lh,H);function mh(a){H.call(this,a,31,nh)}
u(mh,H);var nh=[3,20,27];function oh(a){H.call(this,a,17,ph)}
u(oh,H);var ph=[3,5];function qh(a){H.call(this,a,6,rh)}
u(qh,H);var rh=[5];function sh(a){H.call(this,a)}
u(sh,H);var th;th=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=re}(175237375,{Nt:0},sh);function uh(a,b,c,d,e,f,g,h,k,m,n){cf.call(this);var p=this;this.Y="";this.j=[];this.Xc="";this.Yc=this.eb=-1;this.Wb=!1;this.R=this.m=null;this.N=0;this.Xd=1;this.timeoutMillis=0;this.Aa=!1;cf.call(this);this.Xb=b||function(){};
this.v=new vh(a,f);this.Vd=d;this.Vb=n;this.Yd=Ya(nf,0,1);this.ia=e||null;this.V=c||null;this.oa=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Db=f||!1;!this.Db&&(65<=bc("Chromium")||45<=bc("Firefox")||12<=bc("Safari")||(Dc()||C("iPad")||C("iPod"))&&Ec());a=E(new lh,1,1);wh(this.v,a);this.s=new Jg(1E4);this.i=new Vf(this.s.getValue());ye(this,this.i);m=xh(this,m);Se(this.i,"tick",m,!1,this);this.aa=new Vf(6E5);ye(this,this.aa);Se(this.aa,"tick",m,!1,this);this.oa||this.aa.start();
this.Db||(Se(document,"visibilitychange",function(){"hidden"===document.visibilityState&&p.qa()}),Se(document,"pagehide",this.qa,!1,this))}
u(uh,cf);function xh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
uh.prototype.L=function(){this.qa();cf.prototype.L.call(this)};
function Ah(a){a.ia||(a.ia=.01>a.Yd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ia}
function Bh(a,b){a.s=new Jg(1>b?1:b);Wf(a.i,a.s.getValue())}
uh.prototype.log=function(a){a=a.clone();var b=this.Xd++;E(a,21,b);this.Y&&E(a,26,this.Y);if(!Md(a,1)){b=a;var c=Date.now().toString();E(b,1,c)}null==Md(a,15)&&E(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,Hg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.N;this.j.push(a);df(this,new Ch(a));this.oa||this.i.enabled||this.i.start()};
uh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.Aa)Dh(this);else{var d=Date.now();if(this.Yc>d&&this.eb<d)b&&b("throttled");else{var e=Eh(this.v,this.j,this.N);d={};var f=this.Xb();f&&(d.Authorization=f);var g=Ah(this);this.V&&(d["X-Goog-AuthUser"]=this.V,g=xc(g,"authuser",this.V));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Xc===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.N=0;var h=pe(e),
k;this.R&&this.R.isSupported(h.length)&&(k=this.R.compress(h));var m={url:g,body:h,ce:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(t){c.s.reset();Wf(c.i,c.s.getValue());if(t){var z=null;try{var D=JSON.parse(t.replace(")]}'\n",""));z=new qh(D)}catch(F){}z&&(t=Number(ce(Md(z,1),"-1")),0<t&&(c.eb=Date.now(),c.Yc=c.eb+t),z=th.j(z))&&(z=Md(z,1),z=null==z?-1:z,-1!=z&&(c.Wb||Bh(c,z)))}a&&a()},p=function(t,z){var D=Zd(e,mh,3),F=c.s;
F.h=Math.min(3E5,2*F.h);F.i=Math.min(3E5,F.h+Math.round(.2*(Math.random()-.5)*F.h));Wf(c.i,c.s.getValue());401===t&&f&&(c.Xc=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=D.concat(c.j),c.oa||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},v=function(){c.Vb?c.Vb.send(m,n,p):c.Vd(m,n,p)};
k?k.then(function(t){m.Oc["Content-Encoding"]="gzip";m.Oc["Content-Type"]="application/binary";m.body=t;m.ce=2;v()},function(){v()}):v()}}}};
uh.prototype.qa=function(){this.flush()};
function Dh(a){Fh(a,function(b,c){b=xc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,pe(c))}catch(e){}a.Aa&&!d&&(a.Aa=!1);return d})}
function Fh(a,b){if(0!==a.j.length){var c=Bc(Ah(a),"format");c=vc(c,"auth",a.Xb(),"authuser",a.V||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Eh(a.v,e,a.N);if(!b(c,f))break;a.N=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Ch(){Ae.call(this,"event-logged",void 0)}
u(Ch,Ae);function vh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new oh;E(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));wh(this,new lh)}
function wh(a,b){G(a.h,lh,1,b);Md(b,1)||E(b,1,1);a.i||(b=Gh(a),Md(b,5)||E(b,5,a.locale));a.uach&&(b=Gh(a),Wd(b,hh,9)||G(b,hh,9,a.uach))}
function Hh(a,b){var c=void 0===c?kh:c;b(window,c).then(function(d){a.uach=d;d=Gh(a);G(d,hh,9,a.uach);return!0}).catch(function(){return!1})}
function Gh(a){a=Wd(a.h,lh,1);var b=Wd(a,jh,11);b||(b=new jh,G(a,jh,11,b));return b}
function Eh(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=E(a,4,d);b=ae(a,mh,3,b);c&&E(b,14,c);return b}
;function Ih(a,b,c){Zg(a.url,function(d){d=d.target;if(gh(d)){try{var e=d.F?d.F.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)}
;function Jh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.v=!1;this.m=Ih;this.h=""}
;function Kh(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Jh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new uh(1828,c.R?c.R:Gg,"0",c.m,c.j,c.v,!1,c.aa,void 0,void 0,c.s?c.s:void 0);c.Z&&wh(a.v,c.Z);if(c.i){b=c.i;var d=Gh(a.v);E(d,7,b)}c.l&&(a.R=c.l);c.h&&(a.Y=c.h);c.H&&((b=c.H)?(a.m||(a.m=new Hg),b=pe(b),E(a.m,4,b)):a.m&&E(a.m,4,void 0,!1));c.V&&(d=c.V,a.m||(a.m=new Hg),b=a.m,d=null==d?Ed:td(d,1),E(b,2,d));c.N&&(b=c.N,a.Wb=!0,Bh(a,b));c.Y&&Hh(a.v,c.Y);this.h=a}
Kh.prototype.flush=function(a){var b=a||[];if(b.length){a=new sg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new qg;var h=E(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].Ib);if(null==g)g=E(h,3,Ed);else{k=ud(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];vd(g,k|5)}g=E(h,3,g)}h=[];k=[];m=r(f.qb.keys());for(var n=m.next();!n.done;n=m.next())k.push(n.value.split(","));for(m=0;m<k.length;m++){n=k[m];var p=f.l;for(var v=
f.yc(n)||[],t=[],z=0;z<v.length;z++){var D=v[z];D=D&&D.fd;var F=new mg;switch(p){case 3:Ud(F,1,ng,Number(D));break;case 2:Ud(F,2,ng,Id(Number(D)))}t.push(F)}p=t;for(v=0;v<p.length;v++){t=p[v];z=new og;t=G(z,mg,2,t);z=n;D=[];F=f;for(var N=[],O=0;O<F.h.length;O++)N.push(F.h[O].Jb);F=N;for(N=0;N<F.length;N++){O=F[N];var T=z[N],aa=new kg;switch(O){case 3:Ud(aa,1,lg,String(T));break;case 2:Ud(aa,2,lg,Number(T));break;case 1:Ud(aa,3,lg,"true"==T)}D.push(aa)}ae(t,kg,1,D);h.push(t)}}ae(g,og,4,h);c.push(g);
e.clear()}ae(a,qg,1,c);b=this.h;a instanceof mh?b.log(a):(c=new mh,a=pe(a),a=E(c,8,a),b.log(a));this.h.flush()}};function Lh(a){this.H=Mh();this.m=new Kh;this.h=new Yf(this.m);this.s=new dg(this.h);this.j=new eg(this.h);this.l=new fg(this.h);this.i=new bg(this.h);this.Oa=hg(a)}
function Mh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Nh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Oh(a){var b=this;this.i=!1;var c=a.program;var d=a.se;if(a.Me){var e;this.Da=null!=(e=a.Da)?e:new Lh(d)}var f=new Nh;this.j=f.promise;if(y[d])if(y[d].a){var g;null!=(g=this.Da)&&cg(g.i,g.Oa,3)}else{var h;null!=(h=this.Da)&&cg(h.i,h.Oa,2)}else{var k;null!=(k=this.Da)&&cg(k.i,k.Oa,1)}this.l=r((0,y[d].a)(c,function(m,n){Promise.resolve().then(function(){var p;if(null!=(p=b.Da)){var v=Mh()-p.H;p.s.h.uc("/client_streamz/bg/fil",v,p.Oa)}f.resolve({ae:m,af:n})})},!0)).next().value;
this.Ze=f.promise.then(function(){})}
Oh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Mh(),d;null!=(d=this.Da)&&d.j.h.tc("/client_streamz/bg/fsc",d.Oa);return this.j.then(function(e){var f=e.ae;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.Da)){var m=Mh()-c;k.l.h.uc("/client_streamz/bg/fsl",m,k.Oa)}g(h)},[a.hd,
a.bf])})})};
Oh.prototype.Kd=function(a){if(this.i)throw Error("Already disposed");var b=Mh(),c;null!=(c=this.Da)&&c.j.h.tc("/client_streamz/bg/fsc",c.Oa);a=this.l([a.hd,a.bf]);null!=(c=this.Da)&&(b=Mh()-b,c.l.h.uc("/client_streamz/bg/fsl",b,c.Oa));return a};
Oh.prototype.dispose=function(){var a;null!=(a=this.Da)&&a.h.vc();this.i=!0;this.j.then(function(b){(b=b.af)&&b()})};
Oh.prototype.h=function(){return this.i};var Ph=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Qh;try{new URL("s://g"),Qh=!0}catch(a){Qh=!1}var Rh=Qh;var Sh={};function Th(){}
function Uh(a){this.h=a}
u(Uh,Th);Uh.prototype.toString=function(){return this.h};function Vh(a){var b="true".toString(),c=[new Uh(Wh[0].toLowerCase(),Sh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Uh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Yh(a,b){a.src=Ib(b);Xh(a)}
;function Zh(a){this.Ae=a}
function $h(a){return new Zh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ai=[$h("data"),$h("http"),$h("https"),$h("mailto"),$h("ftp"),new Zh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function bi(a){var b=ci;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function di(){var a=[];bi(function(b){a.push(b)});
return a}
var ci={wf:"allow-forms",xf:"allow-modals",yf:"allow-orientation-lock",zf:"allow-pointer-lock",Af:"allow-popups",Bf:"allow-popups-to-escape-sandbox",Cf:"allow-presentation",Df:"allow-same-origin",Ef:"allow-scripts",Ff:"allow-top-navigation",Gf:"allow-top-navigation-by-user-activation"},ei=eb(function(){return di()});
function fi(){var a=gi(),b={};gb(ei(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function gi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function hi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ii=(new Date).getTime();var ji="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(ji);"undefined"!==typeof TextDecoder&&new TextDecoder;var ki="undefined"!==typeof TextEncoder?new TextEncoder:null,li=ki?function(a){return ki.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mi(a){cf.call(this);var b=this;this.v=this.j=0;this.xa=null!=a?a:{fa:function(e,f){return setTimeout(e,f)},
Ca:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,ni(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||oi(this)}
u(mi,cf);function pi(){var a=qi;mi.h||(mi.h=new mi(a));return mi.h}
mi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.xa.Ca(this.v);delete mi.h};
mi.prototype.ma=function(){return this.i};
function oi(a){a.v=a.xa.fa(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):w(c,ni(a),3):w(c,ni(a),3);oi(a);c.h=0})},3E4)}
function ni(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.xa.fa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.xa.Ca(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?df(a,"networkstatus-online"):df(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function ri(){this.data_=[];this.h=-1}
ri.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
ri.prototype.get=function(a){return!!this.data_[a]};
function si(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ti(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
ti.prototype[Symbol.iterator]=function(){return this};
ti.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ui(a,b){return new ti(a,b)}
;function vi(){this.blockSize=-1}
;function wi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(wi,vi);wi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)xi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xi(this,e);f=0;break}}this.i=f;this.l+=b}};
wi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;xi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ai(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yi(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function Bi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ai(a,"inverted-hdpi")&&zi(a,Array.prototype.filter.call(a.classList?a.classList:yi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ci(){}
Ci.prototype.next=function(){return Di};
var Di={done:!0,value:void 0};function Ei(a){return{value:a,done:!1}}
Ci.prototype.Ba=function(){return this};function Fi(a){if(a instanceof Gi||a instanceof Hi||a instanceof Ii)return a;if("function"==typeof a.next)return new Gi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Gi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ba)return new Gi(function(){return a.Ba()});
throw Error("Not an iterator or iterable.");}
function Gi(a){this.i=a}
Gi.prototype.Ba=function(){return new Hi(this.i())};
Gi.prototype[Symbol.iterator]=function(){return new Ii(this.i())};
Gi.prototype.h=function(){return new Ii(this.i())};
function Hi(a){this.i=a}
u(Hi,Ci);Hi.prototype.next=function(){return this.i.next()};
Hi.prototype[Symbol.iterator]=function(){return new Ii(this.i)};
Hi.prototype.h=function(){return new Ii(this.i)};
function Ii(a){Gi.call(this,function(){return a});
this.j=a}
u(Ii,Gi);Ii.prototype.next=function(){return this.j.next()};function Ji(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ji)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Ji.prototype;l.Bc=function(){Ki(this);return this.h.concat()};
l.has=function(a){return Li(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Mi;Ki(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Mi(a,b){return a===b}
l.Kb=function(){return 0==this.size};
l.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Li(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Ki(this),!0):!1};
function Ki(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Li(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Li(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Li(this.i,a)?this.i[a]:b};
l.set=function(a,b){Li(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Ji(this)};
l.keys=function(){return Fi(this.Ba(!0)).h()};
l.values=function(){return Fi(this.Ba(!1)).h()};
l.entries=function(){var a=this;return ui(this.keys(),function(b){return[b,a.get(b)]})};
l.Ba=function(a){Ki(this);var b=0,c=this.Xa,d=this,e=new Ci;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Di;var f=d.h[b++];return Ei(a?f:d.i[f])};
return e};
function Li(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Ni(a){J.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
Za(Ni,J);l=Ni.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Oi(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Cb(b)}}
l.Cb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.cb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Pi(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Cb(c)}}return 0!=e}return!1};
function Pi(a,b,c){Bf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Cb,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.L=function(){Ni.ta.L.call(this);this.clear();this.l.length=0};function Qi(a){this.h=a}
Qi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Kg(b))};
Qi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qi.prototype.remove=function(a){this.h.remove(a)};function Ri(a){this.h=a}
Za(Ri,Qi);function Si(a){this.data=a}
function Ti(a){return void 0===a||a instanceof Si?a:new Si(a)}
Ri.prototype.set=function(a,b){Ri.ta.set.call(this,a,Ti(b))};
Ri.prototype.i=function(a){a=Ri.ta.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ri.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ui(a){this.h=a}
Za(Ui,Ri);Ui.prototype.set=function(a,b,c){if(b=Ti(b)){if(c){if(c<Date.now()){Ui.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ui.ta.set.call(this,a,b)};
Ui.prototype.i=function(a){var b=Ui.ta.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ui.prototype.remove.call(this,a);else return b}};function Vi(){}
;function Wi(){}
Za(Wi,Vi);Wi.prototype[Symbol.iterator]=function(){return Fi(this.Ba(!0)).h()};
Wi.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xi(a){this.h=a}
Za(Xi,Wi);l=Xi.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Ba=function(a){var b=0,c=this.h,d=new Ci;d.next=function(){if(b>=c.length)return Di;var e=c.key(b++);if(a)return Ei(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ei(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Yi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Za(Yi,Xi);function Zi(a,b){this.i=a;this.h=null;var c;if(c=Hc)c=!(9<=Number(Xc));if(c){$i||($i=new Ji);this.h=$i.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),$i.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(Zi,Wi);var aj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},$i=null;function bj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return aj[b]})}
l=Zi.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(bj(a),b);cj(this)};
l.get=function(a){a=this.h.getAttribute(bj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(bj(a));cj(this)};
l.Ba=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ci;d.next=function(){if(b>=c.length)return Di;var e=c[b++];if(a)return Ei(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ei(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);cj(this)};
function cj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function dj(a,b){this.i=a;this.h=b+"::"}
Za(dj,Wi);dj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
dj.prototype.get=function(a){return this.i.get(this.h+a)};
dj.prototype.remove=function(a){this.i.remove(this.h+a)};
dj.prototype.Ba=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ci;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ei(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var K={},ej="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;K.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
K.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var fj={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},gj={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){return[].concat.apply([],a)}};
K.Ye=function(){ej?(K.bb=Uint8Array,K.Ga=Uint16Array,K.Td=Int32Array,K.assign(K,fj)):(K.bb=Array,K.Ga=Array,K.Td=Array,K.assign(K,gj))};
K.Ye();var hj=!0;try{new Uint8Array(1)}catch(a){hj=!1}for(var ij=new K.bb(256),jj=0;256>jj;jj++)ij[jj]=252<=jj?6:248<=jj?5:240<=jj?4:224<=jj?3:192<=jj?2:1;ij[254]=ij[254]=1;
function kj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new K.bb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var lj={};lj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var mj={},nj,oj=[],pj=0;256>pj;pj++){nj=pj;for(var qj=0;8>qj;qj++)nj=nj&1?3988292384^nj>>>1:nj>>>1;oj[pj]=nj}mj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^oj[(a^b[d])&255];return a^-1};var rj={};rj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function sj(a){for(var b=a.length;0<=--b;)a[b]=0}
var tj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],uj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],vj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],wj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],xj=Array(576);sj(xj);var yj=Array(60);sj(yj);var zj=Array(512);sj(zj);var Aj=Array(256);sj(Aj);var Bj=Array(29);sj(Bj);var Cj=Array(30);sj(Cj);function Dj(a,b,c,d,e){this.Ld=a;this.ne=b;this.me=c;this.ie=d;this.Ee=e;this.rd=a&&a.length}
var Ej,Fj,Gj;function Hj(a,b){this.ld=a;this.wb=0;this.Wa=b}
function Ij(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function Jj(a,b,c){a.ba>16-c?(a.ha|=b<<a.ba&65535,Ij(a,a.ha),a.ha=b>>16-a.ba,a.ba+=c-16):(a.ha|=b<<a.ba&65535,a.ba+=c)}
function Kj(a,b,c){Jj(a,c[2*b],c[2*b+1])}
function Lj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Mj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Lj(d[e]++,e))}
function Nj(a){var b;for(b=0;286>b;b++)a.ja[2*b]=0;for(b=0;30>b;b++)a.gb[2*b]=0;for(b=0;19>b;b++)a.ca[2*b]=0;a.ja[512]=1;a.Na=a.zb=0;a.ra=a.matches=0}
function Oj(a){8<a.ba?Ij(a,a.ha):0<a.ba&&(a.S[a.pending++]=a.ha);a.ha=0;a.ba=0}
function Pj(a,b,c){Oj(a);Ij(a,c);Ij(a,~c);K.pb(a.S,a.window,b,c,a.pending);a.pending+=c}
function Qj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Rj(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Ka;){e<a.Ka&&Qj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Qj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function Sj(a,b,c){var d=0;if(0!==a.ra){do{var e=a.S[a.Fb+2*d]<<8|a.S[a.Fb+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)Kj(a,f,b);else{var g=Aj[f];Kj(a,g+256+1,b);var h=tj[g];0!==h&&(f-=Bj[g],Jj(a,f,h));e--;g=256>e?zj[e]:zj[256+(e>>>7)];Kj(a,g,c);h=uj[g];0!==h&&(e-=Cj[g],Jj(a,e,h))}}while(d<a.ra)}Kj(a,256,b)}
function Tj(a,b){var c=b.ld,d=b.Wa.Ld,e=b.Wa.rd,f=b.Wa.ie,g,h=-1;a.Ka=0;a.tb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Ka]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ka;){var k=a.U[++a.Ka]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[2*k+1])}b.wb=h;for(g=a.Ka>>1;1<=g;g--)Rj(a,c,g);k=f;do g=a.U[1],a.U[1]=a.U[a.Ka--],Rj(a,c,1),d=a.U[1],a.U[--a.tb]=g,a.U[--a.tb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.U[1]=k++,Rj(a,c,1);while(2<=a.Ka);a.U[--a.tb]=
a.U[1];g=b.ld;k=b.wb;d=b.Wa.Ld;e=b.Wa.rd;f=b.Wa.ne;var m=b.Wa.me,n=b.Wa.Ee,p,v=0;for(p=0;15>=p;p++)a.Ha[p]=0;g[2*a.U[a.tb]+1]=0;for(b=a.tb+1;573>b;b++){var t=a.U[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,v++);g[2*t+1]=p;if(!(t>k)){a.Ha[p]++;var z=0;t>=m&&(z=f[t-m]);var D=g[2*t];a.Na+=D*(p+z);e&&(a.zb+=D*(d[2*t+1]+z))}}if(0!==v){do{for(p=n-1;0===a.Ha[p];)p--;a.Ha[p]--;a.Ha[p+1]+=2;a.Ha[n]--;v-=2}while(0<v);for(p=n;0!==p;p--)for(t=a.Ha[p];0!==t;)d=a.U[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Mj(c,h,a.Ha)}
function Uj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<k?a.ca[2*m]+=g:0!==m?(m!==e&&a.ca[2*m]++,a.ca[32]++):10>=g?a.ca[34]++:a.ca[36]++,g=0,e=m,0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4))}}
function Vj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<k){do Kj(a,m,a.ca);while(0!==--g)}else 0!==m?(m!==e&&(Kj(a,m,a.ca),g--),Kj(a,16,a.ca),Jj(a,g-3,2)):10>=g?(Kj(a,17,a.ca),Jj(a,g-3,3)):(Kj(a,18,a.ca),Jj(a,g-11,7));g=0;e=m;0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4)}}}
function Wj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ja[2*c])return 0;if(0!==a.ja[18]||0!==a.ja[20]||0!==a.ja[26])return 1;for(c=32;256>c;c++)if(0!==a.ja[2*c])return 1;return 0}
var Xj=!1;function Yj(a,b,c){a.S[a.Fb+2*a.ra]=b>>>8&255;a.S[a.Fb+2*a.ra+1]=b&255;a.S[a.Gc+a.ra]=c&255;a.ra++;0===b?a.ja[2*c]++:(a.matches++,b--,a.ja[2*(Aj[c]+256+1)]++,a.gb[2*(256>b?zj[b]:zj[256+(b>>>7)])]++);return a.ra===a.Lb-1}
;function Zj(a,b){a.msg=rj[b];return b}
function ak(a){for(var b=a.length;0<=--b;)a[b]=0}
function bk(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(K.pb(a.Mb,b.S,b.Nb,c,a.xb),a.xb+=c,b.Nb+=c,a.Sc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Nb=0))}
function ck(a,b){var c=0<=a.la?a.la:-1,d=a.o-a.la,e=0;if(0<a.level){2===a.D.wc&&(a.D.wc=Wj(a));Tj(a,a.jc);Tj(a,a.ec);Uj(a,a.ja,a.jc.wb);Uj(a,a.gb,a.ec.wb);Tj(a,a.cd);for(e=18;3<=e&&0===a.ca[2*wj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Jj(a,b?1:0,3),Pj(a,c,d);else if(4===a.strategy||g===f)Jj(a,2+(b?1:0),3),Sj(a,xj,yj);else{Jj(a,4+(b?1:0),3);c=a.jc.wb+1;d=a.ec.wb+1;e+=1;Jj(a,c-257,5);Jj(a,d-1,5);Jj(a,e-4,4);for(f=0;f<e;f++)Jj(a,a.ca[2*
wj[f]+1],3);Vj(a,a.ja,c-1);Vj(a,a.gb,d-1);Sj(a,a.ja,a.gb)}Nj(a);b&&Oj(a);a.la=a.o;bk(a.D)}
function L(a,b){a.S[a.pending++]=b}
function dk(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function ek(a,b){var c=a.xd,d=a.o,e=a.na,f=a.zd,g=a.o>a.ea-262?a.o-(a.ea-262):0,h=a.window,k=a.Ya,m=a.Fa,n=a.o+258,p=h[d+e-1],v=h[d+e];a.na>=a.qd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===v&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.vb=b;e=t;if(t>=f)break;p=h[d+e-1];v=h[d+e]}}}while((b=m[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function fk(a){var b=a.ea,c;do{var d=a.Rd-a.u-a.o;if(a.o>=b+(b-262)){K.pb(a.window,a.window,b,b,0);a.vb-=b;a.o-=b;a.la-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.D.ga)break;e=a.D;c=a.window;f=a.o+a.u;var g=e.ga;g>d&&(g=d);0===g?c=0:(e.ga-=g,K.pb(c,e.input,e.jb,g,f),1===e.state.wrap?e.C=lj(e.C,c,g,f):2===e.state.wrap&&(e.C=mj(e.C,c,g,f)),e.jb+=g,e.mb+=g,c=g);a.u+=c;if(3<=a.u+a.ka)for(d=a.o-a.ka,a.G=a.window[d],
a.G=(a.G<<a.Ja^a.window[d+1])&a.Ia;a.ka&&!(a.G=(a.G<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ya]=a.head[a.G],a.head[a.G]=d,d++,a.ka--,3>a.u+a.ka););}while(262>a.u&&0!==a.D.ga)}
function gk(a,b){for(var c;;){if(262>a.u){fk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);0!==c&&a.o-c<=a.ea-262&&(a.J=ek(a,c));if(3<=a.J)if(c=Yj(a,a.o-a.vb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.G=a.window[a.o],a.G=(a.G<<a.Ja^a.window[a.o+1])&a.Ia;else c=Yj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(ck(a,!1),0===a.D.I))return 1}a.ka=2>a.o?a.o:2;return 4===b?(ck(a,!0),0===a.D.I?3:4):a.ra&&(ck(a,!1),0===a.D.I)?1:2}
function hk(a,b){for(var c,d;;){if(262>a.u){fk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);a.na=a.J;a.Cd=a.vb;a.J=2;0!==c&&a.na<a.Hc&&a.o-c<=a.ea-262&&(a.J=ek(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.vb)&&(a.J=2));if(3<=a.na&&a.J<=a.na){d=a.o+a.u-3;c=Yj(a,a.o-1-a.Cd,a.na-3);a.u-=a.na-1;a.na-=2;do++a.o<=d&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);
while(0!==--a.na);a.hb=0;a.J=2;a.o++;if(c&&(ck(a,!1),0===a.D.I))return 1}else if(a.hb){if((c=Yj(a,0,a.window[a.o-1]))&&ck(a,!1),a.o++,a.u--,0===a.D.I)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(Yj(a,0,a.window[a.o-1]),a.hb=0);a.ka=2>a.o?a.o:2;return 4===b?(ck(a,!0),0===a.D.I?3:4):a.ra&&(ck(a,!1),0===a.D.I)?1:2}
function ik(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){fk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=Yj(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=Yj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(ck(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(ck(a,!0),0===a.D.I?3:4):
a.ra&&(ck(a,!1),0===a.D.I)?1:2}
function jk(a,b){for(var c;;){if(0===a.u&&(fk(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=Yj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(ck(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(ck(a,!0),0===a.D.I?3:4):a.ra&&(ck(a,!1),0===a.D.I)?1:2}
function kk(a,b,c,d,e){this.te=a;this.De=b;this.He=c;this.Ce=d;this.pe=e}
var lk;lk=[new kk(0,0,0,0,function(a,b){var c=65535;for(c>a.sa-5&&(c=a.sa-5);;){if(1>=a.u){fk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.la+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,ck(a,!1),0===a.D.I)return 1;if(a.o-a.la>=a.ea-262&&(ck(a,!1),0===a.D.I))return 1}a.ka=0;if(4===b)return ck(a,!0),0===a.D.I?3:4;a.o>a.la&&ck(a,!1);return 1}),
new kk(4,4,8,4,gk),new kk(4,5,16,8,gk),new kk(4,6,32,32,gk),new kk(4,4,16,16,hk),new kk(8,16,32,32,hk),new kk(8,16,128,128,hk),new kk(8,32,128,256,hk),new kk(32,128,258,1024,hk),new kk(32,258,258,4096,hk)];
function mk(){this.D=null;this.status=0;this.S=null;this.wrap=this.pending=this.Nb=this.sa=0;this.B=null;this.va=0;this.method=8;this.ub=-1;this.Ya=this.Uc=this.ea=0;this.window=null;this.Rd=0;this.head=this.Fa=null;this.zd=this.qd=this.strategy=this.level=this.Hc=this.xd=this.na=this.u=this.vb=this.o=this.hb=this.Cd=this.J=this.la=this.Ja=this.Ia=this.Cc=this.ic=this.G=0;this.ja=new K.Ga(1146);this.gb=new K.Ga(122);this.ca=new K.Ga(78);ak(this.ja);ak(this.gb);ak(this.ca);this.cd=this.ec=this.jc=
null;this.Ha=new K.Ga(16);this.U=new K.Ga(573);ak(this.U);this.tb=this.Ka=0;this.depth=new K.Ga(573);ak(this.depth);this.ba=this.ha=this.ka=this.matches=this.zb=this.Na=this.Fb=this.ra=this.Lb=this.Gc=0}
function nk(a,b){if(!a||!a.state||5<b||0>b)return a?Zj(a,-2):-2;var c=a.state;if(!a.Mb||!a.input&&0!==a.ga||666===c.status&&4!==b)return Zj(a,0===a.I?-5:-2);c.D=a;var d=c.ub;c.ub=b;if(42===c.status)if(2===c.wrap)a.C=0,L(c,31),L(c,139),L(c,8),c.B?(L(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),L(c,c.B.time&255),L(c,c.B.time>>8&255),L(c,c.B.time>>16&255),L(c,c.B.time>>24&255),L(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),L(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&(L(c,
c.B.Sa.length&255),L(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.C=mj(a.C,c.S,c.pending,0)),c.va=0,c.status=69):(L(c,0),L(c,0),L(c,0),L(c,0),L(c,0),L(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),L(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;dk(c,e+(31-e%31));0!==c.o&&(dk(c,a.C>>>16),dk(c,a.C&65535));a.C=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.va<(c.B.Sa.length&65535)&&(c.pending!==c.sa||(c.B.Ta&&c.pending>
e&&(a.C=mj(a.C,c.S,c.pending-e,e)),bk(a),e=c.pending,c.pending!==c.sa));)L(c,c.B.Sa[c.va]&255),c.va++;c.B.Ta&&c.pending>e&&(a.C=mj(a.C,c.S,c.pending-e,e));c.va===c.B.Sa.length&&(c.va=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ta&&c.pending>e&&(a.C=mj(a.C,c.S,c.pending-e,e)),bk(a),e=c.pending,c.pending===c.sa)){var f=1;break}f=c.va<c.B.name.length?c.B.name.charCodeAt(c.va++)&255:0;L(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=mj(a.C,c.S,c.pending-
e,e));0===f&&(c.va=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ta&&c.pending>e&&(a.C=mj(a.C,c.S,c.pending-e,e)),bk(a),e=c.pending,c.pending===c.sa)){f=1;break}f=c.va<c.B.comment.length?c.B.comment.charCodeAt(c.va++)&255:0;L(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=mj(a.C,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.sa&&bk(a),c.pending+2<=c.sa&&(L(c,a.C&255),L(c,a.C>>8&255),a.C=0,
c.status=113)):c.status=113);if(0!==c.pending){if(bk(a),0===a.I)return c.ub=-1,0}else if(0===a.ga&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Zj(a,-5);if(666===c.status&&0!==a.ga)return Zj(a,-5);if(0!==a.ga||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?jk(c,b):3===c.strategy?ik(c,b):lk[c.level].pe(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.ub=-1),0;if(2===d&&(1===b?(Jj(c,2,3),Kj(c,256,xj),16===c.ba?(Ij(c,c.ha),c.ha=0,c.ba=0):8<=c.ba&&(c.S[c.pending++]=c.ha&255,
c.ha>>=8,c.ba-=8)):5!==b&&(Jj(c,0,3),Pj(c,0,0),3===b&&(ak(c.head),0===c.u&&(c.o=0,c.la=0,c.ka=0))),bk(a),0===a.I))return c.ub=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(L(c,a.C&255),L(c,a.C>>8&255),L(c,a.C>>16&255),L(c,a.C>>24&255),L(c,a.mb&255),L(c,a.mb>>8&255),L(c,a.mb>>16&255),L(c,a.mb>>24&255)):(dk(c,a.C>>>16),dk(c,a.C&65535));bk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ok={};ok=function(){this.input=null;this.mb=this.ga=this.jb=0;this.Mb=null;this.Sc=this.I=this.xb=0;this.msg="";this.state=null;this.wc=2;this.C=0};var pk=Object.prototype.toString;
function qk(a){if(!(this instanceof qk))return new qk(a);a=this.options=K.assign({level:-1,method:8,chunkSize:16384,Za:15,Fe:8,strategy:0,K:""},a||{});a.raw&&0<a.Za?a.Za=-a.Za:a.ue&&0<a.Za&&16>a.Za&&(a.Za+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.D=new ok;this.D.I=0;var b=this.D;var c=a.level,d=a.method,e=a.Za,f=a.Fe,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Zj(b,-2);else{8===e&&(e=9);var k=new mk;
b.state=k;k.D=b;k.wrap=h;k.B=null;k.Uc=e;k.ea=1<<k.Uc;k.Ya=k.ea-1;k.Cc=f+7;k.ic=1<<k.Cc;k.Ia=k.ic-1;k.Ja=~~((k.Cc+3-1)/3);k.window=new K.bb(2*k.ea);k.head=new K.Ga(k.ic);k.Fa=new K.Ga(k.ea);k.Lb=1<<f+6;k.sa=4*k.Lb;k.S=new K.bb(k.sa);k.Fb=1*k.Lb;k.Gc=3*k.Lb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.mb=b.Sc=0;b.wc=2;c=b.state;c.pending=0;c.Nb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.C=2===c.wrap?0:1;c.ub=0;if(!Xj){d=Array(16);for(f=g=0;28>f;f++)for(Bj[f]=g,e=0;e<1<<tj[f];e++)Aj[g++]=
f;Aj[g-1]=f;for(f=g=0;16>f;f++)for(Cj[f]=g,e=0;e<1<<uj[f];e++)zj[g++]=f;for(g>>=7;30>f;f++)for(Cj[f]=g<<7,e=0;e<1<<uj[f]-7;e++)zj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)xj[2*e+1]=8,e++,d[8]++;for(;255>=e;)xj[2*e+1]=9,e++,d[9]++;for(;279>=e;)xj[2*e+1]=7,e++,d[7]++;for(;287>=e;)xj[2*e+1]=8,e++,d[8]++;Mj(xj,287,d);for(e=0;30>e;e++)yj[2*e+1]=5,yj[2*e]=Lj(e,5);Ej=new Dj(xj,tj,257,286,15);Fj=new Dj(yj,uj,0,30,15);Gj=new Dj([],vj,0,19,7);Xj=!0}c.jc=new Hj(c.ja,Ej);c.ec=new Hj(c.gb,Fj);c.cd=
new Hj(c.ca,Gj);c.ha=0;c.ba=0;Nj(c);c=0}else c=Zj(b,-2);0===c&&(b=b.state,b.Rd=2*b.ea,ak(b.head),b.Hc=lk[b.level].De,b.qd=lk[b.level].te,b.zd=lk[b.level].He,b.xd=lk[b.level].Ce,b.o=0,b.la=0,b.u=0,b.ka=0,b.J=b.na=2,b.hb=0,b.G=0);b=c}}else b=-2;if(0!==b)throw Error(rj[b]);a.header&&(b=this.D)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.Gb){var m;"string"===typeof a.Gb?m=kj(a.Gb):"[object ArrayBuffer]"===pk.call(a.Gb)?m=new Uint8Array(a.Gb):m=a.Gb;a=this.D;f=m;g=f.length;if(a&&a.state)if(m=
a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.C=lj(a.C,f,g,0));m.wrap=0;g>=m.ea&&(0===b&&(ak(m.head),m.o=0,m.la=0,m.ka=0),c=new K.bb(m.ea),K.pb(c,f,g-m.ea,m.ea,0),f=c,g=m.ea);c=a.ga;d=a.jb;e=a.input;a.ga=g;a.jb=0;a.input=f;for(fk(m);3<=m.u;){f=m.o;g=m.u-2;do m.G=(m.G<<m.Ja^m.window[f+3-1])&m.Ia,m.Fa[f&m.Ya]=m.head[m.G],m.head[m.G]=f,f++;while(--g);m.o=f;m.u=2;fk(m)}m.o+=m.u;m.la=m.o;m.ka=m.u;m.u=0;m.J=m.na=2;m.hb=0;a.jb=d;a.input=e;a.ga=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(rj[b]);
this.Ct=!0}}
qk.prototype.push=function(a,b){var c=this.D,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=kj(a):"[object ArrayBuffer]"===pk.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ga=c.input.length;do{0===c.I&&(c.Mb=new K.bb(d),c.xb=0,c.I=d);a=nk(c,e);if(1!==a&&0!==a)return rk(this,a),this.ended=!0,!1;if(0===c.I||0===c.ga&&(4===e||2===e))if("string"===this.options.K){var f=K.Rc(c.Mb,c.xb);b=f;f=f.length;if(65537>f&&(b.subarray&&hj||!b.subarray))b=
String.fromCharCode.apply(null,K.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=K.Rc(c.Mb,c.xb),this.chunks.push(b)}while((0<c.ga||0===c.I)&&1!==a);if(4===e)return(c=this.D)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Zj(c,-2):(c.state=null,a=113===d?Zj(c,-3):0)):a=-2,rk(this,a),this.ended=!0,0===a;2===e&&(rk(this,0),c.I=0);return!0};
function rk(a,b){0===b&&(a.result="string"===a.options.K?a.chunks.join(""):K.nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.D.msg}
function sk(a){var b=b||{};b.ue=!0;b=new qk(b);b.push(a,!0);if(b.err)throw b.msg||rj[b.err];return b.result}
;function tk(a){return Jb(null===a?"null":void 0===a?"undefined":a)}
;function uk(a){this.name=a}
;var vk=new uk("rawColdConfigGroup");var wk=new uk("rawHotConfigGroup");function xk(a){H.call(this,a)}
u(xk,H);function yk(a){H.call(this,a)}
u(yk,H);function zk(a){H.call(this,a)}
u(zk,H);function Ak(a){H.call(this,a,-1,Bk)}
u(Ak,H);var Bk=[2];function Ck(a){H.call(this,a,-1,Dk)}
u(Ck,H);Ck.prototype.getPlayerType=function(){return Md(this,36)};
Ck.prototype.setHomeGroupInfo=function(a){return G(this,Ak,81,a)};
Ck.prototype.clearLocationPlayabilityToken=function(){return E(this,89,void 0,!1)};
var Dk=[9,66,24,32,86,100,101];function Ek(a){H.call(this,a)}
u(Ek,H);Ek.prototype.getKey=function(){return de(this,1)};
Ek.prototype.getValue=function(){return de(this,2===Vd(this,Fk)?2:-1)};
var Fk=[2,3,4,5,6];function Gk(a){H.call(this,a,-1,Hk)}
u(Gk,H);var Hk=[15,26,28];function Ik(a){H.call(this,a,-1,Jk)}
u(Ik,H);var Jk=[5];function Kk(a){H.call(this,a)}
u(Kk,H);function Lk(a){H.call(this,a,-1,Mk)}
u(Lk,H);Lk.prototype.setSafetyMode=function(a){return E(this,5,a)};
var Mk=[12];function Nk(a){H.call(this,a,-1,Ok)}
u(Nk,H);Nk.prototype.l=function(a){return G(this,Ck,1,a)};
var Ok=[12];var Pk=new uk("continuationCommand");var Qk=new uk("webCommandMetadata");var Rk=new uk("signalServiceEndpoint");var Sk={ik:"EMBEDDED_PLAYER_MODE_UNKNOWN",fk:"EMBEDDED_PLAYER_MODE_DEFAULT",hk:"EMBEDDED_PLAYER_MODE_PFP",gk:"EMBEDDED_PLAYER_MODE_PFL"};var Tk=new uk("feedbackEndpoint");var Uk={Ys:"WEB_DISPLAY_MODE_UNKNOWN",Us:"WEB_DISPLAY_MODE_BROWSER",Ws:"WEB_DISPLAY_MODE_MINIMAL_UI",Xs:"WEB_DISPLAY_MODE_STANDALONE",Vs:"WEB_DISPLAY_MODE_FULLSCREEN"};function Vk(a){H.call(this,a)}
u(Vk,H);Vk.prototype.getKey=function(){return de(this,1)};
Vk.prototype.getValue=function(){return de(this,2)};function Wk(a){H.call(this,a,-1,Xk)}
u(Wk,H);var Xk=[4,5];function rl(a){H.call(this,a)}
u(rl,H);function sl(a){H.call(this,a)}
u(sl,H);var tl=[2,3,4];function ul(a){H.call(this,a)}
u(ul,H);ul.prototype.getMessage=function(){return de(this,1)};function vl(a){H.call(this,a)}
u(vl,H);function wl(a){H.call(this,a)}
u(wl,H);function xl(a){H.call(this,a,-1,yl)}
u(xl,H);var yl=[10,17];function zl(a){H.call(this,a)}
u(zl,H);function Al(a){H.call(this,a)}
u(Al,H);function Bl(a){H.call(this,a)}
u(Bl,H);function Cl(a){H.call(this,a)}
u(Cl,H);function Dl(a){H.call(this,a)}
u(Dl,H);function El(a){H.call(this,a,-1,Fl)}
u(El,H);El.prototype.getVideoData=function(){return Wd(this,Dl,15)};
var Fl=[4];function Gl(a){H.call(this,a)}
u(Gl,H);function Hl(a,b){G(a,Bl,1,b)}
;function Il(a){H.call(this,a)}
u(Il,H);function Jl(a,b){return G(a,Bl,1,b)}
Il.prototype.h=function(a){return E(this,2,a)};function Kl(a){H.call(this,a,-1,Ll)}
u(Kl,H);Kl.prototype.h=function(a){return E(this,1,a)};
function Ml(a,b){return G(a,Bl,2,b)}
var Ll=[3];function Nl(a){H.call(this,a)}
u(Nl,H);Nl.prototype.h=function(a){return E(this,1,a)};function Ol(a){H.call(this,a)}
u(Ol,H);Ol.prototype.h=function(a){return E(this,1,a)};function Pl(a){H.call(this,a)}
u(Pl,H);Pl.prototype.h=function(a){return E(this,1,a)};function Ql(a){H.call(this,a)}
u(Ql,H);Ql.prototype.h=function(a){return E(this,1,a)};function Rl(a){H.call(this,a)}
u(Rl,H);function Sl(a){H.call(this,a)}
u(Sl,H);function Tl(a){var b=new Sl;return E(b,1,a)}
Sl.prototype.getId=function(){return de(this,2)};
function Ul(a,b){return E(a,2,b)}
;function Vl(a){H.call(this,a)}
u(Vl,H);function Wl(a){H.call(this,a,-1,Xl)}
u(Wl,H);Wl.prototype.getPlayerType=function(){return ce(Md(this,7),0)};
Wl.prototype.setVideoId=function(a){return E(this,19,a)};
function Yl(a,b){be(a,68,Sl,b)}
var Xl=[83,68];function Zl(a){H.call(this,a)}
u(Zl,H);function $l(a){H.call(this,a)}
u($l,H);function am(a){H.call(this,a)}
u(am,H);function bm(a){H.call(this,a,459)}
u(bm,H);
var cm=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458];var dm={ol:0,Tk:1,Zk:2,al:4,kl:8,bl:16,dl:32,nl:64,ml:128,Vk:256,Xk:512,il:1024,Wk:2048,Yk:4096,Uk:8192,fl:16384,ll:32768,jl:65536};function em(a){H.call(this,a)}
u(em,H);function fm(a){H.call(this,a)}
u(fm,H);fm.prototype.setVideoId=function(a){return Ud(this,1,gm,a)};
fm.prototype.getPlaylistId=function(){var a=2===Vd(this,gm)?2:-1;return Md(this,a)};
var gm=[1,2];function hm(a){H.call(this,a,-1,im)}
u(hm,H);var im=[3];var jm=new uk("webPlayerShareEntityServiceEndpoint");var km=new uk("playlistEditEndpoint");var lm=new uk("modifyChannelNotificationPreferenceEndpoint");var mm=new uk("unsubscribeEndpoint");var nm=new uk("subscribeEndpoint");function om(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var pm=y.window,qm,rm,sm=(null==pm?void 0:null==(qm=pm.yt)?void 0:qm.config_)||(null==pm?void 0:null==(rm=pm.ytcfg)?void 0:rm.data_)||{};A("yt.config_",sm);function tm(){om(sm,arguments)}
function M(a,b){return a in sm?sm[a]:b}
function um(){var a=sm.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function P(a){a=vm(a);return"string"===typeof a&&"false"===a?!1:!!a}
function wm(a,b){a=vm(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function xm(){return M("EXPERIMENTS_TOKEN","")}
function vm(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
function ym(){for(var a=[],b=M("EXPERIMENTS_FORCED_FLAGS",{}),c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=M("EXPERIMENT_FLAGS",{});var e=r(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function zm(){var a=Am;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function Bm(a){A("yt.ads.biscotti.lastId_",a)}
;var Cm=[];function Dm(a){Cm.forEach(function(b){return b(a)})}
function Em(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Fm(b)}}:a}
function Fm(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=M("ERRORS",[]),e.push([a,"ERROR",b,c,d]),tm("ERRORS",e));Dm(a)}
function Gm(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=M("ERRORS",[]),e.push([a,"WARNING",b,c,d]),tm("ERRORS",e))}
;var Hm=/^[\w.]*$/,Im={q:!0,search_query:!0};function Jm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Km(f[0]||""),h=Km(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,m=f[0],n=String(Jm);k.args=[{key:m,value:f[1],query:a,method:Lm==n?"unchanged":n}];Im.hasOwnProperty(m)||Gm(k)}}return c}
var Lm=String(Jm);function Mm(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Nm(a){"?"==a.charAt(0)&&(a=a.substr(1));return Jm(a,"&")}
function Om(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Nm(1<a.length?a[1]:a[0])):{}}
function Pm(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Nm(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function Qm(a){if(!b)var b=window.location.href;var c=mc(1,a),d=pc(a);c&&d?(a=a.match(kc),b=b.match(kc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pc(b)==d&&(Number(mc(4,b))||null)==(Number(mc(4,a))||null):!0;return a}
function Km(a){return a&&a.match(Hm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Rm(a){var b=Sm;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ii;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ha){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ph:g;try{var h=g.history.length}catch(ha){h=0}e.u_his=h;var k;e.u_h=null==(k=Ph.screen)?void 0:k.height;var m;e.u_w=null==(m=Ph.screen)?void 0:m.width;var n;e.u_ah=null==(n=Ph.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Ph.screen)?void 0:p.availWidth;var v;e.u_cd=null==(v=Ph.screen)?void 0:v.colorDepth}catch(ha){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(ha){}try{var D=h.outerWidth;var F=h.outerHeight}catch(ha){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ha){}try{var T=h.screenLeft;var aa=h.screenTop}catch(ha){}try{N=h.innerWidth,O=h.innerHeight}catch(ha){}try{var W=h.screen.availWidth;var xb=h.screen.availTop}catch(ha){}t=[T,aa,t,z,W,xb,D,F,N,O];try{var $a=(b.h.top||window).document,qa="CSS1Compat"==
$a.compatMode?$a.documentElement:$a.body;var I=(new pf(qa.clientWidth,qa.clientHeight)).round()}catch(ha){I=new pf(-12245933,-12245933)}$a=I;I={};var oa=void 0===oa?y:oa;qa=new ri;oa.SVGElement&&oa.document.createElementNS&&qa.set(0);z=fi();z["allow-top-navigation-by-user-activation"]&&qa.set(1);z["allow-popups-to-escape-sandbox"]&&qa.set(2);oa.crypto&&oa.crypto.subtle&&qa.set(3);oa.TextDecoder&&oa.TextEncoder&&qa.set(4);oa=si(qa);I.bc=oa;I.bih=$a.height;I.biw=$a.width;I.brdim=t.join();b=b.i;b=(I.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Ph.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Sm=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Mm(Rm(a))});Date.now();var Tm="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Um(){if(!Tm)return null;var a=Tm();return"open"in a?a:null}
function Vm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Wm(a,b){"function"===typeof a&&(a=Em(a));return window.setTimeout(a,b)}
;var Xm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ym="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(ji)),Zm=!1;
function $m(a,b){b=void 0===b?{}:b;var c=Qm(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in Xm){var f=M(Xm[e]);"X-Goog-Visitor-Id"!==e||f||(f=M("VISITOR_DATA"));!f||!c&&pc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!pc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&pc(a)||(b["X-YouTube-Ad-Signals"]=Mm(Rm()));return b}
function an(a){var b=window.location.search,c=pc(a);P("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Qm(a)&&(c=document.location.hostname);var d=lc(mc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Nm(b),f={};gb(Ym,function(g){e[g]&&(f[g]=e[g])});
return Pm(a,f||{},!1)}
function bn(a,b){var c=b.format||"JSON";a=cn(a,b);var d=dn(a,b),e=!1,f=en(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=Vm(k),n=null,p=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(m||p||v)n=fn(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};p=b.context||y;m?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Wm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function cn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Pm(a,b||{},!0);return a}
function dn(a,b){var c=M("XSRF_FIELD_NAME"),d=M("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=M("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pc(a)&&!b.withCredentials&&pc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Nm(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):uc(e));f=e||f&&!qb(f);!Zm&&f&&"POST"!=b.method&&(Zm=!0,Fm(Error("AJAX request with postData should use POST")));return e}
function fn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Gm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?gn(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=hn(g)})}d&&jn(e);
return e}
function jn(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new dc(d)}else jn(a[b])}}
function gn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function hn(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function kn(a,b){b.method="POST";b.postParams||(b.postParams={});return bn(a,b)}
function en(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Em(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Um();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=an(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=$m(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ln=Yc||Zc;function mn(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var nn=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var pn={Va:[],Ra:[{callback:on,weight:500}]};function on(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function qn(){this.Ra=[];this.Va=[]}
var rn;function sn(){if(!rn){var a=rn=new qn;a.Va.length=0;a.Ra.length=0;pn.Va&&a.Va.push.apply(a.Va,pn.Va);pn.Ra&&a.Ra.push.apply(a.Ra,pn.Ra)}return rn}
;var tn=new Ni;function un(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=vn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=vn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=vn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function vn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function wn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=xn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=un(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?xn(e+".ve",f,g,h):0;d+=g;d+=xn(e,a[e],b,c);if(500<d)break}}else c[b]=yn(a),d+=c[b].length;else c[b]=yn(a),d+=c[b].length;return d}
function xn(a,b,c,d){c+="."+a;a=yn(b);d[c]=a;return c.length+a.length}
function yn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function zn(){this.cf=!0}
function An(){zn.h||(zn.h=new zn);return zn.h}
function Bn(a,b){a={};var c=Gg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(M("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in sm||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in sm&&(a["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return a}
;var Cn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Dn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function En(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Fn(a,b,c,d,e){Cg.set(""+a,b,{kc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Gn(a,b,c){Cg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Hn(){if(!Cg.isEnabled())return!1;if(!Cg.Kb())return!0;Cg.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==Cg.get("TESTCOOKIESENABLED"))return!1;Cg.remove("TESTCOOKIESENABLED");return!0}
;var In=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",In);function Jn(){this.h=M("ALT_PREF_COOKIE_NAME","PREF");this.i=M("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Cg.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(In[d]=c.toString())}}}
Jn.prototype.get=function(a,b){Kn(a);Ln(a);a=void 0!==In[a]?In[a].toString():null;return null!=a?a:b?b:""};
Jn.prototype.set=function(a,b){Kn(a);Ln(a);if(null==b)throw Error("ExpectedNotNull");In[a]=b.toString()};
function Mn(a){return!!((Nn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Jn.prototype.remove=function(a){Kn(a);Ln(a);delete In[a]};
Jn.prototype.clear=function(){for(var a in In)delete In[a]};
function Ln(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Kn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Nn(a){a=void 0!==In[a]?In[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Jn.h=void 0;Jn.getInstance=function(){return Jn.h?Jn.h:Jn.h=new Jn};var On={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Pn={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Qn={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Rn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Sn(){var a=y.navigator;return a?a.connection:void 0}
function Tn(){var a=Sn();if(a){var b=On[a.type||"unknown"]||"CONN_UNKNOWN";a=On[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Un(){var a=Sn();if(null!=a&&a.effectiveType)return Rn.hasOwnProperty(a.effectiveType)?Rn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Vn(){}
function Wn(a,b){return Xn(a,0,b)}
Vn.prototype.fa=function(a,b){return Xn(a,1,b)};
function Yn(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Zn(){Vn.apply(this,arguments)}
u(Zn,Vn);function $n(){Zn.h||(Zn.h=new Zn);return Zn.h}
function Xn(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Wm(a,c||0)}
Zn.prototype.Ca=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Zn.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Zn.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var qi=$n();function Q(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
u(Q,Error);function ao(){try{return bo(),!0}catch(a){return!1}}
function bo(a){if(void 0!==M("DATASYNC_ID"))return M("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function co(a){var b=new Yi;(b=b.isAvailable()?a?new dj(b,a):b:null)||(a=new Zi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ui(a):null;this.i=document.domain||window.location.hostname}
co.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Kg(b))}catch(f){return}else e=escape(b);Fn(a,e,c,this.i)};
co.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Cg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
co.prototype.remove=function(a){this.h&&this.h.remove(a);Gn(a,"/",this.i)};var eo=function(){var a;return function(){a||(a=new co("ytidb"));return a}}();
function fo(){var a;return null==(a=eo())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var go=[],ho,io=!1;function jo(){var a={};for(ho=new ko(void 0===a.handleError?lo:a.handleError,void 0===a.logEvent?mo:a.logEvent);0<go.length;)switch(a=go.shift(),a.type){case "ERROR":ho.handleError(a.payload);break;case "EVENT":ho.logEvent(a.eventType,a.payload)}}
function no(a){io||(ho?ho.handleError(a):(go.push({type:"ERROR",payload:a}),10<go.length&&go.shift()))}
function oo(a,b){io||(ho?ho.logEvent(a,b):(go.push({type:"EVENT",eventType:a,payload:b}),10<go.length&&go.shift()))}
;function po(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qo(a){return a.substr(0,a.indexOf(":"))||a}
;var ro={},so=(ro.AUTH_INVALID="No user identifier specified.",ro.EXPLICIT_ABORT="Transaction was explicitly aborted.",ro.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ro.MISSING_INDEX="Index not created.",ro.MISSING_OBJECT_STORES="Object stores not created.",ro.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ro.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ro.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ro.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ro.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ro.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ro.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ro),to={},uo=(to.AUTH_INVALID="ERROR",to.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",to.EXPLICIT_ABORT="IGNORED",to.IDB_NOT_SUPPORTED="ERROR",to.MISSING_INDEX=
"WARNING",to.MISSING_OBJECT_STORES="ERROR",to.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",to.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",to.QUOTA_EXCEEDED="WARNING",to.QUOTA_MAYBE_EXCEEDED="WARNING",to.UNKNOWN_ABORT="WARNING",to.INCOMPATIBLE_DB_VERSION="WARNING",to),vo={},wo=(vo.AUTH_INVALID=!1,vo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,vo.EXPLICIT_ABORT=!1,vo.IDB_NOT_SUPPORTED=!1,vo.MISSING_INDEX=!1,vo.MISSING_OBJECT_STORES=!1,vo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,vo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,vo.QUOTA_EXCEEDED=!1,vo.QUOTA_MAYBE_EXCEEDED=!0,vo.UNKNOWN_ABORT=!0,vo.INCOMPATIBLE_DB_VERSION=!1,vo);function xo(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?so[a]:c;d=void 0===d?uo[a]:d;e=void 0===e?wo[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,xo.prototype)}
u(xo,Q);function yo(a,b){xo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},so.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,yo.prototype)}
u(yo,xo);function zo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zo.prototype)}
u(zo,Error);var Ao=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bo(a,b,c,d){b=qo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof xo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new xo("QUOTA_EXCEEDED",a);if($c&&"UnknownError"===e.name)return new xo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zo)return new xo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ao.some(function(f){return e.message.includes(f)}))return new xo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new xo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Bd:e.name})];e.level="WARNING";return e}
function Co(a,b,c){var d=fo();return new xo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Do(a){if(!a)throw Error();throw a;}
function Eo(a){return a}
function Fo(a){this.h=a}
function Go(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=r(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=r(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Go.all=function(a){return new Go(new Fo(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={nb:0};f.nb<a.length;f={nb:f.nb},++f.nb)Go.resolve(a[f.nb]).then(function(g){return function(h){d[g.nb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Go.resolve=function(a){return new Go(new Fo(function(b,c){a instanceof Go?a.then(b,c):b(a)}))};
Go.reject=function(a){return new Go(new Fo(function(b,c){c(a)}))};
Go.prototype.then=function(a,b){var c=this,d=null!=a?a:Eo,e=null!=b?b:Do;return new Go(new Fo(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ho(c,c,d,f,g)}),c.i.push(function(){Io(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ho(c,c,d,f,g):"REJECTED"===c.state.status&&Io(c,c,e,f,g)}))};
Go.prototype.catch=function(a){return this.then(void 0,a)};
function Ho(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Go?Jo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Io(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Go?Jo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Go?Jo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ko(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Lo(a){return new Promise(function(b,c){Ko(a,b,c)})}
function Mo(a){return new Go(new Fo(function(b,c){Ko(a,b,c)}))}
;function No(a,b){return new Go(new Fo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Oo=window,R=Oo.ytcsi&&Oo.ytcsi.now?Oo.ytcsi.now:Oo.performance&&Oo.performance.timing&&Oo.performance.now&&Oo.performance.timing.navigationStart?function(){return Oo.performance.timing.navigationStart+Oo.performance.now()}:function(){return(new Date).getTime()};function Po(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
l=Po.prototype;l.add=function(a,b,c){return Qo(this,[a],{mode:"readwrite",da:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Qo(this,[a],{mode:"readwrite",da:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Qo(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).count(b)})};
function Ro(a,b,c){a=a.h.createObjectStore(b,c);return new So(a)}
l.delete=function(a,b){return Qo(this,[a],{mode:"readwrite",da:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Qo(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).get(b)})};
function To(a,b,c){return Qo(a,[b],{mode:"readwrite",da:!0},function(d){d=d.objectStore(b);return Mo(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Qo(a,b,c,d){var e,f,g,h,k,m,n,p,v,t,z,D;return x(function(F){switch(F.h){case 1:var N={mode:"readonly",da:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.da?3:1;g=0;case 2:if(h){F.A(3);break}g++;k=Math.round(R());za(F,4);m=a.h.transaction(b,e.mode);N=new Uo(m);N=Vo(N,d);return w(F,N,6);case 6:return n=F.i,p=Math.round(R()),Wo(a,k,p,g,void 0,b.join(),e),F.return(n);case 4:v=Ba(F);t=Math.round(R());z=Bo(v,a.h.name,b.join(),
a.h.version);if((D=z instanceof xo&&!z.h)||g>=f)Wo(a,k,t,g,z,b.join(),e),h=z;F.A(2);break;case 3:return F.return(Promise.reject(h))}})}
function Wo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof xo&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&oo("QUOTA_EXCEEDED",{dbName:qo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof xo&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),oo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Xo(a,!1,d,f,b,g.tag),no(e)):Xo(a,!0,d,f,b,g.tag)}
function Xo(a,b,c,d,e,f){oo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function So(a){this.h=a}
l=So.prototype;l.add=function(a,b){return Mo(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Mo(this.h.clear()).then(function(){})};
function Yo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return Mo(this.h.count(a))};
function Zo(a,b){return $o(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Zo(this,a):Mo(this.h.delete(a))};
l.get=function(a){return Mo(this.h.get(a))};
l.index=function(a){try{return new ap(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new zo(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function $o(a,b,c){a=a.h.openCursor(b.query,b.direction);return bp(a).then(function(d){return No(d,c)})}
function Uo(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=xo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Vo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return r(d).next().value})}
Uo.prototype.abort=function(){this.h.abort();this.i=!0;throw new xo("EXPLICIT_ABORT");};
Uo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new So(a),this.j.set(a,b));return b};
function ap(a){this.h=a}
l=ap.prototype;l.count=function(a){return Mo(this.h.count(a))};
l.delete=function(a){return cp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Mo(this.h.get(a))};
l.getKey=function(a){return Mo(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function cp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return bp(a).then(function(d){return No(d,c)})}
function dp(a,b){this.request=a;this.cursor=b}
function bp(a){return Mo(a).then(function(b){return b?new dp(a,b):null})}
l=dp.prototype;l.advance=function(a){this.cursor.advance(a);return bp(this.request)};
l.continue=function(a){this.cursor.continue(a);return bp(this.request)};
l.delete=function(){return Mo(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Mo(this.cursor.update(a))};function ep(a,b,c){return new Promise(function(d,e){function f(){v||(v=new Po(g.result,{closed:p}));return v}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,m=c.df,n=c.upgrade,p=c.closed,v;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&oo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:qo(a)});var z=f(),D=new Uo(g.transaction);
n&&n(z,function(F){return t.oldVersion<F&&t.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){oo("IDB_UNEXPECTEDLY_CLOSED",{dbName:qo(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function fp(a,b,c){c=void 0===c?{}:c;return ep(a,b,c)}
function gp(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),w(g,Lo(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Bo(f,a,"",-1);})}
;function hp(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
hp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return fp(a,b,c)};
hp.prototype.delete=function(a){a=void 0===a?{}:a;return gp(this.name,a)};
function ip(a,b){return new xo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function jp(a,b){if(!b)throw Co("openWithToken",qo(a.name));return kp(a)}
function kp(a){function b(){var f,g,h,k,m,n,p,v,t,z;return x(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",za(D,2),w(D,a.i(a.name,a.options.version,d),4);case 4:h=D.i;for(var F=a.options,N=[],O=r(Object.keys(F.yb)),T=O.next();!T.done;T=O.next()){T=T.value;var aa=F.yb[T],W=void 0===aa.Ne?Number.MAX_VALUE:aa.Ne;!(h.h.version>=aa.Eb)||h.h.version>=W||h.h.objectStoreNames.contains(T)||N.push(T)}k=N;if(0===k.length){D.A(5);break}m=Object.keys(a.options.yb);n=h.objectStoreNames();
if(a.m<wm("ytidb_reopen_db_retries",0))return a.m++,h.close(),no(new xo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),D.return(b());if(!(a.l<wm("ytidb_remake_db_retries",1))){D.A(6);break}a.l++;return w(D,a.delete(),7);case 7:return no(new xo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),D.return(b());case 6:throw new yo(n,m);case 5:return D.return(h);case 2:p=Ba(D);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){D.A(8);break}return w(D,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:v=D.i;t=v.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw v.close(),a.j=!1,ip(a,t);return D.return(v);case 8:throw c(),p instanceof Error&&!P("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bo(p,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw ip(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,df:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var lp=new hp("YtIdbMeta",{yb:{databases:{Eb:1}},upgrade:function(a,b){b(1)&&Ro(a,"databases",{keyPath:"actualName"})}});
function mp(a,b){var c;return x(function(d){if(1==d.h)return w(d,jp(lp,b),2);c=d.i;return d.return(Qo(c,["databases"],{da:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Mo(f.h.put(a,void 0)).then(function(){})})}))})}
function np(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,jp(lp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function op(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,jp(lp,b),2)):3!=e.h?(d=e.i,w(e,Qo(d,["databases"],{da:!0,mode:"readonly"},function(f){c.length=0;return $o(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function pp(a){return op(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function qp(a,b,c){return op(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function rp(a){var b,c;return x(function(d){if(1==d.h)return b=bo("YtIdbMeta hasAnyMeta other"),w(d,op(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var sp,tp=new function(){}(new function(){});
function up(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=fo();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ln)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ic)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,mp(d,tp),4);case 4:return w(e,np("yt-idb-test-do-not-use",tp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function vp(){if(void 0!==sp)return sp;io=!0;return sp=up().then(function(a){io=!1;var b;if(null!=(b=eo())&&b.h){var c;b={hasSucceededOnce:(null==(c=fo())?void 0:c.hasSucceededOnce)||a};var d;null==(d=eo())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wp(){return B("ytglobal.idbToken_")||void 0}
function xp(){var a=wp();return a?Promise.resolve(a):vp().then(function(b){(b=b?tp:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var yp=0;function zp(a,b){yp||(yp=qi.fa(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return w(h,xp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return w(h,qp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return w(h,gp(f.actualName),7);case 7:return w(h,np(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),no(g),d=!1;case 4:qi.Ca(yp),yp=0,d&&zp(a,b),h.h=0}})}))}
function Ap(){var a;return x(function(b){return 1==b.h?w(b,xp(),2):(a=b.i)?b.return(rp(a)):b.return(!1)})}
new Nh;function Bp(a){if(!ao())throw a=new xo("AUTH_INVALID",{dbName:a}),no(a),a;var b=bo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Cp(a,b,c,d){var e,f,g,h,k,m;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,xp(),2);case 2:g=n.i;if(!g)throw h=Co("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),no(h),h;po(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Bp(a);za(n,3);return w(n,mp(k,g),5);case 5:return w(n,fp(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=Ba(n),za(n,7),w(n,np(k.actualName,g),9);case 9:Aa(n,
8);break;case 7:Ba(n);case 8:throw m;}})}
function Dp(a,b,c){c=void 0===c?{}:c;return Cp(a,b,!1,c)}
function Ep(a,b,c){c=void 0===c?{}:c;return Cp(a,b,!0,c)}
function Fp(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,xp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();po(a);d=Bp(a);return w(e,gp(d.actualName,b),3)}return w(e,np(d.actualName,c),0)})}
function Gp(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,gp(d.actualName,b),2):w(e,np(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Hp(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,xp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();po("LogsDatabaseV2");return w(d,pp(b),3)}c=d.i;return w(d,Gp(c,a,b),0)})}
function Ip(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,xp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();po(a);return w(d,gp(a,b),3)}return w(d,np(a,c),0)})}
;function Jp(a,b){hp.call(this,a,b);this.options=b;po(a)}
u(Jp,hp);function Kp(a,b){var c;return function(){c||(c=new Jp(a,b));return c}}
Jp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?Ep:Dp)(a,b,Object.assign({},c))};
Jp.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?Ip:Fp)(this.name,a)};
function Lp(a,b){return Kp(a,b)}
;var Mp={},Np=Lp("ytGcfConfig",{yb:(Mp.coldConfigStore={Eb:1},Mp.hotConfigStore={Eb:1},Mp),qc:!1,upgrade:function(a,b){b(1)&&(Yo(Ro(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Yo(Ro(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Op(a){return jp(Np(),a)}
function Pp(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:R()},w(g,Op(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,To(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Qp(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:R()},w(h,Op(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,To(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Rp(a){var b,c;return x(function(d){return 1==d.h?w(d,Op(a),2):3!=d.h?(b=d.i,c=void 0,w(d,Qo(b,["coldConfigStore"],{mode:"readwrite",da:!0},function(e){return cp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Sp(a){var b,c;return x(function(d){return 1==d.h?w(d,Op(a),2):3!=d.h?(b=d.i,c=void 0,w(d,Qo(b,["hotConfigStore"],{mode:"readwrite",da:!0},function(e){return cp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Tp(){this.h=0}
function Up(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!P("update_log_event_config"))return g.A(0);c&&(a.i=c,A("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=wp())?c?g.A(4):w(g,Sp(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,Pp(c,b,d),0)})}
function Vp(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!P("update_log_event_config"))return h.A(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=wp())?c?h.A(4):w(h,Rp(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return w(h,Qp(c,b,g,d),0)})}
;function Wp(){return"INNERTUBE_API_KEY"in sm&&"INNERTUBE_API_VERSION"in sm}
function Xp(){return{innertubeApiKey:M("INNERTUBE_API_KEY"),innertubeApiVersion:M("INNERTUBE_API_VERSION"),Dc:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sd:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),we:M("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION"),ud:M("INNERTUBE_CONTEXT_HL"),td:M("INNERTUBE_CONTEXT_GL"),xe:M("INNERTUBE_HOST_OVERRIDE")||"",ze:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ye:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Yp(a){var b={client:{hl:a.ud,gl:a.td,clientName:a.sd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Dc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=xm();""!==c&&(b.client.experimentsToken=c);c=ym();0<c.length&&(b.request={internalExperimentFlags:c});Zp(a,void 0,b);P("enable_third_party_info")&&$p(void 0,b);aq(void 0,b);bq(a,void 0,b);cq(void 0,b);P("start_sending_config_hash")&&
dq(void 0,b);M("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=r(Object.entries(Nm(M("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=r(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,
e);return b}
function eq(a){var b=new Nk,c=new Ck;E(c,1,a.ud);E(c,2,a.td);E(c,16,a.we);E(c,17,a.innertubeContextClientVersion);if(a.Dc){var d=a.Dc,e=new yk;d.coldConfigData&&E(e,1,d.coldConfigData);d.appInstallData&&E(e,6,d.appInstallData);d.coldHashData&&E(e,3,d.coldHashData);d.hotHashData&&E(e,5,d.hotHashData);G(c,yk,62,e)}(d=y.devicePixelRatio)&&1!=d&&E(c,65,Id(d));d=xm();""!==d&&E(c,54,d);d=ym();if(0<d.length){e=new Gk;for(var f=0;f<d.length;f++){var g=new Ek;E(g,1,d[f].key);Ud(g,2,Fk,d[f].value);be(e,15,
Ek,g)}G(b,Gk,5,e)}Zp(a,c);P("enable_third_party_info")&&$p(b);aq(c);bq(a,c);cq(c);P("start_sending_config_hash")&&dq(c);M("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Lk,E(a,3,M("DELEGATED_SESSION_ID")));a=r(Object.entries(Nm(M("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=r(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?E(c,12,e):"cmodel"===d?E(c,13,e):"cbr"===d?E(c,87,e):"cbrver"===d?E(c,88,e):"cos"===d?E(c,18,e):"cosver"===d?E(c,19,e):"cplatform"===d&&E(c,42,e);b.l(c);
return b}
function Zp(a,b,c){a=a.sd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Wd(b,zk,96)||new zk;var d=En();d=Object.keys(Uk).indexOf(d);d=-1===d?null:d;null!==d&&E(c,3,d);G(b,zk,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=En())}
function $p(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Wd(a,Ik,7)||new Ik,E(b,4,c),G(a,Ik,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function aq(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?E(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function bq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Wd(b,yk,62))?d:new yk;E(c,6,a.appInstallData);G(b,yk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function cq(a,b){var c=Tn();c&&(a?E(a,61,Pn[c]):b&&(b.client.connectionType=c));P("web_log_effective_connection_type")&&(c=Un())&&(a?E(a,94,Qn[c]):b&&(b.client.effectiveConnectionType=c))}
function fq(a,b,c){c=void 0===c?{}:c;var d={};M("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":M("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Et||M("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().Dt:(a=Bn(An()),P("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function dq(a,b){Tp.h||(Tp.h=new Tp);var c=Tp.h;var d=R()-c.h;if(0!==c.h&&d<wm("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=R());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Wd(a,yk,62))?g:new yk;E(b,1,c);E(b,3,d);E(b,5,e);G(a,yk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function gq(a,b){this.version=a;this.args=b}
;function hq(a,b){this.topic=a;this.h=b}
hq.prototype.toString=function(){return this.topic};var iq=B("ytPubsub2Pubsub2Instance")||new Ni;Ni.prototype.subscribe=Ni.prototype.subscribe;Ni.prototype.unsubscribeByKey=Ni.prototype.Cb;Ni.prototype.publish=Ni.prototype.cb;Ni.prototype.clear=Ni.prototype.clear;A("ytPubsub2Pubsub2Instance",iq);var jq=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",jq);var kq=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",kq);var lq=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",lq);
A("ytPubsub2Pubsub2SkipSubKey",null);function mq(a,b){var c=nq();c&&c.publish.call(c,a.toString(),a,b)}
function oq(a){var b=pq,c=nq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(jq[d])try{if(f&&b instanceof hq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var m=new h;h.Xa=m.version}var n=h.Xa}catch(F){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var v=k.args,t=v.length;if(0<t){var z=Array(t);for(k=0;k<t;k++)z[k]=v[k];var D=z}else D=[];f=p.call(n,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Fm(F)}},lq[b.toString()]?B("yt.scheduler.instance")?qi.fa(g):Wm(g,0):g())});
jq[d]=!0;kq[b.toString()]||(kq[b.toString()]=[]);kq[b.toString()].push(d);return d}
function qq(){var a=rq,b=oq(function(c){a.apply(void 0,arguments);sq(b)});
return b}
function sq(a){var b=nq();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete jq[c]}))}
function nq(){return B("ytPubsub2Pubsub2Instance")}
;function tq(a,b,c,d){var e={startTime:R()};try{var f=sk(li(b));e.endTime=R();!P("gel_compression_csi_killswitch")&&P("log_gel_compression_latency")&&.01>=Math.random()&&mq("gel_compression_latency_payload",e);if(!P("only_compress_gel_if_smaller")||(window.Blob?f.length<(new Blob(b.split(""))).size:1))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=f,c.postParams=void 0;d(a,c)}catch(g){Gm(g),d(a,c)}}
function uq(a){if(!a.body)return a;try{var b="string"===typeof a.body?a.body:JSON.stringify(a.body),c=sk(li(b));if(P("only_compress_gel_if_smaller")&&!(window.Blob?c.length<(new Blob(b.split(""))).size:1))return a;a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=c;return a}catch(d){return Gm(d),a}}
;function vq(a){a=Object.assign({},a);delete a.Authorization;var b=Gg();if(b){var c=new wi;c.update(M("INNERTUBE_API_KEY"));c.update(b);a.hash=cd(c.digest(),3)}return a}
;var wq;function xq(){wq||(wq=new co("yt.innertube"));return wq}
function yq(a,b,c,d){if(d)return null;d=xq().get("nextId",!0)||1;var e=xq().get("requests",!0)||{};e[d]={method:a,request:b,authState:vq(c),requestTime:Math.round(R())};xq().set("nextId",d+1,86400,!0);xq().set("requests",e,86400,!0);return d}
function zq(a){var b=xq().get("requests",!0)||{};delete b[a];xq().set("requests",b,86400,!0)}
function Aq(a){var b=xq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=vq(fq(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Bq(a,d.method,e,{}));delete b[c]}}xq().set("requests",b,86400,!0)}}
;function Cq(a){this.Zb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sb=function(){};
this.now=Date.now;this.Hb=!1;var b;this.Md=null!=(b=a.Md)?b:100;var c;this.Hd=null!=(c=a.Hd)?c:1;var d;this.Fd=null!=(d=a.Fd)?d:2592E6;var e;this.Dd=null!=(e=a.Dd)?e:12E4;var f;this.Gd=null!=(f=a.Gd)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.fc=!!a.fc;var h;this.dc=null!=(h=a.dc)?h:.1;var k;this.mc=null!=(k=a.mc)?k:10;a.handleError&&(this.handleError=a.handleError);a.sb&&(this.sb=a.sb);a.Hb&&(this.Hb=a.Hb);a.Zb&&(this.Zb=a.Zb);this.T=a.T;this.xa=a.xa;this.X=a.X;this.W=a.W;this.Pa=a.Pa;this.Lc=
a.Lc;this.Kc=a.Kc;Dq(this)&&(!this.T||this.T("networkless_logging"))&&Eq(this)}
function Eq(a){Dq(a)&&!a.Hb&&(a.h=!0,a.fc&&Math.random()<=a.dc&&a.X.de(a.P),Fq(a),a.W.ma()&&a.Qb(),a.W.Ma(a.Lc,a.Qb.bind(a)),a.W.Ma(a.Kc,a.dd.bind(a)))}
l=Cq.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Dq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.X.set(d,this.P).then(function(e){d.id=e;c.W.ma()&&Gq(c,d)}).catch(function(e){Gq(c,d);
Hq(c,e)})}else this.Pa(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Dq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.T&&this.T("nwl_skip_retry")&&(e.skipRetry=c);if(this.W.ma()||this.T&&this.T("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.X.set(e,d.P).catch(function(m){Hq(d,m)}),2);
f(g,h);k.h=0})}}this.Pa(a,b,e.skipRetry)}else this.X.set(e,this.P).catch(function(g){d.Pa(a,b,e.skipRetry);
Hq(d,g)})}else this.Pa(a,b,this.T&&this.T("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Dq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.X.rb(d.id,c.P):e=!0;c.W.ib&&c.T&&c.T("vss_network_hint")&&c.W.ib(!0);f(g,h)};
this.Pa(d.url,d.options);this.X.set(d,this.P).then(function(g){d.id=g;e&&c.X.rb(d.id,c.P)}).catch(function(g){Hq(c,g)})}else this.Pa(a,b)};
l.Qb=function(){var a=this;if(!Dq(this))throw Co("throttleSend");this.i||(this.i=this.xa.fa(function(){var b;return x(function(c){if(1==c.h)return w(c,a.X.pd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?w(c,Gq(a,b),3):(a.dd(),c.return());a.i&&(a.i=0,a.Qb());c.h=0})},this.Md))};
l.dd=function(){this.xa.Ca(this.i);this.i=0};
function Gq(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!Dq(a))throw c=Co("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.X.Be(b.id,a.P),3);case 3:(d=e.i)||a.sb(Error("The request cannot be found in the database."));case 2:if(Iq(a,b,a.Fd)){e.A(4);break}a.sb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.X.rb(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=Jq(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.X.rb(b.id,a.P),8);case 8:a.Pa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Jq(a,b){if(!Dq(a))throw Co("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,m;return x(function(n){switch(n.h){case 1:g=Kq(f);h=Lq(f);if(!(a.T&&a.T("nwl_consider_error_code")&&g||a.T&&!a.T("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.A(2);break}if(!a.W.pc){n.A(3);break}return w(n,a.W.pc(),3);case 3:if(a.W.ma()){n.A(2);break}c(e,f);if(!a.T||!a.T("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.A(6);break}return w(n,a.X.Pc(b.id,a.P,!1),6);case 6:return n.return();case 2:if(a.T&&a.T("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){n.A(8);break}return b.sendCount<a.Hd?w(n,a.X.Pc(b.id,a.P,!0,h?!1:void 0),12):w(n,a.X.rb(b.id,a.P),8);case 12:a.xa.fa(function(){a.W.ma()&&a.Qb()},a.Gd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):w(h,a.X.rb(b.id,a.P),2);a.W.ib&&a.T&&a.T("vss_network_hint")&&a.W.ib(!0);d(e,f);h.h=0})};
return b}
function Iq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Fq(a){if(!Dq(a))throw Co("retryQueuedRequests");a.X.pd("QUEUED",a.P).then(function(b){b&&!Iq(a,b,a.Dd)?a.xa.fa(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.X.Pc(b.id,a.P),2);Fq(a);c.h=0})}):a.W.ma()&&a.Qb()})}
function Hq(a,b){a.Sd&&!a.W.ma()?a.Sd(b):a.handleError(b)}
function Dq(a){return!!a.P||a.Zb}
function Kq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Lq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Mq;
function Nq(){if(Mq)return Mq();var a={};Mq=Lp("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Eb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&Ro(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Yo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Mq()}
;function Oq(a){return jp(Nq(),a)}
function Pq(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Oq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:M("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,To(d,"LogsRequestsStore",e),3);f=g.i;c.ff=R();Qq(c);return g.return(f)})}
function Rq(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,Oq(b),2);if(3!=m.h)return d=m.i,e=M("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),k=void 0,w(m,Qo(d,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(n){return cp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.ff=R();Qq(c);return m.return(k)})}
function Sq(a,b){var c;return x(function(d){if(1==d.h)return w(d,Oq(b),2);c=d.i;return d.return(Qo(c,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Mo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function fr(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,Oq(b),2);e=f.i;return f.return(Qo(e,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Mo(h.h.put(k,void 0)).then(function(){return k})):Go.resolve(void 0)})}))})}
function Er(a,b){var c;return x(function(d){if(1==d.h)return w(d,Oq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Fr(a){var b,c;return x(function(d){if(1==d.h)return w(d,Oq(a),2);b=d.i;c=R()-2592E6;return w(d,Qo(b,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){return $o(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gr(){x(function(a){return w(a,Hp(),0)})}
function Qq(a){P("nwl_csi_killswitch")||.01>=Math.random()&&mq("nwl_transaction_latency_payload",a)}
;var Hr={},Ir=Lp("ServiceWorkerLogsDatabase",{yb:(Hr.SWHealthLog={Eb:1},Hr),qc:!0,upgrade:function(a,b){b(1)&&Yo(Ro(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Jr(a){return jp(Ir(),a)}
function Kr(a){var b,c;x(function(d){if(1==d.h)return w(d,Jr(a),2);b=d.i;c=R()-2592E6;return w(d,Qo(b,["SWHealthLog"],{mode:"readwrite",da:!0},function(e){return $o(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Lr(a){var b;return x(function(c){if(1==c.h)return w(c,Jr(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Mr={},Nr=0;function Or(a){var b=new Image,c=""+Nr++;Mr[c]=b;b.onload=b.onerror=function(){delete Mr[c]};
b.src=a}
;function Pr(){this.h=new Map;this.i=!1}
function Qr(){if(!Pr.h){var a=B("yt.networkRequestMonitor.instance")||new Pr;A("yt.networkRequestMonitor.instance",a);Pr.h=a}return Pr.h}
Pr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Pr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Pr.prototype.removeParams=function(a){return a.split("?")[0]};
Pr.prototype.removeParams=Pr.prototype.removeParams;Pr.prototype.isEndpointCFR=Pr.prototype.isEndpointCFR;Pr.prototype.requestComplete=Pr.prototype.requestComplete;Pr.getInstance=Qr;var Rr;function Sr(){Rr||(Rr=new co("yt.offline"));return Rr}
function Tr(a){if(P("offline_error_handling")){var b=Sr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Sr().set("errors",b,2592E3,!0)}}
;function Ur(){cf.call(this);var a=this;this.j=!1;this.i=pi();this.i.Ma("networkstatus-online",function(){if(a.j&&P("offline_error_handling")){var b=Sr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Fm(d)}Sr().set("errors",{},2592E3,!0)}}})}
u(Ur,cf);function Vr(){if(!Ur.h){var a=B("yt.networkStatusManager.instance")||new Ur;A("yt.networkStatusManager.instance",a);Ur.h=a}return Ur.h}
l=Ur.prototype;l.ma=function(){return this.i.ma()};
l.ib=function(a){this.i.i=a};
l.re=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.je=function(){this.j=!0};
l.Ma=function(a,b){return this.i.Ma(a,b)};
l.pc=function(a){a=ni(this.i,a);a.then(function(b){P("use_cfr_monitor")&&Qr().requestComplete("generate_204",b)});
return a};
Ur.prototype.sendNetworkCheckRequest=Ur.prototype.pc;Ur.prototype.listen=Ur.prototype.Ma;Ur.prototype.enableErrorFlushing=Ur.prototype.je;Ur.prototype.getWindowStatus=Ur.prototype.re;Ur.prototype.networkStatusHint=Ur.prototype.ib;Ur.prototype.isNetworkAvailable=Ur.prototype.ma;Ur.getInstance=Vr;function Wr(a){a=void 0===a?{}:a;cf.call(this);var b=this;this.i=this.s=0;this.j=Vr();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.oc?(this.oc=a.oc,c("networkstatus-online",function(){Xr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Xr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){df(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){df(b,"publicytnetworkstatus-offline")})))}
u(Wr,cf);Wr.prototype.ma=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Wr.prototype.ib=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Wr.prototype.pc=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return P("skip_network_check_if_cfr")&&Qr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ma())})):c?d.return(c(a)):d.return(!0)})};
function Xr(a,b){a.oc?a.i?(qi.Ca(a.s),a.s=qi.fa(function(){a.m!==b&&(df(a,b),a.m=b,a.i=R())},a.oc-(R()-a.i))):(df(a,b),a.m=b,a.i=R()):df(a,b)}
;var Yr;function Zr(){var a=Cq.call;Yr||(Yr=new Wr({Qt:!0,Kt:!0}));a.call(Cq,this,{X:{de:Fr,rb:Er,pd:Rq,Be:Sq,Pc:fr,set:Pq},W:Yr,handleError:Fm,sb:Gm,Pa:$r,now:R,Sd:Tr,xa:$n(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",fc:!0,dc:.1,mc:wm("potential_esf_error_limit",10),T:P,Hb:!(ao()&&as())});this.j=new Nh;P("networkless_immediately_drop_all_requests")&&Gr();Ip("LogsDatabaseV2")}
u(Zr,Cq);function bs(){var a=B("yt.networklessRequestController.instance");a||(a=new Zr,A("yt.networklessRequestController.instance",a),P("networkless_logging")&&xp().then(function(b){a.P=b;Eq(a);a.j.resolve();a.fc&&Math.random()<=a.dc&&a.P&&Kr(a.P);P("networkless_immediately_drop_sw_health_store")&&cs(a)}));
return a}
Zr.prototype.writeThenSend=function(a,b){b||(b={});ao()||(this.h=!1);Cq.prototype.writeThenSend.call(this,a,b)};
Zr.prototype.sendThenWrite=function(a,b,c){b||(b={});ao()||(this.h=!1);Cq.prototype.sendThenWrite.call(this,a,b,c)};
Zr.prototype.sendAndWrite=function(a,b){b||(b={});ao()||(this.h=!1);Cq.prototype.sendAndWrite.call(this,a,b)};
Zr.prototype.awaitInitialization=function(){return this.j.promise};
function cs(a){var b;x(function(c){if(!a.P)throw b=Co("clearSWHealthLogsDb"),b;return c.return(Lr(a.P).catch(function(d){a.handleError(d)}))})}
function $r(a,b,c){P("use_cfr_monitor")&&ds(a,b);if(P("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(R())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)en(a,void 0,"POST",e);else if(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))en(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=lc(mc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(zc),n=yc(a,0,"ri",m);if(0>n)var p=null;else{var v=a.indexOf("&",n);if(0>v||v>m)v=m;p=decodeURIComponent(a.slice(n+3,-1!==v?v:0).replace(/\+/g," "))}k="1"!==p}var t=!k;break b}}catch(D){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(D){}z=!1}c=z?!0:!1}else c=!1;c||Or(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
tq(a,b.postBody,b,bn)):tq(a,JSON.stringify(b.postParams),b,kn):bn(a,b)}
function ds(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Qr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Qr().requestComplete(a,!0);d(e,f)}}
function as(){return"www.youtube-nocookie.com"!==pc(document.location.toString())}
;var es=!1,fs=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:es};A("ytNetworklessLoggingInitializationOptions",fs);function gs(){var a;x(function(b){if(1==b.h)return w(b,xp(),2);a=b.i;if(!a||!ao()&&!P("nwl_init_require_datasync_id_killswitch")||!as())return b.A(0);es=!0;fs.isNwlInitialized=es;return w(b,bs().awaitInitialization(),0)})}
;function hs(a){var b=this;this.config_=null;a?this.config_=a:Wp()&&(this.config_=Xp());Wn(function(){Aq(b)},5E3)}
hs.prototype.isReady=function(){!this.config_&&Wp()&&(this.config_=Xp());return!!this.config_};
function Bq(a,b,c,d){function e(z){z=void 0===z?!1:z;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=yq(b,c,m,k)),D)){var F=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(T,aa){zq(D);F(T,aa)};
c.onFetchSuccess=function(T,aa){zq(D);N(T,aa)}}try{if(z&&d.retry&&!d.yd.bypassNetworkless)g.method="POST",d.yd.writeThenSend?bs().writeThenSend(t,g):bs().sendAndWrite(t,g);
else if(d.compress)if(g.postBody){var O=g.postBody;"string"!==typeof O&&(O=JSON.stringify(g.postBody));tq(t,O,g,bn)}else tq(t,JSON.stringify(g.postParams),g,kn);else P("web_all_payloads_via_jspb")?bn(t,g):kn(t,g)}catch(T){if("InvalidAccessError"==T.name)D&&(zq(D),D=0),Gm(Error("An extension is blocking network request."));else throw T;}D&&Wn(function(){Aq(a)},5E3)}
!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Gm(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Fm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.xe)&&(h=f);var k=a.config_.ze||!1,m=fq(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},v=a.config_.ye&&f;v=v&&f.startsWith("Bearer");v||(p.key=a.config_.innertubeApiKey);var t=Pm(""+h+n,p||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
fs.isNwlInitialized:es)?vp().then(function(z){e(z)}):e(!1)}
;var is=0,js=Kc?"webkit":Jc?"moz":Hc?"ms":Gc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++is});var ks={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ls(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ks||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ms(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ls.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ls.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ls.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",pb);var ns=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",ns);
function os(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ps=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function qs(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=os(a,b,c,d);if(e)return e;e=++ns.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ls(h);if(!sf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ls(h);
h.currentTarget=a;return c.call(a,h)};
g=Em(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ps()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function rs(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ps()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;function ss(a){this.N=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.V=qs(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);"function"===typeof a&&(a=Em(a));this.aa=window.setInterval(a,25)}
Za(ss,J);ss.prototype.Y=function(a){void 0===a.h&&ms(a);var b=a.h;void 0===a.i&&ms(a);this.i=new of(b,a.i)};
ss.prototype.R=function(){if(this.i){var a=R();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.N();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
ss.prototype.L=function(){window.clearInterval(this.aa);rs(this.V)};var ts={};
function us(a){var b=void 0===a?{}:a;a=void 0===b.Ke?!1:b.Ke;b=void 0===b.ke?!0:b.ke;if(null==B("_lact",window)){var c=parseInt(M("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&vs();qs(document,"keydown",vs);qs(document,"keyup",vs);qs(document,"mousedown",vs);qs(document,"mouseup",vs);a?qs(window,"touchmove",function(){ws("touchmove",200)},{passive:!0}):(qs(window,"resize",function(){ws("resize",200)}),b&&qs(window,"scroll",function(){ws("scroll",200)}));
new ss(function(){ws("mouse",100)});
qs(document,"touchstart",vs,{passive:!0});qs(document,"touchend",vs,{passive:!0})}}
function ws(a,b){ts[a]||(ts[a]=!0,qi.fa(function(){vs();ts[a]=!1},b))}
function vs(){null==B("_lact",window)&&us();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function xs(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ys=y.ytPubsubPubsubInstance||new Ni,zs=y.ytPubsubPubsubSubscribedKeys||{},As=y.ytPubsubPubsubTopicToKeys||{},Bs=y.ytPubsubPubsubIsSynchronous||{};function Cs(a,b){var c=Ds();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){zs[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Bs[a]?f():Wm(f,0)}catch(g){Fm(g)}},void 0);
zs[d]=!0;As[a]||(As[a]=[]);As[a].push(d);return d}return 0}
function Es(a){var b=Ds();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete zs[c]}))}
function Fs(a,b){var c=Ds();c&&c.publish.apply(c,arguments)}
function Gs(a){var b=Ds();if(b)if(b.clear(a),a)Hs(a);else for(var c in As)Hs(c)}
function Ds(){return y.ytPubsubPubsubInstance}
function Hs(a){As[a]&&(a=As[a],gb(a,function(b){zs[b]&&delete zs[b]}),a.length=0)}
Ni.prototype.subscribe=Ni.prototype.subscribe;Ni.prototype.unsubscribeByKey=Ni.prototype.Cb;Ni.prototype.publish=Ni.prototype.cb;Ni.prototype.clear=Ni.prototype.clear;A("ytPubsubPubsubInstance",ys);A("ytPubsubPubsubTopicToKeys",As);A("ytPubsubPubsubIsSynchronous",Bs);A("ytPubsubPubsubSubscribedKeys",zs);var Is=Symbol("injectionDeps");function Js(a){this.name=a}
Js.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ks(){this.key=Ls}
function Ms(){this.h=new Map;this.i=new Map}
Ms.prototype.resolve=function(a){return a instanceof Ks?Ns(this,a.key,[],!0):Ns(this,a,[])};
function Ns(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.Pd)var e=d.Pd;else if(d.jf)e=d[Is]?Os(a,d[Is],c):[],e=d.jf.apply(d,ja(e));else if(d.Od){e=d.Od;var f=e[Is]?Os(a,e[Is],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.au||a.i.set(b,e);return e}
function Os(a,b,c){return b?b.map(function(d){return d instanceof Ks?Ns(a,d.key,c,!0):Ns(a,d,c)}):[]}
;var Ps;function Qs(){Ps||(Ps=new Ms);return Ps}
;function Rs(){this.store={};this.h={}}
Rs.prototype.storePayload=function(a,b){a=Ss(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Rs.prototype.extractMatchingEntries=function(a){a=Ts(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Rs.prototype.getSequenceCount=function(a){a=Ts(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Ts(a,b){var c=Ss(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Ss(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Us(b.auth,g[0])){var h=b.isJspb;Us(void 0===h?"undefined":h?"true":"false",g[1])&&Us(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Us(a,b){return void 0===a||"undefined"===a?!0:a===b}
Rs.prototype.getSequenceCount=Rs.prototype.getSequenceCount;Rs.prototype.extractMatchingEntries=Rs.prototype.extractMatchingEntries;Rs.prototype.storePayload=Rs.prototype.storePayload;function Ss(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function Vs(a,b){if(a)return a[b.name]}
;var Ws=wm("initial_gel_batch_timeout",2E3),Xs=wm("gel_queue_timeout_max_ms",6E4),Ys=Math.pow(2,16)-1,Zs=void 0;function $s(){this.j=this.h=this.i=0}
var at=new $s,bt=new $s,ct,dt=!0,et=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",et);var ft=y.ytLoggingTransportGELProtoQueue_||new Map;A("ytLoggingTransportGELProtoQueue_",ft);var gt=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",gt);var ht=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",ht);var jt={};function kt(){var a=B("yt.logging.ims");a||(a=new Rs,A("yt.logging.ims",a));return a}
function lt(a,b){P("web_all_payloads_via_jspb")&&Gm(new Q("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){mt(a);var c=nt(a);if(P("use_new_in_memory_storage")){jt[c]=!0;var d={cttAuthInfo:c,isJspb:!1};kt().storePayload(d,a.payload);ot(b,[],c,!1,d)}else d=et.get(c)||[],et.set(c,d),d.push(a.payload),ot(b,d,c)}}
function pt(a,b){if("log_event"===a.endpoint){mt(void 0,a);var c=nt(a,!0);if(P("use_new_in_memory_storage")){jt[c]=!0;var d={cttAuthInfo:c,isJspb:!0};kt().storePayload(d,a.payload.toJSON());ot(b,[],c,!0,d)}else d=ft.get(c)||[],ft.set(c,d),a=a.payload.toJSON(),d.push(a),ot(b,d,c,!0)}}
function ot(a,b,c,d,e){d=void 0===d?!1:d;a&&(Zs=new a);a=wm("tvhtml5_logging_max_batch_ads_fork")||wm("tvhtml5_logging_max_batch")||wm("web_logging_max_batch")||100;var f=R(),g=d?bt.j:at.j;b=b.length;e&&(b=kt().getSequenceCount(e));b>=a?ct||(ct=qt(function(){rt({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d);ct=void 0},0)):10<=f-g&&(st(d),d?bt.j=f:at.j=f)}
function tt(a,b){P("web_all_payloads_via_jspb")&&Gm(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){mt(a);var c=nt(a),d=new Map;d.set(c,[a.payload]);b&&(Zs=new b);return new Ef(function(e,f){Zs&&Zs.isReady()?ut(d,Zs,e,f,{bypassNetworkless:!0},!0):e()})}}
function vt(a,b){if("log_event"===a.endpoint){mt(void 0,a);var c=nt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Zs=new b);return new Ef(function(e){Zs&&Zs.isReady()?wt(d,Zs,e,{bypassNetworkless:!0},!0):e()})}}
function nt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new fm;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Ud(d,2,gm,c.playlistId);ht[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),gt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function rt(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&P("web_all_payloads_via_jspb")&&Gm(new Q("transport.flushLogs called for JSON in JSPB only experiment"));new Ef(function(d,e){c?(xt(bt.i),xt(bt.h),bt.h=0):(xt(at.i),xt(at.h),at.h=0);if(Zs&&Zs.isReady())if(P("use_new_in_memory_storage")){var f=a,g=c,h=Zs;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=kt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),wt(k,h,d,f)):(k=kt().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),ut(m,h,d,e,f));else if(g){e=r(Object.keys(jt));for(g=e.next();!g.done;g=e.next())m=g.value,g=kt().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete jt[m];wt(k,h,d,f)}else{k=r(Object.keys(jt));for(g=k.next();!g.done;g=k.next()){g=g.value;var n=kt().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<n.length&&m.set(g,n);delete jt[g]}ut(m,h,d,e,f)}}else f=a,k=c,h=Zs,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=ft.get(b)||[],e.set(b,
k),wt(e,h,d,f),ft.delete(b)):(k=new Map,m=et.get(b)||[],k.set(b,m),ut(k,h,d,e,f),et.delete(b)):k?(wt(ft,h,d,f),ft.clear()):(ut(et,h,d,e,f),et.clear());else st(c),d()})}
function st(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!at.h||a&&!bt.h)){var b=qt(function(){rt({writeThenSend:!0},void 0,a)},Xs);
a?bt.h=b:at.h=b}xt(a?bt.i:at.i);b=M("LOGGING_BATCH_TIMEOUT",wm("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&dt&&(b=Ws);b=qt(function(){rt({writeThenSend:!0},void 0,a)},b);
a?bt.i=b:at.i=b}
function ut(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(R()),h=a.size,k={};a=r(a);for(var m=a.next();!m.done;k={Sb:k.Sb,ab:k.ab,Ab:k.Ab,Ub:k.Ub,Tb:k.Tb},m=a.next()){var n=r(m.value);m=n.next().value;n=n.next().value;k.ab=vb({context:Yp(b.config_||Xp())});if(!Qa(n)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}k.ab.events=n;(n=gt[m])&&zt(k.ab,m,n);delete gt[m];k.Ab="visitorOnlyApprovedKey"===m;At(k.ab,g,k.Ab);Bt(e);k.Ub=function(p){P("update_log_event_config")&&qi.fa(function(){return x(function(v){return w(v,
Ct(p),0)})});
h--;h||c()};
k.Sb=0;k.Tb=function(p){return function(){p.Sb++;if(e.bypassNetworkless&&1===p.Sb)try{Bq(b,"log_event",p.ab,Dt({writeThenSend:!0},p.Ab,p.Ub,p.Tb,f)),dt=!1}catch(v){Fm(v),d()}h--;h||c()}}(k);
try{Bq(b,"log_event",k.ab,Dt(e,k.Ab,k.Ub,k.Tb,f)),dt=!1}catch(p){Fm(p),d()}}}
function wt(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(R()),g=a.size,h=new Map([].concat(ja(a)));h=r(h);for(var k=h.next();!k.done;k=h.next()){var m=r(k.value).next().value,n=a.get(m);k=new hm;var p=eq(b.config_||Xp());G(k,Nk,1,p);n=n?Et(n):[];n=r(n);for(p=n.next();!p.done;p=n.next())be(k,3,bm,p.value);(n=ht[m])&&Ft(k,m,n);delete ht[m];m="visitorOnlyApprovedKey"===m;Gt(k,f,m);Bt(d);k=pe(k);m=Dt(d,m,function(v){P("update_log_event_config")&&qi.fa(function(){return x(function(t){return w(t,Ct(v),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;Bq(b,"log_event","",m);dt=!1}}
function Bt(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Dt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,yd:a,dangerousLogToVisitorSession:b,Gt:!!e,headers:{},postBodyFormat:"",postBody:"",compress:P("compress_gel")};Ht()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));return a}
function At(a,b,c){Ht()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=M("EVENT_ID"))&&(c=It(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Gt(a,b,c){Ht()||E(a,2,b);if(!c&&(b=M("EVENT_ID"))){c=It();var d=new em;E(d,1,b);E(d,2,c);G(a,em,5,d)}}
function It(){var a=M("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Ys/2));a++;a>Ys&&(a=1);tm("BATCH_CLIENT_COUNTER",a);return a}
function zt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ft(a,b,c){var d=1===Vd(c,gm)?1:-1;if(Md(c,d))d=1;else if(c.getPlaylistId())d=2;else return;G(a,fm,4,c);a=Wd(a,Nk,1)||new Nk;c=Wd(a,Lk,3)||new Lk;var e=new Kk;E(e,2,b);E(e,1,d);be(c,12,Kk,e);G(a,Lk,3,c)}
function Et(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new bm(a[c]))}catch(d){Fm(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function mt(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function Ht(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function qt(a,b){return P("transport_use_scheduler")?Wn(a,b):Wm(a,b)}
function xt(a){P("transport_use_scheduler")?qi.Ca(a):window.clearTimeout(a)}
function Ct(a){var b,c,d,e,f,g,h,k,m,n;return x(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Vs(d,wk),g=null==(f=d)?void 0:f.hotHashData,h=Vs(d,vk),m=null==(k=d)?void 0:k.coldHashData,n=Qs().resolve(Tp),g?e?w(p,Up(n,g,e),2):w(p,Up(n,g),2):p.A(2)):m?h?w(p,Vp(n,m,h),0):w(p,Vp(n,m),0):p.A(0)})}
;var Jt=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Jt);
function Kt(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&us();a=xs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:Lt(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Jt[d.sequenceGroup]);(d.sendIsolatedPayload?tt:lt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function Mt(a){rt(void 0,void 0,void 0===a?!1:a)}
function Lt(a){Jt[a]=a in Jt?Jt[a]+1:0;return Jt[a]}
;var Nt=[];function mo(a,b,c){c=void 0===c?{}:c;var d=hs;M("ytLoggingEventsDefaultDisabled",!1)&&hs===hs&&(d=null);P("web_all_payloads_via_jspb")?Nt.push({Mc:a,payload:b,options:c}):Kt(a,b,d,c)}
;var Ot=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Ot);
function Pt(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||R());E(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=xs();d=new am;E(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=Lt(e),g=new $l;E(g,2,f);E(g,1,e);G(d,$l,3,g);c.endOfSequence&&delete Ot[c.sequenceGroup]}G(a,am,33,d);(c.sendIsolatedPayload?vt:pt)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function Qt(a,b){b=void 0===b?{}:b;var c=!1;M("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);Pt(a,c?null:hs,b)}
;function Rt(a,b,c){var d=new bm;$d(d,Pl,72,cm,a);c?Pt(d,c,b):Qt(d,b)}
function St(a,b,c){var d=new bm;$d(d,Ol,73,cm,a);c?Pt(d,c,b):Qt(d,b)}
function Tt(a,b,c){var d=new bm;$d(d,Nl,78,cm,a);c?Pt(d,c,b):Qt(d,b)}
function Ut(a,b,c){var d=new bm;$d(d,Ql,208,cm,a);c?Pt(d,c,b):Qt(d,b)}
function Vt(a,b,c){var d=new bm;$d(d,Il,156,cm,a);c?Pt(d,c,b):Qt(d,b)}
function Wt(a,b,c){var d=new bm;$d(d,Kl,215,cm,a);c?Pt(d,c,b):Qt(d,b)}
;var Xt=new Set,Yt=0,Zt=0,$t=0,au=[],bu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function lo(a){cu(a)}
function du(a){cu(a,"WARNING")}
function cu(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||M("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(P("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Yt)){var m=au,n=Be(a),p=n.message||"Unknown Error",v=n.name||"UnknownError",t=n.stack||a.i||"Not available";if(t.startsWith(v+": "+p)){var z=t.split("\n");z.shift();t=z.join("\n")}var D=n.lineNumber||"Not available",F=n.fileName||"Not available",N=t,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var T=0;T<a.args.length&&!(O=wn(a.args[T],"params."+T,g,O),500<=O);T++);else if(a.hasOwnProperty("params")&&
a.params){var aa=a.params;if("object"===typeof a.params)for(var W in aa){if(aa[W]){var xb="params."+W,$a=yn(aa[W]);g[xb]=$a;O+=xb.length+$a.length;if(500<O)break}}else g.params=yn(aa)}if(m.length)for(var qa=0;qa<m.length&&!(O=wn(m[qa],"params.context."+qa,g,O),500<=O);qa++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var I={message:p,name:v,lineNumber:D,fileName:F,stack:N,params:g,sampleWeight:1},oa=Number(a.columnNumber);isNaN(oa)||(I.lineNumber=I.lineNumber+
":"+oa);if("IGNORED"===a.level)var ha=0;else a:{for(var ef=sn(),ff=r(ef.Va),Nd=ff.next();!Nd.done;Nd=ff.next()){var ta=Nd.value;if(I.message&&I.message.match(ta.Rt)){ha=ta.weight;break a}}for(var Tq=r(ef.Ra),Yk=Tq.next();!Yk.done;Yk=Tq.next()){var Uq=Yk.value;if(Uq.callback(I)){ha=Uq.weight;break a}}ha=1}I.sampleWeight=ha;for(var Vq=r(nn),Zk=Vq.next();!Zk.done;Zk=Vq.next()){var $k=Zk.value;if($k.lc[I.name])for(var Wq=r($k.lc[I.name]),al=Wq.next();!al.done;al=Wq.next()){var Xq=al.value,yh=I.message.match(Xq.regexp);
if(yh){I.params["params.error.original"]=yh[0];for(var bl=Xq.groups,Yq={},Od=0;Od<bl.length;Od++)Yq[bl[Od]]=yh[Od+1],I.params["params.error."+bl[Od]]=yh[Od+1];I.message=$k.Ic(Yq);break}}}I.params||(I.params={});var Zq=sn();I.params["params.errorServiceSignature"]="msg="+Zq.Va.length+"&cb="+Zq.Ra.length;I.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(I.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(I.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(I);if(0!==I.sampleWeight&&!Xt.has(I.message)){if("ERROR"===h){tn.cb("handleError",I);if(P("record_app_crashed_web")&&0===$t&&1===I.sampleWeight)if($t++,P("errors_via_jspb")){var cl=new zl;E(cl,1,1);if(!P("report_client_error_with_app_crash_ks")){var $q=new ul;E($q,1,I.message);var ar=new vl;G(ar,ul,3,$q);var br=new wl;G(br,vl,5,ar);var cr=new xl;G(cr,wl,9,br);G(cl,xl,4,cr)}var dr=new bm;$d(dr,zl,20,
cm,cl);Qt(dr)}else{var er={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(er.systemHealth={crashData:{clientError:{logMessage:{message:I.message}}}});mo("appCrashed",er)}Zt++}else"WARNING"===h&&tn.cb("handleWarning",I);if(P("kevlar_gel_error_routing"))a:{var gf=h;if(P("errors_via_jspb")){if(eu())var gr=void 0;else{var Pd=new rl;E(Pd,1,I.stack);I.fileName&&E(Pd,4,I.fileName);var Qb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Qb.length&&(1!==
Qb.length||isNaN(Number(Qb[0]))?2!==Qb.length||isNaN(Number(Qb[0]))||isNaN(Number(Qb[1]))||(E(Pd,2,Number(Qb[0])),E(Pd,3,Number(Qb[1]))):E(Pd,2,Number(Qb[0])));var Rc=new ul;E(Rc,1,I.message);E(Rc,3,I.name);E(Rc,6,I.sampleWeight);"ERROR"===gf?E(Rc,2,2):"WARNING"===gf?E(Rc,2,1):E(Rc,2,0);var dl=new sl;E(dl,1,!0);$d(dl,rl,3,tl,Pd);var nc=new Wk;E(nc,3,window.location.href);for(var hr=M("FEXP_EXPERIMENTS",[]),el=0;el<hr.length;el++){var Yx=hr[el];Gd(nc);Td(nc,5,2,!1,!1).push(Yx)}var fl=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!um()&&fl)for(var ir=r(Object.keys(fl)),Sc=ir.next();!Sc.done;Sc=ir.next()){var jr=Sc.value,gl=new Vk;E(gl,1,jr);E(gl,2,String(fl[jr]));be(nc,4,Vk,gl)}var hl=I.params;if(hl){var kr=r(Object.keys(hl));for(Sc=kr.next();!Sc.done;Sc=kr.next()){var lr=Sc.value,il=new Vk;E(il,1,"client."+lr);E(il,2,String(hl[lr]));be(nc,4,Vk,il)}}var mr=M("SERVER_NAME"),nr=M("SERVER_VERSION");if(mr&&nr){var jl=new Vk;E(jl,1,"server.name");E(jl,2,mr);be(nc,4,Vk,jl);var kl=new Vk;E(kl,1,"server.version");E(kl,2,nr);be(nc,
4,Vk,kl)}var zh=new vl;G(zh,Wk,1,nc);G(zh,sl,2,dl);G(zh,ul,3,Rc);gr=zh}var or=gr;if(!or)break a;var pr=new bm;$d(pr,vl,163,cm,or);Qt(pr)}else{if(eu())var qr=void 0;else{var hf={stackTrace:I.stack};I.fileName&&(hf.filename=I.fileName);var Rb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Rb.length&&(1!==Rb.length||isNaN(Number(Rb[0]))?2!==Rb.length||isNaN(Number(Rb[0]))||isNaN(Number(Rb[1]))||(hf.lineNumber=Number(Rb[0]),hf.columnNumber=Number(Rb[1])):hf.lineNumber=Number(Rb[0]));
var ll={level:"ERROR_LEVEL_UNKNOWN",message:I.message,errorClassName:I.name,sampleWeight:I.sampleWeight};"ERROR"===gf?ll.level="ERROR_LEVEL_ERROR":"WARNING"===gf&&(ll.level="ERROR_LEVEL_WARNNING");var Zx={isObfuscated:!0,browserStackInfo:hf},Qd={pageUrl:window.location.href,kvPairs:[]};M("FEXP_EXPERIMENTS")&&(Qd.experimentIds=M("FEXP_EXPERIMENTS"));var ml=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!um()&&ml)for(var rr=r(Object.keys(ml)),Tc=rr.next();!Tc.done;Tc=rr.next()){var sr=Tc.value;Qd.kvPairs.push({key:sr,
value:String(ml[sr])})}var nl=I.params;if(nl){var tr=r(Object.keys(nl));for(Tc=tr.next();!Tc.done;Tc=tr.next()){var ur=Tc.value;Qd.kvPairs.push({key:"client."+ur,value:String(nl[ur])})}}var vr=M("SERVER_NAME"),wr=M("SERVER_VERSION");vr&&wr&&(Qd.kvPairs.push({key:"server.name",value:vr}),Qd.kvPairs.push({key:"server.version",value:wr}));qr={errorMetadata:Qd,stackTrace:Zx,logMessage:ll}}var xr=qr;if(!xr)break a;mo("clientError",xr)}if("ERROR"===gf||P("errors_flush_gel_always_killswitch"))b:{if(P("web_fp_via_jspb")&&
(Mt(!0),!P("web_fp_via_jspb_and_json")))break b;Mt()}}if(!P("suppress_error_204_logging")){var jf=I.params||{},oc={urlParams:{a:"logerror",t:"jserror",type:I.name,msg:I.message.substr(0,250),line:I.lineNumber,level:h,"client.name":jf.name},postParams:{url:M("PAGE_NAME",window.location.href),file:I.fileName},method:"POST"};jf.version&&(oc["client.version"]=jf.version);if(oc.postParams){I.stack&&(oc.postParams.stack=I.stack);for(var yr=r(Object.keys(jf)),ol=yr.next();!ol.done;ol=yr.next()){var zr=ol.value;
oc.postParams["client."+zr]=jf[zr]}var pl=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(pl)for(var Ar=r(Object.keys(pl)),ql=Ar.next();!ql.done;ql=Ar.next()){var Br=ql.value;oc.postParams[Br]=pl[Br]}var Cr=M("SERVER_NAME"),Dr=M("SERVER_VERSION");Cr&&Dr&&(oc.postParams["server.name"]=Cr,oc.postParams["server.version"]=Dr)}bn(M("ECATCHER_REPORT_HOST","")+"/error_204",oc)}try{Xt.add(I.message)}catch(Kz){}Yt++}}}}
function eu(){for(var a=r(bu),b=a.next();!b.done;b=a.next())if(mn(b.value.toLowerCase()))return!0;return!1}
function fu(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function gu(){this.register=new Map}
function hu(a){a=r(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Vt("ABORTED")}
gu.prototype.clear=function(){hu(this);this.register.clear()};
var iu=new gu;var ju=Date.now().toString();function ku(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(ju)for(b=1,c=0;c<ju.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^ju.charCodeAt(c),b++;return a}
function lu(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return ku()}
function mu(){for(var a=lu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var nu=y.ytLoggingDocDocumentNonce_;nu||(nu=mu(),A("ytLoggingDocDocumentNonce_",nu));var ou=nu;var pu={Uj:0,gg:1,qg:2,Tn:3,Wj:4,Ls:5,Oo:6,Gq:7,Vp:8,tq:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function qu(a){this.O=a}
function ru(a){return new qu({trackingParams:a})}
qu.prototype.getAsJson=function(){var a={};void 0!==this.O.trackingParams?a.trackingParams=this.O.trackingParams:(a.veType=this.O.veType,void 0!==this.O.veCounter&&(a.veCounter=this.O.veCounter),void 0!==this.O.elementIndex&&(a.elementIndex=this.O.elementIndex));void 0!==this.O.dataElement&&(a.dataElement=this.O.dataElement.getAsJson());void 0!==this.O.youtubeData&&(a.youtubeData=this.O.youtubeData);return a};
qu.prototype.getAsJspb=function(){var a=new Bl;if(void 0!==this.O.trackingParams){var b=this.O.trackingParams;if(null!=b)if("string"===typeof b)b=b?new pd(b,md):qd();else if(b.constructor!==pd)if(ld(b))b=b.length?new pd(new Uint8Array(b),md):qd();else throw Error();E(a,1,b)}else void 0!==this.O.veType&&E(a,2,this.O.veType),void 0!==this.O.veCounter&&E(a,6,this.O.veCounter),void 0!==this.O.elementIndex&&E(a,3,this.O.elementIndex);void 0!==this.O.dataElement&&(b=this.O.dataElement.getAsJspb(),G(a,Bl,
7,b));void 0!==this.O.youtubeData&&G(a,xk,8,this.O.jspbYoutubeData);return a};
qu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
qu.prototype.isClientVe=function(){return!this.O.trackingParams&&!!this.O.veType};function su(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function tu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function uu(a){return M(tu(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",uu);function vu(a){return(a=uu(void 0===a?0:a))?new qu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function wu(){var a=M("csn-to-ctt-auth-info");a||(a={},tm("csn-to-ctt-auth-info",a));return a}
function xu(a){a=M(su(void 0===a?0:a));if(!a&&!M("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",xu);function yu(a){for(var b=r(Object.values(pu)),c=b.next();!c.done;c=b.next())if(xu(c.value)===a)return!0;return!1}
function zu(a,b,c){var d=wu();(c=xu(c))&&delete d[c];b&&(d[a]=b)}
function Au(a){return wu()[a]}
A("yt_logging_screen.getCttAuthInfo",Au);function Bu(a,b,c,d){c=void 0===c?0:c;if(a!==M(su(c))||b!==M(tu(c)))if(zu(a,d,c),tm(su(c),a),tm(tu(c),b),b=function(){setTimeout(function(){if(a)if(P("web_time_via_jspb")){var e=new Cl;E(e,1,ou);E(e,2,a);var f=new bm;$d(f,Cl,111,cm,e);Qt(f)}else mo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ou,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",Bu);var Cu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Cu);function Du(a){om(Cu,arguments)}
;var Eu={fg:3611,kf:27686,lf:85013,mf:23462,nf:157557,pf:42016,qf:62407,rf:26926,sf:51236,tf:79148,uf:50160,vf:77504,Hf:153587,If:87907,Jf:18630,Kf:54445,Lf:80935,Mf:152172,Nf:105675,Of:150723,Pf:37521,Qf:147285,Rf:47786,Sf:98349,Tf:168271,Uf:168954,Vf:168277,Wf:168273,Xf:168270,Yf:123695,Zf:6827,ag:29434,cg:171388,dg:7282,eg:124448,ig:32276,hg:76278,jg:147868,kg:147869,lg:93911,mg:106531,ng:27259,og:27262,pg:27263,rg:21759,sg:27107,tg:62936,ug:160866,vg:49568,wg:171243,xg:160789,yg:171244,zg:171241,
Ag:171245,Bg:171242,Cg:38408,Dg:80637,Eg:68727,Fg:68728,Gg:80353,Hg:80356,Ig:74610,Jg:45707,Kg:83962,Lg:83970,Mg:46713,Ng:166591,Og:89711,Pg:74612,Qg:155792,Rg:93265,Sg:74611,Tg:131380,Vg:128979,Wg:139311,Xg:128978,Ug:131391,Yg:105350,ah:139312,bh:134800,Zg:131392,eh:113533,fh:93252,gh:99357,ih:94521,jh:114252,kh:113532,lh:94522,hh:94583,mh:88E3,nh:139580,oh:93253,ph:93254,qh:94387,rh:94388,sh:93255,th:97424,dh:72502,uh:110111,vh:76019,xh:117092,yh:117093,wh:89431,zh:110466,Ah:77240,Bh:60508,Ch:148123,
Dh:148124,Eh:137401,Fh:137402,Gh:137046,Hh:73393,Ih:113534,Jh:92098,Kh:131381,Lh:84517,Mh:83759,Nh:162711,Oh:162712,Ph:80357,Qh:86113,Rh:72598,Sh:168413,Th:72733,Uh:107349,Vh:124275,Wh:118203,Xh:133275,Yh:160157,Zh:152569,ai:156651,bi:133274,ci:160159,di:160158,fi:133272,gi:133273,hi:133276,ii:144507,ji:143247,ki:156652,li:143248,mi:143249,ni:143250,oi:143251,ri:156653,si:144401,vi:117431,ti:133797,wi:153964,xi:128572,yi:133405,zi:117429,Ai:117430,Bi:117432,Ci:120080,Di:117259,Ei:156655,Fi:156654,
Gi:121692,Hi:145656,Ii:156656,Ji:145655,Ki:145653,Li:145654,Mi:145657,Ni:132972,Oi:133051,Pi:133658,Qi:132971,Ri:97615,Ti:143359,Si:143356,Vi:143361,Ui:143358,Xi:143360,Wi:143357,Yi:142303,Zi:143353,aj:143354,bj:144479,cj:143355,dj:31402,fj:133624,gj:146477,hj:133623,ij:133622,ej:133621,jj:84774,lj:160801,kj:95117,mj:172721,nj:150497,oj:98930,pj:98931,qj:98932,rj:153320,sj:153321,tj:43347,uj:129889,vj:149123,wj:45474,xj:100352,yj:84758,zj:98443,Aj:117985,Bj:74613,Cj:155911,Dj:74614,Ej:64502,Fj:136032,
Gj:74615,Hj:74616,Ij:122224,Jj:74617,Kj:77820,Lj:74618,Mj:93278,Nj:93274,Oj:93275,Pj:93276,Qj:22110,Rj:29433,Sj:133798,Tj:132295,Vj:120541,Xj:82047,Yj:113550,Zj:75836,ak:75837,bk:42352,ck:84512,dk:76065,ek:75989,jk:51879,kk:16623,lk:32594,mk:27240,nk:32633,pk:74858,qk:156999,sk:3945,rk:16989,tk:45520,uk:25488,vk:25492,wk:25494,xk:55760,yk:14057,zk:18451,Ak:57204,Bk:57203,Ck:17897,Dk:57205,Ek:18198,Fk:17898,Gk:17909,Hk:43980,Ik:46220,Jk:11721,Kk:147994,Lk:49954,Mk:96369,Nk:3854,Ok:151633,Pk:56251,
Qk:159108,Rk:25624,Sk:152036,pl:16906,ql:99999,rl:68172,sl:27068,ul:47973,vl:72773,wl:26970,xl:26971,yl:96805,zl:17752,Al:73233,Bl:109512,Cl:22256,Dl:14115,El:22696,Fl:89278,Gl:89277,Hl:109513,Il:43278,Jl:43459,Kl:43464,Ll:89279,Ml:43717,Nl:55764,Ol:22255,Pl:147912,Ql:89281,Rl:40963,Sl:43277,Tl:43442,Ul:91824,Vl:120137,Wl:96367,Xl:36850,Yl:72694,Zl:37414,am:36851,cm:124863,bm:121343,dm:73491,em:54473,fm:166861,gm:43375,hm:46674,im:143815,jm:139095,km:144402,lm:149968,mm:149969,nm:32473,om:72901,pm:72906,
qm:50947,rm:50612,sm:50613,tm:50942,um:84938,vm:84943,wm:84939,xm:84941,ym:84944,zm:84940,Am:84942,Bm:35585,Cm:51926,Dm:79983,Em:63238,Fm:18921,Gm:63241,Hm:57893,Im:41182,Jm:135732,Km:33424,Lm:22207,Mm:42993,Nm:36229,Om:22206,Pm:22205,Qm:18993,Rm:19001,Sm:18990,Tm:18991,Um:18997,Vm:18725,Wm:19003,Xm:36874,Ym:44763,Zm:33427,an:67793,bn:22182,cn:37091,dn:34650,en:50617,fn:47261,gn:22287,hn:25144,jn:97917,kn:62397,ln:150871,mn:150874,nn:125598,pn:137935,qn:36961,rn:108035,sn:27426,tn:27857,un:27846,
vn:27854,wn:69692,xn:61411,yn:39299,zn:38696,An:62520,Bn:36382,Cn:108701,Dn:50663,En:36387,Fn:14908,Gn:37533,Hn:105443,In:61635,Jn:62274,Kn:161670,Ln:133818,Mn:65702,Nn:65703,On:65701,Pn:76256,Qn:166382,Rn:37671,Sn:49953,Un:36216,Vn:28237,Wn:39553,Xn:29222,Yn:26107,Zn:38050,ao:26108,co:120745,bo:26109,eo:26110,fo:66881,ho:28236,jo:14586,ko:160598,lo:57929,mo:74723,no:44098,oo:44099,ro:23528,so:61699,po:134104,qo:134103,to:59149,vo:101951,uo:171502,wo:97346,xo:118051,yo:95102,zo:64882,Ao:119505,Bo:63595,
Co:63349,Do:95101,Eo:75240,Fo:27039,Go:68823,Ho:21537,Io:83464,Jo:75707,Ko:170215,Lo:83113,Mo:101952,No:101953,Po:79610,Qo:125755,Ro:24402,So:24400,To:32925,Vo:57173,Uo:156421,Wo:122502,Xo:145268,Yo:138480,Zo:64423,ap:64424,bp:33986,cp:100828,ep:129089,fp:21409,jp:135155,kp:135156,lp:135157,mp:135158,np:158225,qp:135159,rp:135160,sp:167651,tp:135161,vp:135162,wp:135163,up:158226,xp:158227,yp:135164,zp:135165,Ap:135166,gp:11070,hp:11074,ip:17880,Cp:30709,Dp:30707,Ep:30711,Fp:30710,Gp:30708,Bp:26984,
Hp:146143,Ip:63648,Jp:63649,Kp:111059,Lp:5754,Mp:20445,Np:151308,Op:151152,Rp:130975,Qp:130976,Pp:167637,Sp:110386,Tp:113746,Up:66557,Wp:17310,Xp:28631,Yp:21589,Zp:164817,aq:168011,bq:154946,cq:68012,fq:162617,gq:60480,hq:138664,iq:141121,jq:164502,kq:31571,lq:141978,mq:150105,nq:150106,oq:150107,pq:150108,qq:76980,rq:41577,sq:45469,uq:38669,wq:13768,xq:13777,yq:141842,zq:62985,Aq:4724,Bq:59369,Cq:43927,Dq:43928,Eq:12924,Fq:100355,Iq:56219,Jq:27669,Kq:10337,Hq:47896,Lq:122629,Nq:139723,Mq:139722,
Oq:121258,Pq:107598,Qq:127991,Rq:96639,Sq:107536,Tq:130169,Uq:96661,Vq:145188,Wq:96658,Xq:116646,Yq:159428,br:168611,dr:168612,Zq:121122,er:96660,fr:127738,gr:127083,hr:155281,ir:162959,jr:163566,kr:147842,lr:104443,mr:96659,pr:147595,qr:106442,rr:162776,sr:134840,tr:63667,ur:63668,vr:63669,wr:130686,xr:147036,yr:78314,zr:147799,Ar:148649,Br:55761,Cr:127098,Dr:134841,Er:96368,Fr:67374,Gr:48992,Hr:146176,Ir:49956,Jr:31961,Kr:26388,Lr:23811,Mr:5E4,Nr:126250,Or:96370,Pr:47355,Qr:47356,Rr:37935,Sr:45521,
Tr:21760,Ur:83769,Vr:49977,Wr:49974,Xr:93497,Yr:93498,Zr:34325,bs:140759,ds:115803,es:123707,gs:100081,hs:35309,ks:68314,ls:25602,ms:100339,ns:170873,qs:143516,rs:59018,ts:18248,us:50625,vs:9729,ws:37168,xs:37169,ys:21667,zs:16749,As:18635,Bs:39305,Cs:18046,Ds:53969,Es:8213,Fs:93926,Gs:102852,Hs:110099,Is:22678,Js:69076,Ks:137575,Ms:139224,Ns:100856,Os:154430,Ps:17736,Qs:3832,Rs:147111,Ss:55759,Ts:64031,Zs:93044,bt:93045,ct:170701,et:170702,ht:34388,ft:167841,gt:170419,jt:17657,kt:17655,lt:39579,
mt:39578,nt:170412,ot:77448,pt:8196,qt:11357,rt:69877,tt:8197,ut:168501,vt:156512,wt:161613,xt:156509,zt:161612,At:161614,Bt:82039};function Fu(){var a=ub(Gu),b;return(new Ef(function(c,d){a.onSuccess=function(e){Vm(e)?c(new Hu(e)):d(new Iu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Iu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Iu("Request timed out","net.timeout",e))};
b=bn("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof Lf&&b.abort();
return Jf(c)})}
function Iu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
u(Iu,bb);function Hu(a){this.xhr=a}
;function Ju(){this.h=0;this.za=null}
Ju.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.za))&&"function"===typeof a.then?a:Ku(a):2===this.h&&b?(a=b.call(c,this.za))&&"function"===typeof a.then?a:Lu(a):this};
Ju.prototype.getValue=function(){return this.za};
Ju.prototype.$goog_Thenable=!0;function Lu(a){var b=new Ju;a=void 0===a?null:a;b.h=2;b.za=void 0===a?null:a;return b}
function Ku(a){var b=new Ju;a=void 0===a?null:a;b.h=1;b.za=void 0===a?null:a;return b}
;function Mu(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Qm(a)?"same-origin":"cors",credentials:Qm(a)?"same-origin":"include"};b={};for(var d=r(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Nu(){return Eg()||ln&&mn("applewebkit")&&!mn("version")&&(!mn("safari")||mn("gsa/"))||Lc&&mn("version/")?!0:M("EOM_VISITOR_DATA")?!1:!0}
;function Ou(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Sk)if(Sk[c]==b.embeddedPlayerMode){b=Sk[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Pu(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Qu;this.isTimeout=a instanceof Iu&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Lf}
u(Pu,bb);Pu.prototype.name="BiscottiError";function Qu(){bb.call(this,"Biscotti ID is missing from server")}
u(Qu,bb);Qu.prototype.name="BiscottiMissingError";var Gu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ru=null;function Su(){if(P("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Nu())return Error("User has not consented - not fetching biscotti id.");var a=M("PLAYER_VARS",{});if("1"==sb(a))return Error("Biscotti ID is not available in private embed mode");if(Ou(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Am(){var a=Su();if(void 0!==a)return Jf(a);Ru||(Ru=Fu().then(Tu).sc(function(b){return Uu(2,b)}));
return Ru}
function Tu(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Qu;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Qu;a=a.id;Bm(a);Ru=Ku(a);Vu(18E5,2);return a}
function Uu(a,b){b=new Pu(b);Bm("");Ru=Lu(b);0<a&&Vu(12E4,a-1);throw b;}
function Vu(a,b){Wm(function(){Fu().then(Tu,function(c){return Uu(b,c)}).sc(db)},a)}
function Wu(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Am()}catch(b){return Jf(b)}}
;function Xu(a){if("1"!=sb(M("PLAYER_VARS",{}))){a&&zm();try{Wu().then(function(){},function(){}),Wm(Xu,18E5)}catch(b){Fm(b)}}}
;function Yu(){var a=Jn.getInstance(),b=Mn(119),c=1<window.devicePixelRatio;if(document.body&&Ai(document.body,"exp-invert-logo"))if(c&&!Ai(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ai(d,"inverted-hdpi")){var e=yi(d);zi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ai(document.body,"inverted-hdpi")&&Bi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Nn(b)||0;d=c?d|67108864:d&-67108865;0==d?delete In[b]:(c=d.toString(16),In[b]=
c.toString());c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in In)d.push(f+"="+encodeURIComponent(String(In[f])));Fn(b,d.join("&"),63072E3,a.i,c)}}
;var Zu=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function $u(){var a=void 0===a?window.location.href:a;if(P("kevlar_disable_theme_param"))return null;lc(mc(5,a));try{var b=Om(a).theme;return Zu.get(b)||null}catch(c){}return null}
;function av(){this.h={};if(this.i=Hn()){var a=Cg.get("CONSISTENCY",void 0);a&&bv(this,{encryptedTokenJarContents:a})}}
av.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.La.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=r(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];bv(this,a)}};
function bv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Fn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var cv=window.location.hostname.split(".").slice(-2).join(".");function dv(){var a=M("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===M("INNERTUBE_CLIENT_NAME")&&(this.h=ev(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var fv;dv.getInstance=function(){fv=B("yt.clientLocationService.instance");fv||(fv=new dv,A("yt.clientLocationService.instance",fv));return fv};
l=dv.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===M("INNERTUBE_CLIENT_NAME")?(this.h=ev(this))&&this.h.set("yt-location-playability-token",a,15552E3):Fn("YT_CL",JSON.stringify({loctok:a}),15552E3,cv,!0))};
function ev(a){return void 0===a.h?new co("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=ev(this))&&this.h.remove("yt-location-playability-token"):Gn("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===M("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function gv(a,b){var c,d=null==(c=Vs(a,Rk))?void 0:c.signal;if(d&&b.Pb&&(c=b.Pb[d]))return c();var e;if((c=null==(e=Vs(a,Pk))?void 0:e.request)&&b.ge&&(e=b.ge[c]))return e();for(var f in a)if(b.gd[f]&&(a=b.gd[f]))return a()}
;function hv(a){return function(){return new a}}
;var iv={},jv=(iv.WEB_UNPLUGGED="^unplugged/",iv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",iv.WEB_UNPLUGGED_OPS="^unplugged/",iv.WEB_UNPLUGGED_PUBLIC="^unplugged/",iv.WEB_CREATOR="^creator/",iv.WEB_KIDS="^kids/",iv.WEB_EXPERIMENTS="^experiments/",iv.WEB_MUSIC="^music/",iv.WEB_REMIX="^music/",iv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",iv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",iv);
function kv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=jv[b];if(c){var d=new RegExp(c),e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(jv).forEach(function(g){var h=r(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function lv(){}
lv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Cn:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=M("INNERTUBE_CONTEXT");if(g){g=vb(g);P("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=M("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Jn.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Mn(165)?m="USER_INTERFACE_THEME_DARK":Mn(174)?m="USER_INTERFACE_THEME_LIGHT":!P("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:$u()||m;h.userInterfaceTheme=k;if(!f){if(k=
Tn())h.connectionType=k;P("web_log_effective_connection_type")&&(k=Un())&&(g.client.effectiveConnectionType=k)}var n;if(P("web_log_memory_total_kbytes")&&(null==(n=y.navigator)?0:n.deviceMemory)){var p;n=null==(p=y.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}p=Om(y.location.href);!P("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},P("kevlar_woffle")&&
Dn.h&&(p=Dn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=En(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!P("web_lr_app_quality_killswitch")&&(p=M("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=M("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:p}));if(!P("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var v=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(xb){}v=void 0}v&&(h.timeZone=v)}(v=xm())?h.experimentsToken=v:delete h.experimentsToken;v=ym();av.h||(av.h=new av);h=av.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:v,consistencyTokenJars:p});!P("web_prequest_context_killswitch")&&(t=M("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=t);v=Jn.getInstance();t=Mn(58);v=v.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);v&&(g.user.lockedSafetyMode=!0);P("warm_op_csn_cleanup")?e&&(f=xu())&&(g.clientScreenNonce=f):!f&&(f=xu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;dv.getInstance().setLocationOnInnerTubeContext(g);try{var z=Rm(),D=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:D};var F=
r(Object.entries(z));for(var N=F.next();!N.done;N=F.next()){var O=r(N.value),T=O.next().value,aa=O.next().value;z=T;D=aa;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+D})}}catch(xb){cu(xb)}F=g}else cu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(N=this.h(a)){this.i(F,N,b);var W;b="/youtubei/v1/"+kv(this.j());(N=null==(W=Vs(a.commandMetadata,Qk))?void 0:W.apiUrl)&&(b=N);W=b;(b=M("INNERTUBE_HOST_OVERRIDE"))&&(W=String(b)+String(qc(W)));b=
{};b.key=M("INNERTUBE_API_KEY");P("json_condensed_response")&&(b.prettyPrint="false");W=Pm(W,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:W,kb:Mu(W),La:F,config:a};a.config.Yb?a.config.Yb.identity=c:a.config.Yb={identity:c};return a}cu(new Q("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(lv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function mv(){}
u(mv,lv);mv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:Mu("/getDatasyncIdsEndpoint","GET"),La:{}}};
mv.prototype.j=function(){return[]};
mv.prototype.h=function(){};
mv.prototype.i=function(){};var nv={},ov=(nv.GET_DATASYNC_IDS=hv(mv),nv);function pv(a){var b=Ka.apply(1,arguments);if(!qv(a)||b.some(function(d){return!qv(d)}))throw Error("Only objects may be merged.");
b=r(b);for(var c=b.next();!c.done;c=b.next())rv(a,c.value);return a}
function rv(a,b){for(var c in b)if(qv(b[c])){if(c in a&&!qv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});rv(a[c],b[c])}else if(sv(b[c])){if(c in a&&!sv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);tv(a[c],b[c])}else a[c]=b[c];return a}
function tv(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next())c=c.value,qv(c)?a.push(rv({},c)):sv(c)?a.push(tv([],c)):a.push(c);return a}
function qv(a){return"object"===typeof a&&!Array.isArray(a)}
function sv(a){return"object"===typeof a&&Array.isArray(a)}
;function uv(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function vv(){var a=uv();a.info||(a.info={});return a.info}
function wv(a){a=uv(a);a.metadata||(a.metadata={});return a.metadata}
function xv(a){a=uv(a);a.tick||(a.tick={});return a.tick}
function yv(a){a=uv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function zv(a){a=yv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Av(a){var b=uv(a).nonce;b||(b=mu(),uv(a).nonce=b);return b}
;function Bv(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function Cv(a){a=a||"";var b=B("ytcsi.reference");b||(Bv(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Bv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var S={},Dv=(S.auto_search="LATENCY_ACTION_AUTO_SEARCH",S.ad_to_ad="LATENCY_ACTION_AD_TO_AD",S.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",S["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",S.app_startup="LATENCY_ACTION_APP_STARTUP",S["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",S["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",S["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",S["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
S["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",S["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",S["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",S["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",S["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",S["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",S["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",S["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
S["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",S["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",S.browse="LATENCY_ACTION_BROWSE",S.cast_splash="LATENCY_ACTION_CAST_SPLASH",S.channels="LATENCY_ACTION_CHANNELS",S.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",S["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",S["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",S["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
S["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",S["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",S["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",S["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",S["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",S["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",S["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",S["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",S["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",S["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",S.chips="LATENCY_ACTION_CHIPS",S["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",S["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",S["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",S.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",S.embed="LATENCY_ACTION_EMBED",
S.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",S.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",S.explore="LATENCY_ACTION_EXPLORE",S.home="LATENCY_ACTION_HOME",S.library="LATENCY_ACTION_LIBRARY",S.live="LATENCY_ACTION_LIVE",S.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",S.onboarding="LATENCY_ACTION_ONBOARDING",S.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",S["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",S["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",S["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",S["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",S["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",S["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",S["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",S["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",S["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",S["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
S["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",S["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",S["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",S["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",S["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",S["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",S["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",S["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",S.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
S.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",S.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",S.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",S["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",S["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",S.prebuffer="LATENCY_ACTION_PREBUFFER",S.prefetch="LATENCY_ACTION_PREFETCH",S.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",S.profile_switcher="LATENCY_ACTION_LOGIN",S.reel_watch="LATENCY_ACTION_REEL_WATCH",
S.results="LATENCY_ACTION_RESULTS",S["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",S.search_ui="LATENCY_ACTION_SEARCH_UI",S.search_suggest="LATENCY_ACTION_SUGGEST",S.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",S.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",S.seek="LATENCY_ACTION_PLAYER_SEEK",S.settings="LATENCY_ACTION_SETTINGS",S.store="LATENCY_ACTION_STORE",S.tenx="LATENCY_ACTION_TENX",S.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",S.watch="LATENCY_ACTION_WATCH",S.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",S["watch,watch7"]="LATENCY_ACTION_WATCH",S["watch,watch7_html5"]="LATENCY_ACTION_WATCH",S["watch,watch7ad"]="LATENCY_ACTION_WATCH",S["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",S.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",S.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",S["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",S["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",S["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",S["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",S["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",S["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",S["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",S["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",S["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",S["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",S["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",S["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",S["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",S.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",S.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",S.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",S.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",S),U={},Ev=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",
U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",
U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",
U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",
U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Fv="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Gv={},Hv=(Gv.ccs="CANARY_STATE_",Gv.mver="MEASUREMENT_VERSION_",Gv.pis="PLAYER_INITIALIZED_STATE_",
Gv.yt_pt="LATENCY_PLAYER_",Gv.pa="LATENCY_ACTION_",Gv.ctop="TOP_ENTITY_TYPE_",Gv.yt_vst="VIDEO_STREAM_TYPE_",Gv),Iv="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Jv(a){return Dv[a]||"LATENCY_ACTION_UNKNOWN"}
function Kv(a,b,c){c=yv(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ev){c=Ev[a];0<=fb(Fv,c)&&(b=!!b);a in Hv&&"string"===typeof b&&(b=Hv[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return pv({},d)}0<=fb(Iv,a)||du(new Q("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,
LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,
LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,
LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,
LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,
LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,
LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,
LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,
LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,
LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,
LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,
LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,
LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";V[V.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";
V[V.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";V[V.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";V[V.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";V[V.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";V[V.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
V[V.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";V[V.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
V[V.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";V[V.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";V[V.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";V[V.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
V[V.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";V[V.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";
V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";
V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";
V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";
V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
V[V.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";V[V.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";
V[V.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";V[V.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";V[V.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";
V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
V[V.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";
V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";V[V.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
V[V.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";V[V.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
V[V.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";V[V.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";V[V.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";V[V.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";V[V.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";
V[V.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";V[V.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";V[V.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";V[V.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";
V[V.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";V[V.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";V[V.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";V[V.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";V[V.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";V[V.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";V[V.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Lv={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Lv[Lv.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Lv[Lv.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Lv[Lv.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Mv={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Mv[Mv.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Mv[Mv.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Mv[Mv.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Mv[Mv.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Mv[Mv.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Mv[Mv.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Mv[Mv.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Mv[Mv.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Nv={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Nv[Nv.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Nv[Nv.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Nv[Nv.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Nv[Nv.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Ov={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Ov[Ov.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Ov[Ov.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Pv={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Pv[Pv.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Pv[Pv.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Pv[Pv.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Pv[Pv.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Pv[Pv.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Pv[Pv.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Qv={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Qv[Qv.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Qv[Qv.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Qv[Qv.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Qv[Qv.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Rv={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Rv[Rv.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Rv[Rv.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Rv[Rv.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Sv={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Sv[Sv.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Sv[Sv.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Sv[Sv.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Tv="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext".split(" ");function Uv(a,b){gq.call(this,1,arguments);this.timer=b}
u(Uv,gq);var Vv=new hq("aft-recorded",Uv);var Wv=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Wv);function Xv(){this.h=0}
function Yv(){Xv.h||(Xv.h=new Xv);return Xv.h}
Xv.prototype.tick=function(a,b,c,d){Zv(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},P("web_csi_via_jspb")?(d=new Zl,E(d,1,a),E(d,2,b),a=new bm,$d(a,Zl,5,cm,d),Qt(a,c)):mo("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Xv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Zv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,mo("latencyActionInfo",a,{cttAuthInfo:c}))};
Xv.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Zv(this,"info_"+d+"_"+b)||(E(a,2,b),b={cttAuthInfo:c},c=new bm,$d(c,Wl,7,cm,a),Qt(c,b))};
Xv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Zv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,mo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Zv(a,b){Wv[b]=Wv[b]||{count:0};var c=Wv[b];c.count++;c.time=R();a.h||(a.h=Wn(function(){var d=R(),e;for(e in Wv)Wv[e]&&6E4<d-Wv[e].time&&delete Wv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||du(c)),!0):!1}
;var $v=window;function aw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function bw(){var a;if(P("csi_use_performance_navigation_timing")||P("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=cw(e.requestStart),e.responseEnd=cw(e.responseEnd),e.redirectStart=cw(e.redirectStart),e.redirectEnd=cw(e.redirectEnd),e.domainLookupEnd=cw(e.domainLookupEnd),e.connectStart=cw(e.connectStart),e.connectEnd=
cw(e.connectEnd),e.responseStart=cw(e.responseStart),e.secureConnectionStart=cw(e.secureConnectionStart),e.domainLookupStart=cw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function cw(a){return Math.round(dw()+a)}
function dw(){return(P("csi_use_time_origin")||P("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=$v.performance||$v.mozPerformance||$v.msPerformance||$v.webkitPerformance||new aw;var ew=!1,fw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||db,Z);function gw(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;wv(c).loadType=e}(a=Kv(a,b,c))&&hw(a,c,d)}}
function hw(a,b,c){if(!P("web_csi_via_jspb")||(void 0===c?0:c))c=Cv(b||""),pv(c.info,a),a.loadType&&(c=a.loadType,wv(b).loadType=c),pv(zv(b),a),c=Av(b),b=uv(b).cttAuthInfo,Yv().info(a,c,b);else{c=new Wl;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":E(c,1,V[a[e]]);break;case "clientActionNonce":E(c,2,a[e]);break;case "clientScreenNonce":E(c,4,a[e]);break;case "loadType":E(c,3,a[e]);break;case "isPrewarmedLaunch":E(c,92,a[e]);break;case "isFirstInstall":E(c,
55,a[e]);break;case "networkType":E(c,5,Lv[a[e]]);break;case "connectionType":E(c,26,X[a[e]]);break;case "detailedConnectionType":E(c,27,Y[a[e]]);break;case "isVisible":E(c,6,a[e]);break;case "playerType":E(c,7,Mv[a[e]]);break;case "clientPlaybackNonce":E(c,8,a[e]);break;case "adClientPlaybackNonce":E(c,28,a[e]);break;case "previousCpn":E(c,77,a[e]);break;case "targetCpn":E(c,76,a[e]);break;case "isMonetized":E(c,9,a[e]);break;case "isPrerollAllowed":E(c,16,a[e]);break;case "isPrerollShown":E(c,17,
a[e]);break;case "adType":E(c,12,a[e]);break;case "adTypesAllowed":E(c,36,a[e]);break;case "adNetworks":E(c,37,a[e]);break;case "previousAction":E(c,13,V[a[e]]);break;case "isRedSubscriber":E(c,14,a[e]);break;case "serverTimeMs":E(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":E(c,20,a[e]);break;case "targetVideoId":E(c,78,a[e]);break;case "adBreakType":E(c,21,Nv[a[e]]);break;case "isNavigation":E(c,25,a[e]);break;case "viewportHeight":E(c,29,a[e]);break;case "viewportWidth":E(c,
30,a[e]);break;case "screenHeight":E(c,84,a[e]);break;case "screenWidth":E(c,85,a[e]);break;case "browseId":E(c,31,a[e]);break;case "isCacheHit":E(c,32,a[e]);break;case "httpProtocol":E(c,33,a[e]);break;case "transportProtocol":E(c,34,a[e]);break;case "searchQuery":E(c,41,a[e]);break;case "isContinuation":E(c,42,a[e]);break;case "availableProcessors":E(c,43,a[e]);break;case "sdk":E(c,44,a[e]);break;case "isLocalStream":E(c,45,a[e]);break;case "navigationRequestedSameUrl":E(c,64,a[e]);break;case "shellStartupDurationMs":E(c,
70,a[e]);break;case "appInstallDataAgeMs":E(c,73,a[e]);break;case "latencyActionError":E(c,71,Ov[a[e]]);break;case "actionStep":E(c,79,a[e]);break;case "jsHeapSizeLimit":E(c,80,a[e]);break;case "totalJsHeapSize":E(c,81,a[e]);break;case "usedJsHeapSize":E(c,82,a[e]);break;case "sourceVideoDurationMs":E(c,90,a[e]);break;case "videoOutputFrames":E(c,93,a[e]);break;case "isResume":E(c,104,a[e]);break;case "debugTicksExcluded":E(c,105,a[e]);break;case "adPrebufferedTimeSecs":E(c,39,a[e]);break;case "isLivestream":E(c,
47,a[e]);break;case "liveStreamMode":E(c,91,Pv[a[e]]);break;case "adCpn2":E(c,48,a[e]);break;case "adDaiDriftMillis":E(c,49,a[e]);break;case "videoStreamType":E(c,53,Qv[a[e]]);break;case "playbackRequiresTap":E(c,56,a[e]);break;case "performanceNavigationTiming":E(c,67,a[e]);break;case "transactionType":E(c,74,Rv[a[e]]);break;case "playerRotationType":E(c,101,Sv[a[e]]);break;case "allowedPreroll":E(c,10,a[e]);break;case "shownPreroll":E(c,11,a[e]);break;case "getHomeRequestId":E(c,57,a[e]);break;
case "getSearchRequestId":E(c,60,a[e]);break;case "getPlayerRequestId":E(c,61,a[e]);break;case "getWatchNextRequestId":E(c,62,a[e]);break;case "getBrowseRequestId":E(c,63,a[e]);break;case "getLibraryRequestId":E(c,66,a[e]);break;case "isTransformerEnabledForFeature":E(c,106,a[e]);break;default:Tv.includes(f)&&Fm(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Fm(Error("Codegen laipb translator failed to set "+f))}}iw(c,b)}}
function iw(a,b){var c=de(a,3);c&&(wv(b).loadType=c);Cv(b||"").jspbInfo.push(a);c=Av(b);b=uv(b).cttAuthInfo;Yv().jspbInfo(a,c,b)}
function jw(a,b,c){if(!b&&"_"!==a[0]){var d=a;Z.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Z.mark(d))}d=Cv(c||"");d.tick[a]=b||R();if(d.callback&&d.callback[a]){d=r(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=yv(c);d.gelTicks&&(d.gelTicks[a]=!0);e=xv(c);d=b||R();P("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Av(c);var f=uv(c).cttAuthInfo;"_start"===a?(a=Yv(),Zv(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},P("web_csi_via_jspb")?(a=new Rl,
E(a,1,e),e=new bm,$d(e,Rl,6,cm,a),Qt(e,b)):mo("latencyActionBaselined",{clientActionNonce:e},b))):Yv().tick(a,e,b,f);kw(c);return d}
function lw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=js+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function mw(a){var b=bw(),c=dw(),d=M("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!P("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(jw("srt",b.responseStart),1!==a.prerender&&jw("_start",c));a=nw();0<a&&jw("fpt",a);a=bw();a.isPerformanceNavigationTiming&&hw({performanceNavigationTiming:!0});jw("nreqs",a.requestStart);jw("nress",a.responseStart);jw("nrese",a.responseEnd);0<a.redirectEnd-a.redirectStart&&(jw("nrs",a.redirectStart),jw("nre",a.redirectEnd));0<a.domainLookupEnd-a.domainLookupStart&&
(jw("ndnss",a.domainLookupStart),jw("ndnse",a.domainLookupEnd));0<a.connectEnd-a.connectStart&&(jw("ntcps",a.connectStart),jw("ntcpe",a.connectEnd));a.secureConnectionStart>=dw()&&0<a.connectEnd-a.secureConnectionStart&&(jw("nstcps",a.secureConnectionStart),jw("ntcpe",a.connectEnd));Z&&"getEntriesByType"in Z&&ow()}
function pw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);hc()&&a.setAttribute("nonce",hc());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=dw(),jw("rsf_"+b,c+Math.round(a.fetchStart)),jw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function qw(){var a=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var b in fw)if(fw.hasOwnProperty(b)){var c=fw[b];pw(b,c)&&a.push(c)}return a}
function ow(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(jw("wffs",cw(b.startTime)),jw("wffe",cw(b.responseEnd)))}
function rw(a){var b=sw("aft",a);if(b)return b;b=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=sw(b[d],a);if(e)return e}return NaN}
function sw(a,b){if(a=xv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function kw(a){var b=sw("_start",a),c=rw(a);b&&c&&!ew&&(mq(Vv,new Uv(Math.round(c-b),a)),ew=!0)}
function tw(a,b){for(var c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!tw(a[d],b[d]))return!1;return!0}
function nw(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return cw(a.startTime)}a=Z.timing;
return a.Ge?Math.max(0,a.Ge):0}
;function uw(a,b){Cv("").info.actionType=a;b&&tm("TIMING_AFT_KEYS",b);tm("TIMING_ACTION",a);if(P("web_csi_via_jspb")){a=M("TIMING_INFO",{});var c=new Wl;a=r(Object.entries(a));for(b=a.next();!b.done;b=a.next()){var d=r(b.value);b=d.next().value;d=d.next().value;switch(b){case "GetBrowse_rid":Yl(c,Ul(Tl(b),String(d)));break;case "GetGuide_rid":Yl(c,Ul(Tl(b),String(d)));break;case "GetHome_rid":Yl(c,Ul(Tl(b),String(d)));break;case "GetPlayer_rid":Yl(c,Ul(Tl(b),String(d)));break;case "GetSearch_rid":Yl(c,
Ul(Tl(b),String(d)));break;case "GetSettings_rid":Yl(c,Ul(Tl(b),String(d)));break;case "GetTrending_rid":Yl(c,Ul(Tl(b),String(d)));break;case "GetWatchNext_rid":Yl(c,Ul(Tl(b),String(d)));break;case "yt_red":E(c,14,!!d);break;case "yt_ad":E(c,9,!!d)}}iw(c);c=new Wl;c=E(c,25,!0);c=E(c,1,V[Jv(M("TIMING_ACTION"))]);(a=M("PREVIOUS_ACTION"))&&E(c,13,V[Jv(a)]);(a=M("CLIENT_PROTOCOL"))&&E(c,33,a);(a=M("CLIENT_TRANSPORT"))&&E(c,34,a);(a=xu())&&"UNDEFINED_CSN"!==a&&E(c,4,a);a=lw();1!==a&&-1!==a||E(c,6,!0);
a=vv();wv();E(c,3,"cold");mw(a);a=qw();if(0<a.length)for(a=r(a),b=a.next();!b.done;b=a.next())b=b.value,d=new Vl,E(d,1,b),be(c,83,Vl,d);iw(c)}else{a=M("TIMING_INFO",{});for(c in a)a.hasOwnProperty(c)&&gw(c,a[c]);c={isNavigation:!0,actionType:Jv(M("TIMING_ACTION"))};if(a=M("PREVIOUS_ACTION"))c.previousAction=Jv(a);if(a=M("CLIENT_PROTOCOL"))c.httpProtocol=a;if(a=M("CLIENT_TRANSPORT"))c.transportProtocol=a;(a=xu())&&"UNDEFINED_CSN"!==a&&(c.clientScreenNonce=a);a=lw();if(1===a||-1===a)c.isVisible=!0;
wv();vv();c.loadType="cold";mw(vv());a=qw();if(0<a.length)for(c.resourceInfo=[],a=r(a),b=a.next();!b.done;b=a.next())c.resourceInfo.push({resourceCache:b.value});hw(c)}c=vv();a=zv();if("cold"===wv().loadType&&("cold"===c.yt_lt||"cold"===a.loadType)){b=xv();d=yv();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in b)if(!(e in d))if("number"===typeof b[e])jw(e,sw(e));else if(P("log_repeated_ytcsi_ticks"))for(var f=r(b[e]),g=f.next();!g.done;g=f.next())jw(e.slice(1),g.value);e={};b=!1;d=r(Object.keys(c));
for(f=d.next();!f.done;f=d.next())f=f.value,(f=Kv(f,c[f]))&&!tw(zv(),f)&&(pv(a,f),pv(e,f),b=!0);b&&hw(e)}A("ytglobal.timingready_",!0);e=M("TIMING_ACTION");B("ytglobal.timingready_")&&e&&"_start"in xv()&&rw()&&kw()}
function vw(a,b,c,d){gw(a,b,c,d)}
function ww(a,b,c){return jw(a,b,c)}
function xw(){var a=Av();requestAnimationFrame(function(){setTimeout(function(){a===Av()&&jw("ol")},0)})}
var yw=window;yw.ytcsi&&(yw.ytcsi.info=vw,yw.ytcsi.tick=ww);var zw="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Aw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Bw(a,b,c,d){this.m=a;this.W=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Pb||(a.Pb={});a.Pb=Object.assign({},ov,a.Pb)}
function Cw(a,b,c,d){if(void 0!==Bw.h){if(d=Bw.h,a=[a!==d.m,b!==d.W,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else Bw.h=new Bw(a,b,c,d)}
function Dw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Cn:c;var d=gv(b,a.m);if(!d)return Jf(new Q("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Ef(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.l.cf){var n=e.config,p;n=null==n?void 0:null==(p=n.Yb)?void 0:p.sessionIndex;p=Bn(0,{sessionIndex:n});k=Object.assign({},Ew(h),p);return m.A(2)}return w(m,Fw(e.config,
h),3)}2!=m.h&&(k=m.i);f(Gw(a,e,k));m.h=0})}):Jf(new Q("Error: Failed to build request for command.",b))}
function Hw(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Yt)?0:d.bu)&&a.j){d=r(zw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Gw(a,b,c){var d,e,f,g,h,k,m,n,p,v,t,z,D,F,N,O,T,aa,W,xb,$a,qa,I,oa,ha,ef,ff,Nd;return x(function(ta){switch(ta.h){case 1:ta.A(2);break;case 3:if((d=ta.i)&&!d.isExpired())return ta.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.La)?0:f.context)for(g=r([]),h=g.next();!h.done;h=g.next())k=h.value,k.Ut(b.La.context);if(null==(m=a.i)||!m.Zt(b.input,b.La)){ta.A(4);break}return w(ta,a.i.Pt(b.input,b.La),5);case 5:return n=ta.i,P("kevlar_process_local_innertube_responses_killswitch")||
Hw(a,n,b),ta.return(n);case 4:return(t=null==(v=b.config)?void 0:v.Oa)&&a.h.has(t)&&P("web_memoize_inflight_requests")?p=a.h.get(t):(z=JSON.stringify(b.La),N=null!=(F=null==(D=b.kb)?void 0:D.headers)?F:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},N,c)}),O=Object.assign({},b.kb),"POST"===b.kb.method&&(O=Object.assign({},O,{body:z})),(null==(T=b.config)?0:T.Oe)&&jw(b.config.Oe),aa=function(){return a.W.fetch(b.input,O,b.config)},p=aa(),t&&a.h.set(t,p)),w(ta,p,6);
case 6:if((W=ta.i)&&"error"in W&&(null==(xb=W)?0:null==($a=xb.error)?0:$a.details))for(qa=W.error.details,I=r(qa),oa=I.next();!oa.done;oa=I.next())ha=oa.value,(ef=ha["@type"])&&-1<Aw.indexOf(ef)&&(delete ha["@type"],W=ha);t&&a.h.has(t)&&a.h.delete(t);(null==(ff=b.config)?0:ff.Pe)&&jw(b.config.Pe);if(W||null==(Nd=a.i)||!Nd.Ht(b.input,b.La)){ta.A(7);break}return w(ta,a.i.Ot(b.input,b.La),8);case 8:W=ta.i;case 7:return Hw(a,W,b),ta.return(W||void 0)}})}
function Fw(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Yb)?void 0:d.sessionIndex;var h=Bn(0,{sessionIndex:e});if(!(h instanceof Ef)){var k=new Ef(db);Ff(k,2,h);h=k}return w(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Ew(b),f)))})}
function Ew(a){var b={"Content-Type":"application/json"};M("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=M("EOM_VISITOR_DATA"):M("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=M("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=M("LOGGED_IN",!1);"cors"!==a&&((a=M("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=M("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=M("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=M("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Iw=new Js("INNERTUBE_TRANSPORT_TOKEN");var Jw=["share/get_web_player_share_panel"],Kw=["feedback"],Lw=["notification/modify_channel_preference"],Mw=["browse/edit_playlist"],Nw=["subscription/subscribe"],Ow=["subscription/unsubscribe"];function Pw(){}
u(Pw,lv);Pw.prototype.j=function(){return Nw};
Pw.prototype.h=function(a){return Vs(a,nm)||void 0};
Pw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Pw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Qw(){}
u(Qw,lv);Qw.prototype.j=function(){return Ow};
Qw.prototype.h=function(a){return Vs(a,mm)||void 0};
Qw.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Qw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Rw(){}
u(Rw,lv);Rw.prototype.j=function(){return Kw};
Rw.prototype.h=function(a){return Vs(a,Tk)||void 0};
Rw.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Rw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Sw(){}
u(Sw,lv);Sw.prototype.j=function(){return Lw};
Sw.prototype.h=function(a){return Vs(a,lm)||void 0};
Sw.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Tw(){}
u(Tw,lv);Tw.prototype.j=function(){return Mw};
Tw.prototype.h=function(a){return Vs(a,km)||void 0};
Tw.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Uw(){}
u(Uw,lv);Uw.prototype.j=function(){return Jw};
Uw.prototype.h=function(a){return Vs(a,jm)};
Uw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Ls=new Js("NETWORK_SLI_TOKEN");function Vw(a){this.h=a}
Vw.prototype.fetch=function(a,b){var c=this,d,e,f;return x(function(g){c.h&&(d=lc(mc(5,Bc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;P("wug_networking_gzip_request")&&(e=uq(b));f=new window.Request(a,e);return P("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){du(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){du(h)}))})};
Vw.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Lt(),b=b.then(function(c){du(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Vw[Is]=[new Ks];var Ww=new Js("NETWORK_MANAGER_TOKEN");var Xw;function Yw(a){a=void 0===a||a?lu():ku();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function Zw(a){gq.call(this,1,arguments);this.csn=a}
u(Zw,gq);var pq=new hq("screen-created",Zw),$w=[],bx=ax,cx=0;function dx(a,b,c,d,e,f,g){function h(){du(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=bx(),m=new qu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);P("il_via_jspb")?(e=Jl((new Il).h(k),m.getAsJspb()),c&&c.visualElement?(m=new Gl,c.clientScreenNonce&&E(m,2,c.clientScreenNonce),Hl(m,c.visualElement.getAsJspb()),g&&E(m,4,dm[g]),G(e,Gl,5,m)):c&&h(),d&&E(e,3,d),Vt(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=
g)):c&&h(),d&&(e.cloneCsn=d),a?Kt("screenCreated",e,a,f):mo("screenCreated",e,f));mq(pq,new Zw(k));return k}
function ex(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Au(b)||void 0,
sequenceGroup:b};d=r(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&du(Error("Child VE logged with no data"));if(P("il_via_jspb")){var h=Ml((new Kl).h(b),c.getAsJspb());ib(e,function(k){k=k.getAsJspb();be(h,3,Bl,k)});
"UNDEFINED_CSN"===b?fx("visualElementAttached",f,void 0,h):Wt(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?fx("visualElementAttached",f,c):a?Kt("visualElementAttached",c,a,f):mo("visualElementAttached",c,f)}
function gx(a,b,c,d,e,f){hx(a,b,c,e,f)}
function hx(a,b,c,d,e){var f={cttAuthInfo:Au(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(d=(new Pl).h(b),c=c.getAsJspb(),c=G(d,Bl,2,c),c=E(c,4,1),e&&G(c,El,3,e),"UNDEFINED_CSN"===b?fx("visualElementShown",f,void 0,c):Rt(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?fx("visualElementShown",f,e):a?Kt("visualElementShown",e,a,f):mo("visualElementShown",e,f))}
function ix(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:Au(b)||void 0,sequenceGroup:b,endOfSequence:d};P("il_via_jspb")?(e=(new Ol).h(b),c=c.getAsJspb(),c=G(e,Bl,2,c),E(c,4,d?16:8),"UNDEFINED_CSN"===b?fx("visualElementHidden",f,void 0,c):St(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?fx("visualElementHidden",f,d):a?Kt("visualElementHidden",d,a,f):mo("visualElementHidden",d,f))}
function ax(){if(P("enable_web_96_bit_csn"))var a=Yw();else if(P("enable_web_96_bit_csn_no_crypto"))a=Yw(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=cd(b,3)}return a}
function fx(a,b,c,d){$w.push({Mc:a,payload:c,Ua:d,options:b});cx||(cx=qq())}
function rq(a){if($w){for(var b=r($w),c=b.next();!c.done;c=b.next())if(c=c.value,P("il_via_jspb")&&c.Ua)switch(c.Ua.h(a.csn),c.Mc){case "screenCreated":Vt(c.Ua,c.options);break;case "visualElementAttached":Wt(c.Ua,c.options);break;case "visualElementShown":Rt(c.Ua,c.options);break;case "visualElementHidden":St(c.Ua,c.options);break;case "visualElementGestured":Tt(c.Ua,c.options);break;case "visualElementStateChanged":Ut(c.Ua,c.options);break;default:du(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,mo(c.Mc,c.payload,c.options));$w.length=0}cx=0}
;function jx(a,b){P("safe_logging_library_killswitch")?hx(void 0,a,b):Em(gx)(void 0,a,b,void 0,void 0,void 0)}
;function kx(){this.j=new Set;this.h=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function lx(){kx.h||(kx.h=new kx);return kx.h}
kx.prototype.l=function(a){this.client=a};
kx.prototype.i=function(){this.clear();this.csn=xu()};
kx.prototype.clear=function(){this.j.clear();this.h.clear();this.m.clear();this.csn=null};function mx(){this.i=new Set;this.h=new Set;this.j=new Map;this.client=void 0;this.csn=null}
mx.prototype.l=function(a){P("safe_logging_library_killswitch")?this.client=a:Em(lx().l).bind(lx())(a)};
function nx(){mx.h||(mx.h=new mx);var a=mx.h;P("safe_logging_library_killswitch")?(a.clear(),a.csn=xu()):Em(lx().i).bind(lx())()}
mx.prototype.clear=function(){P("safe_logging_library_killswitch")?(this.i.clear(),this.h.clear(),this.j.clear(),this.csn=null):Em(lx().clear).bind(lx())()};function ox(){this.s=[];this.H=[];this.h=[];this.m=[];this.Z=[];this.i=new Set;this.v=new Map}
ox.prototype.l=function(a){this.client=a};
function px(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=xu(c),f=vu(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&ex(a.client,e,f,[ru(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&ex(a.client,e,f,[ru(d.playerResponse.trackingParams)])}})}
function qx(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.s.push([b,c]);else{var e=xu(d);c=c||vu(d);e&&c&&ex(a.client,e,c,[b])}}
ox.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=xu(void 0===c?0:c)){a=this.client;var e=ru(d);d={cttAuthInfo:Au(c)||void 0,sequenceGroup:c};P("il_via_jspb")?(b=(new Nl).h(c),e=e.getAsJspb(),b=G(b,Bl,2,e),E(b,4,dm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?fx("visualElementGestured",d,void 0,b):Tt(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?fx("visualElementGestured",d,e):a?Kt("visualElementGestured",e,a,d):mo("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
ox.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.H.push([a,b]):rx(this,a,b,c)};
function rx(a,b,c,d){d=void 0===d?0:d;var e=xu(d);d=b||vu(d);e&&d&&(a=a.client,b={cttAuthInfo:Au(e)||void 0,sequenceGroup:e},P("il_via_jspb")?(c=new Ql,c.h(e),d=d.getAsJspb(),G(c,Bl,2,d),"UNDEFINED_CSN"===e?fx("visualElementStateChanged",b,void 0,c):Ut(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?fx("visualElementStateChanged",b,c):a?Kt("visualElementStateChanged",c,a,b):mo("visualElementStateChanged",c,b)))}
function sx(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){tx(a,b,c);var f=vu(c.layer);if(f){for(var g=r(a.s),h=g.next();!h.done;h=g.next())h=h.value,qx(a,h[0],h[1]||f,c.layer);f=r(a.H);for(g=f.next();!g.done;g=f.next())g=g.value,rx(a,g[0],g[1])}};
xu(c.layer)||a.j();if(c.kd)for(var d=r(c.kd),e=d.next();!e.done;e=d.next())px(a,e.value,c.layer);else cu(Error("Delayed screen needs a data promise."))}
function tx(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Je?c.Je:c.layer;var e=xu(d);d=vu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=M("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=dx(a.client,b,f,c.jd,c.cttAuthInfo,g,c.Mt)}catch(p){fu(p,{Wt:b,rootVe:d,Tt:void 0,It:e,St:f,jd:c.jd});cu(p);return}Bu(k,b,c.layer,
c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!yu(e)&&ix(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");hw({clientScreenNonce:k},void 0,!1);nx();var m=vu(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&jx(k,m);a.i.delete(c.layer||0);a.j=void 0;var n;null==(n=a.v.get(c.layer))||n.forEach(function(p,v){p?qx(a,v,p,c.layer):m&&qx(a,v,m,c.layer)});
ux(a)}
function ux(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){cu(d)}}for(b=a.m.length=0;b<a.Z.length;b++){c=a.Z[b];try{c()}catch(d){cu(d)}}}
;function vx(){var a,b,c;return x(function(d){if(1==d.h)return a=Qs().resolve(Iw),a?w(d,Dw(a),2):(du(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return du(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Jt;return d.return(c)}du(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var wx=y.caches,xx;function yx(a){var b=a.indexOf(":");return-1===b?{Bd:a}:{Bd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function zx(){return x(function(a){if(void 0!==xx)return a.return(xx);xx=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),w(d,wx.open("test-only"),4);case 4:return w(d,wx.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(xx)})}
function Ax(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return w(k,zx(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return w(k,wx.keys(),3)}c=k.i;d=r(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=yx(f),h=g.datasyncId,!h||a.includes(h)||b.push(wx.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
function Bx(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return w(h,zx(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=bo("cache contains other");return w(h,wx.keys(),3)}b=h.i;c=r(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=yx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Cx(){try{return!!self.localStorage}catch(a){return!1}}
;function Dx(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ex(a){if(Cx()){var b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Dx(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Fx(){if(!Cx())return!1;var a=bo(),b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next())if(c=Dx(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Gx(){vx().then(function(a){a&&(zp(a),Ax(a),Ex(a))})}
function Hx(){var a=new Wr;qi.fa(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(P("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=bo("clear");if(b.startsWith("V")){var g=[b];zp(g);Ax(g);Ex(g);return f.return()}c=Fx();return w(f,Bx(),3);case 3:return d=f.i,w(f,Ap(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ma()?Gx():a.l.add("publicytnetworkstatus-online",Gx,!0,void 0,void 0),f.h=0}})})}
;var Wh=ia(["data-"]);function Ix(a){a&&(a.dataset?a.dataset[Jx("loaded")]="true":Vh(a))}
function Kx(a,b){return a?a.dataset?a.dataset[Jx(b)]:a.getAttribute("data-"+b):null}
var Lx={};function Jx(a){return Lx[a]||(Lx[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Mx=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Nx=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ox(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Mx,""),c=c.replace(Nx,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Px(a,b,c)}
function Px(a,b,c){c=void 0===c?null:c;var d=Qx(a),e=document.getElementById(d),f=e&&Kx(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Cs(d,b),b=""+Sa(b),Rx[b]=f),g||(e=Sx(a,d,function(){Kx(e,"loaded")||(Ix(e),Fs(d),Wm(Ya(Gs,d),0))},c)))}
function Sx(a,b,c,d){d=void 0===d?null:d;var e=rf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Yh(e,tk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Tx(a){a=Qx(a);var b=document.getElementById(a);b&&(Gs(a),b.parentNode.removeChild(b))}
function Ux(a,b){a&&b&&(a=""+Sa(b),(a=Rx[a])&&Es(a))}
function Qx(a){var b=document.createElement("a");ec(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+jc(a)}
var Rx={};var Vx=[],Wx=!1;function Xx(){if(!P("disable_biscotti_fetch_for_ad_blocker_detection")&&!P("disable_biscotti_fetch_entirely_for_all_web_clients")&&Nu()){var a=M("PLAYER_VARS",{});if("1"!=sb(a)&&!Ou(a)){var b=function(){Wx=!0;"google_ad_status"in window?tm("DCLKSTAT",1):tm("DCLKSTAT",2)};
try{Ox("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Vx.push(qi.fa(function(){if(!(Wx||"google_ad_status"in window)){try{Ux("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Wx=!0;tm("DCLKSTAT",3)}},5E3))}}}
function $x(){var a=Number(M("DCLKSTAT",0));return isNaN(a)?0:a}
;var ay=window,by,cy=P("web_enable_lifecycle_monitoring")&&(null==(by=ay.performance)?void 0:by.measure);function dy(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?$n():d;this.l=c;this.j=d;this.i=new Nh;this.h=a;a={};c=r(this.h.entries());for(d=c.next();!d.done;a={Bb:a.Bb,Rb:a.Rb},d=c.next()){var e=r(d.value);d=e.next().value;e=e.next().value;a.Rb=d;a.Bb=e;d=function(f){return function(){f.Bb.Fc();b.h[f.Rb].nc=!0;b.h.every(function(g){return!0===g.nc})&&b.i.resolve()}}(a);
e=Xn(d,ey(this,a.Bb));this.h[a.Rb]=Object.assign({},a.Bb,{Fc:d,jobId:e})}}
function fy(a){var b=Array.from(a.h.keys()).sort(function(d,e){return ey(a,a.h[e])-ey(a,a.h[d])});
b=r(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.j.Ca(c.jobId),Xn(c.Fc,10))}
dy.prototype.cancel=function(){for(var a=r(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.j.Ca(b.jobId),b.nc=!0;this.i.resolve()};
function ey(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function gy(a){this.state=a;this.plugins=[];this.j=void 0;cy&&window.performance.mark(this.state+"-start")}
gy.prototype.install=function(a){this.plugins.push(a);return this};
gy.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
gy.prototype.transition=function(a,b){var c=this;hy(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.K===a}):f.from===c.state&&f.K===a});
if(d){this.l&&(fy(this.l),this.l=void 0);iy(this,a,b);this.state=a;cy&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(jy(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function jy(a,b){return function(){var c=Ka.apply(0,arguments),d=b.filter(function(h){var k,m;return 10===(null!=(m=null!=(k=a.j)?k:h.priority)?m:0)}),e=b.filter(function(h){var k,m;
return 10!==(null!=(m=null!=(k=a.j)?k:h.priority)?m:0)});
$n();var f={};d=r(d);for(var g=d.next();!g.done;f={ob:f.ob},g=d.next())f.ob=g.value,Yn(function(h){return function(){var k=h.ob.name;cy&&k&&window.performance.mark(k+"-start");h.ob.callback.apply(h.ob,ja(c));ky(h.ob.name)}}(f));
e=e.map(function(h){var k,m;return{Fc:function(){var n=h.name;cy&&n&&window.performance.mark(n+"-start");h.callback.apply(h,ja(c));ky(h.name)},
priority:null!=(m=null!=(k=a.j)?k:h.priority)?m:0}});
e.length&&(a.l=new dy(e))}}
function hy(a){if(cy){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function ky(a){if(cy&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function iy(a,b,c){cy&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(gy.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function ly(a){gy.call(this,void 0===a?"document_active":a);var b=this;this.j=10;this.h=new Map;this.transitions=[{from:"document_active",K:"document_disposed_preventable",action:this.H},{from:"document_active",K:"document_disposed",action:this.m},{from:"document_disposed_preventable",K:"document_disposed",action:this.m},{from:"document_disposed_preventable",K:"flush_logs",action:this.s},{from:"document_disposed_preventable",K:"document_active",action:this.i},{from:"document_disposed",K:"flush_logs",
action:this.s},{from:"document_disposed",K:"document_active",action:this.i},{from:"document_disposed",K:"document_disposed",action:function(){}},
{from:"flush_logs",K:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
u(ly,gy);ly.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
ly.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
ly.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
ly.prototype.i=function(){this.h=new Map};function my(a){gy.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",K:"document_visible",action:this.i},{from:"document_visibility_unknown",K:"document_hidden",action:this.h},{from:"document_visibility_unknown",K:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",K:"document_backgrounded",action:this.m},{from:"document_visible",K:"document_hidden",action:this.h},{from:"document_visible",K:"document_foregrounded",
action:this.s},{from:"document_visible",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_hidden",action:this.h},{from:"document_foregrounded",K:"document_foregrounded",action:this.s},{from:"document_hidden",K:"document_visible",action:this.i},{from:"document_hidden",K:"document_backgrounded",action:this.m},{from:"document_hidden",K:"document_hidden",action:this.h},{from:"document_backgrounded",K:"document_hidden",
action:this.h},{from:"document_backgrounded",K:"document_backgrounded",action:this.m},{from:"document_backgrounded",K:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
P("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
u(my,gy);my.prototype.i=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
my.prototype.h=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
my.prototype.m=function(a,b){a(null==b?void 0:b.event)};
my.prototype.s=function(a,b){a(null==b?void 0:b.event)};function ny(){this.j=new ly;this.l=new my}
ny.prototype.install=function(){var a=Ka.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function oy(){ny.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
var py;u(oy,ny);oy.prototype.i=function(){if(P("web_fp_via_jspb")){var a=new Al,b=xu();b&&E(a,1,b);b=new bm;$d(b,Al,380,cm,a);Qt(b);P("web_fp_via_jspb_and_json")&&mo("finalPayload",{csn:xu()})}else mo("finalPayload",{csn:xu()})};
oy.prototype.h=function(){hu(iu)};function qy(){}
qy.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new qy,A("ytglobal.storage_",a));return a};
qy.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(ry()):d.return()})};
function ry(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",qy);function ko(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=wm("ytidb_transaction_ended_event_rate_limit_session",.2)}
ko.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":sy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=wm("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function sy(a,b){qy.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:ty(null==c?void 0:c.usage),deviceStorageQuotaMbytes:ty(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ty(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function uy(a,b,c){J.call(this);var d=this;c=c||M("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.R=!!a;this.N=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.R&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.s&&(!d.v||0<=fb(d.v,f.func))&&d.s(f.func,f.args,e.origin)}}};
this.v=this.j=this.s=null;window.addEventListener("message",this.N)}
u(uy,J);uy.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Gm(d)}}};
uy.prototype.L=function(){window.removeEventListener("message",this.N);J.prototype.L.call(this)};function vy(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new uy(!!M("WIDGET_ID_ENFORCE")),b=this.Le.bind(this);a.s=b;a.v=null;this.h.i="widget";if(a=M("WIDGET_ID"))this.h.sessionId=a}
l=vy.prototype;l.Le=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Vc(a,b,c)};
l.Vc=function(){};
l.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
l.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
l.addEventListener=function(){};
l.oe=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");gb(this.i,this.Id,this);this.i=[]};
l.Ac=function(){return null};
function wy(a,b){a.sendMessage("infoDelivery",b)}
l.Id=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Id({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var xy={},yy=(xy["api.invalidparam"]=2,xy.auth=150,xy["drm.auth"]=150,xy["heartbeat.net"]=150,xy["heartbeat.servererror"]=150,xy["heartbeat.stop"]=150,xy["html5.unsupportedads"]=5,xy["fmt.noneavailable"]=5,xy["fmt.decode"]=5,xy["fmt.unplayable"]=5,xy["html5.missingapi"]=5,xy["html5.unsupportedlive"]=5,xy["drm.unavailable"]=5,xy["mrm.blocked"]=151,xy);var zy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Ay(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function By(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=r(zy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Cy(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Dy(a){vy.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ve.bind(this));this.addEventListener("onVolumeChange",this.We.bind(this));this.addEventListener("onApiChange",this.Qe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Se.bind(this));this.addEventListener("onPlaybackRateChange",this.Te.bind(this));this.addEventListener("onStateChange",this.Ue.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xe.bind(this))}
u(Dy,vy);l=Dy.prototype;
l.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Ay(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=By(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=By(e);break;case "loadPlaylist":case "cuePlaylist":e=Cy(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Ay(a)&&wy(this,this.Ac())}};
l.Ec=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);vy.prototype.Ec.call(this,a,b)};
l.xc=function(a,b){var c=this,d=vy.prototype.xc.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
l.onReady=function(){var a=this.oe.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?yy[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());wy(this,a)};
l.Se=function(a){wy(this,{playbackQuality:a})};
l.Te=function(a){wy(this,{playbackRate:a})};
l.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.We=function(){wy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());wy(this,a)};
l.Xe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};wy(this,a)};
l.dispose=function(){vy.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Ey(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ed,this)}
u(Ey,J);l=Ey.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.lb("RECEIVING"))};
l.lb=function(a,b){this.started&&!this.h()&&this.connection.lb(a,b)};
l.Ed=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Fy(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Gy(a,c))&&this.lb(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.Re.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.Re=function(a,b){this.started&&!this.h()&&this.connection.lb(a,this.zc(a,b))};
l.zc=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.L=function(){var a=this.connection;a.h()||Oi(a.i,"command",this.Ed,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.L.call(this)};function Hy(a,b){Ey.call(this,b);this.api=a;this.start()}
u(Hy,Ey);Hy.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Hy.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Fy(a,b){switch(a){case "loadVideoById":return a=By(b),[a];case "cueVideoById":return a=By(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Cy(b),[a];case "cuePlaylist":return a=Cy(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Gy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Hy.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ey.prototype.zc.call(this,a,b)};
Hy.prototype.L=function(){Ey.prototype.L.call(this);delete this.api};function Iy(a){a=void 0===a?!1:a;J.call(this);this.i=new Ni(a);ye(this,this.i)}
Za(Iy,J);Iy.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Iy.prototype.m=function(a,b){this.h()||this.i.cb.apply(this.i,arguments)};function Jy(a,b,c){Iy.call(this);this.l=a;this.j=b;this.id=c}
u(Jy,Iy);Jy.prototype.lb=function(a,b){this.h()||this.l.lb(this.j,this.id,a,b)};
Jy.prototype.L=function(){this.j=this.l=null;Iy.prototype.L.call(this)};function Ky(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=qs(window,"message",this.l.bind(this));this.connection=new Jy(this,a,b);ye(this,this.connection)}
u(Ky,J);Ky.prototype.lb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Ky.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Ky.prototype.L=function(){rs(this.j);this.i=null;J.prototype.L.call(this)};function Ly(){this.state=1;this.h=null}
l=Ly.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript;Db("From proto message. b/166824318");d=d.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Ab();d=f?f.createScript(d):d;d=new Fb(d,Eb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Db("From proto message. b/166824318"),e=Jb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());My(this,d,e,
a.program,b,c)}else du(Error("Cannot initialize botguard without program"))};
function My(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Ox(c,function(){window[g]?Ny(a,d,g,e):(a.state=3,Tx(c),du(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=rf("SCRIPT"),b instanceof Fb?(b instanceof Fb&&b.constructor===Fb?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,Xh(f)):f.textContent=b,f.nonce=hc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Ny(a,d,g,e):(a.state=4,du(new Q("Unable to load Botguard from JS")))):du(new Q("Unable to load VM; no url or JS provided"))}
function Ny(a,b,c,d){a.state=5;try{var e=new Oh({program:b,se:c,Me:P("att_web_record_metrics")});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&du(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Qd({hd:a}):null};
l.dispose=function(){this.Wc()};
l.Wc=function(){this.Qc(null);this.state=8};
l.Tc=function(){return!!this.h};
l.Qd=function(a){return this.h.Kd(a)};
l.Qc=function(a){we(this.h);this.h=a};function Oy(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Py(){Ly.apply(this,arguments)}
u(Py,Ly);Py.prototype.Wc=function(){this.state=8};
Py.prototype.Qc=function(a){var b;null==(b=Oy())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Kd.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
Py.prototype.Tc=function(){return!!Oy()};
Py.prototype.Qd=function(a){return Oy().bgvmc(a)};var Qy=new Py;function Ry(){return Qy.Tc()}
function Sy(a){a=void 0===a?{}:a;return Qy.invoke(a)}
;function Ty(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ty.prototype.clone=function(){var a=new Ty,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=ub(c):a[b]=c}return a};var Uy=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Vy(a){a=a||"";if(window.spf){var b=a.match(Uy);spf.style.load(a,b?b[1]:"",void 0)}else Wy(a)}
function Wy(a){var b=Xy(a),c=document.getElementById(b),d=c&&Kx(c,"loaded");d||c&&!d||(c=Yy(a,b,function(){Kx(c,"loaded")||(Ix(c),Fs(b),Wm(Ya(Gs,b),0))}))}
function Yy(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=tk(a);fc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Xy(a){var b=rf("A");ec(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+jc(a)}
;function Zy(){J.call(this);this.i=[]}
u(Zy,J);Zy.prototype.L=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.L.call(this)};function $y(){Zy.apply(this,arguments)}
u($y,Zy);function az(a,b,c,d,e){J.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Vb=e;this.Aa=!1;this.api={};this.oa=this.s=null;this.V=new Ni;this.i={};this.aa=this.qa=this.elementId=this.eb=this.config=null;this.Y=!1;this.l=this.N=null;this.Qa={};this.Wb=["onReady"];this.lastError=null;this.Db=NaN;this.R={};this.Xb=new $y(this);this.ia=0;this.j=this.m=a;ye(this,this.V);bz(this);cz(this);ye(this,this.Xb);c?this.ia=Wm(function(){f.loadNewVideoConfig(c)},0):d&&(dz(this),ez(this))}
u(az,J);l=az.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.h()){this.ia&&(window.clearTimeout(this.ia),this.ia=0);var b=a||{};b instanceof Ty||(b=new Ty(b));this.config=b;this.setConfig(a);ez(this);this.isReady()&&fz(this)}};
function dz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.eb=a;this.config=gz(a);dz(this);if(!this.qa){var b;this.qa=hz(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=hi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=hi(Number(a)||a))};
function fz(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function iz(a){var b=!0,c=jz(a);c&&a.config&&(a=kz(a),b=Kx(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function ez(a){if(!a.h()&&!a.Y){var b=iz(a);if(b&&"html5"===(jz(a)?"html5":null))a.aa="html5",a.isReady()||lz(a);else if(mz(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),lz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.N=function(){c=!0;var d=nz(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?gz(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Vb);lz(a)};
a.Y=!0;b?a.N():(Ox(kz(a),a.N),(b=oz(a))&&Vy(b),pz(a)&&!c&&A("yt.player.Application.create",null))}}}
function jz(a){var b=qf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function lz(a){if(!a.h()){var b=jz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!nz(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}qz(a)}else a.Db=Wm(function(){lz(a)},50)}}
function qz(a){bz(a);a.Aa=!0;var b=jz(a);if(b){a.s=rz(a,b,"addEventListener");a.oa=rz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=rz(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);fz(a);a.qa&&a.qa(a.api);a.V.cb("onReady",a.api)}
function rz(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,du(f))}}}
function bz(a){a.Aa=!1;if(a.oa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.oa(b,a.i[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.eb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Aa};
function cz(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Fs("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Fs("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=hz(this,b);d&&(0<=fb(this.Wb,a)||this.i[a]||(b=sz(this,a),this.s&&this.s(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&Wm(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=hz(this,b))&&Oi(this.V,a,b)};
function hz(a,b){var c=b;if("string"===typeof b){if(a.Qa[b])return a.Qa[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){cu(f)}};
a.Qa[b]=c}return c?c:null}
function sz(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;y[c]=function(d){var e=Wm(function(){if(!a.h()){try{a.V.cb(b,null!=d?d:void 0)}catch(h){du(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
rb(a.R,String(e))};
return c}
l.getPlayerType=function(){return this.aa||(jz(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function mz(a){a.cancel();bz(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=jz(a);b&&(iz(a)||!pz(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.N&&Ux(kz(this),this.N);window.clearTimeout(this.Db);this.Y=!1};
l.L=function(){mz(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){cu(b)}this.Qa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.eb=this.config=this.api=null;delete this.m;delete this.j;J.prototype.L.call(this)};
function pz(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function kz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function oz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function nz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Jm(c||"","&")[b]}
function gz(a){for(var b={},c=r(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var tz={},uz="player_uid_"+(1E9*Math.random()>>>0);function vz(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?qf(c):c;var e=uz+"_"+Sa(c),f=tz[e];if(f&&d)return wz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new az(c,e,a,b,void 0);tz[e]=f;Fs("player-added",f.api);ze(f,function(){delete tz[f.getId()]});
return f.api}
function wz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var xz=null,yz=null,zz=null;function Az(){Bz()}
function Cz(){Bz()}
function Bz(){var a=xz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Dz(){xz&&xz.sendAbandonmentPing&&xz.sendAbandonmentPing();M("PL_ATT")&&Qy.dispose();for(var a=qi,b=0,c=Vx.length;b<c;b++)a.Ca(Vx[b]);Vx.length=0;Tx("//static.doubleclick.net/instream/ad_status.js");Wx=!1;tm("DCLKSTAT",0);xe(zz,yz);xz&&(xz.removeEventListener("onVideoDataChange",Az),xz.destroy())}
;function Ez(a,b,c){a="ST-"+jc(a).toString(36);b=b?uc(b):"";c=c||5;Nu()&&Fn(a,b,c)}
;function Fz(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=pc(window.location.href);g&&f.push(g);g=pc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),ec(f,d),d=f.href),d&&(d=qc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:xu()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Ez(d,b,h)}else Ez(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=wc(a,k)+m;var p=void 0===p?ai:p;a:{p=void 0===p?ai:p;for(k=0;k<p.length;++k)if(m=p[k],m instanceof Zh&&m.Ae(a)){p=new Mb(a,Nb);break a}p=void 0}p=p||Tb;if(p instanceof Mb)var v=Ob(p);else{b:if(Rh){try{v=new URL(p)}catch(t){v="https:";break b}v=v.protocol}else c:{v=document.createElement("a");try{v.href=p}catch(t){v=void 0;break c}v=
v.protocol;v=":"===v||""===v?"https:":v}v="javascript:"!==v?p:void 0}void 0!==v&&(c.href=v)}return!0}
;A("yt.setConfig",tm);A("yt.config.set",tm);A("yt.setMsg",Du);A("yt.msgs.set",Du);A("yt.logging.errors.log",cu);
A("writeEmbed",function(){var a=M("PLAYER_CONFIG");if(!a){var b=M("PLAYER_VARS");b&&(a={args:b})}Xu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=M("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);uw("embed",["ol"]);c=M("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Om(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;P("embeds_web_enable_watch_on_autoplay")&&(null==(e=a.args)?0:e.autoplay)&&uw("watch",["pbs","pbu","pbp"]);xz=vz(a,c);xz.addEventListener("onVideoDataChange",Az);xz.addEventListener("onReady",Cz);a=M("POST_MESSAGE_ID","player");M("ENABLE_JS_API")?zz=new Dy(xz):M("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(yz=new Ky(window.parent,a,b),zz=new Hy(xz,yz.connection));Xx();P("ytidb_create_logger_embed_killswitch")||
P("embeds_web_disable_nwl")||jo();a={};py||(py=new oy);py.install((a.flush_logs={callback:function(){rt()}},a));
P("embeds_web_disable_nwl")||gs();P("ytidb_clear_embedded_player")&&qi.fa(function(){var f,g;if(!Xw){var h=Qs(),k={Nc:Ww,Od:Vw};h.h.set(k.Nc,k);k={gd:{feedbackEndpoint:hv(Rw),modifyChannelNotificationPreferenceEndpoint:hv(Sw),playlistEditEndpoint:hv(Tw),subscribeEndpoint:hv(Pw),unsubscribeEndpoint:hv(Qw),webPlayerShareEntityServiceEndpoint:hv(Uw)}};var m=dv.getInstance(),n={};m&&(n.client_location=m);void 0===f&&(f=An());void 0===g&&(g=h.resolve(Ww));Cw(k,g,f,n);f={Nc:Iw,Pd:Bw.h};h.h.set(f.Nc,f);
Xw=h.resolve(Iw)}Hx()})});
var Gz=Em(function(){xw();Yu();if(!P("embeds_web_enable_ve_logging_unification")){ox.h||(ox.h=new ox);var a=ox.h;var b=16623;var c=void 0===c?{}:c;Object.values(Eu).includes(b)||(du(new Q("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.s=[];a.H=[];c.kd?sx(a,b,c):tx(a,b,c)}}),Hz=Em(function(a){a.persisted||(xw(),Yu())}),Iz=Em(function(a){P("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Dz():a.persisted||Dz()}),
Jz=Em(Dz);
window.addEventListener?(window.addEventListener("load",Gz),window.addEventListener("pageshow",Hz),window.addEventListener("pagehide",Iz)):window.attachEvent&&(window.attachEvent("onload",Gz),window.attachEvent("onunload",Jz));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Ry);A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Sy);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||$x);
A("yt.player.exports.navigate",B("yt.player.exports.navigate")||Fz);A("yt.util.activity.init",B("yt.util.activity.init")||us);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||xs);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||vs);}).call(this);
