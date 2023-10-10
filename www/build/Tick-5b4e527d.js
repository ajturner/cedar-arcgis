import { he as t } from './interfaces-f9f0dded.js';
import { g as R, T as Te, J as Je, d as m, k as Y, l, z, r as T$1, X as Xt, b as K, s as qt, Q as Qe, _ as _$1, R as Re, w as F$1 } from './Popup-facd531f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class f extends R{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0});}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e);}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t);}_onSetIndex(e,t,s){this.processor&&this.processor.processRow(s),super._onSetIndex(e,t,s);}}class g extends Te{constructor(e,t,s){super(s),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty();}markDirty(){this.component.markDirtyValues(this);}_startAnimation(){this.component._root._addAnimation(this);}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose();}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e);}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e);}isHidden(){return !this.get("visible")}}class _ extends Je{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new f}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1});}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e;}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef();}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll((e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,"clear"===e.type)m(t,(e=>{e.dispose();})),t.length=0,this._onDataClear();else if("push"===e.type){const s=new g(this,e.newValue,this._makeDataItem(e.newValue));t.push(s),this.processDataItem(s);}else if("setIndex"===e.type){const s=t[e.index],i=this._makeDataItem(e.newValue);s.bullets&&0==s.bullets.length&&(s.bullets=void 0),Y(i).forEach((e=>{s.animate({key:e,to:i[e],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")});})),s.dataContext=e.newValue;}else if("insertIndex"===e.type){const s=new g(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,s),this.processDataItem(s);}else if("removeIndex"===e.type){t[e.index].dispose(),t.splice(e.index,1);}else {if("moveIndex"!==e.type)throw new Error("Unknown IStreamEvent type");{const s=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,s);}}this._afterDataChange();})));}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},m(this.valueFields,(e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"});}))),this.fields&&(this._fields=[],this._fieldsF={},m(this.fields,(e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field");})));}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&m(this._valueFields,(s=>{const i=this.get(this._valueFieldsF[s].fieldKey);t[s]=e[i],t[this._valueFieldsF[s].workingKey]=t[s];})),this._fields&&m(this._fields,(s=>{const i=this.get(this._fieldsF[s]);t[s]=e[i];})),t}makeDataItem(e){let t=new g(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(t$1,s){return t(this,void 0,void 0,(function*(){t$1.set("visible",!0);}))}hideDataItem(t$1,s){return t(this,void 0,void 0,(function*(){t$1.set("visible",!1);}))}_clearDirty(){super._clearDirty(),this._valuesDirty=!1;}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1;}this.inited=!0;}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0;}_markDirtyGroup(){this._dataGrouped=!1;}markDirtySize(){this._sizeDirty=!0,this.markDirty();}}function v(e){return new Promise(((t,s)=>{setTimeout(t,e);}))}Object.defineProperty(_,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(_,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Je.classNames.concat([_.className])});let y={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function w(e,t){return null==t&&(t=1),y[e]*t}function I(e,t,s,i,a,l$1,n){if(!n||a){let n=0;switch(a||"millisecond"==t||(n=e.getTimezoneOffset(),e.setUTCMinutes(e.getUTCMinutes()-n)),t){case"day":let t=e.getUTCDate();if(s>1){if(l$1){l$1=I(l$1,"day",1);let t=e.getTime()-l$1.getTime(),i=Math.floor(t/w("day")/s),a=w("day",i*s);e.setTime(l$1.getTime()+a-n*w("minute"));}}else e.setUTCDate(t);e.setUTCHours(0,0,0,0);break;case"second":let a=e.getUTCSeconds();s>1&&(a=Math.floor(a/s)*s),e.setUTCSeconds(a,0);break;case"millisecond":if(1==s)return e;let o=e.getUTCMilliseconds();o=Math.floor(o/s)*s,e.setUTCMilliseconds(o);break;case"hour":let h=e.getUTCHours();s>1&&(h=Math.floor(h/s)*s),e.setUTCHours(h,0,0,0);break;case"minute":let u=e.getUTCMinutes();s>1&&(u=Math.floor(u/s)*s),e.setUTCMinutes(u,0,0);break;case"month":let d=e.getUTCMonth();s>1&&(d=Math.floor(d/s)*s),e.setUTCMonth(d,1),e.setUTCHours(0,0,0,0);break;case"year":let c=e.getUTCFullYear();s>1&&(c=Math.floor(c/s)*s),e.setUTCFullYear(c,0,1),e.setUTCHours(0,0,0,0);break;case"week":let m=e.getUTCDate(),p=e.getUTCDay();l(i)||(i=1),m=p>=i?m-p+i:m-(7+p)+i,e.setUTCDate(m),e.setUTCHours(0,0,0,0);}if(!a&&"millisecond"!=t&&(e.setUTCMinutes(e.getUTCMinutes()+n),"day"==t||"week"==t||"month"==t||"year"==t)){let t=e.getTimezoneOffset();if(t!=n){let s=t-n;e.setUTCMinutes(e.getUTCMinutes()+s);}}return e}{if(isNaN(e.getTime()))return e;let o=n.offsetUTC(e),h=e.getTimezoneOffset(),u=n.parseDate(e),d=u.year,c=u.month,m=u.day,p=u.hour,b=u.minute,f=u.second,g=u.millisecond,_=u.weekday;switch(t){case"day":if(s>1&&l$1){l$1=I(l$1,"day",1,i,a,void 0,n);let t=e.getTime()-l$1.getTime(),r=Math.floor(t/w("day")/s),o=w("day",r*s);e.setTime(l$1.getTime()+o),u=n.parseDate(e),d=u.year,c=u.month,m=u.day;}p=0,b=o-h,f=0,g=0;break;case"second":b+=o-h,s>1&&(f=Math.floor(f/s)*s),g=0;break;case"millisecond":b+=o-h,s>1&&(g=Math.floor(g/s)*s);break;case"hour":s>1&&(p=Math.floor(p/s)*s),b=o-h,f=0,g=0;break;case"minute":s>1&&(b=Math.floor(b/s)*s),b+=o-h,f=0,g=0;break;case"month":s>1&&(c=Math.floor(c/s)*s),m=1,p=0,b=o-h,f=0,g=0;break;case"year":s>1&&(d=Math.floor(d/s)*s),c=0,m=1,p=0,b=o-h,f=0,g=0;break;case"week":l(i)||(i=1),m=_>=i?m-_+i:m-(7+_)+i,p=0,b=o-h,f=0,g=0;}let v=(e=new Date(d,c,m,p,b,f,g)).getTimezoneOffset();return v!=h&&e.setTime(e.getTime()+6e4*(h-v)),e}}class D extends _{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new R}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:Je.new(this._root,{width:z,height:z,position:"absolute"})});}_afterNew(){this.valueFields.push("value"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll((e=>{if("clear"===e.type)this._handleBullets(this.dataItems);else if("push"===e.type)this._handleBullets(this.dataItems);else if("setIndex"===e.type)this._handleBullets(this.dataItems);else if("insertIndex"===e.type)this._handleBullets(this.dataItems);else if("removeIndex"===e.type)this._handleBullets(this.dataItems);else {if("moveIndex"!==e.type)throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems);}})));}_dispose(){this.bulletsContainer.dispose(),super._dispose();}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){m(e,(e=>{const t=e.bullets;t&&(m(t,(e=>{e.dispose();})),e.bullets=void 0);})),this.markDirtyValues();}getDataItemById(e){return T$1(this.dataItems,(t=>t.get("id")==e))}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each((t=>{this._makeBullet(e,t);})));}_shouldMakeBullet(e){return !0}_makeBullet(e,t,s){const i=t(this._root,this,e);if(i){let t=i.get("sprite");t&&(t._setDataItem(e),t.setRaw("position","absolute"),this.bulletsContainer.children.push(t)),i._index=s,i.series=this,e.bullets.push(i);}return i}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1;}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const e=this.getPrivate("baseValueSeries");e&&this._disposers.push(e.onPrivate("startIndex",(()=>{this.markDirtyValues();})));}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0)),this._psi==e&&this._pei==t||this._selectionAggregatesCalculated||(0===e&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let e=this.get("tooltip");e&&(e.hide(0),e.set("tooltipTarget",this));}if(this.isDirty("fill")||this.isDirty("stroke")){let e;const t=this.get("legendDataItem");if(t&&(e=t.get("markerRectangle"),e&&this.isVisible())){if(this.isDirty("stroke")){let t=this.get("stroke");e.set("stroke",t);}if(this.isDirty("fill")){let t=this.get("fill");e.set("fill",t);}}this.updateLegendMarker(void 0);}if(this.bullets.length>0){let e=this.startIndex(),t=this.endIndex();t<this.dataItems.length&&t++;for(let s=e;s<t;s++){let e=this.dataItems[s];e.bullets||this._makeBullets(e);}}}_calculateAggregates(e,t){let s=this._valueFields;if(!s)throw new Error("No value fields are set for the series.");const i={},l={},r={},n={},o={},h={},u={},d={},c={};m(s,(e=>{i[e]=0,l[e]=0,r[e]=0;})),m(s,(s=>{let a=s+"Change",m=s+"ChangePercent",p=s+"ChangePrevious",b=s+"ChangePreviousPercent",f=s+"ChangeSelection",g=s+"ChangeSelectionPercent",_="valueY";"valueX"!=s&&"openValueX"!=s&&"lowValueX"!=s&&"highValueX"!=s||(_="valueX");const v=this.getPrivate("baseValueSeries");for(let y=e;y<t;y++){const t=this.dataItems[y];let w=t.get(s);null!=w&&(r[s]++,i[s]+=w,l[s]+=Math.abs(w),d[s]=i[s]/r[s],(n[s]>w||null==n[s])&&(n[s]=w),(o[s]<w||null==o[s])&&(o[s]=w),u[s]=w,null==h[s]&&(h[s]=w,c[s]=w,v&&(h[_]=v._getBase(_))),0===e&&(t.setRaw(a,w-h[_]),t.setRaw(m,(w-h[_])/h[_]*100)),t.setRaw(p,w-c[_]),t.setRaw(b,(w-c[_])/c[_]*100),t.setRaw(f,w-h[_]),t.setRaw(g,(w-h[_])/h[_]*100),c[s]=w);}})),m(s,(e=>{this.setPrivate(e+"AverageSelection",d[e]),this.setPrivate(e+"CountSelection",r[e]),this.setPrivate(e+"SumSelection",i[e]),this.setPrivate(e+"AbsoluteSumSelection",l[e]),this.setPrivate(e+"LowSelection",n[e]),this.setPrivate(e+"HighSelection",o[e]),this.setPrivate(e+"OpenSelection",h[e]),this.setPrivate(e+"CloseSelection",u[e]);})),0===e&&t===this.dataItems.length&&m(s,(e=>{this.setPrivate(e+"Average",d[e]),this.setPrivate(e+"Count",r[e]),this.setPrivate(e+"Sum",i[e]),this.setPrivate(e+"AbsoluteSum",l[e]),this.setPrivate(e+"Low",n[e]),this.setPrivate(e+"High",o[e]),this.setPrivate(e+"Open",h[e]),this.setPrivate(e+"Close",u[e]);}));}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&m(e,(e=>{const t=e.minValue||this.getPrivate(e.dataField+"Low")||0,s=e.maxValue||this.getPrivate(e.dataField+"High")||0;m(e.target._entities,(i=>{const a=i.dataItem.get(e.dataField);if(l(a))if(e.customFunction)e.customFunction.call(this,i,t,s,a);else {let l$1,n;l$1=e.logarithmic?(Math.log(a)*Math.LOG10E-Math.log(t)*Math.LOG10E)/(Math.log(s)*Math.LOG10E-Math.log(t)*Math.LOG10E):(a-t)/(s-t),!l(a)||l(l$1)&&Math.abs(l$1)!=1/0||(l$1=.5),l(e.min)?n=e.min+(e.max-e.min)*l$1:e.min instanceof Xt?n=Xt.interpolate(l$1,e.min,e.max):e.min instanceof K&&(n=qt(l$1,e.min,e.max)),i.set(e.key,n);}else e.neutral&&i.set(e.key,e.neutral);}));})),this.get("visible")&&this.bullets.length>0){let e=this.dataItems.length,t=this.startIndex(),s=this.endIndex();s<e&&s++,t>0&&t--;for(let i=0;i<t;i++)this._hideBullets(this.dataItems[i]);for(let i=t;i<s;i++)this._positionBullets(this.dataItems[i]);for(let i=s;i<e;i++)this._hideBullets(this.dataItems[i]);}}_positionBullets(e){e.bullets&&m(e.bullets,(e=>{this._positionBullet(e);const t=e.get("sprite");e.get("dynamic")&&(t&&(t._markDirtyKey("fill"),t.markDirtySize()),t instanceof Je&&t.walkChildren((e=>{e._markDirtyKey("fill"),e.markDirtySize(),e instanceof Qe&&e.text.markDirtyText();}))),t instanceof Qe&&t.get("populateText")&&t.text.markDirtyText();}));}_hideBullets(e){e.bullets&&m(e.bullets,(e=>{let t=e.get("sprite");t&&t.setPrivate("visible",!1);}));}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer);}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e);}disposeDataItem(e){const t=e.bullets;t&&m(t,(e=>{e.dispose();}));}_getItemReaderLabel(){return ""}showDataItem(t$1,s){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return t(this,void 0,void 0,(function*(){const e=[i.showDataItem.call(this,t$1,s)],l=t$1.bullets;l&&m(l,(t=>{e.push(t.get("sprite").show(s));})),yield Promise.all(e);}))}hideDataItem(t$1,s){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return t(this,void 0,void 0,(function*(){const e=[i.hideDataItem.call(this,t$1,s)],l=t$1.bullets;l&&m(l,(t=>{e.push(t.get("sprite").hide(s));})),yield Promise.all(e);}))}_sequencedShowHide(t$1,s){return t(this,void 0,void 0,(function*(){if(this.get("sequencedInterpolation"))if(l(s)||(s=this.get("interpolationDuration",0)),s>0){const i=this.startIndex(),a=this.endIndex();yield Promise.all(_$1(this.dataItems,((l,r)=>t(this,void 0,void 0,(function*(){let e=s||0;(r<i-10||r>a+10)&&(e=0);let n=this.get("sequencedDelay",0)+e/(a-i);yield v(n*(r-i)),t$1?yield this.showDataItem(l,e):yield this.hideDataItem(l,e);})))));}else yield Promise.all(_$1(this.dataItems,(e=>t$1?this.showDataItem(e,0):this.hideDataItem(e,0))));}))}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const s=t.get("valueLabel");if(s){const t=s.text;let i="";s._setDataItem(e),i=this.get("legendValueText",t.get("text","")),s.set("text",i),t.markDirtyText();}const i=t.get("label");if(i){const t=i.text;let s="";i._setDataItem(e),s=this.get("legendLabelText",t.get("text","")),i.set("text",s),t.markDirtyText();}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide();}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function x(e,t){for(let s=0,i=t.length;s<i;s++){const i=t[s];if(i.length>0){let t=i[0];if(t.length>0){let s=t[0];e.moveTo(s.x,s.y);for(let t=0,a=i.length;t<a;t++)C(e,i[t]);}}}}function C(e,t){for(let s=0,i=t.length;s<i;s++){const i=t[s];e.lineTo(i.x,i.y);}}Object.defineProperty(D,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(D,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:_.classNames.concat([D.className])});class P extends Re{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0);}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let t=e[0];this._display.moveTo(t.x,t.y),x(this._display,[[e]]);}else if(t)x(this._display,t);else if(!this.get("draw")){let e=this.width(),t=this.height();this._display.moveTo(0,0),this._display.lineTo(e,t);}}}}function k(e){return function(){return e}}Object.defineProperty(P,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(P,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Re.classNames.concat([P.className])});const T=Math.PI,M=2*T,O=1e-6,$=M-O;function j(e){this._+=e[0];for(let t=1,s=e.length;t<s;++t)this._+=arguments[t]+e[t];}function S(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return j;const s=10**t;return function(e){this._+=e[0];for(let t=1,i=e.length;t<i;++t)this._+=Math.round(arguments[t]*s)/s+e[t];}}class F{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?j:S(e);}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`;}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`);}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`;}quadraticCurveTo(e,t,s,i){this._append`Q${+e},${+t},${this._x1=+s},${this._y1=+i}`;}bezierCurveTo(e,t,s,i,a,l){this._append`C${+e},${+t},${+s},${+i},${this._x1=+a},${this._y1=+l}`;}arcTo(e,t,s,i,a){if(e=+e,t=+t,s=+s,i=+i,(a=+a)<0)throw new Error(`negative radius: ${a}`);let l=this._x1,r=this._y1,n=s-e,o=i-t,h=l-e,u=r-t,d=h*h+u*u;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(d>O)if(Math.abs(u*n-o*h)>O&&a){let c=s-l,m=i-r,p=n*n+o*o,b=c*c+m*m,f=Math.sqrt(p),g=Math.sqrt(d),_=a*Math.tan((T-Math.acos((p+d-b)/(2*f*g)))/2),v=_/g,y=_/f;Math.abs(v-1)>O&&this._append`L${e+v*h},${t+v*u}`,this._append`A${a},${a},0,0,${+(u*c>h*m)},${this._x1=e+y*n},${this._y1=t+y*o}`;}else this._append`L${this._x1=e},${this._y1=t}`;else ;}arc(e,t,s,i,a,l){if(e=+e,t=+t,l=!!l,(s=+s)<0)throw new Error(`negative radius: ${s}`);let r=s*Math.cos(i),n=s*Math.sin(i),o=e+r,h=t+n,u=1^l,d=l?i-a:a-i;null===this._x1?this._append`M${o},${h}`:(Math.abs(this._x1-o)>O||Math.abs(this._y1-h)>O)&&this._append`L${o},${h}`,s&&(d<0&&(d=d%M+M),d>$?this._append`A${s},${s},0,1,${u},${e-r},${t-n}A${s},${s},0,1,${u},${this._x1=o},${this._y1=h}`:d>O&&this._append`A${s},${s},0,${+(d>=T)},${u},${this._x1=e+s*Math.cos(a)},${this._y1=t+s*Math.sin(a)}`);}rect(e,t,s,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${s=+s}v${+i}h${-s}Z`;}toString(){return this._}}function V(e){let t=3;return e.digits=function(s){if(!arguments.length)return t;if(null==s)t=null;else {const e=Math.floor(s);if(!(e>=0))throw new RangeError(`invalid digits: ${s}`);t=e;}return e},()=>new F(t)}class N extends Je{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(Je.new(this._root,{width:z,height:z,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:Je.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:z,height:z})});}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Je.classNames.concat([N.className])});class U extends N{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:Je.new(this._root,{width:z,height:z,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new F$1});}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll((t=>{if("clear"===t.type){m(t.oldValues,(e=>{this._removeSeries(e);}));const e=this.get("colors");e&&e.reset();}else if("push"===t.type)e.moveValue(t.newValue),this._processSeries(t.newValue);else if("setIndex"===t.type)e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("insertIndex"===t.type)e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("removeIndex"===t.type)this._removeSeries(t.oldValue);else {if("moveIndex"!==t.type)throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value);}})));}_processSeries(e){e.chart=this,e._placeBulletsContainer(this);}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer());}}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:N.classNames.concat([U.className])});class B extends P{}Object.defineProperty(B,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(B,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:P.classNames.concat([B.className])});

export { B, D, I, U, V, _, g, k };

//# sourceMappingURL=Tick-5b4e527d.js.map