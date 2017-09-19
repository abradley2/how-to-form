(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function insertCss(e,t){if(t=t||{},void 0===e)throw new Error(usage);var s=!0===t.prepend?"prepend":"append",n=void 0!==t.container?t.container:document.querySelector("head"),r=containers.indexOf(n);-1===r&&(r=containers.push(n)-1,styleElements[r]={});var o;return void 0!==styleElements[r]&&void 0!==styleElements[r][s]?o=styleElements[r][s]:(o=styleElements[r][s]=createStyleElement(),"prepend"===s?n.insertBefore(o,n.childNodes[0]):n.appendChild(o)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),o.styleSheet?o.styleSheet.cssText+=e:o.textContent+=e,o}function createStyleElement(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}var containers=[],styleElements=[],usage="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";module.exports=insertCss,module.exports.insertCss=insertCss;

},{}],2:[function(require,module,exports){
(function (global){
!function(){"use strict";function e(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}function t(e){for(var t,n="div",r=[],o={};t=i.exec(e);){var a=t[1],u=t[2];if(""===a&&""!==u)n=u;else if("#"===a)o.id=u;else if("."===a)r.push(u);else if("["===t[3][0]){var f=t[6];f&&(f=f.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(f):o[t[4]]=""===f?f:f||!0}}return r.length>0&&(o.className=r.join(" ")),l[e]={tag:n,attrs:o}}function n(t,n,r){var o,i,l=!1,u=n.className||n.class;for(var f in t.attrs)a.call(t.attrs,f)&&(n[f]=t.attrs[f]);void 0!==u&&(void 0!==n.class&&(n.class=void 0,n.className=u),null!=t.attrs.className&&(n.className=t.attrs.className+" "+u));for(var f in n)if(a.call(n,f)&&"key"!==f){l=!0;break}return Array.isArray(r)&&1===r.length&&null!=r[0]&&"#"===r[0].tag?i=r[0].children:o=r,e(t.tag,n.key,l?n:void 0,o,i)}function r(r){var o,i=arguments[1],a=2;if(null==r||"string"!=typeof r&&"function"!=typeof r&&"function"!=typeof r.view)throw Error("The selector must be either a string or a component.");if("string"==typeof r)var u=l[r]||t(r);if(null==i?i={}:("object"!=typeof i||null!=i.tag||Array.isArray(i))&&(i={},a=1),arguments.length===a+1)o=arguments[a],Array.isArray(o)||(o=[o]);else for(o=[];a<arguments.length;)o.push(arguments[a++]);var f=e.normalizeChildren(o);return"string"==typeof r?n(u,i,f):e(r,i.key,i,f)}function o(e){var t=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var o=Date.now();0===t||o-t>=16?(t=o,e()):null===n&&(n=r(function(){n=null,e(),t=Date.now()},16-(o-t)))}}e.normalize=function(t){return Array.isArray(t)?e("[",void 0,void 0,e.normalizeChildren(t),void 0,void 0):null!=t&&"object"!=typeof t?e("#",void 0,void 0,!1===t?"":t,void 0,void 0):t},e.normalizeChildren=function(t){for(var n=0;n<t.length;n++)t[n]=e.normalize(t[n]);return t};var i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,l={},a={}.hasOwnProperty;r.trust=function(t){return null==t&&(t=""),e("<",void 0,void 0,t,void 0,void 0)},r.fragment=function(t,n){return e("[",t.key,t,e.normalizeChildren(n),void 0,void 0)};var u=r;if((f=function(e){function t(e,t){return function l(f){var c;try{if(!t||null==f||"object"!=typeof f&&"function"!=typeof f||"function"!=typeof(c=f.then))s(function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",f);for(var n=0;n<e.length;n++)e[n](f);o.length=0,i.length=0,u.state=t,u.retry=function(){l(f)}});else{if(f===r)throw new TypeError("Promise can't be resolved w/ itself");n(c.bind(f))}}catch(e){a(e)}}}function n(e){function t(e){return function(t){n++>0||e(t)}}var n=0,r=t(a);try{e(t(l),r)}catch(e){r(e)}}if(!(this instanceof f))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var r=this,o=[],i=[],l=t(o,!0),a=t(i,!1),u=r._instance={resolvers:o,rejectors:i},s="function"==typeof setImmediate?setImmediate:setTimeout;n(e)}).prototype.then=function(e,t){function n(e,t,n,l){t.push(function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(e){o&&o(e)}}),"function"==typeof i.retry&&l===i.state&&i.retry()}var r,o,i=this._instance,l=new f(function(e,t){r=e,o=t});return n(e,i.resolvers,r,!0),n(t,i.rejectors,o,!1),l},f.prototype.catch=function(e){return this.then(null,e)},f.resolve=function(e){return e instanceof f?e:new f(function(t){t(e)})},f.reject=function(e){return new f(function(t,n){n(e)})},f.all=function(e){return new f(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)})},f.race=function(e){return new f(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=f);f=window.Promise}else if("undefined"!=typeof global){void 0===global.Promise&&(global.Promise=f);var f=global.Promise}var s=function(e){function t(e,r){if(Array.isArray(r))for(o=0;o<r.length;o++)t(e+"["+o+"]",r[o]);else if("[object Object]"===Object.prototype.toString.call(r))for(var o in r)t(e+"["+o+"]",r[o]);else n.push(encodeURIComponent(e)+(null!=r&&""!==r?"="+encodeURIComponent(r):""))}if("[object Object]"!==Object.prototype.toString.call(e))return"";var n=[];for(var r in e)t(r,e[r]);return n.join("&")},c=new RegExp("^file://","i"),d=function(e,t){function n(){function e(){0==--t&&"function"==typeof f&&f()}var t=0;return function n(r){var o=r.then;return r.then=function(){t++;var i=o.apply(r,arguments);return i.then(e,function(n){if(e(),0===t)throw n}),n(i)},r}}function r(e,t){if("string"==typeof e){var n=e;null==(e=t||{}).url&&(e.url=n)}return e}function o(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function i(e,t){var n=s(t);return""!==n&&(e+=(e.indexOf("?")<0?"?":"&")+n),e}function l(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function a(e){return e.responseText}function u(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}var f,d=0;return{request:function(f,s){var d=n();f=r(f,s);var v=new t(function(t,n){null==f.method&&(f.method="GET"),f.method=f.method.toUpperCase();var r="GET"!==f.method&&"TRACE"!==f.method&&("boolean"!=typeof f.useBody||f.useBody);"function"!=typeof f.serialize&&(f.serialize="undefined"!=typeof FormData&&f.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof f.deserialize&&(f.deserialize=l),"function"!=typeof f.extract&&(f.extract=a),f.url=o(f.url,f.data),r?f.data=f.serialize(f.data):f.url=i(f.url,f.data);var s=new e.XMLHttpRequest,d=!1,v=s.abort;s.abort=function(){d=!0,v.call(s)},s.open(f.method,f.url,"boolean"!=typeof f.async||f.async,"string"==typeof f.user?f.user:void 0,"string"==typeof f.password?f.password:void 0),f.serialize===JSON.stringify&&r&&s.setRequestHeader("Content-Type","application/json; charset=utf-8"),f.deserialize===l&&s.setRequestHeader("Accept","application/json, text/*"),f.withCredentials&&(s.withCredentials=f.withCredentials);for(var h in f.headers)({}).hasOwnProperty.call(f.headers,h)&&s.setRequestHeader(h,f.headers[h]);"function"==typeof f.config&&(s=f.config(s,f)||s),s.onreadystatechange=function(){if(!d&&4===s.readyState)try{var e=f.extract!==a?f.extract(s,f):f.deserialize(f.extract(s,f));if(s.status>=200&&s.status<300||304===s.status||c.test(f.url))t(u(f.type,e));else{var r=new Error(s.responseText);for(var o in e)r[o]=e[o];n(r)}}catch(e){n(e)}},r&&null!=f.data?s.send(f.data):s.send()});return!0===f.background?v:d(v)},jsonp:function(l,a){var f=n();l=r(l,a);var s=new t(function(t,n){var r=l.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+d++,a=e.document.createElement("script");e[r]=function(n){a.parentNode.removeChild(a),t(u(l.type,n)),delete e[r]},a.onerror=function(){a.parentNode.removeChild(a),n(new Error("JSONP request failed")),delete e[r]},null==l.data&&(l.data={}),l.url=o(l.url,l.data),l.data[l.callbackKey||"callback"]=r,a.src=i(l.url,l.data),e.document.documentElement.appendChild(a)});return!0===l.background?s:f(s)},setCompletionCallback:function(e){f=e}}}(window,f),v=function(t){function n(e){return e.attrs&&e.attrs.xmlns||J[e.tag]}function r(e,t,n,r,i,l,a){for(var u=n;u<r;u++){var f=t[u];null!=f&&o(e,f,i,a,l)}}function o(e,t,n,r,o){var f=t.tag;if("string"!=typeof f)return s(e,t,n,r,o);switch(t.state={},null!=t.attrs&&D(t.attrs,t,n),f){case"#":return i(e,t,o);case"<":return l(e,t,o);case"[":return a(e,t,n,r,o);default:return u(e,t,n,r,o)}}function i(e,t,n){return t.dom=H.createTextNode(t.children),k(e,t.dom,n),t.dom}function l(e,t,n){var r={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(t.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",o=H.createElement(r);o.innerHTML=t.children,t.dom=o.firstChild,t.domSize=o.childNodes.length;for(var i,l=H.createDocumentFragment();i=o.firstChild;)l.appendChild(i);return k(e,l,n),l}function a(e,t,n,o,i){var l=H.createDocumentFragment();if(null!=t.children){var a=t.children;r(l,a,0,a.length,n,null,o)}return t.dom=l.firstChild,t.domSize=l.childNodes.length,k(e,l,i),l}function u(t,o,i,l,a){var u=o.tag,f=o.attrs,s=f&&f.is,c=(l=n(o)||l)?s?H.createElementNS(l,u,{is:s}):H.createElementNS(l,u):s?H.createElement(u,{is:s}):H.createElement(u);if(o.dom=c,null!=f&&N(o,f,l),k(t,c,a),null!=o.attrs&&null!=o.attrs.contenteditable)S(o);else if(null!=o.text&&(""!==o.text?c.textContent=o.text:o.children=[e("#",void 0,void 0,o.text,void 0,void 0)]),null!=o.children){var d=o.children;r(c,d,0,d.length,i,null,l),T(o)}return c}function f(t,n){var r;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(r=t.state.view).$$reentrantLock$$)return B;r.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(r=t.tag).$$reentrantLock$$)return B;r.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}if(t._state=t.state,null!=t.attrs&&D(t.attrs,t,n),D(t._state,t,n),t.instance=e.normalize(t._state.view.call(t.state,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}function s(e,t,n,r,i){if(f(t,n),null!=t.instance){var l=o(e,t.instance,n,r,i);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,k(e,l,i),l}return t.domSize=0,B}function c(e,t,n,i,l,a,u){if(t!==n&&(null!=t||null!=n))if(null==t)r(e,n,0,n.length,l,a,u);else if(null==n)C(t,0,t.length,n);else{if(t.length===n.length){for(var f=!1,s=0;s<n.length;s++)if(null!=n[s]&&null!=t[s]){f=null==n[s].key&&null==t[s].key;break}if(f){for(s=0;s<t.length;s++)t[s]!==n[s]&&(null==t[s]&&null!=n[s]?o(e,n[s],l,u,x(t,s+1,a)):null==n[s]?C(t,s,s+1,n):d(e,t[s],n[s],l,x(t,s+1,a),i,u));return}}if(i=i||y(t,n)){var c=t.pool;t=t.concat(t.pool)}for(var v,h=0,p=0,m=t.length-1,g=n.length-1;m>=h&&g>=p;)if((S=t[h])!==(E=n[p])||i)if(null==S)h++;else if(null==E)p++;else if(S.key===E.key){N=null!=c&&h>=t.length-c.length||null==c&&i;p++,d(e,S,E,l,x(t,++h,a),N,u),i&&S.tag===E.tag&&k(e,b(S),a)}else if((S=t[m])!==E||i)if(null==S)m--;else if(null==E)p++;else{if(S.key!==E.key)break;N=null!=c&&m>=t.length-c.length||null==c&&i;d(e,S,E,l,x(t,m+1,a),N,u),(i||p<g)&&k(e,b(S),x(t,h,a)),m--,p++}else m--,p++;else h++,p++;for(;m>=h&&g>=p;){var S=t[m],E=n[g];if(S!==E||i)if(null==S)m--;else if(null==E)g--;else if(S.key===E.key){N=null!=c&&m>=t.length-c.length||null==c&&i;d(e,S,E,l,x(t,m+1,a),N,u),i&&S.tag===E.tag&&k(e,b(S),a),null!=S.dom&&(a=S.dom),m--,g--}else{if(v||(v=w(t,m)),null!=E){var z=v[E.key];if(null!=z){var A=t[z],N=null!=c&&z>=t.length-c.length||null==c&&i;d(e,A,E,l,x(t,m+1,a),i,u),k(e,b(A),a),t[z].skip=!0,null!=A.dom&&(a=A.dom)}else a=o(e,E,l,u,a)}g--}else m--,g--;if(g<p)break}r(e,n,p,g+1,l,a,u),C(t,h,m+1,n)}}function d(e,t,n,r,i,l,a){var u=t.tag;if(u===n.tag){if(n.state=t.state,n._state=t._state,n.events=t.events,!l&&F(n,t))return;if("string"==typeof u)switch(null!=n.attrs&&(l?(n.state={},D(n.attrs,n,r)):q(n.attrs,n,r)),u){case"#":v(t,n);break;case"<":h(e,t,n,i);break;case"[":p(e,t,n,l,r,i,a);break;default:m(t,n,l,r,a)}else g(e,t,n,r,i,l,a)}else E(t,null),o(e,n,r,a,i)}function v(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children),t.dom=e.dom}function h(e,t,n,r){t.children!==n.children?(b(t),l(e,n,r)):(n.dom=t.dom,n.domSize=t.domSize)}function p(e,t,n,r,o,i,l){c(e,t.children,n.children,r,o,i,l);var a=0,u=n.children;if(n.dom=null,null!=u){for(var f=0;f<u.length;f++){var s=u[f];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),a+=s.domSize||1)}1!==a&&(n.domSize=a)}}function m(t,r,o,i,l){var a=r.dom=t.dom;l=n(r)||l,"textarea"===r.tag&&(null==r.attrs&&(r.attrs={}),null!=r.text&&(r.attrs.value=r.text,r.text=void 0)),$(r,t.attrs,r.attrs,l),null!=r.attrs&&null!=r.attrs.contenteditable?S(r):null!=t.text&&null!=r.text&&""!==r.text?t.text.toString()!==r.text.toString()&&(t.dom.firstChild.nodeValue=r.text):(null!=t.text&&(t.children=[e("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=r.text&&(r.children=[e("#",void 0,void 0,r.text,void 0,void 0)]),c(a,t.children,r.children,o,i,null,l))}function g(t,n,r,i,l,a,u){if(a)f(r,i);else{if(r.instance=e.normalize(r._state.view.call(r.state,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");null!=r.attrs&&q(r.attrs,r,i),q(r._state,r,i)}null!=r.instance?(null==n.instance?o(t,r.instance,i,u,l):d(t,n.instance,r.instance,i,l,a,u),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=n.instance?(E(n.instance,null),r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}function y(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}function w(e,t){for(var n={},r=0,r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function b(e){var t=e.domSize;if(null!=t||null==e.dom){var n=H.createDocumentFragment();if(t>0){for(var r=e.dom;--t;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}return e.dom}function x(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function k(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function S(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function C(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:E(i,r))}}function E(e,t){function n(){if(++o===r&&(A(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)z(i.nextSibling);z(e.dom),null==t||null!=e.domSize||R(e.attrs)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}}var r=1,o=0;if(e.attrs&&"function"==typeof e.attrs.onbeforeremove&&null!=(i=e.attrs.onbeforeremove.call(e.state,e))&&"function"==typeof i.then&&(r++,i.then(n,n)),"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove){var i=e._state.onbeforeremove.call(e.state,e);null!=i&&"function"==typeof i.then&&(r++,i.then(n,n))}n()}function z(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function A(e){if(e.attrs&&"function"==typeof e.attrs.onremove&&e.attrs.onremove.call(e.state,e),"string"!=typeof e.tag&&"function"==typeof e._state.onremove&&e._state.onremove.call(e.state,e),null!=e.instance)A(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&A(r)}}}function N(e,t,n){for(var r in t)j(e,r,null,t[r],n)}function j(e,t,n,r,o){var i=e.dom;if("key"!==t&&"is"!==t&&(n!==r||O(e,t)||"object"==typeof r)&&void 0!==r&&!_(t)){var l=t.indexOf(":");if(l>-1&&"xlink"===t.substr(0,l))i.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(l+1),r);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof r)L(e,t,r);else if("style"===t)M(i,n,r);else if(t in i&&!I(t)&&void 0===o&&!P(e)){if("value"===t){var a=""+r;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===a&&e.dom===H.activeElement)return;if("select"===e.tag)if(null===r){if(-1===e.dom.selectedIndex&&e.dom===H.activeElement)return}else if(null!==n&&e.dom.value===a&&e.dom===H.activeElement)return;if("option"===e.tag&&null!=n&&e.dom.value===a)return}if("input"===e.tag&&"type"===t)return void i.setAttribute(t,r);i[t]=r}else"boolean"==typeof r?r?i.setAttribute(t,""):i.removeAttribute(t):i.setAttribute("className"===t?"class":t,r)}}function T(e){var t=e.attrs;"select"===e.tag&&null!=t&&("value"in t&&j(e,"value",null,t.value,void 0),"selectedIndex"in t&&j(e,"selectedIndex",null,t.selectedIndex,void 0))}function $(e,t,n,r){if(null!=n)for(var o in n)j(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||_(o)?"key"!==o&&e.dom.removeAttribute(o):L(e,o,void 0))}function O(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===H.activeElement}function _(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function I(e){return"href"===e||"list"===e||"form"===e||"width"===e||"height"===e}function P(e){return e.attrs.is||e.tag.indexOf("-")>-1}function R(e){return null!=e&&(e.oncreate||e.onupdate||e.onbeforeremove||e.onremove)}function M(e,t,n){if(t===n&&(e.style.cssText="",t=null),null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{"string"==typeof t&&(e.style.cssText="");for(var r in n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}function L(e,t,n){var r=e.dom,o="function"!=typeof U?n:function(e){var t=n.call(r,e);return U.call(r,e),t};if(t in r)r[t]="function"==typeof n?o:null;else{var i=t.slice(2);if(void 0===e.events&&(e.events={}),e.events[t]===o)return;null!=e.events[t]&&r.removeEventListener(i,e.events[t],!1),"function"==typeof n&&(e.events[t]=o,r.addEventListener(i,e.events[t],!1))}}function D(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function q(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}function F(e,t){var n,r;return null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t)),"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t)),!(void 0===n&&void 0===r||n||r)&&(e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0)}var U,H=t.document,B=H.createDocumentFragment(),J={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};return{render:function(t,n){if(!t)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],o=H.activeElement,i=t.namespaceURI;null==t.vnodes&&(t.textContent=""),Array.isArray(n)||(n=[n]),c(t,t.vnodes,e.normalizeChildren(n),!1,r,null,"http://www.w3.org/1999/xhtml"===i?void 0:i),t.vnodes=n;for(var l=0;l<r.length;l++)r[l]();H.activeElement!==o&&o.focus()},setEventCallback:function(e){return U=e}}},h=function(e){function t(e){var t=i.indexOf(e);t>-1&&i.splice(t,2)}function n(){for(var e=1;e<i.length;e+=2)i[e]()}var r=v(e);r.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:n()});var i=[];return{subscribe:function(e,n){t(e),i.push(e,o(n))},unsubscribe:t,redraw:n,render:r.render}}(window);d.setCompletionCallback(h.redraw);u.mount=function(t){return function(n,r){if(null===r)return t.render(n,[]),void t.unsubscribe(n);if(null==r.view&&"function"!=typeof r)throw new Error("m.mount(element, component) expects a component, not a vnode");t.subscribe(n,function(){t.render(n,e(r))}),t.redraw()}}(h);var p=f,m=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),f=n;l.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var c=u[s],d=u[s+1],v=""==d||!isNaN(parseInt(d,10)),h=s===u.length-1;""===c&&(null==r[l=u.slice(0,s).join()]&&(r[l]=0),c=r[l]++),null==f[c]&&(f[c]=h?a:v?[]:{}),f=f[c]}}return n},g=function(e){function t(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function n(e){return function(){null==o&&(o=l(function(){o=null,e()}))}}function r(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var l=o>-1?o:e.length,a=m(e.slice(r+1,l));for(var u in a)t[u]=a[u]}if(o>-1){var f=m(e.slice(o+1));for(var u in f)n[u]=f[u]}return e.slice(0,i)}var o,i="function"==typeof e.history.pushState,l="function"==typeof setImmediate?setImmediate:setTimeout,a={prefix:"#!"};return a.getPath=function(){switch(a.prefix.charAt(0)){case"#":return t("hash").slice(a.prefix.length);case"?":return t("search").slice(a.prefix.length)+t("hash");default:return t("pathname").slice(a.prefix.length)+t("search")+t("hash")}},a.setPath=function(t,n,o){var l={},u={};if(t=r(t,l,u),null!=n){for(var f in n)l[f]=n[f];t=t.replace(/:([^\/]+)/g,function(e,t){return delete l[t],n[t]})}var c=s(l);c&&(t+="?"+c);var d=s(u);if(d&&(t+="#"+d),i){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,a.prefix+t):e.history.pushState(v,h,a.prefix+t)}else e.location.href=a.prefix+t},a.defineRoutes=function(t,o,l){function u(){var n=a.getPath(),i={},u=r(n,i,i),f=e.history.state;if(null!=f)for(var s in f)i[s]=f[s];for(var c in t){var d=new RegExp("^"+c.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(u))return void u.replace(d,function(){for(var e=c.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),l=0;l<e.length;l++)i[e[l].replace(/:|\./g,"")]=decodeURIComponent(r[l]);o(t[c],i,n,c)})}l(n,i)}i?e.onpopstate=n(u):"#"===a.prefix.charAt(0)&&(e.onhashchange=u),u()},a};u.route=function(t,n){var r,o,i,l,a,u=g(t),f=function(e){return e},s=function(t,s,c){if(null==t)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var d=function(){null!=r&&n.render(t,r(e(o,i.key,i)))},v=function(e){if(e===s)throw new Error("Could not resolve default route "+s);u.setPath(s,null,{replace:!0})};u.defineRoutes(c,function(e,t,n){var u=a=function(e,s){u===a&&(o=null==s||"function"!=typeof s.view&&"function"!=typeof s?"div":s,i=t,l=n,a=null,r=(e.render||f).bind(e),d())};e.view||"function"==typeof e?u({},e):e.onmatch?p.resolve(e.onmatch(t,n)).then(function(t){u(e,t)},v):u(e,"div")},v),n.subscribe(t,d)};return s.set=function(e,t,n){null!=a&&((n=n||{}).replace=!0),a=null,u.setPath(e,t,n)},s.get=function(){return l},s.prefix=function(e){u.prefix=e},s.link=function(e){e.dom.setAttribute("href",u.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(u.prefix)&&(t=t.slice(u.prefix.length)),s.set(t,void 0,void 0)}}},s.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},s}(window,h),u.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var y=v(window);u.render=y.render,u.redraw=h.redraw,u.request=d.request,u.jsonp=d.jsonp,u.parseQueryString=m,u.buildQueryString=s,u.version="1.1.3",u.vnode=e,"undefined"!=typeof module?module.exports=u:window.m=u}();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
module.exports=require("insert-css");

},{"insert-css":1}],4:[function(require,module,exports){
var m=require("mithril"),css=0;require("sheetify/insert")("body {\n  padding: 15px;\n}");var state={message:"Start building!"},app={view:function(){return m("div",[m("h3",state.message)])}},appNode=document.body.appendChild(document.createElement("div"));m.route(appNode,"/",{"/":app});

},{"mithril":2,"sheetify/insert":3}]},{},[4]);