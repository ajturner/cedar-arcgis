import { ap as l$1, Z as h, V, R, B as e, E as y, F as a } from './interfaces-f9f0dded.js';
import { f, d as d$1 } from './LayerView-35409a5b.js';
import { i } from './GraphicContainer-08380e3e.js';
import { o as oe } from './GraphicsView2D-fbdfda4f.js';
import './_commonjsHelpers-b08b522c.js';
import './Container-d8a68f3e.js';
import './mat3f32-1cfc4913.js';
import './definitions-b0fcbe43.js';
import './enums-f1bebe6f.js';
import './Texture-afc14dbf.js';
import './contextUtils-e38d5070.js';
import './config-update-ae0c9c9e.js';
import './index-0c4dc1bb.js';
import './utils-3c908942.js';
import './utils-6e0c5e09.js';
import './colorUtils-3c42b70c.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './TileStrategy-7487a7f8.js';
import './vec2-c2da03bd.js';
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
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './executeQueryPBF-24a7740f.js';
import './featureConversionUtils-da87b7fc.js';
import './AttachmentInfo-fac6a5e9.js';
import './CollectionFlattener-78984a9a.js';
import './TablesMixin-e984f376.js';
import './Cyclical-5ec65b13.js';
import './TileInfo-4a28547b.js';
import './Scheduler-1e6f0e40.js';
import './GraphicsCollection-a0dc229c.js';
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './vec2f64-25ab05ca.js';
import './mat3-eb290db7.js';
import './vec2f32-cdd4dd4e.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './color-f1195a3b.js';
import './enums-ca582117.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './BaseGraphicContainer-4cece76f.js';
import './FeatureContainer-f2c76701.js';
import './AttributeStoreView-57709d94.js';
import './TiledDisplayObject-2ca56649.js';
import './WGLContainer-7c66c447.js';
import './VertexArrayObject-1461cfeb.js';
import './ProgramTemplate-977fc931.js';
import './GeometryUtils-141a489a.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-d5519700.js';
import './config-78edfbcd.js';
import './earcut-61f66feb.js';
import './visualVariablesUtils-0358a92b.js';
import './createSymbolSchema-62dd11b3.js';
import './cimAnalyzer-3bf5efb3.js';
import './fontUtils-84ca76ae.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-f6b4ca45.js';
import './Rect-b4ddc2bf.js';
import './floatRGBA-bde46530.js';
import './cimSymbolUtils-7e76fb38.js';
import './util-8efa6fb7.js';
import './TileContainer-b89f9eec.js';
import './vec3f32-77e8c64f.js';
import './normalizeUtilsSync-898773b1.js';
import './projectionSupport-edf32891.js';
import './json-4697dff9.js';
import './Matcher-550439a8.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-e911eb9c.js';
import './ComputedAttributeStorage-eaf2407e.js';
import './arcadeTimeUtils-79914cb4.js';
import './executionError-5ec41157.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f(d$1)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=l$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let h$1;"number"==typeof i?h$1=[i]:i instanceof h?h$1=[i.uid]:Array.isArray(i)&&i.length>0?h$1="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(h$1=i.map((i=>i&&i.uid)).toArray());const r=h$1?.filter(R);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export default d;

//# sourceMappingURL=GraphicsLayerView2D-e544c091.js.map