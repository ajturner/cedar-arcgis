import { b as has } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n;function t(t,o,r={}){const e=o===n.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];for(const n of e){const o=t.getContext(n,r);if(o)return o}return null}function o(n,o,e={}){const c=r(n);for(const r of c){const n=t(o,r,e);if(n)return n}return null}function r(t){if("3d"===t)return [n.WEBGL2];const o=has("esri-force-webgl");return o===n.WEBGL1||o===n.WEBGL2?[o]:has("mac")&&has("chrome")?[n.WEBGL1,n.WEBGL2]:[n.WEBGL2,n.WEBGL1]}!function(n){n[n.WEBGL1=1]="WEBGL1",n[n.WEBGL2=2]="WEBGL2";}(n||(n={}));

export { n, o, r, t };

//# sourceMappingURL=contextUtils-e38d5070.js.map