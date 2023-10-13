/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Mean",median:"Median",sum:"Sum",discretePercentitle:"Discrete percentile",minimum:"Minimum",maximum:"Maximum",variance:"Variance",count:"Count",aggregation:"${ statistics } of ${ fieldName }",noAggregation:"No aggregation"},t="Chart",e="Count Series",i="X Axis",s="Not Available",n={start:"Snap to the first data point",end:"Snap to the last data point"},o="No data is available to display due to empty data field(s) and/or combination of filters.";var r={statistics:a,defaultTitle:"Chart",countSeries:"Count Series",xAxis:"X Axis",notAvailable:"Not Available",timeAggregationTypes:n,noDataMessage:o};export default r;export{e as countSeries,t as defaultTitle,o as noDataMessage,s as notAvailable,a as statistics,n as timeAggregationTypes,i as xAxis}