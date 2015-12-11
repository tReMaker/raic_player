/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.request=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.request()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.request(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.21",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.21"})})(jQuery);;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 17={3i:\'0.1.3\',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8\'[\'+7.4.2K(\', \')+\']\'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K(\'\\n\')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!=\'1f\'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)==\'1f\'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)==\'1f\'&&1g(a.W)==\'1f\'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)==\'1f\'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;',62,206,'||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ'.split('|'),0,{}));
function inherits(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function info(message) {
    if (console) {
        console.log(message);
    }
}

function debug(message) {
    if (console) {
        console.debug(message);
    }
}

function error(message) {
    if (console) {
        console.error(message);
    }
    window.alert("ERROR: " + message);
}

function currentTimeMillis() {
    return new Date().getTime();
}

function optionValue(options, name, defaultValue) {
    if (options && options[name] !== undefined) {
        return options[name];
    } else {
        if (defaultValue === undefined) {
            error("Option can't be null [name='" + name + "']");
        }
        return defaultValue;
    }
}

function getProperty(element, properties) {
    var prop = properties.shift();
    while (prop) {
        if (typeof element[prop] !== 'undefined') {
            return prop;
        }
        prop = properties.shift();
    }
    return undefined;
}

Points = {
    newPoint:function (x, y) {
        return {x:x, y:y};
    },

    rotateOverOrigin:function (point, alpha) {
        return {
            x:Math.cos(alpha) * point.x - Math.sin(alpha) * point.y,
            y:Math.sin(alpha) * point.x + Math.cos(alpha) * point.y
        }
    },

    angle:function (a) {
        return Math.atan2(a.y, a.x);
    },

    length:function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
    },

    multiply:function (a, mul) {
        return {x:a.x * mul, y:a.y * mul};
    },

    divide:function (a, mul) {
        return {x:a.x / mul, y:a.y / mul};
    },

    add:function (a, b) {
        return {x:a.x + b.x, y:a.y + b.y};
    },

    subtract:function (a, b) {
        return {x:a.x - b.x, y:a.y - b.y};
    },

    rotateOverCenter:function (point, center, alpha) {
        return Points.add(Points.rotateOverOrigin(Points.subtract(point, center), alpha), center);
    }
};

function getQueryParameter(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

$.fn.center = function (wnd) {
    this.css("position", "absolute");
    this.css("top", ($(wnd).height() - this.height()) / 2 + $(wnd).scrollTop() + "px");
    this.css("left", ($(wnd).width() - this.width()) / 2 + $(wnd).scrollLeft() + "px");
    return this
};

function centerElement(wnd, element) {
    $(element).center(wnd);

    setTimeout(function () {
        $(element).center(wnd);
    }, 200);

    $(wnd).bind('resize', function () {
        var that = this;
        if (!('balancer' in that)) {
            that.balancer = setTimeout(function () {
                $(element).center(wnd);
                delete that.balancer;
            }, 200);
        }
    });
}

function initializePlayer() {
    var gameId = getQueryParameter("gameId");
    window.document.title = "{{Game}} " + gameId;

    var windowId = getQueryParameter("windowId");
    var elem = window.parent.document.getElementById(windowId);
    configuration.CONTAINTER_ELEMENT = elem;

    if (elem) {
        elem.style.width = (configuration.MAX_WIDTH * configuration.get("scale", 1.0) + 50) + "px";
        elem.style.height = (configuration.MAX_HEIGHT * configuration.get("scale", 1.0) + 150) + "px";
    }

    var token = getQueryParameter("token");
    var urlForShare = "${urlShare.prefix}" + gameId;
    var player = new GamePlayer({
        urlForShare: urlForShare,
        selector:"#player",
        url:"http://russianaicup.ru/boombox/data/games/" + token
    });
    player.run();

    if (elem) {
        centerElement(window.parent, elem);
    }
}

String.prototype.hashCode = function() {
  for(var ret = 0, i = 0, len = this.length; i < len; i++) {
    ret = (31 * ret + this.charCodeAt(i)) << 0;
  }
  return ret;
};
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { try { var canvas = document.createElement( 'canvas' ); return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) ); } catch ( e ) { return false; } } )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};

// browserify support
if ( typeof module === 'object' ) {

	module.exports = Detector;

}
/*
 * @author mrdoob / http://mrdoob.com/
 */

THREE.DDSLoader = function () {
	this._parser = THREE.DDSLoader.parse;
};

THREE.DDSLoader.prototype = Object.create( THREE.CompressedTextureLoader.prototype );
THREE.DDSLoader.prototype.constructor = THREE.DDSLoader;

THREE.DDSLoader.parse = function ( buffer, loadMipmaps ) {

	var dds = { mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1 };

	// Adapted from @toji's DDS utils
	//	https://github.com/toji/webgl-texture-utils/blob/master/texture-util/dds.js

	// All values and structures referenced from:
	// http://msdn.microsoft.com/en-us/library/bb943991.aspx/

	var DDS_MAGIC = 0x20534444;

	var DDSD_CAPS = 0x1,
		DDSD_HEIGHT = 0x2,
		DDSD_WIDTH = 0x4,
		DDSD_PITCH = 0x8,
		DDSD_PIXELFORMAT = 0x1000,
		DDSD_MIPMAPCOUNT = 0x20000,
		DDSD_LINEARSIZE = 0x80000,
		DDSD_DEPTH = 0x800000;

	var DDSCAPS_COMPLEX = 0x8,
		DDSCAPS_MIPMAP = 0x400000,
		DDSCAPS_TEXTURE = 0x1000;

	var DDSCAPS2_CUBEMAP = 0x200,
		DDSCAPS2_CUBEMAP_POSITIVEX = 0x400,
		DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800,
		DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000,
		DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000,
		DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000,
		DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000,
		DDSCAPS2_VOLUME = 0x200000;

	var DDPF_ALPHAPIXELS = 0x1,
		DDPF_ALPHA = 0x2,
		DDPF_FOURCC = 0x4,
		DDPF_RGB = 0x40,
		DDPF_YUV = 0x200,
		DDPF_LUMINANCE = 0x20000;

	function fourCCToInt32( value ) {

		return value.charCodeAt(0) +
			(value.charCodeAt(1) << 8) +
			(value.charCodeAt(2) << 16) +
			(value.charCodeAt(3) << 24);

	}

	function int32ToFourCC( value ) {

		return String.fromCharCode(
			value & 0xff,
			(value >> 8) & 0xff,
			(value >> 16) & 0xff,
			(value >> 24) & 0xff
		);
	}

	function loadARGBMip( buffer, dataOffset, width, height ) {
		var dataLength = width * height * 4;
		var srcBuffer = new Uint8Array( buffer, dataOffset, dataLength );
		var byteArray = new Uint8Array( dataLength );
		var dst = 0;
		var src = 0;
		for ( var y = 0; y < height; y ++ ) {
			for ( var x = 0; x < width; x ++ ) {
				var b = srcBuffer[src]; src ++;
				var g = srcBuffer[src]; src ++;
				var r = srcBuffer[src]; src ++;
				var a = srcBuffer[src]; src ++;
				byteArray[dst] = r; dst ++;	//r
				byteArray[dst] = g; dst ++;	//g
				byteArray[dst] = b; dst ++;	//b
				byteArray[dst] = a; dst ++;	//a
			}
		}
		return byteArray;
	}

	var FOURCC_DXT1 = fourCCToInt32("DXT1");
	var FOURCC_DXT3 = fourCCToInt32("DXT3");
	var FOURCC_DXT5 = fourCCToInt32("DXT5");

	var headerLengthInt = 31; // The header length in 32 bit ints

	// Offsets into the header array

	var off_magic = 0;

	var off_size = 1;
	var off_flags = 2;
	var off_height = 3;
	var off_width = 4;

	var off_mipmapCount = 7;

	var off_pfFlags = 20;
	var off_pfFourCC = 21;
	var off_RGBBitCount = 22;
	var off_RBitMask = 23;
	var off_GBitMask = 24;
	var off_BBitMask = 25;
	var off_ABitMask = 26;

	var off_caps = 27;
	var off_caps2 = 28;
	var off_caps3 = 29;
	var off_caps4 = 30;

	// Parse header

	var header = new Int32Array( buffer, 0, headerLengthInt );

	if ( header[ off_magic ] !== DDS_MAGIC ) {

		console.error( 'THREE.DDSLoader.parse: Invalid magic number in DDS header.' );
		return dds;

	}

	if ( ! header[ off_pfFlags ] & DDPF_FOURCC ) {

		console.error( 'THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code.' );
		return dds;

	}

	var blockBytes;

	var fourCC = header[ off_pfFourCC ];

	var isRGBAUncompressed = false;

	switch ( fourCC ) {

		case FOURCC_DXT1:

			blockBytes = 8;
			dds.format = THREE.RGB_S3TC_DXT1_Format;
			break;

		case FOURCC_DXT3:

			blockBytes = 16;
			dds.format = THREE.RGBA_S3TC_DXT3_Format;
			break;

		case FOURCC_DXT5:

			blockBytes = 16;
			dds.format = THREE.RGBA_S3TC_DXT5_Format;
			break;

		default:

			if ( header[off_RGBBitCount] == 32
				&& header[off_RBitMask]&0xff0000
				&& header[off_GBitMask]&0xff00
				&& header[off_BBitMask]&0xff
				&& header[off_ABitMask]&0xff000000  ) {
				isRGBAUncompressed = true;
				blockBytes = 64;
				dds.format = THREE.RGBAFormat;
			} else {
				console.error( 'THREE.DDSLoader.parse: Unsupported FourCC code ', int32ToFourCC( fourCC ) );
				return dds;
			}
	}

	dds.mipmapCount = 1;

	if ( header[ off_flags ] & DDSD_MIPMAPCOUNT && loadMipmaps !== false ) {

		dds.mipmapCount = Math.max( 1, header[ off_mipmapCount ] );

	}

	//TODO: Verify that all faces of the cubemap are present with DDSCAPS2_CUBEMAP_POSITIVEX, etc.

	dds.isCubemap = header[ off_caps2 ] & DDSCAPS2_CUBEMAP ? true : false;

	dds.width = header[ off_width ];
	dds.height = header[ off_height ];

	var dataOffset = header[ off_size ] + 4;

	// Extract mipmaps buffers

	var width = dds.width;
	var height = dds.height;

	var faces = dds.isCubemap ? 6 : 1;

	for ( var face = 0; face < faces; face ++ ) {

		for ( var i = 0; i < dds.mipmapCount; i ++ ) {

			if ( isRGBAUncompressed ) {
				var byteArray = loadARGBMip( buffer, dataOffset, width, height );
				var dataLength = byteArray.length;
			} else {
				var dataLength = Math.max( 4, width ) / 4 * Math.max( 4, height ) / 4 * blockBytes;
				var byteArray = new Uint8Array( buffer, dataOffset, dataLength );
			}

			var mipmap = { "data": byteArray, "width": width, "height": height };
			dds.mipmaps.push( mipmap );

			dataOffset += dataLength;

			width = Math.max( width * 0.5, 1 );
			height = Math.max( height * 0.5, 1 );

		}

		width = dds.width;
		height = dds.height;

	}

	return dds;

};

/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.OBJLoader.prototype = {

	constructor: THREE.OBJLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE.XHRLoader( scope.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.load( url, function ( text ) {

			onLoad( scope.parse( text ) );

		}, onProgress, onError );

	},

	parse: function ( text ) {

		console.time( 'OBJLoader' );

		var object, objects = [];
		var geometry, material;

		function parseVertexIndex( value ) {

			var index = parseInt( value );

			return ( index >= 0 ? index - 1 : index + vertices.length / 3 ) * 3;

		}

		function parseNormalIndex( value ) {

			var index = parseInt( value );

			return ( index >= 0 ? index - 1 : index + normals.length / 3 ) * 3;

		}

		function parseUVIndex( value ) {

			var index = parseInt( value );

			return ( index >= 0 ? index - 1 : index + uvs.length / 2 ) * 2;

		}

		function addVertex( a, b, c ) {

			geometry.vertices.push(
				vertices[ a ], vertices[ a + 1 ], vertices[ a + 2 ],
				vertices[ b ], vertices[ b + 1 ], vertices[ b + 2 ],
				vertices[ c ], vertices[ c + 1 ], vertices[ c + 2 ]
			);

		}

		function addNormal( a, b, c ) {

			geometry.normals.push(
				normals[ a ], normals[ a + 1 ], normals[ a + 2 ],
				normals[ b ], normals[ b + 1 ], normals[ b + 2 ],
				normals[ c ], normals[ c + 1 ], normals[ c + 2 ]
			);

		}

		function addUV( a, b, c ) {

			geometry.uvs.push(
				uvs[ a ], uvs[ a + 1 ],
				uvs[ b ], uvs[ b + 1 ],
				uvs[ c ], uvs[ c + 1 ]
			);

		}

		function addFace( a, b, c, d,  ua, ub, uc, ud, na, nb, nc, nd ) {

			var ia = parseVertexIndex( a );
			var ib = parseVertexIndex( b );
			var ic = parseVertexIndex( c );
			var id;

			if ( d === undefined ) {

				addVertex( ia, ib, ic );

			} else {

				id = parseVertexIndex( d );

				addVertex( ia, ib, id );
				addVertex( ib, ic, id );

			}

			if ( ua !== undefined ) {

				ia = parseUVIndex( ua );
				ib = parseUVIndex( ub );
				ic = parseUVIndex( uc );

				if ( d === undefined ) {

					addUV( ia, ib, ic );

				} else {

					id = parseUVIndex( ud );

					addUV( ia, ib, id );
					addUV( ib, ic, id );

				}

			}

			if ( na !== undefined ) {

				ia = parseNormalIndex( na );
				ib = parseNormalIndex( nb );
				ic = parseNormalIndex( nc );

				if ( d === undefined ) {

					addNormal( ia, ib, ic );

				} else {

					id = parseNormalIndex( nd );

					addNormal( ia, ib, id );
					addNormal( ib, ic, id );

				}

			}

		}

		// create mesh if no objects in text

		if ( /^o /gm.test( text ) === false ) {

			geometry = {
				vertices: [],
				normals: [],
				uvs: []
			};

			material = {
				name: ''
			};

			object = {
				name: '',
				geometry: geometry,
				material: material
			};

			objects.push( object );

		}

		var vertices = [];
		var normals = [];
		var uvs = [];

		// v float float float

		var vertex_pattern = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

		// vn float float float

		var normal_pattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

		// vt float float

		var uv_pattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

		// f vertex vertex vertex ...

		var face_pattern1 = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;

		// f vertex/uv vertex/uv vertex/uv ...

		var face_pattern2 = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;

		// f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...

		var face_pattern3 = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;

		// f vertex//normal vertex//normal vertex//normal ...

		var face_pattern4 = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/

		//

		var lines = text.split( '\n' );

		for ( var i = 0; i < lines.length; i ++ ) {

			var line = lines[ i ];
			line = line.trim();

			var result;

			if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

				continue;

			} else if ( ( result = vertex_pattern.exec( line ) ) !== null ) {

				// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

				vertices.push(
					parseFloat( result[ 1 ] ),
					parseFloat( result[ 2 ] ),
					parseFloat( result[ 3 ] )
				);

			} else if ( ( result = normal_pattern.exec( line ) ) !== null ) {

				// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

				normals.push(
					parseFloat( result[ 1 ] ),
					parseFloat( result[ 2 ] ),
					parseFloat( result[ 3 ] )
				);

			} else if ( ( result = uv_pattern.exec( line ) ) !== null ) {

				// ["vt 0.1 0.2", "0.1", "0.2"]

				uvs.push(
					parseFloat( result[ 1 ] ),
					parseFloat( result[ 2 ] )
				);

			} else if ( ( result = face_pattern1.exec( line ) ) !== null ) {

				// ["f 1 2 3", "1", "2", "3", undefined]

				addFace(
					result[ 1 ], result[ 2 ], result[ 3 ], result[ 4 ]
				);

			} else if ( ( result = face_pattern2.exec( line ) ) !== null ) {

				// ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3", undefined, undefined, undefined]

				addFace(
					result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
					result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
				);

			} else if ( ( result = face_pattern3.exec( line ) ) !== null ) {

				// ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3", undefined, undefined, undefined, undefined]

				addFace(
					result[ 2 ], result[ 6 ], result[ 10 ], result[ 14 ],
					result[ 3 ], result[ 7 ], result[ 11 ], result[ 15 ],
					result[ 4 ], result[ 8 ], result[ 12 ], result[ 16 ]
				);

			} else if ( ( result = face_pattern4.exec( line ) ) !== null ) {

				// ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3", undefined, undefined, undefined]

				addFace(
					result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
					undefined, undefined, undefined, undefined,
					result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
				);

			} else if ( /^o /.test( line ) ) {

				geometry = {
					vertices: [],
					normals: [],
					uvs: []
				};

				material = {
					name: ''
				};

				object = {
					name: line.substring( 2 ).trim(),
					geometry: geometry,
					material: material
				};

				objects.push( object )

			} else if ( /^g /.test( line ) ) {

				// group

			} else if ( /^usemtl /.test( line ) ) {

				// material

				material.name = line.substring( 7 ).trim();

			} else if ( /^mtllib /.test( line ) ) {

				// mtl file

			} else if ( /^s /.test( line ) ) {

				// smooth shading

			} else {

				// console.log( "THREE.OBJLoader: Unhandled line " + line );

			}

		}

		var container = new THREE.Object3D();

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			object = objects[ i ];
			geometry = object.geometry;

			var buffergeometry = new THREE.BufferGeometry();

			buffergeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( geometry.vertices ), 3 ) );

			if ( geometry.normals.length > 0 ) {
				buffergeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( geometry.normals ), 3 ) );
			}

			if ( geometry.uvs.length > 0 ) {
				buffergeometry.addAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( geometry.uvs ), 2 ) );
			}

			material = new THREE.MeshLambertMaterial();
			material.name = object.material.name;

			var mesh = new THREE.Mesh( buffergeometry, material );
			mesh.name = object.name;

			container.add( mesh );

		}

		console.timeEnd( 'OBJLoader' );

		return container;

	}

};
function Stream(options) {
    this.method = optionValue(options, "method", "GET");
    this.url = optionValue(options, "url");
    this.callback = optionValue(options, "callback");
    this.processed = 0;
    this.offset = optionValue(options, "offset", 0);
    this.chunkSize = optionValue(options, "chunkSize", 100 * 1024 * 1024);
    this.minChunkSize = optionValue(options, "minChunkSize", 0);
    return this;
}

Stream.prototype.isIe = function () {
    return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null)));
};

Stream.prototype.run = function() {
    var request = this.request = new XMLHttpRequest();
    request.open(this.method, this.url + "?offset=" + this.offset + "&t=" + (new Date().getTime()), true);
    request.responseType = "text";
    var stream = this;

    var responseTextLength = 0;
    var blockSize = 4096;
    var skipCount = 0;

    request.onreadystatechange = function () {
        if (request.readyState !== 3 && request.readyState !== 4 || request.status !== 200) {
            return;
        }

        if (stream.isIe() && skipCount > 0) {
            responseTextLength += blockSize;
            skipCount--;
        } else {
            responseTextLength = request.responseText.length;
            skipCount = 1000;
        }

        if (responseTextLength === 0) {
            return;
        }

        var chunkLength = responseTextLength - (stream.processed - stream.offset);

        if (stream.offset + responseTextLength > stream.processed && (request.readyState === 4 || chunkLength > stream.minChunkSize)) {
            var chunk = request.responseText.substring(stream.processed - stream.offset);
            stream.processed += chunk.length;
            stream.callback(chunk);
            if (request.readyState == 3 && stream.processed - stream.offset >= stream.chunkSize) {
                stream.offset = stream.processed;
                request.abort();
                stream.run();
            }
        }
    };

    this.request.send(null);
};
function LinesStreamReader(options) {
    this.url = optionValue(options, 'url');
    this.callback = optionValue(options, 'callback');
    this.incoming = "";
    return this;
}

