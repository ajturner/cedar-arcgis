import { V, bV as l, B as e, E as y, F as a } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i=class extends V{constructor(t){super(t),this.getCollections=null;}initialize(){this.own(l((()=>this._refresh())));}destroy(){this.getCollections=null;}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let o=0;for(const s of t)null!=s&&(o=this._processCollection(o,s));this.splice(o,this.length);}_createNewInstance(t){return new V(t)}_processCollection(t,o){if(!o)return t;const s=this.itemFilterFunction??(t=>!!t);for(const e of o)if(e){if(s(e)){const o=this.indexOf(e,t);o>=0?o!==t&&this.reorder(e,t):this.add(e,t),++t;}if(this.getChildrenFunction){const o=this.getChildrenFunction(e);if(Array.isArray(o))for(const s of o)t=this._processCollection(t,s);else t=this._processCollection(t,o);}}return t}};e([y()],i.prototype,"getCollections",void 0),e([y()],i.prototype,"getChildrenFunction",void 0),e([y()],i.prototype,"itemFilterFunction",void 0),i=e([a("esri.core.CollectionFlattener")],i);const n=i;

export { n };

//# sourceMappingURL=CollectionFlattener-78984a9a.js.map