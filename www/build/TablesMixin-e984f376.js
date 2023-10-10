import { n as n$1 } from './CollectionFlattener-78984a9a.js';
import { V, k as s, a4 as n$2, bW as b, b8 as T, B as e, E as y, F as a$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t){return new n$1({getCollections:()=>[t.tables,t.layers],getChildrenFunction:e=>{const t=[];return "tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return !!t&&"tables"in t&&t.tables.includes(e)}})}function n(e){for(const t of e.values())t?.destroy();e.clear();}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function l$1(e,r,t){let s,o;if(e)for(let a=0,i=e.length;a<i;a++){if(s=e.at(a),s?.[r]===t)return s;if("group"===s?.type&&(o=l$1(s.layers,r,t),o))return o}}const d=d=>{let y$1=class extends d{constructor(...e){super(...e),this.layers=new V;const t=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e);},o=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||s.getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`);},a=e=>{e.parent=null,this.layerRemoved(e);};this.addHandles([this.layers.on("before-add",(e=>t(e.item))),this.layers.on("after-add",(e=>o(e.item))),this.layers.on("after-remove",(e=>a(e.item)))]);}destroy(){const e=this.layers.toArray();for(const r of e)r.destroy();this.layers.destroy();}set layers(e){this._set("layers",n$2(e,this._get("layers")));}add(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof b){const s=e;s.parent===this?this.reorder(s,r):t.add(s,r);}else T(e)?e.then((e=>{this.destroyed||this.add(e,r);})):s.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.");}addMany(e,r){const t=this.layers;let s=t.getNextIndex(r);e.slice().forEach((e=>{e.parent!==this?(t.add(e,s),s+=1):this.reorder(e,s);}));}findLayerById(e){return l$1(this.layers,"id",e)}findLayerByUid(e){return l$1(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return e([y()],y$1.prototype,"layers",null),y$1=e([a$1("esri.support.LayersMixin")],y$1),y$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(t,e,r){if(t)for(let s=0,o=t.length;s<o;s++){const o=t.at(s);if(o[e]===r)return o;if("group"===o?.type){const t=a(o.tables,e,r);if(t)return t}}}const l=l=>{let n=class extends l{constructor(...t){super(...t),this.tables=new V,this.addHandles([this.tables.on("after-add",(t=>{const e=t.item;e.parent&&e.parent!==this&&"tables"in e.parent&&e.parent.tables.remove(e),e.parent=this,"feature"!==e.type&&s.getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`);})),this.tables.on("after-remove",(t=>{t.item.parent=null;}))]);}destroy(){const t=this.tables.removeAll();for(const e of t)e.destroy();this.tables.destroy();}set tables(t){this._set("tables",n$2(t,this._get("tables")));}findTableById(t){return a(this.tables,"id",t)}findTableByUid(t){return a(this.tables,"uid",t)}};return e([y()],n.prototype,"tables",null),n=e([a$1("esri.support.TablesMixin")],n),n};

export { d, l, n, t };

//# sourceMappingURL=TablesMixin-e984f376.js.map