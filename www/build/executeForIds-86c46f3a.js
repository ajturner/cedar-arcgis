import { f } from './normalizeUtils-6257e368.js';
import { p, d } from './query-d7e0eb84.js';
import { y as b } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(n,s,m){const p$1=f(n);return p(p$1,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=f(s);return d(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

export { n, s };

//# sourceMappingURL=executeForIds-86c46f3a.js.map