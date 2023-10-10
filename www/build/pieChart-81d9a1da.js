import { he as t } from './interfaces-f9f0dded.js';
import { k, V as V$1, U as U$2, D, B as B$1 } from './Tick-5b4e527d.js';
import { q as qe, i as ie$1, Q as Qe, m as mt, a as le, o as oe, h as he, G as G$1, b as K$1, R as Re, l, t as ti, z as z$1, U as U$1, c as l$1, J as Je, d as m, N as Ne, e as de, f as pe, W as W$1, M as Me, K as Kt } from './Popup-facd531f.js';
import { s } from './ColorSet-7956a8b2.js';
import './_commonjsHelpers-b08b522c.js';
import './throttle-4b0bde7a.js';
import './messageBundle-251c02f0.js';
import './uuid-d7a4b2f1.js';
import './index-0c4dc1bb.js';
import './ByteSizeUnit-f75ee973.js';
import './Cyclical-5ec65b13.js';
import './AttachmentInfo-fac6a5e9.js';
import './widget-f329c2cd.js';
import './utils-3c908942.js';
import './utils-6e0c5e09.js';
import './executeQueryJSON-a16aae69.js';
import './normalizeUtils-6257e368.js';
import './normalizeUtilsCommon-b073ef53.js';
import './query-d7e0eb84.js';
import './pbfQueryUtils-a09a9e2c.js';
import './pbf-70fc9f43.js';
import './OptimizedFeature-fb4fb1cb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './featureConversionUtils-da87b7fc.js';
import './config-update-89e29a27.js';
import './colorUtils-3c42b70c.js';
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
import './executeQueryPBF-24a7740f.js';
import './CollectionFlattener-78984a9a.js';
import './TablesMixin-e984f376.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class N extends qe{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)});}_afterNew(){super._afterNew();}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*ie$1,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds());}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:qe.classNames.concat([N.className])});class C extends Qe{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1});}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew();}_makeText(){this._text=this.children.push(N.new(this._root,{}));}baseRadius(){const e=this.getPrivate("radius",0),t=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return t+mt(i,e-t)}radius(){const e=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(e?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const e=this.get("textType","adjusted"),t=this.get("inside",!1),i=this.get("orientation");let s=le(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",t);const a=oe(s),r=he(s);let l=this.baseRadius(),n=this.radius();if(this._display.angle=0,"circular"==e)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this._text.set("orientation",i),this._text.set("radius",n);else {0==l&&(s=0,n=0);let t=n*r,o=n*a;"radial"==e?(this.setRaw("x",t),this.setRaw("y",o),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==e?(this.setRaw("centerX",G$1),this.setRaw("centerY",G$1),this.setRaw("x",t),this.setRaw("y",o)):"regular"==e&&(this.setRaw("x",t),this.setRaw("y",o));}this.markDirtyPosition(),this.markDirtyBounds();}}_updatePosition(){const e=this.get("textType","regular"),t=this.get("inside",!1);let i=0,s=0,a=this.get("labelAngle",0),r=this.localBounds(),l=r.right-r.left,n=r.bottom-r.top;if("radial"==e){if(this._flipped){let e=this.get("centerX");e instanceof K$1&&(l*=1-2*e.value),i=l*he(a),s=l*oe(a);}}else t||"adjusted"!=e||(i=l/2*he(a),s=n/2*oe(a));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition();}get text(){return this._text}}Object.defineProperty(C,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(C,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Qe.classNames.concat([C.className])});const j=Math.abs,S=Math.atan2,O=Math.cos,I=Math.max,M=Math.min,B=Math.sin,F=Math.sqrt,X=1e-12,H=Math.PI,Y=H/2,V=2*H;function z(e){return e>1?0:e<-1?H:Math.acos(e)}function W(e){return e>=1?Y:e<=-1?-Y:Math.asin(e)}function U(e){return e.innerRadius}function q(e){return e.outerRadius}function K(e){return e.startAngle}function E(e){return e.endAngle}function G(e){return e&&e.padAngle}function J(e,t,i,s,a,r,l,n){var o=i-e,h=s-t,c=l-a,u=n-r,d=u*o-c*h;if(!(d*d<X))return [e+(d=(c*(t-r)-u*(e-a))/d)*o,t+d*h]}function Q(e,t,i,s,a,r,l){var n=e-i,o=t-s,h=(l?r:-r)/F(n*n+o*o),c=h*o,u=-h*n,d=e+c,g=t+u,p=i+c,y=s+u,b=(d+p)/2,m=(g+y)/2,f=p-d,_=y-g,x=f*f+_*_,v=a-r,w=d*y-p*g,k=(_<0?-1:1)*F(I(0,v*v*x-w*w)),D=(w*_-f*k)/x,R=(-w*f-_*k)/x,A=(w*_+f*k)/x,P=(-w*f+_*k)/x,T=D-b,L=R-m,N=A-b,C=P-m;return T*T+L*L>N*N+C*C&&(D=A,R=P),{cx:D,cy:R,x01:-c,y01:-u,x11:D*(a/v-1),y11:R*(a/v-1)}}function Z(){var e=U,s=q,a=k(0),r=null,l=K,n=E,o=G,h=null,c=V$1(u);function u(){var t,i,u=+e.apply(this,arguments),d=+s.apply(this,arguments),g=l.apply(this,arguments)-Y,p=n.apply(this,arguments)-Y,y=j(p-g),b=p>g;if(h||(h=t=c()),d<u&&(i=d,d=u,u=i),d>X)if(y>V-X)h.moveTo(d*O(g),d*B(g)),h.arc(0,0,d,g,p,!b),u>X&&(h.moveTo(u*O(p),u*B(p)),h.arc(0,0,u,p,g,b));else {var m,f,_=g,x=p,v=g,w=p,k=y,D=y,R=o.apply(this,arguments)/2,A=R>X&&(r?+r.apply(this,arguments):F(u*u+d*d)),P=M(j(d-u)/2,+a.apply(this,arguments)),T=P,L=P;if(A>X){var N=W(A/u*B(R)),C=W(A/d*B(R));(k-=2*N)>X?(v+=N*=b?1:-1,w-=N):(k=0,v=w=(g+p)/2),(D-=2*C)>X?(_+=C*=b?1:-1,x-=C):(D=0,_=x=(g+p)/2);}var I=d*O(_),U=d*B(_),q=u*O(w),K=u*B(w);if(P>X){var E,G=d*O(x),Z=d*B(x),$=u*O(v),ee=u*B(v);if(y<H)if(E=J(I,U,$,ee,G,Z,q,K)){var te=I-E[0],ie=U-E[1],se=G-E[0],ae=Z-E[1],re=1/B(z((te*se+ie*ae)/(F(te*te+ie*ie)*F(se*se+ae*ae)))/2),le=F(E[0]*E[0]+E[1]*E[1]);T=M(P,(u-le)/(re-1)),L=M(P,(d-le)/(re+1));}else T=L=0;}D>X?L>X?(m=Q($,ee,I,U,d,L,b),f=Q(G,Z,q,K,d,L,b),h.moveTo(m.cx+m.x01,m.cy+m.y01),L<P?h.arc(m.cx,m.cy,L,S(m.y01,m.x01),S(f.y01,f.x01),!b):(h.arc(m.cx,m.cy,L,S(m.y01,m.x01),S(m.y11,m.x11),!b),h.arc(0,0,d,S(m.cy+m.y11,m.cx+m.x11),S(f.cy+f.y11,f.cx+f.x11),!b),h.arc(f.cx,f.cy,L,S(f.y11,f.x11),S(f.y01,f.x01),!b))):(h.moveTo(I,U),h.arc(0,0,d,_,x,!b)):h.moveTo(I,U),u>X&&k>X?T>X?(m=Q(q,K,G,Z,u,-T,b),f=Q(I,U,$,ee,u,-T,b),h.lineTo(m.cx+m.x01,m.cy+m.y01),T<P?h.arc(m.cx,m.cy,T,S(m.y01,m.x01),S(f.y01,f.x01),!b):(h.arc(m.cx,m.cy,T,S(m.y01,m.x01),S(m.y11,m.x11),!b),h.arc(0,0,u,S(m.cy+m.y11,m.cx+m.x11),S(f.cy+f.y11,f.cx+f.x11),b),h.arc(f.cx,f.cy,T,S(f.y11,f.x11),S(f.y01,f.x01),!b))):h.arc(0,0,u,w,v,b):h.lineTo(q,K);}else h.moveTo(0,0);if(h.closePath(),t)return h=null,t+""||null}return u.centroid=function(){var t=(+e.apply(this,arguments)+ +s.apply(this,arguments))/2,i=(+l.apply(this,arguments)+ +n.apply(this,arguments))/2-H/2;return [O(i)*t,B(i)*t]},u.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:k(+t),u):e},u.outerRadius=function(e){return arguments.length?(s="function"==typeof e?e:k(+e),u):s},u.cornerRadius=function(e){return arguments.length?(a="function"==typeof e?e:k(+e),u):a},u.padRadius=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:k(+e),u):r},u.startAngle=function(e){return arguments.length?(l="function"==typeof e?e:k(+e),u):l},u.endAngle=function(e){return arguments.length?(n="function"==typeof e?e:k(+e),u):n},u.padAngle=function(e){return arguments.length?(o="function"==typeof e?e:k(+e),u):o},u.context=function(e){return arguments.length?(h=e??null,u):h},u}class $ extends Re{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:Z()});}_getTooltipPoint(){let e=this.get("tooltipX"),t=this.get("tooltipY"),i=0,s=0;l(e)&&(i=e),l(t)&&(s=t);let a=this.get("radius",0),r=this.get("innerRadius",0);return a+=this.get("dRadius",0),r+=this.get("dInnerRadius",0),r<0&&(r=a+r),e instanceof K$1&&(i=this.ix*(r+(a-r)*e.value)),t instanceof K$1&&(s=this.iy*(r+(a-r)*t.value)),this.get("arc")>=360&&0==r&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius"))&&(this._clear=!0);}_changed(){if(super._changed(),this._clear){let e=this.get("startAngle",0),t=this.get("arc",0);const i=this._generator;t<0&&(e+=t,t*=-1),t>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),a=this.get("innerRadius",0);s+=this.get("dRadius",0),a+=this.get("dInnerRadius",0),a<0&&(a=s+a),i({innerRadius:a,outerRadius:s,startAngle:(e+90)*ie$1,endAngle:(e+t+90)*ie$1});let r=e+t/2;this.ix=he(r),this.iy=oe(r);}if(this.isDirty("shiftRadius")){const e=this.get("shiftRadius",0);this.setRaw("dx",this.ix*e),this.setRaw("dy",this.iy*e),this.markDirtyPosition();}}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Re.classNames.concat([$.className])});class ee extends ti{setupDefaultRules(){super.setupDefaultRules();const e=this._root.interfaceColors,t=this.rule.bind(this);t("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:s.new(this._root,{}),width:z$1,height:z$1}),t("PieChart").setAll({radius:U$1(80),startAngle:-90,endAngle:270}),t("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),t("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),t("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),t("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),t("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),t("Slice",["pie"]).states.create("hover",{scale:1.04}),t("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),t("Tick",["pie"]).setAll({location:1}),t("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),t("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),t("FunnelSlice").setAll({interactive:!0,expandDistance:0}),t("FunnelSlice").states.create("hover",{expandDistance:.15}),t("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:G$1}),t("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:G$1,rotation:-90}),t("Label",["funnel","vertical"]).setAll({centerY:G$1,centerX:0}),t("Tick",["funnel"]).setAll({location:1}),t("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),t("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),t("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),t("PyramidSeries").setAll({valueIs:"area"}),t("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),t("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),t("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),t("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),t("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),t("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:G$1}),t("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:G$1,rotation:-90}),t("Label",["pyramid","vertical"]).setAll({centerY:G$1,centerX:0}),t("Tick",["pyramid"]).setAll({location:1}),t("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),t("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:G$1}),t("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:G$1,rotation:-90}),t("Label",["pictorial","vertical"]).setAll({centerY:G$1,centerX:0}),t("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),t("Tick",["pictorial"]).setAll({location:.5});{const i=t("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),l$1(i,"fill",e,"alternativeBackground");}}}class te extends U$2{_afterNew(){this._defaultThemes.push(ee.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer);}_processSeries(e){super._processSeries(e),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1);}}Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:U$2.classNames.concat([te.className])});class ie extends D{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(Je.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(Je.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(Je.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()});}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.on("fill",(()=>{this.updateLegendMarker(e);})),t.on("stroke",(()=>{this.updateLegendMarker(e);})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_shouldMakeBullet(e){return null!=e.get("value")}makeTick(e){const t=this.ticksContainer.children.push(this.ticks.make());return t._setDataItem(e),e.set("tick",t),this.ticks.push(t),t}_afterNew(){this.fields.push("category","fill"),super._afterNew();}_onDataClear(){const e=this.get("colors");e&&e.reset();}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let e=0,t=0,i=0,s=1/0,a=0;m(this._dataItems,(i=>{let s=i.get("valueWorking",0);e+=s,t+=Math.abs(s);})),m(this._dataItems,(e=>{let r=e.get("valueWorking",0);r>i&&(i=r),r<s&&(s=r),a++;let l=r/t;0==t&&(l=0),e.setRaw("valuePercentTotal",100*l);})),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",e),this.setPrivateRaw("valueAverage",e/a),this.setPrivateRaw("valueAbsoluteSum",t);}}show(t$1){const i=Object.create(null,{show:{get:()=>super.show}});return t(this,void 0,void 0,(function*(){let e=[];e.push(i.show.call(this,t$1)),e.push(this._sequencedShowHide(!0,t$1)),yield Promise.all(e);}))}hide(t$1){const i=Object.create(null,{hide:{get:()=>super.hide}});return t(this,void 0,void 0,(function*(){let e=[];e.push(i.hide.call(this,t$1)),e.push(this._sequencedShowHide(!1,t$1)),yield Promise.all(e);}))}_updateChildren(){super._updateChildren(),this._valuesDirty&&m(this._dataItems,(e=>{e.get("label").text.markDirtyText();})),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&m(this._dataItems,(e=>{this.updateLegendValue(e);})),this._arrange();}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),m(this.dataItems,(e=>{this._updateTick(e);}));}_afterChanged(){super._afterChanged(),this._arrange();}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next());}}showDataItem(t$1,i){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return t(this,void 0,void 0,(function*(){const e=[s.showDataItem.call(this,t$1,i)];l(i)||(i=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let r=t$1.get("value");const l$1=t$1.animate({key:"valueWorking",to:r,duration:i,easing:a});l$1&&e.push(l$1.waitForStop());const n=t$1.get("tick");n&&e.push(n.show(i));const o=t$1.get("label");o&&e.push(o.show(i));const h=t$1.get("slice");h&&e.push(h.show(i)),h.get("active")&&h.states.applyAnimate("active"),yield Promise.all(e);}))}hideDataItem(t$1,i){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return t(this,void 0,void 0,(function*(){const e=[s.hideDataItem.call(this,t$1,i)],a=this.states.create("hidden",{});l(i)||(i=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const r=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),l$1=t$1.animate({key:"valueWorking",to:0,duration:i,easing:r});l$1&&e.push(l$1.waitForStop());const n=t$1.get("tick");n&&e.push(n.hide(i));const o=t$1.get("label");o&&e.push(o.hide(i));const h=t$1.get("slice");h.hideTooltip(),h&&e.push(h.hide(i)),yield Promise.all(e);}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let i=e.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=e.get("slice");s&&(this.slices.removeValue(s),s.dispose());}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover();}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover();}updateLegendMarker(e){const t=e.get("slice");if(t){const i=e.get("legendDataItem");if(i){const e=i.get("markerRectangle");m(Ne,(i=>{null!=t.get(i)&&e.set(i,t.get(i));}));}}}_arrangeDown(e){if(e){let t=this._getNextDown();e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),m(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.top;e.y+s<t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.bottom;}));}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(e){if(e){let t=this._getNextUp();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),m(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.bottom;e.y+s>t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.top;}));}}_arrangeRight(e){if(e){let t=0;e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),m(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.left;e.y+s<t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.right;}));}}_arrangeLeft(e){if(e){let t=this.labelsContainer.maxWidth();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),m(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.right;e.y+s>t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.left;}));}}_updateSize(){super._updateSize(),this.markDirty();}_updateTick(e){}_dispose(){super._dispose();const e=this.chart;e&&e.series.removeValue(this);}}Object.defineProperty(ie,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(ie,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:D.classNames.concat([ie.className])});class se extends te{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1});}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:G$1,y:G$1});}_prepareChildren(){super._prepareChildren();const e=this.chartContainer,t=e.innerWidth(),i=e.innerHeight(),s=this.get("startAngle",0),a=this.get("endAngle",0),r=this.get("innerRadius");let l=de(0,0,s,a,1);const n=t/(l.right-l.left),o=i/(l.bottom-l.top);let c={left:0,right:0,top:0,bottom:0};if(r instanceof K$1){let e=r.value,l=Math.min(n,o);e=Math.max(l*e,l-Math.min(i,t))/l,c=de(0,0,s,a,e),this.setPrivateRaw("irModifyer",e/r.value);}l=pe([l,c]);const u=this._maxRadius;this._maxRadius=Math.min(n,o);const d=mt(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-d*(l.bottom+l.top)/2,dx:-d*(l.right+l.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||u!=this._maxRadius)&&this.series.each((e=>{e._markDirtyKey("startAngle");})),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each((e=>{e._markDirtyKey("innerRadius");}));}radius(e){let t=mt(this.get("radius",0),this._maxRadius),i=mt(this.get("innerRadius",0),t);if(e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("radius");return null!=r?i+mt(r,t-i):i+(t-i)/a*(s+1)}return t}innerRadius(e){const t=this.radius();let i=mt(this.get("innerRadius",0),t);if(i<0&&(i=t+i),e){let s=this.series.indexOf(e),a=this.series.length,r=e.get("innerRadius");return null!=r?i+mt(r,t-i):i+(t-i)/a*s}return i}}Object.defineProperty(se,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(se,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:te.classNames.concat([se.className])});class ae extends ie{_makeSlices(){return new W$1(Me.new({}),(()=>$._new(this._root,{themeTags:Kt(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template])))}_makeLabels(){return new W$1(Me.new({}),(()=>C._new(this._root,{themeTags:Kt(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template])))}_makeTicks(){return new W$1(Me.new({}),(()=>B$1._new(this._root,{themeTags:Kt(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template])))}processDataItem(e){super.processDataItem(e);const t=this.makeSlice(e);t.on("scale",(()=>{this._updateTick(e);})),t.on("shiftRadius",(()=>{this._updateTick(e);})),t.events.on("positionchanged",(()=>{this._updateTick(e);}));const i=this.makeLabel(e);i.events.on("positionchanged",(()=>{this._updateTick(e);})),this.makeTick(e),t.events.on("positionchanged",(()=>{i.markDirty();}));}_getNextUp(){const e=this.chart;return e?e._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const e=this.chart;return e?-e._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const e=this.chart;if(e){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else {let t=e.get("textType");null!=t&&"aligned"!=t||e.set("textType","adjusted");}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const t=this.get("startAngle",e.get("startAngle",-90)),i=this.get("endAngle",e.get("endAngle",270))-t;let s=t;const a=e.radius(this);this.setPrivateRaw("radius",a);let r=e.innerRadius(this)*e.getPrivate("irModifyer",1);r<0&&(r=a+r),m(this._dataItems,(e=>{this.updateLegendValue(e);let t=i*e.get("valuePercentTotal")/100;const l=e.get("slice");if(l){l.set("radius",a),l.set("innerRadius",r),l.set("startAngle",s),l.set("arc",t);const i=e.get("fill");l._setDefault("fill",i),l._setDefault("stroke",i);}let n=le(s+t/2);const o=e.get("label");if(o&&(o.setPrivate("radius",a),o.setPrivate("innerRadius",r),o.set("labelAngle",n),"aligned"==o.get("textType"))){let e=a+o.get("radius",0),t=a*oe(n);n>90&&n<=270?(o.isHidden()||o.isHiding()||this._lLabels.push({label:o,y:t}),e*=-1,e-=this.labelsContainer.get("paddingLeft",0),o.set("centerX",z$1),o.setPrivateRaw("left",!0)):(o.isHidden()||o.isHiding()||this._rLabels.push({label:o,y:t}),e+=this.labelsContainer.get("paddingRight",0),o.set("centerX",0),o.setPrivateRaw("left",!1)),o.set("x",e),o.set("y",a*oe(n));}s+=t,this._updateTick(e);}));}}}_updateTick(e){const t=e.get("tick"),i=e.get("label"),s=e.get("slice"),a=t.get("location",1);if(t&&i&&s){const e=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*a,r=i.get("labelAngle",0),l=he(r),n=oe(r),o=this.labelsContainer,h=o.get("paddingLeft",0),c=o.get("paddingRight",0);let g=0,p=0;if(g=i.x(),p=i.y(),"circular"==i.get("textType")){const e=i.radius()-i.get("paddingBottom",0),t=i.get("labelAngle",0);g=e*he(t),p=e*oe(t);}let y=-c;i.getPrivate("left")&&(y=h),t.set("points",[{x:s.x()+e*l,y:s.y()+e*n},{x:g+y,y:p},{x:g,y:p}]);}}_positionBullet(e){const t=e.get("sprite");if(t){const i=t.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),a=i.get("radius",0),r=i.get("startAngle",0)+i.get("arc",0)*e.get("locationX",.5),l=s+(a-s)*e.get("locationY",.5);t.setAll({x:he(r)*l,y:oe(r)*l});}}}}Object.defineProperty(ae,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(ae,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ie.classNames.concat([ae.className])});

export { se as PieChartAm5, ae as PieSeriesAm5 };

//# sourceMappingURL=pieChart-81d9a1da.js.map