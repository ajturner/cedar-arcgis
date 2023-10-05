/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Mittelwert",median:"Medianwert",sum:"Summe",discretePercentitle:"Diskontinuierliches Perzentil",minimum:"Minimum",maximum:"Maximum",variance:"Varianz",count:"Anzahl",aggregation:"${ statistics } von ${ fieldName }",percent:"Prozent",noAggregation:"Keine Aggregation"},i={mean:"Mittelwert",median:"Medianwert",stdDev:"Standardabweichung",normal:"Normalverteilung",trendline:"Trendlinie"},a="Von ${ guideStart } bis ${ guideEnd }",t={defaultSliceGroupingLabel:"Andere"},n="Nicht verfügbar";var r={statistics:e,overlays:i,guideTooltipLabel:"Von ${ guideStart } bis ${ guideEnd }",pieChart:t,notAvailable:"Nicht verfügbar"};export default r;export{a as guideTooltipLabel,n as notAvailable,i as overlays,t as pieChart,e as statistics}