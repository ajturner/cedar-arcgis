import{g as n}from"./p-c5929b55.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.0
 */const a=new WeakMap;const e=new WeakMap;function t(n){e.set(n,new Promise((e=>a.set(n,e))))}function o(n){a.get(n)()}function s(n){return e.get(n)}async function r(a){await s(a);n(a);return new Promise((n=>requestAnimationFrame((()=>n()))))}export{o as a,r as c,t as s};
//# sourceMappingURL=p-9936d1b9.js.map