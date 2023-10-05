import { s as st, e as et, i as it, n as nt, c as Nt, I as It } from './featureConversionUtils-da87b7fc.js';
import { t as t$1, s } from './OptimizedFeature-fb4fb1cb.js';
import { b as has, al as p$1, u as u$1, dL as r$2, k as s$1, aM as n$2, ar as c$2, fo as a, aj as i, aC as C, a3 as d$2, s as s$2, fu as s$3, fv as a$1 } from './interfaces-f9f0dded.js';
import { T, c as c$1 } from './arcadeTimeUtils-79914cb4.js';
import { t as t$2 } from './projectionSupport-edf32891.js';
import { V, W as W$1, S, t as t$3, Q, R } from './definitions-b0fcbe43.js';
import { a as n$1, l as l$1, f as f$1, c as c$3, u as u$2, e, b as l$2, i as i$1, s as s$4, n as n$3 } from './visualVariablesUtils-0358a92b.js';
import { W } from './color-f1195a3b.js';
import { U } from './enums-f1bebe6f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{static fromBuffer(e,s){return new t(e,s)}static create(e,s=4294967295){const r=new Uint32Array(Math.ceil(e/32));return new t(r,s)}constructor(t,e){this._mask=0,this._buf=t,this._mask=e;}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return !!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return !0;s++;}for(;r%32&&s!==r;){if(this.has(s))return !0;r--;}if(s===r)return !1;for(let h=s/32;h!==r/32;h++){if(this._buf[h])return !0}return !1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r;}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let h=s/32;h!==r/32;h++)this._buf[h]=4294967295;}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r;}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s;}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return !0;return !1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new t(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0;}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;){1&s&&t(r),s>>>=1,r++;}}}countSet(){let t=0;return this.forEachSet((e=>{t++;})),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let d$1=0;const h$1=has("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],u=h$1[0],l=h$1[1],c=h$1[2],m=h$1[3],f=has("featurelayer-simplify-payload-size-factors")??[1,2,4],g=f[0],y=f[1],_=f[2],p=has("featurelayer-simplify-mobile-factor")??2,x=has("esri-mobile");class I$1{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=e,this._layerSchema=t;}static createInstance(){return d$1++,d$1=d$1>65535?0:d$1,d$1}get isEmpty(){return null!=this._deleted&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e;}getAreaSimplificationThreshold(e,t){let r=1;const s=x?p:1;t>4e6?r=_*s:t>1e6?r=y*s:t>5e5?r=g*s:t>1e5&&(r=s);let i=0;e>4e3?i=m*r:e>2e3?i=c*r:e>100?i=l:e>15&&(i=u);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}createQuantizedExtrudedQuad(e,t){return new t$1([5],[e-1,t,1,-1,1,1,-1,1,-1,-1])}parseTimestampOffset(e){return e}setArcadeSpatialReference(e){this._arcadeSpatialReference=e;}attachStorage(e){this._storage=e;}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t);}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,r,s){const i=this.copy();return i._tx+=e,i._ty+=t,i._sx*=r,i._sy*=s,i}readAttribute(e,t=!1){const r=this._readAttribute(e,t);if(void 0!==r)return r;for(const s of this._joined){s.setIndex(this.getIndex());const r=s._readAttribute(e,t);if(void 0!==r)return r}}readAttributes(){const e=this._readAttributes();for(const t of this._joined){t.setIndex(this.getIndex());const r=t._readAttributes();for(const t of Object.keys(r))e[t]=r[t];}return e}joinAttributes(e){this._joined.push(e);}readArcadeFeature(){return this}hasField(e){return this.fields.has(e)}geometry(){const e=this.readHydratedGeometry(),t=st(e,this.geometryType,this.hasZ,this.hasM),r=p$1(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=T.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(t,r){return r&&r instanceof Date?this.isUnknownDateTimeField(t)?c$1.unknownDateJSToArcadeDate(r):c$1.dateJSAndZoneToArcadeDate(r,this.contextTimeReference?.timeZone??"system"):r}isUnknownDateTimeField(e){return "unknown"===this.dateTimeReferenceFieldIndex?.fieldTimeZone(e)}fieldSourceTimeZone(e){return this.dateTimeReferenceFieldIndex?.fieldTimeZone(e)??""}get layerPreferredTimeZone(){return this.dateTimeReferenceFieldIndex?.layerPreferredTimeZone??""}field(e){if(this.hasField(e))return this.autocastArcadeDate(e,this.readAttribute(e,!0));for(const t of this._joined)if(t.setIndex(this.getIndex()),t.hasField(e)){const r=t._readAttribute(e,!0);return this.autocastArcadeDate(e,r)}throw new Error(`Field ${e} does not exist`)}setField(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.fields.fields.map((e=>e.name))}castToText(e=!1){if(!e)return JSON.stringify(this.readLegacyFeature());const t=this.readLegacyFeature();if(!t)return JSON.stringify(null);const r={geometry:t.geometry,attributes:{...t.attributes??{}}};for(const s in r.attributes){const e=r.attributes[s];e instanceof Date&&(r.attributes[s]=e.getTime());}return JSON.stringify(r)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(e=null){return {attributes:this._readAttributes(),geometry:!0===e?.keepGeometryType?this.geometry():this.geometry()?.toJSON()??null}}castAsJsonAsync(e=null,t=null){return Promise.resolve(this.castAsJson(t))}removeIds(e){if(null==this._objectIdToIndex){const e=new Map,t=this.getCursor();for(;t.next();){const s=u$1(t.getObjectId());e.set(s,t.getIndex());}this._objectIdToIndex=e;}const t=this._objectIdToIndex;for(const r of e)t.has(r)&&this.removeAtIndex(t.get(r));}removeAtIndex(e){null==this._deleted&&(this._deleted=t.create(this.getSize())),this._deleted.set(e);}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor();for(;e.next();)yield e.readOptimizedFeature();}_getExists(){return null==this._deleted||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const e=this.readUnquantizedGeometry();if(!e||e.hasIndeterminateRingOrder)return null;const t=this.getQuantizationTransform()??null;return t$2(new t$1,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d({coords:t,lengths:e}){let r=0;for(const s of e){for(let e=1;e<s;e++)t[2*(r+e)]+=t[2*(r+e)-2],t[2*(r+e)+1]+=t[2*(r+e)-1];r+=s;}}class h extends I$1{static fromFeatures(e,r){const{objectIdField:s,geometryType:i}=r,n=et([],e,i,!1,!1,s);for(let t=0;t<n.length;t++)n[t].displayId=e[t].displayId;return h.fromOptimizedFeatures(n,r)}static fromFeatureSet(t,r){const s=it(t,r.objectIdField);return h.fromOptimizedFeatureSet(s,r)}static fromOptimizedFeatureSet(t,e){const{features:r}=t,s=h.fromOptimizedFeatures(r,e);return s._exceededTransferLimit=t.exceededTransferLimit,s._transform=t.transform,s._fieldsIndex=new r$2(e.fields),s}static fromOptimizedFeatures(t,e,r){const s=I$1.createInstance(),i=new h(s,t,e);return i._fieldsIndex=new r$2(e.fields),i._transform=r,i}constructor(t,e,r){super(t,r),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=r?.geometryType,this._features=e;}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return !!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return !1}get hasM(){return !1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!(null!=t.objectId&&e.has(t.objectId))));}append(t){for(const e of t)this._features.push(e);}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t;}getObjectId(){return this._current?.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t;}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t;}copy(){const t=new h(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return nt(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readUnquantizedGeometry();return st(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return null==t?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return s(this._current)?Nt(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return d(e),e}readHydratedGeometry(){const t=this._current.geometry;if(null==t)return null;const e=t.clone();return null!=this._transform&&It(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!s(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return null==e?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!s(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return null==e?t:e.translate[1]-t*e.scale[1]}getX(){return s(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return s(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!s(this._current)){if(null!=this._current.centroid){const[t,e]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(t,e)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const r of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=r;return t}readCentroid(){return s(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(t,e){const r=this._fieldsIndex.get(t);if(!r)return;let s=this._current.attributes[r.name];return null==s?s:("esriFieldTypeTimestampOffset"===this.fields.get(t)?.type&&(s=this.parseTimestampOffset(s)),e&&this.fields.isDateField(t)?new Date(s):s)}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._fieldsIndex=this._fieldsIndex;}_readAttributes(){return this._current.attributes}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const E=s$1.getLogger("esri.views.layers.2d.features.support.AttributeStore"),k=n$1(l$1,E),D={sharedArrayBuffer:has("esri-shared-array-buffer"),atomics:has("esri-atomics")};function F(t,e){return i=>e(t(i))}class I{constructor(t,e,i,s){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:r,layout:a,textureOnly:n}=s;this.textureOnly=n||!1,this.pixelType=r,this._ctype=e,this.layout=a,this._resetRange(),this._shared=t,this.size=i,n||(this.data=this._initData(r,i,t,e));}get buffer(){return n$2(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const i=this.data;for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1;}setComponentAllTexels(t,e){const i=this.data;for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1;}setComponent(t,e,i){const s=this.data;for(const r of i)s[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r);}setComponentTexel(t,e,i){this.data[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i);}unsetComponentTexel(t,e,i){this.data[i*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i);}getData(t,e){const i=f$1(t);return this.data[i*this.texelSize+e]}setData(t,e,i){const s=f$1(t),r=1<<e;0!=(this.layout&r)?null!=this.data&&(this.data[s*this.texelSize+e]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)):E.error("mapview-attributes-store","Tried to set a value for a texel's readonly component");}lock(){this.pixelType===U.UNSIGNED_BYTE&&this._shared&&D.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1);}unlock(){this.pixelType===U.UNSIGNED_BYTE&&this._shared&&D.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0);}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),i=this.data;e.set(i),this.data=e;}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,i=this.texelSize;if(t>e)return null;this._resetRange();const s=!(this._shared||"local"===this._ctype),r=this.pixelType,a=this.layout,n=this.data;return {start:t,end:e,data:s&&n.slice(t*i,(e+1)*i)||null,pixelType:r,layout:a}}_initData(t,e,i,s){const r=i&&"local"!==s?SharedArrayBuffer:ArrayBuffer,a=W(t),n=new a(new r(e*e*4*a.BYTES_PER_ELEMENT));for(let o=0;o<n.length;o+=4)n[o+1]=255;return n}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}}class B{constructor(t,e){this._client=t,this.config=e,this.updatingHandles=new c$2,this._blocks=new Array,this._filters=new Array(V),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const i=e.supportsTextureFloat?U.FLOAT:U.UNSIGNED_BYTE;k(`Creating AttributeStore ${D.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:U.UNSIGNED_BYTE,layout:1},{pixelType:U.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:U.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map((()=>null));}destroy(){this._abortController.abort(),this.updatingHandles.destroy();}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const t=this.updatingHandles.updating||!!this._nextUpdate;return has("esri-2d-log-updating")&&console.log(`Updating AttributeStore: ${t}\n  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})\n  -> nextUpdate: ${!!this._nextUpdate}\n`),t}update(t,e){this.config=e;const i=e.schema.processors[0].storage,s=a(this._schema,i);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),s&&(has("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",s),t.storage.data=!0,this._schema=i,this._attributeComputeInfo=null,null!=i)){switch(i.target){case"feature":this._targetType=u$2;break;case"aggregate":this._targetType=c$3;}if("subtype"===i.type){this._attributeComputeInfo={isSubtype:!0,subtypeField:i.subtypeField,map:new Map};for(const t in i.mapping){const e=i.mapping[t];if(null!=e&&null!=e.vvMapping)for(const i of e.vvMapping)this._bindAttribute(i,parseInt(t,10));}}else {if(this._attributeComputeInfo={isSubtype:!1,map:new Map},null!=i.vvMapping)for(const t of i.vvMapping)this._bindAttribute(t);if(null!=i.attributeMapping)for(const t of i.attributeMapping)this._bindAttribute(t);}}}onTileData(t,e){if(null==e.addOrUpdate)return;const i=e.addOrUpdate.getCursor();for(;i.next();){const t=i.getDisplayId();this.setAttributeData(t,i);}}async setHighlight(t,e){const i=1,s=this._getBlock(0),r=e.map((t=>f$1(t)));s.lock(),s.unsetComponentAllTexels(0,i),s.setComponent(0,i,r),s.unlock(),this._idsToHighlight.clear();for(const a of t)this._idsToHighlight.add(a);await this.sendUpdates();}async updateFilters(t,e,i){has("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:s,spatialReference:r}=i,{filters:a}=e,n=a.map(((t,e)=>this._updateFilter(t,e,s,r))),o=(await Promise.all(n)).some((t=>t));has("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),o&&(t.storage.filters=!0,has("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"));}setData(t,e,i,s){const r=f$1(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,i,s);}getData(t,e,i){return this._getBlock(e).getData(t,i)}getHighlightFlag(t){return this._idsToHighlight.has(t)?W$1:0}unsetAttributeData(t){const e=f$1(t);this._getBlock(0).setData(e,0,0);}setAttributeData(t,e$1){const s=f$1(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e$1)),this._targetType!==e(t))return;const r=this._attributeComputeInfo,a=this.config.supportsTextureFloat?1:2,n=4;let o=null;r&&(o=r.isSubtype?r.map.get(e$1.readAttribute(r.subtypeField)):r.map,o&&o.size&&o.forEach(((t,r)=>{const o=r*a%n,l=Math.floor(r*a/n),h=this._getBlock(l+S),u=t(e$1);if(this.config.supportsTextureFloat)h.setData(s,o,u);else if(u===t$3)h.setData(s,o,255),h.setData(s,o+1,255);else {const t=i(Math.round(u),-32767,32766)+32768,e=255&t,r=(65280&t)>>8;h.setData(s,o,e),h.setData(s,o+1,r);}})));}sendUpdates(){if(has("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=C(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const e={blocks:this._blocks.map((t=>null!=t?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const t=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()));}else has("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");};has("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const i=this.updatingHandles.addPromise(this._client.update(e,this._signal).then(t).catch(t));return this._client.render(this._signal),i})).catch((e=>{if(d$2(e))return this._createResourcesPromise=null,this._createResources();E.error(new s$2("mapview-attribute-store","Encountered an error during client update",e));})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){function i(){const{normalizationField:e}=t;return e?i=>{const s=i.readAttribute(e);if(!s)return null;return i.readAttribute(t.field)/s}:e=>e.readAttribute(t.field)}function s(){return t.normalizationField&&E.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=>e.getComputedNumericAtIndex(t.fieldIndex)}let r;if(null!=t.fieldIndex)r=s();else {if(!t.field)return;r=i();}const{valueRepresentation:a}=t;if(a){r=F(r,(t=>l$2(t,a)));}const n=t=>null===t||isNaN(t)||t===1/0||t===-1/0?t$3:t,o=this._attributeComputeInfo;if(o.isSubtype){const i=o.map.get(e)??new Map;i.set(t.binding,F(r,n)),o.map.set(e,i);}else o.map.set(t.binding,F(r,n));}_createResources(){if(null!=this._createResourcesPromise)return this._createResourcesPromise;this._getBlock(Q),this._getBlock(R),k("Initializing AttributeStore");const e={shared:D.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:s$3(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},i=this._client.initialize(e,this._signal).catch((e=>{d$2(e)?this._createResourcesPromise=null:E.error(new s$2("mapview-attribute-store","Encountered an error during client initialization",e));}));return this._createResourcesPromise=i,i.then((()=>null==this._createResourcesPromise?this._createResources():void 0)),i}_getBlock(t){const e=this._blocks[t];if(null!=e)return e;k(`Initializing AttributeBlock at index ${t}`);const i=D.sharedArrayBuffer,s=this._client.type,r=new I(i,s,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return k("Expanding block size to",t,this._blocks),a$1(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return E.error(new s$2("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,i,s){const r=this._filters[e],a=null!=r&&r.hash;if(!r&&!t)return !1;if(a===JSON.stringify(t))return !1;if(null==t){if(!r)return !1;const t=1<<e+1,i=this._getBlock(0);return this._filters[e]=null,i.setComponentAllTexels(0,t),this.sendUpdates(),!0}const n=await this._getFilter(e,i);return await n.update(t,s),!0}async _getFilter(t,e){const i=this._filters[t];if(null!=i)return i;const{default:s}=await import('./FeatureFilter-d2aa7404.js'),r=new s({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new r$2(e.fields)});return this._filters[t]=r,r}isVisible(t){return !!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const i=i$1(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const s=!!(i&1<<r),a=this._filters[r];e|=(!s||null==a||a.check(t)?1:0)<<r;}let s=0;if(this._idsToHighlight.size){const e=t.getObjectId();s=this.getHighlightFlag(e);}return e<<1|s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$1{constructor(){this._freeIds=[],this._idCounter=1;}createId(r=!1){return s$4(this._getFreeId(),r)}releaseId(e){this._freeIds.push(e);}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s);}class r{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r$1,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[];}createBitset(){const e=this._bitsets.length;return this._bitsets.push(t.create(this._allocatedSize,n$3)),e+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize);}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);n(this._numerics[t],e,0);}_ensureInstanceId(t){n(this._instanceIds,t,0);}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);n(this._strings[t],e,null);}createDisplayId(t=!1){const s=this._idGenerator.createId();return s>this._allocatedSize&&this._expand(),s$4(s,t)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e);return this._idGenerator.releaseId(e&n$3)}getComputedNumeric(e,s){return this.getComputedNumericAtIndex(e&n$3,0)}setComputedNumeric(e,s,i){return this.setComputedNumericAtIndex(e&n$3,i,0)}getComputedString(e,s){return this.getComputedStringAtIndex(e&n$3,0)}setComputedString(e,s,i){return this.setComputedStringAtIndex(e&n$3,0,i)}getComputedNumericAtIndex(e,s){const i=e&n$3;return this._ensureNumeric(s,i),this._numerics[s][i]}setComputedNumericAtIndex(e,s,i){const n=e&n$3;this._ensureNumeric(s,n),this._numerics[s][n]=i;}getInstanceId(e){const s=e&n$3;return this._ensureInstanceId(s),this._instanceIds[s]}setInstanceId(e,s){const i=e&n$3;this._ensureInstanceId(i),this._instanceIds[i]=s;}getComputedStringAtIndex(e,s){const i=e&n$3;return this._ensureString(s,i),this._strings[s][i]}setComputedStringAtIndex(e,s,i){const n=e&n$3;this._ensureString(s,n),this._strings[s][n]=i;}getXMin(e){return this._bounds[4*(e&n$3)]}getYMin(e){return this._bounds[4*(e&n$3)+1]}getXMax(e){return this._bounds[4*(e&n$3)+2]}getYMax(e){return this._bounds[4*(e&n$3)+3]}setBounds(e,s){const i=s.readHydratedGeometry();if(!i||!i.coords.length)return !1;let r=1/0,u=1/0,o=-1/0,h=-1/0;i.forEachVertex(((t,e)=>{r=Math.min(r,t),u=Math.min(u,e),o=Math.max(o,t),h=Math.max(h,e);}));const d=e&n$3;return n(this._bounds,4*d+4,0),this._bounds[4*d]=r,this._bounds[4*d+1]=u,this._bounds[4*d+2]=o,this._bounds[4*d+3]=h,!0}}

export { B, I$1 as I, h, r, t };

//# sourceMappingURL=ComputedAttributeStorage-eaf2407e.js.map