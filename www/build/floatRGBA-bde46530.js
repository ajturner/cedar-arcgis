import { aj as i } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(o,r,e=0){const i$1=i(o,0,f);for(let t=0;t<4;t++)r[e+t]=Math.floor(256*l(i$1*n[t]));}function r(t,o=0){let r=0;for(let n=0;n<4;n++)r+=t[o+n]*e[n];return r}const n=[1,256,65536,16777216],e=[1/256,1/65536,1/16777216,1/4294967296],f=r(new Uint8ClampedArray([255,255,255,255]));function l(t){return t-Math.floor(t)}

export { o, r };

//# sourceMappingURL=floatRGBA-bde46530.js.map