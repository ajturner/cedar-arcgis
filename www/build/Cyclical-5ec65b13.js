import { aj as i$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i{constructor(n,i){this.min=n,this.max=i,this.range=i-n;}ndiff(n,i=0){return Math.ceil((n-i)/this.range)*this.range+i}_normalize(n,i,t,o=0,r=!1){return (t-=o)<n?t+=this.ndiff(n-t):t>i&&(t-=this.ndiff(t-i)),r&&t===i&&(t=n),t+o}normalize(n,i=0,t=!1){return this._normalize(this.min,this.max,n,i,t)}clamp(i,t=0){return i$1(i-t,this.min,this.max)+t}monotonic(n,i,t){return n<i?i:i+this.ndiff(n-i,t)}minimalMonotonic(n,i,t){return this._normalize(n,n+this.range,i,t)}center(n,i,t){return i=this.monotonic(n,i,t),this.normalize((n+i)/2,t)}diff(n,i,t){return this.monotonic(n,i,t)-n}shortestSignedDiff(n,i){n=this.normalize(n);const t=(i=this.normalize(i))-n,o=i<n?this.minimalMonotonic(n,i)-n:i-this.minimalMonotonic(i,n);return Math.abs(t)<Math.abs(o)?t:o}contains(n,i,t){return i=this.minimalMonotonic(n,i),(t=this.minimalMonotonic(n,t))>n&&t<i}}function t(n){for(const i in n){const t=n[i];t instanceof Function&&(n[i]=t.bind(n));}return n}const o=t(new i(0,2*Math.PI)),r=t(new i(-Math.PI,Math.PI)),s=t(new i(0,360));

export { s };

//# sourceMappingURL=Cyclical-5ec65b13.js.map