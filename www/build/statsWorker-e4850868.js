import { bN as C, bd as d$1, ag as x$1, d as u, bO as y$1, bP as m, o as i, b5 as f, s, Y as se, a1 as te } from './interfaces-f9f0dded.js';
import { L } from './quantizationUtils-33eaa35c.js';
import { c as c$1, z as z$1, m as m$1, f as f$1, d as d$2, g as g$1, x as x$2, F as F$1, D, S, M as M$1 } from './utils-9b101bd7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let p$1=null;function h(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function y(e,t,n,s){const l=C(n)?d$1(n):null,a=l?Math.round((l.valid[1]-l.valid[0])/t.scale[0]):null;return e.map((e=>{const n=new x$1(e.geometry);return L(t,n,n,n.hasZ,n.hasM),e.geometry=l?h(n,a??0,s[0]):n,e}))}function $(e,n=18,r,i,o,s){const l=new Float64Array(o*s);n=Math.round(u(n));let f=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,m$1=0,d=0,p=0,h=0;const y=y$1(i,r);for(const{geometry:t,attributes:u}of e){const{x:e,y:r}=t,i=Math.max(0,e-n),$=Math.max(0,r-n),I=Math.min(s,r+n),g=Math.min(o,e+n),j=+y(u);for(let t=$;t<I;t++)for(let s=i;s<g;s++){const i=t*o+s,u=m(s-e,t-r,n),y=l[i];m$1=l[i]+=u*j;const $=m$1-y;d+=$,p+=$*$,m$1<f&&(f=m$1),m$1>c&&(c=m$1),h++;}}if(!h)return {mean:0,stddev:0,min:0,max:0,mid:0,count:0};const $=(c-f)/2;return {mean:d/h,stdDev:Math.sqrt((p-d*d/h)/h),min:f,max:c,mid:$,count:h}}async function I(e,t){if(!t)return [];const{field:r,field2:i$1,field3:o,fieldDelimiter:s}=e,l=e.valueExpression,a=e.normalizationType,u=e.normalizationField,d=e.normalizationTotal,h=[],y=e.viewInfoParams;let $=null,I=null;if(l){if(!p$1){const{arcadeUtils:e}=await i();p$1=e;}p$1.hasGeometryOperations(l)&&await p$1.enableGeometryOperations(),$=p$1.createFunction(l),I=y&&p$1.getViewInfo({viewingMode:y.viewingMode,scale:y.scale,spatialReference:new f(y.spatialReference)});}const g=e.fieldInfos,j=!(t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass)&&g?{fields:g}:null;return t.forEach((e=>{const t=e.attributes;let n;if(l){const t=j?{...e,layer:j}:e,r=p$1.createExecContext(t,I);n=p$1.executeFunction($,r);}else t&&(n=t[r],i$1&&(n=`${c$1(n)}${s}${c$1(t[i$1])}`,o&&(n=`${n}${s}${c$1(t[o])}`)));if(a&&"number"==typeof n&&isFinite(n)){const e=t&&parseFloat(t[u]);n=z$1(n,a,e,d);}h.push(n);})),h}function g(e){const t=e.field,n=e.normalizationType,r=e.normalizationField;let i;return "field"===n?i="(NOT "+r+" = 0)":"log"!==n&&"natural-log"!==n&&"square-root"!==n||(i=`(${t} > 0)`),i}function j(e,t,n){const r=null!=t?e+" >= "+t:"",i=null!=n?e+" <= "+n:"";let o="";return o=r&&i?F(r,i):r||i,o?"("+o+")":""}function x(t,n,r,i){let o;return n?n.name!==t.objectIdField&&i.includes(n.type)||(o=new s(r,"'field' should be one of these types: "+i.join(","))):o=new s(r,"'field' is not defined in the layer schema"),o}function w(t,n,r){let i;return n?n.name!==t.objectIdField&&se(n)||(i=new s(r,"'field' should be one of these numeric types: "+te.join(","))):i=new s(r,"'field' is not defined in the layer schema"),i}function F(e,t){let n=null!=e?e:"";return null!=t&&t&&(n=n?"("+n+") AND ("+t+")":t),n}function b(t,n){if(t&&"intersects"!==t.spatialRelationship)return new s(n,"Only 'intersects' spatialRelationship is supported for featureFilter")}function v$1(t,n,r){const i=E({layer:t,fields:n});if(i.length)return new s(r,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");const o=N({layer:t,fields:n});return o.length?new s(r,"Unsupported fields: "+o.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function E(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}function N(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return !n||!n.supportsStatistics}))}function M(e,t,n){const r=[],i=[],o=[],s=[],l=[];e.forEach(((e,t)=>{const a=e.field?"field":"expression",u=e.field||e.valueExpression;e.field?(l.push(u),i.push(`var ${a}${t} = Number($feature["${u}"]);`)):(r.push(`function getValueForExpr${t}() {\n  ${u} \n}`),i.push(`var ${a}${t} = Number(getValueForExpr${t}());`)),n||o.push(`${a}${t} = IIf(${a}${t} < 0, 0, ${a}${t});`),s.push(`${a}${t}`);}));let a="return sum;";const u=r.length?null:l.reduce(((e,t)=>`${e} + ${t}`));let f=null;t||n?t?n||(a="return IIf(sum >= 0, sum, null);",u&&(f=`(( ${u} ) >= 0)`)):(a="return IIf(sum != 0, sum, null);",u&&(f=`(( ${u} ) <> 0)`)):(a="return IIf(sum > 0, sum, null);",u&&(f=`(( ${u} ) > 0)`));return {valueExpression:[r.length?r.join("\n"):"",i.join("\n"),o.join("\n"),`var sum = ${s.join(" + ")};`,a].filter(Boolean).join("\n\n"),sqlExpression:u,sqlWhere:f}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function d(a){const{attribute:e,features:s}=a,{normalizationType:r,normalizationField:m,minValue:f,maxValue:u,fieldType:d}=e,p=await I({field:e.field,valueExpression:e.valueExpression,normalizationType:r,normalizationField:m,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},s),v=m$1({normalizationType:r,normalizationField:m,minValue:f,maxValue:u}),c={value:.5,fieldType:d},z="esriFieldTypeString"===d?f$1({values:p,supportsNullCount:v,percentileParams:c}):d$2({values:p,minValue:f,maxValue:u,useSampleStdDev:!r,supportsNullCount:v,percentileParams:c});return g$1(z,"esriFieldTypeDate"===d)}async function p(a){const{attribute:e,features:n}=a,l=await I({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),o=x$2(l);return F$1(o,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function v(a){const{attribute:e,features:n}=a,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:s,classificationMethod:r}=e,u=await I({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:s,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),d=D(u,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:s,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return S(d,r)}async function c(a){const{attribute:e,features:n}=a,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:s,classificationMethod:r}=e,m=await I({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:t,normalizationTotal:s,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n);return M$1(m,{field:l,normalizationType:o,normalizationField:t,normalizationTotal:s,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function z(i){const{attribute:n,features:l}=i,{field:o,radius:t,fieldOffset:s,transform:r,spatialReference:m}=n,f=n.size??[0,0],u=y(l??[],r,m,f),{count:d,min:p,max:v,mean:c,stdDev:z}=$(u,t??void 0,s,o,f[0],f[1]);return {count:d,min:p,max:v,avg:c,stddev:z}}

const statsWorker = /*#__PURE__*/Object.freeze({
	__proto__: null,
	classBreaks: v,
	heatmapStatistics: z,
	histogram: c,
	summaryStatistics: d,
	uniqueValues: p
});

export { F, I, v$1 as a, b, c, d, g, j, p, statsWorker as s, v, x, z };

//# sourceMappingURL=statsWorker-e4850868.js.map