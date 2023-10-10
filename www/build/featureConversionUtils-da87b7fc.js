import { k as s, s as s$1, c8 as l, ca as f, c9 as s$2, cb as u, cC as q$1, cD as d$1, cE as a, r } from './interfaces-f9f0dded.js';
import { t, a as t$1 } from './OptimizedFeature-fb4fb1cb.js';
import { e } from './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d(t,e){return t?e?4:3:e?3:2}const m=s.getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},y=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s;},p=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+2];},I=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+3];},b=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+2],t[o+3]=e[n+3];};function w(t,e,o,n){if(t){if(o)return e&&n?b:p;if(e&&n)return I}else if(e&&n)return p;return y}function M({scale:t,translate:e},o){return Math.round((o-e[0])/t[0])}function N({scale:t,translate:e},o){return Math.round((e[1]-o)/t[1])}function G(t,e){return F(t,e,0)}function T(t,e){return F(t,-e,1)}function F({scale:t,translate:e},o,n){return o*t[n]+e[n]}function P(t,e,o){return t?e?o?z(t):Z(t):o?v(t):x(t):null}function x(t){const e=t.coords;return {x:e[0],y:e[1]}}function j(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function Z(t){const e=t.coords;return {x:e[0],y:e[1],z:e[2]}}function k(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function v(t){const e=t.coords;return {x:e[0],y:e[1],m:e[2]}}function E(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function z(t){const e=t.coords;return {x:e[0],y:e[1],z:e[2],m:e[3]}}function S(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function V(t,e,o,n){let r=x;o&&n?r=z:o?r=Z:n&&(r=v);for(const s of e){const{geometry:e,attributes:o}=s,n=null!=e?r(e):null;t.push({attributes:o,geometry:n});}return t}function Y(t,e){return t&&e?S:t?k:e?E:j}function _(t$2,e,o,n,r){const s=Y(o,n);for(const{geometry:u,attributes:l}of e){const e=null!=u?s(new t,u):null;t$2.push(new t$1(e,l,null,r?l[r]:void 0));}return t$2}function L(t,e,o=Y(null!=e.z,null!=e.m)){return o(t,e)}function O(t,e,o,n){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?U(r,o,n):null});return t}function U(t,e,o){if(null==t)return null;const n=d(e,o),r=[];for(let s=0;s<t.coords.length;s+=n){const e=[];for(let o=0;o<n;o++)e.push(t.coords[s+o]);r.push(e);}return e?o?{points:r,hasZ:e,hasM:o}:{points:r,hasZ:e}:o?{points:r,hasM:o}:{points:r}}function A(t$2,e,o,n,r){const s=d(o,n);for(const{geometry:u,attributes:l}of e){const e=null!=u?q(new t,u,s):null;t$2.push(new t$1(e,l,null,r?l[r]:void 0));}return t$2}function q(t,e,o=d(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const n=t.coords;let r=0;for(const s of e.points)for(let t=0;t<o;t++)n[r++]=s[t];return t}function R(t,e,o,n){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?$(r,o,n):null});return t}function $(t,e,o){if(!t)return null;const n=d(e,o),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<n;t++)e.push(r[l++]);t.push(e);}u.push(t);}return e?o?{paths:u,hasZ:e,hasM:o}:{paths:u,hasZ:e}:o?{paths:u,hasM:o}:{paths:u}}function B(t$2,e,o,n,r){const s=d(o,n);for(const{geometry:u,attributes:l}of e){const e=null!=u?C(new t,u,s):null;t$2.push(new t$1(e,l,null,r?l[r]:void 0));}return t$2}function C(t,e,o=d(e.hasZ,e.hasM)){const{lengths:n,coords:r}=t;let s=0;for(const u of e.paths){for(const t of u)for(let e=0;e<o;e++)r[s++]=t[e];n.push(u.length);}return t}function D(t,e,o,n){for(const{geometry:r,attributes:s,centroid:u}of e){const e=null!=r?H(r,o,n):null;if(null!=u){const o=x(u);t.push({attributes:s,centroid:o,geometry:e});}else t.push({attributes:s,geometry:e});}return t}function H(t,e,o){if(!t)return null;const n=d(e,o),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<n;t++)e.push(r[l++]);t.push(e);}u.push(t);}return e?o?{rings:u,hasZ:e,hasM:o}:{rings:u,hasZ:e}:o?{rings:u,hasM:o}:{rings:u}}function J(t$2,e,o,n,r){for(const{geometry:s,centroid:u,attributes:l}of e){const e=null!=s?K(new t,s,o,n):null,c=r?l[r]:void 0;null!=u?t$2.push(new t$1(e,l,j(new t,u),c)):t$2.push(new t$1(e,l,null,c));}return t$2}function K(t,e,o=e.hasZ,n=e.hasM){return Q(t,e.rings,o,n)}function Q(t,e,o,n){const r=d(o,n),{lengths:s,coords:u}=t;let l=0;Ft(t);for(const c of e){for(const t of c)for(let e=0;e<r;e++)u[l++]=t[e];s.push(c.length);}return t}const W=[],X=[];function tt(t,e,o,n,r){W[0]=t;const[s]=et(X,W,e,o,n,r);return Pt(W),Pt(X),s}function et(e,o,n,r,s,u){if(Pt(e),!n){for(const t of o){const o=u?t.attributes[u]:void 0;e.push(new t$1(null,t.attributes,null,o));}return e}switch(n){case"esriGeometryPoint":return _(e,o,r,s,u);case"esriGeometryMultipoint":return A(e,o,r,s,u);case"esriGeometryPolyline":return B(e,o,r,s,u);case"esriGeometryPolygon":return J(e,o,r,s,u);default:m.error("convertToFeatureSet:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${n}'`)),Pt(e);}return e}function ot(e,o,n,r,s,u){const l=e.length;switch(n){case"esriGeometryPoint":_(e,o,r,s,u);break;case"esriGeometryMultipoint":A(e,o,r,s,u);break;case"esriGeometryPolyline":B(e,o,r,s,u);break;case"esriGeometryPolygon":J(e,o,r,s,u);break;default:m.error("convertToFeatureSet:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${n}'`));}for(let t=0;t<o.length;t++)e[t+l].geometryType=n,e[t+l].insertAfter=o[t].insertAfter,e[t+l].groupId=o[t].groupId;return e}function nt(t,e,o,n){X[0]=t,lt(W,X,e,o,n);const r=W[0];return Pt(W),Pt(X),r}function rt(e,o,n){if(null==e)return null;const r=new t;if("hasZ"in e&&null==o&&(o=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),l(e)){return Y(null!=o?o:null!=e.z,null!=n?n:null!=e.m)(r,e)}return f(e)?K(r,e,o,n):s$2(e)?C(r,e,d(o,n)):u(e)?q(r,e,d(o,n)):void m.error("convertFromGeometry:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${e}'`))}function st(e,o,n,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(o){case"esriGeometryPoint":{let t=x;return n&&r?t=z:n?t=Z:r&&(t=v),t(s)}case"esriGeometryMultipoint":return U(s,n,r);case"esriGeometryPolyline":return $(s,n,r);case"esriGeometryPolygon":return H(s,n,r);default:return m.error("convertToGeometry:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${o}'`)),null}}function ut(t,e){for(const o of e)t.push({attributes:o.attributes});return t}function lt(e,o,n,r,s){if(Pt(e),null==n)return ut(e,o);switch(n){case"esriGeometryPoint":return V(e,o,r,s);case"esriGeometryMultipoint":return O(e,o,r,s);case"esriGeometryPolyline":return R(e,o,r,s);case"esriGeometryPolygon":return D(e,o,r,s);default:m.error("convertToFeatureSet:unknown-geometry",new s$1(`Unable to parse unknown geometry type '${n}'`));}return e}function ct(t){const{objectIdFieldName:e,spatialReference:o,transform:n,fields:r,hasM:s,hasZ:u,features:l,geometryType:c,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:a,queryGeometryType:h}=t,d={features:lt([],l,c,u,s),fields:r,geometryType:c,objectIdFieldName:e,spatialReference:o,uniqueIdField:f,queryGeometry:st(a,h,!1,!1)};return n&&(d.transform=n),i&&(d.exceededTransferLimit=i),s&&(d.hasM=s),u&&(d.hasZ=u),d}function it(e$1,o){const n=new e,{hasM:r,hasZ:s,features:u,objectIdFieldName:l,spatialReference:c,geometryType:i,exceededTransferLimit:f,transform:h,fields:d}=e$1;return d&&(n.fields=d),n.geometryType=i??null,n.objectIdFieldName=l??o??null,n.spatialReference=c??null,n.objectIdFieldName?(u&&et(n.features,u,i,s,r,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),r&&(n.hasM=r),s&&(n.hasZ=s),h&&(n.transform=h),n):(m.error(new s$1("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function ft(t){const{transform:e,features:o,hasM:n,hasZ:r}=t;if(!e)return t;for(const s of o)null!=s.geometry&&It(s.geometry,s.geometry,n,r,e),null!=s.centroid&&It(s.centroid,s.centroid,n,r,e);return t.transform=null,t}function at(t$1,e){const{geometryType:o,features:n,hasM:r,hasZ:s}=e;if(!t$1)return e;for(let u=0;u<n.length;u++){const e=n[u],l=e.weakClone();l.geometry=new t,ht(l.geometry,e.geometry,r,s,o,t$1),e.centroid&&(l.centroid=new t,ht(l.centroid,e.centroid,r,s,"esriGeometryPoint",t$1)),n[u]=l;}return e.transform=t$1,e}function ht(t,e,o,n,r,s,u=o,l=n){if(Ft(t),null==e||!e.coords.length)return null;const c=g[r],{coords:i,lengths:f}=e,a=d(o,n),h=d(o&&u,n&&l),m=w(o,n,u,l);if(!f.length)return m(t.coords,i,0,0,M(s,i[0]),N(s,i[1])),Ft(t,a,0),t;let y,p,I,b,G=0,T=0,F=T;for(const d of f){if(d<c)continue;let e=0;T=F,I=y=M(s,i[G]),b=p=N(s,i[G+1]),m(t.coords,i,T,G,I,b),e++,G+=a,T+=h;for(let o=1;o<d;o++,G+=a)I=M(s,i[G]),b=N(s,i[G+1]),I===y&&b===p||(m(t.coords,i,T,G,I-y,b-p),T+=h,e++,y=I,p=b);e>=c&&(t.lengths.push(e),F=T);}return Pt(t.coords,F),t.coords.length?t:null}function dt(t,e,o,n,r,s,u=o,l=n){if(Ft(t),!e||!e.coords.length)return null;const c=g[r],{coords:i,lengths:f}=e,a=d(o,n),h=d(o&&u,n&&l),m=w(o,n,u,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),Ft(t,a,0),t;let y=0;const p=s*s;for(const d of f){if(d<c){y+=d*a;continue}const e=t.coords.length/h,o=y,n=y+(d-1)*a;m(t.coords,i,t.coords.length,o,i[o],i[o+1]),gt(t.coords,i,a,p,m,o,n),m(t.coords,i,t.coords.length,n,i[n],i[n+1]);const r=t.coords.length/h-e;r>=c?t.lengths.push(r):Pt(t.coords,e*h),y+=d*a;}return t.coords.length?t:null}function mt(t,e,o,n){const r=t[e],s=t[e+1],u=t[o],l=t[o+1],c=t[n],i=t[n+1];let f=u,a=l,h=c-f,d=i-a;if(0!==h||0!==d){const t=((r-f)*h+(s-a)*d)/(h*h+d*d);t>1?(f=c,a=i):t>0&&(f+=h*t,a+=d*t);}return h=r-f,d=s-a,h*h+d*d}function gt(t,e,o,n,r,s,u){let l,c=n,i=0;for(let f=s+o;f<u;f+=o)l=mt(e,f,s,u),l>c&&(i=f,c=l);c>n&&(i-s>o&&gt(t,e,o,n,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),u-i>o&&gt(t,e,o,n,r,i,u));}function yt(t,e,o,u){if(null==e||!e.coords||!e.coords.length)return null;const l=d(o,u);let c=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a$1=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=l){const o=t[e],n=t[e+1];c=Math.min(c,o),f=Math.max(f,o),i=Math.min(i,n),a$1=Math.max(a$1,n);}}return q$1(t)?d$1(t,c,i,f,a$1):a(c,i,f,a$1,t),t}function pt(t,e,o,n){const r=d(o,n),{lengths:s,coords:u}=e;let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=0;for(const h of s){let t=u[a],e=u[a+1];l=Math.min(t,l),c=Math.min(e,c),i=Math.max(t,i),f=Math.max(e,f),a+=r;for(let o=1;o<h;o++,a+=r){const o=u[a],n=u[a+1];t+=o,e+=n,o<0&&(l=Math.min(l,t)),o>0&&(i=Math.max(i,t)),n<0?c=Math.min(c,e):n>0&&(f=Math.max(f,e));}}return t[0]=l,t[1]=c,t[2]=i,t[3]=f,t}function It(t,e,n,r$1,s){const{coords:u,lengths:l}=e,c=d(n,r$1);if(!u.length)return t!==e&&Ft(t),t;r(s);const{originPosition:i,scale:f,translate:a}=s,h=xt;h.originPosition=i;const m=h.scale;m[0]=f[0]??1,m[1]=-(f[1]??1),m[2]=f[2]??1,m[3]=f[3]??1;const g=h.translate;if(g[0]=a[0]??0,g[1]=a[1]??0,g[2]=a[2]??0,g[3]=a[3]??0,!l.length){for(let e=0;e<c;++e)t.coords[e]=F(h,u[e],e);return t!==e&&Ft(t,c,0),t}let y=0;for(let o=0;o<l.length;o++){const e=l[o];t.lengths[o]=e;for(let o=0;o<c;++o)t.coords[y+o]=F(h,u[y+o],o);let n=t.coords[y],r=t.coords[y+1];y+=c;for(let o=1;o<e;o++,y+=c){n+=u[y]*m[0],r+=u[y+1]*m[1],t.coords[y]=n,t.coords[y+1]=r;for(let e=2;e<c;++e)t.coords[y+e]=F(h,u[y+e],e);}}return t!==e&&Ft(t,u.length,l.length),t}function bt(t,e,o,n,r,s){if(Ft(t),t.lengths.push(...e.lengths),o===r&&n===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else {const u=d(o,n),l=w(o,n,r,s),c=e.coords;for(let e=0;e<c.length;e+=u)l(t.coords,c,t.coords.length,e,c[e],c[e+1]);}return t}function wt(t,e,o,n,r){if(!e||!e.coords||!e.coords.length)return null;const s=g[o],{coords:u,lengths:l}=e,c=w(n,r,n,r),i=d(n,r);let f=0,a=0,h=0,m=0;for(const d of l){a=m,c(t.coords,u,a,f,u[f],u[f+1]),f+=i;let e=u[f],o=u[f+1],n=e,r=o,l=o/e;a+=i,c(t.coords,u,a,f,n,r),f+=i;for(let s=2;s<d;s++){e=u[f],o=u[f+1];const s=o/e,h=l===s||!isFinite(l)&&!isFinite(s),d=h&&isFinite(s)?l>=0&&s>=0||l<=0&&s<=0:r>=0&&o>=0||r<=0&&o<=0;h&&d?(n+=e,r+=o):(n=e,r=o,a+=i),c(t.coords,u,a,f,n,r),f+=i,l=s;}a+=i;const g=(a-m)/i;g>=s&&(t.lengths[h]=g,m=a,h++);}return t.coords.length>m&&(t.coords.length=m),t.lengths.length>h&&(t.lengths.length=h),t.coords.length&&t.lengths.length?t:null}function Mt(t,e,o,n){let r=0,s=t[n*e],u=t[n*(e+1)];for(let l=1;l<o;l++){const o=s+t[n*(e+l)],c=u+t[n*(e+l)+1],i=(o-s)*(c+u);s=o,u=c,r+=i;}return .5*r}function Nt(t,e){const{coords:o,lengths:n}=t;let r=0,s=0;for(let u=0;u<n.length;u++){const t=n[u];s+=Mt(o,r,t,e),r+=t;}return Math.abs(s)}function Gt(t,e){const o=t.clone(),n=t.coords,r=t.lengths;let s=0;for(let u=0;u<r.length;u++){const t=r[u];let l=n[e*s],c=n[e*s+1];for(let r=1;r<t;r++){const t=n[e*(s+r)],u=n[e*(s+r)+1],i=t-l,f=u-c;o.coords[e*(s+r)]=i,o.coords[e*(s+r)+1]=f,l=t,c=u;}s+=t;}return o}function Tt(t,e){if(null==t)return null;const o=t.clone(),n=t.coords,r=t.lengths;let s=0;for(let u=0;u<r.length;u++){const t=r[u];let l=n[e*s],c=n[e*s+1];for(let r=1;r<t;r++){const t=l+n[e*(s+r)],u=c+n[e*(s+r)+1];o.coords[e*(s+r)]=t,o.coords[e*(s+r)+1]=u,l=t,c=u;}s+=t;}return o}function Ft(t,e=0,o=0){Pt(t.lengths,o),Pt(t.coords,e);}function Pt(t,e=0){t.length!==e&&(t.length=e);}const xt={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};

export { $, C, H, It as I, K, L, M, N, P, Q, U, at as a, bt as b, Nt as c, dt as d, et as e, ft as f, ct as g, ht as h, it as i, nt as n, ot as o, rt as r, st as s, tt as t, yt as y };

//# sourceMappingURL=featureConversionUtils-da87b7fc.js.map