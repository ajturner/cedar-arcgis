/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"平均",median:"中央値",sum:"合計",discretePercentitle:"不連続パーセンタイル",minimum:"最小",maximum:"最大",variance:"分散",count:"個数",aggregation:"${ fieldName } の ${ statistics }",percent:"パーセント",noAggregation:"集約なし"},a={mean:"平均",median:"中央値",stdDev:"標準偏差",normal:"正規分布",trendline:"トレンドライン"},t="${ guideStart } から ${ guideEnd }",i={defaultSliceGroupingLabel:"その他"},n="利用不可";var s={statistics:e,overlays:a,guideTooltipLabel:"${ guideStart } から ${ guideEnd }",pieChart:i,notAvailable:"利用不可"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}