LinesStreamReader.prototype.run = function () {
    var reader = this;
    var stream = new Stream({url:this.url, minChunkSize: 512 * 1024, callback:function (chunk) {
        reader.incoming += chunk;
    }});
    stream.run();

    var pp = 0;
    var intervalId = setInterval(function () {
        var stop = false;

        for (var i = 0; i < 25; i++) {
            var pos = reader.incoming.indexOf('\n', pp);
            if (pos >= 0) {
                if (pos > 0 && reader.incoming[pos - 1] == '\r') {
                    stop = reader.callback(reader.incoming.substring(pp, pos - 1)) || stop;
                } else {
                    stop = reader.callback(reader.incoming.substring(pp, pos)) || stop;
                }
            } else {
                break;
            }

            pp = pos + 1;
        }

        if (stop) {
            clearInterval(intervalId);
        }
    }, 50);
};
function Player(options) {
    this.GAME_FRAME_COUNT = optionValue(options, "gameFrameCount", 50001);

    this.START_URL = "app/sprites/player/media_controls_dark_play.png";
    this.STOP_URL = "app/sprites/player/media_controls_dark_pause.png";

    this.gamePlayer = optionValue(options, "gamePlayer");
    this.frame = 0;
    this.scenes = [];
    this.fps = optionValue(options, "fps");
    this.lastStoppedRunId = 0;
    this.lastRunId = 1;
    this.paused = false;
    this.waitScenes = true;
    this.element = optionValue(options, "element");
    this.scale = optionValue(options, "scale", 1.0);
    this.width = this.scale * optionValue(options, "width");
    this.height = this.scale * optionValue(options, "height");
    this.renderSceneCallback = optionValue(options, "renderSceneCallback", function () { });

    /* construct layout */
    {
        this.element.empty()
            .css("width", this.width + "px");

        this.element.append("<div class='screen'>" +
            "</div>" +
            "<div class='controls'>" +
            "   <div class='buttons'>" +
            "       <div class='startStopButton'></div>" +
            "   </div>" +
            "   <div class='progress'><div class='loaded'></div></div>" +
            "</div>");

        this.screenElement = this.element.find(".screen")
            .css("width", this.width + "px")
            .css("height", this.height + "px")

        var player = this;
        this.startStopButtonElement = this.element.find(".startStopButton")
            .css("width", "16px")
            .css("height", "16px")
            .css("float", "left")
            .css("padding", "0")
            .css("margin-left", "2px")
            .css("cursor", "pointer")
            .click(function () {
                player.toggleRunning();
                return false;
            });

        this.progressElement = this.element.find(".progress")
            .css("width", (this.width - 28) + "px")
            .css("float", "right")
            .slider({
                max:this.GAME_FRAME_COUNT,
                start:function (event, ui) {
                    player.paused = true;
                },
                stop:function (event, ui) {
                    player.paused = false;
                    player.frame = ui.value;
//                    player.gamePlayer.cleanup();
                    if (!player.running) {
                        player.renderFrame(function() {
                            // No operations.
                        });
                    }
                }
            });

        this.loadedElement = this.element.find(".loaded")
            .css("width", "0")
            .css("height", "0.8em");
    }

    return this;
}

Player.prototype.setRenderSceneCallback = function (renderSceneCallback) {
    this.renderSceneCallback = renderSceneCallback;
    return this;
};

Player.prototype.run = function () {
    this.toggleRunning();
};

Player.prototype.nextRunId = function () {
    return ++this.lastRunId;
};

Player.prototype.toggleRunning = function () {
    if (this.running) {
        this.stop();
    } else {
        this.start();
    }
};

Player.prototype.renderFrame = function (afterFrame) {
    if (this.frame >= this.GAME_FRAME_COUNT) {
        this.frame = this.GAME_FRAME_COUNT - 1;
    }

    this.fps.beforeFrame();

    var context = {
        element: this.screenElement,
        frameIndex: this.frame,
        scene: this.scenes[this.frame],
        last: (this.GAME_FRAME_COUNT === this.frame + 1),
        finalizeCallback: afterFrame,
        playerRunning: this.running
    };

    this.renderSceneCallback(context);
    this.frame = Math.min(this.GAME_FRAME_COUNT, this.frame + 1);
    this.progressElement.slider("value", this.frame);
};

Player.prototype.renderFrames = function (runId) {
    var player = this;

    if (player.running && player.lastStoppedRunId < runId) {
        if (player.scenes.length <= player.frame) {
            if (player.waitScenes) {
                window.setTimeout(function () {
                    player.renderFrames(runId);
                }, 1000)
            } else {
                player.stop({lastScene: true});
            }
        } else {
            if (!player.paused) {
                player.renderFrame(function() {
                    if (player.waitScenes || player.frame < player.GAME_FRAME_COUNT) {
                        window.setTimeout(function () {
                            player.renderFrames(runId);
                        }, player.fps.delay());
                    } else {
                        player.stop();
                    }
                });
            } else {
                if (player.waitScenes || player.frame < player.GAME_FRAME_COUNT) {
                    window.setTimeout(function () {
                        player.renderFrames(runId);
                    }, player.fps.delay());
                } else {
                    player.stop();
                }
            }
        }
    }
};

Player.prototype.start = function () {
    this.running = true;
    this.gamePlayer.resumeSounds();
    this.startStopButtonElement.css("background-image", "url(" + this.STOP_URL + ")");
    this.renderFrames(this.nextRunId());
};

Player.prototype.stop = function (options) {
    this.running = false;

    this.gamePlayer.pauseSounds();
    this.startStopButtonElement.css("background-image", "url(" + this.START_URL + ")");
    this.lastStoppedRunId = this.nextRunId();
};

Player.prototype.addScene = function (scene, last) {
    var player = this;

    if (!last && this.GAME_FRAME_COUNT != scene.lastTickIndex + 1) {
        player.GAME_FRAME_COUNT = scene.lastTickIndex + 1;
        player.progressElement.slider({max: this.GAME_FRAME_COUNT});
    } else if (last) {
        player.GAME_FRAME_COUNT = player.scenes.length + 1;
        player.progressElement.slider({max: this.GAME_FRAME_COUNT});
    }

    if (player.scenes.length == 0) {
        scene.firstFrame = true;
    }

    if (player.waitScenes) {
        if (player.scenes.length < player.GAME_FRAME_COUNT) {
            if (!scene.firstFrame) {
            	player.fillEmptyFields(scene, player.scenes.slice(-1).pop());
                player.doWithHPChangeEffects(scene, player.scenes.slice(-1).pop());
                player.calculateVisibleTiles(scene, player.scenes.slice(-1).pop());
            } else {
                scene.playerTiles = [];
                var players = scene.players;
                var tiles = scene.tiles ? scene.tiles : scene.tilesXY;
                var n = tiles.length;
                for(var i = 0; i < players.length; i++) {
                    var id = players[i].id;
                    var playerTiles = [];
                    for(var j = 0; j < n; j++) {
                        playerTiles[j] = [];
                    }
                    scene.playerTiles[id] = playerTiles;
                }
            }
            player.scenes.push(scene);

            if (last || player.scenes.length % 10 === 0) {
                player.loadedElement.css(
                    "width",
                    (player.progressElement.width() * player.scenes.length / player.GAME_FRAME_COUNT) + "px"
                );
            }
        }
    }

    if (last) {
        player.waitScenes = false;
    }
};

Player.prototype.calculateVisibleTiles = function(scene, previousScene) {
    scene.playerTiles = [];
    var players = scene.players;
    var cars = scene.cars;
    var tiles = scene.tiles ? scene.tiles : scene.tilesXY;
    var n = tiles.length;
    var m = tiles[0].length;
    for(var _i = 0; _i < players.length; _i++) {
        var playerId = players[_i].id;
        var playerTiles = [];
        for(var ii = 0; ii < n; ii++) {
            playerTiles[ii] = [];
            for(var jj = 0; jj < m; jj++) {
                playerTiles[ii][jj] = previousScene.playerTiles[playerId][ii][jj];
            }
        }

        for(var __i = 0; __i < cars.length; __i++) {
            if (cars[__i].playerId != playerId)
                continue;

            var tx = Math.floor(cars[__i].x / configuration.TILE_SIZE);
            var ty = Math.floor(cars[__i].y / configuration.TILE_SIZE);

            var lx = Math.max(0, tx - 2);
            var rx = Math.min(n - 1, tx + 2);
            var ly = Math.max(0, ty - 2);
            var ry = Math.min(m - 1, ty + 2);

            for(var i = lx; i <= rx; i++) {
                for(var j = ly; j <= ry; j++) {
                    if (Math.abs(ty - j) + Math.abs(tx - i) > 2)
                        continue;
                    playerTiles[i][j] = tiles[i][j];
                }
            }
        }
        scene.playerTiles[playerId] = playerTiles;
    }
};

Player.prototype.fillEmptyFields = function(scene, previousScene) {
	this.fillObjects(scene.cars, previousScene.cars);
    for(var i = 0; i < scene.cars.length; i++) {
        for(var j = 0; j < previousScene.cars.length; j++) {
            if (scene.cars[i].id == previousScene.cars[j].id) {
                scene.cars[i].playerId = previousScene.cars[j].playerId;
            }
        }
    }
	this.fillObjects(scene.projectiles, previousScene.projectiles);
	this.fillObjects(scene.players, previousScene.players);
    this.fillObjects(scene.bonuses, previousScene.bonuses);
    this.fillObjects(scene.oilSlicks, previousScene.oilSlicks);
    scene.tiles = previousScene.tiles;
    scene.tilesXY = previousScene.tilesXY;
};

Player.prototype.fillObjects = function(objects, previousObjects) {
	for(var i = 0; i < objects.length; i++) {
		var id = objects[i].id;
		if (Object.keys(objects[i]).length != 1)
			continue;
		for(var j = 0; j < previousObjects.length; j++) {
			if (id == previousObjects[j].id) {
				objects[i] = previousObjects[j];
				break;
			}
		}
	}
};

Player.prototype.doWithHPChangeEffects = function(scene, prev_scene) {
    var positive = [];
    var negative = [];

    for(var i = 0; i < prev_scene.effects.length; i++) {
        var type = prev_scene.effects[i].type;
        var carId = prev_scene.effects[i].affectedUnitId;
        var tick = prev_scene.effects[i].tick;
        var damage = prev_scene.effects[i].damage;

        if (type === "POSITIVE_HP_CHANGES") {
            var objectToAdd = null;
            for(var j = 0; j < scene.effects.length; j++) {
                var etype = scene.effects[j].type;
                if (etype !== "CAR_CONDITION_CHANGE")
                    continue;
                if (scene.effects[j].affectedUnitId != carId)
                    continue;
                if (scene.effects[j].attributes.durabilityPercentsChange <= 0)
                    continue;
                if (scene.effects[j].tick != 0 && scene.effects[j].tick < 20) {
                    objectToAdd = {type: "POSITIVE_HP_CHANGES", affectedUnitId: carId, tick: tick + 1};
                } else if (scene.effects[j].tick == 0) {
                    objectToAdd = {type: "POSITIVE_HP_CHANGES", affectedUnitId: carId, tick: 0};
                    break;
                }
            }
            if (objectToAdd) {
                positive[carId] = objectToAdd;
            }
        } else if (type === "NEGATIVE_HP_CHANGES") {
            var objectToAdd = {type: "NEGATIVE_HP_CHANGES", affectedUnitId: carId, damage: damage, tick: 10000};
            for(var j = 0; j < scene.effects.length; j++) {
                var etype = scene.effects[j].type;
                if (etype !== "CAR_CONDITION_CHANGE")
                    continue;
                if (scene.effects[j].affectedUnitId != carId)
                    continue;
                if (scene.effects[j].attributes.durabilityPercentsChange >= 0)
                    continue;
                if (scene.effects[j].tick == 0) {
                    objectToAdd.damage += scene.effects[j].attributes.durabilityPercentsChange;
                }

                objectToAdd.tick = Math.min(objectToAdd.tick, scene.effects[j].tick);
            }
            if (objectToAdd.tick < 10000) {
                negative[carId] = objectToAdd;
            }
        }
    }

    for(var i = 0; i < scene.effects.length; i++) {
        var type = scene.effects[i].type;
        if (type !== "CAR_CONDITION_CHANGE") {
            continue;
        }
        if (scene.effects[i].tick != 0)
            continue;

        var change = scene.effects[i].attributes.durabilityPercentsChange;
        var carId = scene.effects[i].affectedUnitId;
        if (negative[carId] === undefined && change < 0) {
            negative[carId] = {type: "NEGATIVE_HP_CHANGES", affectedUnitId: carId, damage: change, tick: 0};
        }
        if (positive[carId] === undefined && change > 0) {
            positive[carId] = {type: "POSITIVE_HP_CHANGES", affectedUnitId: carId, tick: 0};
        }
    }
    for(var id in positive) {
        scene.effects.push(positive[id]);
    }
    for(var id in negative) {
        scene.effects.push(negative[id]);
    }
};function Graphics(options) {
    this.parent = optionValue(options, "parent");
    this.width = optionValue(options, "width");
    this.height = optionValue(options, "height");
    this.useCanvas = optionValue(options, "useCanvas");
    this.id = "layer-" + Graphics.zIndex;
    this.scale = optionValue(options, "scale", 1.0);

    this.parent.style.overflow = "hidden";
    this.parent.style.imageRendering = "-webkit-optimize-contrast";
    this.parent.style.position = "relative";
    this.parent.style.width = this.scale * this.width + "px";
    this.parent.style.height = this.scale * this.height + "px";

    this.sprites = [];
    this.oldZIndexes = [];
    this.labels = [];
    this.bars = [];

    if (this.useCanvas) {
        this.canvas = [];
        this.ctx = [];

        for (var i = 0; i < 2; i++) {
            this.canvas[i] = document.createElement("canvas");
            this.canvas[i].style.zIndex = Graphics.zIndex++;
            this.canvas[i].style.width = this.scale * this.width + "px";
            this.canvas[i].style.height = this.scale * this.height + "px";
            this.canvas[i].style.position = "absolute";
            this.canvas[i].style.left = 0;
            this.canvas[i].style.top = 0;
            this.canvas[i].setAttribute("width", this.scale * this.width);
            this.canvas[i].setAttribute("height", this.scale * this.height);
            this.canvas[i].id = this.id + i;
            this.parent.appendChild(this.canvas[i]);
            this.ctx[i] = this.canvas[i].getContext('2d');
            this.canvas[i].style.visibility = 'visible';
        }

        this.nextCanvas = 0;
    } else {
        this.div = document.createElement("div");
        this.div.style.zIndex = Graphics.zIndex++;
        this.div.style.width = this.scale * this.width + "px";
        this.div.style.height = this.scale * this.height + "px";
        this.div.style.position = "absolute";
        this.div.style.left = 0;
        this.div.style.top = 0;
        this.div.style.width = this.scale * this.width + "px";
        this.div.style.height = this.scale * this.height + "px";
        this.div.id = this.id;
        this.parent.appendChild(this.div);
    }

    return this;
}

Graphics.zIndex = 1;

Graphics.prototype.beforeFrame = function () {
    this.hideAll();
};

Graphics.prototype.afterFrame = function () {
    this.updateAll();

    if (this.useCanvas) {
        var otherCanvas = this.nextCanvas ^ 1;
        this.canvas[otherCanvas].style.visibility = 'hidden';
        this.canvas[this.nextCanvas].style.visibility = 'visible';
        this.nextCanvas = otherCanvas;
        this.clear(this.nextCanvas);
    }
};

Graphics.prototype.canvas = function () {
    return this.canvas[this.nextCanvas];
};

Graphics.prototype.canvasCtx = function () {
    return this.ctx[this.nextCanvas];
};

Graphics.prototype.div = function () {
    return this.div;
};

Graphics.prototype.layer = function () {
    return this.div || this.canvas;
};

Graphics.prototype.parent = function () {
    return this.parent;
};

Graphics.prototype.newSprite = function (url, options) {
    var sprite = new Sprite(this, url, options, this.sprites.length);
    this.sprites.push(sprite);
    this.oldZIndexes.push(0);
    return sprite;
};

Graphics.prototype.newLabel = function (options) {
    var label = new Label(this, options);
    this.labels.push(label);
    return label;
};

Graphics.prototype.newBar = function (options) {
    var bar = new Bar(this, options);
    this.bars.push(bar);
    return bar;
};

Graphics.prototype.hideAll = function () {
    var i;

    for (i = 0; i < this.bars.length; i++) {
        this.bars[i].hidden = true;
    }

    for (i = 0; i < this.sprites.length; i++) {
        this.sprites[i].hidden = true;
    }

    for (i = 0; i < this.labels.length; i++) {
        this.labels[i].hidden = true;
    }
};

Graphics.prototype.updateAll = function () {
    var i, j;

    this.sprites.sort(function(a, b) {
        return (a.zIndex !== b.zIndex) ? (a.zIndex - b.zIndex) : (a.y - b.y);
    });

    for (i = 0; i < this.sprites.length; i++) {
        this.oldZIndexes[i] = this.sprites[i].zIndex;
        this.sprites[i].zIndex = i;
        this.sprites[i].update();
    }

    for (i = 0; i < this.sprites.length; i++) {
        this.sprites[i].zIndex = this.oldZIndexes[i];
    }

    for (i = 0; i < this.bars.length; i++) {
        this.bars[i].update();
    }

    for (i = 0; i < this.labels.length; i++) {
        this.labels[i].update();
    }
};

Graphics.prototype.updateHidden = function () {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].updateHidden();
    }
};

Graphics.prototype.clear = function (index) {
    if (this.useCanvas) {
        this.ctx[index].clearRect(0, 0, this.canvas[index].width, this.canvas[index].height);
    }
};function Label(graphics, options) {
    this.transform = getProperty(document.body.style, [
        'transform',
        'webkitTransform',
        'MozTransform',
        'OTransform',
        'msTransform']);

    this.graphics = graphics;

    this.unusual = {};
    this.previous = {};

    this.left = optionValue(options, "left", null);
    this.right = optionValue(options, "right", null);
    this.top = optionValue(options, "top", null);
    this.bottom = optionValue(options, "bottom", null);

    this.hidden = true;

    this.opacity = optionValue(options, "opacity", 1.0);
    this.unusual.opacity = (this.opacity != 1.0);

    this.div = document.createElement("div");
    this.div.style.textAlign = optionValue(options, "textAlign", "center");
    this.div.style.position = "absolute";
    this.div.style.fontSize = (optionValue(options, "fontSize", "12") * this.graphics.scale) + "px";
    this.div.style.fontFamily = optionValue(options, "fontFamily", "Arial");
    this.div.style.fontWeight = optionValue(options, "fontWeight", "normal");
    this.div.style.color = optionValue(options, "color", "black");

    if (options && options.width) {
        this.div.style.width = options.width * this.graphics.scale + "px";
    }

    var zIndex = optionValue(options, "zIndex", null);
    if (zIndex != null) {
        this.div.style.zIndex = zIndex;
    }

    this.graphics.parent.appendChild(this.div);

    var text = optionValue(options, "text", null);
    var innerHtml = optionValue(options, "innerHtml", null);

    if (text === null && innerHtml === null) {
        text = "";
    }

    if (text !== null)
        this.setText(text);
    else
        this.setInnerHtml(innerHtml);

    return this;
}

Label.prototype.setFontSize = function(size) {
    this.div.style.fontSize = (size * this.graphics.scale) + "px";
    return this;
};

Label.prototype.setStrikeText = function(value) {
    if (value) {
        this.div.style.textDecoration = "line-through";
    } else {
        this.div.style.textDecoration = "none";
    }
};

Label.prototype.setText = function (text) {
    this.div.innerHTML = text;
    return this;
    //console.log(this.div);
    //this.text = text;
    //this.innerHtml = null;
    //
    //while (this.div.firstChild !== null) {
    //    this.div.removeChild(this.div.firstChild);
    //}
    //this.div.appendChild(document.createTextNode(text));
    //return this;
};

Label.prototype.setInnerHtml = function (innerHtml) {
    this.text = null;
    this.innerHtml = innerHtml;

    while (this.div.firstChild !== null) {
        this.div.removeChild(this.div.firstChild);
    }
    this.div.innerHTML = innerHtml;
    return this;
};

Label.prototype.remove = function () {
    if (!this.removed) {
        this.graphics.parent.removeChild(this.div);
        var index = this.graphics.labels.indexOf(this);
        if (index && index >= 0) {
            this.graphics.labels.splice(index, 1);
        }
        this.removed = true;
        this.hidden = true;
    }
    return this;
};

