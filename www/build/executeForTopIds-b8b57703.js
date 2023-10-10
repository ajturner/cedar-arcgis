import { f } from './normalizeUtils-6257e368.js';
import { d } from './queryTopFeatures-020b9413.js';
import { i3 as S } from './interfaces-f9f0dded.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './_commonjsHelpers-b08b522c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function s(s,e,p){const a=f(s);return (await d(a,S.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };

//# sourceMappingURL=executeForTopIds-b8b57703.js.map