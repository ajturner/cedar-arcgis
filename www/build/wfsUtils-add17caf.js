import { c as j$1, fX as n$1, dS as p, s as s$1, fY as ht, cR as F$1, fZ as yt, aN as o$1, M as y, b5 as f, b4 as M$1, b2 as S$1, d1 as Rn, aV as nn, i as j$2, fh as o$2 } from './interfaces-f9f0dded.js';
import { s as s$2 } from './geojson-30fd41cb.js';
import { n as n$2, o } from './xmlUtils-cc71af12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){return t(e)??n(e)}function n(e){const n=new Date(e).getTime();return Number.isNaN(n)?null:n}function t(e){const n=s.exec(e);if(!n?.groups)return null;const t=n.groups,u=+t.year,o=+t.month-1,r=+t.day,f=+(t.hours??"0"),i=+(t.minutes??"0"),d=+(t.seconds??"0");if(f>23)return null;if(i>59)return null;if(d>59)return null;const l=t.ms??"0",c=l?+l.padEnd(3,"0").substring(0,3):0;let a;if(t.isUTC)a=Date.UTC(u,o,r,f,i,d,c);else if(t.offsetSign){const e=+t.offsetHours,n=+t.offsetMinutes;a=6e4*("+"===t.offsetSign?-1:1)*(60*e+n)+Date.UTC(u,o,r,f,i,d,c);}else a=new Date(u,o,r,f,i,d,c).getTime();return Number.isNaN(a)?null:a}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const T="xlink:href",F="2.0.0",S="__esri_wfs_id__",x="wfs-layer:getWFSLayerTypeInfo-error",C="wfs-layer:empty-service",E="wfs-layer:feature-type-not-found",N="wfs-layer:geojson-not-supported",P="wfs-layer:kvp-encoding-not-supported",R="wfs-layer:malformed-json",j="wfs-layer:unknown-geometry-type",A="wfs-layer:unknown-field-type",G="wfs-layer:unsupported-spatial-reference",k="wfs-layer:unsupported-wfs-version";async function v(t,r){const n=U((await j$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F,...r?.customParameters},signal:r?.signal})).data);return O(t,n),n}function U(e){const t=Z(e);te(t),re(t);const n=t.firstElementChild,a=n$1(L(n));return {operations:I(n),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const D=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function I(e){let r=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(o(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return {DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(T);}}}};case"DescribeFeatureType":return {DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(T);}}}};case"GetFeature":return {DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(T);}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:e=>{const t=e.textContent;t&&D.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t);}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return {DefaultValue:e=>{r="true"===e.textContent.toLowerCase();}};case"ImplementsResultPaging":return {DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase();}}}}}}),!r)throw new s$1(P,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new s$1(N,"WFS service doesn't support GeoJSON output format");return n}function O(e,t){ht(e)&&(F$1(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=yt(t.operations.DescribeFeatureType.url)),F$1(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=yt(t.operations.GetFeature.url)));}function L(e){return n$2(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),n=e=>{const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(t)||r.add(t);};return o(e,{Name:e=>{const{name:r,prefix:n}=ee(e.textContent);t.typeName=`${n}:${r}`,t.name=r,t.namespacePrefix=n,t.namespaceUri=e.lookupNamespaceURI(n);},Abstract:e=>{t.description=e.textContent;},Title:e=>{t.title=e.textContent;},WGS84BoundingBox:e=>{t.extent=$(e);},DefaultSRS:n,DefaultCRS:n,OtherSRS:n,OtherCRS:n}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...r),t}}})}function $(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));}return {xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:p}}function M(e,t,r){return o$1(e,(e=>r?e.name===t&&e.namespaceUri===r:e.typeName===t||e.name===t))}async function V(e,t,r,n={}){const{featureType:a,extent:o}=await W(e,t,r,n),{fields:s,geometryType:i,swapXY:p,objectIdField:u,geometryField:l}=await X(e,a.typeName,n);return {url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:s,geometryField:l,geometryType:i,objectIdField:u,spatialReference:n.spatialReference??f.WGS84,extent:o,swapXY:p,wfsCapabilities:e,customParameters:n.customParameters}}async function W(e,r,n,a={}){const{spatialReference:o=f.WGS84}=a,s=e.readFeatureTypes(),i=r?M(s,r,n):s.next().value;if(null==i)throw r?new s$1(E,`The type '${r}' could not be found in the service`):new s$1(C,"The service is empty");let m=new M$1({...i.extent,spatialReference:o});if(!S$1(o,p))try{await Rn(p,o,void 0,a),m=nn(m,p);}catch{throw new s$1(G,"Projection not supported")}return {extent:m,spatialReference:o,featureType:i}}async function X(e,r,n={}){const[o,s]=await j$2([z(e.operations.DescribeFeatureType.url,r,n),q(e,r,n)]);if(o.error||s.error)throw new s$1(x,`An error occurred while getting info about the feature type '${r}'`,{error:o.error||s.error});const{fields:i,errors:p}=o.value??{},u=o.value?.geometryType||s.value?.geometryType,l=s.value?.swapXY??!1;if(null==u)throw new s$1(j,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:u,fields:i,errors:p});return {...Y(i??[]),geometryType:u,swapXY:l}}function Y(e){const t=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new y({name:S,type:"oid",alias:S}),e.unshift(r)),{geometryField:t?.name??null,objectIdField:r.name,fields:e}}async function q(t,r,n={}){let a,o=!1;const[s,i]=await Promise.all([H(t.operations.GetFeature.url,r,t.operations.GetFeature.outputFormat,{...n,count:1}),j$1(t.operations.GetFeature.url,{responseType:"text",query:B(r,void 0,{...n,count:1}),signal:n?.signal})]),p="FeatureCollection"===s.type&&s.features[0]?.geometry;if(p){let e;switch(a=o$2.fromJSON(s$2(p.type)),p.type){case"Point":e=p.coordinates;break;case"LineString":case"MultiPoint":e=p.coordinates[0];break;case"MultiLineString":case"Polygon":e=p.coordinates[0][0];break;case"MultiPolygon":e=p.coordinates[0][0][0];}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(o=!0);}}return {geometryType:a,swapXY:o}}async function z(t,r,n){return _(r,(await j$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:r,...n?.customParameters},signal:n?.signal})).data)}function _(e,r){const{name:a}=ee(e),o=Z(r);re(o);const s=o$1(n$2(o.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:ee(e.getAttribute("type")).name})}),(({name:e})=>e===a));if(null!=s){const e=o$1(n$2(o.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===s.typeName));if(null!=e)return Q(e)}throw new s$1(E,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(o)})}const J=new Set(["objectid","fid"]);function Q(e){const r=[],n=[];let a;const o$1=n$2(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const s of o$1){const o$1=s.getAttribute("name");if(!o$1)continue;let i,p;if(s.hasAttribute("type")?i=ee(s.getAttribute("type")).name:o(s,{simpleType:{restriction:e=>(i=ee(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value");}})}}),!i)continue;const u="true"===s.getAttribute("nillable");let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new y({name:o$1,alias:o$1,type:"integer",nullable:u}));break;case"float":case"double":case"decimal":n.push(new y({name:o$1,alias:o$1,type:"double",nullable:u}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new y({name:o$1,alias:o$1,type:"string",nullable:u,length:p??255}));break;case"datetime":case"date":n.push(new y({name:o$1,alias:o$1,type:"date",nullable:u,length:p??36}));break;case"pointpropertytype":a="point",l=!0;break;case"multipointpropertytype":a="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,r.push(new s$1(j,`geometry type '${i}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new s$1(A,`Unknown field type '${i}'`,{type:(new XMLSerializer).serializeToString(e)}));}l&&n.push(new y({name:o$1,alias:o$1,type:"geometry",nullable:u}));}for(const t of n)if("integer"===t.type&&!t.nullable&&J.has(t.name.toLowerCase())){t.type="oid";break}return {geometryType:a,fields:n,errors:r}}async function H(r,n,a,o){let{data:s}=await j$1(r,{responseType:"text",query:B(n,a,o),signal:o?.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(o?.dateFields?.length){const e$1=new Set(o.dateFields);return JSON.parse(s,((t,r)=>e$1.has(t)?e(r):r))}return JSON.parse(s)}catch(i){throw new s$1(R,"Error while parsing the response",{response:s,error:i})}}function B(e,t,r){return {SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function K(t,r,n){const a=Z((await j$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:r,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal})).data);re(a);const o=Number.parseFloat(a.firstElementChild.getAttribute("numberMatched"));return Number.isNaN(o)?0:o}function Z(e){return (new DOMParser).parseFromString(e.trim(),"text/xml")}function ee(e){const[t,r]=e.split(":");return {prefix:r?t:"",name:r??t}}function te(e){const r=e.firstElementChild?.getAttribute("version");if(r&&r!==F)throw new s$1(k,`Unsupported WFS version ${r}. Supported version: ${F}`)}function re(e){let r="",n="";if(o(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent;}})}),r)throw new s$1(`wfs-layer:${r}`,n)}

export { H, M, S, V, Y, v };

//# sourceMappingURL=wfsUtils-add17caf.js.map