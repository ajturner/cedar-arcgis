/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Moyenne",median:"Médiane",sum:"Somme",discretePercentitle:"Centile discret",minimum:"Minimum",maximum:"Maximum",variance:"Variance",count:"Total",aggregation:"${ statistics } de ${ fieldName }",percent:"Pourcentage",noAggregation:"Pas d’agrégation"},a={mean:"Moyenne",median:"Médiane",stdDev:"Écart type",normal:"Distribution normale",trendline:"Ligne de tendance"},i="De ${ guideStart } à ${ guideEnd }",t={defaultSliceGroupingLabel:"Autre"},n="Non disponible";var o={statistics:e,overlays:a,guideTooltipLabel:"De ${ guideStart } à ${ guideEnd }",pieChart:t,notAvailable:"Non disponible"};export default o;export{i as guideTooltipLabel,n as notAvailable,a as overlays,t as pieChart,e as statistics}