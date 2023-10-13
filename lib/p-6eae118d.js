/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Rata-rata",median:"Median",sum:"Sum",discretePercentitle:"Persentil diskrit",minimum:"Minimal",maximum:"Maksimal",variance:"Varian",count:"Count",aggregation:"${ statistics } dari ${ fieldName }",percent:"Persen",noAggregation:"Tidak ada agregasi"},i={mean:"Rata-rata",median:"Median",stdDev:"Deviasi Standar",normal:"Distribusi Normal",trendline:"Garis Tren"},e="Dari ${ guideStart } hingga ${ guideEnd }",t={defaultSliceGroupingLabel:"Lainnya"},r="Tidak Tersedia";var n={statistics:a,overlays:i,guideTooltipLabel:"Dari ${ guideStart } hingga ${ guideEnd }",pieChart:t,notAvailable:"Tidak Tersedia"};export default n;export{e as guideTooltipLabel,r as notAvailable,i as overlays,t as pieChart,a as statistics}