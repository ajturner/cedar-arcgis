import { B as e, E as y, hL as b, F as a, a3 as d$1, k as s, an as l } from './interfaces-f9f0dded.js';
import { i } from './GraphicsCollection-a0dc229c.js';
import { a as a$2 } from './BitmapContainer-83de27ca.js';
import { f as f$1, d } from './LayerView-35409a5b.js';
import { o as oe } from './GraphicsView2D-fbdfda4f.js';
import { n } from './HighlightGraphicContainer-7ca036cd.js';
import { v } from './ExportStrategy-d256dff1.js';
import { m } from './ExportImageParameters-73d90a3e.js';
import { a as a$1 } from './RefreshableLayerView-903a5fdd.js';
import { U, r } from './drapedUtils-2877c942.js';
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
import './config-update-ae0c9c9e.js';
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
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './mat3-eb290db7.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './cimAnalyzer-3bf5efb3.js';
import './fontUtils-84ca76ae.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-f6b4ca45.js';
import './Rect-b4ddc2bf.js';
import './floatRGBA-bde46530.js';
import './normalizeUtilsSync-898773b1.js';
import './projectionSupport-edf32891.js';
import './json-4697dff9.js';
import './AttributeStoreView-57709d94.js';
import './TiledDisplayObject-2ca56649.js';
import './visualVariablesUtils-0358a92b.js';
import './createSymbolSchema-62dd11b3.js';
import './cimSymbolUtils-7e76fb38.js';
import './util-8efa6fb7.js';
import './Matcher-550439a8.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-e911eb9c.js';
import './ComputedAttributeStorage-eaf2407e.js';
import './arcadeTimeUtils-79914cb4.js';
import './executionError-5ec41157.js';
import './BaseGraphicContainer-4cece76f.js';
import './FeatureContainer-f2c76701.js';
import './TileContainer-b89f9eec.js';
import './vec3f32-77e8c64f.js';
import './Bitmap-86029069.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-84c54601.js';
import './scaleUtils-e3cd02d2.js';
import './popupUtils-4fcdffd0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const p=p=>{let a$1=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],a$1.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],a$1.prototype,"floors",null),e([y({readOnly:!0})],a$1.prototype,"exportImageVersion",null),e([y()],a$1.prototype,"layer",void 0),e([y()],a$1.prototype,"suspended",void 0),e([y(b)],a$1.prototype,"timeExtent",void 0),a$1=e([a("esri.views.layers.MapImageLayerView")],a$1),a$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let f=class extends(p(a$1(f$1(d)))){constructor(){super(...arguments),this._highlightGraphics=new i,this._updateHash="";}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a=i>=10;this._bitmapContainer=new a$2,this.container.addChild(this._bitmapContainer),this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.addAttachHandles(l((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y()],f.prototype,"strategy",void 0),e([y()],f.prototype,"updating",void 0),f=e([a("esri.views.2d.layers.MapImageLayerView2D")],f);const w=f;

export default w;

//# sourceMappingURL=MapImageLayerView2D-46761302.js.map