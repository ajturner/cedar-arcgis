import { cu as t$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var r,t,n,a={exports:{}};a.exports,r=a,t=function(){function o(o,t,a,f,e){r(o,t,a||0,f||o.length-1,e||n);}function r(o,n,a,f,e){for(;f>a;){if(f-a>600){var s=f-a+1,i=n-a+1,h=Math.log(s),p=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*p*(s-p)/s)*(i-s/2<0?-1:1);r(o,n,Math.max(a,Math.floor(n-i*p/s+c)),Math.min(f,Math.floor(n+(s-i)*p/s+c)),e);}var u=o[n],x=a,M=f;for(t(o,a,n),e(o[f],u)>0&&t(o,a,f);x<M;){for(t(o,x,M),x++,M--;e(o[x],u)<0;)x++;for(;e(o[M],u)>0;)M--;}0===e(o[a],u)?t(o,a,M):t(o,++M,f),M<=n&&(a=M+1),n<=M&&(f=M-1);}}function t(o,r,t){var n=o[r];o[r]=o[t],o[t]=n;}function n(o,r){return o<r?-1:o>r?1:0}return o},void 0!==(n=t())&&(r.exports=n);const f=t$1(a.exports);

export { f };

//# sourceMappingURL=quickselect-cc68e3d5.js.map