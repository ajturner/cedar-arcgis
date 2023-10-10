import { aV as nn, ag as x, c as j$1, V, an as l$1, aX as e$1, ap as l$2, b4 as M, aW as $$1, b5 as f$1, dH as a$1, cS as I, cU as v, B as e$2, E as y, F as a$2 } from './interfaces-f9f0dded.js';
import { b as b$1, g, d as d$1 } from './kmlUtils-a098892c.js';
import { f as f$2 } from './normalizeUtils-6257e368.js';
import { i } from './GraphicsCollection-a0dc229c.js';
import { w, b, T as T$1 } from './Bitmap-86029069.js';
import { a } from './BitmapContainer-83de27ca.js';
import { f, d } from './LayerView-0ac02167.js';
import { i as i$1 } from './GraphicContainer-08380e3e.js';
import { o as oe } from './GraphicsView2D-fbdfda4f.js';
import { C as C$1, $ } from './rasterProjectionHelper-c1bc5cbe.js';
import { n } from './WGLContainer-7c66c447.js';
import { P, o } from './RenderingContext-88b7b437.js';
import { D, G, U, X } from './enums-f1bebe6f.js';
import { x as x$1 } from './VertexArrayObject-1461cfeb.js';
import { m } from './rasterUtils-b5504c23.js';
import { b as e, T } from './Texture-afc14dbf.js';
import './_commonjsHelpers-b08b522c.js';
import './normalizeUtilsCommon-b073ef53.js';
import './mat3-eb290db7.js';
import './mat3f32-1cfc4913.js';
import './vec2f32-cdd4dd4e.js';
import './Container-d8a68f3e.js';
import './definitions-b0fcbe43.js';
import './contextUtils-e38d5070.js';
import './color-f1195a3b.js';
import './enums-ca582117.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
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
import './BaseGraphicContainer-4cece76f.js';
import './FeatureContainer-f2c76701.js';
import './AttributeStoreView-57709d94.js';
import './TiledDisplayObject-2ca56649.js';
import './visualVariablesUtils-0358a92b.js';
import './createSymbolSchema-62dd11b3.js';
import './GeometryUtils-141a489a.js';
import './alignmentUtils-63467b02.js';
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
import './earcut-61f66feb.js';
import './ComputedAttributeStorage-eaf2407e.js';
import './arcadeTimeUtils-79914cb4.js';
import './executionError-5ec41157.js';
import './ProgramTemplate-977fc931.js';
import './StyleDefinition-d5519700.js';
import './config-78edfbcd.js';
import './programUtils-ee0457e4.js';
import './NestedMap-98a772ce.js';
import './OrderIndependentTransparency-2a855020.js';
import './basicInterfaces-ce8a6401.js';
import './testSVGPremultipliedAlpha-36067eb4.js';
import './doublePrecisionUtils-8d2311b1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class l{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else {if(l._instance)return l._instanceRefCount++,l._instance;l._instanceRefCount=1,l._instance=this,this._ownsRctx=!0;const t=document.createElement("canvas").getContext("webgl");t.getExtension("OES_texture_float"),this._rctx=new P(t,{});}const e={applyProjection:!0,bilinear:!1,bicubic:!1},r=o("raster/reproject","raster/reproject",new Map([["a_position",0]]),e);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new n(this._rctx,[0,0,1,0,0,1,1,1]);}reprojectTexture(t,s,n=!1){const o=nn(t.extent,s),m$1=new x({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:_,y:g}=C$1(m$1,s,t.extent);let l=(_+g)/2;const w=Math.round((o.xmax-o.xmin)/l),b=Math.round((o.ymax-o.ymin)/l);l=(o.width/w+o.height/b)/2;const j=new x({x:l,y:l,spatialReference:o.spatialReference}),D$1=$({projectedExtent:o,srcBufferExtent:t.extent,pixelSize:j,hasWrapAround:!0,spacing:[16,16]}),R=m(this._rctx,D$1),C=new e(w,b);C.wrapMode=D.CLAMP_TO_EDGE;const T=new x$1(this._rctx,C);this._rctx.bindFramebuffer(T),this._rctx.setViewport(0,0,w,b),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(R,1),this._quad.bind();const{width:y=0,height:E=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,E),this._program.setUniform2fv("u_transformSpacing",D$1.spacing),this._program.setUniform2fv("u_transformGridSize",D$1.size),this._program.setUniform2f("u_targetImageSize",w,b),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),R.dispose(),n){const{width:t,height:e}=T,r=new ImageData(t??0,e??0);T.readPixels(0,0,t??0,e??0,G.RGBA,U.UNSIGNED_BYTE,r.data);const i=T.detachColorTexture(X.COLOR_ATTACHMENT0);return T.dispose(),{texture:i,extent:o,imageData:r}}const M=T.detachColorTexture(X.COLOR_ATTACHMENT0);return T.dispose(),{texture:M,extent:o}}reprojectBitmapData(t,e$1){const r=w(t.bitmapData)?b(t.bitmapData):t.bitmapData,i=new e;i.wrapMode=D.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new T(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},e$1,!0);o.texture.dispose();const m=document.createElement("canvas"),p=o.imageData;m.width=p.width,m.height=p.height;return m.getContext("2d").putImageData(p,0,0),{bitmapData:m,extent:o.extent}}async loadAndReprojectBitmapData(e,r,i){const a=(await j$1(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const n=s.getContext("2d");n.drawImage(a,0,0);const o=n.getImageData(0,0,s.width,s.height);if(r.spatialReference.equals(i))return {bitmapData:o,extent:r};const m=this.reprojectBitmapData({bitmapData:o,extent:r},i);return {bitmapData:m.bitmapData,extent:m.extent}}destroy(){this._ownsRctx?(l._instanceRefCount--,0===l._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),l._instance=null)):(this._quad.dispose(),this._program.dispose());}}l._instanceRefCount=0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(f(d)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new a,this._kmlVisualData=new C,this._fetchController=null,this.allVisiblePoints=new i,this.allVisiblePolylines=new i,this.allVisiblePolygons=new i,this.allVisibleMapImages=new V;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new oe({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new oe({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new oe({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),l$1((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new l;}detach(){this._fetchController=e$1(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=l$2(this._polygonsView),this._polylinesView=l$2(this._polylinesView),this._pointsView=l$2(this._pointsView),this._imageReprojector=l$2(this._imageReprojector);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,M.fromJSON(e.extent),this.view.spatialReference).then((i=>{const t=new T$1(i.bitmapData);t.x=i.extent.xmin,t.y=i.extent.ymax,t.resolution=i.extent.width/i.bitmapData.width,t.rotation=e.rotation,this._mapImageContainer.addChild(t),this._bitmapIndex.set(e,t);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a,httpQuery:o}=e;if(null!=s){if(null==t)throw new Error("Loading this network link requires a view state.");let n;if(await $$1(),null!=a&&1!==a){const e=new M(t.extent);e.expand(a),n=e;}else n=t.extent;n=nn(n,f$1.WGS84);const h=nn(n,f$1.WebMercator),y=n.xmin,g=n.xmax,w=n.ymin,_=n.ymax,b=t.size[0]*t.pixelRatio,V=t.size[1]*t.pixelRatio,f=Math.max(h.width,h.height),v$1={"[bboxWest]":y.toString(),"[bboxEast]":g.toString(),"[bboxSouth]":w.toString(),"[bboxNorth]":_.toString(),"[lookatLon]":n.center.x.toString(),"[lookatLat]":n.center.y.toString(),"[lookatRange]":f.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":n.center.x.toString(),"[lookatTerrainLat]":n.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":n.center.x.toString(),"[cameraLat]":n.center.y.toString(),"[cameraAlt]":f.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":b.toString(),"[vertPixels]":V.toString(),"[terrainEnabled]":"0","[clientVersion]":a$1,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=e=>{for(const i in e){let t;for(t in v$1)e[i]=e[i].replace(t,v$1[t]);}},I$1=I(s);S(I$1);let x={};null!=o&&(x=I(o),S(x));const C=f$2(e.href);C.query={...C.query,...I$1,...x};return `${C.path}?${v(I$1)}`}return e.href}async _fetchService(e){const i=new C;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i?.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b$1(s.points):[],a=s.polylines?await b$1(s.polylines):[],o=s.polygons?await b$1(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g(e,this.layer.spatialReference,this.layer.refreshInterval,i).then((e=>d$1(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e$2([y()],j.prototype,"_pointsView",void 0),e$2([y()],j.prototype,"_polylinesView",void 0),e$2([y()],j.prototype,"_polygonsView",void 0),e$2([y()],j.prototype,"updating",void 0),j=e$2([a$2("esri.views.2d.layers.KMLLayerView2D")],j);const k=j;

export default k;

//# sourceMappingURL=KMLLayerView2D-a9736154.js.map