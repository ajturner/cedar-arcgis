import { cu as t$1 } from './interfaces-f9f0dded.js';
import './_commonjsHelpers-b08b522c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(n,t){for(var r=0;r<t.length;r++){const e=t[r];if("string"!=typeof e&&!Array.isArray(e))for(const t in e)if("default"!==t&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]});}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var r,e,i,o={exports:{}};o.exports,r=o,o.exports,e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(e=e||__filename),i=function(n){var t,r,i=void 0!==(n=n||{})?n:{};i.ready=new Promise((function(n,e){t=n,r=e;}));var o,a,u,c=Object.assign({},i),f="./this.program",s="object"==typeof window,l="function"==typeof importScripts,p="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";function h(n){return i.locateFile?i.locateFile(n,d):d+n}if(p){var m=require("fs"),y=require("path");d=l?y.dirname(d)+"/":__dirname+"/",o=(n,t)=>(n=tn(n)?new URL(n):y.normalize(n),m.readFileSync(n,t?void 0:"utf8")),u=n=>{var t=o(n,!0);return t.buffer||(t=new Uint8Array(t)),t},a=(n,t,r)=>{n=tn(n)?new URL(n):y.normalize(n),m.readFile(n,(function(n,e){n?r(n):t(e.buffer);}));},process.argv.length>1&&(f=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",(function(n){if(!(n instanceof an))throw n})),process.on("unhandledRejection",(function(n){throw n})),i.inspect=function(){return "[Emscripten Module object]"};}else (s||l)&&(l?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),e&&(d=e),d=0!==d.indexOf("blob:")?d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):"",o=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},l&&(u=n=>{var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),a=(n,t,r)=>{var e=new XMLHttpRequest;e.open("GET",n,!0),e.responseType="arraybuffer",e.onload=()=>{200==e.status||0==e.status&&e.response?t(e.response):r();},e.onerror=r,e.send(null);});i.print||console.log.bind(console);var v,g,_=i.printErr||console.warn.bind(console);Object.assign(i,c),c=null,i.arguments&&i.arguments,i.thisProgram&&(f=i.thisProgram),i.quit&&i.quit,i.wasmBinary&&(v=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&$("no native wasm support detected");var w,b,A,T,C,E,F,P,S,j,W=!1,M="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function O(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.buffer&&M)return M.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var c=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else {var f=a-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f);}}else o+=String.fromCharCode((31&a)<<6|u);}else o+=String.fromCharCode(a);}return o}function R(n,t){return n?O(A,n,t):""}function x(n,t,r,e){if(!(e>0))return 0;for(var i=r,o=r+e-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(r>=o)break;t[r++]=u;}else if(u<=2047){if(r+1>=o)break;t[r++]=192|u>>6,t[r++]=128|63&u;}else if(u<=65535){if(r+2>=o)break;t[r++]=224|u>>12,t[r++]=128|u>>6&63,t[r++]=128|63&u;}else {if(r+3>=o)break;t[r++]=240|u>>18,t[r++]=128|u>>12&63,t[r++]=128|u>>6&63,t[r++]=128|63&u;}}return t[r]=0,r-i}function D(n,t,r){return x(n,A,t,r)}function k(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e<=127?t++:e<=2047?t+=2:e>=55296&&e<=57343?(t+=4,++r):t+=3;}return t}function U(n){w=n,i.HEAP8=b=new Int8Array(n),i.HEAP16=T=new Int16Array(n),i.HEAP32=E=new Int32Array(n),i.HEAPU8=A=new Uint8Array(n),i.HEAPU16=C=new Uint16Array(n),i.HEAPU32=F=new Uint32Array(n),i.HEAPF32=P=new Float32Array(n),i.HEAPF64=S=new Float64Array(n);}i.INITIAL_MEMORY;var I=[],H=[],Y=[];function z(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)q(i.preRun.shift());un(I);}function V(){un(H);}function B(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)G(i.postRun.shift());un(Y);}function q(n){I.unshift(n);}function L(n){H.unshift(n);}function G(n){Y.unshift(n);}var N=0,X=null;function J(n){N++,i.monitorRunDependencies&&i.monitorRunDependencies(N);}function Z(n){if(N--,i.monitorRunDependencies&&i.monitorRunDependencies(N),0==N&&X){var t=X;X=null,t();}}function $(n){i.onAbort&&i.onAbort(n),_(n="Aborted("+n+")"),W=!0,n+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(n);throw r(t),t}var K,Q="data:application/octet-stream;base64,";function nn(n){return n.startsWith(Q)}function tn(n){return n.startsWith("file://")}function rn(n){try{if(n==K&&v)return new Uint8Array(v);if(u)return u(n);throw "both async and sync fetching of the wasm failed"}catch(_){$(_);}}function en(){if(!v&&(s||l)){if("function"==typeof fetch&&!tn(K))return fetch(K,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw "failed to load wasm binary file at '"+K+"'";return n.arrayBuffer()})).catch((function(){return rn(K)}));if(a)return new Promise((function(n,t){a(K,(function(t){n(new Uint8Array(t));}),t);}))}return Promise.resolve().then((function(){return rn(K)}))}function on(){var n={a:Vt};function t(n,t){var r=n.exports;i.asm=r,U((g=i.asm.w).buffer),j=i.asm.y,L(i.asm.x),Z();}function e(n){t(n.instance);}function o(t){return en().then((function(t){return WebAssembly.instantiate(t,n)})).then((function(n){return n})).then(t,(function(n){_("failed to asynchronously prepare wasm: "+n),$(n);}))}function a(){return v||"function"!=typeof WebAssembly.instantiateStreaming||nn(K)||tn(K)||p||"function"!=typeof fetch?o(e):fetch(K,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return _("wasm streaming compile failed: "+n),_("falling back to ArrayBuffer instantiation"),o(e)}))}))}if(J(),i.instantiateWasm)try{return i.instantiateWasm(n,t)}catch(u){_("Module.instantiateWasm callback failed with error: "+u),r(u);}return a().catch(r),{}}function an(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n;}function un(n){for(;n.length>0;)n.shift()(i);}function cn(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(n){F[this.ptr+4>>2]=n;},this.get_type=function(){return F[this.ptr+4>>2]},this.set_destructor=function(n){F[this.ptr+8>>2]=n;},this.get_destructor=function(){return F[this.ptr+8>>2]},this.set_refcount=function(n){E[this.ptr>>2]=n;},this.set_caught=function(n){n=n?1:0,b[this.ptr+12>>0]=n;},this.get_caught=function(){return 0!=b[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,b[this.ptr+13>>0]=n;},this.get_rethrown=function(){return 0!=b[this.ptr+13>>0]},this.init=function(n,t){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(t),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1);},this.add_ref=function(){var n=E[this.ptr>>2];E[this.ptr>>2]=n+1;},this.release_ref=function(){var n=E[this.ptr>>2];return E[this.ptr>>2]=n-1,1===n},this.set_adjusted_ptr=function(n){F[this.ptr+16>>2]=n;},this.get_adjusted_ptr=function(){return F[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Nt(this.get_type()))return F[this.excPtr>>2];var n=this.get_adjusted_ptr();return 0!==n?n:this.excPtr};}function fn(n,t,r){throw new cn(n).init(t,r),n}function sn(n,t,r,e,i){}function ln(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function pn(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);dn=n;}nn(K="lclayout.wasm")||(K=h(K));var dn=void 0;function hn(n){for(var t="",r=n;A[r];)t+=dn[A[r++]];return t}var mn={},yn={},vn={},gn=48,_n=57;function wn(n){if(void 0===n)return "_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=gn&&t<=_n?"_"+n:n}function bn(n,t){return n=wn(n),function(){return t.apply(this,arguments)}}function An(n,t){var r=bn(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""));}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var Tn=void 0;function Cn(n){throw new Tn(n)}var En=void 0;function Fn(n){throw new En(n)}function Pn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&Fn("Mismatched type converter count");for(var i=0;i<n.length;++i)Sn(n[i],e[i]);}n.forEach((function(n){vn[n]=t;}));var i=new Array(t.length),o=[],a=0;t.forEach(((n,t)=>{yn.hasOwnProperty(n)?i[t]=yn[n]:(o.push(n),mn.hasOwnProperty(n)||(mn[n]=[]),mn[n].push((()=>{i[t]=yn[n],++a===o.length&&e(i);})));})),0===o.length&&e(i);}function Sn(n,t,r={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||Cn('type "'+e+'" must have a positive integer typeid pointer'),yn.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;Cn("Cannot register type '"+e+"' twice");}if(yn[n]=t,delete vn[n],mn.hasOwnProperty(n)){var i=mn[n];delete mn[n],i.forEach((n=>n()));}}function jn(n,t,r,e,i){var o=ln(r);Sn(n,{name:t=hn(t),fromWireType:function(n){return !!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=b;else if(2===r)e=T;else {if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=E;}return this.fromWireType(e[n>>o])},destructorFunction:null});}function Wn(n,t,r){n=hn(n),Pn([],[t],(function(t){return t=t[0],i[n]=t.fromWireType(r),[]}));}var Mn=[],On=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Rn(n){n>4&&0==--On[n].refcount&&(On[n]=void 0,Mn.push(n));}function xn(){for(var n=0,t=5;t<On.length;++t)void 0!==On[t]&&++n;return n}function Dn(){for(var n=5;n<On.length;++n)if(void 0!==On[n])return On[n];return null}function kn(){i.count_emval_handles=xn,i.get_first_emval=Dn;}var Un={toValue:n=>(n||Cn("Cannot use deleted val. handle = "+n),On[n].value),toHandle:n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Mn.length?Mn.pop():On.length;return On[t]={refcount:1,value:n},t}}};function In(n){return this.fromWireType(E[n>>2])}function Hn(n,t){Sn(n,{name:t=hn(t),fromWireType:function(n){var t=Un.toValue(n);return Rn(n),t},toWireType:function(n,t){return Un.toHandle(t)},argPackAdvance:8,readValueFromPointer:In,destructorFunction:null});}function Yn(n,t){switch(t){case 2:return function(n){return this.fromWireType(P[n>>2])};case 3:return function(n){return this.fromWireType(S[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function zn(n,t,r){var e=ln(r);Sn(n,{name:t=hn(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Yn(t,e),destructorFunction:null});}function Vn(n){for(;n.length;){var t=n.pop();n.pop()(t);}}function Bn(n,t,r,e,i){var o=t.length;o<2&&Cn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,c=1;c<t.length;++c)if(null!==t[c]&&void 0===t[c].destructorFunction){u=!0;break}var f="void"!==t[0].name,s=o-2,l=new Array(s),p=[],d=[];return function(){var r;arguments.length!==s&&Cn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=t[1].toWireType(d,this),p[1]=r);for(var o=0;o<s;++o)l[o]=t[o+2].toWireType(d,arguments[o]),p.push(l[o]);function c(n){if(u)Vn(d);else for(var e=a?1:2;e<t.length;e++){var i=1===e?r:l[e-2];null!==t[e].destructorFunction&&t[e].destructorFunction(i);}if(f)return t[0].fromWireType(n)}return c(e.apply(null,p))}}function qn(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||Cn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e;}}function Ln(n,t,r){i.hasOwnProperty(n)?((void 0===r||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[r])&&Cn("Cannot register public name '"+n+"' twice"),qn(i,n,n),i.hasOwnProperty(r)&&Cn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[n].overloadTable[r]=t):(i[n]=t,void 0!==r&&(i[n].numArguments=r));}function Gn(n,t){for(var r=[],e=0;e<n;e++)r.push(F[t+4*e>>2]);return r}function Nn(n,t,r){i.hasOwnProperty(n)||Fn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==r?i[n].overloadTable[r]=t:(i[n]=t,i[n].argCount=r);}function Xn(n,t,r){var e=i["dynCall_"+n];return r&&r.length?e.apply(null,[t].concat(r)):e.call(null,t)}var Jn=[];function Zn(n){var t=Jn[n];return t||(n>=Jn.length&&(Jn.length=n+1),Jn[n]=t=j.get(n)),t}function $n(n,t,r){return n.includes("j")?Xn(n,t,r):Zn(t).apply(null,r)}function Kn(n,t){var r=[];return function(){return r.length=0,Object.assign(r,arguments),$n(n,t,r)}}function Qn(n,t){function r(){return n.includes("j")?Kn(n,t):Zn(t)}n=hn(n);var e=r();return "function"!=typeof e&&Cn("unknown function pointer with signature "+n+": "+t),e}var nt=void 0;function tt(n){var t=Bt(n),r=hn(t);return Gt(t),r}function rt(n,t){var r=[],e={};function i(n){e[n]||yn[n]||(vn[n]?vn[n].forEach(i):(r.push(n),e[n]=!0));}throw t.forEach(i),new nt(n+": "+r.map(tt).join([", "]))}function et(n,t,r,e,i,o){var a=Gn(t,r);n=hn(n),i=Qn(e,i),Ln(n,(function(){rt("Cannot call "+n+" due to unbound types",a);}),t-1),Pn([],a,(function(r){var e=[r[0],null].concat(r.slice(1));return Nn(n,Bn(n,e,null,i,o),t-1),[]}));}function it(n,t,r){switch(t){case 0:return r?function(n){return b[n]}:function(n){return A[n]};case 1:return r?function(n){return T[n>>1]}:function(n){return C[n>>1]};case 2:return r?function(n){return E[n>>2]}:function(n){return F[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function ot(n,t,r,e,i){t=hn(t);var o=ln(r),a=n=>n;if(0===e){var u=32-8*r;a=n=>n<<u>>>u;}var c=t.includes("unsigned"),f=(n,t)=>{};Sn(n,{name:t,fromWireType:a,toWireType:c?function(n,t){return f(t,this.name),t>>>0}:function(n,t){return f(t,this.name),t},argPackAdvance:8,readValueFromPointer:it(t,o,0!==e),destructorFunction:null});}function at(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=F,r=t[n>>=2],i=t[n+1];return new e(w,i,r)}Sn(n,{name:r=hn(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0});}function ut(n,t){var r="std::string"===(t=hn(t));Sn(n,{name:t,fromWireType:function(n){var t,e=F[n>>2],i=n+4;if(r)for(var o=i,a=0;a<=e;++a){var u=i+a;if(a==e||0==A[u]){var c=R(o,u-o);void 0===t?t=c:(t+=String.fromCharCode(0),t+=c),o=u+1;}}else {var f=new Array(e);for(a=0;a<e;++a)f[a]=String.fromCharCode(A[i+a]);t=f.join("");}return Gt(n),t},toWireType:function(n,t){var e;t instanceof ArrayBuffer&&(t=new Uint8Array(t));var i="string"==typeof t;i||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Cn("Cannot pass non-string to std::string"),e=r&&i?k(t):t.length;var o=Lt(4+e+1),a=o+4;if(F[o>>2]=e,r&&i)D(t,a,e+1);else if(i)for(var u=0;u<e;++u){var c=t.charCodeAt(u);c>255&&(Gt(a),Cn("String has UTF-16 code units that do not fit in 8 bits")),A[a+u]=c;}else for(u=0;u<e;++u)A[a+u]=t[u];return null!==n&&n.push(Gt,o),o},argPackAdvance:8,readValueFromPointer:In,destructorFunction:function(n){Gt(n);}});}var ct="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ft(n,t){for(var r=n,e=r>>1,i=e+t/2;!(e>=i)&&C[e];)++e;if((r=e<<1)-n>32&&ct)return ct.decode(A.subarray(n,r));for(var o="",a=0;!(a>=t/2);++a){var u=T[n+2*a>>1];if(0==u)break;o+=String.fromCharCode(u);}return o}function st(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var a=n.charCodeAt(o);T[t>>1]=a,t+=2;}return T[t>>1]=0,t-e}function lt(n){return 2*n.length}function pt(n,t){for(var r=0,e="";!(r>=t/4);){var i=E[n+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o);}else e+=String.fromCharCode(i);}return e}function dt(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),E[t>>2]=a,(t+=4)+4>i)break}return E[t>>2]=0,t-e}function ht(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4;}return t}function mt(n,t,r){var e,i,o,a,u;r=hn(r),2===t?(e=ft,i=st,a=lt,o=()=>C,u=1):4===t&&(e=pt,i=dt,a=ht,o=()=>F,u=2),Sn(n,{name:r,fromWireType:function(n){for(var r,i=F[n>>2],a=o(),c=n+4,f=0;f<=i;++f){var s=n+4+f*t;if(f==i||0==a[s>>u]){var l=e(c,s-c);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),c=s+t;}}return Gt(n),r},toWireType:function(n,e){"string"!=typeof e&&Cn("Cannot pass non-string to C++ string type "+r);var o=a(e),c=Lt(4+o+t);return F[c>>2]=o>>u,i(e,c+4,o+t),null!==n&&n.push(Gt,c),c},argPackAdvance:8,readValueFromPointer:In,destructorFunction:function(n){Gt(n);}});}function yt(n,t){Sn(n,{isVoid:!0,name:t=hn(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}});}var vt,gt=!0;function _t(){return gt}function wt(){$("");}function bt(){return Date.now()}function At(){return 2147483648}function Tt(){return At()}function Ct(n,t,r){A.copyWithin(n,t,t+r);}function Et(n){try{return g.grow(n-w.byteLength+65535>>>16),U(g.buffer),1}catch(t){}}function Ft(n){var t=A.length;n>>>=0;var r=At();if(n>r)return !1;let e=(n,t)=>n+(t-n%t)%t;for(var i=1;i<=4;i*=2){var o=t*(1+.2/i);if(o=Math.min(o,n+100663296),Et(Math.min(r,e(Math.max(n,o),65536))))return !0}return !1}vt=p?()=>{var n=process.hrtime();return 1e3*n[0]+n[1]/1e6}:()=>performance.now();var Pt={};function St(){return f||"./this.program"}function jt(){if(!jt.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:St()};for(var t in Pt)void 0===Pt[t]?delete n[t]:n[t]=Pt[t];var r=[];for(var t in n)r.push(t+"="+n[t]);jt.strings=r;}return jt.strings}function Wt(n,t,r){for(var e=0;e<n.length;++e)b[t++>>0]=n.charCodeAt(e);r||(b[t>>0]=0);}function Mt(n,t){var r=0;return jt().forEach((function(e,i){var o=t+r;F[n+4*i>>2]=o,Wt(e,o),r+=e.length+1;})),0}function Ot(n,t){var r=jt();F[n>>2]=r.length;var e=0;return r.forEach((function(n){e+=n.length+1;})),F[t>>2]=e,0}function Rt(n){return n%4==0&&(n%100!=0||n%400==0)}function xt(n,t){for(var r=0,e=0;e<=t;r+=n[e++]);return r}var Dt=[31,29,31,30,31,30,31,31,30,31,30,31],kt=[31,28,31,30,31,30,31,31,30,31,30,31];function Ut(n,t){for(var r=new Date(n.getTime());t>0;){var e=Rt(r.getFullYear()),i=r.getMonth(),o=(e?Dt:kt)[i];if(!(t>o-r.getDate()))return r.setDate(r.getDate()+t),r;t-=o-r.getDate()+1,r.setDate(1),i<11?r.setMonth(i+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1));}return r}function It(n,t,r){var e=r>0?r:k(n)+1,i=new Array(e),o=x(n,i,0,i.length);return t&&(i.length=o),i}function Ht(n,t){b.set(n,t);}function Yt(n,t,r,e){var i=E[e+40>>2],o={tm_sec:E[e>>2],tm_min:E[e+4>>2],tm_hour:E[e+8>>2],tm_mday:E[e+12>>2],tm_mon:E[e+16>>2],tm_year:E[e+20>>2],tm_wday:E[e+24>>2],tm_yday:E[e+28>>2],tm_isdst:E[e+32>>2],tm_gmtoff:E[e+36>>2],tm_zone:i?R(i):""},a=R(r),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in u)a=a.replace(new RegExp(c,"g"),u[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"];function l(n,t,r){for(var e="number"==typeof n?n.toString():n||"";e.length<t;)e=r[0]+e;return e}function p(n,t){return l(n,t,"0")}function d(n,t){function r(n){return n<0?-1:n>0?1:0}var e;return 0===(e=r(n.getFullYear()-t.getFullYear()))&&0===(e=r(n.getMonth()-t.getMonth()))&&(e=r(n.getDate()-t.getDate())),e}function h(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function m(n){var t=Ut(new Date(n.tm_year+1900,0,1),n.tm_yday),r=new Date(t.getFullYear(),0,4),e=new Date(t.getFullYear()+1,0,4),i=h(r),o=h(e);return d(i,t)<=0?d(o,t)<=0?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var y={"%a":function(n){return f[n.tm_wday].substring(0,3)},"%A":function(n){return f[n.tm_wday]},"%b":function(n){return s[n.tm_mon].substring(0,3)},"%B":function(n){return s[n.tm_mon]},"%C":function(n){return p((n.tm_year+1900)/100|0,2)},"%d":function(n){return p(n.tm_mday,2)},"%e":function(n){return l(n.tm_mday,2," ")},"%g":function(n){return m(n).toString().substring(2)},"%G":function(n){return m(n)},"%H":function(n){return p(n.tm_hour,2)},"%I":function(n){var t=n.tm_hour;return 0==t?t=12:t>12&&(t-=12),p(t,2)},"%j":function(n){return p(n.tm_mday+xt(Rt(n.tm_year+1900)?Dt:kt,n.tm_mon-1),3)},"%m":function(n){return p(n.tm_mon+1,2)},"%M":function(n){return p(n.tm_min,2)},"%n":function(){return "\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return p(n.tm_sec,2)},"%t":function(){return "\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var t=n.tm_yday+7-n.tm_wday;return p(Math.floor(t/7),2)},"%V":function(n){var t=Math.floor((n.tm_yday+7-(n.tm_wday+6)%7)/7);if((n.tm_wday+371-n.tm_yday-2)%7<=2&&t++,t){if(53==t){var r=(n.tm_wday+371-n.tm_yday)%7;4==r||3==r&&Rt(n.tm_year)||(t=1);}}else {t=52;var e=(n.tm_wday+7-n.tm_yday-1)%7;(4==e||5==e&&Rt(n.tm_year%400-1))&&t++;}return p(t,2)},"%w":function(n){return n.tm_wday},"%W":function(n){var t=n.tm_yday+7-(n.tm_wday+6)%7;return p(Math.floor(t/7),2)},"%y":function(n){return (n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var t=n.tm_gmtoff,r=t>=0;return t=(t=Math.abs(t)/60)/60*100+t%60,(r?"+":"-")+String("0000"+t).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return "%"}};for(var c in a=a.replace(/%%/g,"\0\0"),y)a.includes(c)&&(a=a.replace(new RegExp(c,"g"),y[c](o)));var v=It(a=a.replace(/\0\0/g,"%"),!1);return v.length>t?0:(Ht(v,n),v.length-1)}function zt(n,t,r,e,i){return Yt(n,t,r,e)}pn(),Tn=i.BindingError=An(Error,"BindingError"),En=i.InternalError=An(Error,"InternalError"),kn(),nt=i.UnboundTypeError=An(Error,"UnboundTypeError");var Vt={a:fn,m:sn,k:jn,i:Wn,j:Hn,h:zn,c:et,d:ot,b:at,g:ut,e:mt,l:yt,r:_t,f:wt,s:bt,n:Tt,u:vt,v:Ct,t:Ft,p:Mt,q:Ot,o:zt};on(),i.___wasm_call_ctors=function(){return (i.___wasm_call_ctors=i.asm.x).apply(null,arguments)};var Bt=i.___getTypeName=function(){return (Bt=i.___getTypeName=i.asm.z).apply(null,arguments)};i.__embind_initialize_bindings=function(){return (i.__embind_initialize_bindings=i.asm.A).apply(null,arguments)};var qt,Lt=i._malloc=function(){return (Lt=i._malloc=i.asm.B).apply(null,arguments)},Gt=i._free=function(){return (Gt=i._free=i.asm.C).apply(null,arguments)},Nt=i.___cxa_is_pointer_type=function(){return (Nt=i.___cxa_is_pointer_type=i.asm.D).apply(null,arguments)};function Xt(n){function r(){qt||(qt=!0,i.calledRun=!0,W||(V(),t(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),B()));}N>0||(z(),N>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("");}),1),r();}),1)):r()));}if(i.dynCall_viijii=function(){return (i.dynCall_viijii=i.asm.E).apply(null,arguments)},i.dynCall_iiiiij=function(){return (i.dynCall_iiiiij=i.asm.F).apply(null,arguments)},i.dynCall_iiiiijj=function(){return (i.dynCall_iiiiijj=i.asm.G).apply(null,arguments)},i.dynCall_iiiiiijj=function(){return (i.dynCall_iiiiiijj=i.asm.H).apply(null,arguments)},X=function n(){qt||Xt(),qt||(X=n);},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Xt(),n.ready},r.exports=i;var a=o.exports;const u=t({__proto__:null,default:t$1(a)},[a]);

export { u as l };

//# sourceMappingURL=lclayout-20af1d2f.js.map