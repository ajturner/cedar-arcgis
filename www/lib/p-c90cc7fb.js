/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"평균",median:"중앙값",sum:"합계",discretePercentitle:"불연속 백분위수",minimum:"최소",maximum:"최대",variance:"변수",count:"개수",aggregation:"${ statistics }개 중 ${ fieldName }개",percent:"백분율",noAggregation:"집계 없음"},a={mean:"평균",median:"중앙값",stdDev:"표준 편차",normal:"일반 배포",trendline:"추세선"},t="${ guideStart } ~ ${ guideEnd }",i={defaultSliceGroupingLabel:"기타"},n="사용할 수 없음";var s={statistics:e,overlays:a,guideTooltipLabel:"${ guideStart } ~ ${ guideEnd }",pieChart:i,notAvailable:"사용할 수 없음"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}