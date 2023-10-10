import { a2 as u, af as i, gt as s, ad as m, R, B as e, E as y, F as a } from './interfaces-f9f0dded.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n=0,l=class extends(u(i(s(m)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${n++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(R)}};e([y({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),e([y({type:String})],l.prototype,"title",void 0),e([y({constructOnly:!0})],l.prototype,"type",void 0),e([y({clonable:!1,value:null})],l.prototype,"parent",null),e([y({readOnly:!0})],l.prototype,"isEditable",null),e([y({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",void 0),l=e([a("esri.analysis.Analysis")],l);const c=l;

export { c };

//# sourceMappingURL=Analysis-71c47d83.js.map