import { s, i as i$1 } from './mat3-eb290db7.js';
import { a as i } from './Container-d8a68f3e.js';
import { e } from './TileKey-4c2c49c7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends i{constructor(t,s,i,r,h,o,n=h,a=o){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.resolution=s,this.x=i,this.y=r,this.width=h,this.height=o,this.rangeX=n,this.rangeY=a;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i){const e=this.resolution/(i.resolution*i.pixelRatio),r=this.transforms.tileMat3,[h,o]=i.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*e,a=this.height/this.rangeY*e;s(r,n,0,0,0,a,0,h,o,1),i$1(this.transforms.dvs,i.displayViewMat3,r);}}

export { r };

//# sourceMappingURL=TiledDisplayObject-2ca56649.js.map