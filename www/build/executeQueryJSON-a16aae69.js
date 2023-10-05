import { f } from './normalizeUtils-6257e368.js';
import { m } from './query-d7e0eb84.js';
import { a0 as d, y as b } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return d.fromJSON(s)}async function a(o,s,a){const n=f(o),i={...a},p=b.from(s),{data:u}=await m(n,p,p.sourceSpatialReference,i);return u}

export { a, s };

//# sourceMappingURL=executeQueryJSON-a16aae69.js.map