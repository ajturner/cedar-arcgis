import { bZ as i, ad as m, c2 as k, J as s, bd as d, d0 as f, i as j, fa as c, B as e$1, E as y$1, F as a$1 } from './interfaces-f9f0dded.js';
import { j as j$1 } from './TileInfo-4a28547b.js';
import { T } from './Bitmap-86029069.js';
import { h } from './TileStore-178dd7b2.js';
import { e } from './TileKey-4c2c49c7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function o(t,o){const a=n(o.rotation),r=Math.abs(Math.cos(a)),s=Math.abs(Math.sin(a)),[u,c]=o.size;return t[0]=Math.round(c*s+u*r),t[1]=Math.round(c*r+u*s),t}function a(t,n,o,a){const[r,s]=n,[u,c]=a,h=.5*o;return t[0]=r-h*u,t[1]=s-h*c,t[2]=r+h*u,t[3]=s+h*c,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const y=i(),x=[0,0],S=new e(0,0,0,0),_={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let w=class extends m{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=_.hidpi,this.imageMaxWidth=_.imageMaxWidth,this.imageMaxHeight=_.imageMaxHeight,this.imageRotationSupported=_.imageRotationSupported,this.imageNormalizationSupported=_.imageNormalizationSupported,this.update=k((async(t,e)=>{if(s(e),!t.stationary||this.destroyed)return;const i=t.state,s$1=d(i.spatialReference),a=this.hidpi?t.pixelRatio:1,p=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],n=this.imageMaxWidth??0,m=this.imageMaxHeight??0;p?(x[0]=i.worldScreenWidth,x[1]=i.size[1]):this.imageRotationSupported?(x[0]=i.size[0],x[1]=i.size[1]):o(x,i);const h=Math.floor(x[0]*a)>n||Math.floor(x[1]*a)>m,c=s$1&&(i.extent.xmin<s$1.valid[0]||i.extent.xmax>s$1.valid[1]),u=!this.imageNormalizationSupported&&c,g=!h&&!u,f$1=this.imageRotationSupported?i.rotation:0,y=this.container.children.slice();if(g){const t=p?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,x,t,i.resolution,f$1,a,e);}else {let t=Math.min(n,m);u&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,a,e);}try{const t=await this._imagePromise??[];s(e);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=t;for(const e of y)t.includes(e)||i.push(e.fadeOut().then((()=>{e.remove(),e.destroy();})));for(const e of t)i.push(e.fadeIn());await Promise.all(i);}catch(S){this._imagePromise=null,f(S);}}),5e3),this.updateExports=k((async t=>{const e=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;e.push(t(i).then((()=>{i.invalidateTexture(),i.requestRender();})));}this._imagePromise=j(e).then((()=>this._imagePromise=null)),await this._imagePromise;}));}destroy(){this.bitmaps.forEach((t=>t.destroy())),this.bitmaps=[];}get updating(){return !this.destroyed&&null!==this._imagePromise}async _export(t,e,i,r,s$1,a){const p=await this.fetchSource(t,Math.floor(e*s$1),Math.floor(i*s$1),{rotation:r,pixelRatio:s$1,signal:a});s(a);const n=new T(null,!0);return n.x=t.xmin,n.y=t.ymax,n.resolution=t.width/e,n.rotation=r,n.pixelRatio=s$1,n.opacity=0,this.container.addChild(n),await n.setSourceAsync(p,a),s(a),n}async _singleExport(t,e,i,o,r,s,a$1){a(y,i,o,e);const p=c(y,t.spatialReference);return [await this._export(p,e[0],e[1],r,s,a$1)]}_tiledExport(t,e,i,o){const r=j$1.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),s=new h(r),a=s.getTileCoverage(t);if(!a)return null;const p=[];return a.forEach(((r,a,n,l)=>{S.set(r,a,n,0),s.getTileBounds(y,S);const h=c(y,t.spatialReference);p.push(this._export(h,e,e,0,i,o).then((t=>(0!==l&&(S.set(r,a,n,l),s.getTileBounds(y,S),t.x=y[0],t.y=y[3]),t))));})),Promise.all(p)}};e$1([y$1()],w.prototype,"_imagePromise",void 0),e$1([y$1()],w.prototype,"bitmaps",void 0),e$1([y$1()],w.prototype,"container",void 0),e$1([y$1()],w.prototype,"fetchSource",void 0),e$1([y$1()],w.prototype,"hidpi",void 0),e$1([y$1()],w.prototype,"imageMaxWidth",void 0),e$1([y$1()],w.prototype,"imageMaxHeight",void 0),e$1([y$1()],w.prototype,"imageRotationSupported",void 0),e$1([y$1()],w.prototype,"imageNormalizationSupported",void 0),e$1([y$1()],w.prototype,"requestUpdate",void 0),e$1([y$1()],w.prototype,"updating",null),w=e$1([a$1("esri.views.2d.layers.support.ExportStrategy")],w);const v=w;

export { v };

//# sourceMappingURL=ExportStrategy-d256dff1.js.map