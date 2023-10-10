import { r, n as n$1, t } from './contextUtils-e38d5070.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let s,o;function n(e){const r$1=r(e);for(;r$1.length>1;){const t=l(r$1.shift());if(t.available)return t}return l(r$1.shift())}function l(t){switch(t){case n$1.WEBGL1:return a();case n$1.WEBGL2:return u()}}function a(){return s||(s=E()),s}function u(){return o||(o=_()),o}class i{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsElementIndexUint=!1,this.supportsStandardDerivatives=!1,this.supportsInstancedArrays=!1,this.supportsTextureFloat=!1,this.supportsTextureHalfFloat=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1;}}class f extends i{constructor(){super(...arguments),this.type=n$1.WEBGL1;}}class p extends i{constructor(){super(...arguments),this.type=n$1.WEBGL2,this.supportsElementIndexUint=!0,this.supportsStandardDerivatives=!0,this.supportsInstancedArrays=!0,this.supportsTextureFloat=!0,this.supportsTextureHalfFloat=!0;}}function c(t$1,s){if(t$1===n$1.WEBGL1&&"undefined"==typeof WebGLRenderingContext||t$1===n$1.WEBGL2&&"undefined"==typeof WebGL2RenderingContext)return null;const o=document.createElement("canvas");if(!o)return null;let n=t(o,t$1,{failIfMajorPerformanceCaveat:!0});if(null==n&&(n=t(o,t$1),null!=n&&(s.majorPerformanceCaveat=!0)),null==n)return n;if(t$1===n$1.WEBGL1){const t=n.getParameter(n.VERSION),e=t?.match(/^WebGL\s+([\d.]*)/);if(e){const t=parseFloat(e[1]);s.available=t>=.94;}}else s.available=!0;s.maxTextureSize=n.getParameter(n.MAX_TEXTURE_SIZE),s.supportsVertexShaderSamplers=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const l=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT);return l&&(s.supportsHighPrecisionFragment=l.precision>0),n}function E(){const t=new f,r=c(n$1.WEBGL1,t);return null==r||(t.supportsElementIndexUint=null!==r.getExtension("OES_element_index_uint"),t.supportsStandardDerivatives=null!==r.getExtension("OES_standard_derivatives"),t.supportsInstancedArrays=null!==r.getExtension("ANGLE_instanced_arrays"),t.supportsTextureFloat=null!==r.getExtension("OES_texture_float"),t.supportsTextureHalfFloat=null!==r.getExtension("OES_texture_half_float"),t.supportsColorBufferFloat=null!==r.getExtension("WEBGL_color_buffer_float"),t.supportsColorBufferFloatBlend=null!==r.getExtension("EXT_float_blend"),t.supportsColorBufferHalfFloat=null!==r.getExtension("EXT_color_buffer_half_float")),t}function _(){const t=new p,r=c(n$1.WEBGL2,t);return null==r||(t.supportsColorBufferFloat=null!==r.getExtension("EXT_color_buffer_float"),t.supportsColorBufferFloatBlend=null!==r.getExtension("EXT_float_blend"),t.supportsColorBufferHalfFloat=t.supportsColorBufferFloat||null!==r.getExtension("EXT_color_buffer_half_float")),t}

export { n };

//# sourceMappingURL=capabilities-43dc968b.js.map