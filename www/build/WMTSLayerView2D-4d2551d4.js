import { an as l, a3 as d$2, b2 as S, k as s, B as e$1, E as y$1, F as a$1 } from './interfaces-f9f0dded.js';
import { t, n } from './imageUtils-99a7fee7.js';
import { f, d as d$1 } from './LayerView-35409a5b.js';
import { h } from './TileStore-178dd7b2.js';
import { e } from './TileKey-4c2c49c7.js';
import { y, d as r } from './TileStrategy-7487a7f8.js';
import { a } from './RefreshableLayerView-903a5fdd.js';
import './_commonjsHelpers-b08b522c.js';
import './BitmapTileContainer-189203ea.js';
import './mat3f32-1cfc4913.js';
import './Bitmap-86029069.js';
import './mat3-eb290db7.js';
import './vec2f32-cdd4dd4e.js';
import './Container-d8a68f3e.js';
import './definitions-b0fcbe43.js';
import './enums-f1bebe6f.js';
import './Texture-afc14dbf.js';
import './contextUtils-e38d5070.js';
import './TiledDisplayObject-2ca56649.js';
import './WGLContainer-7c66c447.js';
import './VertexArrayObject-1461cfeb.js';
import './VertexElementDescriptor-33a64685.js';
import './color-f1195a3b.js';
import './enums-ca582117.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-977fc931.js';
import './GeometryUtils-141a489a.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-d5519700.js';
import './config-78edfbcd.js';
import './earcut-61f66feb.js';
import './vec2-c2da03bd.js';
import './vec2f64-25ab05ca.js';
import './featureConversionUtils-da87b7fc.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './TileContainer-b89f9eec.js';
import './config-update-ae0c9c9e.js';
import './index-0c4dc1bb.js';
import './utils-3c908942.js';
import './utils-6e0c5e09.js';
import './colorUtils-3c42b70c.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
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
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './quickselect-cc68e3d5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d=[102113,102100,3857,3785,900913],_=[0,0];let w=class extends(a(t(f(d$1)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new h(e),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(l((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this._refresh()))),super.attach());}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue?.updating??!1}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(h){if(d$2(h))throw h;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw h}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some((t=>S(t.tileInfo?.spatialReference,e)))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s$1){d$2(s$1)||s.getLogger(this).error(s$1);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{d$2(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),t.fulfilled=!0;}))};this._tileRequests.set(e,t);}));}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>S(e.tileInfo?.spatialReference,t)));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>d.includes(e.tileInfo?.spatialReference.wkid??-1)))),i}};e$1([y$1()],w.prototype,"_fetchQueue",void 0),e$1([y$1({readOnly:!0})],w.prototype,"tileMatrixSet",null),w=e$1([a$1("esri.views.2d.layers.WMTSLayerView2D")],w);const g=w;

export default g;

//# sourceMappingURL=WMTSLayerView2D-4d2551d4.js.map