/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Μέσος όρος",median:"Διάμεσο",sum:"Άθροισμα",discretePercentitle:"Διακριτό ποσοστημόριο",minimum:"Ελάχιστο",maximum:"Μέγιστο",variance:"Διακύμανση",count:"Πλήθος",aggregation:"${ statistics } από ${ fieldName }",percent:"Ποσοστό",noAggregation:"Δεν υπάρχει συνάθροιση"},a={mean:"Μέσος όρος",median:"Διάμεσο",stdDev:"Τυπική απόκλιση",normal:"Κανονική κατανομή",trendline:"Γραμμή τάσης"},t="Από ${ guideStart } έως ${ guideEnd }",i={defaultSliceGroupingLabel:"Άλλο"},n="Μη διαθέσιμο";var s={statistics:e,overlays:a,guideTooltipLabel:"Από ${ guideStart } έως ${ guideEnd }",pieChart:i,notAvailable:"Μη διαθέσιμο"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}