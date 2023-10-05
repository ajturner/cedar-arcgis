/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"平均",median:"中央値",sum:"合計",discretePercentitle:"不連続パーセンタイル",minimum:"最小",maximum:"最大",variance:"分散",count:"個数",aggregation:"${ fieldName } の ${ statistics }",noAggregation:"集約なし"},e="チャート",t="シリーズ数",s="X 軸",i="利用不可",n={start:"最初のデータ ポイントにスナップ",end:"最後のデータ ポイントにスナップ"},o="データ フィールドが空であるかフィルターの組み合わせのために、表示できるデータがありません。";var g={statistics:a,defaultTitle:"チャート",countSeries:"シリーズ数",xAxis:"X 軸",notAvailable:"利用不可",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}