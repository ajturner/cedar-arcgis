/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Valor medio",median:"Mediana",sum:"Suma",discretePercentitle:"Percentil discreto",minimum:"Mínimo",maximum:"Máximo",variance:"Varianza",count:"Recuento",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sin agregación"},a="Gráfico",i="Recuento de series",t="Eje X",o="No disponible",s={start:"Alinear con el primer punto de datos",end:"Alinear con el último punto de datos"},n="No hay datos disponibles para mostrar debido a que los campos de datos están vacíos o debido a la combinación de filtros.";var r={statistics:e,defaultTitle:"Gráfico",countSeries:"Recuento de series",xAxis:"Eje X",notAvailable:"No disponible",timeAggregationTypes:s,noDataMessage:n};export default r;export{i as countSeries,a as defaultTitle,n as noDataMessage,o as notAvailable,e as statistics,s as timeAggregationTypes,t as xAxis}