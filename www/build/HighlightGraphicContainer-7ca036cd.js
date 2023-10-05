import { B as e, F as a } from './interfaces-f9f0dded.js';
import { T } from './color-f1195a3b.js';
import { n as n$1 } from './BaseGraphicContainer-4cece76f.js';
import { _ } from './enums-f1bebe6f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i=class extends n$1{doRender(e){e.drawPhase===T.HIGHLIGHT&&super.doRender(e);}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:r}=e,s=r.effects.highlight;s.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(_.COLOR_BUFFER_BIT),this._renderChildren(e,s.defines.concat(["highlightAll"])),s.draw(e),s.unbind();}};i=e([a("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;

export { n };

//# sourceMappingURL=HighlightGraphicContainer-7ca036cd.js.map