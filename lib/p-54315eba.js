/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"평균",median:"중앙값",sum:"합계",discretePercentitle:"불연속 백분위수",minimum:"최소",maximum:"최대",variance:"변수",count:"개수",aggregation:"${ statistics }개 중 ${ fieldName }개",noAggregation:"집계 없음"},e="차트",t="시리즈 개수",s="X축",i="사용할 수 없음",n={start:"첫 번째 데이터 포인트로 스냅",end:"마지막 데이터 포인트로 스냅"},o="빈 데이터 필드 또는 필터 조합으로 인해 데이터를 표시할 수 없습니다.";var g={statistics:a,defaultTitle:"차트",countSeries:"시리즈 개수",xAxis:"X축",notAvailable:"사용할 수 없음",timeAggregationTypes:n,noDataMessage:"빈 데이터 필드 또는 필터 조합으로 인해 데이터를 표시할 수 없습니다."};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}