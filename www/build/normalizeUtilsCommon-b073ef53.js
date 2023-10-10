import { cA as m, b5 as f, ca as f$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new m({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:f.WebMercator}),minus180Line:new m({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:f.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new m({paths:[[[180,-180],[180,180]]],spatialReference:f.WGS84}),minus180Line:new m({paths:[[[-180,-180],[-180,180]]],spatialReference:f.WGS84})}};function i(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const r of t)for(const e of r)e[0]+=n;return e}function o(e){return f$1(e)?e.rings:e.paths}

export { i, o, r, s };

//# sourceMappingURL=normalizeUtilsCommon-b073ef53.js.map