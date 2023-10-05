import { t } from './CircularArray-00e66d79.js';
import { k as s, fo as a$1, fp as s$1, b as has, ft as n, dT as i, ac as n$1, cD as d$1 } from './interfaces-f9f0dded.js';
import { i as i$1 } from './TileStore-178dd7b2.js';
import { I as I$1 } from './ComputedAttributeStorage-eaf2407e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r$1(r,a,t){if(null==r)return null;const u=a.readArcadeFeature();try{return r.evaluate({...t,$feature:u},r.services)}catch(n){return s.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",n),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._storage=s,this._bitsets={computed:s.getBitset(s.createBitset())};}get storage(){return this._storage}invalidate(){this._bitsets.computed.clear();}async updateSchema(t,i){const a=a$1(this._schema,i);if(this._schema=i,!i||null==a||!s$1(a,"attributes"))return;has("esri-2d-update-debug")&&console.debug("Applying Update - Store:",a),this._bitsets.computed.clear(),t.targets[i.name]=!0;const r=i.attributes,o=[],c=[];for(const e in r){const s=r[e];switch(s.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(s));break;case"label-expression":o.push(this._createLabelArcadeComputedField(s));break;case"statistic":c.push(s);}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&null!=e.expression&&e.expression.referencesScale())),this._statisticFields=c;}setComputedAttributes(e,s,t,i){const a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(t)){a.set(t);for(const a of this._computedFields){const r=this._evaluateField(s,a,i);switch(a.resultType){case"numeric":e.setComputedNumericAtIndex(t,a.fieldIndex,r);break;case"string":e.setComputedStringAtIndex(t,a.fieldIndex,r);}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex;return {...e,expression:await n(e.valueExpression,s,i)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex,{createLabelFunction:i}=await import('./labelFormatUtils-212d4271.js'),a=await i(e.label,t,s);return {...e,builder:a}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:a}=s;return r$1(a,e,{$view:{scale:t}})}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends I$1{static from(e,t){return new r(e.copy(),t)}constructor(r,t){super(I$1.createInstance(),r.fullSchema()),this._currentIndex=-1,this._reader=r,this._indices=t;}get fields(){return this._reader.fields}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return ++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e);}attachStorage(e){this._reader.attachStorage(e);}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,r){return this._reader.setComputedNumericAtIndex(r,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,r){return this._reader.setComputedStringAtIndex(0,r)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,r){this._reader.setComputedNumericAtIndex(e,r);}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,r){return this._reader.setComputedStringAtIndex(e,r)}transform(e,r,t,d){const a=this.copy();return a._reader=this._reader.transform(e,r,t,d),a}readAttribute(e,r=!1){return this._reader.readAttribute(e,r)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,r){return this._reader.setField(e,r)}keys(){return this._reader.keys()}castToText(e=!1){return this._reader.castToText(e)}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,r){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=i();function d(t,e){return t<<16|e}function h(t){return (4294901760&t)>>>16}function c(t){return 65535&t}const I={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class u extends a{constructor(a,r,n){super(a,r),this.featureAdapter=I,this.events=new n$1,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new t(50),this._index=i$1(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this.mode=n;}get storeStatistics(){let t=0,e=0,s=0;return this.forEach((a=>{const r=a.readGeometry();r&&(e+=r.isPoint?1:r.lengths.reduce(((t,e)=>t+e),0),s+=r.isPoint?1:r.lengths.length,t+=1);})),{featureCount:t,vertexCount:e,ringCount:s}}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(t,e){if(null==e.addOrUpdate)return e;if(e.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const s=e.addOrUpdate.getCursor();for(;s.next();){const e=s.getDisplayId();this.setComputedAttributes(this._storage,s,e,t.scale);}return e}this._featureSetsByInstance.set(e.addOrUpdate.instance,e.addOrUpdate);const s=e.addOrUpdate.getCursor();for(;s.next();)this._insertFeature(s,t.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),e}search(t){this._rebuildIndex();const e=t.id,s=this._indexSearchCache.find((t=>t.tileId===e));if(null!=s)return s.readers;const a=new Map,r$1=this._searchIndex(t.bounds),n=[];for(const i of r$1){const t=this._storage.getInstanceId(i),e=h(t),s=c(t);a.has(e)||a.set(e,[]);a.get(e).push(s);}return a.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);n.push(r.from(s,t));})),this._indexSearchCache.enqueue({tileId:e,readers:n}),n}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){const t=d(e.instance,e.getIndex()),a=e.getObjectId(),r=this._objectIdToDisplayId.get(a)??this._storage.createDisplayId();e.setDisplayId(r),s.setInstanceId(r,t),this._objectIdToDisplayId.set(a,r);}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0;}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),a=c(s),r=h(s),n=this._featureSetsByInstance.get(r);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),n.removeAtIndex(a),n.isEmpty&&this._featureSetsByInstance.delete(r),this._spatialIndexInvalid=!0;}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a);}));}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=h(s),r=c(s),n=this._getFeatureSet(a);n.setIndex(r),t(n);}));}forEachInBounds(t,e){const s=this._searchIndex(t);for(const a of s){e(this.lookupFeatureByDisplayId(a,this._storage));}}forEachBounds(t,e){this._rebuildIndex();for(const s of t){if(!s.readGeometry())continue;const t=s.getDisplayId();d$1(o,this._storage.getXMin(t),this._storage.getYMin(t),this._storage.getXMax(t),this._storage.getYMax(t)),e(o);}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s&&s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r));})),this.events.emit("changed");}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s);}));}lookupObjectId(t,e){const s=this.lookupFeatureByDisplayId(t,e);return null==s?null:s.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=h(e),a=c(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}_insertFeature(t,e){const s=this._storage,a=t.getObjectId(),r=d(t.instance,t.getIndex());s.getInstanceId(t.getDisplayId());let n=this._objectIdToDisplayId.get(a);n||(n=s.createDisplayId(),this._objectIdToDisplayId.set(a,n),this._spatialIndexInvalid=!0),t.setDisplayId(n),s.setInstanceId(n,r),this.setComputedAttributes(s,t,n,e);}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e);}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e);})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1;}_lookupFeature(t){const e=h(t),s=this._getFeatureSet(e);if(!s)return;const a=s.getCursor(),r=c(t);return a.setIndex(r),a}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}

export { I, a, r, u };

//# sourceMappingURL=FeatureStore2D-b458d82c.js.map