/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Середнє",median:"Медіанне",sum:"Сума",discretePercentitle:"Дискретний процентиль",minimum:"Мінімум",maximum:"Максимум",variance:"Дисперсія",count:"Лічильник",aggregation:"${ statistics } з ${ fieldName }",percent:"Відсоток",noAggregation:"Немає агрегування"},a={mean:"Середнє",median:"Медіанне",stdDev:"Середньоквадратичне відхилення",normal:"Нормальний розподіл",trendline:"Лінія тренду"},t="Від ${ guideStart } до ${ guideEnd }",i={defaultSliceGroupingLabel:"Інше"},n="Недоступно";var s={statistics:e,overlays:a,guideTooltipLabel:"Від ${ guideStart } до ${ guideEnd }",pieChart:i,notAvailable:"Недоступно"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}