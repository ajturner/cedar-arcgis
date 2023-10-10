import { i0 as l$1, hW as tn, k as s, B as e, F as a$2, ad as m$1, E as y, ag as x, a2 as u, b5 as f$1, s as s$1, bi as j$2, aJ as c$2, ai as o, a6 as r$1, aK as m$2, b4 as M$2, bc as r$3, bf as i$1, H as _$1, c as j$4, cp as i$2, hY as c$3, gg as tt, ji as Z, jh as v, je as R, jg as Y, jE as st, cM as V$1, V as V$2, a_ as m$3, aZ as a$3, ac as n$4, an as l$2, J as s$2, a4 as n$5, d1 as Rn, b2 as S$2, aV as nn, f8 as o$2, hV as x$1, i4 as a$4, i5 as t$2, dl as c$4, dn as O$1, bW as b$1, ae as s$3 } from './interfaces-f9f0dded.js';
import { n as n$3 } from './uuid-d7a4b2f1.js';
import { h, j as j$3, i as i$3 } from './perspectiveUtils-7802ce4b.js';
import { u as u$1 } from './mat3-eb290db7.js';
import { e as e$1, t } from './mat3f64-9c2c37f3.js';
import { r, L as L$1, A as A$1 } from './vec2-c2da03bd.js';
import { n as n$2, r as r$2 } from './vec2f64-25ab05ca.js';
import { t as t$1 } from './resourceExtension-f3ad4cdf.js';
import { o as o$1 } from './BoundsStore-7edbe9f1.js';
import './_commonjsHelpers-b08b522c.js';
import './normalizeUtilsSync-898773b1.js';
import './normalizeUtilsCommon-b073ef53.js';
import './PooledRBush-ebb61bcc.js';
import './quickselect-cc68e3d5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c$1=class extends l$1{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:c}=tn(e,r);return c?null:c||t?t:(s.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};c$1=e([a$2("esri.layers.support.GeoreferenceBase")],c$1);const a$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const C=e$1(),T$1=n$2();let _=class extends m$1{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null;}};e([y()],_.prototype,"sourcePoint",void 0),e([y({type:x})],_.prototype,"mapPoint",void 0),_=e([a$2("esri.layers.support.ControlPoint")],_);let O=class extends(u(a$1)){constructor(o){super(o),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0;}readControlPoints(o,t$1){const r$1=f$1.fromJSON(t$1.spatialReference),n=t(...t$1.coefficients,1);return o.map((o=>(r(T$1,o.x,o.y),h(T$1,T$1,n),{sourcePoint:o,mapPoint:new x({x:T$1[0],y:T$1[1],spatialReference:r$1})})))}writeControlPoints(o,t,n,i){if(null!=this.transform)null!=o&&k(o[0])&&(t.controlPoints=o.map((o=>{const t=o.sourcePoint;return {x:t.x,y:t.y}})),t.spatialReference=o[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else {const o=new s$1("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:i?.layer,georeference:this});i?.messages?i.messages.push(o):s.getLogger(this).error(o.name,o.message);}}get coords(){if(null==this.controlPoints)return null;const o=this._updateTransform(C);if(null==o||!k(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return K(o,this.width,this.height,t)}set coords(o){if(null==this.controlPoints||!k(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(null==(o=this.projectOrWarn(o,t)))return;const{width:r$1,height:n}=this,{rings:[[e,s,c,a]]}=o,p={sourcePoint:c$2(0,n),mapPoint:new x({x:e[0],y:e[1],spatialReference:t})},u={sourcePoint:c$2(0,0),mapPoint:new x({x:s[0],y:s[1],spatialReference:t})},m={sourcePoint:c$2(r$1,0),mapPoint:new x({x:c[0],y:c[1],spatialReference:t})},f={sourcePoint:c$2(r$1,n),mapPoint:new x({x:a[0],y:a[1],spatialReference:t})};k(p)&&k(u)&&k(m)&&k(f)&&(E$1(C,p,u,m,f),this.controlPoints=this.controlPoints.map((({sourcePoint:o})=>(r(T$1,o.x,o.y),h(T$1,T$1,C),{sourcePoint:o,mapPoint:new x({x:T$1[0],y:T$1[1],spatialReference:t})}))));}get inverseTransform(){return null==this.transform?null:u$1(e$1(),this.transform)}get transform(){return this._updateTransform()}toMap(o){if(null==o||null==this.transform||null==this.controlPoints||!k(this.controlPoints[0]))return null;r(T$1,o.x,o.y);const t=this.controlPoints[0].mapPoint.spatialReference;return h(T$1,T$1,this.transform),new x({x:T$1[0],y:T$1[1],spatialReference:t})}toSource(o){if(null==o||null==this.inverseTransform||null==this.controlPoints||!k(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return o=o.normalize(),null==(o=tn(o,t).geometry)?null:(r(T$1,o.x,o.y),h(T$1,T$1,this.inverseTransform),c$2(T$1[0],T$1[1]))}_updateTransform(o){const{controlPoints:t,width:r,height:n}=this;if(!(null!=t&&r>0&&n>0))return null;const[e,i,s,l]=t;if(!k(e))return null;const c=e.mapPoint.spatialReference,a=this._projectControlPoint(i,c),p=this._projectControlPoint(s,c),u=this._projectControlPoint(l,c);if(!a.valid||!p.valid||!u.valid)return null;if(!k(a.controlPoint))return null;null==o&&(o=e$1());let m=null;return m=k(p.controlPoint)&&k(u.controlPoint)?E$1(o,e,a.controlPoint,p.controlPoint,u.controlPoint):k(p.controlPoint)?B(o,e,a.controlPoint,p.controlPoint):z(o,e,a.controlPoint),m.every((o=>0===o))?null:m}_projectControlPoint(o,t){if(!k(o))return {valid:!0,controlPoint:o};const{sourcePoint:r,mapPoint:n}=o,{geometry:i,pending:s$1}=tn(n,t);return s$1?{valid:!1,controlPoint:null}:s$1||i?{valid:!0,controlPoint:{sourcePoint:r,mapPoint:i}}:(s.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:o,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function k(o){return null!=o&&null!=o.sourcePoint&&null!=o.mapPoint}e([y({type:[_],json:{write:{allowNull:!1,isRequired:!0}}})],O.prototype,"controlPoints",void 0),e([o("controlPoints")],O.prototype,"readControlPoints",null),e([r$1("controlPoints")],O.prototype,"writeControlPoints",null),e([y()],O.prototype,"coords",null),e([y({json:{write:!0}})],O.prototype,"height",void 0),e([y({readOnly:!0})],O.prototype,"inverseTransform",null),e([y({readOnly:!0})],O.prototype,"transform",null),e([y({json:{write:!0}})],O.prototype,"width",void 0),O=e([a$2("esri.layers.support.ControlPointsGeoreference")],O);const b=n$2(),I$2=n$2(),M$1=n$2(),N=n$2(),A=n$2(),J=n$2(),L=n$2(),U=n$2(),G=Math.PI/2;function q(o,t,r$1){r(o,r$1.sourcePoint.x,r$1.sourcePoint.y),r(t,r$1.mapPoint.x,r$1.mapPoint.y);}function z(o,t,r){return q(b,A,t),q(I$2,J,r),L$1(M$1,I$2,b,G),L$1(N,b,I$2,G),L$1(L,J,A,-G),L$1(U,A,J,-G),H(o,b,I$2,M$1,N,A,J,L,U)}function B(o,t,r,n){return q(b,A,t),q(I$2,J,r),q(M$1,L,n),A$1(N,b,I$2,.5),L$1(N,M$1,N,Math.PI),A$1(U,A,J,.5),L$1(U,L,U,Math.PI),H(o,b,I$2,M$1,N,A,J,L,U)}function E$1(o,t,r,n,e){return q(b,A,t),q(I$2,J,r),q(M$1,L,n),q(N,U,e),H(o,b,I$2,M$1,N,A,J,L,U)}const W=new Array(8).fill(0),D=new Array(8).fill(0);function F(o,t,r,n,e){return o[0]=t[0],o[1]=t[1],o[2]=r[0],o[3]=r[1],o[4]=n[0],o[5]=n[1],o[6]=e[0],o[7]=e[1],o}function H(o,t,r,n,e,i,l,c,a){return j$3(o,F(W,t,r,n,e),F(D,i,l,c,a))}function K(o,t,r,n){const e=r$2(0,r),s=r$2(0,0),l=r$2(t,0),c=r$2(t,r);return h(e,e,o),h(s,s,o),h(l,l,o),h(c,c,o),new j$2({rings:[[e,s,l,c,e]],spatialReference:n})}const Q=O;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n$1=class extends a$1{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners";}get coords(){let{topLeft:t,topRight:e,bottomLeft:o,bottomRight:r}=this;if(null==t||null==e||null==o||null==r)return null;const p=t.spatialReference;return e=this.projectOrWarn(e,p),o=this.projectOrWarn(o,p),r=this.projectOrWarn(r,p),null==e||null==o||null==r?null:new j$2({rings:[[[o.x,o.y],[t.x,t.y],[e.x,e.y],[r.x,r.y],[o.x,o.y]]],spatialReference:p})}set coords(t){const{topLeft:e}=this;if(null==e)return;const o=e.spatialReference;if(null==(t=this.projectOrWarn(t,o)))return;const{rings:[[s,p,n,i]]}=t;this.bottomLeft=new x({x:s[0],y:s[1],spatialReference:o}),this.topLeft=new x({x:p[0],y:p[1],spatialReference:o}),this.topRight=new x({x:n[0],y:n[1],spatialReference:o}),this.bottomRight=new x({x:i[0],y:i[1],spatialReference:o});}};e([y()],n$1.prototype,"coords",null),e([y({type:x})],n$1.prototype,"bottomLeft",void 0),e([y({type:x})],n$1.prototype,"bottomRight",void 0),e([y({type:x})],n$1.prototype,"topLeft",void 0),e([y({type:x})],n$1.prototype,"topRight",void 0),n$1=e([a$2("esri.layers.support.CornersGeoreference")],n$1);const i=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends a$1{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation";}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:s}=this.extent;let n;if(this.rotation){const{x:s,y:i}=this.extent.center,a=p(s,i,this.rotation);n=[a(t,e),a(t,o),a(r,o),a(r,e)],n.push(n[0]);}else n=[[t,e],[t,o],[r,o],[r,e],[t,e]];return new j$2({rings:[n],spatialReference:s})}set coords(t){if(null==t||null==this.extent)return;const r=this.extent.spatialReference;if(null==(t=this.projectOrWarn(t,r))||null==t.extent)return;const{rings:[[o,s,i]],extent:{center:{x:a,y:c}}}=t,m=m$2(Math.PI/2-Math.atan2(s[1]-o[1],s[0]-o[0])),l=p(a,c,-m),[u,x]=l(o[0],o[1]),[h,f]=l(i[0],i[1]);this.extent=new M$2({xmin:u,ymin:x,xmax:h,ymax:f,spatialReference:r}),this.rotation=m;}};function p(t,e,r){const o=r$3(r),n=Math.cos(o),i=Math.sin(o);return (r,o)=>[n*(r-t)+i*(o-e)+t,n*(o-e)-i*(r-t)+e]}e([y()],c.prototype,"coords",null),e([y({type:M$2})],c.prototype,"extent",void 0),e([y({type:Number})],c.prototype,"rotation",void 0),c=e([a$2("esri.layers.support.ExtentAndRotationGeoreference")],c);const m=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f={key:"type",base:a$1,typeMap:{"control-points":Q,corners:i,"extent-and-rotation":m}};let l=class extends(i$1(u(_$1))){constructor(e){super(e),this.georeference=null,this.opacity=1;}readGeoreference(e){return Q.fromJSON(e)}};e([y({types:f,json:{write:!0}})],l.prototype,"georeference",void 0),e([o("georeference")],l.prototype,"readGeoreference",null),e([y()],l.prototype,"opacity",void 0),l=e([a$2("esri.layers.support.MediaElementBase")],l);const d=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let j$1=class extends d{constructor(e){super(e),this.content=null,this.image=null,this.type="image",this.image=null;}load(){const e=this.image;if("string"==typeof e){const r=j$4(e,{responseType:"image"}).then((({data:e})=>{this._set("content",e);}));this.addResolvingPromise(r);}else if(e instanceof HTMLImageElement){const t=e.decode().then((()=>{this._set("content",e);}));this.addResolvingPromise(t);}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new s$1("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}readImage(e,t,r){return i$2(t.url,r)}writeImage(e,t,r,n){if(null==e)return;const a=n?.portalItem,m=n?.resources;if(!a||!m)return void("string"==typeof e&&(t[r]=c$3(e,n)));const p="string"!=typeof e||tt(e)||Z(e)?null:e;if(p){if(null==v(p))return void(t[r]=p);const e=c$3(p,{...n,verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},R.NO);if(a&&e&&!Y(e))return m.toKeep.push({resource:a.resourceFromPath(e),compress:!1}),void(t[r]=e)}t[r]="<pending>",m.pendingOperations.push(w(e).then((e=>{const o=T(e,a);t[r]=o.itemRelativeUrl,m.toAdd.push({resource:o,content:e,compress:!1,finish:e=>{this.image=e.url;}});})));}};e([y({readOnly:!0})],j$1.prototype,"content",void 0),e([y({json:{name:"url",type:String}})],j$1.prototype,"image",void 0),e([o("image",["url"])],j$1.prototype,"readImage",null),e([r$1("image")],j$1.prototype,"writeImage",null),e([y({readOnly:!0,json:{name:"mediaType"}})],j$1.prototype,"type",void 0),j$1=e([a$2("esri.layers.support.ImageElement")],j$1);const I$1=j$1;async function w(e){if("string"==typeof e){if(Z(e)){const{data:r}=await j$4(e,{responseType:"blob"});return r}if(tt(e))return st(e);return w((await j$4(e,{responseType:"image"})).data)}return new Promise((t=>E(e).toBlob(t)))}function E(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),s=o.getContext("2d");return o.width=t,o.height=r,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),o}function T(e,t){const r=n$3(),o=`${V$1("media",r)}.${t$1(e)}`;return t.resourceFromPath(o)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n=class extends d{constructor(e){super(e),this.content=null,this.type="video";}load(){const e=this.video;if("string"==typeof e){const o=document.createElement("video");o.src=e,o.crossOrigin="anonymous",o.autoplay=!0,o.muted=!0,o.loop=!0,this.addResolvingPromise(this._loadVideo(o).then((()=>{this._set("content",o);})));}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e);}))):this.addResolvingPromise(Promise.reject(new s$1("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):s.getLogger(this).error("#video","video cannot be changed after the element is loaded.");}_loadVideo(e){return new Promise(((o,t)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(o,t);},"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",e.src=e.src);}))}};e([y({readOnly:!0})],n.prototype,"content",void 0),e([y()],n.prototype,"video",null),n=e([a$2("esri.layers.support.VideoElement")],n);const a=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const M={key:"type",defaultKeyValue:"image",base:d,typeMap:{image:I$1,video:a}},I=V$2.ofType(M);let S$1=class extends(_$1.LoadableMixin(m$3(a$3(n$4.EventedAccessor)))){constructor(e){super(e),this._index=new o$1,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.handles.remove(e),e.destroy(),this.notifyChange("fullExtent");}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new i$3({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const r=l$2((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.handles.add(r,e);}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh");},this.elements=new I;}async load(e){if(s$2(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference&&null!=e.georeference.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:f$1.WGS84);}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear();}set elements(e){this._set("elements",n$5(e,this._get("elements"),I));}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new M$2({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):s.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.");}async queryElements(e,t){await this.load(),await Rn(e.spatialReference,this.spatialReference,null,t);const s=S$2(e.spatialReference,this.spatialReference)?e:nn(e,this.spatialReference);if(!s)return [];const r=s.normalize(),o=[];for(const n of r)this._index.forEachInBounds(o$2(n),(({normalizedCoords:e,element:t})=>{null!=e&&x$1(n,e)&&o.push(t);}));return o.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),o}_updateIndexForElement(e,t){const s=e.normalizedBounds,r=this._index.has(e),o=null!=s;this._index.delete(e),o&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}));}};e([y()],S$1.prototype,"elements",null),e([y({readOnly:!0})],S$1.prototype,"fullExtent",null),e([y()],S$1.prototype,"spatialReference",null),S$1=e([a$2("esri.layers.support.LocalMediaElementSource")],S$1);const V=S$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function S(e){return "object"==typeof e&&null!=e&&"type"in e}let g=class extends(a$4(t$2(c$4(O$1(b$1))))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new V;}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new s$1("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const s=S(t)?new V({elements:new V$2([t])}):t;this._set("effectiveSource",s),this.spatialReference&&(s.spatialReference=this.spatialReference);const i=s.load(e).then((()=>{this.spatialReference=s.spatialReference;}));return this.addResolvingPromise(i),Promise.resolve(this)}destroy(){this.effectiveSource?.destroy(),this.source?.destroy();}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"not-loaded"===this.loadStatus?this._set("source",e):s.getLogger(this).error("#source","source cannot be changed after the layer is loaded.");}castSource(e){return e?Array.isArray(e)?new V({elements:new V$2(e)}):e instanceof V$2?new V({elements:e}):e:null}readSource(e,r,o){const t="image"===r.mediaType?new I$1:"video"===r.mediaType?new a:null;return t?.read(r,o),t}writeSource(e,r,t,s){e&&S(e)&&"image"===e.type?e.write(r,s):s?.messages&&s?.messages?.push(new s$1("media-layer:unsupported-source","source must be an 'ImageElement'"));}};e([y({readOnly:!0})],g.prototype,"effectiveSource",void 0),e([y({type:String})],g.prototype,"copyright",void 0),e([y({readOnly:!0})],g.prototype,"fullExtent",null),e([y({type:["MediaLayer"]})],g.prototype,"operationalLayerType",void 0),e([y({type:["show","hide"]})],g.prototype,"listMode",void 0),e([y({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],g.prototype,"source",null),e([s$3("source")],g.prototype,"castSource",null),e([o("source",["url"])],g.prototype,"readSource",null),e([r$1("source")],g.prototype,"writeSource",null),e([y()],g.prototype,"spatialReference",void 0),e([y({readOnly:!0})],g.prototype,"type",void 0),g=e([a$2("esri.layers.MediaLayer")],g);const j=g;

export default j;

//# sourceMappingURL=MediaLayer-bcca3fc0.js.map