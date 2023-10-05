import { V, an as l, b0 as U, a4 as n$1, B as e, E as y, ch as t, F as a$1 } from './interfaces-f9f0dded.js';
import { r } from './GroupContainer-e0baa0a8.js';
import { d, f } from './LayerView-0ac02167.js';
import './_commonjsHelpers-b08b522c.js';
import './WGLContainer-7c66c447.js';
import './mat3f32-1cfc4913.js';
import './definitions-b0fcbe43.js';
import './VertexArrayObject-1461cfeb.js';
import './Texture-afc14dbf.js';
import './contextUtils-e38d5070.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-f1195a3b.js';
import './enums-ca582117.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-977fc931.js';
import './GeometryUtils-141a489a.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-d5519700.js';
import './vec2f32-cdd4dd4e.js';
import './config-78edfbcd.js';
import './Container-d8a68f3e.js';
import './earcut-61f66feb.js';
import './vec2-c2da03bd.js';
import './vec2f64-25ab05ca.js';
import './featureConversionUtils-da87b7fc.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './config-update-89e29a27.js';
import './index-0c4dc1bb.js';
import './utils-3c908942.js';
import './utils-6e0c5e09.js';
import './colorUtils-3c42b70c.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './TileStrategy-7487a7f8.js';
import './TileStore-178dd7b2.js';
import './TileKey-4c2c49c7.js';
import './quickselect-cc68e3d5.js';
import './webStyleSymbolUtils-0542add6.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './statsWorker-e4850868.js';
import './quantizationUtils-33eaa35c.js';
import './utils-9b101bd7.js';
import './generateRendererUtils-ef8214c8.js';
import './Basemap-0d067aec.js';
import './loadAll-dc49c260.js';
import './writeUtils-3dcfa57f.js';
import './executeQuery-dca07954.js';
import './infoFor3D-0047d262.js';
import './executeQueryJSON-a16aae69.js';
import './normalizeUtils-6257e368.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './executeQueryPBF-24a7740f.js';
import './AttachmentInfo-fac6a5e9.js';
import './CollectionFlattener-78984a9a.js';
import './TablesMixin-e984f376.js';
import './Cyclical-5ec65b13.js';
import './TileInfo-4a28547b.js';
import './Scheduler-1e6f0e40.js';
import './GraphicsCollection-a0dc229c.js';
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './mat3-eb290db7.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends d{constructor(i){super(i),this.type="group",this.layerViews=new V;}destroy(){this.handles.removeAll(),this.layerViews.length=0;}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i;}));}initialize(){this.handles.add([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),l((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)));}),U),l((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}));}),U)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});}set layerViews(i){this._set("layerViews",n$1(i,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const e=this._findLayerViewForLayer(i);return !!e?.visible}));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){null==i&&null==(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((e=>{e.visible=e===i;}));}_layerViewsChangeHandler(i){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((i=>l((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible);}),(()=>this._applyExclusiveVisibility(e?i:null)))),U))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)));}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e());}};e([y({cast:t})],h.prototype,"layerViews",null),e([y({readOnly:!0})],h.prototype,"updatingProgress",null),e([y()],h.prototype,"view",void 0),h=e([a$1("esri.views.layers.GroupLayerView")],h);const n=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let a=class extends(f(n)){constructor(){super(...arguments),this.container=new r;}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())));}detach(){this.container.removeAllChildren();}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};a=e([a$1("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;

export default i;

//# sourceMappingURL=GroupLayerView2D-a4628979.js.map