/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Осреднена стойност",median:"Медиана",sum:"Сума",discretePercentitle:"Дискретен перцентил",minimum:"Минимални",maximum:"Максимални",variance:"Отклонение",count:"Брой",aggregation:"${ statistics } от ${ fieldName }",percent:"Процент",noAggregation:"Няма агрегиране"},a={mean:"Осреднена стойност",median:"Медиана",stdDev:"Стандартно отклонение",normal:"Нормално разпределение",trendline:"Линия на тенденция"},t="От ${ guideStart } до ${ guideEnd }",i={defaultSliceGroupingLabel:"Друго"},n="Няма налични";var s={statistics:e,overlays:a,guideTooltipLabel:"От ${ guideStart } до ${ guideEnd }",pieChart:i,notAvailable:"Няма налични"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}