Label.prototype.updatePosition = function (side) {
    if (this.previous[side] !== this[side]) {
        if (this[side] === undefined || this[side] === null) {
            this.div.style[side] = undefined;
        } else {
            this.div.style[side] = (this.graphics.scale * this[side]) + "px";
        }
        this.previous[side] = this[side];
    }
    return this;
};

Label.prototype.update = function () {
    if (this.previous.hidden !== this.hidden) {
        this.previous.hidden = this.hidden;
        if (this.hidden) {
            this.div.style.display = "none";
            return this;
        } else {
            this.div.style.display = "block";
        }
    }

    if (!this.hidden) {
        this.updatePosition("left");
        this.updatePosition("right");
        this.updatePosition("top");
        this.updatePosition("bottom");

        if (!this.unusual.opacity) {
            this.unusual.opacity = (this.opacity !== 1.0);
        }

        if (this.unusual.opacity && this.previous.opacity !== this.opacity) {
            this.div.style.opacity = this.opacity;
        }

        this.previous.opacity = this.opacity;
    }

    return this;
};
function Sprite(graphics, url, options, id) {
    this.transform = getProperty(document.body.style, [
        'transform',
        'webkitTransform',
        'MozTransform',
        'OTransform',
        'msTransform'
    ]);

    this.id = id;
    this.graphics = graphics;
    this.useCanvas = graphics.useCanvas;
    this.url = url;
    this.image = Loader.instance.get(url);

    if (this.image === undefined) {
        error("Can't find loaded image " + url + ".");
    }

    this.imageWidth = optionValue(options, "imageWidth", this.image.width);
    this.imageHeight = optionValue(options, "imageHeight", this.image.height);

    this.rowCount = optionValue(options, "rowCount", 1);
    this.columnCount = optionValue(options, "columnCount", 1);
    this.frameCount = optionValue(options, "frameCount", 1);
    this.cyclic = optionValue(options, "cyclic", false);
    this.frame = 0;

    if (this.frameCount > this.rowCount * this.columnCount) {
        throw "Sprite: this.frameCount > this.rowCount * this.columnCount.";
    }

    if (this.imageWidth % this.columnCount != 0) {
        throw "Sprite: this.imageWidth % this.columnCount != 0.";
    }

    if (this.imageHeight % this.rowCount != 0) {
        throw "Sprite: this.imageWidth % this.columnCount != 0.";
    }

    this.imageWidth = this.imageWidth / this.columnCount;
    this.imageHeight = this.imageHeight / this.rowCount;

    this.previous = {};
    this.unusual = {};

    this.x = optionValue(options, "x", 0);
    this.y = optionValue(options, "y", 0);

    this.centerX = optionValue(options, "centerX", this.imageWidth / 2);
    this.centerY = optionValue(options, "centerY", this.imageHeight / 2);

    this.offsetX = optionValue(options, "offsetX", 0);
    this.offsetY = optionValue(options, "offsetY", 0);

    this.angle = optionValue(options, "angle", 0.0);
    this.unusual.angle = (this.angle != 0.0);
    this.opacity = optionValue(options, "opacity", 1.0);
    this.unusual.opacity = (this.opacity != 1.0);
    this.scale = optionValue(options, "scale", 1.0);
    this.totalScale = this.scale * this.graphics.scale;
    this.unusual.totalScale = (this.totalScale != 1.0);
    this.frame = 0;
    this.hidden = true;

    this.width = optionValue(options, "width", this.imageWidth * this.scale);
    this.height = optionValue(options, "height", this.imageHeight * this.scale);

    if (!this.useCanvas) {
        this.div = document.createElement("div");
        this.div.style.backgroundImage = 'url(' + this.url + ')';
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.backgroundPosition = '0 0';
        this.div.style.width = this.width / this.scale + "px";
        this.div.style.height = this.height / this.scale + "px";
        this.div.style.position = "absolute";
        this.div.style.top = "-10000px";
        this.div.style.left = "-10000px";
        graphics.div.appendChild(this.div);
    }

    this.zIndex = optionValue(options, "zIndex", 0);
    return this;
}

Sprite.prototype.setFrame = function (frame) {
    this.frame = frame;
    if (this.frame >= this.frameCount) {
        if (this.cyclic) {
            this.frame = this.frame % this.frameCount;
        } else {
            this.remove();
        }
    }
};

Sprite.prototype.nextFrame = function () {
    this.setFrame(this.frame + 1);
};

Sprite.prototype.remove = function () {
    if (!this.removed) {
        if (!this.useCanvas) {
            this.graphics.div.removeChild(this.div);
            var index = this.graphics.sprites.indexOf(this);
            if (index && index >= 0) {
                this.graphics.sprites.splice(index, 1);
            }
        }
        this.removed = true;
        this.hidden = true;
    }
};

Sprite.prototype.updateHidden = function () {
    if (!this.useCanvas) {
        if (this.previous.hidden !== this.hidden) {
            this.previous.hidden = this.hidden;
            if (this.hidden) {
                this.div.style.visibility = "hidden";
            } else {
                this.div.style.visibility = "visible";
            }
        }
    }
};

Sprite.prototype.updateDiv = function () {
    this.updateHidden();

    if (this.frameCount !== 1) {
        if (this.previous.frame !== this.frame && this.frame < this.frameCount) {
            var row = Math.floor(this.frame / this.columnCount);
            var col = this.frame % this.columnCount;
            this.div.style.backgroundPosition = (-this.imageWidth * col) + "px "
                + (-this.imageHeight * row) + "px";
        }
        this.previous.frame = this.frame;
    }

    if (this.previous.x !== this.x) {
        this.div.style.left = (this.graphics.scale * (this.x - this.centerX) - (this.width / this.scale - this.centerX) * (1 - this.graphics.scale)) + "px";
    }
    this.previous.x = this.x;

    if (this.previous.y !== this.y) {
        this.div.style.top = (this.graphics.scale * (this.y - this.centerY) - (this.height / this.scale - this.centerY) * (1 - this.graphics.scale)) + "px";
    }
    this.previous.y = this.y;

    this.div.style.zIndex = this.zIndex;

    if (!this.unusual.angle) {
        this.unusual.angle = (this.angle !== 0.0);
    }

    if (!this.unusual.opacity) {
        this.unusual.opacity = (this.opacity !== 1.0);
    }

    if (this.unusual.opacity && this.previous.opacity !== this.opacity) {
        this.div.style.opacity = this.opacity;
    }
    this.previous.opacity = this.opacity;

    if ((this.unusual.totalScale || this.unusual.angle)
        && (this.previous.angle !== this.angle || this.previous.totalScale !== this.totalScale)) {
        this.div.style[this.transform] = "rotate(" + this.angle + "rad) "
            + "scale(" + this.totalScale + " , " + this.totalScale + ")";
    }
    this.previous.angle = this.angle;
    this.previous.totalScale = this.totalScale;
};

Sprite.prototype.updateCanvas = function () {
    this.previous.hidden = this.hidden;
    if (this.hidden) {
        return;
    }

    var ctx = this.graphics.canvasCtx();
    var x, y, row, col;

    if (this.angle !== 0) {
        error("angle is not equal to 0");
    }

    x = this.graphics.scale * (this.x - this.centerX);
    y = this.graphics.scale * (this.y - this.centerY);

    if (this.frameCount === 1) {
        ctx.drawImage(this.image,
            this.offsetX, this.offsetY,
            this.imageWidth, this.imageHeight,
            x, y,
            this.graphics.scale * this.width, this.graphics.scale * this.height
        );
    } else {
        row = Math.floor(this.frame / this.columnCount);
        col = this.frame % this.columnCount;
        ctx.drawImage(
            this.image,
            col * this.imageWidth + this.offsetX, row * this.imageHeight + this.offsetY,
            this.imageWidth, this.imageHeight,
            x, y,
            this.graphics.scale * this.width, this.graphics.scale * this.height
        );
    }
};

Sprite.prototype.update = function () {
    if (this.useCanvas) {
        if (!this.removed) {
            this.updateCanvas();
        }
    } else {
        this.updateDiv();
    }
};
function Fps(options) {
    this.value = optionValue(options, "value", configuration.DEFAULT_FPS);
    this.max = optionValue(options, "max", configuration.MAX_FPS);
    this.min = optionValue(options, "min", configuration.MIN_FPS);

    this.value = Math.min(this.max, this.value);
    this.value = Math.max(this.min, this.value);

    this.delayMillis = 1000 / this.value;
    this.timestamps = [];
    this.lastMillis = currentTimeMillis();
    this.tickDelay = 6;
    this.changeCallback = optionValue(options, "changeCallback", null);
    if (this.changeCallback !== null) {
        this.changeCallback(this.value);
    }
}

Fps.prototype.change = function (delta) {
    this.value = Math.min(this.max, Math.max(this.min, this.value + delta));
    if (this.changeCallback !== null) {
        this.changeCallback(this.value);
    }
    return this;
};

Fps.prototype.beforeFrame = function () {
    var timestamp = currentTimeMillis();
    this.timestamps.push(timestamp);
    while (this.timestamps.length > 0 && this.timestamps[0] < timestamp - 1000) {
        this.timestamps.shift();
    }
};

Fps.prototype.fps = function () {
    if (this.timestamps.length <= 2) {
        return this.value;
    } else {
        var gap = this.timestamps[this.timestamps.length - 1] - this.timestamps[0];
        var mid = gap / (this.timestamps.length - 1);
        return this.value - Math.round((this.value - Math.round(1000.0 / mid)) / 5) * 5;
    }
};

Fps.prototype.delay = function () {
    var millis = currentTimeMillis();

    if (millis - this.lastMillis >= 100) {
        if (this.fps() + 10 < this.value) {
            this.tickDelay += 0.1;
        }

        if (this.fps() < this.value) {
            this.tickDelay += 0.02;
        }

        if (this.fps() > this.value + 10) {
            this.tickDelay -= 0.1;
        }

        if (this.fps() > this.value) {
            this.tickDelay -= 0.02;
        }

        this.tickDelay = Math.max(0, Math.min(1000, this.tickDelay));
        this.delayMillis = Math.max(0, Math.min((1000 - this.tickDelay * this.value) / this.value));
        this.lastMillis = millis;
    }
    return this.delayMillis;
};
Audios.supportedAudioTypes = [{typeAttr: "audio/mp3", ext: ".mp3"}];

function Audios(options) {
    var audios = this;

    this.preloadCount = optionValue(options, "preloadCount", 1);
    $.each(options, function(key, value) {
        if (key != "preloadCount" && key != "loop") {
            audios[key] = [];
            for (var j = 0; j < audios.preloadCount; j++) {
                for (var i = 0; i < value.length; i++) {
                    var audio = document.createElement("audio");
                    for (var k = 0; k < Audios.supportedAudioTypes.length; ++k) {
                        var type = Audios.supportedAudioTypes[k];

                        var source = document.createElement("source");
                        source.src = value[i] + type.ext;
                        source.type = type.typeAttr;

                        audio.appendChild(source);
                    }
                    try {
                        audio.preload = "auto";
                        audio.loop = optionValue(options, "loop", false);
                        if (key === "MUSIC")
                            audio.loop = true;
                        audio.curPlayed = false;
                        audios[key].push(audio);
                    } catch(exc) {
                        console.log(exc);
                    }
                }
                if (key === "MUSIC")
                    break;
            }
            audios["index." + key] = 0;
        }
    });

    return this;
}

Audios.prototype.play = function(name, options) {
    var index = this["index." + name];

    if (options !== undefined && options.index !== undefined) {
        index = options.index % this[name].length;
    }

    if (options !== undefined && options["volume"] !== undefined) {
        this[name][index].volume = options["volume"] / 3.0
            + (Math.random() * 2.0 * options["volume"] / 3.0);
    }

    if (this[name][index].play) {
        this[name][index].play();
        this[name][index].curPlayed = true;
    }
    this["index." + name] = (this["index." + name] + 1) % this[name].length;
};

Audios.prototype.stop = function(name) {
    for (var i = 0; i < this[name].length; i++) {
        if (this[name][i].stop) {
            this[name][i].stop();
        }
    }
};

Audios.prototype.pause = function(name, index) {
    if (index !== undefined) {
        if (this[name][index].curPlayed) {
            this[name][index].pause();
            this[name][index].curPlayed = false;
        }
        return;
    }
    for (var i = 0; i < this[name].length; i++) {
        if (this[name][i].curPlayed) {
            this[name][i].pause();
            this[name][i].wasPaused = true;
            this[name][i].curPlayed = false;
        }
    }
};

Audios.prototype.resume = function(name) {
    for (var i = 0; i < this[name].length; i++) {
        if (this[name][i].wasPaused === true) {
            this[name][i].play();
            this[name][i].wasPaused = false;
            this[name][i].curPlayed = true;
        }
    }
};

Audios.prototype.pauseAll = function() {
    for(var s in this) {
        if (this.hasOwnProperty(s)) {
            if (s.indexOf("index.") !== 0 && s !== "preloadCount") {
                this.pause(s);
            }
        }
    }
};

Audios.prototype.changePlaybackRate = function(name, index, rate) {
    index %= this[name].length;
    this[name][index].playbackRate = rate;
//    this[name][index].defaultPlaybackRate = rate;
};

Audios.prototype.resumeAll = function() {
    for(var s in this) {
        if (this.hasOwnProperty(s)) {
            if (s.indexOf("index.") !== 0 && s !== "preloadCount") {
                this.resume(s);
            }
        }
    }
};

