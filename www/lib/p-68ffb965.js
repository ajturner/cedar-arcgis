/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Середнє",median:"Медіанне",sum:"Сума",discretePercentitle:"Дискретний процентиль",minimum:"Мінімум",maximum:"Максимум",variance:"Дисперсія",count:"Лічильник",aggregation:"${ statistics } з ${ fieldName }",noAggregation:"Немає агрегування"},e="Діаграма",t="Кількість серій",s="Вісь X",i="Недоступно",n={start:"Прив'язка до першої точки даних",end:"Прив'язка до останньої точки даних"},o="Дані недоступні для відображення через порожні поля даних і/або комбінації фільтрів.";var g={statistics:a,defaultTitle:"Діаграма",countSeries:"Кількість серій",xAxis:"Вісь X",notAvailable:"Недоступно",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}