import { aZ as a, V, ch as t, a4 as n, B as e, E as y, F as a$1, ci as n$1, Z as h, t as d } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let l=class extends(a(V)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{null==e.item&&e.preventDefault();})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))]);}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll());}_ownAll(){for(const e of this.items)this._own(e);}_releaseAll(){for(const e of this.items)this._release(e);}_createNewInstance(e){return this.itemType?new(V.ofType(this.itemType.Type))(e):new V(e)}};function p(e,t$1){return {type:e,cast:t,set(s){const r=n(s,this._get(t$1),e);r.owner=this,this._set(t$1,r);}}}e([y()],l.prototype,"owner",null),l=e([a$1("esri.core.support.OwningCollection")],l);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i=class extends l{_own(r){r.layer&&"remove"in r.layer&&r.layer!==this.owner&&r.layer.remove(r),r.layer=this.owner;}_release(r){r.layer===this.owner&&(r.layer=null);}};e([n$1({Type:h,ensureType:d(h)})],i.prototype,"itemType",void 0),i=e([a$1("esri.support.GraphicsCollection")],i);

export { i, l, p };

//# sourceMappingURL=GraphicsCollection-a0dc229c.js.map