Audios.prototype.stopAll = function(excludeSounds) {
    var list, i;
    for (var s in this) {
        if (this.hasOwnProperty(s)) {
            if (s.indexOf("index.") !== 0 && s !== "preloadCount" && (excludeSounds === undefined || excludeSounds.indexOf(s) === -1)) {
                list = this[s];
                for (i = 0; i < list.length; ++i) {
                    if (list[i].pause) {
                        list[i].pause();
                        if (list[i].duration) {
                            list[i].currentTime = 0;
                        }
                    }
                }
            }
        }
    }
};
function ShareFrame(graphics, options) {
    this.graphics = graphics;

    this.shareUrl = optionValue(options, "shareUrl");
    this.services = optionValue(options, "services");
    this.title = optionValue(options, "title");
    this.url = optionValue(options, "url");
    this.removed = false;
    this.hidden = true;

    this.div = document.createElement("div");
    this.div.style.left = (optionValue(options, "centerX", 0)/2 - 156/2) + "px";
    this.div.style.top = (optionValue(options, "centerY", 0)*4/5) + "px";
    this.div.style.zIndex = optionValue(options, "zIndex");
    this.div.style.position = "absolute";
    this.div.style.textAlign = "center";
    this.div.style.display = "none";
    this.div.className = "follow-us";

    var span = document.createElement('span');
    span.appendChild(document.createTextNode("Поделиться:"));
    span.style.fontSize = optionValue(options, "fontSize", "18") + "px";
    span.style.fontFamily = optionValue(options, "fontFamily", "Arial");
    span.style.fontWeight = optionValue(options, "fontWeight", "bold");
    span.style.color = optionValue(options, "color", "black");
    span.style.margin = "10px";

    var table = document.createElement("table");
    table.style.margin = "10px";
    var tr = table.insertRow(0);

    var backgroundPosition = 0;
    for (var i = 0; i < this.services.length; i++) {
        var td = tr.insertCell(i);
        td.style.paddingRight = "3px";
        td.style.paddingBottom = 0;
        td.style.paddingLeft = 0;
        td.style.paddingTop = 0;
        td.style.height = "27px";
        td.style.width = "27px";
        td.style.margin = 0;

        var link = this.shareUrl + "service=" + encodeURIComponent(this.services[i]) + "&amp;" +
            "title=" + encodeURIComponent(this.title) + "&amp;" +
            "url=" + encodeURIComponent(this.url);

        var tagA = document.createElement("a");
        tagA.style.background = "url('" + configuration.SHARE_ICON_SRC + "') no-repeat";
        tagA.style.backgroundPosition = backgroundPosition + "px";
        tagA.className = "icon mpReset";
        tagA.title = "Поделиться";
        tagA.href = link;
        td.appendChild(tagA);

        backgroundPosition -= 27;
    }

    this.div.appendChild(span);
    this.div.appendChild(table);


    $(".follow-us a").click(function () {
        var href = $(this).attr("href");
        window.open(href, '', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800,height=600');
        return false;
    });

    return this;
}

ShareFrame.prototype.show = function () {
    if (this.hidden) {
        this.div.style.display = "block";
        this.hidden = false;
    }
    return this;
};

ShareFrame.prototype.hide = function () {
    if (!this.hidden) {
        this.div.style.display = "none";
        this.hidden = true;
    }
    return this;
};
configuration = {CACHE_PREFIX: "CODERACING_2015."};


configuration.get = function (short_name, defaultValue) {
	var name = this.CACHE_PREFIX + short_name;

    if (window.localStorage[name] == null
        || window.localStorage[name] == "null"
        || (window.localStorage != window.localStorage)
        || window.localStorage[name] == "NaN"
        || window.localStorage[name] == undefined
        || window.localStorage[name] == "undefined") {
        window.localStorage[name] = defaultValue;
    }

    var result = window.localStorage[name];

    if (!isNaN(parseFloat(result)) && isFinite(result)) {
        return parseFloat(result);
    }

    if (result == "true") {
        return true;
    }

    if (result == "false") {
        return false;
    }

    return result;
};

configuration.set = function (name, value) {
    window.localStorage[this.CACHE_PREFIX + name] = value;
};

configuration.WORLD_SIZES = [
    {width: 1280, height: 800},
    {width: 1366, height: 768}
];

configuration.MAX_WIDTH = 1280;
configuration.MAX_HEIGHT = 800;

configuration.setWorldSize = function (worldWidth, worldHeight) {
    var worldType = -1;
    for (var i = 0; i < configuration.WORLD_SIZES.length; ++i) {
        if (worldWidth === configuration.WORLD_SIZES[i].width && worldHeight === configuration.WORLD_SIZES[i].height) {
            worldType = i;
            break;
        }
    }

    if (worldType === -1) {
        error("Unknown world type: " + worldWidth + " x " + worldHeight);
    }

    configuration.WORLD_TYPE = worldType;

    if (worldType === 0) {
        configuration.WIDTH = 1280;
        configuration.HEIGHT = 800;
    }

    if (worldType === 1) {
        configuration.WIDTH = 1366;
        configuration.HEIGHT = 768;
    }

    var elem = configuration.CONTAINTER_ELEMENT;
    if (elem) {
        elem.style.width = (worldWidth * configuration.get("scale", 1.0) + 50) + "px";
        elem.style.height = (worldHeight * configuration.get("scale", 1.0) + 150) + "px";
        centerElement(window.parent, elem);
    }
};

configuration.getImageFullName = function (image) {
    return image + (configuration.get("highQuality", false) ? ".png" : "-low.png");
};

configuration.getImageFullNameExt = function (image) {
//    return image + (configuration.get("highQuality", false) ? ".png" : "-low.png");
    return image + (configuration.get("highQuality", false) ? "8.png" : "-low8.png");
};

configuration.COUNTDOWN_SPRITE_SRCS = ["app/sprites/countdown0.png", "app/sprites/countdown1.gif"];

configuration.DEFAULT_FPS = 60;
configuration.MAX_FPS = 120;
configuration.MIN_FPS = 1;
configuration.TILE_SIZE = 800;
configuration.PROJECTILE_DIR = "app/projectile/";
configuration.ROAD_DIR = "app/road/";
configuration.BONUS_DIR = "app/bonus/";
configuration.BONUS_ROTATION = Math.PI / 180;
configuration.CAR_DIR = "app/car/";
configuration.STUFF_DIR = "app/stuff/";
configuration.EFFECT_DIR = "app/effect/";
configuration.STUFF_NAMES = {
    "desert/": ['DESERT_UFO', 'SHAI_HULUD', 'BOMB', 'CRAB_SIGN', 'BUFFALO_RIBS_C', 'BUFFALO_SKULL', 'CACTUS', 'JERRYCAN', 'OIL_BARREL_FLAME', 'OIL_BARREL_NUKE', 'STONES', 'TIRES', 'DESERT_GRASS'],
    "space/": ['TURBIN', 'RADAR_STATION']
};
configuration.STUFF_BORDER = 150;
configuration.STUFF_PROBABILITY = 5;
configuration.BILLBOARDS = {
    "desert/": ['DESERT_BILLBOARD_CUBBER', 'DESERT_BILLBOARD_CUBE_CAR', 'DESERT_BILLBOARD_CUBERBERG', 'BILLBOARD_CODEFORCES', 'BILLBOARD_AICUP', 'BILLBOARD_MAIL', 'BILLBOARD_TECHNO']
};
configuration.BILLBOARD_PROBABILITY = 15;
configuration.CAR_SCALE = configuration.TILE_SIZE / 11000;
configuration.ROAD_SCALE = configuration.TILE_SIZE / 13950;
configuration.STUFF_SCALE = configuration.TILE_SIZE / 8000;
configuration.SLICK_SCALE = configuration.TILE_SIZE / 6666;

configuration.COUNTDOWN_TICKS = 180;
configuration.SLICK_DURATION = 600;

configuration.EXHAUST_COUNT = 100;
configuration.EXHAUST_POS = {"BUGGY": [{x: -1964, y: 1049, z: -870},
									   {x: -1887, y: 915, z: -740},
									   {x: -1964, y: 1049, z: 870},
									   {x: -1887, y: 915, z: 740}],
						     "JEEP": [{x: -593, y: 1450, z: -704},
						     	      {x: -593, y: 1450, z: 704}]};


configuration.BRAKES_COUNT = 600;
configuration.BRAKES_POS = {"BUGGY": [new THREE.Vector3(-1143, 0, 710),
                                      new THREE.Vector3(-1143, 0, -710),
                                      new THREE.Vector3(778, 0, -770),
                                      new THREE.Vector3(778, 0, 770)],
                             "JEEP": [new THREE.Vector3(1070, 0, -712),
                                      new THREE.Vector3(1070, 0, 712),
                                      new THREE.Vector3(-1082, 0, -712),
                                      new THREE.Vector3(-1082, 0, 712)]};



configuration.ENGINE_POS = {"BUGGY": {x: 935, y: 890, z: 0},
							"JEEP": {x: -790, y: 1190, z: 0}};


configuration.LABEL_ZINDEX = 15;

configuration.SHARE_ICON_SRC = "app/img/share-icons.png";

configuration.PLAYERS_COLOR = ["#ff0303", "#0042ff", "#fffc01", "#20c000"];
configuration.PLAYERS_COLOR_NAME = ["RED", "BLUE", "YELLOW", "GREEN"];

configuration.LABEL_FONT_FAMILY = "pf_beausans_problack";
configuration.LABEL_FONT_WEIGHT = "light";
configuration.PLAYER_LABEL_FONT_SIZE = 20;
configuration.EQUIPMENT_LABEL_FONT_SIZE = 25;
configuration.EQUIPMENT_LABEL_COLOR = {
    "desert/": "#444444",
    "space/": "#cccccc"
};
configuration.EQUIPMENT_SPRITES = ["app/sprites/hitpoint.png", "app/sprites/ammo.png", "app/sprites/nitro.png", "app/sprites/oil.png"];

configuration.FREE_CAMERA_SPEED = 2.5;

configuration.MIN_ZOOM_DIST = 2000;
configuration.MAX_ZOOM_DIST = 10000;
configuration.PERFORMANCE_INDEX = 0.5;
configuration.PERFORMANCE_TOLERANCE = 300;
configuration.STAR_COUNT = 5000;Loader.resources = {
    carSprites: ["app/sprites/car/small/BUGGY_RED.png", "app/sprites/car/small/BUGGY_BLUE.png", "app/sprites/car/small/BUGGY_YELLOW.png", "app/sprites/car/small/BUGGY_GREEN.png", "app/sprites/car/small/JEEP_RED.png", "app/sprites/car/small/JEEP_BLUE.png", "app/sprites/car/small/JEEP_YELLOW.png", "app/sprites/car/small/JEEP_GREEN.png", "app/sprites/car/large/BUGGY_RED.png", "app/sprites/car/large/BUGGY_BLUE.png", "app/sprites/car/large/BUGGY_YELLOW.png", "app/sprites/car/large/BUGGY_GREEN.png", "app/sprites/car/large/JEEP_RED.png", "app/sprites/car/large/JEEP_BLUE.png", "app/sprites/car/large/JEEP_YELLOW.png", "app/sprites/car/large/JEEP_GREEN.png"],
    jeepResources: ["app/car/JEEP_RED.png", "app/car/JEEP_BLUE.png", "app/car/JEEP_YELLOW.png", "app/car/JEEP_GREEN.png", "app/car/JEEP", "app/car/JEEP_BW", "app/car/JEEP_FW_L", "app/car/JEEP_FW_R"],
    buggyResources: ["app/car/BUGGY_RED.png", "app/car/BUGGY_BLUE.png", "app/car/BUGGY_YELLOW.png", "app/car/BUGGY_GREEN.png", "app/car/BUGGY", "app/car/BUGGY_BW", "app/car/BUGGY_FW_L", "app/car/BUGGY_FW_R"],
//    desertTiles: ["app/road/EMPTY.png", "app/road/EMPTY", "app/road/LEFT_TOP_CORNER.png", "app/road/LEFT_TOP_CORNER", "app/road/BOTTOM_HEADED_T.png", "app/road/BOTTOM_HEADED_T", "app/road/HORIZONTAL.png", "app/road/HORIZONTAL", "app/road/RIGHT_TOP_CORNER.png", "app/road/RIGHT_TOP_CORNER", "app/road/RIGHT_HEADED_T.png", "app/road/RIGHT_HEADED_T", "app/road/CROSSROADS.png", "app/road/CROSSROADS", "app/road/LEFT_HEADED_T.png", "app/road/LEFT_HEADED_T", "app/road/VERTICAL.png", "app/road/VERTICAL", "app/road/LEFT_BOTTOM_CORNER.png", "app/road/LEFT_BOTTOM_CORNER",  "app/road/TOP_HEADED_T.png", "app/road/TOP_HEADED_T", "app/road/RIGHT_BOTTOM_CORNER.png", "app/road/RIGHT_BOTTOM_CORNER", "app/road/FINISH_STAND", "app/road/FINISH_STAND.png"],
//    desertStuff: ["app/stuff/BUFFALO_SKULL.png", "app/stuff/BUFFALO_SKULL", "app/stuff/JERRYCAN.png", "app/stuff/JERRYCAN", "app/stuff/CACTUS.png", "app/stuff/CACTUS", "app/stuff/BOMB.png", "app/stuff/BOMB", "app/stuff/OIL_BARREL_NUKE.png", "app/stuff/OIL_BARREL_NUKE", "app/stuff/STONES.png", "app/stuff/STONES", "app/stuff/DESERT_GRASS.png", "app/stuff/DESERT_GRASS", "app/stuff/OIL_BARREL_FLAME.png", "app/stuff/OIL_BARREL_FLAME", "app/stuff/BUFFALO_RIBS_C.png", "app/stuff/BUFFALO_RIBS_C", "app/stuff/TIRES.png", "app/stuff/TIRES", "app/stuff/CRAB_SIGN.png", "app/stuff/CRAB_SIGN", "app/stuff/SHAI_HULUD.png", "app/stuff/SHAI_HULUD", "app/stuff/DESERT_UFO", "app/stuff/DESERT_UFO.png"],
//    billboards: ["app/stuff/DESERT_BILLBOARD_CUBBER", "app/stuff/DESERT_BILLBOARD_CUBBER.png", "app/stuff/DESERT_BILLBOARD_CUBE_CAR", "app/stuff/DESERT_BILLBOARD_CUBE_CAR.png", "app/stuff/DESERT_BILLBOARD_CUBERBERG", "app/stuff/DESERT_BILLBOARD_CUBERBERG.png", "app/stuff/BILLBOARD_CODEFORCES", "app/stuff/BILLBOARD_CODEFORCES.png", "app/stuff/BILLBOARD_AICUP", "app/stuff/BILLBOARD_MAIL", "app/stuff/BILLBOARD_TECHNO", "app/stuff/BILLBOARD_AICUP.png", "app/stuff/BILLBOARD_MAIL.png", "app/stuff/BILLBOARD_TECHNO.png"],
    desertTiles: ["app/road/desert/EMPTY.png", "app/road/desert/EMPTY", "app/road/desert/LEFT_TOP_CORNER.png", "app/road/desert/LEFT_TOP_CORNER", "app/road/desert/BOTTOM_HEADED_T.png", "app/road/desert/BOTTOM_HEADED_T", "app/road/desert/HORIZONTAL.png", "app/road/desert/HORIZONTAL", "app/road/desert/RIGHT_TOP_CORNER.png", "app/road/desert/RIGHT_TOP_CORNER", "app/road/desert/RIGHT_HEADED_T.png", "app/road/desert/RIGHT_HEADED_T", "app/road/desert/CROSSROADS.png", "app/road/desert/CROSSROADS", "app/road/desert/LEFT_HEADED_T.png", "app/road/desert/LEFT_HEADED_T", "app/road/desert/VERTICAL.png", "app/road/desert/VERTICAL", "app/road/desert/LEFT_BOTTOM_CORNER.png", "app/road/desert/LEFT_BOTTOM_CORNER", "app/road/desert/TOP_HEADED_T.png", "app/road/desert/TOP_HEADED_T", "app/road/desert/RIGHT_BOTTOM_CORNER.png", "app/road/desert/RIGHT_BOTTOM_CORNER"],
    desertStuff: ["app/stuff/desert/BUFFALO_SKULL.png", "app/stuff/desert/BUFFALO_SKULL", "app/stuff/desert/JERRYCAN.png", "app/stuff/desert/JERRYCAN", "app/stuff/desert/CACTUS.png", "app/stuff/desert/CACTUS", "app/stuff/desert/BOMB.png", "app/stuff/desert/BOMB", "app/stuff/desert/OIL_BARREL_NUKE.png", "app/stuff/desert/OIL_BARREL_NUKE", "app/stuff/desert/STONES.png", "app/stuff/desert/STONES", "app/stuff/desert/DESERT_GRASS.png", "app/stuff/desert/DESERT_GRASS", "app/stuff/desert/OIL_BARREL_FLAME.png", "app/stuff/desert/OIL_BARREL_FLAME", "app/stuff/desert/BUFFALO_RIBS_C.png", "app/stuff/desert/BUFFALO_RIBS_C", "app/stuff/desert/TIRES.png", "app/stuff/desert/TIRES", "app/stuff/desert/CRAB_SIGN.png", "app/stuff/desert/CRAB_SIGN", "app/stuff/desert/SHAI_HULUD.png", "app/stuff/desert/SHAI_HULUD", "app/stuff/desert/DESERT_UFO", "app/stuff/desert/DESERT_UFO.png"],
    billboards: ["app/stuff/desert/DESERT_BILLBOARD_CUBBER", "app/stuff/desert/DESERT_BILLBOARD_CUBBER.png", "app/stuff/desert/DESERT_BILLBOARD_CUBE_CAR", "app/stuff/desert/DESERT_BILLBOARD_CUBE_CAR.png", "app/stuff/desert/DESERT_BILLBOARD_CUBERBERG", "app/stuff/desert/DESERT_BILLBOARD_CUBERBERG.png", "app/stuff/desert/BILLBOARD_CODEFORCES", "app/stuff/desert/BILLBOARD_CODEFORCES.png", "app/stuff/desert/BILLBOARD_AICUP", "app/stuff/desert/BILLBOARD_MAIL", "app/stuff/desert/BILLBOARD_TECHNO", "app/stuff/desert/BILLBOARD_AICUP.png", "app/stuff/desert/BILLBOARD_MAIL.png", "app/stuff/desert/BILLBOARD_TECHNO.png"],
    spaceTiles: ["app/road/space/CROSSROADS", "app/road/space/CROSSROADS.png", "app/road/space/TOP_HEADED_T", "app/road/space/TOP_HEADED_T.png", "app/road/space/RIGHT_TOP_CORNER", "app/road/space/RIGHT_TOP_CORNER.png", "app/road/space/HORIZONTAL0", "app/road/space/HORIZONTAL0.png", "app/road/space/HORIZONTAL1", "app/road/space/HORIZONTAL1.png", "app/road/space/HORIZONTAL2", "app/road/space/HORIZONTAL2.png", "app/road/space/HORIZONTAL3", "app/road/space/HORIZONTAL3.png"],
    spaceStuff: ["app/stuff/space/RADAR_STATION", "app/stuff/space/RADAR_STATION.png", "app/stuff/space/TURBIN", "app/stuff/space/TURBIN.png", "app/stuff/space/MOON", "app/stuff/space/MOON.png"],
    bonuses: ["app/bonus/OIL_CANISTER.png", "app/bonus/OIL_CANISTER", "app/bonus/NITRO_BOOST.png", "app/bonus/NITRO_BOOST", "app/bonus/REPAIR_KIT.png", "app/bonus/REPAIR_KIT", "app/bonus/AMMO_CRATE", "app/bonus/AMMO_CRATE.png", "app/bonus/PURE_SCORE", "app/bonus/PURE_SCORE.png"],
    sprites: ["app/sprites/countdown0.png", "app/sprites/countdown1.gif", "app/sprites/nitro.png", "app/sprites/ammo.png", "app/sprites/oil.png", "app/sprites/hitpoint.png"],
    effects: ["app/effect/SLICK.png", "app/effect/SLICK_ALPHA.png", "app/effect/SLICK", "app/effect/FLAME.png"],
    projectiles: ["app/projectile/WASHER", "app/projectile/TIRE", "app/projectile/TIRE.png", "app/projectile/WASHER.png"],
//    minimap: ["app/sprites/minimap/BOTTOM_HEADED_T.png", "app/sprites/minimap/CROSSROADS.png", "app/sprites/minimap/LEFT_BOTTOM_CORNER.png", "app/sprites/minimap/LEFT_HEADED_T.png", "app/sprites/minimap/LEFT_TOP_CORNER.png", "app/sprites/minimap/RIGHT_BOTTOM_CORNER.png", "app/sprites/minimap/RIGHT_HEADED_T.png", "app/sprites/minimap/RIGHT_TOP_CORNER.png", "app/sprites/minimap/TOP_HEADED_T.png", "app/sprites/minimap/HORIZONTAL.png", "app/sprites/minimap/VERTICAL.png", "app/sprites/minimap/FINISH_STAND.png"],
    desertMinimap: ["app/sprites/minimap/desert/BOTTOM_HEADED_T.png", "app/sprites/minimap/desert/CROSSROADS.png", "app/sprites/minimap/desert/LEFT_BOTTOM_CORNER.png", "app/sprites/minimap/desert/LEFT_HEADED_T.png", "app/sprites/minimap/desert/LEFT_TOP_CORNER.png", "app/sprites/minimap/desert/RIGHT_BOTTOM_CORNER.png", "app/sprites/minimap/desert/RIGHT_HEADED_T.png", "app/sprites/minimap/desert/RIGHT_TOP_CORNER.png", "app/sprites/minimap/desert/TOP_HEADED_T.png", "app/sprites/minimap/desert/HORIZONTAL.png", "app/sprites/minimap/desert/VERTICAL.png", "app/sprites/minimap/desert/FINISH_STAND.png"],
    spaceMinimap: ["app/sprites/minimap/space/BOTTOM_HEADED_T.png", "app/sprites/minimap/space/CROSSROADS.png", "app/sprites/minimap/space/LEFT_BOTTOM_CORNER.png", "app/sprites/minimap/space/LEFT_HEADED_T.png", "app/sprites/minimap/space/LEFT_TOP_CORNER.png", "app/sprites/minimap/space/RIGHT_BOTTOM_CORNER.png", "app/sprites/minimap/space/RIGHT_HEADED_T.png", "app/sprites/minimap/space/RIGHT_TOP_CORNER.png", "app/sprites/minimap/space/TOP_HEADED_T.png", "app/sprites/minimap/space/HORIZONTAL.png", "app/sprites/minimap/space/VERTICAL.png", "app/sprites/minimap/space/FINISH_STAND.png"],
    waypoint: ["app/sprites/waypoint/small/WAYPOINT.png", "app/road/WAYPOINT.png", "app/road/WAYPOINT"]
};
Loader.objUrl = ["app/road/FINISH_STAND", "app/road/FINISH_STAND.png"];

function Loader() {
	this.needLoad = 0;
	this.cache = [];

	return this;
}

Loader.prototype.preload = function() {
/*
     for(var i = 0; i < Loader.resources.desertTiles.length; i++) {
         var arr = Loader.resources.desertTiles[i].split('/');
         var name = arr[arr.length - 1];
         Loader.resources.desertTiles[i] = "app/road/desert/{0}".format(name);
     }

    for(var i = 0; i < Loader.resources.desertStuff.length; i++) {
        var arr = Loader.resources.desertStuff[i].split('/');
        var name = arr[arr.length - 1];
        Loader.resources.desertStuff[i] = "app/stuff/desert/{0}".format(name);
    }
    for(var i = 0; i < Loader.resources.billboards.length; i++) {
        var arr = Loader.resources.billboards[i].split('/');
        var name = arr[arr.length - 1];
        Loader.resources.billboards[i] = "app/stuff/desert/{0}".format(name);
    }
    console.log(Loader.resources.desertTiles);
    console.log(Loader.resources.desertStuff);
    console.log(Loader.resources.billboards);
 for(var i = 0; i < Loader.resources.minimap.length; i++) {
 var arr = Loader.resources.minimap[i].split('/');
 var name = arr[arr.length - 1];
 Loader.resources.minimap[i] = "app/sprites/minimap/desert/{0}".format(name);
 }
 console.log(Loader.resources.minimap);
 for(var i = 0; i < Loader.resources.minimap.length; i++) {
 var arr = Loader.resources.minimap[i].split('/');
 var name = arr[arr.length - 1];
 Loader.resources.minimap[i] = "app/sprites/minimap/space/{0}".format(name);
 }
 console.log(Loader.resources.minimap);
*/
    for(var resource in Loader.resources) {
        Loader.objUrl = Loader.objUrl.concat(Loader.resources[resource]);
    }

    for (var i = 0; i < Loader.objUrl.length; i++) {
		var name = Loader.objUrl[i];
		var idx = name.indexOf('.');
		if (idx <= -1) {
			this.loadOnlyObj(name);
		} else {
			this.loadImage(name);
		}
	}
};

Loader.prototype.loadImage = function(name) {
	var loader = this;
	if (this.cache[name] != undefined) {
		return loader.cache[name];
	}

	loader.needLoad++;

	var img_loader = new THREE.ImageLoader();

	img_loader.load(name, function(image) {
		loader.cache[name] = image;
	}, function(){}, function(){ error("Error loading " + name)});
};

Loader.prototype.loadTexture = function(name) {
    var texture = new THREE.Texture();

    texture.image = this.loadImage(name + ".png");
    texture.needsUpdate = true;

	return texture;
};

Loader.prototype.loadOnlyObj = function(obj_name) {
	var loader = this;

	if (loader.cache[obj_name] != undefined) {
		return loader.cache[obj_name].clone();
	}

	loader.needLoad++;

	var objLoader = new THREE.OBJLoader();

	objLoader.load(obj_name + ".obj", function(object) {
		if (object.children.length == 1) {
			loader.cache[obj_name] = object.children[0];
		} else {
			loader.cache[obj_name] = object;
		}
	}, function(){}, function(xhr){ error(xhr , "Error loading " + obj_name + ".obj")});

	return loader.cache[obj_name];
};

Loader.prototype.loadObj = function(obj_name, texture_name, obj_naming, params) {
	if (this.cache[obj_name] === undefined)
		error("Need to load " + obj_name);

	if (!params)
		params = {};

	var texture = this.loadTexture(texture_name);
	var object = this.loadOnlyObj(obj_name);

	if (object instanceof THREE.Mesh) {
		if (params.needCloneMaterial) {
			object.material = object.material.clone();
		}
		object.material.map = texture;
		if (params.transparent) {
			object.material.transparent = true;
		}
	} else {
		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				if (params.needCloneMaterial) {
					child.material = object.material.clone();
				}
				if (params.transparent)
					child.material.transparent = true;
				child.material.map = texture;
			}
		});
	}

	object.name = obj_naming;
	return object;
};

