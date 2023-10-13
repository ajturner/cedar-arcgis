/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"平均值",median:"中位數",sum:"總和",discretePercentitle:"離散百分位數",minimum:"最小值",maximum:"最大值",variance:"變異",count:"計數",aggregation:"${ statistics }/${ fieldName }",noAggregation:"無匯聚"},e="圖表",t="計數序列",s="X 軸",i="無法取得",n={start:"貼齊至第一個資料點",end:"對齊至最後的資料點"},o="由於資料欄位空白和/或篩選器組合，因此無法顯示任何資料。";var g={statistics:a,defaultTitle:"圖表",countSeries:"計數序列",xAxis:"X 軸",notAvailable:"無法取得",timeAggregationTypes:n,noDataMessage:"由於資料欄位空白和/或篩選器組合，因此無法顯示任何資料。"};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}