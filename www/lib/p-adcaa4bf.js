/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"平均值",median:"中位数",sum:"总和",discretePercentitle:"离散百分比数",minimum:"最小值",maximum:"最大值",variance:"方差",count:"计数",aggregation:"第 ${ statistics } 页，共 ${ fieldName } 页",percent:"百分比",noAggregation:"无聚合"},a={mean:"平均值",median:"中位数",stdDev:"标准差",normal:"正态分布",trendline:"趋势线"},t="从 ${ guideStart } 至 ${ guideEnd }",i={defaultSliceGroupingLabel:"其他"},n="不可用";var s={statistics:e,overlays:a,guideTooltipLabel:"从 ${ guideStart } 至 ${ guideEnd }",pieChart:i,notAvailable:"不可用"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}