Loader.prototype.loadCar = function(car_name, car_color, car_naming) {
	var model = new THREE.Object3D();
	var texture_name = car_name + "_" + car_color;

	model.add(this.loadObj(car_name, texture_name, "CAR", {needCloneMaterial: true, transparent: true}));
	model.add(this.loadObj(car_name + "_BW", texture_name, "BW", {needCloneMaterial: true, transparent: true}));
	model.add(this.loadObj(car_name + "_FW_L", texture_name, "FW_L", {needCloneMaterial: true, transparent: true}));
	model.add(this.loadObj(car_name + "_FW_R", texture_name, "FW_R", {needCloneMaterial: true, transparent: true}));

	model.name = car_naming;

	return model;
};

Loader.prototype.get = function (url) {
	if (this.cache[url] === undefined)
		error("No such file " + url);
    return this.cache[url];
};

Loader.instance = new Loader();function getBoundingBox(object3D) {
	if (object3D === undefined) {
		return null;
	}
	if (object3D.userData['boundingBox'] != undefined) {
		return object3D.userData['boundingBox'];
	}
	var box = null;

	object3D.traverse( function(child) {
		var geometry = child.geometry;

		if (geometry != undefined) {
			geometry.computeBoundingBox();
    		if (box === null) {
    			box = geometry.boundingBox;
    		} else {
    			box.union(geometry.boundingBox);
    		}
		}
	});
	return object3D.userData['boundingBox'] = box;
}

function makeShadow(object, castShadow, receiveShadow) {
	object.traverse( function(child) {
		if (child instanceof THREE.Mesh) {
			child.castShadow = castShadow;
			child.receiveShadow = receiveShadow;
		}
	});
}

String.prototype.format = function () {
	var args = [].slice.call(arguments);
	return this.replace(/(\{\d+\})/g, function (a){
		return args[+(a.substr(1,a.length-2))||0];
	});
};function makeBonus(config) {
	var type = config.type;
	var bonus;
	if (type === undefined) {// || ['PURE_SCORE'].indexOf(type) >= 0) {
		bonus = new THREE.Mesh( new THREE.BoxGeometry(1000, 1000, 1000), new THREE.MeshNormalMaterial());
		bonus.name = config.id;
	} else {
		bonus = Loader.instance.loadObj(configuration.BONUS_DIR + type,
						configuration.BONUS_DIR + type,
						config.id);
	}
	var scale = configuration.ROAD_SCALE;
	bonus.scale.set(scale, scale, scale);
	bonus.position.set(config.x, 0, config.z);

    makeShadow(bonus, true, false);

	return bonus;
}

function makeWaypoint(config) {
    var waypoint = Loader.instance.loadObj(configuration.ROAD_DIR + "WAYPOINT", configuration.ROAD_DIR + "WAYPOINT", "waypoint");
    var scale = configuration.ROAD_SCALE;
    waypoint.scale.set(scale, scale, scale);
    waypoint.position.set(config.x, 0, config.z);

    makeShadow(waypoint, true, false);

    return waypoint;
}

function makeSlick(config) {
    var texture = Loader.instance.loadTexture(configuration.EFFECT_DIR + "SLICK");
    var alphaTexture = Loader.instance.loadTexture(configuration.EFFECT_DIR + "SLICK_ALPHA");
    var slick = Loader.instance.loadOnlyObj(configuration.EFFECT_DIR + "SLICK");

    slick.traverse( function(child) {
    	if (child instanceof THREE.Mesh) {
    		child.material = child.material.clone();
    		child.material.map = texture;
    		child.material.alphaMap = alphaTexture;
    		child.material.transparent = true;
    	}
    });
    slick.name = config.id;

    var scale = configuration.SLICK_SCALE;
    slick.scale.set(scale, scale, scale);
    slick.position.set(config.x, 9 + Math.random(), config.z);
    slick.rotation.y = 1.1 * Math.PI;

	return slick;
}

function makeProjectile(config) {
	var type = config.type;
	var name = configuration.PROJECTILE_DIR + type;
	var id = config.id;

	var projectile = Loader.instance.loadObj(name, name, id);
	projectile.name = id;
	var scale = 70 / 425;
	if (type == "WASHER") {
		scale = 20 / 170;
		projectile.position.y = 50;
	}
	projectile.scale.set(scale, scale, scale);
    makeShadow(projectile, true, false);

	return projectile;
}

function updateTextSprite(object, message, color) {
    var canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    var context = canvas.getContext('2d');
    context.font = "Bold 15px Arial";
    context.fillStyle = "rgba(255,0,0,0.95)";
    if (color) {
        context.fillStyle = color;//"rgba(0,255,0,0.95)";
    }
    context.fillText(message, 0, 15);

    if (object.damageSprite) {
        object.damageSprite.material.map.image = canvas;
        object.damageSprite.material.map.needsUpdate = true;
    } else {
        // canvas contents will be used for a texture
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        var spriteMaterial = new THREE.SpriteMaterial({map: texture, transparent: true});
        var sprite = new THREE.Sprite(spriteMaterial);

        sprite.scale.set(100, 100, 100);
        object.damageSprite = sprite;
    }
}


function updateDamageSprite(object, config) {
    var color = null;
    var message = "";
    if (object.visible) {
        if (config.damage > 0) {
            color = "rgba(0, 255, 0, 0.95)";
            message += "+";
        }
        message += config.damage;
    }
    if (object.damageValue != config.damage)
        updateTextSprite(object, message, color);
    object.damageSprite.position.set(config.x, 150, config.z);
    object.damageValue = config.damage;
}

function makeArrow() {
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3(135, 40, -25));
    geo.vertices.push(new THREE.Vector3(135, 40, 25));
    geo.vertices.push(new THREE.Vector3(200, 40, 0));

    geo.faces.push( new THREE.Face3( 0, 1, 2 ) );

    geo.computeFaceNormals();

    return new THREE.Mesh( geo, new THREE.MeshBasicMaterial({color: 0x7ab482}) );
}

function loadRoad(location, type, rnd) {
    if (location === "desert/")
        return Loader.instance.loadObj(configuration.ROAD_DIR + location + type, configuration.ROAD_DIR + location + type, "");
    if (type === "EMPTY")
        return null;
    if (type === "CROSSROADS") {
        return Loader.instance.loadObj(configuration.ROAD_DIR + location + type, configuration.ROAD_DIR + location + type, "");
    }
    if (type[type.length - 1] === 'T') {
        var cur_type = "TOP_HEADED_T";
        var road = Loader.instance.loadObj(configuration.ROAD_DIR + location + cur_type, configuration.ROAD_DIR + location + cur_type, "");
        road.rotation.y = Math.PI;
        if (type == "RIGHT_HEADED_T") {
            road.rotation.y += -1 * Math.PI / 2;
        }
        if (type == "BOTTOM_HEADED_T") {
            road.rotation.y += -2 * Math.PI / 2;
        }
        if (type == "LEFT_HEADED_T") {
            road.rotation.y += -3 * Math.PI / 2;
        }
        return road;
    }
    if (type[type.length - 1] === 'R') {
        var cur_type = "RIGHT_TOP_CORNER";
        var road = Loader.instance.loadObj(configuration.ROAD_DIR + location + cur_type, configuration.ROAD_DIR + location + cur_type, "");
        if (type === "RIGHT_BOTTOM_CORNER") {
            road.rotation.y = -1 * Math.PI / 2;
        }
        if (type === "LEFT_BOTTOM_CORNER") {
            road.rotation.y = -2 * Math.PI / 2;
        }
        if (type === "LEFT_TOP_CORNER") {
            road.rotation.y = -3 * Math.PI / 2;
        }
        return road;
    }
    var cur_type = "HORIZONTAL" + rnd.wNextInt(4, 1);
    var road = Loader.instance.loadObj(configuration.ROAD_DIR + location + cur_type, configuration.ROAD_DIR + location + cur_type, "");
    if (type === "VERTICAL")
        road.rotation.y = Math.PI / 2;
    return road;
}function turnWheel(car, alpha) {
	function turn(wheel) {
        var boundingBox = getBoundingBox(wheel);
        if (boundingBox === null) {
        	return;
        }

        var x = (boundingBox.min.x + boundingBox.max.x) / 2;
        var z = (boundingBox.min.z + boundingBox.max.z) / 2;

        var m1 = new THREE.Matrix4();
        var m2 = new THREE.Matrix4();
        var m3 = new THREE.Matrix4();

        m1.makeTranslation(-x, 0, -z);
        m2.makeRotationY(alpha);
        m3.makeTranslation(x, 0, z);

        var matrix = new THREE.Matrix4();

        matrix.multiplyMatrices(m3, m2);
        matrix.multiply(m1);

        wheel.applyMatrix(matrix);
	}
	if (car.userData["FW_L"] === undefined) {
	    car.traverse( function(child) {
			if (child.name === "FW_L")
				car.userData["FW_L"] = child;
			if (child.name === "FW_R")
				car.userData["FW_R"] = child;
    	});
	}
	turn(car.userData["FW_L"]);
	turn(car.userData["FW_R"]);
}

function rotateWheel(car, distance) {
	distance *= 4;
	function rotate(wheel) {
		var boundingBox = getBoundingBox(wheel);
		if (boundingBox === null) {
			return;
		}
		var D = boundingBox.max.x - boundingBox.min.x;
		//    2 * PI * (distance / (PI * D))
		var angle = 2 * distance / D;

   	    var x = (boundingBox.min.x + boundingBox.max.x) / 2;
   	    var y = (boundingBox.min.y + boundingBox.max.y) / 2;

   	    var m1 = new THREE.Matrix4();
   	    var m2 = new THREE.Matrix4();
   	    var m3 = new THREE.Matrix4();

   	    m1.makeTranslation(-x, -y, 0);
   	    m2.makeRotationZ(-angle);
   	    m3.makeTranslation(x, y, 0);

   	    var matrix = new THREE.Matrix4();

   	    matrix.multiplyMatrices(m3, m2);
   	    matrix.multiply(m1);

   		wheel.applyMatrix(matrix);
	}
	if (car.userData["BW"] === undefined) {
		car.traverse( function(child) {
			if (child.name === "BW")
				car.userData["BW"] = child;
			if (child.name === "FW_L")
				car.userData["FW_L"] = child;
			if (child.name === "FW_R")
				car.userData["FW_R"] = child;
		});
	}
	rotate(car.userData["BW"]);
	rotate(car.userData["FW_L"]);
	rotate(car.userData["FW_R"]);
}function CustomRandom(seed) {
	this.DIV = 0x1000000;
	this.MOD = 0xffffff;
	this.X = seed;
	this.A = 97653;
	this.B = 10097;

	return this;
}

CustomRandom.prototype.shift = function() {
	this.X = (this.A * this.X + this.B) & this.MOD;
	if (!this.X)
		this.X = 23451;
	return this.X;
};

CustomRandom.prototype.next = function(n) {
	var res = this.shift() / (this.DIV - 1);
	return (n ? res * n : res);
};

CustomRandom.prototype.nextRange = function(l, r) {
	return l + (r - l) * this.next();
};

CustomRandom.prototype.nextInt = function(n) {
	return this.shift() % n;
};

CustomRandom.prototype.wNextInt = function(n, cnt) {
	var res = 0;
	for(var i = 0; i < cnt; i++) {
		res = Math.max(res, this.nextInt(n));
	}
	return res;
};
GamePlayer.imageUrls = [];

function GamePlayer(options) {
    this.fps = new Fps({
        value: configuration.get("2015-race-fps", configuration.DEFAULT_FPS)
    });
    this.scale = optionValue(options, "scale", configuration.get("scale", 0.75));
    this.urlForShare = optionValue(options, "urlForShare", null);
    this.selector = optionValue(options, "selector");
    this.url = optionValue(options, "url");
    this.urlMeta = this.url + "-meta";

    this.tickLabel = null;
    this.fpsLabel = null;
    this.countdownSprites = [];

    this.player = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.sceneOrtho = null;
    this.cameraOrtho = null;
    this.cameraShift = null;

    this.playersLabel = [];
    this.playersScore = [];
    this.playersColor = [];
    this.playersName = [];
    this.equipmentSprite = [];
    this.equipmentLabel = [];
    this.playerEquipmentSprite = [];
    this.playerEquipmentLabel = [];
    this.playerEquipmentIcon = [];

    this.minimap = [];
    this.carsSprite = [];
    this.waypointSprite = null;
    this.mapHeight = null;

    this.staticObjects = null;
    this.objects = null;
    this.selectedCar = 0;
    this.freeCamera = false;
    this.cameraTarget = new THREE.Object3D();

    this.width = null;
    this.height = null;
    this.rnd = null;

    this.maxx = 0;
    this.minx = 0;
    this.maxy = 0;
    this.miny = 0;
    this.keyPressed = [];

    this.precidentCount = 0;

    this.audios = new Audios({
        preloadCount: 4,
        MUSIC: [
            "app/sounds/music/foolboymedia_80s_vibe",
            "app/sounds/music/foolboymedia_action_theme",
            "app/sounds/music/foolboymedia_ch_ode_to_dub_step",
            "app/sounds/music/foolboymedia_fear_bringer",
            "app/sounds/music/foolboymedia_generic_trance",
            "app/sounds/music/foolboymedia_race_track",
            "app/sounds/music/foolboymedia_rave_digger"
        ],
        BUGGY: [
            "app/sounds/BUGGY0"
        ],
        CRASH: [
            "app/sounds/crash"
        ],
        REPAIR: [
            "app/sounds/repair"
        ]
    });

    return this;
}

GamePlayer.prototype.cleanup = function(options) {
};

GamePlayer.prototype.pauseSounds = function() {
    this.audios.pauseAll();
};

GamePlayer.prototype.resumeSounds = function() {
    if (this.playSoundsFlag)
        this.audios.resumeAll();
};

GamePlayer.prototype.setupPlayersScore = function(players) {
	for(var i = 0; i < players.length; i++) {
		var id = players[i].id;
		this.playersScore[id].setText(players[i].score);
		this.playersScore[id].hidden = false;
		this.playersLabel[id].hidden = false;
        if (players[i].strategyCrashed) {
            this.playersLabel[id].setText(this.playersName[id] + "*");
            this.playersLabel[id].setStrikeText(true);
        } else {
            this.playersLabel[id].setText(this.playersName[id]);
            this.playersLabel[id].setStrikeText(false);
        }

	}
};

GamePlayer.prototype.enlargePlayersScore = function(players) {
    players.sort( function(a, b) {
        if (a.score > b.score) {
            return -1;
        }
        return 1;
    });

    for(var i = 0; i < players.length; i++) {
        var id = players[i].id;
        this.playersScore[id].left = 900;
        this.playersScore[id].top = 200 + i * 70;
        this.playersScore[id].setFontSize(50);

        this.playersLabel[id].left = 300;
        this.playersLabel[id].top = 200 + i * 70;
        this.playersLabel[id].setFontSize(50);
    }
};

GamePlayer.prototype.reducePlayersScore = function(players) {
    players.sort( function(a, b) {
        if (a.id < b.id)
            return -1;
        return 1;
    });
    for(var i = 0; i < players.length; i++) {
        var id = players[i].id;
        this.playersScore[id].left = 250;
        this.playersScore[id].top = 5 + i * 20;
        this.playersScore[id].setFontSize(20);

        this.playersLabel[id].left = 10;
        this.playersLabel[id].top = 5 + i * 20;
        this.playersLabel[id].setFontSize(20);
    }
};


GamePlayer.prototype.initPlayersLabel = function(players) {
	players.sort(function(a, b) {
		if (a.id < b.id)
			return -1;
		return 1;
	});
	for(var i = 0; i < players.length; i++) {
		var id = players[i].id;
		this.playersColor[id] = configuration.PLAYERS_COLOR_NAME[i];
		this.playersLabel[id] = this.graphics.newLabel({
        	fontFamily: configuration.LABEL_FONT_FAMILY,
        	fornWeight: configuration.LABEL_FONT_WEIGHT,
        	fontSize: configuration.PLAYER_LABEL_FONT_SIZE,
        	color: configuration.PLAYERS_COLOR[i],
        	left: 10,
        	text: players[i].name,
        	top: 5 + 20 * i,
        	zIndex: configuration.LABEL_ZINDEX
        });
        this.playersScore[id] = this.graphics.newLabel({
            fontFamily: configuration.LABEL_FONT_FAMILY,
            fornWeight: configuration.LABEL_FONT_WEIGHT,
            fontSize: configuration.PLAYER_LABEL_FONT_SIZE,
        	color: configuration.PLAYERS_COLOR[i],
        	left: 250,
        	text: players[i].score,
        	top: 5 + 20 * i,
        	zIndex: configuration.LABEL_ZINDEX
        });
        this.playersName[id] = players[i].name;
	}
};

GamePlayer.prototype.skipCheck = function () {
    if (this.lowQuality)
        return true;
    var curHours = (new Date()).getHours();
    var prevHours = configuration.get("lowQualityWarningTime");
    if (prevHours) {
        if (prevHours > curHours)
            prevHours += 24;
        if (prevHours - curHours < 4) {
            return true;
        }
    }
    return false;
};


GamePlayer.prototype.checkPerformance = function() {
    if (this.skipCheck() || this.fps.value < 40) {
        this.precidentCount = 0;
        return;
    }
    var ratio = this.fps.fps() / this.fps.value;

    if (ratio < configuration.PERFORMANCE_INDEX) {
        this.precidentCount++;
    } else {
        this.precidentCount = 0;
    }

    if (this.precidentCount > configuration.PERFORMANCE_TOLERANCE) {
        if (confirm("Похоже, ваш браузер не справляется с воспроизведением игры." +
                    " Отключить дополнительные визуальные эффекты для улучшения производительности?\n\n" +
                    "Кроме того, вы можете уменьшить масштаб для улучшения производительности.")) {
            configuration.set("lowQuality", true);
            configuration.set("allowFrameSkipping", true);
            configuration.set("enableShadow", false);
            location.reload();
        } else {
            this.precidentCount = 0;
        }
        configuration.set("lowQualityWarningTime", (new Date()).getHours());
    }
};

GamePlayer.prototype.renderTypicalScene = function(context) {
    if (context.last || !this.allowFrameSkipping || context.scene.tick % 2 === 0) {
        this.graphics.hideAll();
        if (context.last) {
            this.enlargePlayersScore(context.scene.players);
        } else {
            this.reducePlayersScore(context.scene.players);
        }
        this.animate(context);
        this.tickLabel.setText(context.frameIndex);
        this.tickLabel.hidden = false;
        this.fpsLabel.setText("fps: " + this.fps.fps() + " / " + this.fps.value);
        this.fpsLabel.hidden = false;
        this.graphics.afterFrame();
        this.checkPerformance();
    }
    context.finalizeCallback();
};

GamePlayer.prototype.setupOptions = function() {
    var options = $("#options").remove();
    var gamePlayer = this;
    $("#player").append(options);

    var scale = $("#scale");
    scale.val(configuration.get("scale", 0.75));

    scale.change(function() {
        configuration.set("scale", $(this).val());
        location.reload();
    });

    var selectedCar = $("#selectedCar");
    this.selectedCar = configuration.get("selectedCar", 0);
    this.freeCamera = configuration.get("freeCamera", false);
    if (!this.freeCamera) {
        selectedCar.val(this.selectedCar);
    } else {
        selectedCar.val(4);
    }

    selectedCar.change(function() {
        var value = $(this).val();
        if (value < 4) {
            configuration.set("selectedCar", value);
            gamePlayer.selectedCar = value;
        }
        var freeCamera = (value == 4);
        configuration.set("freeCamera", freeCamera);
        gamePlayer.freeCamera = freeCamera;
    });

    var allowFrameSkipping = $("#allowFrameSkipping");
    allowFrameSkipping.attr("checked", configuration.get("allowFrameSkipping", true));
    gamePlayer.allowFrameSkipping = configuration.get("allowFrameSkipping", true);
    allowFrameSkipping.change(function() {
        var value = ($(this).attr("checked") !== undefined);
        configuration.set("allowFrameSkipping", value);
        gamePlayer.allowFrameSkipping = value;
    });

    var enableShadow = $("#enableShadow");
    enableShadow.attr("checked", configuration.get("enableShadow", false));
    enableShadow.change(function() {
        configuration.set("enableShadow", ($(this).attr("checked") !== undefined));
        location.reload();
    });

    var lowQuality = $("#lowQuality");
    lowQuality.attr("checked", configuration.get("lowQuality", false));
    gamePlayer.lowQuality = configuration.get("lowQuality", false);
    lowQuality.change(function() {
        configuration.set("lowQuality", ($(this).attr("checked") !== undefined));
        location.reload();
    });

    var playSounds = $("#playSounds");
    playSounds.attr("checked", configuration.get("playSounds", false));
    gamePlayer.playSoundsFlag = configuration.get("playSounds", false);
    playSounds.change(function() {
        var value = $(this).attr("checked") !== undefined;
        configuration.set("playSounds", value);
        gamePlayer.playSoundsFlag = value;
    });

    var showMiniMap = $("#showMiniMap");
    showMiniMap.attr("checked", configuration.get("showMiniMap", true));
    gamePlayer.showMiniMap = configuration.get("showMiniMap", true);
    showMiniMap.change(function() {
        var value = ($(this).attr("checked") !== undefined);
        configuration.set("showMiniMap", value);
        gamePlayer.showMiniMap = value;
    });

    var equipment = $("#carEquipment");
    equipment.val(configuration.get("carEquipment", 0));
    gamePlayer.carEquipment = configuration.get("carEquipment", 0);
    equipment.change(function() {
        var value = $(this).val();
        configuration.set("carEquipment", value);
        gamePlayer.carEquipment = value;
    });

    var enableFog = $("#enableFog");
    enableFog.attr("checked", configuration.get("enableFog", true));
    gamePlayer.enableFog = configuration.get("enableFog", true);
    enableFog.change(function() {
        var value = ($(this).attr("checked") !== undefined);
        configuration.set("enableFog", value);
        gamePlayer.enableFog = value;
    });
};

