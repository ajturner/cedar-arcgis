import { c as j, d as u } from './interfaces-f9f0dded.js';
import { t } from './config-update-ae0c9c9e.js';
import { q } from './utils-3c908942.js';
import './_commonjsHelpers-b08b522c.js';
import './index-0c4dc1bb.js';
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
import './mat3f32-1cfc4913.js';
import './vec2f32-cdd4dd4e.js';
import './imageUtils-a77011bc.js';
import './capabilities-43dc968b.js';
import './contextUtils-e38d5070.js';
import './utils-6e0c5e09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?j(s,{responseType:"image"}).then((t=>{const e=r(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):q(e).then((t=>t?i(t,h):null))}function r(t$1,n){const h=!/\\.svg$/i.test(t$1.src)&&n&&n.disableUpsampling,r=Math.max(t$1.width,t$1.height);let s=n&&null!=n.maxSize?u(n.maxSize):t.maxSize;h&&(s=Math.min(r,s));const o="number"==typeof n?.size?n?.size:null,m=Math.min(s,null!=o?u(o):r);if(m!==r){const e=0!==t$1.width&&0!==t$1.height?t$1.width/t$1.height:1;e>=1?(t$1.width=m,t$1.height=m/e):(t$1.width=m*e,t$1.height=m);}return t$1}

export { h as previewWebStyleSymbol };

//# sourceMappingURL=previewWebStyleSymbol-479e7ab6.js.map