import { J as s, b2 as S, dS as p, dL as r, s as s$1, aA as d$2, a3 as d$3, k as s$2 } from './interfaces-f9f0dded.js';
import { r as rt, s as st } from './featureConversionUtils-da87b7fc.js';
import { m } from './FeatureStore-0f567c10.js';
import { g, f } from './projectionSupport-edf32891.js';
import { e as ee } from './QueryEngine-2a82a9e2.js';
import { T, I } from './geojson-30fd41cb.js';
import { d as d$1 } from './sourceUtils-7a4fd252.js';
import { H } from './wfsUtils-add17caf.js';
import './_commonjsHelpers-b08b522c.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './BoundsStore-7edbe9f1.js';
import './PooledRBush-ebb61bcc.js';
import './quickselect-cc68e3d5.js';
import './timeSupport-a4d12066.js';
import './normalizeUtils-6257e368.js';
import './normalizeUtilsCommon-b073ef53.js';
import './json-4697dff9.js';
import './WhereClause-9e131e32.js';
import './executionError-5ec41157.js';
import './QueryEngineCapabilities-3153ed38.js';
import './quantizationUtils-33eaa35c.js';
import './utils-9b101bd7.js';
import './generateRendererUtils-ef8214c8.js';
import './Scheduler-1e6f0e40.js';
import './xmlUtils-cc71af12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class d{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r=await H(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await T(r),s(e);const a=I(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!S(this._queryEngine.spatialReference,p))for(const s of a)null!=s.geometry&&(s.geometry=rt(g(st(s.geometry,this._queryEngine.geometryType,!1,!1),p,this._queryEngine.spatialReference)));let p$1=1;for(const s of a){const e={};d$1(this._fieldsIndex,e,s.attributes,!0),s.attributes=e,null==s.attributes[t]&&(s.objectId=s.attributes[t]=p$1++);}return a};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e,t){const{getFeatureUrl:r$1,getFeatureOutputFormat:a,spatialReference:i,fields:n,geometryType:o,featureType:u,objectIdField:h,customParameters:y}=e;this._featureType=u,this._customParameters=y,this._getFeatureUrl=r$1,this._getFeatureOutputFormat=a,this._fieldsIndex=new r(n),await this._checkProjection(i),s(t),this._queryEngine=new ee({fields:n,geometryType:o,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:i,timeInfo:null,featureStore:new m({geometryType:o,hasM:!1,hasZ:!1})});const l=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(l),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new s$1("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(s){return this._customParameters=s,this._snapshotTask?.abort(),this._snapshotTask=d$2(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),d$3(e)||s$2.getLogger("esri.layers.WFSLayer").error(new s$1("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}));})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await f(p,e);}catch{throw new s$1("unsupported-projection","Projection not supported",{spatialReference:e})}}}

export default d;

//# sourceMappingURL=WFSSourceWorker-c459ba7a.js.map