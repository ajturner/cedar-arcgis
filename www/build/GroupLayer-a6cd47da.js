import { i4 as a, i5 as t, dl as c, dm as j, dn as O, bW as b, an as l$1, aG as a$1, k as s, aH as w$1, b0 as U, i6 as e$1, B as e$2, E as y, a6 as r, F as a$3 } from './interfaces-f9f0dded.js';
import { n } from './CollectionFlattener-78984a9a.js';
import { t as t$2 } from './loadAll-dc49c260.js';
import { a as a$2 } from './lazyLayerLoader-5c5a0bac.js';
import { l, d, t as t$1 } from './TablesMixin-e984f376.js';
import { f } from './writeUtils-3dcfa57f.js';
import './_commonjsHelpers-b08b522c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e=Symbol("WebScene");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let w=class extends(a(t(c(j(l(d(O(b)))))))){constructor(e){super(e),this.allLayers=new n({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=t$1(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group";}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([l$1((()=>{let e$1=this.parent;for(;e$1&&"parent"in e$1&&e$1.parent;)e$1=e$1.parent;return e$1&&e in e$1}),(e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(a$1((()=>this.tables),"before-add",(e=>{e.preventDefault(),s.getLogger(this).errorOnce("tables","Tables are not yet supported in a WebScene so they can't be added.");})),i));}),w$1),l$1((()=>this.visible),this._onVisibilityChange.bind(this),U)]);}destroy(){this.allLayers.destroy(),this.allTables.destroy();}_writeLayers(e,i,t,r){const s=[];if(!e)return s;e.forEach((e=>{const i=f(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);null!=i&&i.layerType&&s.push(i);})),i.layers=s;}set portalItem(e){this._set("portalItem",e);}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible);}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:a$2},e)),Promise.resolve(this)}async loadAll(){return t$2(this,(e=>{e(this.layers,this.tables);}))}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer readded to Grouplayer: uid=${e.uid}`):this.addHandles(l$1((()=>e.visible),(i=>this._onChildVisibilityChange(e,i)),U),e.uid);}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1);}));}_enforceVisibility(e,i){if(!e$1(this).initialized)return;const t=this.layers;let r=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!r&&(r=t.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((e=>{e.visible=i;}));}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e;}));}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};e$2([y({readOnly:!0,dependsOn:[]})],w.prototype,"allLayers",void 0),e$2([y({readOnly:!0})],w.prototype,"allTables",void 0),e$2([y()],w.prototype,"fullExtent",void 0),e$2([y({json:{read:!0,write:!0}})],w.prototype,"blendMode",void 0),e$2([y({json:{read:!1,write:{ignoreOrigin:!0}}})],w.prototype,"layers",void 0),e$2([r("layers")],w.prototype,"_writeLayers",null),e$2([y({type:["GroupLayer"]})],w.prototype,"operationalLayerType",void 0),e$2([y({json:{origins:{"web-document":{read:!1,write:!1}}}})],w.prototype,"portalItem",null),e$2([y()],w.prototype,"spatialReference",void 0),e$2([y({json:{read:!1},readOnly:!0,value:"group"})],w.prototype,"type",void 0),e$2([y({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{"inherited"!==e&&(i[t]=e);}}}}})],w.prototype,"visibilityMode",null),w=e$2([a$3("esri.layers.GroupLayer")],w);const M=w;

export default M;

//# sourceMappingURL=GroupLayer-a6cd47da.js.map