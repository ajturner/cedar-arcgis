import { aG as a$1, a3 as d, k as s, B as e, E as y, F as a$2 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a=a=>{let c=class extends a{initialize(){this.handles.add(a$1((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{d(r)||s.getLogger(this).error(r);}));})),"RefreshableLayerView");}};return e([y()],c.prototype,"layer",void 0),c=e([a$2("esri.layers.mixins.RefreshableLayerView")],c),c};

export { a };

//# sourceMappingURL=RefreshableLayerView-903a5fdd.js.map