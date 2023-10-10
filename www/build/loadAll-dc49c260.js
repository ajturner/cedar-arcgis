import { V, H as _, cd as p, bp as _$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function t(o,l){return await o.load(),a(o,l)}async function a(t,a){const s=[],c=(...o)=>{for(const l of o)null!=l&&(Array.isArray(l)?c(...l):V.isCollection(l)?l.forEach((o=>c(o))):_.isLoadable(l)&&s.push(l));};a(c);let f=null;if(await p(s,(async o=>{const n=await _$1(i(o)?o.loadAll():o.load());!1!==n.ok||f||(f=n);})),f)throw f.error;return t}function i(o){return "loadAll"in o&&"function"==typeof o.loadAll}

export { a, t };

//# sourceMappingURL=loadAll-dc49c260.js.map