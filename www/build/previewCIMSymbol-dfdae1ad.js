import { J as s, u as u$1, d as u$2, g0 as p, c as j, h as h$2, bH as e } from './interfaces-f9f0dded.js';
import { r, n as ne, i as ie, Q, e as et, G, V } from './cimAnalyzer-3bf5efb3.js';
import { h as h$1 } from './CIMResourceManager-aa0aa61b.js';
import { c as c$1 } from './Rasterizer-2747011f.js';
import { O, c as c$2, t, r as r$1 } from './utils-6e0c5e09.js';
import { m as m$1 } from './utils-3c908942.js';
import { t as t$1, q as l } from './config-update-89e29a27.js';
import './_commonjsHelpers-b08b522c.js';
import './fontUtils-84ca76ae.js';
import './BidiEngine-20165a23.js';
import './OptimizedFeature-fb4fb1cb.js';
import './GeometryUtils-f6b4ca45.js';
import './enums-ca582117.js';
import './alignmentUtils-63467b02.js';
import './definitions-b0fcbe43.js';
import './TileStrategy-7487a7f8.js';
import './vec2-c2da03bd.js';
import './TileStore-178dd7b2.js';
import './TileKey-4c2c49c7.js';
import './quickselect-cc68e3d5.js';
import './vec2f32-cdd4dd4e.js';
import './number-4aaa92a3.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-33eaa35c.js';
import './floatRGBA-bde46530.js';
import './imageutils-5301aafb.js';
import './rasterizingUtils-15ce6205.js';
import './index-0c4dc1bb.js';
import './colorUtils-3c42b70c.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './webStyleSymbolUtils-0542add6.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './statsWorker-e4850868.js';
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
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './contextUtils-e38d5070.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var M;!function(e){e.Legend="legend",e.Preview="preview";}(M||(M={}));const _=e=>e&&e.scaleFactor?e.scaleFactor:1,b=96/72;class z{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new r,this._cimResourceManager=new h$1,this._rasterizer=new c$1(this._cimResourceManager);}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,a,i,r,o,s,n){if(!e)return null;const{data:g}=e;if(!g||"CIMSymbolReference"!==g.type||!g.symbol)return null;const{symbol:u}=g;o||(o=O(u));const d=await ne.resolveSymbolOverrides(g,t,this._spatialReference,r,o,s,n);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const y=this._imageDataCanvas,p=this._cimResourceManager,w=[];ie.fetchResources(d,p,w),ie.fetchFonts(d,p,w),w.length>0&&await Promise.all(w);const{width:C,height:M}=a,_=v(o,C,M,i),z=ie.getEnvelope(d,_,p);if(!z)return null;const I=(window.devicePixelRatio||1)*b;let x=1,R=0,P=0;switch(u.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;z.width>C&&(e=C/z.width);let t=1;z.height>M&&(t=M/z.height),"preview"===i&&(z.width<C&&(e=C/z.width),z.height<M&&(t=M/z.height)),x=Math.min(e,t),R=z.x+z.width/2,P=z.y+z.height/2;}break;case"CIMLineSymbol":{let e=1;z.height>M&&(e=M/z.height),x=e,P=z.y+z.height/2;const t=z.x*x+C/2,a=(z.x+z.width)*x+C/2;if(t<0){const{paths:e}=_;e[0][0][0]-=t;}if(a>C){const{paths:e}=_;e[0][2][0]-=a-C;}}break;case"CIMPolygonSymbol":{R=z.x+z.width/2,P=z.y+z.height/2;const e=z.x*x+C/2,t=(z.x+z.width)*x+C/2,a=z.y*x+M/2,i=(z.y+z.height)*x+M/2,{rings:r}=_;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),a<0&&(r[0][0][1]+=a,r[0][1][1]+=a,r[0][4][1]+=a),t>C&&(r[0][1][0]-=t-C,r[0][2][0]-=t-C),i>M&&(r[0][2][1]+=i-M,r[0][3][1]+=i-M);}}y.width=C*I,y.height=M*I;const D=1;y.width+=2*D,y.height+=2*D;const S=y.getContext("2d"),k=Q.createIdentity();k.translate(-R,-P),k.scale(x*I,-x*I),k.translate(C*I/2+D,M*I/2+D),S.clearRect(0,0,y.width,y.height);return new et(S,p,k,!0).drawSymbol(d,_),S.getImageData(0,0,y.width,y.height)}async analyzeCIMSymbol3D(e,t,a,r,s$1){const n=[],c=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null,l=[];ie.fetchFonts(e.data.symbol,this._cimResourceManager,l),await Promise.all(l);const h=new G(this._cimResourceManager,c);let g;await h.analyzeSymbolReference(e.data,this._avoidSDF,n),s(s$1);for(const i of n)"CIMPictureMarker"!==i.cim.type&&"CIMPictureFill"!==i.cim.type&&"CIMPictureStroke"!==i.cim.type||(g||(g=[]),g.push(this._fetchPictureMarkerResource(i,s$1))),a&&"text"===i.type&&"string"==typeof i.text&&i.text.includes("[")&&(i.text=c$2(a,i.text,i.cim.textCase));return g&&await Promise.all(g),n}rasterizeCIMSymbol3D(e,t$1,a,i,r,o){const s=[];for(const n of e){i&&"function"==typeof i.scaleFactor&&(i.scaleFactor=i.scaleFactor(t$1,r,o));const e=this._getRasterizedResource(n,t$1,a,i,r,o);if(!e)continue;let c=0,l=e.anchorX||0,h=e.anchorY||0,m=!1,g=0,u=0;if("esriGeometryPoint"===a){const e=_(i);if(g=t(n.offsetX,t$1,r,o)*e||0,u=t(n.offsetY,t$1,r,o)*e||0,"marker"===n.type)c=t(n.rotation,t$1,r,o)||0,m=n.rotateClockwise??!1;else if("text"===n.type){if(c=t(n.angle,t$1,r,o)||0,void 0!==n.horizontalAlignment)switch(n.horizontalAlignment){case"left":l=-.5;break;case"right":l=.5;break;default:l=0;}if(void 0!==n.verticalAlignment)switch(n.verticalAlignment){case"top":h=.5;break;case"bottom":h=-.5;break;case"baseline":h=-.25;break;default:h=0;}}}null!=e&&s.push({angle:c,rotateClockWise:m,anchorX:l,anchorY:h,offsetX:g,offsetY:u,rasterizedResource:e});}return this.getSymbolImage(s)}getSymbolImage(e){const t=document.createElement("canvas"),i=u$1(t.getContext("2d"));let o=0,s=0,n=0,c=0;const l=[];for(let a=0;a<e.length;a++){const t=e[a],h=t.rasterizedResource;if(!h)continue;const m=h.size,g=t.offsetX,u=t.offsetY,f=t.anchorX,d=t.anchorY,y=t.rotateClockWise||!1;let p=t.angle,w=u$2(g)-m[0]*(.5+f),C=u$2(u)-m[1]*(.5+d),M=w+m[0],_=C+m[1];if(p){y&&(p=-p);const e=Math.sin(p*Math.PI/180),t=Math.cos(p*Math.PI/180),a=w*t-C*e,i=w*e+C*t,r=w*t-_*e,o=w*e+_*t,s=M*t-_*e,n=M*e+_*t,c=M*t-C*e,l=M*e+C*t;w=Math.min(a,r,s,c),C=Math.min(i,o,n,l),M=Math.max(a,r,s,c),_=Math.max(i,o,n,l);}o=w<o?w:o,s=C<s?C:s,n=M>n?M:n,c=_>c?_:c;const b=i.createImageData(h.size[0],h.size[1]);b.data.set(new Uint8ClampedArray(h.image.buffer));const z={offsetX:g,offsetY:u,rotateClockwise:y,angle:p,rasterizedImage:b,anchorX:f,anchorY:d};l.push(z);}t.width=n-o,t.height=c-s;const h=-o,m=c;for(let a=0;a<l.length;a++){const e=l[a],t=this._imageDataToCanvas(e.rasterizedImage),o=e.rasterizedImage.width,s=e.rasterizedImage.height,n=h-o*(.5+e.anchorX),c=m-s*(.5-e.anchorY);if(e.angle){const a=(360-e.angle)*Math.PI/180;i.save(),i.translate(u$2(e.offsetX),-u$2(e.offsetY)),i.translate(h,m),i.rotate(a),i.translate(-h,-m),i.drawImage(t,n,c),i.restore();}else i.drawImage(t,n+u$2(e.offsetX),c-u$2(e.offsetY));}const g=new p({x:h/t.width-.5,y:m/t.height-.5});return {imageData:0!==t.width&&0!==t.height?i.getImageData(0,0,t.width,t.height):i.createImageData(1,1),anchorPosition:g}}async _fetchPictureMarkerResource(e,a){const i=e.materialHash;if(!this._pictureMarkerCache.get(i)){const r=(await j(e.cim.url,{responseType:"image",signal:a&&a.signal})).data;this._pictureMarkerCache.set(i,r);}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,i=u$1(t.getContext("2d"));return t.width=e.width,t.height=e.height,i.putImageData(e,0,0),t}_imageTo32Array(t,i,r,o){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const s=this._imageDataCanvas,n=u$1(s.getContext("2d"));if(s.width=i,s.height=r,n.drawImage(t,0,0,i,r),o){n.save();const a=new h$2(o);n.fillStyle=a.toHex(),n.globalCompositeOperation="multiply",n.fillRect(0,0,i,r),n.globalCompositeOperation="destination-atop",n.drawImage(t,0,0,i,r),n.restore();}return new Uint32Array(n.getImageData(0,0,i,r).data.buffer)}_getRasterizedResource(e,t$1,i,r,o,s){let n,c,l;const h=null,m=null;if("text"===e.type)return this._rasterizeTextResource(e,t$1,r,o,s);({analyzedCIM:n,hash:c}=I(e,t$1,o,s));const g=_(r);if("CIMPictureMarker"===e.cim.type){const i=t(e.size,t$1,o,s)*g,{image:r,width:n,height:c}=u$1(this._getPictureResource(e,i,t(e.color,t$1,o,s)));return l={image:r,size:[n,c],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},l}m$1(n,g,{preserveOutlineWidth:!1});const u=n;c+=i,r&&(c+=JSON.stringify(r));const f=this._resourceCache;return f.has(c)?f.get(c):(l=this._rasterizer.rasterizeJSONResource({cim:u,type:e.type,url:e.url,mosaicHash:c,size:h,path:m},window.devicePixelRatio||1,this._avoidSDF),f.set(c,l),l)}_rasterizeTextResource(e,t$1,a,i,r){const o=_(a),s=t(e.text,t$1,i,r);if(!s||0===s.length)return null;const n=e.cim,c=t(n?.fontFamilyName||e.fontName,t$1,i,r),l=t(n?.font?.style||e.style,t$1,i,r),h=t(n?.font?.weight||e.weight,t$1,i,r),m=t(n?.font?.decoration||e.decoration,t$1,i,r),g=t(e.size,t$1,i,r)*o,u=t(e.horizontalAlignment,t$1,i,r),f=t(e.verticalAlignment,t$1,i,r),d=r$1(t(e.color,t$1,i,r)),w=r$1(t(e.outlineColor,t$1,i,r)),C=t(e.outlineSize,t$1,i,r),M=null!=e.backgroundColor?r$1(e.backgroundColor):null,b=null!=e.borderLineColor?r$1(e.borderLineColor):null,z=null!=e.borderLineWidth?e.borderLineWidth:null,v={color:d,size:g,horizontalAlignment:u,verticalAlignment:f,font:{family:c,style:l,weight:h,decoration:m},halo:{size:C||0,color:w,style:l},backgroundColor:M,borderLine:null!=b&&null!=z?{color:b,size:z}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(s,v)}_getPictureResource(e,t,a){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const o=i.height/i.width,s=t?o>1?u$2(t):u$2(t)/o:i.width,n=t?o>1?u$2(t)*o:u$2(t):i.height;return {image:this._imageTo32Array(i,s,n,a),width:s,height:n}}}function v(e,t,a,i){const r=1,o=-t/2+r,s=t/2-r,n=a/2-r,c=-a/2+r;switch(e){case"esriGeometryPoint":return {x:0,y:0};case"esriGeometryPolyline":return {paths:[[[o,0],[0,0],[s,0]]]};default:return "legend"===i?{rings:[[[o,n],[s,0],[s,c],[o,c],[o,n]]]}:{rings:[[[o,n],[s,n],[s,c],[o,c],[o,n]]]}}}function I(e,t,a,i){let r,o;if("function"==typeof e.materialHash){r=(0,e.materialHash)(t,a,i),o=V(e.cim,e.materialOverrides);}else r=e.materialHash,o=e.cim;return {analyzedCIM:o,hash:r}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const c=new z(null,!0),h=e(t$1.size),m=e(t$1.maxSize),u=e(t$1.lineWidth),f=1;function y(e){const t=e?.size;if("number"==typeof t)return {width:t,height:t};return {width:null!=t&&"object"==typeof t&&"width"in t?t.width:null,height:null!=t&&"object"==typeof t&&"height"in t?t.height:null}}async function d(e,r={}){const{node:a,opacity:d,symbolConfig:g}=r,p=null!=g&&"object"==typeof g&&"isSquareFill"in g&&g.isSquareFill,w=r.cimOptions||r,b=w.geometryType||O(e?.data?.symbol),M$1=y(r),{feature:j,fieldMap:v}=w;if(null==M$1.width||null==M$1.height){const t=await ne.resolveSymbolOverrides(e.data,j,null,v,b);if(!t)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:t},e.data.primitiveOverrides=void 0;const r=[];ie.fetchResources(t,c.resourceManager,r),ie.fetchFonts(t,c.resourceManager,r),r.length>0&&await Promise.all(r);const n=ie.getEnvelope(t,null,c.resourceManager),o=n?.width,a=n?.height;M$1.width="esriGeometryPolygon"===b?h:"esriGeometryPolyline"===b?u:null!=o&&isFinite(o)?Math.min(o,m):h,M$1.height="esriGeometryPolygon"===b?h:null!=a&&isFinite(a)?Math.max(Math.min(a,m),f):h;}const S=await c.rasterizeCIMSymbolAsync(e,j,M$1,p||"esriGeometryPolygon"!==b?M.Preview:M.Legend,v,b);if(!S)return null;const{width:C,height:L}=S,I=document.createElement("canvas");I.width=C,I.height=L;I.getContext("2d").putImageData(S,0,0);const P=u$2(M$1.width),x=u$2(M$1.height),z=new Image(P,x);z.src=I.toDataURL(),z.ariaLabel=r.ariaLabel??null,z.alt=r.ariaLabel??"",null!=d&&(z.style.opacity=`${d}`);let F=z;if(null!=r.effectView){const e={shape:{type:"image",x:0,y:0,width:P,height:x,src:z.src},fill:null,stroke:null,offset:[0,0]};F=l([[e]],[P,x],{effectView:r.effectView,ariaLabel:r.ariaLabel});}return a&&F&&a.appendChild(F),F}

export { d as previewCIMSymbol };

//# sourceMappingURL=previewCIMSymbol-dfdae1ad.js.map