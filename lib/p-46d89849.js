/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Среднее",median:"Медиана",sum:"Сумма",discretePercentitle:"Дискретный процентиль",minimum:"Минимум",maximum:"Максимум",variance:"Дисперсия",count:"Количество",aggregation:"${ statistics } из ${ fieldName }",noAggregation:"Без агрегирования"},e="Диаграмма",t="Серии чисел",s="Ось X",i="Недоступно",n={start:"Замкнуть на первую точку данных",end:"Замкнуть на последнюю точку данных"},o="Нет доступных для отображения данных, так как поля данных и/или комбинации фильтров пусты.";var g={statistics:a,defaultTitle:"Диаграмма",countSeries:"Серии чисел",xAxis:"Ось X",notAvailable:"Недоступно",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}