import { i } from './multiOriginJSONSupportUtils-c04f5031.js';
import { jd as d, iD as m, hY as c, je as R, jf as n, jg as Y, jh as v$1, ji as Z, jj as y, jk as o, jl as U$1, cM as V, dM as Bt } from './interfaces-f9f0dded.js';
import { n as n$1 } from './uuid-d7a4b2f1.js';
import { t } from './resourceExtension-f3ad4cdf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function g(t){const r=t?.origins??[void 0];return (e,o)=>{const s=h(t,e,o);for(const t of r){const r=d(e,t,o);for(const t in s)r[t]=s[t];}}}function h(t,r,e){if("resource"===t?.type)return v(t,r,e);switch(t?.type??"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=y;return {read:t,write:r}}}}function v(o$1,s,n$1){const p=o(s,n$1);return {type:String,read:(t,r,e)=>{const o=m(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,i$1,u,c$1){if(!c$1||!c$1.resources)return "string"==typeof s?void(i$1[u]=c(s,c$1)):void(i$1[u]=s.write({},c$1));const y=x(s),d=c(y,{...c$1,verifyItemRelativeUrls:c$1&&c$1.verifyItemRelativeUrls?{writtenUrls:c$1.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},R.NO),g=p.type!==String&&(!i(this)||c$1&&c$1.origin&&this.originIdOf(n$1)>n(c$1.origin)),h={object:this,propertyName:n$1,value:s,targetUrl:d,dest:i$1,targetPropertyName:u,context:c$1,params:o$1};c$1&&c$1.portalItem&&d&&!Y(d)?g?w(h):j(h):c$1&&c$1.portalItem&&(null==d||null!=v$1(d)||Z(d)||g)?U(h):i$1[u]=d;}}}}function U(t$1){const{targetUrl:r,params:s,value:i,context:a,dest:p,targetPropertyName:c}=t$1;if(!a.portalItem)return;const l=U$1(r),m=l?.filename??n$1(),f=s?.prefix??l?.prefix,d=N(i,r,a),g=V(f,m),h=`${g}.${t(d)}`,v=a.portalItem.resourceFromPath(h);Z(r)&&a.resources&&a.resources.pendingOperations.push(P(r).then((t$1=>{v.path=`${g}.${t(t$1)}`,p[c]=v.itemRelativeUrl;})).catch((()=>{})));const U=s?.compress??!1;a.resources&&I({...t$1,resource:v,content:d,compress:U,updates:a.resources.toAdd}),p[c]=v.itemRelativeUrl;}function w(t$1){const{context:r,targetUrl:e,params:o,value:n,dest:i,targetPropertyName:a}=t$1;if(!r.portalItem)return;const p=r.portalItem.resourceFromPath(e),c=N(n,e,r),l=t(c),m=Bt(p.path),f=o?.compress??!1;l===m?(r.resources&&I({...t$1,resource:p,content:c,compress:f,updates:r.resources.toUpdate}),i[a]=e):U(t$1);}function j({context:t,targetUrl:r,dest:e,targetPropertyName:o}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),e[o]=r);}function I({object:t,propertyName:r,updates:e,resource:o,content:s,compress:n}){e.push({resource:o,content:s,compress:n,finish:e=>{O(t,r,e);}});}function N(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function P(t){const r=(await import('./interfaces-f9f0dded.js').then(function (n) { return n.kT; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function x(t){return null==t?null:"string"==typeof t?t:t.url}function O(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

export { g };

//# sourceMappingURL=persistable-1db8c685.js.map