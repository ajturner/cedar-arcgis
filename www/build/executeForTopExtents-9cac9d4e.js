import { i3 as S, b4 as M } from './interfaces-f9f0dded.js';
import { f } from './normalizeUtils-6257e368.js';
import { p } from './queryTopFeatures-020b9413.js';
import './_commonjsHelpers-b08b522c.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=f(m),a=await p(p$1,S.from(s),{...n});return {count:a.data.count,extent:M.fromJSON(a.data.extent)}}

export { m as executeForTopExtents };

//# sourceMappingURL=executeForTopExtents-9cac9d4e.js.map