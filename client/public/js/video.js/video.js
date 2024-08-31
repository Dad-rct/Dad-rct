/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../js/producer/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/videoEffects/VideoEffects.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mediapipe/face_mesh/face_mesh.js":
/*!********************************************************!*\
  !*** ./node_modules/@mediapipe/face_mesh/face_mesh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var v;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var G=ca(this);function J(a,b){if(b)a:{var c=G;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
J("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}function c(g,f){this.g=g;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
J("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=G[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function K(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function L(a){if(!(a instanceof Array)){a=K(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa;
function M(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ea=b.prototype}function ma(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null}function na(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}ma.prototype.o=function(a){this.h=a};
function oa(a,b){a.j={U:b,V:!0};a.g=a.m||a.s}ma.prototype.return=function(a){this.j={return:a};this.g=this.s};function N(a,b,c){a.g=c;return{value:b}}function pa(a){this.g=new ma;this.h=a}function qa(a,b){na(a.g);var c=a.g.i;if(c)return ra(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return sa(a)}
function ra(a,b,c,d){try{var e=b.call(a.g.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.l=!1,e;var g=e.value}catch(f){return a.g.i=null,oa(a.g,f),sa(a)}a.g.i=null;d.call(a.g,g);return sa(a)}function sa(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,oa(a.g,c)}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.V)throw b.U;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ta(a){this.next=function(b){na(a.g);a.g.i?b=ra(a,a.g.i.next,b,a.g.o):(a.g.o(b),b=sa(a));return b};this.throw=function(b){na(a.g);a.g.i?b=ra(a,a.g.i["throw"],b,a.g.o):(oa(a.g,b),b=sa(a));return b};this.return=function(b){return qa(a,b)};this[Symbol.iterator]=function(){return this}}function O(a,b){b=new ta(new pa(b));ka&&a.prototype&&ka(b,a.prototype);return b}
function ua(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};J("Object.assign",function(a){return a||va});
J("Promise",function(a){function b(f){this.h=0;this.i=void 0;this.g=[];this.o=!1;var h=this.j();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(f){return f instanceof b?f:new b(function(h){h(f)})}if(a)return a;c.prototype.h=function(f){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(f)};var e=G.setTimeout;c.prototype.i=function(f){e(f,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var h=0;h<f.length;++h){var k=
f[h];f[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(f){this.i(function(){throw f;})};b.prototype.j=function(){function f(l){return function(n){k||(k=!0,l.call(h,n))}}var h=this,k=!1;return{resolve:f(this.C),reject:f(this.l)}};b.prototype.C=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.F(f);else{a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1}h?this.u(f):this.m(f)}};
b.prototype.u=function(f){var h=void 0;try{h=f.then}catch(k){this.l(k);return}"function"==typeof h?this.G(h,f):this.m(f)};b.prototype.l=function(f){this.s(2,f)};b.prototype.m=function(f){this.s(1,f)};b.prototype.s=function(f,h){if(0!=this.h)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.i=h;2===this.h&&this.D();this.A()};b.prototype.D=function(){var f=this;e(function(){if(f.B()){var h=G.console;"undefined"!==typeof h&&h.error(f.i)}},1)};b.prototype.B=
function(){if(this.o)return!1;var f=G.CustomEvent,h=G.Event,k=G.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=G.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return k(f)};b.prototype.A=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null}};var g=new c;b.prototype.F=
function(f){var h=this.j();f.J(h.resolve,h.reject)};b.prototype.G=function(f,h){var k=this.j();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(f,h){function k(w,r){return"function"==typeof w?function(y){try{l(w(y))}catch(m){n(m)}}:r}var l,n,u=new b(function(w,r){l=w;n=r});this.J(k(f,l),k(h,n));return u};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.J=function(f,h){function k(){switch(l.h){case 1:f(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.o=!0};b.resolve=d;b.reject=function(f){return new b(function(h,k){k(f)})};b.race=function(f){return new b(function(h,k){for(var l=K(f),n=l.next();!n.done;n=l.next())d(n.value).J(h,k)})};b.all=function(f){var h=K(f),k=h.next();return k.done?d([]):new b(function(l,n){function u(y){return function(m){w[y]=m;r--;0==r&&l(w)}}var w=[],r=0;do w.push(void 0),r++,d(k.value).J(u(w.length-1),n),k=h.next();while(!k.done)})};return b});
J("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});J("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
J("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});J("Array.prototype.keys",function(a){return a?a:function(){return ua(this,function(b){return b})}});var wa=this||self;
function P(a,b){a=a.split(".");var c=wa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function xa(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}var ya,za="undefined"!==typeof TextDecoder,Aa,Ba="undefined"!==typeof TextEncoder;
function Ca(a){if(Ba)a=(Aa||(Aa=new TextEncoder)).encode(a);else{var b=void 0;b=void 0===b?!1:b;for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var g=a.charCodeAt(e);if(128>g)d[c++]=g;else{if(2048>g)d[c++]=g>>6|192;else{if(55296<=g&&57343>=g){if(56319>=g&&e<a.length){var f=a.charCodeAt(++e);if(56320<=f&&57343>=f){g=1024*(g-55296)+f-56320+65536;d[c++]=g>>18|240;d[c++]=g>>12&63|128;d[c++]=g>>6&63|128;d[c++]=g&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");g=65533}d[c++]=
g>>12|224;d[c++]=g>>6&63|128}d[c++]=g&63|128}}a=d.subarray(0,c)}return a};var Da={},Ea=null;function Fa(a,b){void 0===b&&(b=0);Ga();b=Da[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,g=0;e<a.length-2;e+=3){var f=a[e],h=a[e+1],k=a[e+2],l=b[f>>2];f=b[(f&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[g++]=l+f+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[g]=b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ha(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ia(a,function(g){d[e++]=g});return d.subarray(0,e)}
function Ia(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ea[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ga();for(var d=0;;){var e=c(-1),g=c(0),f=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|g>>4);64!=f&&(b(g<<4&240|f>>2),64!=h&&b(f<<6&192|h))}}
function Ga(){if(!Ea){Ea={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Da[c]=d;for(var e=0;e<d.length;e++){var g=d[e];void 0===Ea[g]&&(Ea[g]=e)}}}};var Ja="function"===typeof Uint8Array.prototype.slice,Ka;function La(a,b,c){return b===c?Ka||(Ka=new Uint8Array(0)):Ja?a.slice(b,c):new Uint8Array(a.subarray(b,c))}var Q=0,R=0;function Ma(a,b){b=void 0===b?{}:b;b=void 0===b.v?!1:b.v;this.h=null;this.g=this.j=this.l=0;this.m=!1;this.v=b;a&&Na(this,a)}function Na(a,b){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?Ha(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.h=b;a.l=0;a.j=a.h.length;a.g=a.l}Ma.prototype.reset=function(){this.g=this.l};
function Oa(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=a.h[a.g++],c|=(b&127)<<7*e;128<=b&&(b=a.h[a.g++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=a.h[a.g++],d|=(b&127)<<7*e+3;if(128>b){a=c>>>0;b=d>>>0;if(d=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);return d?-a:a}a.m=!0}
Ma.prototype.i=function(){var a=this.h,b=a[this.g],c=b&127;if(128>b)return this.g+=1,c;b=a[this.g+1];c|=(b&127)<<7;if(128>b)return this.g+=2,c;b=a[this.g+2];c|=(b&127)<<14;if(128>b)return this.g+=3,c;b=a[this.g+3];c|=(b&127)<<21;if(128>b)return this.g+=4,c;b=a[this.g+4];c|=(b&15)<<28;if(128>b)return this.g+=5,c>>>0;this.g+=5;128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&128<=a[this.g++]&&this.g++;return c};
Ma.prototype.o=function(){var a=this.h[this.g],b=this.h[this.g+1];var c=this.h[this.g+2];var d=this.h[this.g+3];this.g+=4;c=(a<<0|b<<8|c<<16|d<<24)>>>0;a=2*(c>>31)+1;b=c>>>23&255;c&=8388607;return 255==b?c?NaN:Infinity*a:0==b?a*Math.pow(2,-149)*c:a*Math.pow(2,b-150)*(c+Math.pow(2,23))};var Pa=[];function Qa(){this.g=new Uint8Array(64);this.h=0}Qa.prototype.push=function(a){if(!(this.h+1<this.g.length)){var b=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length));this.g.set(b)}this.g[this.h++]=a};Qa.prototype.length=function(){return this.h};Qa.prototype.end=function(){var a=this.g,b=this.h;this.h=0;return La(a,0,b)};function Ra(a,b){for(;127<b;)a.push(b&127|128),b>>>=7;a.push(b)};function Sa(a){var b={},c=void 0===b.N?!1:b.N;this.o={v:void 0===b.v?!1:b.v};this.N=c;b=this.o;Pa.length?(c=Pa.pop(),b&&(c.v=b.v),a&&Na(c,a),a=c):a=new Ma(a,b);this.g=a;this.m=this.g.g;this.h=this.i=this.l=-1;this.j=!1}Sa.prototype.reset=function(){this.g.reset();this.h=this.l=-1};function S(a){var b=a.g;(b=b.g==b.j)||(b=a.j)||(b=a.g,b=b.m||0>b.g||b.g>b.j);if(b)return!1;a.m=a.g.g;b=a.g.i();var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.j=!0,!1;a.i=b;a.l=b>>>3;a.h=c;return!0}
function Ta(a){switch(a.h){case 0:if(0!=a.h)Ta(a);else{for(a=a.g;a.h[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.h?Ta(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.h)Ta(a);else{var b=a.g.i();a=a.g;a.g+=b}break;case 5:5!=a.h?Ta(a):(a=a.g,a.g+=4);break;case 3:b=a.l;do{if(!S(a)){a.j=!0;break}if(4==a.h){a.l!=b&&(a.j=!0);break}Ta(a)}while(1);break;default:a.j=!0}}
function Ua(a,b,c){var d=a.g.j,e=a.g.i(),g=a.g.g+e;a.g.j=g;c(b,a);c=g-a.g.g;if(0!==c)throw Error("Message parsing ended unexpectedly. Expected to read "+e+" bytes, instead read "+(e-c)+" bytes, either the data ended unexpectedly or the message misreported its own length");a.g.g=g;a.g.j=d;return b}function T(a){return a.g.o()}
function Va(a){var b=a.g.i();a=a.g;var c=a.g;a.g+=b;a=a.h;var d;if(za)(d=ya)||(d=ya=new TextDecoder("utf-8",{fatal:!1})),d=d.decode(a.subarray(c,c+b));else{b=c+b;for(var e=[],g=null,f,h,k;c<b;)f=a[c++],128>f?e.push(f):224>f?c>=b?e.push(65533):(h=a[c++],194>f||128!==(h&192)?(c--,e.push(65533)):e.push((f&31)<<6|h&63)):240>f?c>=b-1?e.push(65533):(h=a[c++],128!==(h&192)||224===f&&160>h||237===f&&160<=h||128!==((d=a[c++])&192)?(c--,e.push(65533)):e.push((f&15)<<12|(h&63)<<6|d&63)):244>=f?c>=b-2?e.push(65533):
(h=a[c++],128!==(h&192)||0!==(f<<28)+(h-144)>>30||128!==((d=a[c++])&192)||128!==((k=a[c++])&192)?(c--,e.push(65533)):(f=(f&7)<<18|(h&63)<<12|(d&63)<<6|k&63,f-=65536,e.push((f>>10&1023)+55296,(f&1023)+56320))):e.push(65533),8192<=e.length&&(g=xa(g,e),e.length=0);d=xa(g,e)}return d}function Wa(a,b,c){var d=a.g.i();for(d=a.g.g+d;a.g.g<d;)c.push(b.call(a.g))}function Xa(a,b){2==a.h?Wa(a,Ma.prototype.o,b):b.push(T(a))};function Ya(){this.h=[];this.i=0;this.g=new Qa}function Za(a,b){0!==b.length&&(a.h.push(b),a.i+=b.length)}function $a(a){var b=a.i+a.g.length();if(0===b)return new Uint8Array(0);b=new Uint8Array(b);for(var c=a.h,d=c.length,e=0,g=0;g<d;g++){var f=c[g];0!==f.length&&(b.set(f,e),e+=f.length)}c=a.g;d=c.h;0!==d&&(b.set(c.g.subarray(0,d),e),c.h=0);a.h=[b];return b}
function U(a,b,c){if(null!=c){Ra(a.g,8*b+5);a=a.g;var d=c;d=(c=0>d?1:0)?-d:d;0===d?0<1/d?Q=R=0:(R=0,Q=2147483648):isNaN(d)?(R=0,Q=2147483647):3.4028234663852886E38<d?(R=0,Q=(c<<31|2139095040)>>>0):1.1754943508222875E-38>d?(d=Math.round(d/Math.pow(2,-149)),R=0,Q=(c<<31|d)>>>0):(b=Math.floor(Math.log(d)/Math.LN2),d*=Math.pow(2,-b),d=Math.round(8388608*d),16777216<=d&&++b,R=0,Q=(c<<31|b+127<<23|d&8388607)>>>0);c=Q;a.push(c>>>0&255);a.push(c>>>8&255);a.push(c>>>16&255);a.push(c>>>24&255)}};var ab="function"===typeof Uint8Array;function bb(a,b,c){if(null!=a)return"object"===typeof a?ab&&a instanceof Uint8Array?c(a):cb(a,b,c):b(a)}function cb(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),e=0;e<a.length;e++)d[e]=bb(a[e],b,c);Array.isArray(a)&&a.W&&db(d);return d}d={};for(e in a)d[e]=bb(a[e],b,c);return d}function eb(a){return"number"===typeof a?isFinite(a)?a:String(a):a}var fb={W:{value:!0,configurable:!0}};
function db(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,fb);return a};var gb;function V(a,b,c){var d=gb;gb=null;a||(a=d);d=this.constructor.ca;a||(a=d?[d]:[]);this.j=d?0:-1;this.m=this.g=null;this.h=a;a:{d=this.h.length;a=d-1;if(d&&(d=this.h[a],!(null===d||"object"!=typeof d||Array.isArray(d)||ab&&d instanceof Uint8Array))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.h[a])?db(d):this.h[a]=hb):(ib(this),(d=this.i[a])?db(d):this.i[a]=hb)}
var hb=Object.freeze(db([]));function ib(a){var b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})}function W(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.l?a.i?a.i[b]:void 0:a.h[b+a.j]}function jb(a,b){var c=void 0===c?!1:c;var d=W(a,b,c);null==d&&(d=hb);d===hb&&(d=db([]),X(a,b,d,c));return d}function kb(a){var b=jb(a,3);a.m||(a.m={});if(!a.m[3]){for(var c=0;c<b.length;c++)b[c]=+b[c];a.m[3]=!0}return b}function lb(a,b,c){a=W(a,b);return null==a?c:a}
function Y(a,b,c){a=W(a,b);a=null==a?a:+a;return null==a?void 0===c?0:c:a}function X(a,b,c,d){(void 0===d?0:d)||b>=a.l?(ib(a),a.i[b]=c):a.h[b+a.j]=c}function mb(a,b,c){if(-1===c)return null;a.g||(a.g={});if(!a.g[c]){var d=W(a,c,!1);d&&(a.g[c]=new b(d))}return a.g[c]}function nb(a,b){a.g||(a.g={});var c=a.g[1];if(!c){var d=jb(a,1);c=[];for(var e=0;e<d.length;e++)c[e]=new b(d[e]);a.g[1]=c}return c}function ob(a,b,c){var d=void 0===d?!1:d;a.g||(a.g={});var e=c?pb(c,!1):c;a.g[b]=c;X(a,b,e,d)}
function qb(a,b,c,d){var e=nb(a,c);b=b?b:new c;a=jb(a,1);void 0!=d?(e.splice(d,0,b),a.splice(d,0,pb(b,!1))):(e.push(b),a.push(pb(b,!1)))}V.prototype.toJSON=function(){var a=pb(this,!1);return cb(a,eb,Fa)};function pb(a,b){if(a.g)for(var c in a.g){var d=a.g[c];if(Array.isArray(d))for(var e=0;e<d.length;e++)d[e]&&pb(d[e],b);else d&&pb(d,b)}return a.h}V.prototype.toString=function(){return pb(this,!1).toString()};function rb(a,b){if(a=a.o){Za(b,b.g.end());for(var c=0;c<a.length;c++)Za(b,a[c])}}function sb(a,b){if(4==b.h)return!1;var c=b.m;Ta(b);b.N||(b=La(b.g.h,c,b.g.g),(c=a.o)?c.push(b):a.o=[b]);return!0};function tb(a){V.call(this,a,-1,ub)}M(tb,V);tb.prototype.getRows=function(){return W(this,1)};tb.prototype.getCols=function(){return W(this,2)};tb.prototype.getPackedDataList=function(){return kb(this)};tb.prototype.getLayout=function(){return lb(this,4,0)};function vb(a,b){for(;S(b);)switch(b.i){case 8:var c=b.g.i();X(a,1,c);break;case 16:c=b.g.i();X(a,2,c);break;case 29:case 26:Xa(b,a.getPackedDataList());break;case 32:c=Oa(b.g);X(a,4,c);break;default:if(!sb(a,b))return a}return a}var ub=[3];function Z(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function g(k){try{h(b.next(k))}catch(l){e(l)}}function f(k){try{h(b["throw"](k))}catch(l){e(l)}}function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(g,f)}h((b=b.apply(a,void 0)).next())})};function wb(a){V.call(this,a)}M(wb,V);function xb(a,b){for(;S(b);)switch(b.i){case 8:var c=b.g.i();X(a,1,c);break;case 21:c=T(b);X(a,2,c);break;case 26:c=Va(b);X(a,3,c);break;case 34:c=Va(b);X(a,4,c);break;default:if(!sb(a,b))return a}return a};function yb(a){V.call(this,a,-1,zb)}M(yb,V);yb.prototype.addClassification=function(a,b){qb(this,a,wb,b);return this};var zb=[1];function Ab(a){V.call(this,a)}M(Ab,V);function Bb(a,b){for(;S(b);)switch(b.i){case 13:var c=T(b);X(a,1,c);break;case 21:c=T(b);X(a,2,c);break;case 29:c=T(b);X(a,3,c);break;case 37:c=T(b);X(a,4,c);break;case 45:c=T(b);X(a,5,c);break;default:if(!sb(a,b))return a}return a};function Cb(a){V.call(this,a,-1,Db)}M(Cb,V);function Eb(a){a:{var b=new Cb;for(a=new Sa(a);S(a);)switch(a.i){case 10:var c=Ua(a,new Ab,Bb);qb(b,c,Ab,void 0);break;default:if(!sb(b,a))break a}}return b}var Db=[1];function Fb(a){V.call(this,a)}M(Fb,V);function Gb(a){V.call(this,a,-1,Hb)}M(Gb,V);Gb.prototype.getVertexType=function(){return lb(this,1,0)};Gb.prototype.getPrimitiveType=function(){return lb(this,2,0)};Gb.prototype.getVertexBufferList=function(){return kb(this)};Gb.prototype.getIndexBufferList=function(){return jb(this,4)};
function Ib(a,b){for(;S(b);)switch(b.i){case 8:var c=Oa(b.g);X(a,1,c);break;case 16:c=Oa(b.g);X(a,2,c);break;case 29:case 26:Xa(b,a.getVertexBufferList());break;case 32:case 34:c=b;var d=a.getIndexBufferList();2==c.h?Wa(c,Ma.prototype.i,d):d.push(c.g.i());break;default:if(!sb(a,b))return a}return a}var Hb=[3,4];function Jb(a){V.call(this,a)}M(Jb,V);Jb.prototype.getMesh=function(){return mb(this,Gb,1)};Jb.prototype.getPoseTransformMatrix=function(){return mb(this,tb,2)};function Kb(a){a:{var b=new Jb;for(a=new Sa(a);S(a);)switch(a.i){case 10:var c=Ua(a,new Gb,Ib);ob(b,1,c);break;case 18:c=Ua(a,new tb,vb);ob(b,2,c);break;default:if(!sb(b,a))break a}}return b};function Lb(a,b,c){c=a.createShader(0===c?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(c));return c};function Mb(a){return nb(a,wb).map(function(b){return{index:lb(b,1,0),Y:Y(b,2),label:null!=W(b,3)?lb(b,3,""):void 0,displayName:null!=W(b,4)?lb(b,4,""):void 0}})};function Nb(a){return{x:Y(a,1),y:Y(a,2),z:Y(a,3),visibility:null!=W(a,4)?Y(a,4):void 0}};function Ob(a,b){this.h=a;this.g=b;this.l=0}
function Pb(a,b,c){Qb(a,b);if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(c)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.i&&(a.i=document.createElement("canvas"));return new Promise(function(d){a.i.height=a.g.canvas.height;a.i.width=a.g.canvas.width;a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height);d(a.i)})}
function Qb(a,b){var c=a.g;if(void 0===a.m){var d=Lb(c,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),e=Lb(c,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,e);c.linkProgram(g);if(!c.getProgramParameter(g,c.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
c.getProgramInfoLog(g));d=a.m=g;c.useProgram(d);e=c.getUniformLocation(d,"sampler0");a.j={I:c.getAttribLocation(d,"aVertex"),H:c.getAttribLocation(d,"aTex"),da:e};a.s=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.s);c.enableVertexAttribArray(a.j.I);c.vertexAttribPointer(a.j.I,2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);a.o=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.o);c.enableVertexAttribArray(a.j.H);c.vertexAttribPointer(a.j.H,
2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);c.uniform1i(e,0)}d=a.j;c.useProgram(a.m);c.canvas.width=b.width;c.canvas.height=b.height;c.viewport(0,0,b.width,b.height);c.activeTexture(c.TEXTURE0);a.h.bindTexture2d(b.glName);c.enableVertexAttribArray(d.I);c.bindBuffer(c.ARRAY_BUFFER,a.s);c.vertexAttribPointer(d.I,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,a.o);c.vertexAttribPointer(d.H,
2,c.FLOAT,!1,0,0);c.bindFramebuffer(c.DRAW_FRAMEBUFFER?c.DRAW_FRAMEBUFFER:c.FRAMEBUFFER,null);c.clearColor(0,0,0,0);c.clear(c.COLOR_BUFFER_BIT);c.colorMask(!0,!0,!0,!0);c.drawArrays(c.TRIANGLE_FAN,0,4);c.disableVertexAttribArray(d.I);c.disableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,null);a.h.bindTexture2d(0)}function Rb(a){this.g=a};var Sb=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Tb(a,b){return b+a}function Ub(a,b){window[a]=b}function Vb(a){var b=document.createElement("script");b.setAttribute("src",a);b.setAttribute("crossorigin","anonymous");return new Promise(function(c){b.addEventListener("load",function(){c()},!1);b.addEventListener("error",function(){c()},!1);document.body.appendChild(b)})}
function Wb(){return Z(this,function b(){return O(b,function(c){switch(c.g){case 1:return c.m=2,N(c,WebAssembly.instantiate(Sb),4);case 4:c.g=3;c.m=0;break;case 2:return c.m=0,c.j=null,c.return(!1);case 3:return c.return(!0)}})})}
function Xb(a){this.g=a;this.listeners={};this.j={};this.F={};this.m={};this.s={};this.G=this.o=this.R=!0;this.C=Promise.resolve();this.P="";this.B={};this.locateFile=a&&a.locateFile||Tb;if("object"===typeof window)var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
this.S=b;if(a.options){b=K(Object.keys(a.options));for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.options[c].default;void 0!==d&&(this.j[c]="function"===typeof d?d():d)}}}v=Xb.prototype;v.close=function(){this.i&&this.i.delete();return Promise.resolve()};function Yb(a,b){return void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(b):a.g.files}
function Zb(a){return Z(a,function c(){var d=this,e,g,f,h,k,l,n,u,w,r,y;return O(c,function(m){switch(m.g){case 1:e=d;if(!d.R)return m.return();g=Yb(d,d.j);return N(m,Wb(),2);case 2:f=m.h;if("object"===typeof window)return Ub("createMediapipeSolutionsWasm",{locateFile:d.locateFile}),Ub("createMediapipeSolutionsPackedAssets",{locateFile:d.locateFile}),l=g.filter(function(t){return void 0!==t.data}),n=g.filter(function(t){return void 0===t.data}),u=Promise.all(l.map(function(t){var x=$b(e,t.url);if(void 0!==
t.path){var z=t.path;x=x.then(function(E){e.overrideFile(z,E);return Promise.resolve(E)})}return x})),w=Promise.all(n.map(function(t){return void 0===t.simd||t.simd&&f||!t.simd&&!f?Vb(e.locateFile(t.url,e.S)):Promise.resolve()})).then(function(){return Z(e,function x(){var z,E,F=this;return O(x,function(I){if(1==I.g)return z=window.createMediapipeSolutionsWasm,E=window.createMediapipeSolutionsPackedAssets,N(I,z(E),2);F.h=I.h;I.g=0})})}),r=function(){return Z(e,function x(){var z=this;return O(x,function(E){z.g.graph&&
z.g.graph.url?E=N(E,$b(z,z.g.graph.url),0):(E.g=0,E=void 0);return E})})}(),N(m,Promise.all([w,u,r]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");h=g.filter(function(t){return void 0===t.simd||t.simd&&f||!t.simd&&!f}).map(function(t){return e.locateFile(t.url,e.S)});importScripts.apply(null,L(h));return N(m,createMediapipeSolutionsWasm(Module),6);case 6:d.h=m.h;d.l=new OffscreenCanvas(1,1);d.h.canvas=d.l;k=d.h.GL.createContext(d.l,
{antialias:!1,alpha:!1,ba:"undefined"!==typeof WebGL2RenderingContext?2:1});d.h.GL.makeContextCurrent(k);m.g=4;break;case 7:d.l=document.createElement("canvas");y=d.l.getContext("webgl2",{});if(!y&&(y=d.l.getContext("webgl",{}),!y))return alert("Failed to create WebGL canvas context when passing video frame."),m.return();d.D=y;d.h.canvas=d.l;d.h.createContext(d.l,!0,!0,{});case 4:d.i=new d.h.SolutionWasm,d.R=!1,m.g=0}})})}
function ac(a){return Z(a,function c(){var d=this,e,g,f,h,k,l,n,u;return O(c,function(w){if(1==w.g){if(d.g.graph&&d.g.graph.url&&d.P===d.g.graph.url)return w.return();d.o=!0;if(!d.g.graph||!d.g.graph.url){w.g=2;return}d.P=d.g.graph.url;return N(w,$b(d,d.g.graph.url),3)}2!=w.g&&(e=w.h,d.i.loadGraph(e));g=K(Object.keys(d.B));for(f=g.next();!f.done;f=g.next())h=f.value,d.i.overrideFile(h,d.B[h]);d.B={};if(d.g.listeners)for(k=K(d.g.listeners),l=k.next();!l.done;l=k.next())n=l.value,bc(d,n);u=d.j;d.j=
{};d.setOptions(u);w.g=0})})}v.reset=function(){return Z(this,function b(){var c=this;return O(b,function(d){c.i&&(c.i.reset(),c.m={},c.s={});d.g=0})})};
v.setOptions=function(a,b){var c=this;if(b=b||this.g.options){for(var d=[],e=[],g={},f=K(Object.keys(a)),h=f.next();!h.done;g={K:g.K,L:g.L},h=f.next()){var k=h.value;k in this.j&&this.j[k]===a[k]||(this.j[k]=a[k],h=b[k],void 0!==h&&(h.onChange&&(g.K=h.onChange,g.L=a[k],d.push(function(l){return function(){return Z(c,function u(){var w,r=this;return O(u,function(y){if(1==y.g)return N(y,l.K(l.L),2);w=y.h;!0===w&&(r.o=!0);y.g=0})})}}(g))),h.graphOptionXref&&(k={valueNumber:1===h.type?a[k]:0,valueBoolean:0===
h.type?a[k]:!1,valueString:2===h.type?a[k]:""},h=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),h.graphOptionXref),k),e.push(h))))}if(0!==d.length||0!==e.length)this.o=!0,this.A=(void 0===this.A?[]:this.A).concat(e),this.u=(void 0===this.u?[]:this.u).concat(d)}};
function cc(a){return Z(a,function c(){var d=this,e,g,f,h,k,l,n;return O(c,function(u){switch(u.g){case 1:if(!d.o)return u.return();if(!d.u){u.g=2;break}e=K(d.u);g=e.next();case 3:if(g.done){u.g=5;break}f=g.value;return N(u,f(),4);case 4:g=e.next();u.g=3;break;case 5:d.u=void 0;case 2:if(d.A){h=new d.h.GraphOptionChangeRequestList;k=K(d.A);for(l=k.next();!l.done;l=k.next())n=l.value,h.push_back(n);d.i.changeOptions(h);h.delete();d.A=void 0}d.o=!1;u.g=0}})})}
v.initialize=function(){return Z(this,function b(){var c=this;return O(b,function(d){return 1==d.g?N(d,Zb(c),2):3!=d.g?N(d,ac(c),3):N(d,cc(c),0)})})};function $b(a,b){return Z(a,function d(){var e=this,g,f;return O(d,function(h){if(b in e.F)return h.return(e.F[b]);g=e.locateFile(b,"");f=fetch(g).then(function(k){return k.arrayBuffer()});e.F[b]=f;return h.return(f)})})}v.overrideFile=function(a,b){this.i?this.i.overrideFile(a,b):this.B[a]=b};v.clearOverriddenFiles=function(){this.B={};this.i&&this.i.clearOverriddenFiles()};
v.send=function(a,b){return Z(this,function d(){var e=this,g,f,h,k,l,n,u,w,r;return O(d,function(y){switch(y.g){case 1:if(!e.g.inputs)return y.return();g=1E3*(void 0===b||null===b?performance.now():b);return N(y,e.C,2);case 2:return N(y,e.initialize(),3);case 3:f=new e.h.PacketDataList;h=K(Object.keys(a));for(k=h.next();!k.done;k=h.next())if(l=k.value,n=e.g.inputs[l]){a:{var m=e;var t=a[l];switch(n.type){case "video":var x=m.m[n.stream];x||(x=new Ob(m.h,m.D),m.m[n.stream]=x);m=x;0===m.l&&(m.l=m.h.createTexture());
if("undefined"!==typeof HTMLVideoElement&&t instanceof HTMLVideoElement){var z=t.videoWidth;x=t.videoHeight}else"undefined"!==typeof HTMLImageElement&&t instanceof HTMLImageElement?(z=t.naturalWidth,x=t.naturalHeight):(z=t.width,x=t.height);x={glName:m.l,width:z,height:x};z=m.g;z.canvas.width=x.width;z.canvas.height=x.height;z.activeTexture(z.TEXTURE0);m.h.bindTexture2d(m.l);z.texImage2D(z.TEXTURE_2D,0,z.RGBA,z.RGBA,z.UNSIGNED_BYTE,t);m.h.bindTexture2d(0);m=x;break a;case "detections":x=m.m[n.stream];
x||(x=new Rb(m.h),m.m[n.stream]=x);m=x;m.data||(m.data=new m.g.DetectionListData);m.data.reset(t.length);for(x=0;x<t.length;++x){z=t[x];var E=m.data,F=E.setBoundingBox,I=x;var H=z.T;var p=new Fb;X(p,1,H.Z);X(p,2,H.$);X(p,3,H.height);X(p,4,H.width);X(p,5,H.rotation);X(p,6,H.X);var A=H=new Ya;U(A,1,W(p,1));U(A,2,W(p,2));U(A,3,W(p,3));U(A,4,W(p,4));U(A,5,W(p,5));var C=W(p,6);if(null!=C&&null!=C){Ra(A.g,48);var q=A.g,B=C;C=0>B;B=Math.abs(B);var D=B>>>0;B=Math.floor((B-D)/4294967296);B>>>=0;C&&(B=~B>>>
0,D=(~D>>>0)+1,4294967295<D&&(D=0,B++,4294967295<B&&(B=0)));Q=D;R=B;C=Q;for(D=R;0<D||127<C;)q.push(C&127|128),C=(C>>>7|D<<25)>>>0,D>>>=7;q.push(C)}rb(p,A);H=$a(H);F.call(E,I,H);if(z.O)for(E=0;E<z.O.length;++E)p=z.O[E],A=p.visibility?!0:!1,F=m.data,I=F.addNormalizedLandmark,H=x,p=Object.assign(Object.assign({},p),{visibility:A?p.visibility:0}),A=new Ab,X(A,1,p.x),X(A,2,p.y),X(A,3,p.z),p.visibility&&X(A,4,p.visibility),q=p=new Ya,U(q,1,W(A,1)),U(q,2,W(A,2)),U(q,3,W(A,3)),U(q,4,W(A,4)),U(q,5,W(A,5)),
rb(A,q),p=$a(p),I.call(F,H,p);if(z.M)for(E=0;E<z.M.length;++E){F=m.data;I=F.addClassification;H=x;p=z.M[E];A=new wb;X(A,2,p.Y);p.index&&X(A,1,p.index);p.label&&X(A,3,p.label);p.displayName&&X(A,4,p.displayName);q=p=new Ya;D=W(A,1);if(null!=D&&null!=D)if(Ra(q.g,8),C=q.g,0<=D)Ra(C,D);else{for(B=0;9>B;B++)C.push(D&127|128),D>>=7;C.push(1)}U(q,2,W(A,2));C=W(A,3);null!=C&&(C=Ca(C),Ra(q.g,26),Ra(q.g,C.length),Za(q,q.g.end()),Za(q,C));C=W(A,4);null!=C&&(C=Ca(C),Ra(q.g,34),Ra(q.g,C.length),Za(q,q.g.end()),
Za(q,C));rb(A,q);p=$a(p);I.call(F,H,p)}}m=m.data;break a;default:m={}}}u=m;w=n.stream;switch(n.type){case "video":f.pushTexture2d(Object.assign(Object.assign({},u),{stream:w,timestamp:g}));break;case "detections":r=u;r.stream=w;r.timestamp=g;f.pushDetectionList(r);break;default:throw Error("Unknown input config type: '"+n.type+"'");}}e.i.send(f);return N(y,e.C,4);case 4:f.delete(),y.g=0}})})};
function dc(a,b,c){return Z(a,function e(){var g,f,h,k,l,n,u=this,w,r,y,m,t,x,z,E;return O(e,function(F){switch(F.g){case 1:if(!c)return F.return(b);g={};f=0;h=K(Object.keys(c));for(k=h.next();!k.done;k=h.next())l=k.value,n=c[l],"string"!==typeof n&&"texture"===n.type&&void 0!==b[n.stream]&&++f;1<f&&(u.G=!1);w=K(Object.keys(c));k=w.next();case 2:if(k.done){F.g=4;break}r=k.value;y=c[r];if("string"===typeof y)return z=g,E=r,N(F,ec(u,r,b[y]),14);m=b[y.stream];if("detection_list"===y.type){if(m){var I=
m.getRectList();for(var H=m.getLandmarksList(),p=m.getClassificationsList(),A=[],C=0;C<I.size();++C){var q=I.get(C);a:{var B=new Fb;for(q=new Sa(q);S(q);)switch(q.i){case 13:var D=T(q);X(B,1,D);break;case 21:D=T(q);X(B,2,D);break;case 29:D=T(q);X(B,3,D);break;case 37:D=T(q);X(B,4,D);break;case 45:D=T(q);X(B,5,D);break;case 48:D=Oa(q.g);X(B,6,D);break;default:if(!sb(B,q))break a}}B={Z:Y(B,1),$:Y(B,2),height:Y(B,3),width:Y(B,4),rotation:Y(B,5,0),X:lb(B,6,0)};q=nb(Eb(H.get(C)),Ab).map(Nb);var la=p.get(C);
a:for(D=new yb,la=new Sa(la);S(la);)switch(la.i){case 10:D.addClassification(Ua(la,new wb,xb));break;default:if(!sb(D,la))break a}B={T:B,O:q,M:Mb(D)};A.push(B)}I=A}else I=[];g[r]=I;F.g=7;break}if("proto_list"===y.type){if(m){I=Array(m.size());for(H=0;H<m.size();H++)I[H]=m.get(H);m.delete()}else I=[];g[r]=I;F.g=7;break}if(void 0===m){F.g=3;break}if("float_list"===y.type){g[r]=m;F.g=7;break}if("proto"===y.type){g[r]=m;F.g=7;break}if("texture"!==y.type)throw Error("Unknown output config type: '"+y.type+
"'");t=u.s[r];t||(t=new Ob(u.h,u.D),u.s[r]=t);return N(F,Pb(t,m,u.G),13);case 13:x=F.h,g[r]=x;case 7:y.transform&&g[r]&&(g[r]=y.transform(g[r]));F.g=3;break;case 14:z[E]=F.h;case 3:k=w.next();F.g=2;break;case 4:return F.return(g)}})})}
function ec(a,b,c){return Z(a,function e(){var g=this,f;return O(e,function(h){return"number"===typeof c||c instanceof Uint8Array||c instanceof g.h.Uint8BlobList?h.return(c):c instanceof g.h.Texture2dDataOut?(f=g.s[b],f||(f=new Ob(g.h,g.D),g.s[b]=f),h.return(Pb(f,c,g.G))):h.return(void 0)})})}
function bc(a,b){for(var c=b.name||"$",d=[].concat(L(b.wants)),e=new a.h.StringList,g=K(b.wants),f=g.next();!f.done;f=g.next())e.push_back(f.value);g=a.h.PacketListener.implement({onResults:function(h){for(var k={},l=0;l<b.wants.length;++l)k[d[l]]=h.get(l);var n=a.listeners[c];n&&(a.C=dc(a,k,b.outs).then(function(u){u=n(u);for(var w=0;w<b.wants.length;++w){var r=k[d[w]];"object"===typeof r&&r.hasOwnProperty&&r.hasOwnProperty("delete")&&r.delete()}u&&(a.C=u)}))}});a.i.attachMultiListener(e,g);e.delete()}
v.onResults=function(a,b){this.listeners[b||"$"]=a};P("Solution",Xb);P("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function fc(a){a=Kb(a);var b=a.getMesh();if(!b)return a;var c=new Float32Array(b.getVertexBufferList());b.getVertexBufferList=function(){return c};var d=new Uint32Array(b.getIndexBufferList());b.getIndexBufferList=function(){return d};return a};var gc={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(a){return a.map(fc)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(a){return a.map(function(b){return nb(Eb(b),
Ab).map(Nb)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",
fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,
graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",
fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}};var hc=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],ic=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,
385],[385,384],[384,398],[398,362]],jc=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],kc=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],lc=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],mc=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],
[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],nc=[].concat(L(hc),L(ic),L(jc),L(kc),L(lc),L(mc));function oc(a){a=a||{};a=Object.assign(Object.assign({},gc),a);this.g=new Xb(a)}v=oc.prototype;v.close=function(){this.g.close();return Promise.resolve()};v.onResults=function(a){this.g.onResults(a)};v.initialize=function(){return Z(this,function b(){var c=this;return O(b,function(d){return N(d,c.g.initialize(),0)})})};v.reset=function(){this.g.reset()};v.send=function(a){return Z(this,function c(){var d=this;return O(c,function(e){return N(e,d.g.send(a),0)})})};v.setOptions=function(a){this.g.setOptions(a)};
P("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1E4}});P("FaceMesh",oc);P("FACEMESH_LIPS",hc);P("FACEMESH_LEFT_EYE",ic);P("FACEMESH_LEFT_EYEBROW",jc);P("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]);P("FACEMESH_RIGHT_EYE",kc);P("FACEMESH_RIGHT_EYEBROW",lc);
P("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]);P("FACEMESH_FACE_OVAL",mc);P("FACEMESH_CONTOURS",nc);
P("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,
214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,
40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,
140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,
36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,
149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],
[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,
111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],
[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],
[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,
24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],
[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,
297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,
416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],
[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,
349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,
328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],
[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,
419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,
455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],
[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],
[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,
262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],
[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,
383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,
120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],
[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,
247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],
[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,
157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],
[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,
115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,
52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],
[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,
186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],
[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],
[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,
431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,
18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,
256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],
[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,
366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],
[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],
[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,
248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,
429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],
[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,
341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],
[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]);P("matrixDataToMatrix",function(a){for(var b=a.getCols(),c=a.getRows(),d=a.getPackedDataList(),e=[],g=0;g<c;g++)e.push(Array(b));for(g=0;g<c;g++)for(var f=0;f<b;f++){var h=1===a.getLayout()?g*b+f:f*c+g;e[g][f]=d[h]}return e});P("VERSION","0.4.1633559619");}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@mediapipe/selfie_segmentation/selfie_segmentation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mediapipe/selfie_segmentation/selfie_segmentation.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var x;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var y=ca(this);function z(a,b){if(b)a:{var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
z("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}function c(g,f){this.h=g;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.h};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
z("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=y[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function A(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ea(a){if(!(a instanceof Array)){a=A(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};z("Object.assign",function(a){return a||fa});
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ia;if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function na(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}function oa(){this.m=!1;this.j=null;this.i=void 0;this.h=1;this.v=this.s=0;this.l=null}function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}oa.prototype.u=function(a){this.i=a};
function qa(a,b){a.l={ma:b,na:!0};a.h=a.s||a.v}oa.prototype.return=function(a){this.l={return:a};this.h=this.v};function D(a,b,c){a.h=c;return{value:b}}function ra(a){this.h=new oa;this.i=a}function sa(a,b){pa(a.h);var c=a.h.j;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);a.h.return(b);return ua(a)}
function ta(a,b,c,d){try{var e=b.call(a.h.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.m=!1,e;var g=e.value}catch(f){return a.h.j=null,qa(a.h,f),ua(a)}a.h.j=null;d.call(a.h,g);return ua(a)}function ua(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.m=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.m=!1;if(a.h.l){b=a.h.l;a.h.l=null;if(b.na)throw b.ma;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){pa(a.h);a.h.j?b=ta(a,a.h.j.next,b,a.h.u):(a.h.u(b),b=ua(a));return b};this.throw=function(b){pa(a.h);a.h.j?b=ta(a,a.h.j["throw"],b,a.h.u):(qa(a.h,b),b=ua(a));return b};this.return=function(b){return sa(a,b)};this[Symbol.iterator]=function(){return this}}function wa(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,e){function g(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(g,e)}g(a.next())})}
function E(a){return wa(new va(new ra(a)))}
z("Promise",function(a){function b(f){this.i=0;this.j=void 0;this.h=[];this.u=!1;var h=this.l();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.h=null}function d(f){return f instanceof b?f:new b(function(h){h(f)})}if(a)return a;c.prototype.i=function(f){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(f)};var e=y.setTimeout;c.prototype.j=function(f){e(f,0)};c.prototype.m=function(){for(;this.h&&this.h.length;){var f=this.h;this.h=[];for(var h=0;h<f.length;++h){var k=
f[h];f[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};c.prototype.l=function(f){this.j(function(){throw f;})};b.prototype.l=function(){function f(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:f(this.I),reject:f(this.m)}};b.prototype.I=function(f){if(f===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.L(f);else{a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1}h?this.F(f):this.s(f)}};
b.prototype.F=function(f){var h=void 0;try{h=f.then}catch(k){this.m(k);return}"function"==typeof h?this.M(h,f):this.s(f)};b.prototype.m=function(f){this.v(2,f)};b.prototype.s=function(f){this.v(1,f)};b.prototype.v=function(f,h){if(0!=this.i)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.i);this.i=f;this.j=h;2===this.i&&this.K();this.H()};b.prototype.K=function(){var f=this;e(function(){if(f.D()){var h=y.console;"undefined"!==typeof h&&h.error(f.j)}},1)};b.prototype.D=
function(){if(this.u)return!1;var f=y.CustomEvent,h=y.Event,k=y.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=y.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.j;return k(f)};b.prototype.H=function(){if(null!=this.h){for(var f=0;f<this.h.length;++f)g.i(this.h[f]);this.h=null}};var g=new c;b.prototype.L=
function(f){var h=this.l();f.T(h.resolve,h.reject)};b.prototype.M=function(f,h){var k=this.l();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(f,h){function k(p,n){return"function"==typeof p?function(q){try{l(p(q))}catch(t){m(t)}}:n}var l,m,r=new b(function(p,n){l=p;m=n});this.T(k(f,l),k(h,m));return r};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.T=function(f,h){function k(){switch(l.i){case 1:f(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+
l.i);}}var l=this;null==this.h?g.i(k):this.h.push(k);this.u=!0};b.resolve=d;b.reject=function(f){return new b(function(h,k){k(f)})};b.race=function(f){return new b(function(h,k){for(var l=A(f),m=l.next();!m.done;m=l.next())d(m.value).T(h,k)})};b.all=function(f){var h=A(f),k=h.next();return k.done?d([]):new b(function(l,m){function r(q){return function(t){p[q]=t;n--;0==n&&l(p)}}var p=[],n=0;do p.push(void 0),n++,d(k.value).T(r(p.length-1),m),k=h.next();while(!k.done)})};return b});
function xa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}z("Array.prototype.keys",function(a){return a?a:function(){return xa(this,function(b){return b})}});
z("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});function F(a){return a?a:Array.prototype.fill}z("Int8Array.prototype.fill",F);z("Uint8Array.prototype.fill",F);z("Uint8ClampedArray.prototype.fill",F);z("Int16Array.prototype.fill",F);z("Uint16Array.prototype.fill",F);z("Int32Array.prototype.fill",F);
z("Uint32Array.prototype.fill",F);z("Float32Array.prototype.fill",F);z("Float64Array.prototype.fill",F);z("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});z("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
z("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});var ya=this||self;
function Aa(a,b){a=a.split(".");var c=ya;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function Ba(a){var b;a:{if(b=ya.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var Ca=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in e&&(d[g]=b.call(void 0,e[g],g,a));return d};var Da={},Ea=null;function Fa(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ga(a,function(g){d[e++]=g});return e!==c?d.subarray(0,e):d}
function Ga(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Ea[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ha();for(var d=0;;){var e=c(-1),g=c(0),f=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|g>>4);64!=f&&(b(g<<4&240|f>>2),64!=h&&b(f<<6&192|h))}}
function Ha(){if(!Ea){Ea={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Da[c]=d;for(var e=0;e<d.length;e++){var g=d[e];void 0===Ea[g]&&(Ea[g]=e)}}}};var Ia="undefined"!==typeof Uint8Array,Ja=!(Ba("Trident")||Ba("MSIE"))&&"function"===typeof ya.btoa;
function Ka(a){if(!Ja){var b;void 0===b&&(b=0);Ha();b=Da[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,g=0;e<a.length-2;e+=3){var f=a[e],h=a[e+1],k=a[e+2],l=b[f>>2];f=b[(f&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[g++]=l+f+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[g]=b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}for(b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,
a);return btoa(b)}var La=RegExp("[-_.]","g");function Ma(a){switch(a){case "-":return"+";case "_":return"/";case ".":return"=";default:return""}}function Na(a){if(!Ja)return Fa(a);La.test(a)&&(a=a.replace(La,Ma));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}var Oa;function Pa(){return Oa||(Oa=new Uint8Array(0))}var Qa={};var Ra="function"===typeof Uint8Array.prototype.slice,G=0,H=0;function Sa(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=A(Ta(c,a)),b=c.next().value,a=c.next().value,c=b);G=c>>>0;H=a>>>0}var Ua="function"===typeof BigInt;function Ta(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]};function Va(a,b){this.i=a>>>0;this.h=b>>>0}
function Wa(a){if(!a)return Xa||(Xa=new Va(0,0));if(!/^-?\d+$/.test(a))return null;if(16>a.length)Sa(Number(a));else if(Ua)a=BigInt(a),G=Number(a&BigInt(4294967295))>>>0,H=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+("-"===a[0]);H=G=0;for(var c=a.length,d=b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),H*=1E6,G=1E6*G+d,4294967296<=G&&(H+=G/4294967296|0,G%=4294967296);b&&(b=A(Ta(G,H)),a=b.next().value,b=b.next().value,G=a,H=b)}return new Va(G,H)}var Xa;function Ya(a,b){return Error("Invalid wire type: "+a+" (at position "+b+")")}function Za(){return Error("Failed to read varint, encoding is invalid.")}function $a(a,b){return Error("Tried to read past the end of the data "+b+" > "+a)};function K(){throw Error("Invalid UTF8");}function ab(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}var bb=void 0,cb,db="undefined"!==typeof TextDecoder,eb,fb="undefined"!==typeof TextEncoder;var gb;function hb(a){if(a!==Qa)throw Error("illegal external caller");}function ib(a,b){hb(b);this.V=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}function jb(){return gb||(gb=new ib(null,Qa))}function kb(a){hb(Qa);var b=a.V;b=null==b||Ia&&null!=b&&b instanceof Uint8Array?b:"string"===typeof b?Na(b):null;return null==b?b:a.V=b};function lb(a){if("string"===typeof a)return{buffer:Na(a),C:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),C:!1};if(a.constructor===Uint8Array)return{buffer:a,C:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),C:!1};if(a.constructor===ib)return{buffer:kb(a)||Pa(),C:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};function mb(a,b){this.i=null;this.m=!1;this.h=this.j=this.l=0;nb(this,a,b)}function nb(a,b,c){c=void 0===c?{}:c;a.S=void 0===c.S?!1:c.S;b&&(b=lb(b),a.i=b.buffer,a.m=b.C,a.l=0,a.j=a.i.length,a.h=a.l)}mb.prototype.reset=function(){this.h=this.l};function L(a,b){a.h=b;if(b>a.j)throw $a(a.j,b);}
function ob(a){var b=a.i,c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Za();L(a,c);return e}function pb(a,b){if(0>b)throw Error("Tried to read a negative byte length: "+b);var c=a.h,d=c+b;if(d>a.j)throw $a(b,a.j-c);a.h=d;return c}var qb=[];function rb(){this.h=[]}rb.prototype.length=function(){return this.h.length};rb.prototype.end=function(){var a=this.h;this.h=[];return a};function sb(a,b,c){for(;0<c||127<b;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}function M(a,b){for(;127<b;)a.h.push(b&127|128),b>>>=7;a.h.push(b)};function tb(a,b){if(qb.length){var c=qb.pop();nb(c,a,b);a=c}else a=new mb(a,b);this.h=a;this.j=this.h.h;this.i=this.l=-1;this.setOptions(b)}tb.prototype.setOptions=function(a){a=void 0===a?{}:a;this.ca=void 0===a.ca?!1:a.ca};tb.prototype.reset=function(){this.h.reset();this.j=this.h.h;this.i=this.l=-1};
function ub(a){var b=a.h;if(b.h==b.j)return!1;a.j=a.h.h;var c=ob(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Ya(c,a.j);if(1>b)throw Error("Invalid field number: "+b+" (at position "+a.j+")");a.l=b;a.i=c;return!0}
function vb(a){switch(a.i){case 0:if(0!=a.i)vb(a);else a:{a=a.h;for(var b=a.h,c=b+10,d=a.i;b<c;)if(0===(d[b++]&128)){L(a,b);break a}throw Za();}break;case 1:a=a.h;L(a,a.h+8);break;case 2:2!=a.i?vb(a):(b=ob(a.h)>>>0,a=a.h,L(a,a.h+b));break;case 5:a=a.h;L(a,a.h+4);break;case 3:b=a.l;do{if(!ub(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}vb(a)}while(1);break;default:throw Ya(a.i,a.j);}}var wb=[];function xb(){this.j=[];this.i=0;this.h=new rb}function N(a,b){0!==b.length&&(a.j.push(b),a.i+=b.length)}function yb(a,b){if(b=b.R){N(a,a.h.end());for(var c=0;c<b.length;c++)N(a,kb(b[c])||Pa())}};var O="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function P(a,b){if(O)return a[O]|=b;if(void 0!==a.A)return a.A|=b;Object.defineProperties(a,{A:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function zb(a,b){O?a[O]&&(a[O]&=~b):void 0!==a.A&&(a.A&=~b)}function Q(a){var b;O?b=a[O]:b=a.A;return null==b?0:b}function R(a,b){O?a[O]=b:void 0!==a.A?a.A=b:Object.defineProperties(a,{A:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Ab(a){P(a,1);return a}function Bb(a,b){R(b,(a|0)&-51)}function Cb(a,b){R(b,(a|18)&-41)};var Db={};function Eb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Fb,Gb=[];R(Gb,23);Fb=Object.freeze(Gb);function Hb(a){if(Q(a.o)&2)throw Error("Cannot mutate an immutable Message");}function Ib(a){var b=a.length;(b=b?a[b-1]:void 0)&&Eb(b)?b.g=1:(b={},a.push((b.g=1,b)))};function Jb(a){var b=a.i+a.G;return a.B||(a.B=a.o[b]={})}function S(a,b){return-1===b?null:b>=a.i?a.B?a.B[b]:void 0:a.o[b+a.G]}function U(a,b,c,d){Hb(a);Kb(a,b,c,d)}function Kb(a,b,c,d){a.j&&(a.j=void 0);b>=a.i||d?Jb(a)[b]=c:(a.o[b+a.G]=c,(a=a.B)&&b in a&&delete a[b])}function Lb(a,b,c,d){var e=S(a,b);Array.isArray(e)||(e=Fb);var g=Q(e);g&1||Ab(e);if(d)g&2||P(e,2),c&1||Object.freeze(e);else{d=!(c&2);var f=g&2;c&1||!f?d&&g&16&&!f&&zb(e,16):(e=Ab(Array.prototype.slice.call(e)),Kb(a,b,e))}return e}
function Mb(a,b){var c=S(a,b);var d=null==c?c:"number"===typeof c||"NaN"===c||"Infinity"===c||"-Infinity"===c?Number(c):void 0;null!=d&&d!==c&&Kb(a,b,d);return d}
function Nb(a,b,c,d,e){a.h||(a.h={});var g=a.h[c],f=Lb(a,c,3,e);if(!g){var h=f;g=[];var k=!!(Q(a.o)&16);f=!!(Q(h)&2);var l=h;!e&&f&&(h=Array.prototype.slice.call(h));for(var m=f,r=0;r<h.length;r++){var p=h[r];var n=b,q=!1;q=void 0===q?!1:q;p=Array.isArray(p)?new n(p):q?new n:void 0;if(void 0!==p){n=p.o;var t=q=Q(n);f&&(t|=2);k&&(t|=16);t!=q&&R(n,t);n=t;m=m||!!(2&n);g.push(p)}}a.h[c]=g;k=Q(h);b=k|33;b=m?b&-9:b|8;k!=b&&(m=h,Object.isFrozen(m)&&(m=Array.prototype.slice.call(m)),R(m,b),h=m);l!==h&&Kb(a,
c,h);(e||d&&f)&&P(g,2);d&&Object.freeze(g);return g}e||(e=Object.isFrozen(g),d&&!e?Object.freeze(g):!d&&e&&(g=Array.prototype.slice.call(g),a.h[c]=g));return g}function Ob(a,b,c){var d=!!(Q(a.o)&2);b=Nb(a,b,c,d,d);a=Lb(a,c,3,d);if(!(d||Q(a)&8)){for(d=0;d<b.length;d++){c=b[d];if(Q(c.o)&2){var e=Pb(c,!1);e.j=c}else e=c;c!==e&&(b[d]=e,a[d]=e.o)}P(a,8)}return b}
function V(a,b,c){if(null!=c&&"number"!==typeof c)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof c+": "+c);U(a,b,c)}function Qb(a,b,c,d,e){Hb(a);var g=Nb(a,c,b,!1,!1);c=null!=d?d:new c;a=Lb(a,b,2,!1);void 0!=e?(g.splice(e,0,c),a.splice(e,0,c.o)):(g.push(c),a.push(c.o));c.C()&&zb(a,8);return c}function Rb(a,b){return null==a?b:a}function W(a,b,c){c=void 0===c?0:c;return Rb(Mb(a,b),c)};var Sb;function Tb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(Q(a)&128))return a=Array.prototype.slice.call(a),Ib(a),a}else{if(Ia&&null!=a&&a instanceof Uint8Array)return Ka(a);if(a instanceof ib){var b=a.V;return null==b?"":"string"===typeof b?b:a.V=Ka(b)}}}return a};function Ub(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Vb(a,b,c,void 0!==d);else if(Eb(a)){var e={},g;for(g in a)e[g]=Ub(a[g],b,c,d);a=e}else a=b(a,d);return a}}function Vb(a,b,c,d){var e=Q(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=Ub(a[g],b,c,d);c(e,a);return a}function Wb(a){return a.ja===Db?a.toJSON():Tb(a)}function Xb(a,b){a&128&&Ib(b)};function Yb(a,b,c){c=void 0===c?Cb:c;if(null!=a){if(Ia&&a instanceof Uint8Array)return a.length?new ib(new Uint8Array(a),Qa):jb();if(Array.isArray(a)){var d=Q(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return R(a,d|2),a;a=Vb(a,Yb,d&4?Cb:c,!0);b=Q(a);b&4&&b&2&&Object.freeze(a);return a}return a.ja===Db?Zb(a):a}}
function $b(a,b,c,d,e,g,f){if(a=a.h&&a.h[c]){d=Q(a);d&2?d=a:(g=Ca(a,Zb),Cb(d,g),Object.freeze(g),d=g);Hb(b);f=null==d?Fb:Ab([]);if(null!=d){g=!!d.length;for(a=0;a<d.length;a++){var h=d[a];g=g&&!(Q(h.o)&2);f[a]=h.o}g=(g?8:0)|1;a=Q(f);(a&g)!==g&&(Object.isFrozen(f)&&(f=Array.prototype.slice.call(f)),R(f,a|g));b.h||(b.h={});b.h[c]=d}else b.h&&(b.h[c]=void 0);Kb(b,c,f,e)}else U(b,c,Yb(d,g,f),e)}function Zb(a){if(Q(a.o)&2)return a;a=Pb(a,!0);P(a.o,2);return a}
function Pb(a,b){var c=a.o,d=[];P(d,16);var e=a.constructor.h;e&&d.push(e);e=a.B;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var g={};d[d.length-1]=g}0!==(Q(c)&128)&&Ib(d);b=b||a.C()?Cb:Bb;g=a.constructor;Sb=d;d=new g(d);Sb=void 0;a.R&&(d.R=a.R.slice());g=!!(Q(c)&16);for(var f=e?c.length-1:c.length,h=0;h<f;h++)$b(a,d,h-a.G,c[h],!1,g,b);if(e)for(var k in e)$b(a,d,+k,e[k],!0,g,b);return d};function X(a,b,c){null==a&&(a=Sb);Sb=void 0;var d=this.constructor.i||0,e=0<d,g=this.constructor.h,f=!1;if(null==a){a=g?[g]:[];var h=48;var k=!0;e&&(d=0,h|=128);R(a,h)}else{if(!Array.isArray(a))throw Error();if(g&&g!==a[0])throw Error();var l=h=P(a,0);if(k=0!==(16&l))(f=0!==(32&l))||(l|=32);if(e)if(128&l)d=0;else{if(0<a.length){var m=a[a.length-1];if(Eb(m)&&"g"in m){d=0;l|=128;delete m.g;var r=!0,p;for(p in m){r=!1;break}r&&a.pop()}}}else if(128&l)throw Error();h!==l&&R(a,l)}this.G=(g?0:-1)-d;this.h=
void 0;this.o=a;a:{g=this.o.length;d=g-1;if(g&&(g=this.o[d],Eb(g))){this.B=g;this.i=d-this.G;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!e&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=k&&!f&&!0;e=this.i;var n;for(k=0;k<c.length;k++)f=c[k],f<e?(f+=this.G,(d=a[f])?ac(d,b):a[f]=Fb):(n||(n=Jb(this)),(d=n[f])?ac(d,b):n[f]=Fb)}}
X.prototype.toJSON=function(){return Vb(this.o,Wb,Xb)};X.prototype.C=function(){return!!(Q(this.o)&2)};function ac(a,b){if(Array.isArray(a)){var c=Q(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&R(a,c|d)}}X.prototype.ja=Db;X.prototype.toString=function(){return this.o.toString()};function bc(a,b,c){if(c){var d={},e;for(e in c){var g=c[e],f=g.ra;f||(d.J=g.xa||g.oa.W,g.ia?(d.aa=cc(g.ia),f=function(h){return function(k,l,m){return h.J(k,l,m,h.aa)}}(d)):g.ka?(d.Z=dc(g.da.P,g.ka),f=function(h){return function(k,l,m){return h.J(k,l,m,h.Z)}}(d)):f=d.J,g.ra=f);f(b,a,g.da);d={J:d.J,aa:d.aa,Z:d.Z}}}yb(b,a)}var ec=Symbol();function fc(a,b,c){return a[ec]||(a[ec]=function(d,e){return b(d,e,c)})}
function gc(a){var b=a[ec];if(!b){var c=hc(a);b=function(d,e){return ic(d,e,c)};a[ec]=b}return b}function jc(a){var b=a.ia;if(b)return gc(b);if(b=a.wa)return fc(a.da.P,b,a.ka)}function kc(a){var b=jc(a),c=a.da,d=a.oa.U;return b?function(e,g){return d(e,g,c,b)}:function(e,g){return d(e,g,c)}}function lc(a,b){var c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(mc in c||nc in c||0<c.length&&"function"==typeof c[0])?c:void 0}
function oc(a,b,c,d,e,g){b.P=a[0];var f=1;if(a.length>f&&"number"!==typeof a[f]){var h=a[f++];c(b,h)}for(;f<a.length;){c=a[f++];for(var k=f+1;k<a.length&&"number"!==typeof a[k];)k++;h=a[f++];k-=f;switch(k){case 0:d(b,c,h);break;case 1:(k=lc(a,f))?(f++,e(b,c,h,k)):d(b,c,h,a[f++]);break;case 2:k=f++;k=lc(a,k);e(b,c,h,k,a[f++]);break;case 3:g(b,c,h,a[f++],a[f++],a[f++]);break;case 4:g(b,c,h,a[f++],a[f++],a[f++],a[f++]);break;default:throw Error("unexpected number of binary field arguments: "+k);}}return b}
var pc=Symbol();function cc(a){var b=a[pc];if(!b){var c=qc(a);b=function(d,e){return rc(d,e,c)};a[pc]=b}return b}function dc(a,b){var c=a[pc];c||(c=function(d,e){return bc(d,e,b)},a[pc]=c);return c}var nc=Symbol();function sc(a,b){a.push(b)}function tc(a,b,c){a.push(b,c.W)}function uc(a,b,c,d){var e=cc(d),g=qc(d).P,f=c.W;a.push(b,function(h,k,l){return f(h,k,l,g,e)})}function vc(a,b,c,d,e,g){var f=dc(d,g),h=c.W;a.push(b,function(k,l,m){return h(k,l,m,d,f)})}
function qc(a){var b=a[nc];if(b)return b;b=oc(a,a[nc]=[],sc,tc,uc,vc);mc in a&&nc in a&&(a.length=0);return b}var mc=Symbol();function wc(a,b){a[0]=b}function xc(a,b,c,d){var e=c.U;a[b]=d?function(g,f,h){return e(g,f,h,d)}:e}function yc(a,b,c,d,e){var g=c.U,f=gc(d),h=hc(d).P;a[b]=function(k,l,m){return g(k,l,m,h,f,e)}}function zc(a,b,c,d,e,g,f){var h=c.U,k=fc(d,e,g);a[b]=function(l,m,r){return h(l,m,r,d,k,f)}}
function hc(a){var b=a[mc];if(b)return b;b=oc(a,a[mc]={},wc,xc,yc,zc);mc in a&&nc in a&&(a.length=0);return b}
function ic(a,b,c){for(;ub(b)&&4!=b.i;){var d=b.l,e=c[d];if(!e){var g=c[0];g&&(g=g[d])&&(e=c[d]=kc(g))}if(!e||!e(b,a,d)){e=b;d=a;g=e.j;vb(e);var f=e;if(!f.ca){e=f.h.h-g;f.h.h=g;f=f.h;if(0==e)e=jb();else{g=pb(f,e);if(f.S&&f.m)e=f.i.subarray(g,g+e);else{f=f.i;var h=g;e=g+e;e=h===e?Pa():Ra?f.slice(h,e):new Uint8Array(f.subarray(h,e))}e=0==e.length?jb():new ib(e,Qa)}(g=d.R)?g.push(e):d.R=[e]}}}return a}
function rc(a,b,c){for(var d=c.length,e=1==d%2,g=e?1:0;g<d;g+=2)(0,c[g+1])(b,a,c[g]);bc(a,b,e?c[0]:void 0)}function Ac(a,b){return{U:a,W:b}}
var Y=Ac(function(a,b,c){if(5!==a.i)return!1;a=a.h;var d=a.i,e=a.h,g=d[e];var f=d[e+1];var h=d[e+2];d=d[e+3];L(a,a.h+4);f=(g<<0|f<<8|h<<16|d<<24)>>>0;a=2*(f>>31)+1;g=f>>>23&255;f&=8388607;U(b,c,255==g?f?NaN:Infinity*a:0==g?a*Math.pow(2,-149)*f:a*Math.pow(2,g-150)*(f+Math.pow(2,23)));return!0},function(a,b,c){b=Mb(b,c);if(null!=b){M(a.h,8*c+5);a=a.h;var d=+b;0===d?0<1/d?G=H=0:(H=0,G=2147483648):isNaN(d)?(H=0,G=2147483647):(d=(c=0>d?-2147483648:0)?-d:d,3.4028234663852886E38<d?(H=0,G=(c|2139095040)>>>
0):1.1754943508222875E-38>d?(d=Math.round(d/Math.pow(2,-149)),H=0,G=(c|d)>>>0):(b=Math.floor(Math.log(d)/Math.LN2),d*=Math.pow(2,-b),d=Math.round(8388608*d),16777216<=d&&++b,H=0,G=(c|b+127<<23|d&8388607)>>>0));c=G;a.h.push(c>>>0&255);a.h.push(c>>>8&255);a.h.push(c>>>16&255);a.h.push(c>>>24&255)}}),Bc=Ac(function(a,b,c){if(0!==a.i)return!1;var d=a.h,e=0,g=a=0,f=d.i,h=d.h;do{var k=f[h++];e|=(k&127)<<g;g+=7}while(32>g&&k&128);32<g&&(a|=(k&127)>>4);for(g=3;32>g&&k&128;g+=7)k=f[h++],a|=(k&127)<<g;L(d,
h);if(128>k){d=e>>>0;k=a>>>0;if(a=k&2147483648)d=~d+1>>>0,k=~k>>>0,0==d&&(k=k+1>>>0);d=4294967296*k+(d>>>0)}else throw Za();U(b,c,a?-d:d);return!0},function(a,b,c){b=S(b,c);null!=b&&("string"===typeof b&&Wa(b),null!=b&&(M(a.h,8*c),"number"===typeof b?(a=a.h,Sa(b),sb(a,G,H)):(c=Wa(b),sb(a.h,c.i,c.h))))}),Cc=Ac(function(a,b,c){if(0!==a.i)return!1;U(b,c,ob(a.h));return!0},function(a,b,c){b=S(b,c);if(null!=b&&null!=b)if(M(a.h,8*c),a=a.h,c=b,0<=c)M(a,c);else{for(b=0;9>b;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}),
Dc=Ac(function(a,b,c){if(2!==a.i)return!1;var d=ob(a.h)>>>0;a=a.h;var e=pb(a,d);a=a.i;if(db){var g=a,f;(f=cb)||(f=cb=new TextDecoder("utf-8",{fatal:!0}));a=e+d;g=0===e&&a===g.length?g:g.subarray(e,a);try{var h=f.decode(g)}catch(r){if(void 0===bb){try{f.decode(new Uint8Array([128]))}catch(p){}try{f.decode(new Uint8Array([97])),bb=!0}catch(p){bb=!1}}!bb&&(cb=void 0);throw r;}}else{h=e;d=h+d;e=[];for(var k=null,l,m;h<d;)l=a[h++],128>l?e.push(l):224>l?h>=d?K():(m=a[h++],194>l||128!==(m&192)?(h--,K()):
e.push((l&31)<<6|m&63)):240>l?h>=d-1?K():(m=a[h++],128!==(m&192)||224===l&&160>m||237===l&&160<=m||128!==((g=a[h++])&192)?(h--,K()):e.push((l&15)<<12|(m&63)<<6|g&63)):244>=l?h>=d-2?K():(m=a[h++],128!==(m&192)||0!==(l<<28)+(m-144)>>30||128!==((g=a[h++])&192)||128!==((f=a[h++])&192)?(h--,K()):(l=(l&7)<<18|(m&63)<<12|(g&63)<<6|f&63,l-=65536,e.push((l>>10&1023)+55296,(l&1023)+56320))):K(),8192<=e.length&&(k=ab(k,e),e.length=0);h=ab(k,e)}U(b,c,h);return!0},function(a,b,c){b=S(b,c);if(null!=b){var d=!1;
d=void 0===d?!1:d;if(fb){if(d&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))throw Error("Found an unpaired surrogate");b=(eb||(eb=new TextEncoder)).encode(b)}else{for(var e=0,g=new Uint8Array(3*b.length),f=0;f<b.length;f++){var h=b.charCodeAt(f);if(128>h)g[e++]=h;else{if(2048>h)g[e++]=h>>6|192;else{if(55296<=h&&57343>=h){if(56319>=h&&f<b.length){var k=b.charCodeAt(++f);if(56320<=k&&57343>=k){h=1024*(h-55296)+k-56320+65536;g[e++]=h>>18|240;g[e++]=h>>12&63|128;
g[e++]=h>>6&63|128;g[e++]=h&63|128;continue}else f--}if(d)throw Error("Found an unpaired surrogate");h=65533}g[e++]=h>>12|224;g[e++]=h>>6&63|128}g[e++]=h&63|128}}b=e===g.length?g:g.subarray(0,e)}M(a.h,8*c+2);M(a.h,b.length);N(a,a.h.end());N(a,b)}}),Ec=Ac(function(a,b,c,d,e){if(2!==a.i)return!1;b=Qb(b,c,d);c=a.h.j;d=ob(a.h)>>>0;var g=a.h.h+d,f=g-c;0>=f&&(a.h.j=g,e(b,a,void 0,void 0,void 0),f=g-a.h.h);if(f)throw Error("Message parsing ended unexpectedly. Expected to read "+(d+" bytes, instead read "+
(d-f)+" bytes, either the data ended unexpectedly or the message misreported its own length"));a.h.h=g;a.h.j=c;return!0},function(a,b,c,d,e){b=Ob(b,d,c);if(null!=b)for(d=0;d<b.length;d++){var g=a;M(g.h,8*c+2);var f=g.h.end();N(g,f);f.push(g.i);g=f;e(b[d],a);f=a;var h=g.pop();for(h=f.i+f.h.length()-h;127<h;)g.push(h&127|128),h>>>=7,f.i++;g.push(h);f.i++}});function Fc(a){return function(b,c){a:{if(wb.length){var d=wb.pop();d.setOptions(c);nb(d.h,b,c);b=d}else b=new tb(b,c);try{var e=hc(a);var g=ic(new e.P,b,e);break a}finally{e=b.h,e.i=null,e.m=!1,e.l=0,e.j=0,e.h=0,e.S=!1,b.l=-1,b.i=-1,100>wb.length&&wb.push(b)}g=void 0}return g}}function Gc(a){return function(){var b=new xb;rc(this,b,qc(a));N(b,b.h.end());for(var c=new Uint8Array(b.i),d=b.j,e=d.length,g=0,f=0;f<e;f++){var h=d[f];c.set(h,g);g+=h.length}b.j=[c];return c}};function Z(a){X.call(this,a)}na(Z,X);var Hc=[Z,1,Cc,2,Y,3,Dc,4,Dc];Z.prototype.l=Gc(Hc);function Ic(a){X.call(this,a,-1,Jc)}na(Ic,X);Ic.prototype.addClassification=function(a,b){Qb(this,1,Z,a,b);return this};var Jc=[1],Kc=Fc([Ic,1,Ec,Hc]);function Lc(a){X.call(this,a)}na(Lc,X);var Mc=[Lc,1,Y,2,Y,3,Y,4,Y,5,Y];Lc.prototype.l=Gc(Mc);function Nc(a){X.call(this,a,-1,Oc)}na(Nc,X);var Oc=[1],Pc=Fc([Nc,1,Ec,Mc]);function Qc(a){X.call(this,a)}na(Qc,X);var Rc=[Qc,1,Y,2,Y,3,Y,4,Y,5,Y,6,Bc],Sc=Fc(Rc);Qc.prototype.l=Gc(Rc);function Tc(a,b,c){c=a.createShader(0===c?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(c));return c};function Uc(a){return Ob(a,Z,1).map(function(b){var c=S(b,1);return{index:null==c?0:c,qa:W(b,2),label:null!=S(b,3)?Rb(S(b,3),""):void 0,displayName:null!=S(b,4)?Rb(S(b,4),""):void 0}})};function Vc(a){return{x:W(a,1),y:W(a,2),z:W(a,3),visibility:null!=Mb(a,4)?W(a,4):void 0}};function Wc(a,b){this.i=a;this.h=b;this.m=0}
function Xc(a,b,c){Yc(a,b);if("function"===typeof a.h.canvas.transferToImageBitmap)return Promise.resolve(a.h.canvas.transferToImageBitmap());if(c)return Promise.resolve(a.h.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.h.canvas);void 0===a.j&&(a.j=document.createElement("canvas"));return new Promise(function(d){a.j.height=a.h.canvas.height;a.j.width=a.h.canvas.width;a.j.getContext("2d",{}).drawImage(a.h.canvas,0,0,a.h.canvas.width,a.h.canvas.height);d(a.j)})}
function Yc(a,b){var c=a.h;if(void 0===a.s){var d=Tc(c,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),e=Tc(c,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,e);c.linkProgram(g);if(!c.getProgramParameter(g,c.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
c.getProgramInfoLog(g));d=a.s=g;c.useProgram(d);e=c.getUniformLocation(d,"sampler0");a.l={O:c.getAttribLocation(d,"aVertex"),N:c.getAttribLocation(d,"aTex"),ya:e};a.v=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.v);c.enableVertexAttribArray(a.l.O);c.vertexAttribPointer(a.l.O,2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);a.u=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.u);c.enableVertexAttribArray(a.l.N);c.vertexAttribPointer(a.l.N,
2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);c.uniform1i(e,0)}d=a.l;c.useProgram(a.s);c.canvas.width=b.width;c.canvas.height=b.height;c.viewport(0,0,b.width,b.height);c.activeTexture(c.TEXTURE0);a.i.bindTexture2d(b.glName);c.enableVertexAttribArray(d.O);c.bindBuffer(c.ARRAY_BUFFER,a.v);c.vertexAttribPointer(d.O,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(d.N);c.bindBuffer(c.ARRAY_BUFFER,a.u);c.vertexAttribPointer(d.N,
2,c.FLOAT,!1,0,0);c.bindFramebuffer(c.DRAW_FRAMEBUFFER?c.DRAW_FRAMEBUFFER:c.FRAMEBUFFER,null);c.clearColor(0,0,0,0);c.clear(c.COLOR_BUFFER_BIT);c.colorMask(!0,!0,!0,!0);c.drawArrays(c.TRIANGLE_FAN,0,4);c.disableVertexAttribArray(d.O);c.disableVertexAttribArray(d.N);c.bindBuffer(c.ARRAY_BUFFER,null);a.i.bindTexture2d(0)}function Zc(a){this.h=a};var $c=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ad(a,b){return b+a}function bd(a,b){window[a]=b}function cd(a){var b=document.createElement("script");b.setAttribute("src",a);b.setAttribute("crossorigin","anonymous");return new Promise(function(c){b.addEventListener("load",function(){c()},!1);b.addEventListener("error",function(){c()},!1);document.body.appendChild(b)})}
function dd(){return E(function(a){switch(a.h){case 1:return a.s=2,D(a,WebAssembly.instantiate($c),4);case 4:a.h=3;a.s=0;break;case 2:return a.s=0,a.l=null,a.return(!1);case 3:return a.return(!0)}})}
function ed(a){this.h=a;this.listeners={};this.l={};this.L={};this.s={};this.v={};this.M=this.u=this.ga=!0;this.I=Promise.resolve();this.fa="";this.D={};this.locateFile=a&&a.locateFile||ad;if("object"===typeof window)var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
this.ha=b;if(a.options){b=A(Object.keys(a.options));for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.options[c].default;void 0!==d&&(this.l[c]="function"===typeof d?d():d)}}}x=ed.prototype;x.close=function(){this.j&&this.j.delete();return Promise.resolve()};
function fd(a){var b,c,d,e,g,f,h,k,l,m,r;return E(function(p){switch(p.h){case 1:if(!a.ga)return p.return();b=void 0===a.h.files?[]:"function"===typeof a.h.files?a.h.files(a.l):a.h.files;return D(p,dd(),2);case 2:c=p.i;if("object"===typeof window)return bd("createMediapipeSolutionsWasm",{locateFile:a.locateFile}),bd("createMediapipeSolutionsPackedAssets",{locateFile:a.locateFile}),f=b.filter(function(n){return void 0!==n.data}),h=b.filter(function(n){return void 0===n.data}),k=Promise.all(f.map(function(n){var q=
gd(a,n.url);if(void 0!==n.path){var t=n.path;q=q.then(function(w){a.overrideFile(t,w);return Promise.resolve(w)})}return q})),l=Promise.all(h.map(function(n){return void 0===n.simd||n.simd&&c||!n.simd&&!c?cd(a.locateFile(n.url,a.ha)):Promise.resolve()})).then(function(){var n,q,t;return E(function(w){if(1==w.h)return n=window.createMediapipeSolutionsWasm,q=window.createMediapipeSolutionsPackedAssets,t=a,D(w,n(q),2);t.i=w.i;w.h=0})}),m=function(){return E(function(n){a.h.graph&&a.h.graph.url?n=D(n,
gd(a,a.h.graph.url),0):(n.h=0,n=void 0);return n})}(),D(p,Promise.all([l,k,m]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");d=b.filter(function(n){return void 0===n.simd||n.simd&&c||!n.simd&&!c}).map(function(n){return a.locateFile(n.url,a.ha)});importScripts.apply(null,ea(d));e=a;return D(p,createMediapipeSolutionsWasm(Module),6);case 6:e.i=p.i;a.m=new OffscreenCanvas(1,1);a.i.canvas=a.m;g=a.i.GL.createContext(a.m,{antialias:!1,
alpha:!1,va:"undefined"!==typeof WebGL2RenderingContext?2:1});a.i.GL.makeContextCurrent(g);p.h=4;break;case 7:a.m=document.createElement("canvas");r=a.m.getContext("webgl2",{});if(!r&&(r=a.m.getContext("webgl",{}),!r))return alert("Failed to create WebGL canvas context when passing video frame."),p.return();a.K=r;a.i.canvas=a.m;a.i.createContext(a.m,!0,!0,{});case 4:a.j=new a.i.SolutionWasm,a.ga=!1,p.h=0}})}
function hd(a){var b,c,d,e,g,f,h,k;return E(function(l){if(1==l.h){if(a.h.graph&&a.h.graph.url&&a.fa===a.h.graph.url)return l.return();a.u=!0;if(!a.h.graph||!a.h.graph.url){l.h=2;return}a.fa=a.h.graph.url;return D(l,gd(a,a.h.graph.url),3)}2!=l.h&&(b=l.i,a.j.loadGraph(b));c=A(Object.keys(a.D));for(d=c.next();!d.done;d=c.next())e=d.value,a.j.overrideFile(e,a.D[e]);a.D={};if(a.h.listeners)for(g=A(a.h.listeners),f=g.next();!f.done;f=g.next())h=f.value,id(a,h);k=a.l;a.l={};a.setOptions(k);l.h=0})}
x.reset=function(){var a=this;return E(function(b){a.j&&(a.j.reset(),a.s={},a.v={});b.h=0})};
x.setOptions=function(a,b){var c=this;if(b=b||this.h.options){for(var d=[],e=[],g={},f=A(Object.keys(a)),h=f.next();!h.done;g={X:g.X,Y:g.Y},h=f.next())if(h=h.value,!(h in this.l&&this.l[h]===a[h])){this.l[h]=a[h];var k=b[h];void 0!==k&&(k.onChange&&(g.X=k.onChange,g.Y=a[h],d.push(function(l){return function(){var m;return E(function(r){if(1==r.h)return D(r,l.X(l.Y),2);m=r.i;!0===m&&(c.u=!0);r.h=0})}}(g))),k.graphOptionXref&&(h=Object.assign({},{calculatorName:"",calculatorIndex:0},k.graphOptionXref,
{valueNumber:1===k.type?a[h]:0,valueBoolean:0===k.type?a[h]:!1,valueString:2===k.type?a[h]:""}),e.push(h)))}if(0!==d.length||0!==e.length)this.u=!0,this.H=(void 0===this.H?[]:this.H).concat(e),this.F=(void 0===this.F?[]:this.F).concat(d)}};
function jd(a){var b,c,d,e,g,f,h;return E(function(k){switch(k.h){case 1:if(!a.u)return k.return();if(!a.F){k.h=2;break}b=A(a.F);c=b.next();case 3:if(c.done){k.h=5;break}d=c.value;return D(k,d(),4);case 4:c=b.next();k.h=3;break;case 5:a.F=void 0;case 2:if(a.H){e=new a.i.GraphOptionChangeRequestList;g=A(a.H);for(f=g.next();!f.done;f=g.next())h=f.value,e.push_back(h);a.j.changeOptions(e);e.delete();a.H=void 0}a.u=!1;k.h=0}})}
x.initialize=function(){var a=this;return E(function(b){return 1==b.h?D(b,fd(a),2):3!=b.h?D(b,hd(a),3):D(b,jd(a),0)})};function gd(a,b){var c,d;return E(function(e){if(b in a.L)return e.return(a.L[b]);c=a.locateFile(b,"");d=fetch(c).then(function(g){return g.arrayBuffer()});a.L[b]=d;return e.return(d)})}x.overrideFile=function(a,b){this.j?this.j.overrideFile(a,b):this.D[a]=b};x.clearOverriddenFiles=function(){this.D={};this.j&&this.j.clearOverriddenFiles()};
x.send=function(a,b){var c=this,d,e,g,f,h,k,l,m,r;return E(function(p){switch(p.h){case 1:if(!c.h.inputs)return p.return();d=1E3*(void 0===b||null===b?performance.now():b);return D(p,c.I,2);case 2:return D(p,c.initialize(),3);case 3:e=new c.i.PacketDataList;g=A(Object.keys(a));for(f=g.next();!f.done;f=g.next())if(h=f.value,k=c.h.inputs[h]){a:{var n=a[h];switch(k.type){case "video":var q=c.s[k.stream];q||(q=new Wc(c.i,c.K),c.s[k.stream]=q);0===q.m&&(q.m=q.i.createTexture());if("undefined"!==typeof HTMLVideoElement&&
n instanceof HTMLVideoElement){var t=n.videoWidth;var w=n.videoHeight}else"undefined"!==typeof HTMLImageElement&&n instanceof HTMLImageElement?(t=n.naturalWidth,w=n.naturalHeight):(t=n.width,w=n.height);w={glName:q.m,width:t,height:w};t=q.h;t.canvas.width=w.width;t.canvas.height=w.height;t.activeTexture(t.TEXTURE0);q.i.bindTexture2d(q.m);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);q.i.bindTexture2d(0);q=w;break a;case "detections":q=c.s[k.stream];q||(q=new Zc(c.i),c.s[k.stream]=q);
q.data||(q.data=new q.h.DetectionListData);q.data.reset(n.length);for(w=0;w<n.length;++w){t=n[w];var v=q.data,B=v.setBoundingBox,J=w;var I=t.la;var u=new Qc;V(u,1,I.sa);V(u,2,I.ta);V(u,3,I.height);V(u,4,I.width);V(u,5,I.rotation);U(u,6,I.pa);I=u.l();B.call(v,J,I);if(t.ea)for(v=0;v<t.ea.length;++v){u=t.ea[v];B=q.data;J=B.addNormalizedLandmark;I=w;u=Object.assign({},u,{visibility:u.visibility?u.visibility:0});var C=new Lc;V(C,1,u.x);V(C,2,u.y);V(C,3,u.z);u.visibility&&V(C,4,u.visibility);u=C.l();J.call(B,
I,u)}if(t.ba)for(v=0;v<t.ba.length;++v)B=q.data,J=B.addClassification,I=w,u=t.ba[v],C=new Z,V(C,2,u.qa),u.index&&U(C,1,u.index),u.label&&U(C,3,u.label),u.displayName&&U(C,4,u.displayName),u=C.l(),J.call(B,I,u)}q=q.data;break a;default:q={}}}l=q;m=k.stream;switch(k.type){case "video":e.pushTexture2d(Object.assign({},l,{stream:m,timestamp:d}));break;case "detections":r=l;r.stream=m;r.timestamp=d;e.pushDetectionList(r);break;default:throw Error("Unknown input config type: '"+k.type+"'");}}c.j.send(e);
return D(p,c.I,4);case 4:e.delete(),p.h=0}})};
function kd(a,b,c){var d,e,g,f,h,k,l,m,r,p,n,q,t,w;return E(function(v){switch(v.h){case 1:if(!c)return v.return(b);d={};e=0;g=A(Object.keys(c));for(f=g.next();!f.done;f=g.next())h=f.value,k=c[h],"string"!==typeof k&&"texture"===k.type&&void 0!==b[k.stream]&&++e;1<e&&(a.M=!1);l=A(Object.keys(c));f=l.next();case 2:if(f.done){v.h=4;break}m=f.value;r=c[m];if("string"===typeof r)return t=d,w=m,D(v,ld(a,m,b[r]),14);p=b[r.stream];if("detection_list"===r.type){if(p){var B=p.getRectList();for(var J=p.getLandmarksList(),
I=p.getClassificationsList(),u=[],C=0;C<B.size();++C){var T=Sc(B.get(C)),od=W(T,1),pd=W(T,2),qd=W(T,3),rd=W(T,4),sd=W(T,5,0),za=void 0;za=void 0===za?0:za;T={la:{sa:od,ta:pd,height:qd,width:rd,rotation:sd,pa:Rb(S(T,6),za)},ea:Ob(Pc(J.get(C)),Lc,1).map(Vc),ba:Uc(Kc(I.get(C)))};u.push(T)}B=u}else B=[];d[m]=B;v.h=7;break}if("proto_list"===r.type){if(p){B=Array(p.size());for(J=0;J<p.size();J++)B[J]=p.get(J);p.delete()}else B=[];d[m]=B;v.h=7;break}if(void 0===p){v.h=3;break}if("float_list"===r.type){d[m]=
p;v.h=7;break}if("proto"===r.type){d[m]=p;v.h=7;break}if("texture"!==r.type)throw Error("Unknown output config type: '"+r.type+"'");n=a.v[m];n||(n=new Wc(a.i,a.K),a.v[m]=n);return D(v,Xc(n,p,a.M),13);case 13:q=v.i,d[m]=q;case 7:r.transform&&d[m]&&(d[m]=r.transform(d[m]));v.h=3;break;case 14:t[w]=v.i;case 3:f=l.next();v.h=2;break;case 4:return v.return(d)}})}
function ld(a,b,c){var d;return E(function(e){return"number"===typeof c||c instanceof Uint8Array||c instanceof a.i.Uint8BlobList?e.return(c):c instanceof a.i.Texture2dDataOut?(d=a.v[b],d||(d=new Wc(a.i,a.K),a.v[b]=d),e.return(Xc(d,c,a.M))):e.return(void 0)})}
function id(a,b){for(var c=b.name||"$",d=[].concat(ea(b.wants)),e=new a.i.StringList,g=A(b.wants),f=g.next();!f.done;f=g.next())e.push_back(f.value);g=a.i.PacketListener.implement({onResults:function(h){for(var k={},l=0;l<b.wants.length;++l)k[d[l]]=h.get(l);var m=a.listeners[c];m&&(a.I=kd(a,k,b.outs).then(function(r){r=m(r);for(var p=0;p<b.wants.length;++p){var n=k[d[p]];"object"===typeof n&&n.hasOwnProperty&&n.hasOwnProperty("delete")&&n.delete()}r&&(a.I=r)}))}});a.j.attachMultiListener(e,g);e.delete()}
x.onResults=function(a,b){this.listeners[b||"$"]=a};Aa("Solution",ed);Aa("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function md(a){void 0===a&&(a=0);switch(a){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}
function nd(a){var b=this;a=a||{};this.h=new ed({locateFile:a.locateFile,files:function(c){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:md(c.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",
stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"object"!==typeof window||void 0===window.navigator?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,
graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(c){var d,e,g;return E(function(f){if(1==f.h)return d=md(c),e="third_party/mediapipe/modules/selfie_segmentation/"+d,D(f,gd(b.h,d),2);g=f.i;b.h.overrideFile(e,g);return f.return(!0)})}}}})}x=nd.prototype;x.close=function(){this.h.close();return Promise.resolve()};x.onResults=function(a){this.h.onResults(a)};
x.initialize=function(){var a=this;return E(function(b){return D(b,a.h.initialize(),0)})};x.reset=function(){this.h.reset()};x.send=function(a){var b=this;return E(function(c){return D(c,b.h.send(a),0)})};x.setOptions=function(a){this.h.setOptions(a)};Aa("SelfieSegmentation",nd);Aa("VERSION","0.1.1675465747");}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/videoEffects/BackgroundReplace.ts":
/*!***********************************************!*\
  !*** ./src/videoEffects/BackgroundReplace.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundReplace = void 0;
const selfie_segmentation_1 = __webpack_require__(/*! @mediapipe/selfie_segmentation */ "./node_modules/@mediapipe/selfie_segmentation/selfie_segmentation.js");
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/videoEffects/Camera.ts");
/**
 * Rolls up the SelfieSegmentation tf model and post processing into an easier to use class
 */
