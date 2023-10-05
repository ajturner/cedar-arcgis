import { c } from './arcadeTimeUtils-79914cb4.js';
import { z, aj as l, q, Q, V, A, L, o as oe, ak as ce, X as Pe, B, v, M as me, E, U as t$1, al as t$3, O, f as fe, c as b, am as Te, an as I, a0 as o } from './arcadeUtils-0992d12d.js';
import { t, e } from './executionError-5ec41157.js';
import { e as e$1, j, q as q$1, f, c as c$1, a as e$2, b as a, d as a$1, g, k, F, T as T$1, y, x, E as E$1, D, A as A$1 } from './featureSetUtils-85dd1082.js';
import { t as t$2 } from './portalUtils-440c0f64.js';
import { e as u, N } from './SpatialFilter-0b8e97c4.js';
import { by as j$1, b8 as T, bw as Be, M as y$1 } from './interfaces-f9f0dded.js';
import { f as f$1 } from './WhereClause-9e131e32.js';
import './number-31e44bb8.js';
import './featureConversionUtils-da87b7fc.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './executeQuery-dca07954.js';
import './infoFor3D-0047d262.js';
import './executeQueryJSON-a16aae69.js';
import './normalizeUtils-6257e368.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './executeQueryPBF-24a7740f.js';
import './AttachmentInfo-fac6a5e9.js';
import './executeForIds-86c46f3a.js';
import './SubtypeGroupLayer-008965be.js';
import './loadAll-dc49c260.js';
import './_commonjsHelpers-b08b522c.js';
import './geometryEngineAsync-80d6d28e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function J(e,t,n,i){if(1===i.length){if(z(i[0]))return l(e,i[0],-1);if(q(i[0]))return l(e,i[0].toArray(),-1)}return l(e,i,-1)}async function K(e,t,n){const i=e.getVariables();if(i.length>0){const a=[];for(let e=0;e<i.length;e++){const r={name:i[e]};a.push(await t.evaluateIdentifier(n,r));}const r={};for(let e=0;e<i.length;e++)r[i[e]]=a[e];return e.parameters=r,e}return e}function Y(e,t,n=null){for(const i in e)if(i.toLowerCase()===t.toLowerCase())return e[i];return n}function X(e){if(null===e)return null;const t={type:Y(e,"type",""),name:Y(e,"name","")};if("range"===t.type)t.range=Y(e,"range",[]);else {t.codedValues=[];for(const n of Y(e,"codedValues",[]))t.codedValues.push({name:Y(n,"name",""),code:Y(n,"code",null)});}return t}function ee(e){if(null===e)return null;const t={},n=Y(e,"wkt",null);null!==n&&(t.wkt=n);const i=Y(e,"wkid",null);return null!==i&&(t.wkid=i),t}function te(e){if(null===e)return null;const t={hasZ:Y(e,"hasz",!1),hasM:Y(e,"hasm",!1)},n=Y(e,"spatialreference",null);n&&(t.spatialReference=ee(n));const i=Y(e,"x",null);if(null!==i)return t.x=i,t.y=Y(e,"y",null),t;const a=Y(e,"rings",null);if(null!==a)return t.rings=a,t;const r=Y(e,"paths",null);if(null!==r)return t.paths=r,t;const s=Y(e,"points",null);if(null!==s)return t.points=s,t;for(const l of ["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=Y(e,l,null);null!==n&&(t[l]=n);}return t}function ne(e,t){for(const n of t)if(n===e)return !0;return !1}function ie(e){return !!e.layerDefinition&&(!!e.featureSet&&(!1!==ne(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(!1!==z(e.layerDefinition.fields)&&!1!==z(e.featureSet.features))))}function ae(_){"async"===_.mode&&(_.functions.timezone=function(t$1,r){return _.standardFunctionAsync(t$1,r,(async(s,l,o)=>{if(Q(o,1,2,t$1,r),V(o[0])){if(await o[0].load(),1===o.length||null===o[1])return o[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(o[1]instanceof A)||!1===o[1].hasField("type"))throw new t(t$1,e.InvalidParameter,r);const e$1=o[1].field("type");if(!1===L(e$1))throw new t(t$1,e.InvalidParameter,r);switch(oe(e$1).toLowerCase()){case"preferredtimezone":return o[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return o[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return o[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(o[1].hasField("fieldname")&&L(o[1].field("fieldname")))return o[0].dateTimeReferenceFieldIndex.fieldTimeZone(oe(o[1].field("fieldname")))}throw new t(t$1,e.InvalidParameter,r)}const f=ce(o[0],Pe(t$1));if(null===f)return null;const u=f.timeZone;return "system"===u?c.systemTimeZoneCanonicalName:u}))},_.functions.sqltimestamp=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{Q(s,1,3,e$1,t$1);const l=s[0];if(B(l)){if(1===s.length)return l.toSQLString();if(2===s.length)return l.changeTimeZone(oe(s[1])).toSQLString();throw new t(e$1,e.InvalidParameter,t$1)}if(V(l)){if(3!==s.length)throw new t(e$1,e.InvalidParameter,t$1);await l.load();const n=oe(s[1]);if(!1===B(s[2]))throw new t(e$1,e.InvalidParameter,t$1);const r=l.fieldTimeZone(n);return null===r?s[2].toSQLString():s[2].changeTimeZone(r).toSQLString()}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"sqltimestamp",min:2,max:4}),_.functions.featuresetbyid=function(e$2,t$1){return _.standardFunctionAsync(e$2,t$1,((n,r,l)=>{if(Q(l,2,4,e$2,t$1),l[0]instanceof e$1){const n=oe(l[1]);let r=v(l[2],null);const s=me(v(l[3],!0));if(null===r&&(r=["*"]),!1===z(r))throw new t(e$2,e.InvalidParameter,t$1);return l[0].featureSetById(n,s,r)}throw new t(e$2,e.InvalidParameter,t$1)}))},_.signatures.push({name:"featuresetbyid",min:2,max:4}),_.functions.getfeatureset=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,((n,r,s)=>{if(Q(s,1,2,e$1,t$1),E(s[0])){let t=v(s[1],"datasource");return null===t&&(t="datasource"),t=oe(t).toLowerCase(),j(s[0].fullSchema(),t,e$1.lrucache,e$1.interceptor,e$1.spatialReference)}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"getfeatureset",min:1,max:2}),_.functions.featuresetbyportalitem=function(e$1,n){return _.standardFunctionAsync(e$1,n,((r,s,l)=>{if(Q(l,2,5,e$1,n),null===l[0])throw new t(e$1,e.PortalRequired,n);if(l[0]instanceof t$1){const t$1=oe(l[1]),r=oe(l[2]);let s=v(l[3],null);const f=me(v(l[4],!0));if(null===s&&(s=["*"]),!1===z(s))throw new t(e$1,e.InvalidParameter,n);let u=null;return u=e$1.services&&e$1.services.portal?e$1.services.portal:j$1.getDefault(),u=t$2(l[0],u),q$1(t$1,r,e$1.spatialReference,s,f,u,e$1.lrucache,e$1.interceptor)}if(!1===L(l[0]))throw new t(e$1,e.PortalRequired,n);const f=oe(l[0]),u=oe(l[1]);let c=v(l[2],null);const d=me(v(l[3],!0));if(null===c&&(c=["*"]),!1===z(c))throw new t(e$1,e.InvalidParameter,n);return q$1(f,u,e$1.spatialReference,c,d,e$1.services?.portal??j$1.getDefault(),e$1.lrucache,e$1.interceptor)}))},_.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),_.functions.featuresetbyname=function(e$2,t$1){return _.standardFunctionAsync(e$2,t$1,((n,r,l)=>{if(Q(l,2,4,e$2,t$1),l[0]instanceof e$1){const n=oe(l[1]);let r=v(l[2],null);const s=me(v(l[3],!0));if(null===r&&(r=["*"]),!1===z(r))throw new t(e$2,e.InvalidParameter,t$1);return l[0].featureSetByName(n,s,r)}throw new t(e$2,e.InvalidParameter,t$1)}))},_.signatures.push({name:"featuresetbyname",min:2,max:4}),_.functions.featureset=function(e$1,t$1){return _.standardFunction(e$1,t$1,((r,s,l)=>{Q(l,1,1,e$1,t$1);let o=l[0];const f$1={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(L(o))o=JSON.parse(o),void 0!==o.layerDefinition?(f$1.layerDefinition=o.layerDefinition,f$1.featureSet=o.featureSet,o.layerDefinition.spatialReference&&(f$1.layerDefinition.spatialReference=o.layerDefinition.spatialReference)):(f$1.featureSet.features=o.features,f$1.featureSet.geometryType=o.geometryType,f$1.layerDefinition.geometryType=f$1.featureSet.geometryType,f$1.layerDefinition.objectIdField=o.objectIdFieldName??"",f$1.layerDefinition.typeIdField=o.typeIdFieldName,f$1.layerDefinition.globalIdField=o.globalIdFieldName,f$1.layerDefinition.fields=o.fields,o.spatialReference&&(f$1.layerDefinition.spatialReference=o.spatialReference));else {if(!(l[0]instanceof A))throw new t(e$1,e.InvalidParameter,t$1);{o=JSON.parse(l[0].castToText(!0));const e=Y(o,"layerdefinition");if(null!==e){f$1.layerDefinition.geometryType=Y(e,"geometrytype",""),f$1.featureSet.geometryType=f$1.layerDefinition.geometryType,f$1.layerDefinition.globalIdField=Y(e,"globalidfield",""),f$1.layerDefinition.objectIdField=Y(e,"objectidfield",""),f$1.layerDefinition.typeIdField=Y(e,"typeidfield",""),f$1.layerDefinition.hasZ=!0===Y(e,"hasz",!1),f$1.layerDefinition.hasM=!0===Y(e,"hasm",!1);const t=Y(e,"spatialreference",null);t&&(f$1.layerDefinition.spatialReference=ee(t));for(const i of Y(e,"fields",[])){const e={name:Y(i,"name",""),alias:Y(i,"alias",""),type:Y(i,"type",""),nullable:Y(i,"nullable",!0),editable:Y(i,"editable",!0),length:Y(i,"length",null),domain:X(Y(i,"domain"))};f$1.layerDefinition.fields.push(e);}const n=Y(o,"featureset",null);if(n){const e={};for(const t of f$1.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of Y(n,"features",[])){const n={},i=Y(t,"attributes",{});for(const t in i)n[e[t.toLowerCase()]]=i[t];f$1.featureSet.features.push({attributes:n,geometry:te(Y(t,"geometry",null))});}}}else {f$1.layerDefinition.hasZ=!0===Y(o,"hasz",!1),f$1.layerDefinition.hasM=!0===Y(o,"hasm",!1),f$1.layerDefinition.geometryType=Y(o,"geometrytype",""),f$1.featureSet.geometryType=f$1.layerDefinition.geometryType,f$1.layerDefinition.objectIdField=Y(o,"objectidfieldname",""),f$1.layerDefinition.typeIdField=Y(o,"typeidfieldname","");const e=Y(o,"spatialreference",null);e&&(f$1.layerDefinition.spatialReference=ee(e));let t=Y(o,"fields",null);if(z(t))for(const a of t){const e={name:Y(a,"name",""),alias:Y(a,"alias",""),type:Y(a,"type",""),nullable:Y(a,"nullable",!0),editable:Y(a,"editable",!0),length:Y(a,"length",null),domain:X(Y(a,"domain"))};f$1.layerDefinition.fields.push(e);}else t=null,f$1.layerDefinition.fields=t;const n={};for(const a of f$1.layerDefinition.fields)n[a.name.toLowerCase()]=a.name;let i=Y(o,"features",null);if(z(i))for(const a of i){const e={},t=Y(a,"attributes",{});for(const i in t)e[n[i.toLowerCase()]]=t[i];f$1.featureSet.features.push({attributes:e,geometry:te(Y(a,"geometry",null))});}else i=null,f$1.featureSet.features=i;}}}if(!1===ie(f$1))throw new t(e$1,e.InvalidParameter,t$1);return ""===(f$1?.layerDefinition?.geometryType||"")&&(f$1.layerDefinition.geometryType="esriGeometryNull"),f.create(f$1,e$1.spatialReference)}))},_.signatures.push({name:"featureset",min:1,max:1}),_.functions.filter=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{if(Q(s,2,2,e$1,t$1),z(s[0])||q(s[0])){const n=[];let r=s[0];r instanceof t$3&&(r=r.toArray());let l=null;if(!O(s[1]))throw new t(e$1,e.InvalidParameter,t$1);l=s[1].createFunction(e$1);for(const e of r){const t=l(e);T(t)?!0===await t&&n.push(e):!0===t&&n.push(e);}return n}if(V(s[0])){const t=await s[0].load(),n=f$1.create(s[1],t.getFieldsIndex()),i=n.getVariables();if(i.length>0){const t=[];for(let n=0;n<i.length;n++){const a={name:i[n]};t.push(await _.evaluateIdentifier(e$1,a));}const a={};for(let e=0;e<i.length;e++)a[i[e]]=t[e];return n.parameters=a,new c$1({parentfeatureset:s[0],whereclause:n})}return new c$1({parentfeatureset:s[0],whereclause:n})}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"filter",min:2,max:2}),_.functions.orderby=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{if(Q(s,2,2,e$1,t$1),V(s[0])){const e=new e$2(s[1]);return new a({parentfeatureset:s[0],orderbyclause:e})}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"orderby",min:2,max:2}),_.functions.top=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{if(Q(s,2,2,e$1,t$1),V(s[0]))return new a$1({parentfeatureset:s[0],topnum:s[1]});if(z(s[0]))return fe(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,fe(s[1]));if(q(s[0]))return fe(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,fe(s[1]));throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"top",min:2,max:2}),_.functions.first=function(e,t){return _.standardFunctionAsync(e,t,(async(n,i,a)=>{if(Q(a,1,1,e,t),V(a[0])){const t=await a[0].first(n.abortSignal);if(null!==t){const n=b.createFromGraphicLikeObject(t.geometry,t.attributes,a[0],e.timeReference);return n._underlyingGraphic=t,n}return t}return z(a[0])?0===a[0].length?null:a[0][0]:q(a[0])?0===a[0].length()?null:a[0].get(0):null}))},_.signatures.push({name:"first",min:1,max:1}),_.functions.attachments=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(r,s,l)=>{Q(l,1,2,e$1,t$1);const o={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(l.length>1)if(l[1]instanceof A){if(l[1].hasField("minsize")&&(o.minsize=fe(l[1].field("minsize"))),l[1].hasField("metadata")&&(o.returnMetadata=me(l[1].field("metadata"))),l[1].hasField("maxsize")&&(o.maxsize=fe(l[1].field("maxsize"))),l[1].hasField("types")){const e=Te(l[1].field("types"),!1);e.length>0&&(o.types=e);}}else if(null!==l[1])throw new t(e$1,e.InvalidParameter,t$1);if(E(l[0])){let t=l[0]._layer;return t instanceof Be&&(t=g(t,e$1.spatialReference,["*"],!0,e$1.lrucache,e$1.interceptor)),null===t?[]:!1===V(t)?[]:(await t.load(),t.queryAttachments(l[0].field(t.objectIdField),o.minsize,o.maxsize,o.types,o.returnMetadata))}if(null===l[0])return [];throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"attachments",min:1,max:2}),_.functions.featuresetbyrelationshipname=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{Q(s,2,4,e$1,t$1);const l=s[0],o=oe(s[1]);let d=v(s[2],null);const m=me(v(s[3],!0));if(null===d&&(d=["*"]),!1===z(d))throw new t(e$1,e.InvalidParameter,t$1);if(null===s[0])return null;if(!E(s[0]))throw new t(e$1,e.InvalidParameter,t$1);let h=l._layer;if(h instanceof Be&&(h=g(h,e$1.spatialReference,["*"],!0,e$1.lrucache,e$1.interceptor)),null===h)return null;if(!1===V(h))return null;h=await h.load();const w=h.relationshipMetaData().filter((e=>e.name===o));if(0===w.length)return null;if(void 0!==w[0].relationshipTableId&&null!==w[0].relationshipTableId&&w[0].relationshipTableId>-1)return k(h,w[0],l.field(h.objectIdField),h.spatialReference,d,m,e$1.lrucache,e$1.interceptor);let I=h.serviceUrl();if(!I)return null;I="/"===I.charAt(I.length-1)?I+w[0].relatedTableId.toString():I+"/"+w[0].relatedTableId.toString();const F$1=await F(I,h.spatialReference,d,m,e$1.lrucache,e$1.interceptor);await F$1.load();let A=F$1.relationshipMetaData();if(A=A.filter((e=>e.id===w[0].id)),!1===l.hasField(w[0].keyField)||null===l.field(w[0].keyField)){const e=await h.getFeatureByObjectId(l.field(h.objectIdField),[w[0].keyField]);if(e){const t=f$1.create(A[0].keyField+"= @id",F$1.getFieldsIndex());return t.parameters={id:e.attributes[w[0].keyField]},F$1.filter(t)}return new u({parentfeatureset:F$1})}const N=f$1.create(A[0].keyField+"= @id",F$1.getFieldsIndex());return N.parameters={id:l.field(w[0].keyField)},F$1.filter(N)}))},_.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),_.functions.featuresetbyassociation=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{Q(s,2,3,e$1,t$1);const l=s[0],o$1=oe(v(s[1],"")).toLowerCase(),u=L(s[2])?oe(s[2]):null;if(null===s[0])return null;if(!E(s[0]))throw new t(e$1,e.InvalidParameter,t$1);let c=l._layer;if(c instanceof Be&&(c=g(c,e$1.spatialReference,["*"],!0,e$1.lrucache,e$1.interceptor)),null===c)return null;if(!1===V(c))return null;await c.load();const m=c.serviceUrl(),w=await T$1(m,e$1.spatialReference);let I$1=null,F=null,E$2=!1;if(null!==u&&""!==u&&void 0!==u){for(const e of w.terminals)e.terminalName===u&&(F=e.terminalId);null===F&&(E$2=!0);}const b=w.associations.getFieldsIndex(),A=b.get("TOGLOBALID").name,N=b.get("FROMGLOBALID").name,S=b.get("TOTERMINALID").name,T=b.get("FROMTERMINALID").name,$=b.get("FROMNETWORKSOURCEID").name,M=b.get("TONETWORKSOURCEID").name,O=b.get("ASSOCIATIONTYPE").name,k=b.get("ISCONTENTVISIBLE").name,z=b.get("OBJECTID").name;for(const e of c.fields)if("global-id"===e.type){I$1=l.field(e.name);break}let H=null,Z=new y(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),f$1.create("0",w.associations.getFieldsIndex())),W=new y(new y$1({name:"side",alias:"side",type:"string"}),f$1.create("''",w.associations.getFieldsIndex()));const _="globalid",U="globalId",Q$1={};for(const e in w.lkp)Q$1[e]=w.lkp[e].sourceId;const J=new x(new y$1({name:"classname",alias:"classname",type:"string"}),null,Q$1);let K="";switch(o$1){case"midspan":{K=`((${A}='${I$1}') OR ( ${N}='${I$1}')) AND (${O} IN (5))`,J.codefield=f$1.create(`CASE WHEN (${A}='${I$1}') THEN ${$} ELSE ${M} END`,w.associations.getFieldsIndex());const e=o(D.findField(w.associations.fields,N));e.name=_,e.alias=_,H=new y(e,f$1.create(`CASE WHEN (${N}='${I$1}') THEN ${A} ELSE ${N} END`,w.associations.getFieldsIndex())),Z=w.unVersion>=4?new A$1(D.findField(w.associations.fields,b.get("PERCENTALONG").name)):new y(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),f$1.create("0",w.associations.getFieldsIndex()));break}case"junctionedge":{K=`((${A}='${I$1}') OR ( ${N}='${I$1}')) AND (${O} IN (4,6))`,J.codefield=f$1.create(`CASE WHEN (${A}='${I$1}') THEN ${$} ELSE ${M} END`,w.associations.getFieldsIndex());const e=o(D.findField(w.associations.fields,N));e.name=_,e.alias=_,H=new y(e,f$1.create(`CASE WHEN (${N}='${I$1}') THEN ${A} ELSE ${N} END`,w.associations.getFieldsIndex())),W=new y(new y$1({name:"side",alias:"side",type:"string"}),f$1.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,w.associations.getFieldsIndex()));break}case"connected":{let e=`${A}='@T'`,t=`${N}='@T'`;null!==F&&(e+=` AND ${S}=@A`,t+=` AND ${T}=@A`),K="(("+e+") OR ("+t+"))",K=I(K,"@T",I$1??""),e=I(e,"@T",I$1??""),null!==F&&(e=I(e,"@A",F.toString()),K=I(K,"@A",F.toString())),J.codefield=f$1.create("CASE WHEN "+e+` THEN ${$} ELSE ${M} END`,w.associations.getFieldsIndex());const n=o(D.findField(w.associations.fields,N));n.name=_,n.alias=_,H=new y(n,f$1.create("CASE WHEN "+e+` THEN ${N} ELSE ${A} END`,w.associations.getFieldsIndex()));break}case"container":K=`${A}='${I$1}' AND ${O} = 2`,null!==F&&(K+=` AND ${S} = `+F.toString()),J.codefield=$,K="( "+K+" )",H=new E$1(D.findField(w.associations.fields,N),_,_);break;case"content":K=`(${N}='${I$1}' AND ${O} = 2)`,null!==F&&(K+=` AND ${T} = `+F.toString()),J.codefield=M,K="( "+K+" )",H=new E$1(D.findField(w.associations.fields,A),_,_);break;case"structure":K=`(${A}='${I$1}' AND ${O} = 3)`,null!==F&&(K+=` AND ${S} = `+F.toString()),J.codefield=$,K="( "+K+" )",H=new E$1(D.findField(w.associations.fields,N),_,U);break;case"attached":K=`(${N}='${I$1}' AND ${O} = 3)`,null!==F&&(K+=` AND ${T} = `+F.toString()),J.codefield=M,K="( "+K+" )",H=new E$1(D.findField(w.associations.fields,A),_,U);break;default:throw new t(e$1,e.InvalidParameter,t$1)}E$2&&(K="1 <> 1");return new D({parentfeatureset:w.associations,adaptedFields:[new A$1(D.findField(w.associations.fields,z)),new A$1(D.findField(w.associations.fields,k)),H,W,J,Z],extraFilter:K?f$1.create(K,w.associations.getFieldsIndex()):null})}))},_.signatures.push({name:"featuresetbyassociation",min:2,max:6}),_.functions.groupby=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(r,s,l)=>{if(Q(l,3,3,e$1,t$1),!V(l[0]))throw new t(e$1,e.InvalidParameter,t$1);const o=await l[0].load(),f=[],u=[];let c=!1,d=[];if(L(l[1]))d.push(l[1]);else if(l[1]instanceof A)d.push(l[1]);else if(z(l[1]))d=l[1];else {if(!q(l[1]))throw new t(e$1,e.InvalidParameter,t$1);d=l[1].toArray();}for(const m of d)if(L(m)){const e=f$1.create(oe(m),o.getFieldsIndex()),t=!0===N(e)?oe(m):"%%%%FIELDNAME";f.push({name:t,expression:e}),"%%%%FIELDNAME"===t&&(c=!0);}else {if(!(m instanceof A))throw new t(e$1,e.InvalidParameter,t$1);{const n=m.hasField("name")?m.field("name"):"%%%%FIELDNAME",r=m.hasField("expression")?m.field("expression"):"";if("%%%%FIELDNAME"===n&&(c=!0),!n)throw new t(e$1,e.InvalidParameter,t$1);f.push({name:n,expression:f$1.create(r||n,o.getFieldsIndex())});}}if(d=[],L(l[2]))d.push(l[2]);else if(z(l[2]))d=l[2];else if(q(l[2]))d=l[2].toArray();else {if(!(l[2]instanceof A))throw new t(e$1,e.InvalidParameter,t$1);d.push(l[2]);}for(const m of d){if(!(m instanceof A))throw new t(e$1,e.InvalidParameter,t$1);{const n=m.hasField("name")?m.field("name"):"",r=m.hasField("statistic")?m.field("statistic"):"",s=m.hasField("expression")?m.field("expression"):"";if(!n||!r||!s)throw new t(e$1,e.InvalidParameter,t$1);u.push({name:n,statistic:r.toLowerCase(),expression:f$1.create(s,o.getFieldsIndex())});}}if(c){const e={};for(const n of o.fields)e[n.name.toLowerCase()]=1;for(const n of f)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of u)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of f)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}for(const t of f)await K(t.expression,_,e$1);for(const t of u)await K(t.expression,_,e$1);return l[0].groupby(f,u)}))},_.signatures.push({name:"groupby",min:3,max:3}),_.functions.distinct=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(r,s,l)=>{if(V(l[0])){Q(l,2,2,e$1,t$1);const r=await l[0].load(),s=[];let o=[];if(L(l[1]))o.push(l[1]);else if(l[1]instanceof A)o.push(l[1]);else if(z(l[1]))o=l[1];else {if(!q(l[1]))throw new t(e$1,e.InvalidParameter,t$1);o=l[1].toArray();}let f=!1;for(const l of o)if(L(l)){const e=f$1.create(oe(l),r.getFieldsIndex()),t=!0===N(e)?oe(l):"%%%%FIELDNAME";s.push({name:t,expression:e}),"%%%%FIELDNAME"===t&&(f=!0);}else {if(!(l instanceof A))throw new t(e$1,e.InvalidParameter,t$1);{const n=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",o=l.hasField("expression")?l.field("expression"):"";if("%%%%FIELDNAME"===n&&(f=!0),!n)throw new t(e$1,e.InvalidParameter,t$1);s.push({name:n,expression:f$1.create(o||n,r.getFieldsIndex())});}}if(f){const e={};for(const n of r.fields)e[n.name.toLowerCase()]=1;for(const n of s)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}for(const t of s)await K(t.expression,_,e$1);return l[0].groupby(s,[])}return J("distinct",r,s,l)}))});}

export { ae as registerFunctions };

//# sourceMappingURL=featuresetbase-a4ca4319.js.map