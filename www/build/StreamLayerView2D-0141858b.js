import { B as e, E as y$1, bx as d, F as a, an as l, s, fr as n, a0 as d$1 } from './interfaces-f9f0dded.js';
import W from './FeatureLayerView2D-75d856d9.js';
import { e as e$1 } from './util-8efa6fb7.js';
import './_commonjsHelpers-b08b522c.js';
import './Container-d8a68f3e.js';
import './mat3f32-1cfc4913.js';
import './definitions-b0fcbe43.js';
import './enums-f1bebe6f.js';
import './Texture-afc14dbf.js';
import './contextUtils-e38d5070.js';
import './LayerView-35409a5b.js';
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
import './AttributeStoreView-57709d94.js';
import './TiledDisplayObject-2ca56649.js';
import './color-f1195a3b.js';
import './enums-ca582117.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
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
import './BitmapTileContainer-189203ea.js';
import './Bitmap-86029069.js';
import './TileContainer-b89f9eec.js';
import './CircularArray-00e66d79.js';
import './BufferPool-095f03dd.js';
import './FeatureContainer-f2c76701.js';
import './floorFilterUtils-29b268fd.js';
import './popupUtils-4fcdffd0.js';
import './RefreshableLayerView-903a5fdd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=o=>{let i=class extends o{resume(){this._isUserPaused=!1,this.suspended||this._doResume();}pause(){this._isUserPaused=!0,this.suspended||this._doPause();}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null;}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume();}};return e([y$1()],i.prototype,"_isUserPaused",void 0),e([y$1({readOnly:!0})],i.prototype,"connectionStatus",null),e([y$1({type:d})],i.prototype,"filter",void 0),i=e([a("esri.layers.mixins.StreamLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c(e,t){if(null==e&&null==t)return null;const r={};return null!=t&&(r.geometry=t.toJSON()),null!=e&&(r.where=e),r}let u=class extends(o(W)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set;}initialize(){this.addHandles([l((()=>this.layer.customParameters),(e=>this._proxy.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._proxy.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>this._proxy.sendMessageToClient(e))),l((()=>this.layer.purgeOptions),(()=>this._update())),l((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor");}get connectionError(){return this.pipelineErrorString?new s("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return n(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const i=super.on(e,t),o=this;return {remove(){i.remove(),s&&(o._proxy.closed||o.hasEventListener(e)||o._proxy.enableEvent(e,!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=d$1.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected";}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._proxy?.pauseStream();}_doResume(){this._proxy?.resumeStream();}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",isPaused:this._isUserPaused,fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([y$1()],u.prototype,"pipelineConnectionStatus",void 0),e([y$1()],u.prototype,"pipelineErrorString",void 0),e([y$1({readOnly:!0})],u.prototype,"connectionError",null),e([y$1({readOnly:!0})],u.prototype,"_streamConnectionStatus",null),u=e([a("esri.views.2d.layers.StreamLayerView2D")],u);const y=u;

export default y;

//# sourceMappingURL=StreamLayerView2D-0141858b.js.map