class BackgroundReplace {
    constructor(camera) {
        this.buffers = {};
        this.prevFrames = [];
        this.segmenter = new selfie_segmentation_1.SelfieSegmentation({
            //Todo: host models locally
            locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`
        });
        this.segmenter.setOptions({ modelSelection: 1 });
        this.camera = camera || new Camera_1.Camera();
    }
    start(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options = Object.assign({
                type: "bokeh",
                blurRadius: 10,
                jitterFrames: 2,
                maskBlur: 3,
                threshold: 160,
                lowCutoff: 127
            }, options);
            // Stop the camera if it is already running
            if (this.camera.isReady)
                this.camera.stop();
            yield this.camera.init();
            yield this.camera.start((video) => __awaiter(this, void 0, void 0, function* () {
                yield this.segmenter.send({ image: video });
            }));
        });
    }
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            this.camera.pause();
        });
    }
    stop() {
        this.segmenter.close();
        this.prevFrames = [];
        this.buffers = {};
        this.bgImageSrc = "";
    }
    onFrame(callback) {
        this.segmenter.onResults((results) => __awaiter(this, void 0, void 0, function* () {
            const [frame] = yield this.backgroundReplace(results);
            yield callback(frame);
        }));
    }
    stream(fps) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        this.segmenter.onResults((results) => __awaiter(this, void 0, void 0, function* () {
            const [frame] = yield this.backgroundReplace(results);
            canvas.width = frame.width;
            canvas.height = frame.height;
            ctx.drawImage(frame, 0, 0);
        }));
        return canvas.captureStream(fps);
    }
    ensureBuffer(key, w, h) {
        if (this.buffers[key]) {
            return this.buffers[key];
        }
        else {
            console.log("Creating buffer:", key);
            const canvas = new OffscreenCanvas(w, h);
            const ctx = canvas.getContext("2d");
            this.buffers[key] = [canvas, ctx];
            return this.buffers[key];
        }
    }
    ensureImageBuffer(src, width, height) {
        const [canvas, ctx] = this.ensureBuffer("background", width, height);
        if (this.bgImageSrc !== src) {
            const img = new Image();
            img.onload = () => {
                var ratio = Math.max(width / img.width, height / img.height);
                var shiftX = (width - img.width * ratio) / 2;
                var shiftY = (height - img.height * ratio) / 2;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, img.width, img.height, shiftX, shiftY, img.width * ratio, img.height * ratio);
            };
            this.bgImageSrc = img.src = src;
        }
        return [canvas, ctx];
    }
    mask(results) {
        const { width, height } = results.image;
        const [canvas, ctx] = this.ensureBuffer("mask", width, height);
        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.filter = `blur(${this.options.maskBlur}px)`;
        ctx.drawImage(results.segmentationMask, 0, 0);
        const editableImage = ctx.getImageData(0, 0, width, height);
        const originalImage = new ImageData(new Uint8ClampedArray(editableImage.data), editableImage.width, editableImage.height);
        for (let i = 0; i < editableImage.data.length; i += 4) {
            if (editableImage.data[i + 3] > 253) {
                // If the network is fairly certain its a person just go with it
                editableImage.data[i + 3] = 255;
            }
            else {
                let val = editableImage.data[i + 3];
                // Mix in previous frames if we have any
                // Helps to reduce jitter as the model lacks temporal consistency
                if (this.prevFrames.length) {
                    let pval = 0;
                    for (let frame of this.prevFrames)
                        pval += frame.data[i + 3];
                    val = (val + pval) / (this.prevFrames.length + 1);
                }
                // Linear map the input values to full range alpha
                // Input: lowCutoff to 255
                // Output: 32 to 255
                editableImage.data[i + 3] = ((255 - 32) * (val - this.options.lowCutoff)) / (255 - this.options.lowCutoff) + 32;
            }
        }
        ctx.putImageData(editableImage, 0, 0);
        ctx.restore();
        // Store the last frame
        if (this.options.jitterFrames) {
            this.prevFrames.unshift(originalImage);
            if (this.prevFrames.length > this.options.jitterFrames) {
                this.prevFrames = this.prevFrames.slice(0, this.options.jitterFrames);
            }
        }
        return canvas;
    }
    backgroundReplace(results) {
        const { width, height } = results.image;
        const [canvas, ctx] = this.ensureBuffer("output", width, height);
        const mask = this.mask(results);
        ctx.save();
        // Draw the original captured image
        ctx.drawImage(results.image, 0, 0);
        // Keep the original image where the mask overlaps
        ctx.globalCompositeOperation = "destination-in";
        ctx.filter = `blur(4px)`;
        ctx.drawImage(mask, 0, 0);
        // Draw the new background under the current contents
        ctx.globalCompositeOperation = "destination-over";
        switch (this.options.type) {
            case "bokeh":
                ctx.filter = `blur(${this.options.blurRadius}px)`;
                ctx.drawImage(results.image, 0, 0);
                break;
            case "replace":
                const [bg] = this.ensureImageBuffer(this.options.src, width, height);
                ctx.filter = "none";
                ctx.drawImage(bg, 0, 0);
                break;
        }
        ctx.restore();
        return [canvas, mask];
    }
}
exports.BackgroundReplace = BackgroundReplace;


/***/ }),

/***/ "./src/videoEffects/Camera.ts":
/*!************************************!*\
  !*** ./src/videoEffects/Camera.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
class Camera {
    constructor() {
        this.initialized = false;
    }
    get isReady() {
        return this.initialized;
    }
    init(videoTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this.stream = yield navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720, frameRate: 25, facingMode: { ideal: "user" } }, audio: false });
            this.initialized = new Promise((resolve) => {
                this.video = videoTag;
                this.video.srcObject = this.stream;
                this.video.onloadedmetadata = () => {
                    this.initialized = true;
                    resolve(true);
                };
            });
            return this.initialized;
        });
    }
    start(onFrame) {
        return __awaiter(this, void 0, void 0, function* () {
            const fn = (frame, meta) => __awaiter(this, void 0, void 0, function* () {
                if (!this.video)
                    return;
                yield onFrame(this.video, frame, meta);
                this.frameHandle = this.video.requestVideoFrameCallback(fn);
            });
            if (!this.video || !this.initialized)
                throw "Call Camera.init first";
            yield this.video.play();
            this.frameHandle = this.video.requestVideoFrameCallback(fn);
        });
    }
    pause() {
        if (!this.video || !this.initialized)
            throw "Call Camera.init first";
        this.video.pause();
        this.video.cancelVideoFrameCallback(this.frameHandle);
    }
    stop() {
        this.video && this.video.pause();
        (this.video && this.frameHandle) && this.video.cancelVideoFrameCallback(this.frameHandle);
        this.stream = null;
        this.video = null;
        this.initialized = false;
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./src/videoEffects/MeshReplace.ts":
/*!*****************************************!*\
  !*** ./src/videoEffects/MeshReplace.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshReplace = void 0;
const face_mesh_1 = __webpack_require__(/*! @mediapipe/face_mesh */ "./node_modules/@mediapipe/face_mesh/face_mesh.js");
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/videoEffects/Camera.ts");
const meshPoints_1 = __webpack_require__(/*! ./meshPoints */ "./src/videoEffects/meshPoints.ts");
class MeshReplace {
    constructor(camera) {
        this.buffers = {};
        this.prevFrames = [];
        this.faceMesh = new face_mesh_1.FaceMesh({
            //Todo: host models locally
            locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
        });
        this.faceMesh.setOptions({
            refineLandmarks: true,
            minDetectionConfidence: 0.2,
            maxNumFaces: 3
        });
        this.camera = camera || new Camera_1.Camera();
    }
    start(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options = Object.assign({}, options);
            // Stop the camera if it is already running
            if (this.camera.isReady)
                this.camera.stop();
            yield this.camera.init(options.videoTag);
            yield this.camera.start((video) => __awaiter(this, void 0, void 0, function* () {
                yield this.faceMesh.send({ image: video });
            }));
        });
    }
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            this.camera.pause();
        });
    }
    stop() {
        this.faceMesh.close();
        this.prevFrames = [];
        this.buffers = {};
        this.bgImageSrc = "";
    }
    drawPoints(meshPoints, points, ctx, fillStyle) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        ctx.save();
        ctx.fillStyle = fillStyle;
        for (let point of points) {
            const x = meshPoints[point].x * w;
            const y = meshPoints[point].y * h;
            ctx.fillRect(x, y, 10, 10);
        }
        ctx.restore();
    }
    drawPoint(coordinates, ctx, fillStyle) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        ctx.save();
        ctx.fillStyle = fillStyle;
        const x = coordinates.x * w;
        const y = coordinates.y * h;
        ctx.fillRect(x, y, 10, 10);
        ctx.restore();
    }
    drawPupil(ctx, data, xRadius) {
        const w = ctx.canvas.width;
        const h = ctx.canvas.height;
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "yellow";
        ctx.ellipse(data.pupil.x * w, data.pupil.y * h, 2 * xRadius * w, 2 * xRadius * h, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        //ctx.moveTo(data.normalizedPupil.x * w, data.normalizedPupil.y * h);
        ctx.ellipse(data.pupil.x * w, data.pupil.y * h, xRadius * w / 2, xRadius * w, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    drawBugEyes(ctx, data) {
        const pupilRadius = this.getDistance(Object.assign(Object.assign({}, data.eyes.left.pupil), { z: 0 }), Object.assign(Object.assign({}, data.eyes.right.pupil), { z: 0 })) / 4;
        this.drawPupil(ctx, data.eyes.left, pupilRadius);
        this.drawPupil(ctx, data.eyes.right, pupilRadius);
    }
    /**
     * Approximate pupil based on iris position if available if not use the eye itself
     * @param meshPoints Results object from the FaceMesh network
     * @param side l|r Which eye. Left or Right
     * @returns Normalized coordinates {x: number y: number z: number }
     */
    getPupil(meshPoints, side, useIris) {
        useIris = useIris && meshPoints.length > 469;
        const points = useIris ?
            side == "l" ? meshPoints_1.minimal.leftIris : meshPoints_1.minimal.rightIris :
            side == "l" ? meshPoints_1.minimal.leftEye : meshPoints_1.minimal.rightEye;
        const coords = points.map((point => meshPoints[point]));
        return this.getCentre(coords);
    }
    /**
     * Get center of a group of points
     * @param landmarks
     * @returns Normalized coordinates {x: number y: number z: number }
     */
    getCentre(landmarks) {
        const range = landmarks.reduce((prev, curr, idx) => {
            return {
                xMax: Math.max(prev.xMax, curr.x),
                yMax: Math.max(prev.yMax, curr.y),
                zMax: Math.max(prev.zMax, curr.z),
                xMin: Math.min(prev.xMin, curr.x),
                yMin: Math.min(prev.yMin, curr.y),
                zMin: Math.min(prev.zMin, curr.z)
            };
        }, {
            xMin: Number.MAX_SAFE_INTEGER,
            xMax: Number.MIN_SAFE_INTEGER,
            yMin: Number.MAX_SAFE_INTEGER,
            yMax: Number.MIN_SAFE_INTEGER,
            zMin: Number.MAX_SAFE_INTEGER,
            zMax: Number.MIN_SAFE_INTEGER
        });
        const result = {
            x: (range.xMin + range.xMax) * 0.5,
            y: (range.yMin + range.yMax) * 0.5,
            z: (range.zMin + range.zMax) * 0.5
        };
        return result;
    }
    getDistance(p1, p2, axis) {
        p2 = p2 || { x: 0, y: 0, z: 0 };
        const x = (!axis || axis.x) ? Math.pow((p2.x - p1.x), 2) : 0;
        const y = (!axis || axis.y) ? Math.pow((p2.y - p1.y), 2) : 0;
        const z = (!axis || axis.z) ? Math.pow((p2.z - p1.z), 2) : 0;
        return Math.sqrt(x + y + z);
    }
    /**
     * Returns for each eye:
     *  Gaze direction
     *  Eye openness
     *  Eyebrow height
     *
     * @returns
     */
    getEyeData(meshPoints, side) {
        // Might be more accurate to use the iris?
        //const haveIris = meshPoints.length > 469;        
        const browPoints = side == "l" ? meshPoints_1.minimal.leftEyebrow : meshPoints_1.minimal.rightEyebrow;
        const eyePoints = side == "l" ? meshPoints_1.minimal.leftEye : meshPoints_1.minimal.rightEye;
        const irisPoints = side == "l" ? meshPoints_1.minimal.leftIris : meshPoints_1.minimal.rightIris;
        const eyeCoords = eyePoints.map((point => meshPoints[point]));
        const irisCoords = irisPoints.map((point => meshPoints[point]));
        const browCoords = browPoints.map((point => meshPoints[point]));
        const [eyeOuter, eyeLower, eyeUpper, eyeInner] = eyeCoords;
        const eyeCenter = this.getCentre(eyeCoords);
        const eyeHeight = this.getDistance(eyeLower, eyeUpper);
        const eyeWidth = this.getDistance(eyeOuter, eyeInner);
        const irisDiameter = this.getDistance(irisCoords[0], irisCoords[2]);
        const openRate = eyeHeight / irisDiameter;
        const isOpen = openRate > 0.35;
        const lowerPos = this.getDistance(eyeCenter, eyeLower) / (irisDiameter / 2);
        const upperPos = this.getDistance(eyeCenter, eyeUpper) / (irisDiameter / 2);
        // Get pupil coordinates normalized and relative to the eye
        const eyePupil = this.getPupil(meshPoints, side, true);
        const xMin = Math.min(eyeOuter.x, eyeInner.x);
        const xMax = Math.max(eyeOuter.x, eyeInner.x);
        const normalizedPupil = {
            x: (eyePupil.x - xMin) / (xMax - xMin),
            y: (eyePupil.y - eyeLower.y) / (eyeUpper.y - eyeLower.y)
        };
        return {
            isOpen, openRate, lowerPos, upperPos,
            normalizedPupil, pupil: eyePupil
        };
    }
    getMouthData() {
        return {};
    }
    getYawPitchRoll(meshPoints) {
        const orientationPts = meshPoints_1.minimal.orientation.map((point => meshPoints[point]));
        // A point near the centre of the head (avg of ears at the moment)
        const ctrPoint = {
            x: (orientationPts[1].x + orientationPts[2].x) * 0.5,
            y: (orientationPts[1].y + orientationPts[2].y) * 0.5,
            z: 0
        };
        const yaw = Math.atan2(ctrPoint.x - orientationPts[0].x, ctrPoint.z - orientationPts[0].z) * 57.295;
        const pitchAdj = this.getDistance(orientationPts[0], ctrPoint, { x: true, z: true });
        const pitch = Math.atan2(ctrPoint.y - orientationPts[0].y, pitchAdj) * 57.295;
        // This is a bit of a mess
        const hPoint = { x: orientationPts[1].x, y: orientationPts[2].y, z: 0 };
        const earDist = this.getDistance(orientationPts[1], orientationPts[2], { x: true, y: true });
        const hDist = this.getDistance(hPoint, orientationPts[2], { x: true, y: true });
        const dRoll = earDist / hDist % 1;
        const roll = earDist == hDist ?
            0 :
            (hPoint.y > orientationPts[1].y) ?
                Math.asin(dRoll % 1) * 57.295 :
                Math.asin(dRoll % 1) * -57.295;
        return { yaw, pitch, roll };
    }
    stream(fps, frameCallback) {
        const canvas = document.createElement("canvas");
        canvas.style.display = "none";
        const ctx = canvas.getContext("2d");
        this.faceMesh.onResults((results) => __awaiter(this, void 0, void 0, function* () {
            const frame = results.image;
            canvas.width = frame.width;
            canvas.height = frame.height;
            if (!results ||
                !results.multiFaceLandmarks ||
                !results.multiFaceLandmarks[0] ||
                !results.multiFaceLandmarks[0].length)
                return;
            for (const meshPoints of results.multiFaceLandmarks) {
                const ret = {
                    rotation: this.getYawPitchRoll(meshPoints),
                    eyes: {
                        left: this.getEyeData(meshPoints, "l"),
                        right: this.getEyeData(meshPoints, "r")
                    },
                    meshPoints
                };
                frameCallback && (yield frameCallback(ret));
                //this.drawPoints(meshPoints, minimal.orientation, ctx, "red");
                //this.drawPoints(meshPoints, minimal.leftEye, ctx, "grey")
                //this.drawPoints(meshPoints, minimal.rightEye, ctx, "grey")
                this.drawBugEyes(ctx, ret);
                //this.drawPoints(meshPoints, minimal.lips, ctx, "green");
                // this.drawPoint({ x: ret.eyes.left.normalizedPupil.x, y: ret.eyes.left.normalizedPupil.y, z: 0 }, ctx, "blue")
                // this.drawPoints(meshPoints, minimal.leftEyebrow, ctx, "green");
                //this.drawPoints(meshPoints, minimal.rightEyebrow, ctx, "green");
                //this.drawPoints(meshPoints, minimal.leftIris, ctx, "green");
                // this.drawPoints(meshPoints, minimal.leftEye, ctx, "green");
                //this.drawPoints(meshPoints, minimal.rightEye, ctx, "green");
                //this.drawPoints(meshPoints, minimal.orientation, ctx, "green");
            }
        }));
        return canvas.captureStream(fps);
    }
    ensureBuffer(key, w, h) {
        if (this.buffers[key]) {
            return this.buffers[key];
        }
        else {
            console.log("Creating buffer:", key);
            const canvas = new OffscreenCanvas(w, h);
            const ctx = canvas.getContext("2d");
            this.buffers[key] = [canvas, ctx];
            return this.buffers[key];
        }
    }
}
exports.MeshReplace = MeshReplace;


/***/ }),

/***/ "./src/videoEffects/VideoEffects.tsx":
/*!*******************************************!*\
  !*** ./src/videoEffects/VideoEffects.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceEffectsRoute = exports.VideoEffects = exports.VideoEffectsRoute = void 0;
const React = __importStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const styled_components_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'styled-components'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const react_router_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const react_router_dom_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const BackgroundReplace_1 = __webpack_require__(/*! ./BackgroundReplace */ "./src/videoEffects/BackgroundReplace.ts");
const MeshReplace_1 = __webpack_require__(/*! ./MeshReplace */ "./src/videoEffects/MeshReplace.ts");
const react_dom_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const Button = styled_components_1.default.div `
    background-color: blue;
    border-radius: 5px;
    color: white;
    width: fit-content;
`;
const VideoEffectsRoute = () => {
    const match = (0, react_router_1.useMatch)("/videoEffect");
    if (!match)
        return null;
    return React.createElement(exports.VideoEffects, null);
};
exports.VideoEffectsRoute = VideoEffectsRoute;
const VideoEffects = () => {
    const maskInstance = React.useRef();
    const videoRef = React.useRef(null);
    React.useEffect(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            if (!videoRef.current)
                return;
            maskInstance.current = new BackgroundReplace_1.BackgroundReplace();
            videoRef.current.srcObject = maskInstance.current.stream();
            videoRef.current.play();
            maskInstance.current.start({
                type: "replace",
                src: "/apps/assets/videoBackgrounds/disney.jpg",
                jitterFrames: 2,
                blurRadius: 40
            });
        }))();
        return () => {
            var _a;
            (_a = maskInstance.current) === null || _a === void 0 ? void 0 : _a.stop();
        };
    }, []);
    return React.createElement(Overlay, null,
        React.createElement("video", { ref: videoRef }),
        React.createElement(Button, { onClick: () => {
                maskInstance.current && maskInstance.current.start({
                    type: "replace",
                    src: "/apps/assets/videoBackgrounds/disney.jpg",
                    jitterFrames: 2,
                    blurRadius: 40
                });
            } }, "Background 1"),
        React.createElement(Button, { onClick: () => {
                maskInstance.current && maskInstance.current.start({
                    type: "replace",
                    src: "/apps/assets/videoBackgrounds/office.jpg",
                    jitterFrames: 2,
                    blurRadius: 40
                });
            } }, "Background 2"),
        React.createElement(Button, { onClick: () => {
                maskInstance.current && maskInstance.current.start({
                    type: "bokeh",
                    jitterFrames: 2,
                    blurRadius: 40
                });
            } }, "Background 3"));
};
exports.VideoEffects = VideoEffects;
const FaceEffectsRoute = () => {
    const match = (0, react_router_1.useMatch)("/face");
    if (!match)
        return null;
    return React.createElement(FaceEffects, null);
};
exports.FaceEffectsRoute = FaceEffectsRoute;
const FaceEffects = () => {
    const meshInstance = React.useRef();
    const videoRef = React.useRef(null);
    const videoRefShow = React.useRef(null);
    const floMojiRef = React.useRef(null);
    const svgRefs = React.useRef().current;
    const leftEyeOpen = React.useRef(true);
    const counter = React.useRef(1);
    const canvasRef = React.useRef(null);
    const onFrame = (data) => {
        if (!floMojiRef.current)
            return;
        const { rotation } = data;
        floMojiRef.current.style.transform = `perspective(500px) rotateX(${rotation.pitch / 2}deg) rotateY(${rotation.yaw / 2}deg) rotateZ(${rotation.roll / 2}deg)`;
        if (data.eyes.left.isOpen === false) {
            console.log("$RT", "left eye closed");
        }
        if (data.eyes.left.isOpen != leftEyeOpen.current && (svgRefs === null || svgRefs === void 0 ? void 0 : svgRefs.leftEye)) {
            if (data.eyes.left.isOpen) {
                svgRefs.leftEye.style.transform = "scaleY(1)";
            }
            else {
                svgRefs.leftEye.style.transform = "scaleY(0.5)";
            }
            leftEyeOpen.current = data.eyes.left.isOpen;
        }
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                ctx.clearRect(0, 0, 600, 600);
                ctx.fillStyle = "white";
                for (const meshPoint of data.meshPoints) {
                    ctx.fillRect(meshPoint.x * 600, meshPoint.y * 600, 2, 2);
                }
                ctx.fill();
            }
        }
        return;
    };
    React.useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                ctx.fillStyle = "white";
                ctx.fillRect(100, 100, 10, 10);
                ctx.fill();
            }
        }
    }, []);
    React.useEffect(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            if (!videoRef.current || !videoRefShow.current)
                return;
            meshInstance.current = new MeshReplace_1.MeshReplace();
            videoRef.current.srcObject = meshInstance.current.stream(25, onFrame);
            videoRef.current.play();
            meshInstance.current.start({ videoTag: videoRefShow.current });
        }))();
        return () => {
            var _a;
            (_a = meshInstance.current) === null || _a === void 0 ? void 0 : _a.stop();
        };
    }, []);
    return React.createElement(Overlay, null,
        React.createElement("video", { ref: videoRef, style: { position: "absolute" } }),
        React.createElement("video", { ref: videoRefShow }),
        React.createElement("canvas", { width: 600, height: 600, ref: canvasRef, style: { width: 600, height: 600 } }),
        React.createElement(FloMoji, { ref: floMojiRef, viewBox: "0 0 128 160" },
            React.createElement("ellipse", { cx: "64", cy: "80", rx: "60", ry: "80", fill: "blue" }),
            React.createElement("ellipse", { ref: svgRefs === null || svgRefs === void 0 ? void 0 : svgRefs.leftEye, cx: "43", cy: "48", rx: "7", ry: "8.5", fill: "black" }),
            React.createElement("ellipse", { ref: svgRefs === null || svgRefs === void 0 ? void 0 : svgRefs.rightEye, cx: "85", cy: "48", rx: "7", ry: "8.5", fill: "black" }),
            React.createElement("ellipse", { cx: "64", cy: "64", rx: "9", ry: "7", fill: "black" })));
};
const Overlay = styled_components_1.default.div `
    position: fixed;
    top: 0; 
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #e1e1e1;
    z-index: 100;

    & video {
        width: 640px;
        height: 360px;
        border: 1px solid #ff0000;
    }

    & canvas {

        border: 1px solid #0000ff;
        background: #000;
    }
`;
const FloMoji = styled_components_1.default.svg `
    width: 256px;
    height: 256px;
    border: 1px solid hotpink;
`;
const App = () => {
    const [started, setStart] = React.useState(false);
    if (started)
        return React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(exports.FaceEffectsRoute, null),
            React.createElement(exports.VideoEffectsRoute, null));
    return React.createElement(Button, { onClick: () => {
            new AudioContext();
            setStart(true);
        } }, "Start");
};
window["bootstrapProducer"] = () => {
    // Register a service worker
    (0, react_dom_1.render)(React.createElement(App, null), document.querySelector("#video"));
};


/***/ }),

/***/ "./src/videoEffects/meshPoints.ts":
/*!****************************************!*\
  !*** ./src/videoEffects/meshPoints.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.minimal = exports.full = void 0;
// Full Mesh Points
exports.full = {
    leftEye: [263, 249, 390, 373, 374, 380, 381, 382, 362, 466, 388, 387, 386, 385, 384, 398],
    rightEye: [33, 7, 163, 144, 145, 153, 154, 155, 133, 246, 161, 160, 159, 158, 157, 173],
    leftIris: [475, 476, 477, 474],
    rightIris: [470, 471, 472, 469],
    rightEyebrow: [46, 53, 52, 65, 55, 70, 63, 105, 66, 107],
    leftEyebrow: [276, 283, 282, 295, 285, 300, 293, 334, 296, 336],
    nose: [1],
    lips: [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 185, 40, 39, 37, 0, 267, 269, 270, 409, 78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, 191, 80, 81, 82, 13, 312, 311, 310, 415]
};
// POIs
exports.minimal = {
    rightEye: [33, 145, 159, 133],
    leftEye: [263, 374, 386, 362],
    leftIris: [475, 476, 477, 474],
    rightIris: [470, 471, 472, 469],
    rightEyebrow: [70, 105, 107],
    leftEyebrow: [300, 334, 336],
    nose: [1],
    lips: [61, 0, 13, 14, 17, 291],
    plane: [10, 152, 127, 356],
    oval: [10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109],
    orientation: [1, 127, 356], // nose, leftEar, rightEar, forehead, chin
};


/***/ })

/******/ });
//# sourceMappingURL=video.js.map