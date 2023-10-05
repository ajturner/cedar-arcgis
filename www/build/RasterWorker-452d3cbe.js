import { b4 as M, ag as x, fC as s$1 } from './interfaces-f9f0dded.js';
import { u, f, W, U, R, I, a as u$1, s } from './dataUtils-2444252c.js';
import { m, j, L, h } from './RasterSymbolizer-004f5c08.js';
import { _, i } from './utils-cbf51165.js';
import { d, k, $ } from './rasterProjectionHelper-c1bc5cbe.js';
import './_commonjsHelpers-b08b522c.js';
import './colorUtils-3c42b70c.js';
import './rasterRendererChecks-13692458.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class N{convertVectorFieldData(r){const t=u.fromJSON(r.pixelBlock),s=f(t,r.type);return Promise.resolve(null!=s?s.toJSON():null)}computeStatisticsHistograms(r){const t=u.fromJSON(r.pixelBlock),s=m(t);return Promise.resolve(s)}async decode(r){const e=await j(r.data,r.options);return e&&e.toJSON()}symbolize(r){r.pixelBlock=u.fromJSON(r.pixelBlock),r.extent=r.extent?M.fromJSON(r.extent):null;const t=this.symbolizer.symbolize(r);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(r){this.symbolizer=L.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms);}async updateRasterFunction(r){this.rasterFunction=_(r.rasterFunctionJSON);}async process(r){const t=this.rasterFunction.process({extent:M.fromJSON(r.extent),primaryPixelBlocks:r.primaryPixelBlocks.map((r=>null!=r?u.fromJSON(r):null)),primaryPixelSizes:r.primaryPixelSizes?.map((r=>null!=r?x.fromJSON(r):null)),primaryRasterIds:r.primaryRasterIds});return null!=t?t.toJSON():null}stretch(r){const t=this.symbolizer.simpleStretch(u.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(null!=t&&t.toJSON())}estimateStatisticsHistograms(r){const t=h(u.fromJSON(r.srcPixelBlock));return Promise.resolve(t)}split(r){const t=W(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return t&&t.forEach(((r,e)=>{t.set(e,r?.toJSON());})),Promise.resolve(t)}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new u(r):null)),s=U(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let a,l=s;return r.coefs&&(l=R(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(a=I(r.destDimension,r.gcsGrid),l=u$1(l,r.isUV?"vector-uv":"vector-magdir",a)),{pixelBlock:l?.toJSON(),localNorthDirections:a}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s$1,indexData:o}=await s(r.meshType,r.simulationSettings,t,e.signal);return {result:{vertexBuffer:s$1.buffer,indexBuffer:o.buffer},transferList:[s$1.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=M.fromJSON(e.projectedExtent),s=M.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s$1({steps:e.datumTransformationSteps})),(e.includeGCSGrid||d(t.spatialReference,s.spatialReference,o))&&await k();const i$1=e.rasterTransform?i(e.rasterTransform):null;return $({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i$1})}}

export default N;

//# sourceMappingURL=RasterWorker-452d3cbe.js.map