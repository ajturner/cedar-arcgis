import { af as i, A as l, db as n, ag as x, dc as r, B as e, G as o, E as y, F as a$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let a=class extends(i(l)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=n();}getOriginPoint(e){const[r,o,t]=this.origin;return new x({x:r,y:o,z:t,spatialReference:e})}setOriginFormPoint({x:e,y:r$1,z:o}){this.origin=r(e,r$1,o??0);}};e([o({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],a.prototype,"type",void 0),e([y({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"origin",void 0),a=e([a$1("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],a);const m=a;

export { m };

//# sourceMappingURL=MeshGeoreferencedRelativeVertexSpace-ea435964.js.map