import{a as e}from"./p-21ae9bf7.js";import{i as t,g as o}from"./p-52a9dec5.js";import{e as i}from"./p-de65f975.js";import{d9 as n,ej as r,fP as s,cp as a,fx as l,cV as c,fw as u,cW as h,eo as d,f6 as v,ec as f,fD as m,e9 as p,e6 as g,ef as x,ba as w,jV as b,er as C,bB as y,b as T,a2 as A,iK as S,gA as _,fh as M,jW as L,w as O,jX as R,ay as I,aw as P,fS as E,s as N,aj as F,d6 as D,aZ as z,jH as V,jY as $,jZ as H,ed as B,a9 as G,dL as U,fU as j,fi as W,j_ as k,j$ as q,eB as X,eC as K,k0 as Q,l as Z,ei as Y,fE as J,fF as ee,y as te,n as oe,a3 as ie,e5 as ne,en as re,h as se,e7 as ae,ey as le,e8 as ce,iR as ue,be as he,e as de,cK as ve,iV as fe,k1 as me,eq as pe,jI as ge}from"./p-b54724b6.js";import{o as xe,r as we,e as be}from"./p-cc24e5bd.js";import{x as Ce,c as ye,y as Te,u as Ae,q as Se,i as _e,L as Me,O as Le,E as Oe}from"./p-76eeb521.js";import{r as Re,n as Ie,u as Pe}from"./p-1cec84d0.js";import{l as Ee,n as Ne,o as Fe,f as De,a as ze,u as Ve,t as $e,b as He,c as Be}from"./p-8a0d6d4b.js";import{t as Ge}from"./p-295917b5.js";import{t as Ue,e as je}from"./p-07f12c16.js";import{c as We,i as ke}from"./p-2d1dac84.js";import{e as qe}from"./p-c7303555.js";import{t as Xe}from"./p-db9ccfea.js";import{t as Ke}from"./p-ca78c285.js";import{t as Qe,u as Ze,N as Ye,a as Je,i as et,n as tt,e as ot}from"./p-25e77904.js";import{y as it,t as nt}from"./p-c736af50.js";import{s as rt,H as st}from"./p-673b0971.js";import{s as at,_ as lt}from"./p-80e8e171.js";import{v as ct}from"./p-779af821.js";import{O as ut}from"./p-2570f2bd.js";import{L as ht,f as dt,G as vt,D as ft,E as mt,I as pt,O as gt}from"./p-13e550f5.js";import{T as xt,E as wt,b as bt,a as Ct}from"./p-49f0006c.js";import{l as yt}from"./p-e75aa2b5.js";import{o as Tt,n as At,a as St}from"./p-8e3fbd83.js";import{o as _t,r as Mt,W as Lt,c as Ot,A as Rt,h as It,l as Pt,a as Et,_ as Nt,b as Ft,S as Dt}from"./p-71f41146.js";import{S as zt}from"./p-cc3f40fb.js";import{e as Vt}from"./p-603bf978.js";import{n as $t}from"./p-b4b7d6a0.js";import{n as Ht}from"./p-d9618e4e.js";import{r as Bt}from"./p-74887bd8.js";import"./p-1fd43aa6.js";import{n as Gt}from"./p-783b6965.js";class Ut{constructor(e,t,o=!1,i=t){this.data=e,this.size=t,this.exclusive=o,this.stride=i}}function jt(e,t=!1){return e<=n?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function Wt(e){if(null==e)return null;const o=null!=e.offset?e.offset:We,i=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:ke,r=Ue(1,0,0,0,1,0,o[0],o[1],1),s=Ue(Math.cos(i),-Math.sin(i),0,Math.sin(i),Math.cos(i),0,0,0,1),a=Ue(n[0],0,0,0,n[1],0,0,0,1),l=je();return t(l,s,a),t(l,r,l),l}class kt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class qt{constructor(e,t,o){this.name=e,this.lodThreshold=t,this.pivotOffset=o,this.stageResources=new kt,this.numberOfVertices=0}}function Xt(e){if(e.length<n)return Array.from(e);if(r(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return s(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}class Kt{constructor(e,t,o,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=o,this.position=i,this._children=void 0,rt(e.length>=1),rt(o.length%this._numIndexPerPrimitive==0),rt(o.length>=e.length*this._numIndexPerPrimitive),rt(3===i.size||4===i.size);const{data:n,size:r}=i,s=e.length;let a=r*o[this._numIndexPerPrimitive*e[0]];Qt.clear(),Qt.push(a);const u=h(n[a],n[a+1],n[a+2]),v=d(u);for(let t=0;t<s;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){a=r*o[i+e],Qt.push(a);let t=n[a];u[0]=Math.min(t,u[0]),v[0]=Math.max(t,v[0]),t=n[a+1],u[1]=Math.min(t,u[1]),v[1]=Math.max(t,v[1]),t=n[a+2],u[2]=Math.min(t,u[2]),v[2]=Math.max(t,v[2])}}this.bbMin=u,this.bbMax=v;const f=l(c(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(v[0]-u[0],v[1]-u[1]),v[2]-u[2]);let m=this.radius*this.radius;for(let e=0;e<Qt.length;++e){a=Qt.at(e);const t=n[a]-f[0],o=n[a+1]-f[1],i=n[a+2]-f[2],r=t*t+o*o+i*i;if(r<=m)continue;const s=Math.sqrt(r),l=.5*(s-this.radius);this.radius=this.radius+l,m=this.radius*this.radius;const c=l/s;f[0]+=t*c,f[1]+=o*c,f[2]+=i*c}this.center=f,Qt.clear()}getChildren(){if(this._children||u(this.bbMin,this.bbMax)<=1)return this._children;const e=l(c(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,o=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:n,size:r}=this.position;for(let s=0;s<t;++s){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[s];let l=r*this.indices[a],c=n[l],u=n[l+1],h=n[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=r*this.indices[a+e];const t=n[l],o=n[l+1],i=n[l+2];t<c&&(c=t),o<u&&(u=o),i<h&&(h=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),o[s]=t,++i[t]}let s=0;for(let e=0;e<8;++e)i[e]>0&&++s;if(s<2)return;const a=new Array(8);for(let e=0;e<8;++e)a[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=o[e];a[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==a[e]&&this._children.push(new Kt(a[e],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Qt.prune()}}const Qt=new a({deallocator:null});class Zt{constructor(){this.id=v()}unload(){}}var Yt;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(Yt||(Yt={}));function Jt(e){return e?{p0:d(e.p0),p1:d(e.p1),p2:d(e.p2)}:{p0:c(),p1:c(),p2:c()}}function eo(e,t,o){return f(to,t,e),f(oo,o,e),m(p(to,to,oo))/2}new at(ct);new at((()=>Jt()));const to=c(),oo=c();function io(e,t,o){if(!e||!t)return!1;const{size:i,data:n}=e;g(o,0,0,0),g(co,0,0,0);let r=0,s=0;for(let e=0;e<t.length-2;e+=3){const a=t[e]*i,l=t[e+1]*i,c=t[e+2]*i;g(so,n[a],n[a+1],n[a+2]),g(ao,n[l],n[l+1],n[l+2]),g(lo,n[c],n[c+1],n[c+2]);const u=eo(so,ao,lo);u?(x(so,so,ao),x(so,so,lo),w(so,so,1/3*u),x(o,o,so),r+=u):(x(co,co,so),x(co,co,ao),x(co,co,lo),s+=3)}return(0!==s||0!==r)&&(0!==r?(w(o,o,1/r),!0):0!==s&&(w(o,co,1/s),!0))}function no(e,t,o){if(!e||!t)return!1;const{size:i,data:n}=e;g(o,0,0,0);let r=-1,s=0;for(let e=0;e<t.length;e++){const a=t[e]*i;r!==a&&(o[0]+=n[a],o[1]+=n[a+1],o[2]+=n[a+2],s++),r=a}return s>1&&w(o,o,1/s),s>0}function ro(e,t,o,i){if(!e)return!1;g(i,0,0,0),g(co,0,0,0);let n=0,r=0;const{size:s,data:a}=e,l=t?t.length-1:a.length/s-1,c=l+(o?2:0);for(let e=0;e<c;e+=2){const o=e<l?e:l,c=e<l?e+1:0,u=(t?t[o]:o)*s,h=(t?t[c]:c)*s;so[0]=a[u],so[1]=a[u+1],so[2]=a[u+2],ao[0]=a[h],ao[1]=a[h+1],ao[2]=a[h+2],w(so,x(so,so,ao),.5);const d=b(so,ao);d>0?(x(i,i,w(so,so,d)),n+=d):0===n&&(x(co,co,so),r++)}return 0!==n?(w(i,i,1/n),!0):0!==r&&(w(i,co,1/r),!0)}const so=c(),ao=c(),lo=c(),co=c();class uo{constructor(e){this.channel=e,this.id=v()}}function ho(e,t){return null==e&&(e=[]),e.push(t),e}function vo(e,t){if(null==e)return null;const o=e.filter((e=>e!==t));return 0===o.length?null:o}class fo extends Zt{constructor(e,t,o=[],i=null,n=Yt.Mesh,r=null,s=-1){super(),this.material=e,this.mapPositions=i,this.type=n,this.objectAndLayerIdColor=r,this.edgeIndicesLength=s,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,o]of t)o&&this._vertexAttributes.set(e,{...o});if(null==o||0===o.length){const e=mo(this._vertexAttributes),t=it(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,t]of o)t&&(this._indices.set(e,nt(t)),e===ut.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}instantiate(e={}){const t=new fo(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,o)=>{e.exclusive=!1,t._vertexAttributes.set(o,e)})),this._indices.forEach(((e,o)=>t._indices.set(o,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:Xt(t.data)},this._vertexAttributes.set(e,t)),t}setAttributeData(e,t){const o=this._vertexAttributes.get(e);o&&this._vertexAttributes.set(e,{...o,exclusive:!0,data:t})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Yt.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Yt.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&C(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(ut.POSITION),o=this.vertexAttributes.get(ut.POSITION);return io(o,t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(ut.POSITION),o=this.indices.get(ut.POSITION);return ro(t,o,o&&po(this.material.parameters,t,o),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(ut.POSITION),o=this.vertexAttributes.get(ut.POSITION);return no(o,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(ut.POSITION),t=this.vertexAttributes.get(ut.POSITION);if(!e||0===e.length||!t)return null;const o=this.type===Yt.Mesh?3:1;rt(e.length%o==0,"Indexing error: "+e.length+" not divisible by "+o);const i=it(e.length/o);return new Kt(i,o,e,t)}get transformation(){return this._transformation??xe}set transformation(e){this._transformation=e&&e!==xe?we(e):null}get shaderTransformation(){return null!=this._shaderTransformer?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return null!=this._shaderTransformer}addHighlight(){const e=new uo(Qe.Highlight);return this.highlights=ho(this.highlights,e),e}removeHighlight(e){this.highlights=vo(this.highlights,e)}}function mo(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function po(e,t,o){return!(!("isClosed"in e)||!e.isClosed)&&(o?o.length>2:t.data.length>6)}function go(){if(null==xo){const e=e=>y(`esri/libs/basisu/${e}`);xo=import("./p-eba29d9f.js").then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return xo}let xo;var wo;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(wo||(wo={}));let bo=null,Co=null;async function yo(){return null==Co&&(Co=go(),bo=await Co),Co}function To(e,t){if(null==bo)return e.byteLength;const o=new bo.BasisFile(new Uint8Array(e)),i=_o(o)?So(o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),t):0;return o.close(),o.delete(),i}function Ao(e,t){if(null==bo)return e.byteLength;const o=new bo.KTX2File(new Uint8Array(e)),i=Mo(o)?So(o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),t):0;return o.close(),o.delete(),i}function So(e,t,o,i,n){const r=wt(t?dt.COMPRESSED_RGBA8_ETC2_EAC:dt.COMPRESSED_RGB8_ETC2),s=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(o*i*r*s)}function _o(e){return e.getNumImages()>=1&&!e.isUASTC()}function Mo(e){return e.getFaces()>=1&&e.isETC1S()}async function Lo(e,t,o){null==bo&&(bo=await yo());const i=new bo.BasisFile(new Uint8Array(o));if(!_o(i))return null;i.startTranscoding();const n=Ro(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,o)=>i.transcodeImage(o,0,e,t,0,0)));return i.close(),i.delete(),n}async function Oo(e,t,o){null==bo&&(bo=await yo());const i=new bo.KTX2File(new Uint8Array(o));if(!Mo(i))return null;i.startTranscoding();const n=Ro(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,o)=>i.transcodeImage(o,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}function Ro(e,t,o,i,n,r,s,a){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,h]=l?i?[wo.ETC2_RGBA,dt.COMPRESSED_RGBA8_ETC2_EAC]:[wo.ETC1_RGB,dt.COMPRESSED_RGB8_ETC2]:c?i?[wo.BC3_RGBA,dt.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[wo.BC1_RGB,dt.COMPRESSED_RGB_S3TC_DXT1_EXT]:[wo.RGBA32,vt.RGBA],d=t.hasMipmap?o:Math.min(1,o),v=[];for(let e=0;e<d;e++)v.push(new Uint8Array(s(e,u))),a(e,u,v[e]);return t.internalFormat=h,t.hasMipmap=v.length>1,t.samplingMode=t.hasMipmap?ht.LINEAR_MIPMAP_LINEAR:ht.LINEAR,t.width=n,t.height=r,new xt(e,t,{type:"compressed",levels:v})}const Io=T.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Po=542327876,Eo=131072,No=4;function Fo(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Do(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const zo=Fo("DXT1"),Vo=Fo("DXT3"),$o=Fo("DXT5"),Ho=31,Bo=0,Go=1,Uo=2,jo=3,Wo=4,ko=7,qo=20,Xo=21;function Ko(e,t,o){const i=Qo(o,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:r,width:s,height:a}=i;return t.samplingMode=n.levels.length>1?ht.LINEAR_MIPMAP_LINEAR:ht.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=r,t.width=s,t.height=a,new xt(e,t,n)}function Qo(e,t){const o=new Int32Array(e,0,Ho);if(o[Bo]!==Po)return Io.error("Invalid magic number in DDS header"),null;if(!(o[qo]&No))return Io.error("Unsupported format, must contain a FourCC code"),null;const i=o[Xo];let n,r;switch(i){case zo:n=8,r=dt.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Vo:n=16,r=dt.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case $o:n=16,r=dt.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Io.error("Unsupported FourCC code:",Do(i)),null}let s=1,a=o[Wo],l=o[jo];0==(3&a)&&0==(3&l)||(Io.warn("Rounding up compressed texture size to nearest multiple of 4."),a=a+3&-4,l=l+3&-4);const c=a,u=l;let h,d;o[Uo]&Eo&&!1!==t&&(s=Math.max(1,o[ko]));let v=o[Go]+4;const f=[];for(let t=0;t<s;++t)d=(a+3>>2)*(l+3>>2)*n,h=new Uint8Array(e,v,d),f.push(h),v+=d,a=Math.max(1,a>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:r,width:c,height:u}}class Zo extends Zt{constructor(e,t){super(),this._data=e,this.type=Yt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new A,this.parameters=t||{},this.parameters.mipmap=!1!==this.parameters.mipmap,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:ft.REPEAT,t:ft.REPEAT},this._startPreload(e)}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(S(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){_(e.src)||S(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const t=new bt;return t.wrapMode=this.parameters.wrap??ft.REPEAT,t.flipped=!this.parameters.noUnpackFlip,t.samplingMode=this.parameters.mipmap?ht.LINEAR_MIPMAP_LINEAR:ht.LINEAR,t.hasMipmap=!!this.parameters.mipmap,t.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,t.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||Yo(this._data,this.parameters)}load(e){if(null!=this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new xt(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(M(t)||L(t))&&this.parameters.encoding===Ze.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,t)):(M(t)||L(t))&&this.parameters.encoding===Ze.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,t)):(M(t)||L(t))&&this.parameters.encoding===Ze.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,t)):L(t)?this._loadFromPixelData(e,t):M(t)?this._loadFromPixelData(e,new Uint8Array(t)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&null!=this._glTexture?this._data.readyState<ei.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,t){return this._glTexture=Ko(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Oo(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>Lo(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){rt(this.parameters.width>0&&this.parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=1===this.parameters.components?vt.LUMINANCE:3===this.parameters.components?vt.RGB:vt.RGBA,o.width=this.parameters.width??0,o.height=this.parameters.height??0,this._glTexture=new xt(e,o,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async o=>{const i=await Ke(t,{signal:o});return O(o),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async o=>{const i=await R(t,t.src,!1,o);return O(o),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=ei.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((o=>new Promise(((i,n)=>{const r=()=>{t.removeEventListener("loadeddata",s),t.removeEventListener("error",a),F(l)},s=()=>{t.readyState>=ei.HAVE_CURRENT_DATA&&(r(),i(this._loadFromImage(e,t)))},a=e=>{r(),n(e||new N("Failed to load video"))};t.addEventListener("loadeddata",s),t.addEventListener("error",a);const l=I(o,(()=>a(P())))}))))}_loadFromImage(e,t){const o=Jo(t);this.parameters.width=o.width,this.parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this.parameters.components?vt.RGB:vt.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new xt(e,i,t),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const o=e(t.signal);this._loadingPromise=o;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=E(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Yo(e,t){if(null==e)return 0;if(M(e)||L(e))return t.encoding===Ze.KTX2_ENCODING?Ao(e,!!t.mipmap):t.encoding===Ze.BASIS_ENCODING?To(e,!!t.mipmap):e.byteLength;const{width:o,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Jo(e):t;return(t.mipmap?4/3:1)*o*i*(t.components||4)||0}function Jo(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var ei;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ei||(ei={}));var ti;!function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(ti||(ti={}));function oi(e,t){switch(t.normalType){case ii.Compressed:e.attributes.add(ut.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(Tt`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case ii.Attribute:e.attributes.add(ut.NORMAL,"vec3"),e.vertex.code.add(Tt`vec3 normalModel() {
return normal;
}`);break;case ii.ScreenDerivative:e.fragment.code.add(Tt`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:case ii.COUNT:case ii.Ground:}}var ii;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(ii||(ii={}));function ni(e,t){const o=e.fragment;switch(o.code.add(Tt`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case ri.None:o.code.add(Tt`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ri.View:o.code.add(Tt`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ri.WindingOrder:o.code.add(Tt`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:case ri.COUNT:}}var ri;!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(ri||(ri={}));var si;function ai(e,t){switch(t.textureCoordinateType){case si.Default:return e.attributes.add(ut.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Tt`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case si.Compressed:return e.attributes.add(ut.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Tt`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case si.Atlas:return e.attributes.add(ut.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(ut.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(Tt`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:case si.None:return void e.vertex.code.add(Tt`void forwardTextureCoordinates() {}`);case si.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(si||(si={}));function li(e){e.fragment.code.add(Tt`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function ci(e,t){switch(e.include(ai,t),t.textureCoordinateType){case si.Default:case si.Compressed:return void e.fragment.code.add(Tt`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case si.Atlas:return e.include(li),void e.fragment.code.add(Tt`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:case si.None:case si.COUNT:return}}var ui;!function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(ui||(ui={}));class hi{constructor(e,t,o,i,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[ui.Pass]:null,[ui.Draw]:null},null!=o&&null!=i&&(this.bind[o]=i)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class di extends hi{constructor(e,t){super(e,"vec3",ui.Draw,((o,i,n,r)=>o.setUniform3fv(e,t(i,n,r))))}}class vi extends hi{constructor(e,t){super(e,"vec3",ui.Pass,((o,i,n)=>o.setUniform3fv(e,t(i,n))))}}class fi extends hi{constructor(e,t){super(e,"sampler2D",ui.Draw,((o,i,n)=>o.bindTexture(e,t(i,n))))}}class mi extends hi{constructor(e,t){super(e,"sampler2D",ui.Pass,((o,i,n)=>o.bindTexture(e,t(i,n))))}}class pi{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return Ye.LOADED}}class gi extends pi{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=D(this._texture),this._textureNormal=D(this._textureNormal),this._textureEmissive=D(this._textureEmissive),this._textureOcclusion=D(this._textureOcclusion),this._textureMetallicRoughness=D(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?Ye.LOADED:Ye.LOADING}get textureBindParameters(){return new xi(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=D(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const o=this._textureRepository.acquire(e);if(z(o))return++this._numLoading,void o.then((e=>{if(this._disposed)return D(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(o)}}class xi extends At{constructor(e=null,t=null,o=null,i=null,n=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=n}}var wi;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(wi||(wi={}));function bi(e,t){const o=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===wi.Normal&&i&&e.include(ci,t),t.pbrMode!==wi.Schematic)if(t.pbrMode!==wi.Disabled){if(t.pbrMode===wi.Normal){o.code.add(Tt`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(o.uniforms.add(e===ui.Pass?new mi("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new fi("texMetallicRoughness",(e=>e.textureMetallicRoughness))),o.code.add(Tt`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add(e===ui.Pass?new mi("texEmission",(e=>e.textureEmissive)):new fi("texEmission",(e=>e.textureEmissive))),o.code.add(Tt`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add(e===ui.Pass?new mi("texOcclusion",(e=>e.textureOcclusion)):new fi("texOcclusion",(e=>e.textureOcclusion))),o.code.add(Tt`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(Tt`float getBakedOcclusion() { return 1.0; }`),e===ui.Pass?o.uniforms.add(new vi("emissionFactor",(e=>e.emissiveFactor)),new vi("mrrFactors",(e=>e.mrrFactors))):o.uniforms.add(new di("emissionFactor",(e=>e.emissiveFactor)),new di("mrrFactors",(e=>e.mrrFactors))),o.code.add(Tt`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?Tt`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?Tt`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?Tt`applyEmission(${t.hasEmissiveTextureTransform?Tt`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?Tt`applyOcclusion(${t.hasOcclusionTextureTransform?Tt`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else o.code.add(Tt`float getBakedOcclusion() { return 1.0; }`);else o.code.add(Tt`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const Ci=new Map([[ut.POSITION,0],[ut.NORMAL,1],[ut.NORMALCOMPRESSED,1],[ut.UV0,2],[ut.COLOR,3],[ut.COLORFEATUREATTRIBUTE,3],[ut.SIZE,4],[ut.TANGENT,4],[ut.AUXPOS1,5],[ut.SYMBOLCOLOR,5],[ut.AUXPOS2,6],[ut.FEATUREATTRIBUTE,6],[ut.INSTANCEFEATUREATTRIBUTE,6],[ut.INSTANCECOLOR,7],[ut.OBJECTANDLAYERIDCOLOR,7],[ut.INSTANCEOBJECTANDLAYERIDCOLOR,7],[ut.MODEL,8],[ut.MODELNORMAL,12],[ut.MODELORIGINHI,11],[ut.MODELORIGINLO,15]]);function yi(e){return Math.abs(e*e*e)}function Ti(e,t,o){const i=o.parameters,n=o.paddingPixelsOverride;return Mi.scale=Math.min(i.divisor/(t-i.offset),1),Mi.factor=yi(e),Mi.minPixelSize=i.minPixelSize,Mi.paddingPixels=n,Mi}function Ai(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function Si(e,t){return Math.max(V(e*t.scale,e,t.factor),Ai(e,t))}function _i(e,t,o,i){return Si(e,Ti(t,o,i))}const Mi={scale:0,factor:0,minPixelSize:0,paddingPixels:0};const Li=U();function Oi(e,t,o,i,n,r){if(e.visible)if(e.boundingInfo){rt(e.type===Yt.Mesh);const s=t.tolerance;Ii(e.boundingInfo,o,i,s,n,r)}else{const t=e.indices.get(ut.POSITION),s=e.vertexAttributes.get(ut.POSITION);Ei(o,i,0,t.length/3,t,s,void 0,n,r)}}const Ri=c();function Ii(e,t,o,i,n,r){if(null==e)return;const s=Vi(t,o,Ri);if($(Li,e.bbMin),H(Li,e.bbMax),null!=n&&n.applyToAabb(Li),$i(Li,t,s,i)){const{primitiveIndices:s,indices:a,position:l}=e,c=s?s.length:a.length/3;if(c>ki){const s=e.getChildren();if(void 0!==s){for(const e of s)Ii(e,t,o,i,n,r);return}}Ei(t,o,0,c,a,l,s,n,r)}}const Pi=c();function Ei(e,t,o,i,n,r,s,a,l){if(s)return Ni(e,t,o,i,n,r,s,a,l);const{data:c,stride:u}=r,h=e[0],d=e[1],v=e[2],f=t[0]-h,m=t[1]-d,p=t[2]-v;for(let e=o,t=3*o;e<i;++e){let o=u*n[t++],i=c[o++],r=c[o++],s=c[o];o=u*n[t++];let g=c[o++],x=c[o++],w=c[o];o=u*n[t++];let b=c[o++],C=c[o++],y=c[o];null!=a&&([i,r,s]=a.applyToVertex(i,r,s,e),[g,x,w]=a.applyToVertex(g,x,w,e),[b,C,y]=a.applyToVertex(b,C,y,e));const T=g-i,A=x-r,S=w-s,_=b-i,M=C-r,L=y-s,O=m*L-M*p,R=p*_-L*f,I=f*M-_*m,P=T*O+A*R+S*I;if(Math.abs(P)<=Number.EPSILON)continue;const E=h-i,N=d-r,F=v-s,D=E*O+N*R+F*I;if(P>0){if(D<0||D>P)continue}else if(D>0||D<P)continue;const z=N*S-A*F,V=F*T-S*E,$=E*A-T*N,H=f*z+m*V+p*$;if(P>0){if(H<0||D+H>P)continue}else if(H>0||D+H<P)continue;const B=(_*z+M*V+L*$)/P;if(B>=0){l(B,zi(T,A,S,_,M,L,Pi),e,!1)}}}function Ni(e,t,o,i,n,r,s,a,l){const{data:c,stride:u}=r,h=e[0],d=e[1],v=e[2],f=t[0]-h,m=t[1]-d,p=t[2]-v;for(let e=o;e<i;++e){const t=s[e];let o=3*t,i=u*n[o++],r=c[i++],g=c[i++],x=c[i];i=u*n[o++];let w=c[i++],b=c[i++],C=c[i];i=u*n[o];let y=c[i++],T=c[i++],A=c[i];null!=a&&([r,g,x]=a.applyToVertex(r,g,x,e),[w,b,C]=a.applyToVertex(w,b,C,e),[y,T,A]=a.applyToVertex(y,T,A,e));const S=w-r,_=b-g,M=C-x,L=y-r,O=T-g,R=A-x,I=m*R-O*p,P=p*L-R*f,E=f*O-L*m,N=S*I+_*P+M*E;if(Math.abs(N)<=Number.EPSILON)continue;const F=h-r,D=d-g,z=v-x,V=F*I+D*P+z*E;if(N>0){if(V<0||V>N)continue}else if(V>0||V<N)continue;const $=D*M-_*z,H=z*S-M*F,B=F*_-S*D,G=f*$+m*H+p*B;if(N>0){if(G<0||V+G>N)continue}else if(G>0||V+G<N)continue;const U=(L*$+O*H+R*B)/N;if(U>=0){l(U,zi(S,_,M,L,O,R,Pi),t,!1)}}}const Fi=c(),Di=c();function zi(e,t,o,i,n,r,s){return g(Fi,e,t,o),g(Di,i,n,r),p(s,Fi,Di),B(s,s),s}function Vi(e,t,o){return g(o,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function $i(e,t,o,i){return Hi(e,t,o,i,1/0)}function Hi(e,t,o,i,n){const r=(e[0]-i-t[0])*o[0],s=(e[3]+i-t[0])*o[0];let a=Math.min(r,s),l=Math.max(r,s);const c=(e[1]-i-t[1])*o[1],u=(e[4]+i-t[1])*o[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(a=Math.max(a,Math.min(c,u)),a>l)return!1;const h=(e[2]-i-t[2])*o[2],d=(e[5]+i-t[2])*o[2];return l=Math.min(l,Math.max(h,d)),!(l<0)&&(a=Math.max(a,Math.min(h,d)),!(a>l)&&a<n)}function Bi(e,t,o,i,n){let r=(o.screenLength||0)*e.pixelRatio;null!=n&&(r=_i(r,i,t,n));const s=r*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return G(s*t,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function Gi(e,t){const o=t?Gi(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=ji(i)),null==i&&t in o||(o[t]=i)}return o}function Ui(e,t){let o=!1;for(const i in t){const n=t[i];void 0!==n&&(Array.isArray(n)?null===e[i]?(e[i]=n.slice(),o=!0):j(e[i],n)&&(o=!0):e[i]!==n&&(o=!0,e[i]=n))}return o}function ji(e){const t=[];return e.forEach((e=>t.push(e))),t}const Wi={multiply:1,ignore:2,replace:3,tint:4},ki=1e3;class qi extends Zt{constructor(e,t){super(),this.type=Yt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Ci,this._pp0=h(0,0,1),this._pp1=h(0,0,0),this._parameters=Gi(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){Ui(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){null!=this.repository&&this.repository.materialChanged(this)}intersectDraped(e,t,o,i,n,r){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,o,this._pp0,this._pp1,n)}}var Xi;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(Xi||(Xi={}));var Ki;!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(Ki||(Ki={}));class Qi{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=c(),this._mbs=lt(),this._obb={center:c(),halfSize:$t(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,o){const i=e,n=t,r=o+this.componentLocalOriginLength,s=this._totalOffset/Math.sqrt(i*i+n*n+r*r);return this._tmpVertex[0]=e+i*s,this._tmpVertex[1]=t+n*s,this._tmpVertex[2]=o+r*s,this._tmpVertex}applyToAabb(e){const t=e[0],o=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],r=e[4],s=e[5]+this.componentLocalOriginLength,a=t*n<0?0:Math.min(Math.abs(t),Math.abs(n)),l=o*r<0?0:Math.min(Math.abs(o),Math.abs(r)),c=i*s<0?0:Math.min(Math.abs(i),Math.abs(s)),u=Math.sqrt(a*a+l*l+c*c);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=o<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=n>0?this._totalOffset:0,e[4]+=r>0?this._totalOffset:0,e[5]+=s>0?this._totalOffset:0,e;const h=Math.max(Math.abs(t),Math.abs(n)),d=Math.max(Math.abs(o),Math.abs(r)),v=Math.max(Math.abs(i),Math.abs(s)),f=Math.sqrt(h*h+d*d+v*v),m=this._totalOffset/f,p=this._totalOffset/u;return e[0]+=t*(t>0?m:p),e[1]+=o*(o>0?m:p),e[2]+=i*(i>0?m:p),e[3]+=n*(n<0?m:p),e[4]+=r*(r<0?m:p),e[5]+=s*(s<0?m:p),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),o=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*o,this._mbs[1]=e[1]+e[1]*o,this._mbs[2]=e[2]+e[2]*o,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,o=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*o,this._obb.center[1]=t[1]+t[1]*o,this._obb.center[2]=t[2]+t[2]*o,W(this._obb.halfSize,e.halfSize,e.quaternion),x(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,f(this._obb.halfSize,this._obb.halfSize,e.center),zt(en,e.quaternion),W(this._obb.halfSize,this._obb.halfSize,en),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class Zi{constructor(e=0){this.offset=e,this.sphere=lt(),this.tmpVertex=c()}applyToVertex(e,t,o){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*o+i[12],r=i[1]*e+i[5]*t+i[9]*o+i[13],s=i[2]*e+i[6]*t+i[10]*o+i[14];const a=this.offset/Math.sqrt(n*n+r*r+s*s);n+=n*a,r+=r*a,s+=s*a;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*n+l[4]*r+l[8]*s+l[12],this.tmpVertex[1]=l[1]*n+l[5]*r+l[9]*s+l[13],this.tmpVertex[2]=l[2]*n+l[6]*r+l[10]*s+l[14],this.tmpVertex}applyToMinMax(e,t){const o=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*o,e[1]+=e[1]*o,e[2]+=e[2]*o;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),o=this.offset/t;return this.sphere[0]=e[0]+e[0]*o,this.sphere[1]=e[1]+e[1]*o,this.sphere[2]=e[2]+e[2]*o,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Yi=new Zi;function Ji(e){return null!=e?(Yi.offset=e,Yi):null}new Qi;const en=Vt();function tn(e,t,o,i){const n=o.typedBuffer,r=o.typedBufferStride,s=e.length;i*=r;for(let o=0;o<s;++o){const s=2*e[o];n[i]=t[s],n[i+1]=t[s+1],i+=r}}function on(e,t,o,i,n){const r=o.typedBuffer,s=o.typedBufferStride,a=e.length;if(i*=s,null==n||1===n)for(let o=0;o<a;++o){const n=3*e[o];r[i]=t[n],r[i+1]=t[n+1],r[i+2]=t[n+2],i+=s}else for(let o=0;o<a;++o){const a=3*e[o];for(let e=0;e<n;++e)r[i]=t[a],r[i+1]=t[a+1],r[i+2]=t[a+2],i+=s}}function nn(e,t,o,i,n=1){const r=o.typedBuffer,s=o.typedBufferStride,a=e.length;if(i*=s,1===n)for(let o=0;o<a;++o){const n=4*e[o];r[i]=t[n],r[i+1]=t[n+1],r[i+2]=t[n+2],r[i+3]=t[n+3],i+=s}else for(let o=0;o<a;++o){const a=4*e[o];for(let e=0;e<n;++e)r[i]=t[a],r[i+1]=t[a+1],r[i+2]=t[a+2],r[i+3]=t[a+3],i+=s}}function rn(e,t,o,i,n,r=1){if(!o)return void on(e,t,i,n,r);const s=i.typedBuffer,a=i.typedBufferStride,l=e.length,c=o[0],u=o[1],h=o[2],d=o[4],v=o[5],f=o[6],m=o[8],p=o[9],g=o[10],x=o[12],w=o[13],b=o[14];n*=a;let C=0,y=0,T=0;const A=k(o)?e=>{C=t[e]+x,y=t[e+1]+w,T=t[e+2]+b}:e=>{const o=t[e],i=t[e+1],n=t[e+2];C=c*o+d*i+m*n+x,y=u*o+v*i+p*n+w,T=h*o+f*i+g*n+b};if(1===r)for(let t=0;t<l;++t)A(3*e[t]),s[n]=C,s[n+1]=y,s[n+2]=T,n+=a;else for(let t=0;t<l;++t){A(3*e[t]);for(let e=0;e<r;++e)s[n]=C,s[n+1]=y,s[n+2]=T,n+=a}}function sn(e,t,o,i,n,r=1){if(!o)return void on(e,t,i,n,r);const s=o,a=i.typedBuffer,l=i.typedBufferStride,c=e.length,u=s[0],h=s[1],d=s[2],v=s[4],f=s[5],m=s[6],p=s[8],g=s[9],x=s[10],w=!q(s),b=1e-6,C=1-b;n*=l;let y=0,T=0,A=0;const S=k(s)?e=>{y=t[e],T=t[e+1],A=t[e+2]}:e=>{const o=t[e],i=t[e+1],n=t[e+2];y=u*o+v*i+p*n,T=h*o+f*i+g*n,A=d*o+m*i+x*n};if(1===r)if(w)for(let t=0;t<c;++t){S(3*e[t]);const o=y*y+T*T+A*A;if(o<C&&o>b){const e=1/Math.sqrt(o);a[n]=y*e,a[n+1]=T*e,a[n+2]=A*e}else a[n]=y,a[n+1]=T,a[n+2]=A;n+=l}else for(let t=0;t<c;++t)S(3*e[t]),a[n]=y,a[n+1]=T,a[n+2]=A,n+=l;else for(let t=0;t<c;++t){if(S(3*e[t]),w){const e=y*y+T*T+A*A;if(e<C&&e>b){const t=1/Math.sqrt(e);y*=t,T*=t,A*=t}}for(let e=0;e<r;++e)a[n]=y,a[n+1]=T,a[n+2]=A,n+=l}}function an(e,t,o,i,n,r=1){if(!o)return void nn(e,t,i,n,r);const s=o,a=i.typedBuffer,l=i.typedBufferStride,c=e.length,u=s[0],h=s[1],d=s[2],v=s[4],f=s[5],m=s[6],p=s[8],g=s[9],x=s[10],w=!q(s),b=1e-6,C=1-b;if(n*=l,1===r)for(let o=0;o<c;++o){const i=4*e[o],r=t[i],s=t[i+1],c=t[i+2],y=t[i+3];let T=u*r+v*s+p*c,A=h*r+f*s+g*c,S=d*r+m*s+x*c;if(w){const e=T*T+A*A+S*S;if(e<C&&e>b){const t=1/Math.sqrt(e);T*=t,A*=t,S*=t}}a[n]=T,a[n+1]=A,a[n+2]=S,a[n+3]=y,n+=l}else for(let o=0;o<c;++o){const i=4*e[o],s=t[i],c=t[i+1],y=t[i+2],T=t[i+3];let A=u*s+v*c+p*y,S=h*s+f*c+g*y,_=d*s+m*c+x*y;if(w){const e=A*A+S*S+_*_;if(e<C&&e>b){const t=1/Math.sqrt(e);A*=t,S*=t,_*=t}}for(let e=0;e<r;++e)a[n]=A,a[n+1]=S,a[n+2]=_,a[n+3]=T,n+=l}}function ln(e,t,o,i,n,r=1){const s=i.typedBuffer,a=i.typedBufferStride,l=e.length;if(n*=a,o!==t.length||4!==o)if(1!==r)if(4!==o)for(let o=0;o<l;++o){const i=3*e[o];for(let e=0;e<r;++e)s[n]=t[i],s[n+1]=t[i+1],s[n+2]=t[i+2],s[n+3]=255,n+=a}else for(let o=0;o<l;++o){const i=4*e[o];for(let e=0;e<r;++e)s[n]=t[i],s[n+1]=t[i+1],s[n+2]=t[i+2],s[n+3]=t[i+3],n+=a}else{if(4===o){for(let o=0;o<l;++o){const i=4*e[o];s[n]=t[i],s[n+1]=t[i+1],s[n+2]=t[i+2],s[n+3]=t[i+3],n+=a}return}for(let o=0;o<l;++o){const i=3*e[o];s[n]=t[i],s[n+1]=t[i+1],s[n+2]=t[i+2],s[n+3]=255,n+=a}}else{s[n]=t[0],s[n+1]=t[1],s[n+2]=t[2],s[n+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),o=a/4,c=e[n/=4];n+=o;const u=l*r;for(let t=1;t<u;++t)e[n]=c,n+=o}}function cn(e,t,o,i){const n=o.typedBuffer,r=o.typedBufferStride,s=e.length,a=t[0];i*=r;for(let e=0;e<s;++e)n[i]=a,i+=r}function un(e,t,o,i,n=1){const r=t.typedBuffer,s=t.typedBufferStride;if(i*=s,1===n)for(let t=0;t<o;++t)r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2],r[i+3]=e[3],i+=s;else for(let t=0;t<o;++t)for(let t=0;t<n;++t)r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2],r[i+3]=e[3],i+=s}function hn(e,t,o,i,n,r){for(const s of t.fields.keys()){const t=e.vertexAttributes.get(s),a=e.indices.get(s);if(t&&a)dn(s,t,a,o,i,n,r);else if(s===ut.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.indices.get(ut.POSITION);if(rt(!!t,`No buffer view for ${s}`),t){const o=t.length,i=n.getField(s,Ce);un(e.objectAndLayerIdColor,i,o,r)}}}}function dn(e,t,o,i,n,r,s){switch(e){case ut.POSITION:{rt(3===t.size);const n=r.getField(e,_e);rt(!!n,`No buffer view for ${e}`),n&&rn(o,t.data,i,n,s);break}case ut.NORMAL:{rt(3===t.size);const i=r.getField(e,_e);rt(!!i,`No buffer view for ${e}`),i&&sn(o,t.data,n,i,s);break}case ut.NORMALCOMPRESSED:{rt(2===t.size);const i=r.getField(e,Se);rt(!!i,`No buffer view for ${e}`),i&&tn(o,t.data,i,s);break}case ut.UV0:{rt(2===t.size);const i=r.getField(e,Ae);rt(!!i,`No buffer view for ${e}`),i&&tn(o,t.data,i,s);break}case ut.COLOR:case ut.SYMBOLCOLOR:{const i=r.getField(e,Ce);rt(!!i,`No buffer view for ${e}`),rt(3===t.size||4===t.size),!i||3!==t.size&&4!==t.size||ln(o,t.data,t.size,i,s);break}case ut.COLORFEATUREATTRIBUTE:{const i=r.getField(e,Te);rt(!!i,`No buffer view for ${e}`),rt(1===t.size),i&&1===t.size&&cn(o,t.data,i,s);break}case ut.TANGENT:{rt(4===t.size);const i=r.getField(e,ye);rt(!!i,`No buffer view for ${e}`),i&&an(o,t.data,n,i,s);break}case ut.PROFILERIGHT:case ut.PROFILEUP:case ut.PROFILEVERTEXANDNORMAL:case ut.FEATUREVALUE:{rt(4===t.size);const i=r.getField(e,ye);rt(!!i,`No buffer view for ${e}`),i&&nn(o,t.data,i,s)}}}class vn{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(ut.POSITION).length}write(e,t,o,i,n){hn(o,this.vertexBufferLayout,e,t,i,n)}}function fn(e){e.attributes.add(ut.POSITION,"vec3"),e.vertex.code.add(Tt`vec3 positionModel() { return position; }`)}function mn({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Tt`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(Tt`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class pn extends hi{constructor(e,t){super(e,"mat3",ui.Draw,((o,i,n)=>o.setUniformMatrix3fv(e,t(i,n))))}}class gn extends hi{constructor(e,t){super(e,"mat3",ui.Pass,((o,i,n)=>o.setUniformMatrix3fv(e,t(i,n))))}}class xn extends hi{constructor(e,t){super(e,"mat4",ui.Pass,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))))}}function wn(e,t){e.include(fn);const o=e.vertex;o.include(mn,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),o.uniforms.add(new vi("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new vi("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new gn("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new xn("transformProjFromView",(e=>e.transformProjFromView)),new pn("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new di("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new di("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),o.code.add(Tt`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),o.code.add(Tt`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?Tt`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:Tt`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new vi("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),o.code.add(Tt`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(Tt`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class bn extends At{constructor(){super(...arguments),this.transformWorldFromViewTH=c(),this.transformWorldFromViewTL=c(),this.transformViewFromCameraRelativeRS=i(),this.transformProjFromView=be()}}function Cn(e,t){switch(t.normalType){case ii.Attribute:case ii.Compressed:e.include(oi,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new pn("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new gn("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(Tt`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case ii.Ground:e.include(wn,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Tt`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?Tt`normalize(vPositionWorldCameraRelative);`:Tt`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case ii.ScreenDerivative:e.vertex.code.add(Tt`void forwardNormal() {}`);break;default:case ii.COUNT:}}class yn extends bn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=i()}}const Tn=.1,An=.001;class Sn{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class _n{constructor(e,t,o){this.release=o,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=E(this._program),this._pipeline=this._configuration=null}reload(e){E(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,o){e.setPipelineState(this.getPipelineState(t,o))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return mt.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}class Mn{constructor(e,t,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new a({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(ui.Pass,this),this.bindDraw=t.generateBind(ui.Draw,this),this._fragmentUniforms=Ct()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let o=this._textures.get(e);return null==o?(o=this._allocTextureUnit(t),this._textures.set(e,o)):o.texture=t,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(t,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const Ln={mask:255},On={function:{func:pt.ALWAYS,ref:Je.OutlineVisualElementMask,mask:Je.OutlineVisualElementMask},operation:{fail:gt.KEEP,zFail:gt.KEEP,zPass:gt.ZERO}},Rn={function:{func:pt.ALWAYS,ref:Je.OutlineVisualElementMask,mask:Je.OutlineVisualElementMask},operation:{fail:gt.KEEP,zFail:gt.KEEP,zPass:gt.REPLACE}};function In({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:i,emissiveTexture:n,emissiveFactor:r,occlusionTexture:s}){return null==e&&null==t&&null==n&&(null==r||X(r,K))&&null==s&&(null==i||1===i)&&(null==o||1===o||0===o)}const Pn=[1,1,.5],En=[0,.6,.2],Nn=[0,1,.2];class Fn extends hi{constructor(e,t){super(e,"vec2",ui.Pass,((o,i,n)=>o.setUniform2fv(e,t(i,n))))}}function Dn(e){e.varyings.add("linearDepth","float")}function zn(e){e.vertex.uniforms.add(new Fn("nearFar",((e,t)=>t.camera.nearFar)))}function Vn(e){e.vertex.code.add(Tt`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function $n(e,t){const{vertex:o}=e;switch(t.output){case ti.Color:if(t.receiveShadows)return Dn(e),void o.code.add(Tt`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case ti.Depth:case ti.Shadow:case ti.ShadowHighlight:case ti.ShadowExcludeHighlight:return e.include(wn,t),Dn(e),zn(e),Vn(e),void o.code.add(Tt`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}o.code.add(Tt`void forwardLinearDepth() {}`)}function Hn(e){e.vertex.code.add(Tt`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Bn(e,t){Gn(e,t,new di("slicePlaneOrigin",((e,o)=>kn(t,e,o))),new di("slicePlaneBasis1",((e,o)=>qn(t,e,o,o.slicePlane?.basis1))),new di("slicePlaneBasis2",((e,o)=>qn(t,e,o,o.slicePlane?.basis2))))}function Gn(e,t,...o){if(!t.hasSlicePlane){const o=Tt`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(o),void e.fragment.code.add(o)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...o),e.fragment.uniforms.add(...o);const i=Tt`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=Tt`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,r=t.hasSliceHighlight?Tt`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:Tt`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(r)}function Un(e,t,o){return e.instancedDoublePrecision?g(Xn,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function jn(e,t){return null!=e?f(Kn,t.origin,e):t.origin}function Wn(e,t,o){return e.hasSliceTranslatedView?null!=t?Q(Zn,o.camera.viewMatrix,t):o.camera.viewMatrix:null}function kn(e,t,o){if(null==o.slicePlane)return K;const i=Un(e,t,o),n=jn(i,o.slicePlane),r=Wn(e,i,o);return null!=r?C(Kn,n,r):n}function qn(e,t,o,i){if(null==i||null==o.slicePlane)return K;const n=Un(e,t,o),r=jn(n,o.slicePlane),s=Wn(e,n,o);return null!=s?(x(Qn,i,r),C(Kn,r,s),C(Qn,Qn,s),f(Qn,Qn,Kn)):i}const Xn=c(),Kn=c(),Qn=c(),Zn=be();function Yn(e){Vn(e),e.vertex.code.add(Tt`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(Tt`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}var Jn,er,tr,or,ir;!function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(Jn||(Jn={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(er||(er={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(tr||(tr={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(or||(or={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(ir||(ir={}));var nr;!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded",e[e.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"}(nr||(nr={}));class rr extends hi{constructor(e,t){super(e,"float",ui.Pass,((o,i,n)=>o.setUniform1f(e,t(i,n))))}}class sr extends hi{constructor(e,t){super(e,"mat4",ui.Draw,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))))}}function ar(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",K):e.uniforms.add(new di("cameraPosition",((e,t)=>g(ur,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function lr(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new xn("proj",((e,t)=>t.camera.projectionMatrix)),new sr("view",((e,t)=>Q(cr,t.camera.viewMatrix,e.origin))),new di("localOrigin",(e=>e.origin)));const o=e=>g(ur,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new xn("proj",((e,t)=>t.camera.projectionMatrix)),new xn("view",((e,t)=>Q(cr,t.camera.viewMatrix,o(t)))),new vi("localOrigin",((e,t)=>o(t))))}const cr=be(),ur=c();function hr(e){e.uniforms.add(new xn("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}class dr extends At{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const o of e)t[o]=this[o];return t}}function vr(e={}){return(t,o)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(o),null!=e.constValue)Object.defineProperty(t,o,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,n=e.count||2,r=Math.ceil(Math.log2(n)),s=t._parameterBits??[0];let a=0;for(;s[a]+r>16;)a++,a>=s.length&&s.push(0);t._parameterBits=s;const l=s[a],c=(1<<r)-1<<l;s[a]+=r,Object.defineProperty(t,o,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[a]=this._parameterBits[a]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+o+" must be boolean or number, got "+typeof e)}})}}}class fr extends dr{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function mr(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(ut.MODELORIGINHI,"vec3"),e.attributes.add(ut.MODELORIGINLO,"vec3"),e.attributes.add(ut.MODEL,"mat3"),e.attributes.add(ut.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(mn,t),o.uniforms.add(new di("viewOriginHi",((e,t)=>_t(g(pr,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),pr))),new di("viewOriginLo",((e,t)=>Mt(g(pr,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),pr))))),o.code.add(Tt`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(Tt`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?Tt`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(Tt`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===ti.Normal&&(hr(o),o.code.add(Tt`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(Tt`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}Z([vr()],fr.prototype,"instancedDoublePrecision",void 0);const pr=c();function gr(e){e.vertex.code.add(Tt`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Tt.int(Ht.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Tt.int(Ht.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Tt.int(Ht.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Tt.int(Ht.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class xr extends hi{constructor(e,t){super(e,"int",ui.Pass,((o,i,n)=>o.setUniform1i(e,t(i,n))))}}function wr(e,t){t.hasSymbolColors?(e.include(gr),e.attributes.add(ut.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(Tt`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new xr("colorMixMode",(e=>Wi[e.colorMixMode]))),e.vertex.code.add(Tt`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function br(e,t){t.hasVertexColors?(e.attributes.add(ut.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Tt`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Tt`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Tt`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}class Cr extends hi{constructor(e,t){super(e,"vec4",ui.Pass,((o,i,n)=>o.setUniform4fv(e,t(i,n))))}}function yr(e){e.vertex.code.add(Tt`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(Tt`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Tt`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(Tt`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(Tt`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Tt`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(Tt`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Tr(e){e.uniforms.add(new Cr("screenSizePerspectiveAlignment",(e=>Ar(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function Ar(e){return Y(Sr,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const Sr=J();function _r(e,t){const o=e.vertex;t.hasVerticalOffset?(Lr(o),t.hasScreenSizePerspective&&(e.include(yr),Tr(o),ar(e.vertex,t)),o.code.add(Tt`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?Tt`vec3 worldNormal = normalize(worldPos + localOrigin);`:Tt`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?Tt`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Tt`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):o.code.add(Tt`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Mr=J();function Lr(e){e.uniforms.add(new Cr("verticalOffset",((e,t)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:n}=e.verticalOffset,r=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return Y(Mr,n*s,r,o,i)})))}function Or(e,t){const o=t.output===ti.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;o&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(ut.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(ut.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(Tt`
     void forwardObjectAndLayerIdColor() {
      ${o?i?Tt`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:Tt`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:Tt``} }`),e.fragment.code.add(Tt`
      void outputObjectAndLayerIdColor() {
        ${o?Tt`fragColor = objectAndLayerIdColorVarying;`:Tt``} }`)}function Rr(e){e.code.add(Tt`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ir(e,t){switch(e.fragment.include(Rr),t.output){case ti.Shadow:case ti.ShadowHighlight:case ti.ShadowExcludeHighlight:e.fragment.code.add(Tt`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case ti.Depth:e.fragment.code.add(Tt`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const Pr=ee(1,1,0,1),Er=ee(1,0,1,1);function Nr(e){e.fragment.uniforms.add(new mi("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",Pr).add("unoccludedHighlightFlag","vec4",Er),e.fragment.code.add(Tt`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}class Fr extends hi{constructor(e,t,o){super(e,"vec4",ui.Pass,((o,i,n)=>o.setUniform4fv(e,t(i,n))),o)}}class Dr extends hi{constructor(e,t,o){super(e,"float",ui.Pass,((o,i,n)=>o.setUniform1fv(e,t(i,n))),o)}}let zr=class extends ie{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};Z([te()],zr.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),Z([te()],zr.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),Z([te()],zr.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),Z([te()],zr.prototype,"DECONFLICTOR_SHOW_GRID",void 0),Z([te()],zr.prototype,"LABELS_SHOW_BORDER",void 0),Z([te()],zr.prototype,"TEXT_SHOW_BASELINE",void 0),Z([te()],zr.prototype,"TEXT_SHOW_BORDER",void 0),Z([te()],zr.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),Z([te()],zr.prototype,"OVERLAY_SHOW_CENTER",void 0),Z([te()],zr.prototype,"SHOW_POI",void 0),Z([te()],zr.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),Z([te()],zr.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),Z([te()],zr.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),Z([te()],zr.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),Z([te()],zr.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),Z([te()],zr.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),Z([te()],zr.prototype,"I3S_TREE_SHOW_TILES",void 0),Z([te()],zr.prototype,"I3S_SHOW_MODIFICATIONS",void 0),Z([te()],zr.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),Z([te()],zr.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),Z([te()],zr.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),Z([te()],zr.prototype,"LINE_WIREFRAMES",void 0),zr=Z([oe("esri.views.3d.support.DebugFlags")],zr);new zr;var Vr,$r;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(Vr||(Vr={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}($r||($r={}));const Hr=8;function Br(e,t){const{vertex:o,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(ut.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(o.uniforms.add(new vi("vvSizeMinSize",(e=>e.vvSize.minSize))),o.uniforms.add(new vi("vvSizeMaxSize",(e=>e.vvSize.maxSize))),o.uniforms.add(new vi("vvSizeOffset",(e=>e.vvSize.offset))),o.uniforms.add(new vi("vvSizeFactor",(e=>e.vvSize.factor))),o.uniforms.add(new gn("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),o.uniforms.add(new vi("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),o.code.add(Tt`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),o.code.add(Tt`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?Tt`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):o.code.add(Tt`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(o.constants.add("vvColorNumber","int",Hr),o.uniforms.add(new Dr("vvColorValues",(e=>e.vvColor.values),Hr),new Fr("vvColorColors",(e=>e.vvColor.colors),Hr)),o.code.add(Tt`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?Tt`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):o.code.add(Tt`vec4 vvColor() { return vec4(1.0); }`)}function Gr(e){e.fragment.code.add(Tt`
    #define discardOrAdjustAlpha(color) { if (color.a < ${Tt.float(An)}) { discard; } }
  `)}function Ur(e,t){jr(e,t,new rr("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function jr(e,t,o){const i=e.fragment;switch(t.alphaDiscardMode!==et.Mask&&t.alphaDiscardMode!==et.MaskBlend||i.uniforms.add(o),t.alphaDiscardMode){case et.Blend:return e.include(Gr);case et.Opaque:i.code.add(Tt`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case et.Mask:i.code.add(Tt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case et.MaskBlend:e.fragment.code.add(Tt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Wr(e,t){const{vertex:n,fragment:r}=e,s=t.hasModelTransformation;if(s){const e=i();n.uniforms.add(new xn("model",(e=>e.modelTransformation??xe))),n.uniforms.add(new gn("normalTransform",(t=>(o(e,t.modelTransformation??xe),e))))}const a=t.hasColorTexture&&t.alphaDiscardMode!==et.Opaque;switch(t.output){case ti.Depth:case ti.Shadow:case ti.ShadowHighlight:case ti.ShadowExcludeHighlight:case ti.ObjectAndLayerIdColor:lr(n,t),e.include(Yn,t),e.include(ai,t),e.include(Br,t),e.include(Ir,t),e.include(Bn,t),e.include(Or,t),zn(e),e.varyings.add("depth","float"),a&&r.uniforms.add(new mi("tex",(e=>e.texture))),n.code.add(Tt`
          void main(void) {
            vpos = calculateVPos();
            ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(Ur,t),r.code.add(Tt`
          void main(void) {
            discardBySlice(vpos);
            ${a?Tt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===ti.ObjectAndLayerIdColor?Tt`outputObjectAndLayerIdColor();`:Tt`outputDepth(depth);`}
          }
        `);break;case ti.Normal:{lr(n,t),e.include(Yn,t),e.include(oi,t),e.include(Cn,t),e.include(ai,t),e.include(Br,t),a&&r.uniforms.add(new mi("tex",(e=>e.texture))),t.normalType===ii.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const o=t.normalType===ii.Attribute||t.normalType===ii.Compressed;n.code.add(Tt`
          void main(void) {
            vpos = calculateVPos();
            ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${o?Tt`vNormalWorld = ${s?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:Tt`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Bn,t),e.include(Ur,t),r.code.add(Tt`
          void main() {
            discardBySlice(vpos);
            ${a?Tt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===ii.ScreenDerivative?Tt`vec3 normal = screenDerivativeNormal(vPositionView);`:Tt`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case ti.Highlight:lr(n,t),e.include(Yn,t),e.include(ai,t),e.include(Br,t),a&&r.uniforms.add(new mi("tex",(e=>e.texture))),n.code.add(Tt`
          void main(void) {
            vpos = calculateVPos();
            ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Bn,t),e.include(Ur,t),e.include(Nr,t),r.code.add(Tt`
          void main() {
            discardBySlice(vpos);
            ${a?Tt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function kr(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(ut.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===ri.WindingOrder?o.code.add(Tt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(Tt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(Tt`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==si.None&&(e.include(ci,t),o.uniforms.add(t.pbrTextureBindType===ui.Pass?new mi("normalTexture",(e=>e.textureNormal)):new fi("normalTexture",(e=>e.textureNormal))),o.code.add(Tt`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}function qr(e,t=!0){e.attributes.add(ut.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(Tt`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?Tt`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Xr(e){e.include(Rr),e.code.add(Tt`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}class Kr extends hi{constructor(e,t){super(e,"vec2",ui.Draw,((o,i,n,r)=>o.setUniform2fv(e,t(i,n,r))))}}const Qr=T.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Zr{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==t){Qr.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(o))o[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))o[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${o[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class Yr extends Zr{constructor(){super(...arguments),this.vertex=new ts,this.fragment=new ts,this.attributes=new os,this.varyings=new is,this.extensions=new ns,this.constants=new rs}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,r=n.uniforms.generateSource(),s=n.code.generateSource(),a="vertex"===e?as:ss,l=this.constants.generateSource().concat(n.constants.generateSource());return`#version 300 es\n${t.join("\n")}\n\n${a}\n\n${l.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${s.join("\n")}`}generateBind(e,t){const o=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&o.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];null!=i&&o.set(t.name,i)}));const i=Array.from(o.values()),n=i.length;return(e,o,r)=>{for(let s=0;s<n;++s)i[s](t,e,o,r)}}}class Jr{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new N(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Qr.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class es{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ts extends Zr{constructor(){super(...arguments),this.uniforms=new Jr,this.code=new es,this.constants=new rs}get builder(){return this}}class os{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class is{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&rt(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((o,i)=>t.push("vertex"===e?`out ${o} ${i};`:`in ${o} ${i};`))),t}}class ns{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?ns.ALLOWLIST_VERTEX:ns.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}ns.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ns.ALLOWLIST_VERTEX=[];class rs{constructor(){this._entries=new Set}add(e,t,o){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=rs._numberToFloatStr(o);break;case"int":i=rs._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${rs._numberToFloatStr(o[0])},                            ${rs._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${rs._numberToFloatStr(o[0])},                            ${rs._numberToFloatStr(o[1])},                            ${rs._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${rs._numberToFloatStr(o[0])},                            ${rs._numberToFloatStr(o[1])},                            ${rs._numberToFloatStr(o[2])},                            ${rs._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${rs._numberToIntStr(o[0])},                             ${rs._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${rs._numberToIntStr(o[0])},                             ${rs._numberToIntStr(o[1])},                             ${rs._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${rs._numberToIntStr(o[0])},                             ${rs._numberToIntStr(o[1])},                             ${rs._numberToIntStr(o[2])},                             ${rs._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(o,(e=>rs._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ss="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif\n\nout vec4 fragColor;",as="precision highp float;\nprecision highp sampler2D;";const ls=4;function cs(){const e=new Yr,t=e.fragment;e.include(qr);const o=(ls+1)/2,i=1/(2*o*o);return t.include(Xr),t.uniforms.add(new mi("depthMap",(e=>e.depthTexture)),new fi("tex",(e=>e.colorTexture)),new Kr("blurSize",(e=>e.blurSize)),new rr("projScale",((e,t)=>{const o=ne(t.camera.eye,t.camera.center);return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale})),new Fn("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(Tt`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${Tt.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(Tt`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${Tt.int(ls)}; r <= ${Tt.int(ls)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),e}Object.freeze(Object.defineProperty({__proto__:null,build:cs},Symbol.toStringTag,{value:"Module"}));function us(e){e.fragment.uniforms.add(new Cr("projInfo",((e,t)=>hs(t)))),e.fragment.uniforms.add(new Fn("zScale",((e,t)=>vs(t)))),e.fragment.code.add(Tt`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function hs(e){const t=e.camera.projectionMatrix;return 0===t[11]?Y(ds,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):Y(ds,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const ds=J();function vs(e){return 0===e.camera.projectionMatrix[11]?Bt(fs,0,1):Bt(fs,1,0)}const fs=Gt();const ms=16;function ps(){const e=new Yr,t=e.fragment;return e.include(qr),t.include(Xr),e.include(us),t.uniforms.add(new rr("radius",((e,t)=>gs(t.camera)))),t.code.add(Tt`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(Tt`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Fn("nearFar",((e,t)=>t.camera.nearFar)),new mi("normalMap",(e=>e.normalTexture)),new mi("depthMap",(e=>e.depthTexture)),new Fn("zScale",((e,t)=>vs(t))),new rr("projScale",(e=>e.projScale)),new mi("rnm",(e=>e.noiseTexture)),new Fn("rnmScale",((e,t)=>Bt(xs,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new rr("intensity",(e=>e.intensity)),new Fn("screenSize",((e,t)=>Bt(xs,t.camera.fullWidth,t.camera.fullHeight)))),t.code.add(Tt`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${Tt.int(ms)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${Tt.int(ms)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),e}function gs(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const xs=Gt();Object.freeze(Object.defineProperty({__proto__:null,build:ps,getRadius:gs},Symbol.toStringTag,{value:"Module"}));const ws=2;function bs(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new mi("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture))),o.constants.add("blurSizePixelsInverse","float",1/ws),o.code.add(Tt`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(Tt`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Cs(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add(new vi("lightingAmbientSH0",((e,t)=>g(ys,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),o.code.add(Tt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(o.uniforms.add(new Cr("lightingAmbientSH_R",((e,t)=>Y(Ts,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new Cr("lightingAmbientSH_G",((e,t)=>Y(Ts,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new Cr("lightingAmbientSH_B",((e,t)=>Y(Ts,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),o.code.add(Tt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(o.uniforms.add(new vi("lightingAmbientSH0",((e,t)=>g(ys,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new Cr("lightingAmbientSH_R1",((e,t)=>Y(Ts,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new Cr("lightingAmbientSH_G1",((e,t)=>Y(Ts,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new Cr("lightingAmbientSH_B1",((e,t)=>Y(Ts,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new Cr("lightingAmbientSH_R2",((e,t)=>Y(Ts,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new Cr("lightingAmbientSH_G2",((e,t)=>Y(Ts,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new Cr("lightingAmbientSH_B2",((e,t)=>Y(Ts,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),o.code.add(Tt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==wi.Normal&&t.pbrMode!==wi.Schematic||o.code.add(Tt`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const ys=c(),Ts=J();function As(e){e.uniforms.add(new vi("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function Ss(e){e.uniforms.add(new vi("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function _s(e){As(e.fragment),Ss(e.fragment),e.fragment.code.add(Tt`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ms(e){const t=e.fragment.code;t.add(Tt`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Tt`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Tt`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ls(e){e.vertex.code.add(Tt`const float PI = 3.141592653589793;`),e.fragment.code.add(Tt`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Os(e,t){const o=e.fragment.code;e.include(Ls),t.pbrMode!==wi.Normal&&t.pbrMode!==wi.Schematic&&t.pbrMode!==wi.Terrain&&t.pbrMode!==wi.TerrainWithWater||(o.add(Tt`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(Tt`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==wi.Normal&&t.pbrMode!==wi.Schematic||(e.include(Ms),o.add(Tt`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(Tt`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(Tt`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(Tt`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class Rs extends hi{constructor(e,t){super(e,"bool",ui.Pass,((o,i,n)=>o.setUniform1b(e,t(i,n))))}}const Is=.4;function Ps(e){e.constants.add("ambientBoostFactor","float",Is)}function Es(e){e.uniforms.add(new rr("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function Ns(e,t){const o=e.fragment;switch(e.include(bs,t),t.pbrMode!==wi.Disabled&&e.include(Os,t),e.include(Cs,t),e.include(Ls),o.code.add(Tt`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===wi.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ps(o),Es(o),As(o),o.code.add(Tt`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?Tt`normalize(vPosWorld)`:Tt`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ss(o),o.code.add(Tt`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case wi.Disabled:case wi.WaterOnIntegratedMesh:case wi.Water:e.include(_s),o.code.add(Tt`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case wi.Normal:case wi.Schematic:o.code.add(Tt`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(Tt`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Rs("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(Tt`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new rr("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new rr("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),o.code.add(Tt`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(Tt`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===wi.Schematic?Tt`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Tt`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case wi.Terrain:case wi.TerrainWithWater:e.include(_s),o.code.add(Tt`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:case wi.COUNT:}}function Fs(e,t){t.hasMultipassTerrain&&(e.fragment.include(Xr),e.fragment.uniforms.add(new mi("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new Fn("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new Fn("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(Tt`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Ds extends hi{constructor(e,t,o){super(e,"mat4",ui.Draw,((o,i,n,r)=>o.setUniformMatrix4fv(e,t(i,n,r))),o)}}class zs extends hi{constructor(e,t,o){super(e,"mat4",ui.Pass,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))),o)}}function Vs(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new zs("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),Hs(e))}function $s(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Ds("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),Hs(e))}function Hs(e){const t=e.fragment;t.include(Rr),t.uniforms.add(new mi("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new xr("numCascades",((e,t)=>t.shadowMap.numCascades)),new Cr("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(Tt`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}function Bs(e){e.vertex.uniforms.add(new gn("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:je()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(Tt`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Gs(e){e.vertex.uniforms.add(new gn("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:je()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(Tt`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Us(e){e.vertex.uniforms.add(new gn("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:je()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(Tt`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function js(e){e.vertex.uniforms.add(new gn("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:je()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(Tt`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ws(e){e.vertex.uniforms.add(new gn("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:je()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(Tt`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ks(e){e.code.add(Tt`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function qs(e){e.include(ks),e.code.add(Tt`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Tt.int(Ht.Multiply)}) {
        return allMixed;
      }
      if (mode == ${Tt.int(Ht.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Tt.int(Ht.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Tt.int(Ht.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Tt.int(Ht.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Xs(e){const t=new Yr,{vertex:n,fragment:r,varyings:s}=t;if(lr(n,e),t.include(fn),s.add("vpos","vec3"),t.include(Br,e),t.include(mr,e),t.include(_r,e),e.hasColorTextureTransform&&t.include(Bs),e.output===ti.Color||e.output===ti.Alpha){e.hasNormalTextureTransform&&t.include(Gs),e.hasEmissionTextureTransform&&t.include(Us),e.hasOcclusionTextureTransform&&t.include(js),e.hasMetallicRoughnessTextureTransform&&t.include(Ws),ar(n,e),t.include(oi,e),t.include(Yn,e);const r=e.normalType===ii.Attribute||e.normalType===ii.Compressed;r&&e.offsetBackfaces&&t.include(Hn),t.include(kr,e),t.include(Cn,e),e.instancedColor&&t.attributes.add(ut.INSTANCECOLOR,"vec4"),s.add("vPositionLocal","vec3"),t.include(ai,e),t.include($n,e),t.include(wr,e),t.include(br,e),n.uniforms.add(new Cr("externalColor",(e=>e.externalColor))),s.add("vcolorExt","vec4"),e.hasMultipassTerrain&&s.add("depth","float");const a=e.hasModelTransformation;if(a){const e=i();n.uniforms.add(new xn("model",(e=>e.modelTransformation??xe))),n.uniforms.add(new gn("normalTransform",(t=>(o(e,t.modelTransformation??xe),e))))}n.code.add(Tt`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Tt.float(An)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${a?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${r?Tt`vNormalWorld = ${a?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${r&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?Tt`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?Tt`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?Tt`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?Tt`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?Tt`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case ti.Alpha:t.include(Bn,e),t.include(Ur,e),t.include(Fs,e),r.uniforms.add(new rr("opacity",(e=>e.opacity)),new rr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&r.uniforms.add(new mi("tex",(e=>e.texture))),r.include(qs),r.code.add(Tt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Tt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Tt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?Tt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Tt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case ti.Color:t.include(Bn,e),t.include(Ns,e),t.include(bs,e),t.include(Ur,e),t.include(e.instancedDoublePrecision?Vs:$s,e),t.include(Fs,e),ar(r,e),r.uniforms.add(n.uniforms.get("localOrigin"),new vi("ambient",(e=>e.ambient)),new vi("diffuse",(e=>e.diffuse)),new rr("opacity",(e=>e.opacity)),new rr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&r.uniforms.add(new mi("tex",(e=>e.texture))),t.include(bi,e),t.include(Os,e),r.include(qs),t.include(ni,e),Ps(r),Es(r),Ss(r),r.code.add(Tt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Tt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Tt`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===ii.ScreenDerivative?Tt`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:Tt`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===wi.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?Tt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Tt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?Tt`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?Tt`normalUV`:"vuv0"});`:Tt`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?Tt`normalize(posWorld);`:Tt`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?Tt`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===wi.Normal||e.pbrMode===wi.Schematic?Tt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?Tt`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Tt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===St.Color?Tt`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(Wr,e),t}const Ks=Object.freeze(Object.defineProperty({__proto__:null,build:Xs},Symbol.toStringTag,{value:"Module"}));class Qs extends yn{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=re(Pn),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=tt.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=h(0,0,0),this.instancedDoublePrecision=!1,this.normalType=ii.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=h(.2,.2,.2),this.diffuse=h(.8,.8,.8),this.externalColor=ee(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=c(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=ot.Less,this.textureAlphaMode=et.Blend,this.textureAlphaCutoff=Tn,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Xi.Occlude}}class Zs extends _n{initializeConfiguration(e,t){t.spherical=e.viewingMode===yt.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?si.Default:si.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Zs.shader)}_initializeProgram(e,t){return new Mn(e.rctx,t.get().build(this.configuration),Ci)}_convertDepthTestFunction(e){return e===ot.Lequal?pt.LEQUAL:pt.LESS}_makePipeline(e,t){const o=this.configuration,i=e===St.NONE,n=e===St.FrontFace;return Lt({blending:o.output!==ti.Color&&o.output!==ti.Alpha||!o.transparent?null:i?Ot:Rt(e),culling:Ys(o)?It(o.cullFace):null,depthTest:{func:Pt(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(i||n)&&o.writeDepth?Et:null,colorWrite:Nt,stencilWrite:o.hasOccludees?Ln:null,stencilTest:o.hasOccludees?t?Rn:On:null,polygonOffset:i||n?null:Ft(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Ys(e){return e.cullFace!==tt.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}Zs.shader=new Sn(Ks,(()=>import("./p-58450135.js")));class Js extends dr{}Z([vr({constValue:!0})],Js.prototype,"hasSliceHighlight",void 0),Z([vr({constValue:!1})],Js.prototype,"hasSliceInVertexProgram",void 0),Z([vr({constValue:!1})],Js.prototype,"instancedDoublePrecision",void 0),Z([vr({constValue:!1})],Js.prototype,"hasModelTransformation",void 0),Z([vr({constValue:ui.Pass})],Js.prototype,"pbrTextureBindType",void 0);class ea extends Js{constructor(){super(...arguments),this.output=ti.Color,this.alphaDiscardMode=et.Opaque,this.doubleSidedMode=ri.None,this.pbrMode=wi.Disabled,this.cullFace=tt.None,this.transparencyPassType=St.NONE,this.normalType=ii.Attribute,this.textureCoordinateType=si.None,this.customDepthTest=ot.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}Z([vr({count:ti.COUNT})],ea.prototype,"output",void 0),Z([vr({count:et.COUNT})],ea.prototype,"alphaDiscardMode",void 0),Z([vr({count:ri.COUNT})],ea.prototype,"doubleSidedMode",void 0),Z([vr({count:wi.COUNT})],ea.prototype,"pbrMode",void 0),Z([vr({count:tt.COUNT})],ea.prototype,"cullFace",void 0),Z([vr({count:St.COUNT})],ea.prototype,"transparencyPassType",void 0),Z([vr({count:ii.COUNT})],ea.prototype,"normalType",void 0),Z([vr({count:si.COUNT})],ea.prototype,"textureCoordinateType",void 0),Z([vr({count:ot.COUNT})],ea.prototype,"customDepthTest",void 0),Z([vr()],ea.prototype,"spherical",void 0),Z([vr()],ea.prototype,"hasVertexColors",void 0),Z([vr()],ea.prototype,"hasSymbolColors",void 0),Z([vr()],ea.prototype,"hasVerticalOffset",void 0),Z([vr()],ea.prototype,"hasSlicePlane",void 0),Z([vr()],ea.prototype,"hasSliceHighlight",void 0),Z([vr()],ea.prototype,"hasColorTexture",void 0),Z([vr()],ea.prototype,"hasMetallicRoughnessTexture",void 0),Z([vr()],ea.prototype,"hasEmissionTexture",void 0),Z([vr()],ea.prototype,"hasOcclusionTexture",void 0),Z([vr()],ea.prototype,"hasNormalTexture",void 0),Z([vr()],ea.prototype,"hasScreenSizePerspective",void 0),Z([vr()],ea.prototype,"hasVertexTangents",void 0),Z([vr()],ea.prototype,"hasOccludees",void 0),Z([vr()],ea.prototype,"hasMultipassTerrain",void 0),Z([vr()],ea.prototype,"hasModelTransformation",void 0),Z([vr()],ea.prototype,"offsetBackfaces",void 0),Z([vr()],ea.prototype,"vvSize",void 0),Z([vr()],ea.prototype,"vvColor",void 0),Z([vr()],ea.prototype,"receiveShadows",void 0),Z([vr()],ea.prototype,"receiveAmbientOcclusion",void 0),Z([vr()],ea.prototype,"textureAlphaPremultiplied",void 0),Z([vr()],ea.prototype,"instanced",void 0),Z([vr()],ea.prototype,"instancedColor",void 0),Z([vr()],ea.prototype,"objectAndLayerIdColorInstanced",void 0),Z([vr()],ea.prototype,"instancedDoublePrecision",void 0),Z([vr()],ea.prototype,"doublePrecisionRequiresObfuscation",void 0),Z([vr()],ea.prototype,"writeDepth",void 0),Z([vr()],ea.prototype,"transparent",void 0),Z([vr()],ea.prototype,"enableOffset",void 0),Z([vr()],ea.prototype,"cullAboveGround",void 0),Z([vr()],ea.prototype,"snowCover",void 0),Z([vr()],ea.prototype,"hasColorTextureTransform",void 0),Z([vr()],ea.prototype,"hasEmissionTextureTransform",void 0),Z([vr()],ea.prototype,"hasNormalTextureTransform",void 0),Z([vr()],ea.prototype,"hasOcclusionTextureTransform",void 0),Z([vr()],ea.prototype,"hasMetallicRoughnessTextureTransform",void 0),Z([vr({constValue:!0})],ea.prototype,"hasVvInstancing",void 0),Z([vr({constValue:!1})],ea.prototype,"useCustomDTRExponentForWater",void 0),Z([vr({constValue:!1})],ea.prototype,"supportsTextureAtlas",void 0),Z([vr({constValue:!0})],ea.prototype,"useFillLights",void 0);function ta(e){const t=new Yr,{vertex:o,fragment:i,varyings:n}=t;return lr(o,e),t.include(fn),n.add("vpos","vec3"),t.include(Br,e),t.include(mr,e),t.include(_r,e),e.output!==ti.Color&&e.output!==ti.Alpha||(ar(t.vertex,e),t.include(oi,e),t.include(Yn,e),e.offsetBackfaces&&t.include(Hn),e.instancedColor&&t.attributes.add(ut.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.hasMultipassTerrain&&n.add("depth","float"),t.include(ai,e),t.include($n,e),t.include(wr,e),t.include(br,e),o.uniforms.add(new Cr("externalColor",(e=>e.externalColor))),n.add("vcolorExt","vec4"),o.code.add(Tt`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Tt.float(An)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?Tt`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===ti.Alpha&&(t.include(Bn,e),t.include(Ur,e),t.include(Fs,e),i.uniforms.add(new rr("opacity",(e=>e.opacity)),new rr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new mi("tex",(e=>e.texture))),i.include(qs),i.code.add(Tt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?Tt`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Tt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Tt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?Tt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Tt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===ti.Color&&(t.include(Bn,e),t.include(Ns,e),t.include(bs,e),t.include(Ur,e),t.include(e.instancedDoublePrecision?Vs:$s,e),t.include(Fs,e),ar(t.fragment,e),As(i),Ps(i),Es(i),i.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new vi("ambient",(e=>e.ambient)),new vi("diffuse",(e=>e.diffuse)),new rr("opacity",(e=>e.opacity)),new rr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new mi("tex",(e=>e.texture))),t.include(bi,e),t.include(Os,e),i.include(qs),Ss(i),i.code.add(Tt`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?Tt`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Tt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Tt`colorUV`:Tt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Tt`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===wi.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?Tt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Tt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?Tt`albedo = mix(albedo, vec3(1), 0.9);`:Tt``}
        ${Tt`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===wi.Normal||e.pbrMode===wi.Schematic?e.spherical?Tt`vec3 normalGround = normalize(vpos + localOrigin);`:Tt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Tt``}
        ${e.pbrMode===wi.Normal||e.pbrMode===wi.Schematic?Tt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?Tt`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Tt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===St.Color?Tt`fragColor = premultiplyAlpha(fragColor);`:Tt``}
      }
    `)),t.include(Wr,e),t}const oa=Object.freeze(Object.defineProperty({__proto__:null,build:ta},Symbol.toStringTag,{value:"Module"}));class ia extends Zs{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ii.Attribute,t.doubleSidedMode=ri.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ia.shader)}}ia.shader=new Sn(oa,(()=>import("./p-7d4550a9.js")));class na extends qi{constructor(e){super(e,aa),this.supportsEdges=!0,this._configuration=new ea,this._vertexBufferLayout=la(this.parameters)}isVisibleForOutput(e){return e!==ti.Shadow&&e!==ti.ShadowExcludeHighlight&&e!==ti.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:i,vvColor:n}=e,r="replace"===e.colorMixMode,s=e.opacity>0,a=e.externalColor&&e.externalColor[3]>0,l=t||n||i;return o&&l?r||s:o?r?a:s:l?r||s:r?a:s}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?tt.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==ti.Color&&e!==ti.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=ri.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?ri.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?ri.WindingOrder:ri.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?wi.Schematic:wi.Normal:wi.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Dt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,i,n,r){if(null!=this.parameters.verticalOffset){const e=o.camera;g(fa,t[12],t[13],t[14]);let r=null;switch(o.viewingMode){case yt.Global:r=B(da,fa);break;case yt.Local:r=ae(da,ha)}let s=0;const a=f(ma,fa,e.eye),l=m(a),c=w(a,a,1/l);let u=null;this.parameters.screenSizePerspective&&(u=ce(r,c)),s+=Bi(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),w(r,r,s),le(va,r,o.transform.inverseRotation),i=f(ca,i,va),n=f(ua,n,va)}Oi(e,o,i,n,Ji(o.verticalOffset),r)}requiresSlot(e,t){if(t===ti.Color||t===ti.Alpha||t===ti.Depth||t===ti.Normal||t===ti.Shadow||t===ti.ShadowHighlight||t===ti.ShadowExcludeHighlight||t===ti.Highlight||t===ti.ObjectAndLayerIdColor){return e===(this.parameters.transparent?this.parameters.writeDepth?Ki.TRANSPARENT_MATERIAL:Ki.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ki.OPAQUE_MATERIAL)||e===Ki.DRAPED_MATERIAL}return!1}createGLMaterial(e){return new ra(e)}createBufferWriter(){return new vn(this._vertexBufferLayout)}}class ra extends gi{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==ti.Color&&this._output!==ti.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return g(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?ia:Zs,e)}}class sa extends Qs{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const aa=new sa;function la(e){const t=st().vec3f(ut.POSITION);e.normalType===ii.Compressed?t.vec2i16(ut.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(ut.NORMAL),e.hasVertexTangents&&t.vec4f(ut.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(ut.UV0),e.hasVertexColors&&t.vec4u8(ut.COLOR),e.hasSymbolColors&&t.vec4u8(ut.SYMBOLCOLOR),se("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ut.OBJECTANDLAYERIDCOLOR),t}const ca=c(),ua=c(),ha=h(0,0,1),da=c(),va=c(),fa=c(),ma=c();const pa=T.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ga(e,t){const o=await xa(e,t),i=await Aa(o.textureDefinitions??{},t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:o,textures:i,size:n+qe(o)}}async function xa(e,t){const o=null!=t&&t.streamDataRequester;if(o)return wa(e,o,t);const i=await he(de(e,t));if(!0===i.ok)return i.value.data;ve(i.error),ba(i.error)}async function wa(e,t,o){const i=await he(t.request(e,"json",o));if(!0===i.ok)return i.value;ve(i.error),ba(i.error.details.url)}function ba(e){throw new N("",`Request for object resource failed: ${e}`)}function Ca(e){const t=e.params,o=t.topology;let i=!0;switch(t.vertexAttributes||(pa.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(pa.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(pa.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(pa.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),i=!1)}}else pa.warn("Indexed geometries must specify faces"),i=!1;break}default:pa.warn(`Unsupported topology '${o}'`),i=!1}e.params.material||(pa.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n){n[e].values||(pa.warn("Geometries with externally defined attributes are not yet supported"),i=!1)}return i}function ya(e,t){const o=new Array,i=new Array,n=new Array,r=new Xe,s=e.resource,a=fe.parse(s.version||"1.0","wosr");Ma.validate(a);const l=s.model.name,c=s.model.geometries,u=s.materialDefinitions??{},h=e.textures;let d=0;const v=new Map;for(let e=0;e<c.length;e++){const s=c[e];if(!Ca(s))continue;const a=_a(s),l=s.params.vertexAttributes,f=[];for(const e in l){const t=l[e],o=t.values;f.push([e,new Ut(o,t.valuesPerElement,!0)])}const m=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)m.push([t,e[t].values])}const p=a.texture,g=h&&h[p];if(g&&!v.has(p)){const{image:e,parameters:t}=g,o=new Zo(e,t);i.push(o),v.set(p,o)}const x=v.get(p),w=x?x.id:void 0,b=a.material;let C=r.get(b,p);if(null==C){const e=u[b.substring(b.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=g&&g.alphaChannelUsage,i=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=g?Sa(g.alphaChannelUsage):void 0,s={ambient:re(e.diffuse),diffuse:re(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:tt.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:g?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),C=new na(s),r.set(b,p,C)}n.push(C);const y=new fo(C,f,m);d+=m.find((e=>e[0]===ut.POSITION))?.[1].length??0,o.push(y)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:o},pivotOffset:s.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Ta(o)}}function Ta(e){const t=me();return e.forEach((e=>{const o=e.boundingInfo;null!=o&&(ue(t,o.bbMin),ue(t,o.bbMax))})),t}async function Aa(e,t){const o=new Array;for(const i in e){const n=e[i],r=n.images[0].data;if(!r){pa.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+r,a="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:ft.REPEAT,t:ft.REPEAT},preMultiplyAlpha:Sa(l)!==et.Opaque},u=null!=t&&t.disableTextures?Promise.resolve(null):Ke(s,t);o.push(u.then((e=>({refId:a,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(o),n={};for(const e of i)n[e.refId]=e;return n}function Sa(e){switch(e){case"mask":return et.Mask;case"maskAndTransparency":return et.MaskBlend;case"none":return et.Opaque;default:return et.Blend}}function _a(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ma=new fe(1,2,"wosr");async function La(t,o){const i=Oa(e(t));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):ga(i.url,o)),{engineResources:t,referenceBoundingBox:n}=ya(e,o);return{lods:t,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const n=await(o.cache?o.cache.loadGLTF(i.url,o,!!o.usePBR):Ee(new Ne(o.streamDataRequester),i.url,o,o.usePBR)),r=n.model.meta?.ESRI_proxyEllipsoid,s=n.meta.isEsriSymbolResource&&null!=r&&n.meta.uri.includes("/RealisticTrees/");s&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,Fa(n,r));const a=!!o.usePBR,l=n.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:s,mrrFactors:[...Nn]}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:[...Pn]},c={...o.materialParamsMixin,treeRendering:s},{engineResources:u,referenceBoundingBox:h}=Ra(n,l,c,o.skipHighLods&&null==i.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:i.specifiedLodIndex});return{lods:u,referenceBoundingBox:h,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function Oa(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ra(e,t,o,i){const n=e.model,r=new Array,s=new Map,a=new Map,l=n.lods.length,c=me();return n.lods.forEach(((e,u)=>{const h=!0===i.skipHighLods&&(l>1&&0===u||l>3&&1===u)||!1===i.skipHighLods&&null!=i.singleLodIndex&&u!==i.singleLodIndex;if(h&&0!==u)return;const d=new qt(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=h?new na({}):Ia(n,e,d,t,o,s,a),{geometry:r,vertexCount:l}=Pa(e,null!=i?i:new na({})),v=r.boundingInfo;null!=v&&0===u&&(ue(c,v.bbMin),ue(c,v.bbMax)),null!=i&&(d.stageResources.geometries.push(r),d.numberOfVertices+=l)})),h||r.push(d)})),{engineResources:r,referenceBoundingBox:c}}function Ia(e,t,o,i,n,r,s){const a=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==l)return null;const h=Na(l.alphaMode);if(!r.has(a)){if(c){const t=(t,o=!1)=>{if(null!=t&&!s.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;s.set(t,new Zo(Ge(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!Ge(e)&&o,encoding:Ge(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,h!==et.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const o=l.color[0]**(1/Be),d=l.color[1]**(1/Be),v=l.color[2]**(1/Be),f=l.emissiveFactor[0]**(1/Be),m=l.emissiveFactor[1]**(1/Be),p=l.emissiveFactor[2]**(1/Be),g=null!=l.textureColor&&c?s.get(l.textureColor):null,x=In({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion});r.set(a,new na({...i,transparent:h===et.Blend,customDepthTest:ot.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[o,d,v],ambient:[o,d,v],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?tt.None:tt.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?ii.Attribute:ii.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:null!=g?g.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?s.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=g&&!!g.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?s.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?s.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?s.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[f,m,p],mrrFactors:x?[...En]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:Wt(l.colorTextureTransform),normalTextureTransformMatrix:Wt(l.normalTextureTransform),occlusionTextureTransformMatrix:Wt(l.occlusionTextureTransform),emissiveTextureTransformMatrix:Wt(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Wt(l.metallicRoughnessTextureTransform),...n}))}const d=r.get(a);if(o.stageResources.materials.push(d),c){const e=e=>{null!=e&&o.stageResources.textures.push(s.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return d}function Pa(e,t){const i=e.attributes.position.count,n=Fe(e.indices||i,e.primitiveType),r=jt(3*i),{typedBuffer:s,typedBufferStride:a}=e.attributes.position;Re(r,s,e.transform,3,a);const l=[[ut.POSITION,new Ut(r,3,!0)]],c=[[ut.POSITION,n]];if(null!=e.attributes.normal){const t=jt(3*i),{typedBuffer:r,typedBufferStride:s}=e.attributes.normal;o(Ea,e.transform),Ie(t,r,Ea,3,s),l.push([ut.NORMAL,new Ut(t,3,!0)]),c.push([ut.NORMAL,n])}if(null!=e.attributes.tangent){const t=jt(4*i),{typedBuffer:r,typedBufferStride:s}=e.attributes.tangent;o(Ea,e.transform),De(t,r,Ea,4,s),l.push([ut.TANGENT,new Ut(t,4,!0)]),c.push([ut.TANGENT,n])}if(null!=e.attributes.texCoord0){const t=jt(2*i),{typedBuffer:o,typedBufferStride:r}=e.attributes.texCoord0;ze(t,o,2,r),l.push([ut.UV0,new Ut(t,2,!0)]),c.push([ut.UV0,n])}if(null!=e.attributes.color){const t=new Uint8Array(4*i);4===e.attributes.color.elementCount?e.attributes.color instanceof ye?Ve(t,e.attributes.color,255):e.attributes.color instanceof Ce?$e(t,e.attributes.color):e.attributes.color instanceof Me&&Ve(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof _e?Pe(t,e.attributes.color,255,4):e.attributes.color instanceof Le?He(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof Oe&&Pe(t,e.attributes.color,1/256,4)),l.push([ut.COLOR,new Ut(t,4,!0)]),c.push([ut.COLOR,n])}return{geometry:new fo(t,l,c),vertexCount:i}}const Ea=i();function Na(e){switch(e){case"BLEND":return et.Blend;case"MASK":return et.Mask;case"OPAQUE":case null:case void 0:return et.Opaque}}function Fa(e,t){for(let o=0;o<e.model.lods.length;++o){const i=e.model.lods[o];for(const n of i.parts){const i=n.attributes.normal;if(null==i)return;const r=n.attributes.position,s=r.count,a=c(),u=c(),h=c(),d=new Uint8Array(4*s),v=new Float64Array(3*s),p=pe(be(),n.transform);let g=0,x=0;for(let c=0;c<s;c++){r.getVec(c,u),i.getVec(c,a),C(u,u,n.transform),f(h,u,t.center),ge(h,h,t.radius);const s=h[2],w=m(h),b=Math.min(.45+.55*w*w,1);ge(h,h,t.radius),null!==p&&C(h,h,p),B(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&l(h,h,a,s>-1?.2:Math.min(-4*s-3.8,1)),v[g]=h[0],v[g+1]=h[1],v[g+2]=h[2],g+=3,d[x]=255*b,d[x+1]=255*b,d[x+2]=255*b,d[x+3]=255,x+=4}n.attributes.normal=new _e(v),n.attributes.color=new Ce(d)}}}const Da=Object.freeze({__proto__:null,fetch:La,gltfToEngineResources:Ra,parseUrl:Oa});export{ta as I,Xs as Y,Da as o};
//# sourceMappingURL=p-c7ae5b89.js.map