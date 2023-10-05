import { h as h$1, f_ as e$1, bH as e$2, d as u$1, f$ as s$1, s as s$2 } from './interfaces-f9f0dded.js';
import { c as c$1 } from './fontUtils-84ca76ae.js';
import { a as h$2, f as f$2, y as y$2 } from './utils-3c908942.js';
import { t, n as e$3, o as d$2, q as l$1 } from './config-update-ae0c9c9e.js';
import { z as z$1, p, y as y$1 } from './colorUtils-3c42b70c.js';
import './_commonjsHelpers-b08b522c.js';
import './utils-6e0c5e09.js';
import './index-0c4dc1bb.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './TileStrategy-7487a7f8.js';
import './vec2-c2da03bd.js';
import './TileStore-178dd7b2.js';
import './TileKey-4c2c49c7.js';
import './quickselect-cc68e3d5.js';
import './webStyleSymbolUtils-0542add6.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './statsWorker-e4850868.js';
import './quantizationUtils-33eaa35c.js';
import './utils-9b101bd7.js';
import './generateRendererUtils-ef8214c8.js';
import './Basemap-0d067aec.js';
import './loadAll-dc49c260.js';
import './writeUtils-3dcfa57f.js';
import './executeQuery-dca07954.js';
import './infoFor3D-0047d262.js';
import './executeQueryJSON-a16aae69.js';
import './normalizeUtils-6257e368.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './executeQueryPBF-24a7740f.js';
import './featureConversionUtils-da87b7fc.js';
import './AttachmentInfo-fac6a5e9.js';
import './CollectionFlattener-78984a9a.js';
import './TablesMixin-e984f376.js';
import './Cyclical-5ec65b13.js';
import './TileInfo-4a28547b.js';
import './Scheduler-1e6f0e40.js';
import './GraphicsCollection-a0dc229c.js';
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './vec2f64-25ab05ca.js';
import './mat3-eb290db7.js';
import './mat3f32-1cfc4913.js';
import './vec2f32-cdd4dd4e.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './contextUtils-e38d5070.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function e(n){await n.whenReady();const r=n.basemapView?.baseLayerViews.map((t=>t.layer)).toArray()??[];if(!r.length){const r=getComputedStyle(n.container).backgroundColor,o=r&&new h$1(r);return n.get("background.color")||(o&&0!==o.a?o:null)||null}const o=(await n.takeScreenshot({format:"png",layers:r})).data.data,a=o.length;let e=0,u=0,c=0,l=0,s=0,i=0;for(let t=0;t<a;t+=4){const n=o[t],r=o[t+1],a=o[t+2],f=o[t+3],h=f/255;e+=n*n*h,u+=r*r*h,c+=a*a*h,s+=h,f&&(l+=f,i++);}e=Math.round(Math.sqrt(e/s)),u=Math.round(Math.sqrt(u/s)),c=Math.round(Math.sqrt(c/s));return new h$1([e,u,c,l/i/255])}async function u(t){if(!t)return null;const n=await e(t);return null!=n?c(n):null}function c(t){return l(t).isBright?"light":"dark"}function l(n){let{r,g:o,b:a,a:e}=n;return e<1&&(r=Math.round(e*r+255*(1-e)),o=Math.round(e*o+255*(1-e)),a=Math.round(e*a+255*(1-e))),new h$1({r,g:o,b:a})}function s(t,n){const{r,g:o,b:a}=n?.ignoreAlpha?t:l(t);return .2126*r+.7152*o+.0722*a}function i(t,o){const a=z$1(t);a.l*=1-o;const e=p(a),u=t.clone();return u.setColor(e),u.a=t.a,u}function f$1(t,n){const r=t.clone();return r.a*=n,r}function h(t,n){const a=y$1(t);a.s*=n;const e=p(a),u=t.clone();return u.setColor(e),u.a=t.a,u}function d$1(n){return e$1(h$1.toUnitRGBA(n))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d="picture-fill",f="picture-marker",y="simple-fill",w="simple-line",g="simple-marker",v="text",b="Aa",k=t.size,x=t.maxSize,z=t.maxOutlineSize,L=t.lineWidth,M=225,j=document.createElement("canvas");function C(e,t){const a=j.getContext("2d"),n=[];return t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" "),a.measureText(e).width}const S=7.2/2.54,F=72/2.54;function U(e){if(0===e.length)return 0;if(e.length>2){const t=e$2(1),a=parseFloat(e);switch(e.slice(-2)){case"px":return a;case"pt":return a*t;case"in":return 72*a*t;case"pc":return 12*a*t;case"mm":return a*S*t;case"cm":return a*F*t}}return parseFloat(e)}function E(e){const t=e?.size;return {width:null!=t&&"object"==typeof t&&"width"in t?u$1(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?u$1(t.height):null}}async function Z(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==d){const e=await h$2(a.src,n.toCss(!0));a.src=e,t.fill=a;}}async function q(e,t,n,l){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await c$1(e.font);}catch{}const{width:o}=E(l),i=/[\uE600-\uE6FF]/.test(t.shape.text);null!=o||i||(n[0]=C(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family}));}function D(e,t,a,l,o){if(null!=e.haloColor&&null!=e.haloSize){o.masking??=a.map((()=>[]));const i=u$1(e.haloSize);l[0]+=i,l[1]+=i,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*i,join:"round",cap:"round"}}]),o.masking.unshift([{shape:{type:"rect",x:0,y:0,width:l[0]+2*s$1,height:l[1]+2*s$1},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}]);}null==e.backgroundColor&&null==e.borderLineColor||(l[0]+=2*s$1,l[1]+=2*s$1,a.unshift([{shape:{type:"rect",x:0,y:0,width:l[0],height:l[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:u$1(e.borderLineSize)}}]),o.masking?.unshift([]));}function O(e,t){return e>t?"dark":"light"}function T(e,t){const a="number"==typeof t?.size?t?.size:null,l=null!=a?u$1(a):null,s=null!=t?.maxSize?u$1(t.maxSize):null,r=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,u=f$2(e);let h=y$2(e);"dark"!==P(e,245)||t?.ignoreWhiteSymbols||(h={width:.75,...h,color:"#bdc3c7"});const m={shape:null,fill:u,stroke:h,offset:[0,0]};h?.width&&(h.width=Math.min(h.width,z));const p=h?.width||0;let M=null!=t?.size&&(null==t?.scale||t?.scale),j=0,S=0,F=!1;switch(e.type){case g:{const a=e.style,{width:o,height:i}=E(t),c=o===i&&null!=o?o:null!=l?l:Math.min(u$1(e.size),s||x);switch(j=c,S=c,a){case"circle":m.shape={type:"circle",cx:0,cy:0,r:.5*c},M||(j+=p,S+=p);break;case"cross":m.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[j,.5*S]},{command:"M",values:[.5*j,0]},{command:"L",values:[.5*j,S]}]};break;case"diamond":m.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*j,0]},{command:"L",values:[j,.5*S]},{command:"L",values:[.5*j,S]},{command:"Z",values:[]}]},M||(j+=p,S+=p);break;case"square":m.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,0]},{command:"L",values:[j,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(j+=p,S+=p),r&&(F=!0);break;case"triangle":m.shape={type:"path",path:[{command:"M",values:[.5*j,0]},{command:"L",values:[j,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(j+=p,S+=p),r&&(F=!0);break;case"x":m.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,S]},{command:"M",values:[j,0]},{command:"L",values:[0,S]}]},r&&(F=!0);break;case"path":m.shape={type:"path",path:e.path||""},M||(j+=p,S+=p),r&&(F=!0),M=!0;}break}case w:{const{width:e,height:a}=E(t),n=null!=a?a:null!=l?l:p,o=null!=e?e:L;h&&(h.width=n),j=o,S=n;const i=m?.stroke?.cap||"butt",s="round"===i;M=!0,m.stroke&&(m.stroke.cap="butt"===i?"square":i),m.shape={type:"path",path:[{command:"M",values:[s?n/2:0,S/2]},{command:"L",values:[s?j-n/2:j,S/2]}]};break}case d:case y:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:n}=E(t);j=!e&&a!==n||null==a?null!=l?l:k:a,S=!e&&a!==n||null==n?j:n,M||(j+=p,S+=p),M=!0,m.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,0]},{command:"L",values:[j,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:e$3.fill[0];break}case f:{const a=Math.min(u$1(e.width),s||x),o=Math.min(u$1(e.height),s||x),{width:i,height:c}=E(t),u=i===c&&null!=i?i:null!=l?l:Math.max(a,o),h=a/o;j=h<=1?Math.ceil(u*h):u,S=h<=1?u:Math.ceil(u/h),m.shape={type:"image",x:-Math.round(j/2),y:-Math.round(S/2),width:j,height:S,src:e.url||""},r&&(F=!0);break}case v:{const a=e,o=t?.overrideText||a.text||b,i=a.font,{width:r,height:c}=E(t),u=null!=c?c:null!=l?l:Math.min(u$1(i.size),s||x),h=C(o,{weight:i.weight,size:u,family:i.family}),p=/[\uE600-\uE6FF]/.test(o);j=r??(p?u:h),S=u;let d=.25*U((i?u:0).toString());p&&(d+=5),m.shape={type:"text",text:o,x:a.xoffset||0,y:a.yoffset||d,align:"middle",alignBaseline:a.verticalAlignment,decoration:i&&i.decoration,rotated:a.rotated,kerning:a.kerning},m.font=i&&{size:u,style:i.style,decoration:i.decoration,weight:i.weight,family:i.family};break}}return {shapeDescriptor:m,size:[j,S],renderOptions:{node:t?.node,scale:M,opacity:t?.opacity,rotation:r,useRotationSize:F,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}async function A(e,a){const{shapeDescriptor:n,size:l,renderOptions:o}=T(e,a);if(!n.shape)throw new s$2("symbolPreview: renderPreviewHTML2D","symbol not supported.");await Z(e,n),await q(e,n,l,a);const i=[[n]];if("object"==typeof a?.symbolConfig&&a?.symbolConfig?.applyColorModulation){const e=.6*l[0];i.unshift([{...n,offset:[-e,0],fill:d$2(n.fill,-.3)}]),i.push([{...n,offset:[e,0],fill:d$2(n.fill,.3)}]),l[0]+=2*e,o.scale=!1;}return "text"===e.type&&D(e,n,i,l,o),l$1(i,l,o)}function P(t,a=M){const n=f$2(t),l=y$2(t),s$1=!n||"type"in n?null:new h$1(n),r=l?.color?new h$1(l?.color):null,c=s$1?O(s(s$1),a):null,u=r?O(s(r),a):null;return u?c?c===u?c:a>=M?"light":"dark":u:c}

export { P as getContrastingBackgroundTheme, T as getRenderSymbolParameters, A as previewSymbol2D };

//# sourceMappingURL=previewSymbol2D-d1a14748.js.map