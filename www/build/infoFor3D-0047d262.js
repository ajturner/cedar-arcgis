/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=[["binary","application/octet-stream","bin",""]];function t(n){return i(n?.supportedFormats??[]).flatMap(d).map((n=>`.${n}`))}function r(n){const t={};for(const r of i(n?.supportedFormats??[])){const n=p(r),o=d(r).map((n=>`.${n}`));t[n]??=[],t[n].push(...o);}return [{description:"3D Models",accept:t}]}function o(n,t){return a(f(n,t))}function u(n,t){return a(s(n,t))}function e(n,t){return p(c(n,t))}function i(t){return [...n,...t]}function c(n,t){return i(t).find((t=>a(t)===n))}function f(n,t){return i(t).find((t=>p(t)===n))}function s(n,t){const r=n.toLowerCase();return i(t).find((n=>d(n).some((n=>r.endsWith(n)))))}function a(n){return n?.[0]}function p(n){return n?.[1]}function d(n){return n?.[2].split(",")??[]}function l(n){return n?.[3]}function m(n){return n.tables?.find((n=>"assetMaps"===n.role))}

export { e, m, o, u };

//# sourceMappingURL=infoFor3D-0047d262.js.map