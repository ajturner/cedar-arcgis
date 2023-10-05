import { ad as m$1, a3 as d$1, k as s, Z as h$1, B as e, E as y, F as a$1, c2 as k, b4 as M$1, aO as d$3, an as l$1, aH as w, c as j, s as s$1, y as b$1, ag as x, hL as b$2, b0 as U, V } from './interfaces-f9f0dded.js';
import { i as i$1 } from './GraphicsCollection-a0dc229c.js';
import { d as d$2, f, h as h$2 } from './RasterVFDisplayObject-c10b8f86.js';
import { f as f$2, d as d$4 } from './LayerView-0ac02167.js';
import { o as oe } from './GraphicsView2D-fbdfda4f.js';
import { n as n$1 } from './HighlightGraphicContainer-7ca036cd.js';
import { M, m as m$2, f as f$1 } from './dataUtils-2444252c.js';
import { a } from './BitmapContainer-83de27ca.js';
import { h } from './Container-d8a68f3e.js';
import { l } from './Bitmap-86029069.js';
import { v } from './ExportStrategy-d256dff1.js';
import { q } from './rasterProjectionHelper-c1bc5cbe.js';
import { T } from './color-f1195a3b.js';
import { i } from './WGLContainer-7c66c447.js';
import { p as p$1 } from './popupUtils-4fcdffd0.js';
import { a as a$2 } from './RefreshableLayerView-903a5fdd.js';
import './_commonjsHelpers-b08b522c.js';
import './VertexArrayObject-1461cfeb.js';
import './Texture-afc14dbf.js';
import './contextUtils-e38d5070.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './mat3f32-1cfc4913.js';
import './mat3-eb290db7.js';
import './vec2f32-cdd4dd4e.js';
import './config-update-89e29a27.js';
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
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './vec2f64-25ab05ca.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './cimAnalyzer-3bf5efb3.js';
import './fontUtils-84ca76ae.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-f6b4ca45.js';
import './enums-ca582117.js';
import './alignmentUtils-63467b02.js';
import './definitions-b0fcbe43.js';
import './number-4aaa92a3.js';
import './Rect-b4ddc2bf.js';
import './floatRGBA-bde46530.js';
import './normalizeUtilsSync-898773b1.js';
import './projectionSupport-edf32891.js';
import './json-4697dff9.js';
import './AttributeStoreView-57709d94.js';
import './TiledDisplayObject-2ca56649.js';
import './visualVariablesUtils-0358a92b.js';
import './createSymbolSchema-62dd11b3.js';
import './GeometryUtils-141a489a.js';
import './cimSymbolUtils-7e76fb38.js';
import './util-8efa6fb7.js';
import './Matcher-550439a8.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-e911eb9c.js';
import './earcut-61f66feb.js';
import './ComputedAttributeStorage-eaf2407e.js';
import './arcadeTimeUtils-79914cb4.js';
import './executionError-5ec41157.js';
import './BaseGraphicContainer-4cece76f.js';
import './FeatureContainer-f2c76701.js';
import './TileContainer-b89f9eec.js';
import './vec3f32-77e8c64f.js';
import './ProgramTemplate-977fc931.js';
import './StyleDefinition-d5519700.js';
import './config-78edfbcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let m=class extends m$1{constructor(){super(...arguments),this.attached=!1,this.container=new h,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);}));}hitTest(t){return new h$1({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new v({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=t=>this.layer.pixelFilter?this.layer.applyFilter(t):{...i,extent:e.extent};})).catch((t=>{d$1(t)||s.getLogger(this).error(t);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return {extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(e))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),r=M(i,e);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,e,i,r);if(s.imageBitmap)return s.imageBitmap;const a=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new l(a.pixelBlock,a.extent?.clone(),s.pixelData.pixelBlock);return o.filter=t=>this.layer.applyFilter(t),o}};e([y()],m.prototype,"attached",void 0),e([y()],m.prototype,"container",void 0),e([y()],m.prototype,"layer",void 0),e([y()],m.prototype,"strategy",void 0),e([y()],m.prototype,"timeExtent",void 0),e([y()],m.prototype,"view",void 0),e([y()],m.prototype,"updateRequested",void 0),e([y()],m.prototype,"updating",null),e([y()],m.prototype,"type",void 0),m=e([a$1("esri.views.2d.layers.imagery.ImageryView2D")],m);const u$1=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t extends i{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[d$2],target:()=>this.children,drawPhase:T.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===T.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends m$1{constructor(e){super(e),this._loading=null,this.update=k(((e,t)=>this._update(e,t).catch((e=>{d$1(e)||s.getLogger(this).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new M$1({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,l]=e.state.size;this._loading=this.fetchPixels(o,a,l,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:i,pixelBlock:s}=e,o=new f(s);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=i.xmin,o.y=i.ymax,o.pixelRatio=r.pixelRatio,o.rotation=r.rotation,o.resolution=r.resolution,o.width=s.width*t.symbolTileSize,o.height=s.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(o);}};e([y()],c.prototype,"fetchPixels",void 0),e([y()],c.prototype,"container",void 0),e([y()],c.prototype,"_loading",void 0),e([y()],c.prototype,"updating",null),c=e([a$1("esri.views.2d.layers.imagery.ImageryVFStrategy")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let u=class extends d$3{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,r,i)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:o,width:n,height:l}=m$2(t,e,r,a,s);if(null!=s&&!s.intersects(t))return {extent:o,pixelBlock:null};const c={bbox:`${o.xmin}, ${o.ymin}, ${o.xmax}, ${o.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const t=this.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===c.bbox)return t}}const{pixelData:h}=await this.layer.fetchImage(o,n,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});this._dataParameters=c;const y=h?.pixelBlock;if(null==y)return {extent:o,pixelBlock:null};return {extent:o,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?f$1(y,"vector-uv"):y}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new p({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l$1((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),w),"attach");}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:r}=t;return {extent:e,pixelBlock:r}}hitTest(t){return new h$1({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams);}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams));}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,r=this._dataParameters.time===t.time,i=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&r&&i&&s}async _getProjectedFullExtent(t){try{return await q(this.layer.fullExtent,t)}catch(e){try{const e=(await j(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?M$1.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([y()],u.prototype,"attached",void 0),e([y()],u.prototype,"container",void 0),e([y()],u.prototype,"layer",void 0),e([y()],u.prototype,"timeExtent",void 0),e([y()],u.prototype,"type",void 0),e([y()],u.prototype,"view",void 0),e([y()],u.prototype,"updating",null),u=e([a$1("esri.views.2d.layers.imagery.VectorFieldView2D")],u);const d=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=n=>{let u=class extends n{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)throw new s$1("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:p}=o,n=p$1(o,t);if(!p||null==n)throw new s$1("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:n});const u=await n.getRequiredFields(),l=new b$1;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=u,l.outSpatialReference=e.spatialReference;const{resolution:m,spatialReference:c}=this.view,y="2d"===this.view.type?new x(m,m,c):new x(.5*m,.5*m,c),{returnTopmostRaster:d,showNoDataRecords:h}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:y,showNoDataRecords:h,signal:null!=t?t.signal:null};return o.queryVisibleRasters(l,w).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],u.prototype,"layer",void 0),e([y()],u.prototype,"suspended",void 0),e([y(b$2)],u.prototype,"timeExtent",void 0),e([y()],u.prototype,"view",void 0),u=e([a$1("esri.views.layers.ImageryLayerView")],u),u};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let g=class extends(n(a$2(f$2(d$4)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new i$1,this._highlightView=void 0,this.layer=null,this.subview=null;}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([l$1((()=>this.layer.blendMode??"normal"),(e=>this.subview&&(this.subview.container.blendMode=e)),w),l$1((()=>this.layer.effect??null),(e=>this.subview&&(this.subview.container.effect=e)),w),l$1((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U),l$1((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch());}),U),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch());})),l$1((()=>this.layer.renderer),(()=>this._setSubView()))]);}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:V.isCollection(e)?e.at(0):e)instanceof h$1))return {remove:()=>{}};let s=[];return Array.isArray(e)||V.isCollection(e)?s=e.map((e=>e.clone())):e instanceof h$1&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===t?new u$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new d({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new h$2({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([y()],g.prototype,"pixelData",null),e([y()],g.prototype,"subview",void 0),g=e([a$1("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export default b;

//# sourceMappingURL=ImageryLayerView2D-47fb948e.js.map