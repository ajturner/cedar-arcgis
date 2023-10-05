import { dS as p, c8 as l, s, Q as i, dO as B, dL as r, cy as v } from './interfaces-f9f0dded.js';
import { e as et, n as nt, t as tt } from './featureConversionUtils-da87b7fc.js';
import { t, n } from './objectIdUtils-d3fa4baf.js';
import { m } from './FeatureStore-0f567c10.js';
import { f, g } from './projectionSupport-edf32891.js';
import { e as ee } from './QueryEngine-2a82a9e2.js';
import { i as i$1, o, a } from './clientSideDefaults-ffa35fc5.js';
import { y, u, d, c, h } from './sourceUtils-7a4fd252.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const x=p,T={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:p},R={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function q(e){return l(e)?null!=e.z:!!e.hasZ}function w(e){return l(e)?null!=e.m:!!e.hasM}class D{constructor(){this._queryEngine=null,this._nextObjectId=null;}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(t$1){const i$2=[],{features:s$1}=t$1,n$1=this._inferLayerProperties(s$1,t$1.fields),r$1=t$1.fields||[],a$1=null!=t$1.hasM?t$1.hasM:!!n$1.hasM,p=null!=t$1.hasZ?t$1.hasZ:!!n$1.hasZ,h=!t$1.spatialReference&&!n$1.spatialReference,g=h?x:t$1.spatialReference||n$1.spatialReference,I=h?T:null,b=t$1.geometryType||n$1.geometryType,F=!b;let q=t$1.objectIdField||n$1.objectIdField,w=t$1.timeInfo;if(!F&&(h&&i$2.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!q)throw new s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n$1.objectIdField&&q!==n$1.objectIdField&&(i$2.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${q}" doesn't match the field name "${n$1.objectIdField}", found in the provided fields`}),q=n$1.objectIdField),q&&!n$1.objectIdField){let e=null;r$1.some((t=>t.name===q&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r$1.unshift({alias:q,name:q,type:"esriFieldTypeOID",editable:!1,nullable:!1});}for(const l of r$1){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new s("feature-layer:invalid-field-name","field name is missing",{field:l});if(l.name===q&&(l.type="esriFieldTypeOID"),!i.jsonValues.includes(l.type))throw new s("feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}const D={};for(const e of r$1)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=B(e);void 0!==t&&(D[e.name]=t);}if(this._fieldsIndex=new r(r$1),this._createDefaultAttributes=i$1(D,q),w){if(w.startTimeField){const e=this._fieldsIndex.get(w.startTimeField);e?(w.startTimeField=e.name,e.type="esriFieldTypeDate"):w.startTimeField=null;}if(w.endTimeField){const e=this._fieldsIndex.get(w.endTimeField);e?(w.endTimeField=e.name,e.type="esriFieldTypeDate"):w.endTimeField=null;}if(w.trackIdField){const e=this._fieldsIndex.get(w.trackIdField);e?w.trackIdField=e.name:(w.trackIdField=null,i$2.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}));}w.startTimeField||w.endTimeField||(i$2.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:w}}),w=null);}const O={warnings:i$2,featureErrors:[],layerDefinition:{...R,drawingInfo:o(b),templates:a(D),extent:I,geometryType:b,objectIdField:q,fields:r$1,hasZ:p,hasM:a$1,timeInfo:w},assignedObjectIds:{}};if(this._queryEngine=new ee({fields:r$1,geometryType:b,hasM:a$1,hasZ:p,objectIdField:q,spatialReference:g,featureStore:new m({geometryType:b,hasM:a$1,hasZ:p}),timeInfo:w,cacheSpatialQueries:!0}),!s$1||!s$1.length)return this._nextObjectId=t,O;const S=n(q,s$1);return this._nextObjectId=S+1,await f(s$1,g),this._loadInitialFeatures(O,s$1)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([y(t,i),f(e.adds,t),f(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,i){let s,n,r=null,a=null,l=null;for(const o of e){const e=o.geometry;if(null!=e&&(r||(r=v(e)),a||(a=e.spatialReference),null==s&&(s=q(e)),null==n&&(n=w(e)),r&&a&&null!=s&&null!=n))break}if(i&&i.length){let e=null;i.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name);}return {geometryType:r,spatialReference:a,objectIdField:l,hasM:n,hasZ:s}}async _loadInitialFeatures(e,i){const{geometryType:s,hasM:r,hasZ:a,objectIdField:l,spatialReference:o,featureStore:u$1}=this._queryEngine,d$1=[];for(const n of i){if(null!=n.uid&&(e.assignedObjectIds[n.uid]=-1),n.geometry&&s!==v(n.geometry)){e.featureErrors.push(u("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),r=d(this._fieldsIndex,i,n.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(i,n.attributes,!0),n.attributes=i,null!=n.uid&&(e.assignedObjectIds[n.uid]=n.attributes[l]),null!=n.geometry&&(n.geometry=g(n.geometry,n.geometry.spatialReference,o)),d$1.push(n));}u$1.addMany(et([],d$1,s,a,r,l));const{fullExtent:f,timeExtent:c}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,c){const{start:t,end:i}=c;e.layerDefinition.timeInfo.timeExtent=[t,i];}return e}async _applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(c(e));this._queryEngine.featureStore.removeManyById(s);}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return {extent:r,timeExtent:a,featureEditResults:n}}_applyAddEdits(e,i){const{addResults:s}=e,{geometryType:r,hasM:a,hasZ:l,objectIdField:o,spatialReference:u$1,featureStore:d$1}=this._queryEngine,f=[];for(const n of i){if(n.geometry&&r!==v(n.geometry)){s.push(u("Incorrect geometry type."));continue}const i=this._createDefaultAttributes(),a=d(this._fieldsIndex,i,n.attributes);if(a)s.push(a);else {if(this._assignObjectId(i,n.attributes),n.attributes=i,null!=n.uid){const t=n.attributes[o];e.uidToObjectId[n.uid]=t;}if(null!=n.geometry){const e=n.geometry.spatialReference??u$1;n.geometry=g(h(n.geometry,e),e,u$1);}f.push(n),s.push(c(n.attributes[o]));}}d$1.addMany(et([],f,r,l,a,o));}_applyUpdateEdits({updateResults:e},i){const{geometryType:s,hasM:n,hasZ:l,objectIdField:o,spatialReference:u$1,featureStore:d$1}=this._queryEngine;for(const f of i){const{attributes:i,geometry:c$1}=f,y=i&&i[o];if(null==y){e.push(u(`Identifier field ${o} missing`));continue}if(!d$1.has(y)){e.push(u(`Feature with object id ${y} missing`));continue}const m=nt(d$1.getFeature(y),s,l,n);if(null!=c$1){if(s!==v(c$1)){e.push(u("Incorrect geometry type."));continue}const i=c$1.spatialReference??u$1;m.geometry=g(h(c$1,i),i,u$1);}if(i){const t=d(this._fieldsIndex,m.attributes,i);if(t){e.push(t);continue}}d$1.add(tt(m,s,l,n,o)),e.push(c(y));}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++;}}

export default D;

//# sourceMappingURL=MemorySourceWorker-4bb07c5d.js.map