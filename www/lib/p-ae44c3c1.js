/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Middel",median:"Median",sum:"Sum",discretePercentitle:"Særskilt percentil",minimum:"Minimum",maximum:"Maksimum",variance:"Varians",count:"Tælling",aggregation:"${ statistics } for ${ fieldName }",noAggregation:"Ingen aggregering"},a="Diagram",t="Tællerække",i="X-akse",s="Ikke tilgængelig",n={start:"Fastgør til det første datapunkt",end:"Fastgør til det sidste datapunkt"},g="Der er ingen data at vise på grund af tomme datafelter og/eller kombinationen af filtre.";var r={statistics:e,defaultTitle:"Diagram",countSeries:"Tællerække",xAxis:"X-akse",notAvailable:"Ikke tilgængelig",timeAggregationTypes:n,noDataMessage:g};export default r;export{t as countSeries,a as defaultTitle,g as noDataMessage,s as notAvailable,e as statistics,n as timeAggregationTypes,i as xAxis}