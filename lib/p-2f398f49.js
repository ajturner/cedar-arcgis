/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const n={mean:"Trung bình",median:"Bình quân",sum:"Tổng",discretePercentitle:"Phân vị rời rạc",minimum:"Tối thiểu",maximum:"Tối đa",variance:"Phương sai",count:"Số lượng",aggregation:"${ statistics } / ${ fieldName }",percent:"Phần trăm",noAggregation:"Không tổng hợp"},e={mean:"Trung bình",median:"Bình quân",stdDev:"Độ lệch chuẩn",normal:"Phân bố thông thường",trendline:"Đường xu hướng"},a="Từ ${ guideStart } đến ${ guideEnd }",t={defaultSliceGroupingLabel:"Khác"},i="Không Khả dụng";var g={statistics:n,overlays:e,guideTooltipLabel:"Từ ${ guideStart } đến ${ guideEnd }",pieChart:t,notAvailable:"Không Khả dụng"};export default g;export{a as guideTooltipLabel,i as notAvailable,e as overlays,t as pieChart,n as statistics}