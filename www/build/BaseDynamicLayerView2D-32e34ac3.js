import { a3 as d$1, k as s, B as e, E as y, F as a$2 } from './interfaces-f9f0dded.js';
import { a as a$1 } from './BitmapContainer-83de27ca.js';
import { f, d } from './LayerView-35409a5b.js';
import { v } from './ExportStrategy-d256dff1.js';
import { a } from './RefreshableLayerView-903a5fdd.js';
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
import './GraphicsCollection-a0dc229c.js';
import './ViewingMode-0a71038b.js';
import './unitBezier-a3c7a2db.js';
import './mat3-eb290db7.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './Bitmap-86029069.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends(a(f(d))){update(t){this._strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$2("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export default c;

//# sourceMappingURL=BaseDynamicLayerView2D-32e34ac3.js.map