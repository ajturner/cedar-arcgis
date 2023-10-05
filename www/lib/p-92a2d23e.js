/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Mean",median:"Median",sum:"Sum",discretePercentitle:"Discrete percentile",minimum:"Minimum",maximum:"Maximum",variance:"Variance",count:"Count",aggregation:"${ statistics } of ${ fieldName }",percent:"Percent",noAggregation:"No aggregation"},a={mean:"Mean",median:"Median",stdDev:"Standard Deviation",normal:"Normal Distribution",trendline:"Trendline"},i="From ${ guideStart } to ${ guideEnd }",t={defaultSliceGroupingLabel:"Other"},n="Not Available";var o={statistics:e,overlays:a,guideTooltipLabel:"From ${ guideStart } to ${ guideEnd }",pieChart:t,notAvailable:"Not Available"};export default o;export{i as guideTooltipLabel,n as notAvailable,a as overlays,t as pieChart,e as statistics}