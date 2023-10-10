import { b as has, a0 as d$1, cv as p$1, y as b, cw as K, s } from './interfaces-f9f0dded.js';
import { o, u } from './infoFor3D-0047d262.js';
import { a } from './executeQueryJSON-a16aae69.js';
import { n } from './executeQueryPBF-24a7740f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function f(t,o,r,e){return m(o,await c(t,o,r,e),r,e)}async function c(t,o,r,e){const n$1={...e},i=p(o,r),u=null!=o.outStatistics?.[0],f=has("featurelayer-pbf-statistics"),c=!u||f;let m;if("pbf"===r?.format&&c)try{m=await n(t,i,n$1);}catch(d){if("query:parsing-pbf"!==d.name)throw d;r.format="json";}return "json"!==r?.format&&c||(m=await a(t,i,n$1)),l(r?.fieldsIndex,m.fields),m}function l(t,o){if(null!=t&&null!=o)for(const r of o){const o=t.get(r.name);o&&Object.assign(r,o.toJSON());}}async function m(t,r,e,n){const s=e?.infoFor3D;if(!(d(t,s)&&null!=s&&r.assetMaps&&r.features&&r.features.length))return d$1.fromJSON(r);const{meshFeatureSetFromJSON:a}=await p$1(import('./meshFeatureSet-81a88f71.js').then(function (n) { return n.b; }),n);return a(t,s,r)}function p(o$1,s$1){let a=b.from(o$1);a.sourceSpatialReference=a.sourceSpatialReference??s$1?.sourceSpatialReference??null,(s$1?.gdbVersion||s$1?.dynamicDataSource)&&(a=a===o$1?a.clone():a,a.gdbVersion=o$1.gdbVersion||s$1.gdbVersion,a.dynamicDataSource=o$1.dynamicDataSource?K.from(o$1.dynamicDataSource):s$1.dynamicDataSource);const i=s$1?.infoFor3D;if(null!=i&&d(o$1,i)){a=a===o$1?a.clone():a,a.formatOf3DObjects=null;const{supportedFormats:n,queryFormats:s$1}=i,u$1=o("model/gltf-binary",n)??u("glb",n),f=o("model/gltf+json",n)??u("gtlf",n);for(const t of s$1){if(t===u$1){a.formatOf3DObjects=t;break}t!==f||a.formatOf3DObjects||(a.formatOf3DObjects=t);}if(!a.formatOf3DObjects)throw new s("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==a.outFields||!a.outFields.includes("*")){a=a===o$1?a.clone():a,null==a.outFields&&(a.outFields=[]);const{originX:t,originY:r,originZ:e,translationX:n,translationY:s,translationZ:u,scaleX:f,scaleY:c,scaleZ:l,rotationX:m,rotationY:p,rotationZ:d,rotationDeg:y}=i.transformFieldRoles;a.outFields.push(t,r,e,n,s,u,f,c,l,m,p,d,y);}}return a}function d(t,o){return null!=o&&!0===t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}

export { f };

//# sourceMappingURL=executeQuery-dca07954.js.map