import { b as has } from './interfaces-f9f0dded.js';
import { T } from './color-f1195a3b.js';
import { i as i$1, f as c, p } from './WGLContainer-7c66c447.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class i extends i$1{constructor(e){super(),this._tileInfoView=e;}get requiresDedicatedFBO(){return !1}renderChildren(e){this.sortChildren(n),this.setStencilReference(e),super.renderChildren(e);}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(r){const n=super.prepareRenderPasses(r);return n.push(r.registerRenderPass({name:"stencil",brushes:[c],drawPhase:T.DEBUG|T.MAP|T.HIGHLIGHT,target:()=>this.getStencilTarget()})),has("esri-tiles-debug")&&n.push(r.registerRenderPass({name:"tileInfo",brushes:[p],drawPhase:T.DEBUG,target:()=>this.children})),n}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const s of this.children)s.stencilRef=r++;}}

export { i };

//# sourceMappingURL=TileContainer-b89f9eec.js.map