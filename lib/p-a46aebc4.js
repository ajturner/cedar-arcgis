/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const i={mean:"Vidurkis",median:"Mediana",sum:"Suma",discretePercentitle:"Diskretinis procentilis",minimum:"Minimumas",maximum:"Maksimumas",variance:"Nuokrypis",count:"Viso",aggregation:"${ statistics } iš ${ fieldName }",percent:"Procentai",noAggregation:"Be agregavimo"},a={mean:"Vidurkis",median:"Mediana",stdDev:"Standartinis nuokrypis",normal:"Normalus paskirstymas",trendline:"Tendencijų linija"},e="Nuo ${ guideStart } iki ${ guideEnd }",t={defaultSliceGroupingLabel:"Kita"},s="Negalima";var n={statistics:i,overlays:a,guideTooltipLabel:"Nuo ${ guideStart } iki ${ guideEnd }",pieChart:t,notAvailable:"Negalima"};export default n;export{e as guideTooltipLabel,s as notAvailable,a as overlays,t as pieChart,i as statistics}