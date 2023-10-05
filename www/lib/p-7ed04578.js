/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Среднее",median:"Медиана",sum:"Сумма",discretePercentitle:"Дискретный процентиль",minimum:"Минимум",maximum:"Максимум",variance:"Дисперсия",count:"Количество",aggregation:"${ statistics } из ${ fieldName }",percent:"Процент",noAggregation:"Без агрегации"},a={mean:"Среднее",median:"Медиана",stdDev:"Среднеквадратическое отклонение",normal:"Нормальное распределение",trendline:"Линия тренда"},t="От ${ guideStart } до ${ guideEnd }",i={defaultSliceGroupingLabel:"Прочее"},n="Недоступно";var s={statistics:e,overlays:a,guideTooltipLabel:"От ${ guideStart } до ${ guideEnd }",pieChart:i,notAvailable:"Недоступно"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}