/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Átlag",median:"Medián",sum:"Összeg",discretePercentitle:"Diszkrét percentilis",minimum:"Minimum",maximum:"Maximum",variance:"Variancia",count:"Darabszám",aggregation:"${ statistics }/${ fieldName }",percent:"Százalék",noAggregation:"Nincs összevonás"},a={mean:"Átlag",median:"Medián",stdDev:"Szabványos szórás",normal:"Normális eloszlás",trendline:"Trendvonal"},i="Ettől eddig: ${ guideStart } – ${ guideEnd }",t={defaultSliceGroupingLabel:"Egyéb"},s="Nem érhető el";var n={statistics:e,overlays:a,guideTooltipLabel:"Ettől eddig: ${ guideStart } – ${ guideEnd }",pieChart:t,notAvailable:"Nem érhető el"};export default n;export{i as guideTooltipLabel,s as notAvailable,a as overlays,t as pieChart,e as statistics}