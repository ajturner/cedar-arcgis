/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"ממוצע",median:"חציון",sum:"סכום",discretePercentitle:"אחוזונים בנפרד",minimum:"מינימום",maximum:"מקסימום",variance:"שונות",count:"מונה",aggregation:"${ statistics } מתוך ${ fieldName }",percent:"אחוז",noAggregation:"ללא צבירה"},a={mean:"ממוצע",median:"חציון",stdDev:"סטיית תקן",normal:"התפלגות נורמלית",trendline:"קו מגמה"},t="מ-${ guideStart } עד ${ guideEnd }",i={defaultSliceGroupingLabel:"אחר"},n="לא זמין";var s={statistics:e,overlays:a,guideTooltipLabel:"מ-${ guideStart } עד ${ guideEnd }",pieChart:i,notAvailable:"לא זמין"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}