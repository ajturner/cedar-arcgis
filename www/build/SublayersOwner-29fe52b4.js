import { jt as r, ju as c, J as s, hA as r$1, cM as V, c as j, aS as p, f5 as r$2, B as e, E as y, ai as o, b4 as M, ip as v, id as p$1, b5 as f$2, F as a, jf as n, aZ as a$1, dn as O, gt as s$1, H as _, s as s$2, jv as n$1, dL as r$3, jw as s$3, b as has, bG as x$1, k as s$4, jx as c$1, t as d, V as V$1, cU as v$1, i6 as e$1, ib as p$2, y as b, l as a$2, h6 as c$2, gI as n$2, gL as c$3, fh as o$1, M as y$1, jy as p$3, a7 as T, iN as C, a6 as r$4, hP as k, iQ as p$4, ic as n$3, cw as K$1, bu as v$2, ae as s$5, iT as n$4, an as l, b0 as U, jz as E$1 } from './interfaces-f9f0dded.js';
import { n as n$5 } from './CollectionFlattener-78984a9a.js';
import { x } from './QueryTask-d6524d40.js';
import { o as o$2 } from './sublayerUtils-84c54601.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f$1=f=>{let b=class extends f{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null;}readCapabilities(e,r$1){const t=r$1.capabilities&&r$1.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return {operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const s=this.type,o="tile"!==s&&!!r$1.supportsDynamicLayers,a=t.includes("query"),p=t.includes("map"),l=!!r$1.exportTilesAllowed,n=t.includes("tilemap"),c=t.includes("data"),u="tile"!==s&&(!r$1.tileInfo||o),y="tile"!==s&&(!r$1.tileInfo||o),m="tile"!==s,d=r$1.cimVersion&&r.parse(r$1.cimVersion),h=d?.since(1,4)??!1,f=d?.since(2,0)??!1;return {operations:{supportsExportMap:p,supportsExportTiles:l,supportsIdentify:a,supportsQuery:c,supportsTileMap:n},exportMap:p?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:m,supportsDynamicLayers:o,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:y,supportsCIMSymbols:f}:null,exportTiles:l?{maxExportTilesCount:+r$1.maxExportTilesCount}:null}}readVersion(e,r){let t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}async fetchRelatedService(e){const r=this.portalItem;if(!r||!c(r))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then((e=>e.find((e=>"Feature Service"===e.type))??null),(()=>null)));const t=await this._relatedFeatureServicePromise;return s(e),t?{itemId:t.id,url:t.url}:null}async fetchSublayerInfo(e,t){const{source:s}=e;if(this?.portalItem&&"tile"===this.type&&"map-layer"===s?.type&&c(this.portalItem)&&e.originIdOf("url")<r$1.SERVICE){const r=await this.fetchRelatedService(t);r&&(e.url=V(r.url,s.mapLayerId.toString()),e.layerItemId=r.itemId);}const{url:i}=e;let a;if("data-layer"===s.type){a=(await j(i,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...t})).data;}else if(i&&e.originIdOf("url")>r$1.SERVICE)try{a=(await this._fetchAllLayersAndTablesFromService(i)).get(s.mapLayerId);}catch{}else {let r=e.id;"map-layer"===s?.type&&(r=s.mapLayerId);try{a=(await this.fetchAllLayersAndTables(t)).get(r);}catch{}}return a}async fetchAllLayersAndTables(e){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,e)}async _fetchAllLayersAndTablesFromService(e,i){await this.load(i),this._allLayersAndTablesMap||=new Map;const a=p(e),p$1=r$2(this._allLayersAndTablesMap,a?.url.path,(()=>j(V(a?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{const r=new Map;for(const t of e.data.layers)r.set(t.id,t);return {result:r}}),(e=>({error:e}))))),l=await p$1;if(s(i),"result"in l)return l.result;throw l.error}};return e([y({readOnly:!0})],b.prototype,"capabilities",void 0),e([o("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],b.prototype,"readCapabilities",null),e([y({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0),e([y({type:M})],b.prototype,"fullExtent",void 0),e([y(v)],b.prototype,"id",void 0),e([y({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],b.prototype,"legendEnabled",void 0),e([y(p$1)],b.prototype,"popupEnabled",void 0),e([y({type:f$2})],b.prototype,"spatialReference",void 0),e([y({readOnly:!0})],b.prototype,"version",void 0),e([o("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],b.prototype,"readVersion",null),b=e([a("esri.layers.mixins.ArcGISMapService")],b),b};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var B;function J(e){return null!=e&&"esriSMS"===e.type}function $(e,r,t){const i=this.originIdOf(r)>=n(t.origin);return {ignoreOrigin:!0,allowNull:i,enabled:!!t&&("map-image"===t.layer?.type&&(t.writeSublayerStructure||i))}}function G(e,r,t){return {enabled:!!t&&("tile"===t.layer?.type&&(t.origin&&this.originIdOf(r)>=n(t.origin)||this._isOverridden(r)))}}function H(e,r,t){return {ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function z(e,r,t){return {ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=n(t.origin))}}let K=0;const W=new Set;W.add("layer"),W.add("parent"),W.add("loaded"),W.add("loadStatus"),W.add("loadError"),W.add("loadWarnings");let X=B=class extends(a$1(O(s$1(_)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null,this._lastParsedUrl=null;}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,url:t}=this;if(!r&&!t)throw new s$2("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=r?await r.fetchSublayerInfo(this,e):(await j(t,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}));})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:o},data:{supportsAttachment:s}}=n$1(r,this.url);return {exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:s},query:{supportsFormatPBF:o}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e);}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return {minScale:e,maxScale:r}}get fieldsIndex(){return new r$3(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e);}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeGlobalID"===t.type)return t.name}get id(){const e=this._get("id");return e??K++}set id(e){this._get("id")!==e&&(!1!==this.layer?.capabilities?.exportMap?.supportsDynamicLayers?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e);}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}});}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e);}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}set listMode(e){this._set("listMode",e);}set minScale(e){this._setAndNotifyLayer("minScale",e);}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e);}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeOID"===t.type)return t.name}set opacity(e){this._setAndNotifyLayer("opacity",e);}readOpacity(e,r){const t=r.layerDefinition;return 1-.01*((null!=t?.transparency?t.transparency:t?.drawingInfo?.transparency)??0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}};}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=s$3(this.parent.id):r.parentLayerId=-1;}get queryTask(){if(!this.layer)return null;const{spatialReference:e}=this.layer,r="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:t,fieldsIndex:i}=this,o=has("featurelayer-pbf")&&t?.query.supportsFormatPBF,s=t?.operations?.supportsQueryAttachments??!1;return new x({url:this.url,pbfSupported:o,fieldsIndex:i,gdbVersion:r,sourceSpatialReference:e,queryAttachmentsSupported:s})}set renderer(e){if(e)for(const r of e.getSymbols())if(x$1(r)){s$4.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e);}get source(){return this._get("source")||new c$1({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e);}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e);}castSublayers(e){return d(V$1.ofType(B),e)}writeSublayers(e,r,t){this.sublayers?.length&&(r[t]=this.sublayers.map((e=>e.id)).toArray().reverse());}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name);}return t}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===r?.type)return `${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return `${e.path}/dynamicLayer?${v$1(t)}`}set url(e){this._overrideIfSome("url",e);}set visible(e){this._setAndNotifyLayer("visible",e);}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e;}clone(){const{store:e}=e$1(this),r=new B;return e$1(r).store=e.clone(W),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return p$2(this,e)}createQuery(){return new b({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const{layer:e}=this,r=e?.parsedUrl,t=new(0,(await import('./interfaces-f9f0dded.js').then(function (n) { return n.kY; })).default)({url:r?.path});return r&&this.source&&("map-layer"===this.source.type?t.layerId=this.source.mapLayerId:t.dynamicDataSource=this.source),null!=e?.refreshInterval&&(t.refreshInterval=e.refreshInterval),this.definitionExpression&&(t.definitionExpression=this.definitionExpression),this.floorInfo&&(t.floorInfo=a$2(this.floorInfo)),this.originIdOf("labelingInfo")>r$1.SERVICE&&(t.labelingInfo=a$2(this.labelingInfo)),this.originIdOf("labelsVisible")>r$1.DEFAULTS&&(t.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>r$1.DEFAULTS&&(t.legendEnabled=this.legendEnabled),this.originIdOf("visible")>r$1.DEFAULTS&&(t.visible=this.visible),this.originIdOf("minScale")>r$1.DEFAULTS&&(t.minScale=this.minScale),this.originIdOf("maxScale")>r$1.DEFAULTS&&(t.maxScale=this.maxScale),this.originIdOf("opacity")>r$1.DEFAULTS&&(t.opacity=this.opacity),this.originIdOf("popupTemplate")>r$1.DEFAULTS&&(t.popupTemplate=a$2(this.popupTemplate)),this.originIdOf("renderer")>r$1.SERVICE&&(t.renderer=a$2(this.renderer)),"data-layer"===this.source?.type&&(t.dynamicDataSource=this.source.clone()),this.originIdOf("title")>r$1.DEFAULTS&&(t.title=this.title),"map-image"===e?.type&&e.originIdOf("customParameters")>r$1.DEFAULTS&&(t.customParameters=e.customParameters),"tile"===e?.type&&e.originIdOf("customParameters")>r$1.DEFAULTS&&(t.customParameters=e.customParameters),t}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let o=null;return t?.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(o=e),!!o)})),o}getFieldDomain(e,r){const t=r&&r.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryAttachments(e,r){await this.load(),e=c$2.from(e);const t=this.capabilities;if(!t?.data?.supportsAttachment)throw new s$2("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:o,globalIds:s,num:a,size:n,start:p,where:y}=e;if(!t?.operations?.supportsQueryAttachments){if(i?.length>0||s?.length>0||n?.length>0||a||p||y)throw new s$2("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)}if(!(o?.length||s?.length||y))throw new s$2("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e=this.createQuery(),r){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new s$2("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new s$2("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(e,{...r,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(t?.features)for(const i of t.features)i.sourceLayer=this;return t}toExportImageJSON(e){const r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=n$2(e,this.definitionExpression);null!=t&&(r.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),o=Object.keys(i).some((e=>i[e]>r$1.SERVICE));if(o){const e=r.drawingInfo={};if(i.renderer>r$1.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>r$1.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>r$1.SERVICE){!this.loaded&&this.labelingInfo.some((e=>!e.labelPlacement))&&s$4.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let r=this.labelingInfo;null!=this.geometryType&&(r=c$3(this.labelingInfo,o$1.toJSON(this.geometryType))),e.labelingInfo=r.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer}))),e.showLabels=!0;}i.opacity>r$1.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer);}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0]);}));}_forEachSimpleMarkerSymbols(e,r){if(e){const t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const e of t)J(e.symbol)&&r(e.symbol);"symbol"in e&&J(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&J(e.defaultSymbol)&&r(e.defaultSymbol);}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let o,s;switch(e){case"definitionExpression":case"floorInfo":o="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":o="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":o="supportsDynamicLayers",s="supportsModification";}const a=e$1(this).getDefaultOrigin();if("service"!==a){if(o&&!1===this.layer?.capabilities?.exportMap?.[o])return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${o}'`);if(s&&!1===this.capabilities?.exportMap[s])return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==a&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()");}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;})),e.on("before-changes",(e=>{const r=this.layer?.capabilities?.exportMap?.supportsSublayersChanges;null==r||r||(s$4.getLogger(this).error(new s$2("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault());}))]));}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;s$4.getLogger(i).error(new s$2("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t?.id}'`,{reason:r,sublayer:this,layer:t}));}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};X.test={isMapImageLayerOverridePolicy:e=>e===H||e===$,isTileImageLayerOverridePolicy:e=>e===G},e([y({readOnly:!0})],X.prototype,"capabilities",void 0),e([o("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],X.prototype,"readCapabilities",null),e([y()],X.prototype,"defaultPopupTemplate",null),e([y({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:$}}})],X.prototype,"definitionExpression",null),e([y({readOnly:!0})],X.prototype,"effectiveScaleRange",null),e([y({type:[y$1],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],X.prototype,"fields",void 0),e([y({readOnly:!0})],X.prototype,"fieldsIndex",null),e([y({type:p$3,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:$},origins:{"web-scene":{read:!1,write:!1}}}})],X.prototype,"floorInfo",null),e([y({type:M,json:{read:{source:"layerDefinition.extent"}}})],X.prototype,"fullExtent",void 0),e([y({type:o$1.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:o$1.read}}}}})],X.prototype,"geometryType",void 0),e([y({type:String})],X.prototype,"globalIdField",void 0),e([o("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],X.prototype,"readGlobalIdFieldFromService",null),e([y({type:T,json:{write:{ignoreOrigin:!0}}})],X.prototype,"id",null),e([y({value:null,type:[C],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:H}}})],X.prototype,"labelingInfo",null),e([r$4("labelingInfo")],X.prototype,"writeLabelingInfo",null),e([y({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:H}}})],X.prototype,"labelsVisible",null),e([y({value:null})],X.prototype,"layer",null),e([y({type:String,json:{write:{overridePolicy:G}}})],X.prototype,"layerItemId",void 0),e([y({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:z}}})],X.prototype,"legendEnabled",void 0),e([y({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],X.prototype,"listMode",null),e([y({type:Number,value:0,json:{write:{overridePolicy:H}}})],X.prototype,"minScale",null),e([o("minScale",["minScale","layerDefinition.minScale"])],X.prototype,"readMinScale",null),e([y({type:Number,value:0,json:{write:{overridePolicy:H}}})],X.prototype,"maxScale",null),e([o("maxScale",["maxScale","layerDefinition.maxScale"])],X.prototype,"readMaxScale",null),e([y({type:String})],X.prototype,"objectIdField",void 0),e([o("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],X.prototype,"readObjectIdFieldFromService",null),e([y({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:H}}})],X.prototype,"opacity",null),e([o("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],X.prototype,"readOpacity",null),e([r$4("opacity")],X.prototype,"writeOpacity",null),e([y({json:{type:T,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:H}}})],X.prototype,"parent",void 0),e([r$4("parent")],X.prototype,"writeParent",null),e([y({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:z,writer(e,r,t){r[t]=!e;}}}})],X.prototype,"popupEnabled",void 0),e([y({type:k,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:z}}})],X.prototype,"popupTemplate",void 0),e([y({readOnly:!0})],X.prototype,"queryTask",null),e([y({types:p$4,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:H},origins:{"web-scene":{types:n$3,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:H}}}}})],X.prototype,"renderer",null),e([y({types:{key:"type",base:null,typeMap:{"data-layer":K$1,"map-layer":c$1}},cast(e){if(e){if("mapLayerId"in e)return v$2(c$1,e);if("dataSource"in e)return v$2(K$1,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:H}}})],X.prototype,"source",null),e([y()],X.prototype,"sourceJSON",void 0),e([y({value:null,json:{type:[T],write:{target:"subLayerIds",allowNull:!0,overridePolicy:H}}})],X.prototype,"sublayers",null),e([s$5("sublayers")],X.prototype,"castSublayers",null),e([r$4("sublayers")],X.prototype,"writeSublayers",null),e([y({type:String,json:{name:"name",write:{overridePolicy:z}}})],X.prototype,"title",void 0),e([y({type:String})],X.prototype,"typeIdField",void 0),e([o("typeIdField",["layerDefinition.typeIdField"])],X.prototype,"readTypeIdField",null),e([y({type:[n$4],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],X.prototype,"types",void 0),e([y({type:String,json:{name:"layerUrl",write:{overridePolicy:G}}})],X.prototype,"url",null),e([y({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:H}}})],X.prototype,"visible",null),e([r$4("visible")],X.prototype,"writeVisible",null),X=B=e([a("esri.layers.support.Sublayer")],X);const Y=X;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=s$4.getLogger("esri.layers.TileLayer");function S(e,r){const s=[],t={};return e?(e.forEach((e=>{const o=new Y;if(o.read(e,r),t[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(o);}else s.unshift(o);})),s):s}const h=V$1.ofType(Y);function m(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&m(e.sublayers,r);}));}const E=o=>{let E=class extends o{constructor(...e){super(...e),this.allSublayers=new n$5({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[r$1.SERVICE]:{},[r$1.PORTAL_ITEM]:{},[r$1.WEB_SCENE]:{},[r$1.WEB_MAP]:{}},this.addHandles(l((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),U));}destroy(){this.allSublayers.destroy();}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:s}=this,t=n(r.origin);if(t<r$1.SERVICE)return;if(s[t]={context:r,visibleLayers:e.visibleLayers||s[t].visibleLayers,layers:e.layers||s[t].layers},t>r$1.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:o,origin:a}=this.createSublayersForOrigin("web-document"),l=e$1(this);l.setDefaultOrigin(a),this._set("sublayers",new h(o)),l.setDefaultOrigin("user");}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=n("web-document"===e?"web-map":e);let s=r$1.SERVICE,t=this.sublayersSourceJSON[r$1.SERVICE].layers,o=this.sublayersSourceJSON[r$1.SERVICE].context,a=null;const l=[r$1.PORTAL_ITEM,r$1.WEB_SCENE,r$1.WEB_MAP].filter((e=>e<=r));for(const u of l){const e=this.sublayersSourceJSON[u];o$2(e.layers)&&(s=u,t=e.layers,o=e.context,e.visibleLayers&&(a={visibleLayers:e.visibleLayers,context:e.context}));}const i=[r$1.PORTAL_ITEM,r$1.WEB_SCENE,r$1.WEB_MAP].filter((e=>e>s&&e<=r));let n$1=null;for(const u of i){const{layers:e,visibleLayers:r,context:s}=this.sublayersSourceJSON[u];e&&(n$1={layers:e,context:s}),r&&(a={visibleLayers:r,context:s});}const y=S(t,o),p=new Map,f=new Set;if(n$1)for(const u of n$1.layers)p.set(u.id,u);if(a?.visibleLayers)for(const u of a.visibleLayers)f.add(u);return m(y,(e=>{n$1&&e.read(p.get(e.id),n$1.context),a&&e.read({defaultVisibility:f.has(e.id)},a.context);})),{origin:E$1(s),sublayers:new h({items:y})}}read(e,r){super.read(e,r),this.readSublayers(e,r);}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this;})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(e=>{f.error(new s$2("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault();})),"sublayers-owner"));}};return e([y({readOnly:!0})],E.prototype,"allSublayers",void 0),e([y({readOnly:!0,type:V$1.ofType(Y)})],E.prototype,"serviceSublayers",void 0),e([y({value:null,type:h,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),e([y({readOnly:!0})],E.prototype,"sublayersSourceJSON",void 0),E=e([a("esri.layers.mixins.SublayersOwner")],E),E};

export { E, Y, f$1 as f };

//# sourceMappingURL=SublayersOwner-29fe52b4.js.map