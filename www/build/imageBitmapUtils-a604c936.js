import { s, J as s$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function t(t,o,a){let c;try{c=await createImageBitmap(t);}catch(l){throw new s("request:server",`Unable to load ${o}`,{url:o,error:l})}return s$1(a),c}async function o(t,o,a,c,l){let n;try{n=await createImageBitmap(t);}catch(i){throw new s("request:server",`Unable to load tile ${o}/${a}/${c}`,{error:i,level:o,row:a,col:c})}return s$1(l),n}

export { o, t };

//# sourceMappingURL=imageBitmapUtils-a604c936.js.map