import { ce as p$1, cf as t, cg as y, s as s$1, l as a$1 } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),l=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","media","ogc-feature","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function a(e){o.delete(e),l.delete(e);}function s(e){o.add(e),l.add(e);}function p(e){return "basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?l:null}function m(e,t){if(t.restrictedWebMapWriting){const n=p(t);return null==n||n.has(e.type)&&!p$1(e)}return !0}function u(e,t$1){if(t$1)if(p$1(e)){const r=t("featureCollection.layers",t$1),i=r&&r[0]&&r[0].layerDefinition;i&&c(e,i);}else "group"!==e.type&&c(e,t$1);}function c(e,t){"maxScale"in e&&(t.maxScale=y(e.maxScale)??void 0),"minScale"in e&&(t.minScale=y(e.minScale)??void 0);}function d(e,t){if(u(e,t),t&&("blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=y(e.opacity)??void 0,t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type))if(p$1(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled);}else t.showLegend=e.legendEnabled;}function f(n,r,i){if(!("write"in n)||!n.write)return i&&i.messages&&i.messages.push(new s$1("layer:unsupported",`Layers (${n.title}, ${n.id}) of type '${n.declaredClass}' cannot be persisted`,{layer:n})),null;if(m(n,i)){const e={};return n.write(e,i)?e:null}return null!=r&&d(n,r=a$1(r)),r}

export { f };

//# sourceMappingURL=writeUtils-3dcfa57f.js.map