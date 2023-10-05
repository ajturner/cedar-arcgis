/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"平均值",median:"中位数",sum:"总和",discretePercentitle:"离散百分比数",minimum:"最小值",maximum:"最大值",variance:"方差",count:"计数",aggregation:"第 ${ statistics } 页，共 ${ fieldName } 页",noAggregation:"无聚合"},e="图表",t="技术序列",s="X 轴",i="不可用",n={start:"捕捉到第一个数据点",end:"捕捉到最后一个数据点"},o="由于数据字段和/或过滤器组合为空，因此无法显示任何数据。";var g={statistics:a,defaultTitle:"图表",countSeries:"技术序列",xAxis:"X 轴",notAvailable:"不可用",timeAggregationTypes:n,noDataMessage:"由于数据字段和/或过滤器组合为空，因此无法显示任何数据。"};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}