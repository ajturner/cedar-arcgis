/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Keskmine",median:"Keskmine",sum:"Summa",discretePercentitle:"Diskreetne protsentiil",minimum:"Miinimum",maximum:"Maksimum",variance:"Dispersioon",count:"Kogus",aggregation:"${ statistics } /${ fieldName }",percent:"Protsent",noAggregation:"Agregeerimist pole"},a={mean:"Keskmine",median:"Keskmine",stdDev:"Standardhälve",normal:"Normaaljaotus",trendline:"Trendijoon"},i="Alates ${ guideStart } kuni ${ guideEnd }",t={defaultSliceGroupingLabel:"Muud"},s="Pole kättesaadav";var n={statistics:e,overlays:a,guideTooltipLabel:"Alates ${ guideStart } kuni ${ guideEnd }",pieChart:t,notAvailable:"Pole kättesaadav"};export default n;export{i as guideTooltipLabel,s as notAvailable,a as overlays,t as pieChart,e as statistics}