GamePlayer.prototype.handleKeyboard = function() {
    var object = this;
    $(document.body).keyup(function(event) {
        if ([74, 75, 87, 65, 83, 68].indexOf(event.which) >= 0) { //jkwasd
            object.keyPressed[event.which] = -1;
            return false;
        }
        return true;
    });
    $(document.body).keydown(function(event) {
        if (event.which === 81) { //q
            var playSoundsCheckbox = $("#playSounds");
            playSoundsCheckbox.prop("checked", !playSoundsCheckbox.prop("checked"));
            playSoundsCheckbox.change();
        }
        if ([74, 75].indexOf(event.which) >= 0) { //jk
            object.keyPressed[event.which] = event.which;
        }
        if ([74, 75, 87, 65, 83, 68].indexOf(event.which) >= 0) { //wasd
            object.keyPressed[event.which] = event.which;
            $("#selectedCar").val(4);
        }
        if (event.which === 78) { //n
            var selectedCar = $("#selectedCar");
            var value = Math.min(3, selectedCar.val());
            selectedCar.val((value + 1) % 4);
            selectedCar.change();
            return false;
        }
        if (event.which === 38) { //up
            var fpsChange = (object.fps.value >= 10 ? 5 : 1);
            object.fps.change(+fpsChange);
            return false;
        }
        if (event.which === 40) { // down
            fpsChange = (object.fps.value > 10 ? 5 : 1);
            object.fps.change(-fpsChange);
            return false;
        }
        if (event.which === 32) { //space
            object.player.toggleRunning();
            return false;
        }
        if (event.which === 27) { //esc
            top.window.closeGamePlayers();
            return false;
        }
        if (event.which >= 49 && event.which <= 53) { //1-5
            var value = event.which - 49;
            var selectedCar = $("#selectedCar");
            selectedCar.val(value);
            selectedCar.change();
            return false;
        }
        if (event.which === 77) { //m
            var value = configuration.get("showMiniMap");
            $("showMiniMap").val(!value);
            $("showMiniMap").change();
            return false;
        }
        return true;
    });
};

GamePlayer.prototype.initCountdown = function() {
    this.countdownSprites[0] = this.graphics.newSprite(configuration.COUNTDOWN_SPRITE_SRCS[0], {
        rowCount: 3,
        columnCount: 1,
        frameCount: 3,
        zIndex: configuration.LABEL_ZINDEX
    });
    this.countdownSprites[0].x = configuration.WIDTH / 2;
    this.countdownSprites[0].y = configuration.HEIGHT / 2;
    this.countdownSprites[1] = this.graphics.newSprite(configuration.COUNTDOWN_SPRITE_SRCS[1], {
        rowCount: 3,
        columnCount: 4,
        frameCount: 12,
        zIndex: configuration.LABEL_ZINDEX,
        opacity: 0.7
    });
    this.countdownSprites[1].x = configuration.WIDTH / 2;
    this.countdownSprites[1].y = configuration.HEIGHT / 2;
};

GamePlayer.prototype.initEquipment = function(context) {
    var n = configuration.EQUIPMENT_SPRITES.length;
    for(var i = 0; i < n; i++) {
        this.equipmentSprite[i] = this.graphics.newSprite(configuration.EQUIPMENT_SPRITES[i], {
            rowCount: 1,
            columnCount: 1,
            frameCount: 1,
            zIndex: configuration.LABEL_ZINDEX
        });
        this.equipmentSprite[i].x = configuration.WIDTH * (0.35 + 0.11 * i);
        this.equipmentSprite[i].y = configuration.HEIGHT * 0.95;

        this.equipmentLabel[i] = this.graphics.newLabel({
            fontFamily: configuration.LABEL_FONT_FAMILY,
            fontWeight: configuration.LABEL_FONT_WEIGHT,
            fontSize: configuration.EQUIPMENT_LABEL_FONT_SIZE,
            color: configuration.EQUIPMENT_LABEL_COLOR[this.location],
            left: configuration.WIDTH * (0.375 + 0.11 * i),
            bottom: 25,
            zIndex: configuration.LABEL_ZINDEX + 1
        });
    }
    var cars = context.scene.cars;
    for(var i = 0; i < cars.length; i++) {
        var id = cars[i].id;
        var type = cars[i].type;
        var spriteName = type + "_" + this.playersColor[cars[i].playerId];

        this.playerEquipmentIcon[id] = this.graphics.newSprite("app/sprites/car/large/{0}.png".format(spriteName), {
            rowCount: 1,
            columnCount: 1,
            frameCount: 1,
            zIndex: configuration.LABEL_ZINDEX
        });
        this.playerEquipmentIcon[id].x = configuration.WIDTH * (0.29);
        this.playerEquipmentIcon[id].y = configuration.HEIGHT * (0.859 + i * 0.031);

        this.playerEquipmentLabel[id] = [];
    }

    for(var i = 0; i < n; i++) {
        this.playerEquipmentSprite[i] = this.graphics.newSprite(configuration.EQUIPMENT_SPRITES[i], {
            rowCount: 1,
            columnCount: 1,
            frameCount: 1,
            zIndex: configuration.LABEL_ZINDEX
        });
        this.playerEquipmentSprite[i].x = configuration.WIDTH * (0.35 + 0.11 * i);
        this.playerEquipmentSprite[i].y = configuration.HEIGHT * (0.8);

        for(var j = 0; j < cars.length; j++) {
            var id = cars[j].id;
            this.playerEquipmentLabel[id][i] = this.graphics.newLabel({
                fontFamily: configuration.LABEL_FONT_FAMILY,
                fontWeight: configuration.LABEL_FONT_WEIGHT,
                fontSize: configuration.EQUIPMENT_LABEL_FONT_SIZE,
                color: configuration.EQUIPMENT_LABEL_COLOR[this.location],
                left: configuration.WIDTH * (0.33 + 0.11 * i),
                bottom: 100  - j * 25,
                zIndex: configuration.LABEL_ZINDEX + 1
            });
        }
    }
};

GamePlayer.prototype.animateEquipment = function(context) {
    var n = configuration.EQUIPMENT_SPRITES.length;

    if (this.carEquipment == 0) {
        var id = this.objects.car[this.selectedCar];
        var car;
        for(var i = 0; i < context.scene.cars.length; i++) {
            if (context.scene.cars[i].id == id)
                car = context.scene.cars[i];
        }
        this.equipmentLabel[0].setText(" " + Math.floor(car.durability * 100) + "%");
        this.equipmentLabel[1].setText("x " + car.projectileCount);
        this.equipmentLabel[2].setText("x " + car.nitroChargeCount);
        this.equipmentLabel[3].setText("x " + car.oilCanisterCount);

        for(var i = 0; i < n; i++) {
            this.equipmentSprite[i].hidden = false;
            this.equipmentLabel[i].hidden = false;
        }
    } else if (this.carEquipment == 1) {
        for(var i = 0; i < n; i++) {
            this.playerEquipmentSprite[i].hidden = false;
        }
        var cars = context.scene.cars;

        for(var i = 0; i < cars.length; i++) {
            var id = cars[i].id;
            this.playerEquipmentLabel[id][0].setText(" " + Math.floor(cars[i].durability * 100) + "%");
            this.playerEquipmentLabel[id][1].setText("x " + cars[i].projectileCount);
            this.playerEquipmentLabel[id][2].setText("x " + cars[i].nitroChargeCount);
            this.playerEquipmentLabel[id][3].setText("x " + cars[i].oilCanisterCount);

            this.playerEquipmentIcon[id].hidden = false;
            for(var j = 0; j < n; j++) {
                this.playerEquipmentLabel[id][j].hidden = false;
            }
        }
    }
};

GamePlayer.prototype.animateMiniMap = function(context){
    var value = !this.showMiniMap;

    this.minimap.forEach( function(array) {
        array.forEach( function(tileSprite) {
            tileSprite.hidden = value;
        });
    });
    this.carsSprite.forEach( function(carSprite) {
        carSprite.hidden = value;
    });

    if (!value && !this.freeCamera) {
        var id = this.objects.car[this.selectedCar];
        var car;
        for(var i = 0; i < context.scene.cars.length; i++) {
            if (context.scene.cars[i].id == id)
                car = context.scene.cars[i];
        }

        var waypoint_posx = configuration.TILE_SIZE * (car.nextWaypointX + .5);
        var waypoint_posy = configuration.TILE_SIZE * (car.nextWaypointY + .5);
        var waypointPosition = {x: waypoint_posx, y: waypoint_posy};
        var position = this.positionWorldToMonitor(waypointPosition);
        this.waypointSprite.x = position.x;
        this.waypointSprite.y = position.y;
        this.waypointSprite.hidden = false;
    } else {
        this.waypointSprite.hidden = true;
    }
};

GamePlayer.prototype.initFpsAndTicks = function() {
    this.tickLabel = this.graphics.newLabel({
        right: 10,
        bottom: 5,
        zIndex: 1001,
        text: "",
        color: configuration.EQUIPMENT_LABEL_COLOR[this.location],
        fontSize: "20",
        fontFamily: "pf_beausans_problack",
        fontWeight: "light"
    });
    this.fpsLabel = this.graphics.newLabel({
        fontFamily: "pf_beausans_problack",
        fontWeight: "light",
        fontSize: "20",
        color: configuration.EQUIPMENT_LABEL_COLOR[this.location],
        right: 10,
        text: "",
        top: 5,
        zIndex: configuration.LABEL_ZINDEX
    });
};

GamePlayer.prototype.initWorld = function(context) {
    if (this.objects !== null)
        return;
    this.objects = {};
    this.staticObjects = {};

    this.objects.car = [];
	this.objects.projectile = [];
	this.objects.effects = [];

    this.staticObjects.bonus = [];
    this.staticObjects.slick = [];
    this.staticObjects.stuff = [];
    this.staticObjects.waypoint = null;

    this.rnd = new CustomRandom(context.scene.randomSeed);

    var index = this.rnd.nextInt(130);
    this.audios.play("MUSIC", {index: index});
    //this.audios.changePlaybackRate("MUSIC", index, 2);

    this.scene = new THREE.Scene();
    this.sceneOrtho = new THREE.Scene();

    this.scene.add(this.cameraTarget);

    context.scene.cars.sort(function(a, b) {
        if (a.id < b.id)
            return -1;
        return 1;
    });
    var tiles = context.scene.tiles;
    if (tiles === undefined)
        tiles = context.scene.tilesXY;

    this.location = this.calculateMapLocation(tiles);
    if (this.location === "desert/") {
        this.initUnderGround();
    } else {
        this.initMoon();
    }

    this.initPlayersLabel(context.scene.players);
    this.initEquipment(context);
    this.initFpsAndTicks();
    this.initCountdown();
    this.initCameras();
    this.initRenderer();
    this.initLight();
    this.invisibleMaterial = new THREE.MeshNormalMaterial( {transparent: true, opacity: 0});


    var m = tiles.length;
    var n = tiles[0].length;
    this.miniMapScale = 1;//16 / n;

    this.mapHeight = n;

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
    var cars = context.scene.cars;
    var start_tile;

    for (var i = 0; i < cars.length; i++) {
        var id = cars[i].id;
        var type = cars[i].type;
        this.objects.car[i] = id;
        var car = Loader.instance.loadCar(configuration.CAR_DIR + cars[i].type, this.playersColor[cars[i].playerId], id);

        var spriteName = type + "_" + this.playersColor[cars[i].playerId];
        this.carsSprite[id] = this.graphics.newSprite("app/sprites/car/small/" + spriteName + ".png", {
           	rowCount: 1,
           	columnCount: 1,
           	frameCount: 1,
           	zIndex: configuration.LABEL_ZINDEX + 1000,
           	scale: this.miniMapScale
        });

		var position = this.positionWorldToMonitor(cars[i]);
        this.carsSprite[id].x = position.x;
        this.carsSprite[id].y = position.y;

        car.userData.wheelTurn = 0;
        car.userData.carType = cars[i].type;

        var scale = configuration.CAR_SCALE;
        car.scale.set(scale, scale, scale);
        car.position.set(cars[i].x, 0, cars[i].y);
        car.rotation.y = -cars[i].angle;
        makeShadow(car, true, false);
        this.scene.add(car);
        start_tile = {x: Math.floor(cars[i].x / configuration.TILE_SIZE), y: Math.floor(cars[i].y  / configuration.TILE_SIZE), rotation: -cars[i].angle};

        car.userData.arrow = makeArrow();
        car.userData.arrow.position.set(cars[i].x, 0, cars[i].y);
        car.userData.arrow.rotation.y = -cars[i].angle;

        this.scene.add(car.userData.arrow);

        this.addExhaust(car);
        this.addBrakes(car);

        if (this.lowQuality)
            continue;
        this.addDurabilityAnimation(car);
    }

    var selectedCar = this.scene.getObjectByName(this.objects.car[this.selectedCar]);
    this.cameraTarget.position.set(selectedCar.position.x, selectedCar.position.y, selectedCar.position.z);

    var stuff_names = configuration.STUFF_NAMES;
    var aroundWorld = 1;

    var finishStand = Loader.instance.loadObj(configuration.ROAD_DIR + "FINISH_STAND",
                                               configuration.ROAD_DIR + "FINISH_STAND",
                                               "finishStand");
    var finishWorldPos = {x: configuration.TILE_SIZE * (start_tile.x + .5), y: configuration.TILE_SIZE * (start_tile.y + .5)};
    finishStand.position.set(finishWorldPos.x  - 400 * Math.cos(start_tile.rotation), 0, finishWorldPos.y + 400 * Math.sin(start_tile.rotation));
    finishStand.scale.set(configuration.ROAD_SCALE, configuration.ROAD_SCALE, configuration.ROAD_SCALE);
    finishStand.rotation.y = start_tile.rotation;
    makeShadow(finishStand, true, false);
    this.scene.add(finishStand);

    this.minimap[n] = [];
    this.minimap[n][m] = this.graphics.newSprite("app/sprites/minimap/{0}FINISH_STAND.png".format(this.location), {
        rowCount: 1,
        columnCount: 1,
        frameCount: 1,
        zIndex: configuration.LABEL_ZINDEX,
        scale: this.miniMapScale,
        opacity: 0.5
    });
    var finishMiniPos = this.positionWorldToMonitor(finishWorldPos);
    this.minimap[n][m].x = finishMiniPos.x;
    this.minimap[n][m].y = finishMiniPos.y;

    for (var i = -aroundWorld; i < n + aroundWorld; i++) {
        for (var j = -aroundWorld; j < m + aroundWorld; j++) {
            var type = "EMPTY";

            if (0 <= i && i < n && 0 <= j && j < m)
            	type = tiles[j][i];

            var scale = configuration.ROAD_SCALE;
            var road = loadRoad(this.location, type, this.rnd);
            var posx = configuration.TILE_SIZE * (j + .5);
            var posy = configuration.TILE_SIZE * (i + .5);
            var tilePosition = {x: posx, y: posy};
            this.maxx = Math.max(this.maxx, posx);
            this.minx = Math.min(this.minx, posx);
            this.maxy = Math.max(this.maxy, posy);
            this.miny = Math.min(this.miny, posy);


            if (road) {
                road.name = type;
                road.position.set(posx, 0, posy);
                road.scale.set(scale, scale, scale);
                makeShadow(road, false, true);
                //road.material.color.setRGB(0, 0, 0);
                this.scene.add(road);
            }
            if (type != "EMPTY") {
            	//minimap
            	if (this.minimap[i] === undefined)
            		this.minimap[i] = [];
                this.minimap[i][j] = this.graphics.newSprite("app/sprites/minimap/{0}{1}.png".format(this.location, type), {
                	rowCount: 1,
                	columnCount: 1,
                	frameCount: 1,
                	zIndex: configuration.LABEL_ZINDEX + i * n + j,
                	scale: this.miniMapScale,
                	opacity: 0.5
                });
				var position = this.positionWorldToMonitor(tilePosition);

                this.minimap[i][j].x = Math.floor(position.x);//minimapScale * (8 + j * 16);
                this.minimap[i][j].y = Math.floor(position.y);//configuration.HEIGHT + minimapScale * (-16 * m + 8 + i * 16);

            	continue;
            }

            if (this.lowQuality) {
                continue;
            }

			//staff
            var additionProbability = 0;
            for(var ni = i - 1; ni <= i + 1; ni++) {
                for(var nj = j - 1; nj < j + 1; nj++) {
                    if (0 <= ni && ni < n && 0 < nj && nj < m && tiles[nj][ni] !== "EMPTY") {
                        additionProbability = (this.location === "desert/" ? 30 : 10);
                        break;
                    }
                }
                if (additionProbability) {
                    break;
                }
            }

            if (this.rnd.nextInt(100) < configuration.STUFF_PROBABILITY + additionProbability) {
                var stuff_id = this.rnd.wNextInt(stuff_names[this.location].length, (this.location === "desert/" ? 2 : 1));
                var name = stuff_names[this.location][stuff_id];
                var id = 10000 + i * m + j;
                var stuff = Loader.instance.loadObj(configuration.STUFF_DIR + this.location + name,
                                                    configuration.STUFF_DIR + this.location + name,
                                                    id);
                stuff.position.x = posx + this.rnd.nextRange(-configuration.STUFF_BORDER, configuration.STUFF_BORDER);
                stuff.position.z = posy + this.rnd.nextRange(-configuration.STUFF_BORDER, configuration.STUFF_BORDER);
                stuff.position.y = -2;
                scale = configuration.STUFF_SCALE / 3;

                if (this.location === "desert/") {
                    if (stuff_id <= 1) {
                        stuff.children[1].material.map = Loader.instance.loadTexture(configuration.ROAD_DIR + "desert/EMPTY");
                        if (j - 1 >= 0 && tiles[j - 1][i] != "EMPTY") {
                            continue;
                        }
                    }
                    scale *= 3;
                    stuff.rotation.y = this.rnd.nextRange(-Math.PI / 6, Math.PI / 6);
                } else {
                    stuff.position.y = this.rnd.nextRange(-40, 40);
                    stuff.rotation.y += this.rnd.nextRange(-Math.PI, Math.PI);
                    if (stuff_id == 1)
                        this.staticObjects.stuff[id] = {id: id, vy: 1};
                    else
                        this.staticObjects.stuff[id] = {id: id, xrotation: this.rnd.next(configuration.BONUS_ROTATION / 6, configuration.BONUS_ROTATION / 3)};
                }
                stuff.scale.set(scale, scale, scale);

                makeShadow(stuff, true, false);
                this.scene.add(stuff);
            } else if (this.location === "desert/" && this.rnd.nextInt(100) < configuration.BILLBOARD_PROBABILITY && this.correctBillboardTile(i, j, tiles)) {
                var billboard_id = this.rnd.nextInt(configuration.BILLBOARDS[this.location].length);
                var name = configuration.BILLBOARDS[this.location][billboard_id];
                var billboard = Loader.instance.loadObj(configuration.STUFF_DIR + this.location + name, configuration.STUFF_DIR + this.location + name, "");
                billboard.position.x = this.rnd.nextRange(configuration.TILE_SIZE * Math.max(-0.5, j) + 2 * configuration.STUFF_BORDER, configuration.TILE_SIZE * Math.max(-0.5, j) + 2 * configuration.STUFF_BORDER);
                billboard.position.z = this.rnd.nextRange(configuration.TILE_SIZE * Math.max(-0.5, i) + 2 * configuration.STUFF_BORDER, configuration.TILE_SIZE * Math.max(-0.5, i) + 2 * configuration.STUFF_BORDER);
                billboard.position.y = -2;

                scale = configuration.STUFF_SCALE;
                billboard.scale.set(scale, scale, scale);
                makeShadow(billboard, true, false);
                this.scene.add(billboard);
            }
        }
    }

    this.waypointSprite = this.graphics.newSprite("app/sprites/waypoint/small/WAYPOINT.png", {
        rowCount: 1,
        columnCount: 1,
        frameCount: 1,
        zIndex: configuration.LABEL_ZINDEX + 1000,
        scale: this.miniMapScale
    });

    this.addBonuses(context.scene.bonuses);
    var ambient = new THREE.AmbientLight(0x555555);
    this.scene.add(ambient);
};

