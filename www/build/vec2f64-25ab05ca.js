/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(){return [0,0]}function t(n){return [n[0],n[1]]}function r(n,t){return [n,t]}function e(t){const r=n(),e=Math.min(2,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function o(n,t){return new Float64Array(n,t,2)}function u(){return n()}function a(){return r(1,1)}function s(){return r(1,0)}function c(){return r(0,1)}const f=u(),i=a(),l=s(),_=c(),O=Object.freeze(Object.defineProperty({__proto__:null,ONES:i,UNIT_X:l,UNIT_Y:_,ZEROS:f,clone:t,create:n,createView:o,fromArray:e,fromValues:r,ones:a,unitX:s,unitY:c,zeros:u},Symbol.toStringTag,{value:"Module"}));

export { f, n, o, r };

//# sourceMappingURL=vec2f64-25ab05ca.js.map