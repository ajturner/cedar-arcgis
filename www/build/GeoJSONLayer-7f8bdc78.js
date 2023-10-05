import { k as s, H as _, c2 as k, a0 as d, b4 as M$1, s as s$1, bi as j, w as f, b as has, fh as o, B as e, E as y$1, F as a, ia as s$2, iF as c$1, iG as o$1, iH as n, iI as p, i4 as a$1, iJ as a$2, i5 as t, i7 as p$1, dl as c$2, dm as j$1, dn as O, bW as b, b5 as f$1, d0 as f$2, iK as c$3, iL as p$2, bT as L, ib as p$3, y as b$1, ij as d$1, M as y$2, ip as v, iM as m$1, iN as C, iO as i, ii as c$4, iP as u, id as p$4, hP as k$1, iQ as p$5, ic as n$1, iR as l, iS as p$6, iT as n$2, dq as f$3 } from './interfaces-f9f0dded.js';
import { c } from './clientSideDefaults-ffa35fc5.js';
import './_commonjsHelpers-b08b522c.js';
import './QueryEngineCapabilities-3153ed38.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h="esri.layers.graphics.sources.GeoJSONSource",m=s.getLogger(h);let y=class extends _{constructor(){super(...arguments),this.type="geojson",this.refresh=k((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>d.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M$1.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new s$1("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new s$1("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:"mesh"===t.type||"extent"===t.type?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await f("GeoJSONSourceWorker",{strategy:has("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:o$1,geometryType:s,objectIdField:n,url:a,timeInfo:l,customParameters:c$1}=this.layer,d="defaults"===this.layer.originOf("spatialReference"),h={url:a,customParameters:c$1,fields:t&&t.map((e=>e.toJSON())),geometryType:o.toJSON(s),hasZ:o$1,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:d?null:r&&r.toJSON()},y=await this._connection.invoke("load",h,{signal:e});for(const i of y.warnings)m.warn(i.message,{layer:this.layer,warning:i});y.featureErrors.length&&m.warn(`Encountered ${y.featureErrors.length} validation errors while loading features`,y.featureErrors),this.sourceJSON=y.layerDefinition,this.capabilities=c(this.sourceJSON.hasZ,!0);}};e([y$1()],y.prototype,"capabilities",void 0),e([y$1()],y.prototype,"type",void 0),e([y$1({constructOnly:!0})],y.prototype,"layer",void 0),e([y$1()],y.prototype,"sourceJSON",void 0),y=e([a(h)],y);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const B=s$2();let Z=class extends(c$1(o$1(n(p(a$1(a$2(t(p$1(c$2(j$1(O(b)))))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new y({layer:this}),this.spatialReference=f$1.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null;}destroy(){this.source?.destroy();}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(f$2).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),c$3(this.renderer,this.fieldsIndex),p$2(this.timeInfo,this.fieldsIndex);}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?L(this.url):null}set renderer(e){c$3(e,this.fieldsIndex),this._set("renderer",e);}set url(e){if(!e)return void this._set("url",e);const t=L(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query});}async applyEdits(e,t){const{applyEdits:r}=await import('./editingSupport-3598e90b.js');await this.load();const i=await r(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return p$3(this,e)}createQuery(){const e=new b$1,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};e([y$1({readOnly:!0,json:{read:!1,write:!1}})],Z.prototype,"capabilities",null),e([y$1({type:String})],Z.prototype,"copyright",void 0),e([y$1({readOnly:!0})],Z.prototype,"createQueryVersion",null),e([y$1({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),e([y$1({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Z.prototype,"definitionExpression",void 0),e([y$1({type:String})],Z.prototype,"displayField",void 0),e([y$1({type:Boolean})],Z.prototype,"editingEnabled",void 0),e([y$1(d$1)],Z.prototype,"elevationInfo",void 0),e([y$1({type:[y$2],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],Z.prototype,"fields",void 0),e([y$1(B.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),e([y$1({type:M$1,json:{name:"extent"}})],Z.prototype,"fullExtent",void 0),e([y$1({type:["point","polygon","polyline","multipoint"],json:{read:{reader:o.read}}})],Z.prototype,"geometryType",void 0),e([y$1({type:Boolean})],Z.prototype,"hasZ",void 0),e([y$1(v)],Z.prototype,"id",void 0),e([y$1({type:Boolean,readOnly:!0})],Z.prototype,"isTable",null),e([y$1(m$1)],Z.prototype,"labelsVisible",void 0),e([y$1({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i},write:!0}})],Z.prototype,"labelingInfo",void 0),e([y$1(c$4)],Z.prototype,"legendEnabled",void 0),e([y$1({type:["show","hide"]})],Z.prototype,"listMode",void 0),e([y$1({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],Z.prototype,"objectIdField",void 0),e([y$1(u)],Z.prototype,"opacity",void 0),e([y$1({type:["GeoJSON"]})],Z.prototype,"operationalLayerType",void 0),e([y$1({readOnly:!0})],Z.prototype,"parsedUrl",null),e([y$1(p$4)],Z.prototype,"popupEnabled",void 0),e([y$1({type:k$1,json:{name:"popupInfo",write:!0}})],Z.prototype,"popupTemplate",void 0),e([y$1({types:p$5,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$1}}}})],Z.prototype,"renderer",null),e([y$1(l)],Z.prototype,"screenSizePerspectiveEnabled",void 0),e([y$1({readOnly:!0})],Z.prototype,"source",void 0),e([y$1({type:f$1})],Z.prototype,"spatialReference",void 0),e([y$1({type:[p$6]})],Z.prototype,"templates",void 0),e([y$1()],Z.prototype,"title",void 0),e([y$1({json:{read:!1},readOnly:!0})],Z.prototype,"type",void 0),e([y$1({type:String,readOnly:!0})],Z.prototype,"typeIdField",void 0),e([y$1({type:[n$2]})],Z.prototype,"types",void 0),e([y$1(f$3)],Z.prototype,"url",null),Z=e([a("esri.layers.GeoJSONLayer")],Z);const M=Z;

export default M;

//# sourceMappingURL=GeoJSONLayer-7f8bdc78.js.map