GamePlayer.prototype.setObjectVisibility = function(object, visible) {
    if (!object.userData || object.userData.visible === undefined) {
        object.userData.visible = true;
    }
    if (object.userData && object.userData.visible == visible) {
        return;
    }
    var gamePlayer = this;
    object.traverse(function(child) {
        if (!(child instanceof THREE.Mesh) || !child.material)
            return;
        if (visible) {
            child.material = child.userData.visibleMaterial;
        } else {
            child.userData.visibleMaterial = child.material;
            child.material = gamePlayer.invisibleMaterial;
        }
    });
    object.userData.visible = visible;
};

GamePlayer.prototype.calculateMapLocation = function(tiles) {
    var n = tiles.length;
    var m = tiles[0].length;
    var hash = 0;
    var MOD = 2;
    var P = 1009;
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < m; j++) {
            var type = tiles[i][j];
            for(var k = 0; k < type.length; k++) {
                hash = (hash * P + type.charCodeAt(k)) % MOD;
            }
        }
    }

    return (hash == 0 ? "desert/" : "space/");
};

GamePlayer.prototype.positionWorldToMonitor = function(object) {
    var scale = this.miniMapScale;
	return {x: 2 * scale * Math.floor(object.x / 100), y: configuration.HEIGHT - this.mapHeight * scale * 16 + 2 * scale * Math.floor(object.y / 100)};
};

GamePlayer.prototype.correctBillboardTile = function(i, j, tiles) {
    var m = tiles.length;
    var n = tiles[0].length;
    var good = true;
    for (var di = 1; di <= 3; di++) {
        var type = "EMPTY";
        if (0 <= i + di && i + di < n && 0 <= j && j < m) type = tiles[j][i + di];
        if (["VERTICAL", "LEFT_BOTTOM_CORNER", "RIGHT_BOTTOM_CORNER", "CROSSROADS"].indexOf(type) <= -1) good = false;
    }
    if (good) return true;
    good = true;
    for (var di = 0, dj = 1; di <= 2; di++) {
        var type = "EMPTY";
        if (0 <= i - di && i - di < n && 0 <= j - dj && j - dj < m) type = tiles[j - dj][i - di];
        if (["VERTICAL", "LEFT_BOTTOM_CORNER", "RIGHT_BOTTOM_CORNER", "CROSSROADS"].indexOf(type) <= -1) good = false;
    }
    if (good) return true;
    good = true;
    for (var di = 0, dj = -1; di <= 2; di++) {
        var type = "EMPTY";
        if (0 <= i - di && i - di < n && 0 <= j - dj && j - dj < m) type = tiles[j - dj][i - di];
        if (["VERTICAL", "LEFT_BOTTOM_CORNER", "RIGHT_BOTTOM_CORNER", "CROSSROADS"].indexOf(type) <= -1) good = false;
    }
    return !!good;
};

GamePlayer.prototype.renderCountdown = function(context) {
    var tick = context.scene.tick;
    this.countdownSprites[0].hidden = true;
    this.countdownSprites[1].hidden = true;
    if (tick > configuration.COUNTDOWN_TICKS) return;

    if (tick < 4) {
        var index = Math.floor(tick / 2);
        this.countdownSprites[0].setFrame(index);
        this.countdownSprites[0].hidden = false;
    } else if (tick < 60) {
        tick -= 4;
        var index = Math.floor(tick / 6);
        this.countdownSprites[1].setFrame(index);
        this.countdownSprites[1].hidden = false;
    } else {
        tick -= 60;
        var index = Math.floor(tick / 60);
        this.countdownSprites[1].setFrame(10 + index);
        this.countdownSprites[1].hidden = false;
    }
};

GamePlayer.prototype.addWaypoint = function(context) {
    var id = this.objects.car[this.selectedCar], car;

    for(var i = 0; i < context.scene.cars.length; i++) {
        if (context.scene.cars[i].id == id)
            car = context.scene.cars[i];
    }

    var x = configuration.TILE_SIZE * (car.nextWaypointX + .5);
    var y = configuration.TILE_SIZE * (car.nextWaypointY + .5);

    this.staticObjects.waypoint = {
        x: x,
        z: y,
        id: "waypoint_" + car.nextWaypointIndex
    };
};

GamePlayer.prototype.addBonuses = function(bonuses) {
    for (var i = 0; i < bonuses.length; i++) {
        var type = bonuses[i].type;
        var id = bonuses[i].id;
        if (id in this.staticObjects.bonus)
            continue;
        this.staticObjects.bonus[id] = {
            x: bonuses[i].x,
            z: bonuses[i].y,
            type: type,
            id: id
        };
    }
};

GamePlayer.prototype.addSlicks = function(slicks) {
    for (var i = 0; i < slicks.length; i++) {
        var id = slicks[i].id;
        if (id in this.staticObjects.slick) continue;
        this.staticObjects.slick[id] = {
            x: slicks[i].x,
            z: slicks[i].y,
            id: id
        };
        slick = makeSlick(this.staticObjects.slick[id]);
        this.scene.add(slick);
    }
};

GamePlayer.prototype.run = function() {
    var gamePlayer = this;
    configuration.setWorldSize(1280, 800);//1366, 768);
    gamePlayer.width = configuration.WIDTH;
    gamePlayer.height = configuration.HEIGHT;
    Loader.instance.preload();
    gamePlayer.player = new Player({
        gamePlayer: gamePlayer,
        element: $(gamePlayer.selector),
        scale: gamePlayer.scale,
        width: gamePlayer.width,
        height: gamePlayer.height,
        fps: gamePlayer.fps
    });
    gamePlayer.graphics = new Graphics({
        parent: $(gamePlayer.selector + " .screen")[0],
        scale: gamePlayer.scale,
        width: gamePlayer.width,
        height: gamePlayer.height,
        useCanvas: false
    });
    gamePlayer.setupOptions();
    gamePlayer.handleKeyboard();
    if (gamePlayer.urlForShare !== null) {
        gamePlayer.shareFrame = new ShareFrame(gamePlayer.graphics, {
            centerY: gamePlayer.height * gamePlayer.scale,
            centerX: gamePlayer.width * gamePlayer.scale,
            title: "Russian AI Cup 2015!",
            shareUrl: "http://share.yandex.ru/go.xml?",
            url: gamePlayer.urlForShare,
            zIndex: 3923932932,
            services: ["moimir", "odnoklassniki", "vkontakte", "gplus", "twitter", "facebook"]
        });
    }
    gamePlayer.player.setRenderSceneCallback(function(context) {
        if (context.scene.firstFrame) gamePlayer.initWorld(context);
        gamePlayer.renderTypicalScene(context);
    });
    var lineReader = new LinesStreamReader({
        url: gamePlayer.url,
        callback: function(line) {
            var scene = JSON && JSON.parse(line) || $.parseJSON(line);
            gamePlayer.player.addScene(scene, scene.lastTick);
            return scene.lastTick;
        }
    });
    lineReader.run();
    gamePlayer.waitLabel = gamePlayer.graphics.newLabel({
        fontFamily: "pf_beausans_problack",
        fontWeight: "light",
        fontSize: "20",
        color: "#444444",
        left: 10,
        text: "",
        bottom: 50,
        zIndex: configuration.LABEL_ZINDEX
    });

    if (configuration.get("autostart", true)) {
        var waitFunction = function() {
            var message = "{0}/{1} Resources have been loaded".format(Object.keys(Loader.instance.cache).length, Loader.instance.needLoad);
            console.log(message);
            gamePlayer.waitLabel.setText(message);
            if (Object.keys(Loader.instance.cache).length != Loader.instance.needLoad) {
                console.log("Let's wait another second");
                setTimeout(waitFunction, 1000);
                return;
            }
            gamePlayer.player.run();
        };
        setInterval(waitFunction(), 1000);
    }
};

GamePlayer.prototype.playSound = function(sound, context) {

};

GamePlayer.prototype.playSounds = function(context) {
    if (!this.playSoundsFlag) {
        this.pauseSounds();
        return;
    }
    this.resumeSounds();

    var carId = this.objects.car[this.selectedCar];
    var car = this.scene.getObjectByName(carId);

    var targetPosition = car.position;
    if (this.freeCamera)
        targetPosition = this.cameraTarget.position;

    var dist = targetPosition.distanceTo(car.position);

    var idx = 0;
    var enginePower = Math.abs(car.userData.enginePower);
    //this.audios.changePlaybackRate("BUGGY", 0, 1 + enginePower);
    //this.audios.play("BUGGY", {index: 0});

    var effects = context.scene.effects;
    var carSounds = [];


    for(var i = 0; i < effects.length; i++) {
        var type = effects[i].type;

        if (type != "CAR_CONDITION_CHANGE")
            continue;
        if (effects[i].tick !== 0)
            continue;
        var unitId = effects[i].affectedUnitId;
        var car = this.scene.getObjectByName(unitId);
        var dist = Math.max(0.2, Math.pow(targetPosition.distanceTo(car.position), 0.3));
        var type = "CRASH";

        if (effects[i].attributes.durabilityPercentsChange > 0) {
            type = "REPAIR";
        }
        carSounds[carId] = {type: type, volume: Math.min(1, 1 / dist)};
    }
    carSounds.sort(function(a, b) {
        if (a.volume > b.volume)
            return -1;
        return 1;
    });
    for(var carId in carSounds) {
        var sound = carSounds[carId];
        this.audios.play(sound.type, {volume: sound.volume});
    }

};

GamePlayer.prototype.addBrakes = function(car) {
    var pMaterial = new THREE.PointsMaterial({
        size: 45,
        color: 0x000000
    });

    var pGeometry = new THREE.Geometry();

    for(var i = 0; i < configuration.BRAKES_COUNT; i++) {
        pGeometry.vertices.push(new THREE.Vector3(configuration.TILE_SIZE * (i / 16 + 0.5), -50, configuration.TILE_SIZE * (i % 16 + 0.5)));
    }

    car.userData.brakes = new THREE.Points(pGeometry, pMaterial);
    car.userData.brakesPointer = 0;

    this.scene.add(car.userData.brakes);
};

GamePlayer.prototype.animateBrakes = function(car, json_car, decorated_brakes) {
    var geometry = car.userData.brakes.geometry;
    var vertices = geometry.vertices;
    var pointer = car.userData.brakesPointer;

    var type = car.userData.carType;
    var positions = configuration.BRAKES_POS[type];

    var attitude = -50000;

    if (car.userData.visible && (decorated_brakes || json_car.drifting)) {
        attitude = 1;
    }
    var scale = configuration.CAR_SCALE;
    var angle = car.rotation.y;

    var count = 9;
    for(var j = 0; j < count; j++) {
        for(var i = 0; i < positions.length; i++) {
            var oldx = car.position.x;
            var oldy = car.position.z;
            var vecx = json_car.x - oldx;
            var vecy = json_car.y - oldy;
            oldx += scale * (Math.cos(angle) * positions[i].x + Math.sin(angle) * positions[i].z);
            oldy += scale * (-Math.sin(angle) * positions[i].x + Math.cos(angle) * positions[i].z);

            vertices[pointer].set(oldx + j * vecx / count,
                                  attitude,
                                  oldy + j * vecy / count);
            pointer++;
            if (pointer == vertices.length)
                pointer = 0;
        }
    }

    car.userData.brakes.geometry.verticesNeedUpdate = true;
    car.userData.brakesPointer = pointer;
};

GamePlayer.prototype.addDurabilityAnimation = function(car) {
   	var texture = Loader.instance.loadTexture(configuration.EFFECT_DIR + "FLAME");
   	texture.magFilter = THREE.NearestFilter;

	var pMaterial = new THREE.PointsMaterial({size: 60,
											  map: texture,
											  blending: THREE.AdditiveBlending,
											  transparent: true,
											  opacity: .1,
//											  depthTest: false,
											  vertexColors: THREE.VertexColors});

	var pGeometry = new THREE.Geometry();
	pGeometry.colors = [];

	var carType = car.userData.carType;
	var enginePos = configuration.ENGINE_POS[carType];

	var scale = configuration.CAR_SCALE;

	for(var j = 0; j < configuration.EXHAUST_COUNT; j++) {
   		var particle = new THREE.Vector3(enginePos.x * scale, enginePos.y * scale, enginePos.z * scale);

   		var r = this.rnd.nextRange(10, 20);
   		var alpha = this.rnd.next(2 * Math.PI);
   		particle.x += r * Math.cos(alpha);
   		particle.z += r * Math.sin(alpha);
   		particle.y -= 20;
        particle.startPosition = particle.clone();

   		pGeometry.vertices.push(particle);
   		pGeometry.colors.push(new THREE.Color(1, 1, 1));
   	}

	var particles = new THREE.Points(pGeometry, pMaterial);
	particles.position.x = car.position.x;
	particles.position.z = car.position.z;

	particles.rotation.y = car.rotation.y;

	car.userData.durabilityAnimation = particles;
	this.scene.add(particles);

	pMaterial = new THREE.PointsMaterial({size: 2,
										  vertexColors: THREE.VertexColors});

	pGeometry = new THREE.Geometry();
	pGeometry.colors = [];

	for(var j = 0; j < 4 * configuration.EXHAUST_COUNT; j++) {
   		var particle = new THREE.Vector3(enginePos.x * scale, enginePos.y * scale, enginePos.z * scale);

   		var r = this.rnd.next(20);
   		var alpha = this.rnd.next(2 * Math.PI);
   		particle.x += r * Math.cos(alpha);
   		particle.z += r * Math.sin(alpha);
   		particle.y -= 20;
        particle.startPosition = particle.clone();

   		pGeometry.vertices.push(particle);
   		pGeometry.colors.push(new THREE.Color(1, 1, 1));
   	}

	particles = new THREE.Points(pGeometry, pMaterial);
	particles.sortParticles = true;

	particles.position.x = car.position.x;
	particles.position.z = car.position.z;

	particles.rotation.y = car.rotation.y;

	car.userData.fireAnimation = particles;
	this.scene.add(particles);
};

GamePlayer.prototype.animateDurabilityAnimation = function(car) {
	var durability = car.userData.durability;

	var particles = car.userData.durabilityAnimation;
	var vertices = particles.geometry.vertices;
	var colors = particles.geometry.colors;

    var fireParticles = car.userData.fireAnimation;
    var fireVertices = fireParticles.geometry.vertices;
    var fireColors = fireParticles.geometry.colors;

    var maxDistance = 0;
	if (durability < 0.5) {
		maxDistance = 80 * (0.5 - durability) / 0.5;
        for(var i = 0; i < fireVertices.length; i++) {
            if (Math.abs(fireVertices[i].y - fireVertices[i].startPosition.y) > 100) {
                fireVertices[i].x = fireVertices[i].startPosition.x;
                fireVertices[i].y = fireVertices[i].startPosition.y;
                fireVertices[i].z = fireVertices[i].startPosition.z;
            }
        }
	} else {
        for(var i = 0; i < fireVertices.length; i++) {
            fireVertices[i].y = fireVertices[i].startPosition.y - 50000;
        }
    }
	var shift = particles.position.clone();
	shift.sub(car.position);
	shift.applyAxisAngle(new THREE.Vector3(0, 1, 0), -car.rotation.y);
	shift.multiplyScalar(0.04);

    if (maxDistance > 1) {
        for(var i = 0; i < fireVertices.length; i++) {
            var curDistance = Math.abs(fireVertices[i].y - fireVertices[i].startPosition.y);

            fireVertices[i].x -= 1 - this.rnd.next(2);
            fireVertices[i].y += this.rnd.next(3);
            fireVertices[i].z += 1 - this.rnd.next(2);
            fireVertices[i].add(shift);

            var dieProb = curDistance / maxDistance;
            var rnd = this.rnd.next();


            fireColors[i].setRGB(1 - Math.pow(dieProb, 3), 1 - dieProb, 0);

            if (rnd < Math.pow(dieProb, 4)) {
                fireVertices[i].x = fireVertices[i].startPosition.x;
                fireVertices[i].y = fireVertices[i].startPosition.y;
                fireVertices[i].z = fireVertices[i].startPosition.z;
                fireColors[i].setRGB(1, 1, 1);
            }
        }
    }

	fireParticles.position.x = car.position.x;
	fireParticles.position.z = car.position.z;

	fireParticles.rotation.y = car.rotation.y;
	fireParticles.geometry.verticesNeedUpdate = true;
	fireParticles.geometry.colorsNeedUpdate = true;

	shift.multiplyScalar(1.5);
	maxDistance = 100;

	var activeVertexCount = 0;
	if (durability < 0.7) {
		activeVertexCount = Math.round(Math.pow((0.7 - durability) / 0.7, 0.5) * vertices.length);
	}


    for(var i = 0; i < activeVertexCount; i++) {
    	if (colors[i].r == 0) {
    		vertices[i].x = vertices[i].startPosition.x;
    		vertices[i].y = vertices[i].startPosition.y;
    		vertices[i].z = vertices[i].startPosition.z;
    	}

    	var curDistance = Math.abs(vertices[i].y - vertices[i].startPosition.y);
   		vertices[i].x -= 1 - this.rnd.next(2);
   		vertices[i].y += this.rnd.next(6);
   		vertices[i].z += 1 - this.rnd.next(2);

   		vertices[i].add(shift);

   		colors[i].setRGB(255, 255, 255);

    	var dieProb = curDistance / maxDistance;
    	if (this.rnd.next() < Math.pow(dieProb, 4)) {
    		vertices[i].x = vertices[i].startPosition.x;
    		vertices[i].y = vertices[i].startPosition.y;
    		vertices[i].z = vertices[i].startPosition.z;
    	}
    }

    for(var i = activeVertexCount; i < vertices.length; i++) {
  		colors[i].setRGB(0, 0, 0);
        vertices[i].x = vertices[i].startPosition.x;
        vertices[i].y = vertices[i].startPosition.y - 50000;
        vertices[i].z = vertices[i].startPosition.z;
    }

	particles.position.x = car.position.x;
	particles.position.z = car.position.z;

	particles.rotation.y = car.rotation.y;
	particles.geometry.verticesNeedUpdate = true;
	particles.geometry.colorsNeedUpdate = true;
};


GamePlayer.prototype.addExhaust = function(car) {
   	var texture = Loader.instance.loadTexture(configuration.EFFECT_DIR + "FLAME");
   	texture.magFilter = THREE.NearestFilter;

	var pMaterial = new THREE.PointsMaterial({size: 20,
											  map: texture,
											  blending: THREE.AdditiveBlending,
											  transparent: true,
											  opacity: 0.3,
											  depthTest: false,
											  vertexColors: THREE.VertexColors});

	var pGeometry = new THREE.Geometry();
	pGeometry.colors = [];

	var carType = car.userData.carType;
	var exhaustPos = configuration.EXHAUST_POS[carType];

	var scale = configuration.CAR_SCALE;

	for(var i = 0; i < exhaustPos.length; i++) {
		for(var j = 0; j < configuration.EXHAUST_COUNT; j++) {
			var particle = new THREE.Vector3(exhaustPos[i].x * scale, exhaustPos[i].y * scale, exhaustPos[i].z * scale);
			var endPosition = particle.clone();
			endPosition.x -= 70;

			particle.y += 5 - this.rnd.next(10);
			particle.z += 5 - this.rnd.next(10);
			particle.x -= this.rnd.next(2);
            particle.startPosition = particle.clone();
			particle.endPosition = endPosition;

			pGeometry.vertices.push(particle);
			pGeometry.colors.push(new THREE.Color(255, 0, 0));
		}
	}

	var particles = new THREE.Points(pGeometry, pMaterial);
	particles.position.x = car.position.x;
	particles.position.z = car.position.z;

	particles.rotation.y = car.rotation.y;

	car.userData.exhaust = particles;
	this.scene.add(particles);
};

