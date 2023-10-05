import { B as e, E as y, F as a$1 } from './interfaces-f9f0dded.js';
import W from './FeatureLayerView2D-75d856d9.js';
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
import './util-8efa6fb7.js';
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
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let t=class extends(o(W)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export default a;

//# sourceMappingURL=OGCFeatureLayerView2D-aac91949.js.map