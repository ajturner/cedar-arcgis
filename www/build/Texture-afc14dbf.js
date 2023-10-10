import { k as s, b as has, s as s$1, go as o$2 } from './interfaces-f9f0dded.js';
import { n as n$2 } from './contextUtils-e38d5070.js';
import { A as A$1, f as f$1, P as P$1, B, G, M as M$1, U as U$1, L, D as D$1, V } from './enums-f1bebe6f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o$1=s.getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return "Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return "Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return "Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return "WebGL context has been lost";default:return "Unknown error"}}const n$1=!!has("enable-feature:webgl-debug");function a$2(){return n$1}function c(){return n$1}function u$1(r){if(a$2()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o$1.error(new s$1("webgl-error","WebGL error occured",{message:a,stack:c}));}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var e$1;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer";}(e$1||(e$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a$1(e){const r=e.gl;switch(r.getError()){case r.NO_ERROR:return null;case r.INVALID_ENUM:return "An unacceptable value has been specified for an enumerated argument";case r.INVALID_VALUE:return "An unacceptable value has been specified for an argument";case r.INVALID_OPERATION:return "The specified command is not allowed for the current state";case r.INVALID_FRAMEBUFFER_OPERATION:return "The currently bound framebuffer is not framebuffer complete";case r.OUT_OF_MEMORY:return "Not enough memory is left to execute the command";case r.CONTEXT_LOST_WEBGL:return "WebGL context is lost"}return "Unknown error"}function n(e,r){return e.vertexBuffers[r].byteLength/i(e.layout[r])}function i(e){return e[0].stride}function R$1(e,r,t,s,c=0){const a=e.gl,n=e.capabilities.instancing;e.bindBuffer(t);for(const i of s){const e=r.get(i.name);void 0===e&&console.error(`There is no location for vertex attribute '${i.name}' defined.`);const t=c*i.stride;if(i.count<=4)a.vertexAttribPointer(e,i.count,i.type,i.normalized,i.stride,i.offset+t),a.enableVertexAttribArray(e),i.divisor>0&&n&&n.vertexAttribDivisor(e,i.divisor);else if(9===i.count)for(let r=0;r<3;r++)a.vertexAttribPointer(e+r,3,i.type,i.normalized,i.stride,i.offset+12*r+t),a.enableVertexAttribArray(e+r),i.divisor>0&&n&&n.vertexAttribDivisor(e+r,i.divisor);else if(16===i.count)for(let r=0;r<4;r++)a.vertexAttribPointer(e+r,4,i.type,i.normalized,i.stride,i.offset+16*r+t),a.enableVertexAttribArray(e+r),i.divisor>0&&n&&n.vertexAttribDivisor(e+r,i.divisor);else console.error("Unsupported vertex attribute element count: "+i.count);}}function o(r,t,s,c){const a=r.gl,n=r.capabilities.instancing;r.bindBuffer(s);for(const e of c){const r=t.get(e.name);if(e.count<=4)a.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count);}r.unbindBuffer(A$1.ARRAY_BUFFER);}function E$1(e){switch(e){case G.ALPHA:case G.LUMINANCE:case G.RED:case G.RED_INTEGER:case P$1.R8:case P$1.R8I:case P$1.R8UI:case P$1.R8_SNORM:case B.STENCIL_INDEX8:return 1;case G.LUMINANCE_ALPHA:case G.RG:case G.RG_INTEGER:case P$1.RGBA4:case P$1.R16F:case P$1.R16I:case P$1.R16UI:case P$1.RG8:case P$1.RG8I:case P$1.RG8UI:case P$1.RG8_SNORM:case P$1.RGB565:case P$1.RGB5_A1:case B.DEPTH_COMPONENT16:return 2;case G.DEPTH_COMPONENT:case G.RGB:case G.RGB_INTEGER:case P$1.RGB8:case P$1.RGB8I:case P$1.RGB8UI:case P$1.RGB8_SNORM:case P$1.SRGB8:case B.DEPTH_COMPONENT24:return 3;case G.DEPTH_STENCIL:case G.DEPTH24_STENCIL8:case G.RGBA:case G.RGBA_INTEGER:case P$1.RGBA8:case P$1.R32F:case P$1.R11F_G11F_B10F:case P$1.RG16F:case P$1.R32I:case P$1.R32UI:case P$1.RG16I:case P$1.RG16UI:case P$1.RGBA8I:case P$1.RGBA8UI:case P$1.RGBA8_SNORM:case P$1.SRGB8_ALPHA8:case P$1.RGB9_E5:case P$1.RGB10_A2UI:case P$1.RGB10_A2:case B.DEPTH_STENCIL:case B.DEPTH_COMPONENT32F:case B.DEPTH24_STENCIL8:return 4;case B.DEPTH32F_STENCIL8:return 5;case P$1.RGB16F:case P$1.RGB16I:case P$1.RGB16UI:return 6;case P$1.RG32F:case P$1.RG32I:case P$1.RG32UI:case P$1.RGBA16F:case P$1.RGBA16I:case P$1.RGBA16UI:return 8;case P$1.RGB32F:case P$1.RGB32I:case P$1.RGB32UI:return 12;case P$1.RGBA32F:case P$1.RGBA32I:case P$1.RGBA32UI:return 16;case f$1.COMPRESSED_RGB_S3TC_DXT1_EXT:case f$1.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case f$1.COMPRESSED_RGBA_S3TC_DXT3_EXT:case f$1.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case f$1.COMPRESSED_R11_EAC:case f$1.COMPRESSED_SIGNED_R11_EAC:case f$1.COMPRESSED_RGB8_ETC2:case f$1.COMPRESSED_SRGB8_ETC2:case f$1.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case f$1.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case f$1.COMPRESSED_RG11_EAC:case f$1.COMPRESSED_SIGNED_RG11_EAC:case f$1.COMPRESSED_RGBA8_ETC2_EAC:case f$1.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(p=0,e=p){this.width=p,this.height=e,this.target=M$1.TEXTURE_2D,this.pixelFormat=G.RGBA,this.dataType=U$1.UNSIGNED_BYTE,this.samplingMode=L.LINEAR,this.wrapMode=D$1.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1;}}function r(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(t.hasMipmap?4/3:1)*E$1(t.internalFormat)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a extends e{constructor(t,a){switch(super(),this.context=t,Object.assign(this,a),this.internalFormat){case P$1.R16F:case P$1.R16I:case P$1.R16UI:case P$1.R32F:case P$1.R32I:case P$1.R32UI:case P$1.R8_SNORM:case P$1.R8:case P$1.R8I:case P$1.R8UI:this.pixelFormat=G.RED;}}static validate(s,e){return new a(s,e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const u=4;let T=class{constructor(e,i=null,a$1=null){if(this.type=e$1.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,a$1=i;else {const r=a.validate(e,i);if(!r)throw new s$1("Texture descriptor invalid");this._descriptor=r;}if(this._descriptor.context.instanceCounter.increment(V.Texture,this),this._descriptor.context.type!==n$2.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),R(this._descriptor.target)))throw new s$1("3D and array textures are not supported in WebGL1");this._descriptor.target===M$1.TEXTURE_CUBE_MAP?this._setDataCubeMap(a$1):this.setData(a$1);}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return P.delete(this),r(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null,this._descriptor.context.instanceCounter.decrement(V.Texture,this));}release(){this.dispose();}resize(e,i){const r=this._descriptor;if(r.width!==e||r.height!==i){if(this._wasImmutablyAllocated)throw new s$1("Immutable textures can't be resized!");r.width=e,r.height=i,this._descriptor.target===M$1.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null);}}_setDataCubeMap(t=null){for(let e=M$1.TEXTURE_CUBE_MAP_POSITIVE_X;e<=M$1.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e);}setData(t){this._setData(t);}_setData(e,r){if(!this._descriptor.context||!this._descriptor.context.gl)return;const s=this._descriptor.context.gl;u$1(s),this._glName||(this._glName=s.createTexture()),void 0===e&&(e=null);const o=this._descriptor,a=r??o.target,n=R(a);null===e&&(o.width=o.width||u,o.height=o.height||u,n&&(o.depth=o.depth??1));const p=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),g(this._descriptor.context,o),this._configurePixelStorage(),u$1(s);const h=this._deriveInternalFormat();if(D(e)){let t=e.width,r=e.height;const p=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,r=e.videoHeight),o.width&&o.height,n&&o.depth,o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,h,o.hasMipmap,t,r,p),this._texImage(a,0,h,t,r,p,e),u$1(s),o.hasMipmap&&this.generateMipmap(),o.width||(o.width=t),o.height||(o.height=r),n&&!o.depth&&(o.depth=p);}else {const{width:r,height:p,depth:l}=o;if(null==r||null==p)throw new s$1("Width and height must be specified!");if(n&&null==l)throw new s$1("Depth must be specified!");if(o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,h,o.hasMipmap,r,p,l),A(e)){const i=e.levels,n=b(a,r,p,l),d=Math.min(n-1,i.length-1);null!=this._descriptor.context.gl2?s.texParameteri(o.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,d):o.hasMipmap=o.hasMipmap&&n===i.length;const c=h;if(!w(c))throw new s$1("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((t,e,r,s)=>{const o=i[Math.min(t,i.length-1)];this._compressedTexImage(a,t,c,e,r,s,o);}),d);}else this._texImage(a,0,h,r,p,l,e),u$1(s),o.hasMipmap&&this.generateMipmap();}x(s,this._descriptor),E(s,this._descriptor),f(this._descriptor.context,this._descriptor),u$1(s),this._descriptor.context.bindTexture(p,T.TEXTURE_UNIT_FOR_UPDATES);}updateData(e,i,r,s,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._descriptor.context.gl,h=this._descriptor.context.gl2,l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,target:m,isImmutable:u}=l;if(u&&!this._wasImmutablyAllocated)throw new s$1("Cannot update immutable texture before allocation!");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES,!0);if((i<0||r<0||s>l.width||o>l.height||i+s>l.width||r+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),n){if(!h)return void console.error("Webgl2 must be enabled to use dataRowOffset!");p.pixelStorei(h.UNPACK_SKIP_ROWS,n);}if(D(a)?h?h.texSubImage2D(m,e,i,r,s,o,c,_,a):p.texSubImage2D(m,e,i,r,c,_,a):A(a)?p.compressedTexSubImage2D(m,e,i,r,s,o,d,a.levels[e]):p.texSubImage2D(m,e,i,r,s,o,c,_,a),n){if(!h)return void console.error("Webgl2 must be enabled to use dataRowOffset!");p.pixelStorei(h.UNPACK_SKIP_ROWS,0);}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES);}updateData3D(e,i,r,s,o,a,n,p){p||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor.context.gl2;if(null==h)throw new s$1("3D textures are not supported in WebGL1");const l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,isImmutable:m,target:u}=l;if(m&&!this._wasImmutablyAllocated)throw new s$1("Cannot update immutable texture before allocation!");R(u)||console.warn("Attempting to set 3D texture data on a non-3D texture");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),(i<0||r<0||s<0||o>l.width||a>l.height||n>l.depth||i+o>l.width||r+a>l.height||s+n>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),A(p))p=p.levels[e],h.compressedTexSubImage3D(u,e,i,r,s,o,a,n,d,p);else {const t=p;h.texSubImage3D(u,e,i,r,s,o,a,n,c,_,t);}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES);}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new s$1("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,g(this._descriptor.context,e);}e.samplingMode===L.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=L.LINEAR_MIPMAP_NEAREST):e.samplingMode===L.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=L.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,T.TEXTURE_UNIT_FOR_UPDATES);}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0);}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,g(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0);}applyChanges(){const t=this._descriptor.context.gl,e=this._descriptor;this._samplingModeDirty&&(x(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(E(t,e),this._wrapModeDirty=!1);}_deriveInternalFormat(){if(this._descriptor.context.type===n$2.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===G.DEPTH_STENCIL&&(this._descriptor.internalFormat=G.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case U$1.FLOAT:switch(this._descriptor.pixelFormat){case G.RGBA:return this._descriptor.internalFormat=P$1.RGBA32F;case G.RGB:return this._descriptor.internalFormat=P$1.RGB32F;default:throw new s$1("Unable to derive format")}case U$1.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case G.RGBA:return this._descriptor.internalFormat=P$1.RGBA8;case G.RGB:return this._descriptor.internalFormat=P$1.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===G.DEPTH_STENCIL?G.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const t=this._descriptor.context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0);}_texStorage(e,i,r,s,o,a){const n=this._descriptor.context.gl2;if(null==n)throw new s$1("Immutable textures are not supported in WebGL1");if(!M(i))throw new s$1("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const p=r?b(e,s,o,a):1;if(R(e)){if(null==a)throw new s$1("Missing depth dimension for 3D texture upload");n.texStorage3D(e,p,i,s,o,a);}else n.texStorage2D(e,p,i,s,o);this._wasImmutablyAllocated=!0;}_texImage(e,i,s,o,a,n,p){const h=this._descriptor.context.gl,l=R(e),{isImmutable:d,pixelFormat:c,dataType:_}=this._descriptor,m=this._descriptor.context.type===n$2.WEBGL2,u=m?h:null;if(m||!D(p))if(d){if(null!=p){const r=p;if(l){if(null==n)throw new s$1("Missing depth dimension for 3D texture upload");u.texSubImage3D(e,i,0,0,0,o,a,n,c,_,r);}else h.texSubImage2D(e,i,0,0,o,a,c,_,r);}}else {const r=p;if(l){if(null==n)throw new s$1("Missing depth dimension for 3D texture upload");u.texImage3D(e,i,s,o,a,n,0,c,_,r);}else h.texImage2D(e,i,s,o,a,0,c,_,r);}else h.texImage2D(e,0,s,c,_,p);}_compressedTexImage(e,i,s,o,a,n,p){const h=this._descriptor.context.gl;let l=null;const d=R(e),c=this._descriptor.isImmutable;if(d){if(this._descriptor.context.type!==n$2.WEBGL2)throw new s$1("3D textures are not supported in WebGL1");l=h;}if(c){if(null!=p)if(d){if(null==n)throw new s$1("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,i,0,0,0,o,a,n,s,p);}else h.compressedTexSubImage2D(e,i,0,0,o,a,s,p);}else if(d){if(null==n)throw new s$1("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,i,s,o,a,n,0,p);}else h.compressedTexImage2D(e,i,s,o,a,0,p);}_forEachMipmapLevel(e,i=1/0){let{width:r,height:s,depth:a,hasMipmap:n,target:p}=this._descriptor;const h=p===M$1.TEXTURE_3D;if(null==r||null==s||h&&null==a)throw new s$1("Missing texture dimensions for mipmap calculation");for(let t=0;e(t,r,s,a),n&&(1!==r||1!==s||h&&1!==a)&&!(t>=i);++t)r=Math.max(1,r>>1),s=Math.max(1,s>>1),h&&(a=Math.max(1,a>>1));}};function g(t,i){(null!=i.width&&i.width<0||null!=i.height&&i.height<0||null!=i.depth&&i.depth<0)&&console.error("Negative dimension parameters are not allowed!");const s=t.type===n$2.WEBGL2;if(s||!i.isImmutable&&!R(i.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),s)return;null!=i.width&&o$2(i.width)&&null!=i.height&&o$2(i.height)||("number"==typeof i.wrapMode?i.wrapMode!==D$1.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):i.wrapMode.s===D$1.CLAMP_TO_EDGE&&i.wrapMode.t===D$1.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"));}function x(t,e){let i=e.samplingMode,r=e.samplingMode;i===L.LINEAR_MIPMAP_NEAREST||i===L.LINEAR_MIPMAP_LINEAR?(i=L.LINEAR,e.hasMipmap||(r=L.LINEAR)):i!==L.NEAREST_MIPMAP_NEAREST&&i!==L.NEAREST_MIPMAP_LINEAR||(i=L.NEAREST,e.hasMipmap||(r=L.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r);}function E(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t));}function f(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1);}function M(t){return t in P$1}function w(t){return t in f$1}function A(t){return null!=t&&"type"in t&&"compressed"===t.type}function I(t){return null!=t&&"byteLength"in t}function D(t){return null!=t&&!A(t)&&!I(t)}function R(t){return t===M$1.TEXTURE_3D||t===M$1.TEXTURE_2D_ARRAY}function b(t,e,i,r=1){let s=Math.max(e,i);return t===M$1.TEXTURE_3D&&(s=Math.max(s,r)),Math.round(Math.log(s)/Math.LN2)+1}function U(){const t=new Array;return P.forEach(((e,i)=>t.push([i.gpuMemoryUsage,e]))),P.clear(),t.sort(((t,e)=>e[0]-t[0])),t.reduce(((t,e)=>`${t}\n\n${Math.round(e[0]/1024)}KB: ${e[1]}`),"")}T.TEXTURE_UNIT_FOR_UPDATES=0;const P=new Map;

export { E$1 as E, R$1 as R, T, a$2 as a, e as b, c, a$1 as d, e$1 as e, n, o, u$1 as u };

//# sourceMappingURL=Texture-afc14dbf.js.map