GamePlayer.prototype.animateExhaust = function(car) {
	var isNitroEnabled = car.userData.remainingNitroTicks > 0;

	var carType = car.userData.carType;

	var particles = car.userData.exhaust;
	var vertices = particles.geometry.vertices;
	var colors = particles.geometry.colors;

	var power = 5 * Math.abs(car.userData.enginePower);
	if (isNitroEnabled)
		power = 1;
	var shift = particles.position.clone();
	shift.sub(car.position);
	shift.applyAxisAngle(new THREE.Vector3(0, 1, 0), -car.rotation.y);
	shift.multiplyScalar(0.1);

	var maxDistance = 45 + power * 20;

    if (car.userData.visible !== undefined && !car.userData.visible) {
        for(var i = 0; i < vertices.length; i++) {
            vertices[i].y = vertices[i].startPosition.y - 50000;
        }
    } else {
        for(var i = 0; i < vertices.length; i++) {
            if (Math.abs(vertices[i].y - vertices[i].startPosition.y) > 1000) {
                vertices[i].x = vertices[i].startPosition.x;
                vertices[i].y = vertices[i].startPosition.y;
                vertices[i].z = vertices[i].startPosition.z;
            }
        }
        for (var i = 0; i < vertices.length; i++) {
            var curDistance = Math.abs(vertices[i].x - vertices[i].startPosition.x);
            if (isNitroEnabled) {
                var velocity = vertices[i].endPosition.clone();
                velocity.sub(vertices[i]);
                velocity.multiplyScalar(this.rnd.next(0.3) * power);
                vertices[i].add(velocity);
                colors[i].setRGB(0, 95, 255);
            } else {
                vertices[i].x -= this.rnd.next(0.5) + this.rnd.next(2 * power);
                vertices[i].y += this.rnd.next(4);
                vertices[i].z += 5 - this.rnd.next(10);
                vertices[i].add(shift);
                var color = Math.round(255 * Math.max(0, (1 - curDistance / maxDistance)));
                colors[i].setRGB(color, color, color);
            }
            var prob = curDistance / maxDistance;
            if (this.rnd.next() < prob * prob * prob) {
                vertices[i].x = vertices[i].startPosition.x;
                vertices[i].y = vertices[i].startPosition.y;
                vertices[i].z = vertices[i].startPosition.z;
            }
        }
    }

	if (isNitroEnabled) {
		particles.material.size = 20;
		particles.material.opacity = 0.7;
	} else {
		particles.material.size = 50;
		particles.material.opacity = 0.01;
	}

	particles.position.x = car.position.x;
	particles.position.z = car.position.z;

	particles.rotation.y = car.rotation.y;
	particles.geometry.verticesNeedUpdate = true;
	particles.geometry.colorsNeedUpdate = true;
};

GamePlayer.prototype.animateSlicks = function(slicks) {
    var gamePlayer = this;

    this.addSlicks(slicks);

    var slickTimeLeft = [];
    for (var i = 0; i < slicks.length; i++)
    	slickTimeLeft[slicks[i].id] = slicks[i].remainingLifetime;

    this.staticObjects.slick.forEach(function(object) {
        var id = object.id;
        var slick = gamePlayer.scene.getObjectByName(id);
        var slick_exists = (slick != undefined);
        var slick_expired = (slickTimeLeft[id] === undefined);
        if (!slick_exists && !slick_expired) {
            slick = makeSlick(object);
            gamePlayer.scene.add(slick);
        }
        if (slick_exists && slick_expired) {
            gamePlayer.scene.remove(slick);
            return;
        }
        if (slick_exists && !slick_expired) {
            var scale = configuration.SLICK_SCALE * (0.6 + 0.4 * slickTimeLeft[id] / configuration.SLICK_DURATION);
            slick.scale.set(scale, scale, scale);
            slick.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    child.material.opacity = slickTimeLeft[id] / configuration.SLICK_DURATION;
                }
            });
        }
    });
};

GamePlayer.prototype.animateBonuses = function(bonuses) {
    var gamePlayer = this;

    this.addBonuses(bonuses);
    var bonuses_ids = [];
    for (var i = 0; i < bonuses.length; i++)
    	bonuses_ids[i] = bonuses[i].id;

    this.staticObjects.bonus.forEach(function(object) {
        var id = object.id;
        var bonus = gamePlayer.scene.getObjectByName(id);
        var bonus_exists = (bonus !== undefined);
        var bonus_expired = (bonuses_ids.indexOf(id) <= -1);
        if (!bonus_exists && !bonus_expired) {
            bonus = makeBonus(object);
            gamePlayer.scene.add(bonus);
        }
        if (bonus_exists && bonus_expired) {
            gamePlayer.scene.remove(bonus);
            return;
        }
        if (bonus_exists && !bonus_expired)
        	bonus.rotation.y += configuration.BONUS_ROTATION;
    });
};

GamePlayer.prototype.animateWaypoint = function(context) {
    var gamePlayer = this;

    this.addWaypoint(context);

    var waypoint = gamePlayer.scene.getObjectByName("waypoint");
    var waypoint_exists = (waypoint !== undefined);

    if (!this.freeCamera && !waypoint_exists) {
        waypoint = makeWaypoint(this.staticObjects.waypoint);
        gamePlayer.scene.add(waypoint);
    } else if (this.freeCamera) {
        gamePlayer.scene.remove(waypoint);
        return;
    }

    if (waypoint_exists) {
        waypoint.position.set(this.staticObjects.waypoint.x, 0, this.staticObjects.waypoint.z);
        waypoint.rotation.y += configuration.BONUS_ROTATION;
    }
};

GamePlayer.prototype.animateProjectiles = function(projectiles) {
	var gamePlayer = this;

	var projectiles_id = [];
	for(var i = 0; i < projectiles.length; i++)
		projectiles_id[i] = projectiles[i].id;

	this.objects.projectile.forEach(function(object) {
		var id = object.id;
		var projectile = gamePlayer.scene.getObjectByName(id);
		var projectile_exists = (projectile != undefined);
		var projectile_expired = (projectiles_id.indexOf(id) <= -1);
		if (!projectile_exists && !projectile_expired) {
			projectile = makeProjectile(object);
			gamePlayer.scene.add(projectile);
		}
		if (projectile_exists && projectile_expired) {
			gamePlayer.scene.remove(projectile);
		}
	});

	for(var i = 0; i < projectiles.length; i++) {
		var id = projectiles[i].id;
		if (!(id in this.objects.projectile)) {
			this.objects.projectile[id] = {id: id, type: projectiles[i].type};
			this.scene.add( makeProjectile(this.objects.projectile[id]) );
		}
		var projectile = this.scene.getObjectByName(id);

		projectile.position.x = projectiles[i].x;
		projectile.position.z = projectiles[i].y;
	}
};

GamePlayer.prototype.animateEffects = function(context) {
	var effects = context.scene.effects;
    var cars = context.scene.cars;
    var carDamage = [];

    for(var i = 0; i < cars.length; i++) {
        var id = cars[i].id;
        var car = this.scene.getObjectByName(id);
        carDamage[id] = {damage: 0, tick: 6000, count: 0}
        cars[i].drifting = false;
    }

	for(var i = 0; i < effects.length; i++) {
		var type = effects[i].type;
        if (type === "DRIFTING") {
            var carId = effects[i].affectedUnitId;
            for(var j = 0; j < cars.length; j++) {
                if (cars[j] == carId) {
                    cars[j].drifting = true;
                }
            }
            continue;
        }
        if (type !== "POSITIVE_HP_CHANGES" && type !== "NEGATIVE_HP_CHANGES")
            continue;

        var carId = effects[i].affectedUnitId;
        var car = this.scene.getObjectByName(carId);

        if (type === "POSITIVE_HP_CHANGES") {
            carDamage[carId].damage = 100;
        } else if (carDamage[carId].damage == 0) {
            carDamage[carId].damage = effects[i].damage;
        }

        carDamage[carId].tick = Math.min(carDamage[carId].tick, 2 * effects[i].tick);
        carDamage[carId].x = car.position.x;
        carDamage[carId].z = car.position.z;
	}

    for(var i = 0; i < cars.length; i++) {
        var id = cars[i].id;
        var car = this.scene.getObjectByName(id);
        var add = (car.userData.damageSprite === undefined);
        updateDamageSprite(car.userData, carDamage[id]);
        if (add) {
            this.scene.add(car.userData.damageSprite);
        }
    }
};

GamePlayer.prototype.animateCars = function(context) {
    var cars = context.scene.cars;
    var decorated = context.scene.decoratedCarById;
    var scale = configuration.CAR_SCALE;

    for (var i = 0; i < cars.length; i++) {
        var id = cars[i].id;
        var car = this.scene.getObjectByName(id);

        turnWheel(car, -car.userData.wheelTurn);
        rotateWheel(car, decorated[id].wheelDistanceChangePerTick);
        var wheelTurn = 0;
        wheelTurn = cars[i].wheelTurn;
        car.userData.wheelTurn = -wheelTurn / 2;
        turnWheel(car, car.userData.wheelTurn);

        this.animateBrakes(car, cars[i], decorated[id].brakes);
        car.position.set(cars[i].x, 0, cars[i].y);
        car.rotation.y = -cars[i].angle;

        //arrow pointer
        car.userData.arrow.position.set(cars[i].x, 0, cars[i].y);
        var x = (cars[i].nextWaypointX + .5) * configuration.TILE_SIZE - cars[i].x;
        var y = (cars[i].nextWaypointY + .5) * configuration.TILE_SIZE - cars[i].y;
        var sign = (y >= 0 ? -1 : 1);
        car.userData.arrow.rotation.y = sign * Math.acos(x / Math.pow(x * x + y * y, 0.5));//

        //minimap car
        var position = this.positionWorldToMonitor(cars[i]);

        this.carsSprite[id].x = position.x;
        this.carsSprite[id].y = position.y;

        car.userData.enginePower = cars[i].enginePower;
        car.userData.remainingNitroTicks = cars[i].remainingNitroTicks;
        car.userData.durability = cars[i].durability;

        this.animateExhaust(car);

        if (!this.lowQuality)
            this.animateDurabilityAnimation(car);

        if (!car.userData.visible)
            continue;
        if (decorated[id].destroyed)
            car.children[0].material.color.setRGB(0.5, 0.5, 0.5);
        else
            car.children[0].material.color.setRGB(1, 1, 1);

        var opacity = 1;
        if (cars[i].finishedTrack) {
            opacity = 0.6;
            car.userData.durability = 1;
            cars[i].durability = 1;
        }

        for(var j = 0; j < car.children.length; j++) {
            car.children[j].material.opacity = opacity;
        }
    }
};

GamePlayer.prototype.zoomCamera = function(index) {
    if (index === 0) {
        this.zoomOut();
    } else {
        this.zoomIn();
    }
};

GamePlayer.prototype.calcCameraTarget = function() {
    var gamePlayer = this;

    var nx = this.cameraTarget.position.x;
    var ny = this.cameraTarget.position.z;

    this.keyPressed.forEach( function(key){
        if (key === -1)
            return;
        var index = [87, 65, 83, 68].indexOf(key);
        if (index < 0) {
            index = [74, 75].indexOf(key);
            gamePlayer.zoomCamera(index);
        } else {
            var dx = [-1, -1, 1, 1];
            var dy = [-1, 1, 1, -1];
            var x = 7;
            var y = 20;
            if (index === 1 || index === 3) {
                x = 20;
                y = 7;
            }
            nx += x * dx[index] * configuration.FREE_CAMERA_SPEED;
            ny += y * dy[index] * configuration.FREE_CAMERA_SPEED;
            configuration.set("freeCamera", true);
            gamePlayer.freeCamera = true;
        }

    });

    nx = Math.min(Math.max(nx, this.minx), this.maxx);
    ny = Math.min(Math.max(ny, this.miny), this.maxy);
    this.cameraTarget.position.set(nx, 0, ny);
};

GamePlayer.prototype.zoomIn = function() {
    if (this.cameraShift.length() < configuration.MIN_ZOOM_DIST) {
        return;
    }
    this.cameraShift.multiplyScalar(0.99);
};

GamePlayer.prototype.zoomOut = function() {
    if (this.cameraShift.length() > configuration.MAX_ZOOM_DIST) {
        return;
    }
    this.cameraShift.multiplyScalar(1.01);
};

GamePlayer.prototype.animateStuff = function() {
    var stuffs = this.staticObjects.stuff;

    for(var key in stuffs) {
        var id = stuffs[key].id;
        var stuff = this.scene.getObjectByName(id);
        //if (stuffs[key].xrotation) {
        //    var oldy = stuff.rotation.y;
        //    stuff.rotation.y = 0;
        //    stuff.rotation.x += stuffs[key].xrotation;
        //    stuff.rotation.y = oldy;
        //    continue;
        //}
        stuff.rotation.y += configuration.BONUS_ROTATION / 3;

        var diff = Math.abs(40 - stuff.position.y);
        if (stuffs[key].vy < 0) {
            diff = Math.abs(-40 - stuff.position.y);
        }
        stuff.position.y += stuffs[key].vy * (diff / 150 + .01);

        if (stuff.position.y < -40 || stuff.position.y > 40) {
            stuffs[id].vy *= -1;
        }
    }
};

GamePlayer.prototype.animateMoon = function() {
    if (!this.moon)
        return;
    moon_speed = Math.PI / 20000;
    this.moon.rotation.x += moon_speed;
    this.moon.rotation.z += moon_speed;
    this.moon.rotation.y += moon_speed;

    this.stars.rotation.x += moon_speed;
    this.stars.rotation.z += moon_speed;
    this.stars.rotation.y += moon_speed;
};

GamePlayer.prototype.processObjectsVisibility = function(scene) {
    var selectedCarId = this.objects.car[this.selectedCar];
    var selectedPlayerId = null;
    var cars = scene.cars;
    var tiles = scene.tiles ? scene.tiles : scene.tilesXY;
    var n = tiles.length;
    var m = tiles[0].length;

    var isFinal = scene.players.length == 2;

    for(var i = 0; i < cars.length; i++) {
        if (cars[i].id == selectedCarId)
            selectedPlayerId = cars[i].playerId;
    }

    var objects = this.scene.children;

    for(var i = 0; i < objects.length; i++) {
        var visible = true;

        if (this.enableFog && isFinal) {
            var tx = Math.floor(objects[i].position.x / configuration.TILE_SIZE);
            var ty = Math.floor(objects[i].position.z / configuration.TILE_SIZE);

            if (0 <= ty && ty < m && 0 <= tx && tx < n && !scene.playerTiles[selectedPlayerId][tx][ty]) {
                visible = false;
            }
        }
        this.setObjectVisibility(objects[i], visible);
    }
};

GamePlayer.prototype.animate = function(context) {
    this.animateEffects(context);
    this.animateCars(context);
    this.animateEquipment(context);
    this.animateMiniMap(context);

    this.animateSlicks(context.scene.oilSlicks);
    this.animateBonuses(context.scene.bonuses);
    this.animateWaypoint(context);
	this.animateProjectiles(context.scene.projectiles);
    this.animateMoon();

    this.animateStuff();

    this.setupPlayersScore(context.scene.players);

    this.playSounds(context);

    var car = this.scene.getObjectByName(this.objects.car[this.selectedCar]);
    var target = this.cameraTarget;
    this.calcCameraTarget();

    if (!this.freeCamera) {
        target.position.set(car.position.x, car.position.y, car.position.z);
    }

    var coef = Math.max(0, configuration.COUNTDOWN_TICKS - context.scene.tick);
    coef *= coef;
    coef /= 29;

    this.camera.position.x = target.position.x + this.cameraShift.x + 17 * coef;
    this.camera.position.y = this.cameraShift.y + 17 * coef;
    this.camera.position.z = target.position.z + this.cameraShift.z  - 11 * coef;
    this.camera.lookAt(target.position);


    var light = this.scene.getObjectByName('light');
    light.target = target;
    light.position.set(target.position.x + 15000, target.position.y + 25000, target.position.z + 8000);

    //this is magic, don't ask me
    var d = 1300 * (this.cameraShift.z / 2000) * 1.3;
    light.shadowCameraLeft = -2 * d;
    light.shadowCameraRight = 2 * d;
    light.shadowCameraTop = 2 * d;
    light.shadowCameraBottom = -d;

    this.processObjectsVisibility(context.scene);

    this.renderCountdown(context);
    this.render();
};

GamePlayer.prototype.render = function() {

    this.renderer.render(this.scene, this.camera);
    this.renderer.clearDepth();
    this.renderer.render(this.sceneOrtho, this.cameraOrtho);
};

GamePlayer.prototype.initCameras = function() {
    var gamePlayer = this;
    var halfWidth = this.width / 2;
    var halfHeight = this.height / 2;
    gamePlayer.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 1, 70000);
    gamePlayer.cameraOrtho = new THREE.OrthographicCamera(-halfWidth, halfWidth, halfHeight, -halfHeight, -100, 2000);
    gamePlayer.cameraOrtho.position.z = 1;

    gamePlayer.cameraShift = new THREE.Vector3(700, 1700, 2000);
};

GamePlayer.prototype.initRenderer = function() {
    this.renderer = new THREE.WebGLRenderer();
	this.renderer.sortObjects = true;
	this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width * this.scale, this.height * this.scale);
    this.renderer.autoClear = false;
    this.renderer.shadowMap.enabled = configuration.get("enableShadow");
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.graphics.parent.appendChild(this.renderer.domElement);
};

GamePlayer.prototype.initLight = function() {
    var dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.name = 'light';
    dirLight.castShadow = true;
    dirLight.shadowDarkness = 0.75;
    dirLight.shadowMapWidth = 2048;
    dirLight.shadowMapHeight = 2048;
    dirLight.shadowCameraNear = 5000;
    dirLight.shadowCameraFar = 50000;
    this.scene.add(dirLight);
    dirLight.rotation.y = Math.PI / 2;

    var d = 1300 * (this.cameraShift.z / 2000);
    dirLight.shadowCameraLeft = -2 * d;
    dirLight.shadowCameraRight = 2 * d;
    dirLight.shadowCameraTop = 2 * d;
    dirLight.shadowCameraBottom = -d;
};

GamePlayer.prototype.initUnderGround = function() {
    var groundGeo = new THREE.PlaneBufferGeometry(100000, 100000);
    var groundMat = new THREE.MeshPhongMaterial({
        color: 0xffcc7d
    });

    var ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    //and some magic again, this object should be visible!
    ground.position.set(-900, -150, -900);

    this.scene.add(ground);
};

GamePlayer.prototype.initMoon = function() {
    if (this.lowQuality)
        return;
    var obj = "app/stuff/space/MOON";
    this.moon = Loader.instance.loadObj(obj, obj, "moon")

    this.moon.scale.set(20, 20, 20);
    this.moon.position.set(-1000, -10000, -1000);
    this.moon.rotation.x -= Math.PI / 6;
    this.moon.rotation.z += Math.PI / 6;
    this.scene.add(this.moon);

    var pMaterial = new THREE.PointsMaterial({
        size: 45,
        color: 0xffffff
    });

    var r = 40000;
    var pGeometry = new THREE.Geometry();

    for(var i = 0; i < configuration.STAR_COUNT; i++) {
        var ang1 = this.rnd.nextRange(0, 2 * Math.PI);
        var ang2 = this.rnd.nextRange(0, 2 * Math.PI);
        var x = r * Math.sin(ang1) * Math.cos(ang2);
        var y = r * Math.sin(ang1) * Math.sin(ang2);
        var z = r * Math.cos(ang1);
        pGeometry.vertices.push(new THREE.Vector3(x, y, z));
    }

    this.stars = new THREE.Points(pGeometry, pMaterial);

    this.scene.add(this.stars);
};