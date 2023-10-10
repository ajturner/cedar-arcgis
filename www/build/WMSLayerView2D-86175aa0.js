import { ap as l$1, s, B as e, E as y$1, hL as b, F as a, a3 as d$1, k as s$1, an as l$2, b4 as M } from './interfaces-f9f0dded.js';
import { a as a$2 } from './BitmapContainer-83de27ca.js';
import { f, d } from './LayerView-0ac02167.js';
import { v } from './ExportStrategy-d256dff1.js';
import { a as a$1 } from './RefreshableLayerView-903a5fdd.js';
import { l } from './ExportWMSImageParameters-861611d7.js';
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
import './Bitmap-86029069.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i=i=>{let m=class extends i{initialize(){this.exportImageParameters=new l({layer:this.layer});}destroy(){this.exportImageParameters=l$1(this.exportImageParameters);}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});return t.fetchFeatureInfo(p,a,i,m,n)}};return e([y$1()],m.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],m.prototype,"exportImageVersion",null),e([y$1()],m.prototype,"layer",void 0),e([y$1(b)],m.prototype,"timeExtent",void 0),m=e([a("esri.layers.mixins.WMSLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let y=class extends(i(a$1(f(d)))){constructor(){super(...arguments),this.bitmapContainer=new a$2;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{d$1(e)||s$1.getLogger(this).error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new a$2,this.container.addChild(this.bitmapContainer),this.strategy=new v({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())));}detach(){this.strategy=l$1(this.strategy),this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:i,y:s}=e,{spatialReference:a}=t;let o,n=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,y=d-h*r;return i>=c&&i<=u&&s<=d&&s>=y&&(o=new M({xmin:c,ymin:y,xmax:u,ymax:d,spatialReference:a}),n=t,m=r,!0)})),!o)return null;const h=o.width/n,c=Math.round((i-o.xmin)/h),d=Math.round((o.ymax-s)/h);return {extent:o,width:n,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...i})}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([a("esri.views.2d.layers.WMSLayerView2D")],y);const g=y;

export default g;

//# sourceMappingURL=WMSLayerView2D-86175aa0.js.map