import { by as j, n, c as j$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(r,e){if(null===r)return e;return new j({url:r.field("url")})}async function s(n$1,t,s){const u=n?.findCredential(n$1.restUrl);if(!u)return null;if("loaded"===n$1.loadStatus&&""===t&&n$1.user&&n$1.user.sourceJSON&&!1===s)return n$1.user.sourceJSON;if(""===t){const r=await j$1(n$1.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===s?{}:{returnUserLicenseTypeExtensions:!0}}});if(r.data){const e=r.data;if(e&&e.username)return e}return null}const o=await j$1(n$1.restUrl+"/community/users/"+t,{responseType:"json",query:{f:"json"}});if(o.data){const r=o.data;return r.error?null:r}return null}

export { s, t };

//# sourceMappingURL=portalUtils-440c0f64.js.map