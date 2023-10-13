/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Осреднена стойност",median:"Медиана",sum:"Сума",discretePercentitle:"Дискретен перцентил",minimum:"Минимални",maximum:"Максимални",variance:"Отклонение",count:"Брой",aggregation:"${ statistics } от ${ fieldName }",noAggregation:"Няма агрегиране"},e="Диаграма",t="Серия за броене",s="Ос Х",i="Няма налични",n={start:"Притеглете до първата точка от данни",end:"Притеглете до последната точка от данни"},o="Няма налични данни за показване поради празно(и) поле(та) за данни и/или комбинация от филтри.";var g={statistics:a,defaultTitle:"Диаграма",countSeries:"Серия за броене",xAxis:"Ос Х",notAvailable:"Няма налични",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}