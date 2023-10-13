/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Ortalama",median:"Medyan",sum:"Toplam",discretePercentitle:"Ayrık yüzdelik",minimum:"Minimum",maximum:"Maksimum",variance:"Varyans",count:"Sayım",aggregation:"${ statistics } / ${ fieldName }",percent:"Yüzde",noAggregation:"Kümeleme yok"},e={mean:"Ortalama",median:"Medyan",stdDev:"Standart Sapma",normal:"Normal Dağılım",trendline:"Trend çizgisi"},i="${ guideStart }'dan ${ guideEnd }'a kadar",t={defaultSliceGroupingLabel:"Diğer"},l="Kullanılabilir Değil";var n={statistics:a,overlays:e,guideTooltipLabel:"${ guideStart }'dan ${ guideEnd }'a kadar",pieChart:t,notAvailable:"Kullanılabilir Değil"};export default n;export{i as guideTooltipLabel,l as notAvailable,e as overlays,t as pieChart,a as statistics}