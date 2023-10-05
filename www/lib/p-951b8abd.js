/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"平均值",median:"中位數",sum:"總和",discretePercentitle:"離散百分位數",minimum:"最小值",maximum:"最大值",variance:"變異",count:"計數",aggregation:"${ statistics }/${ fieldName }",percent:"百分比",noAggregation:"無匯聚"},a={mean:"平均值",median:"中位數",stdDev:"標準差",normal:"常態分佈",trendline:"趨勢線"},t="從 ${ guideStart } 到 ${ guideEnd }",i={defaultSliceGroupingLabel:"其他"},n="無法取得";var s={statistics:e,overlays:a,guideTooltipLabel:"從 ${ guideStart } 到 ${ guideEnd }",pieChart:i,notAvailable:"無法取得"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}