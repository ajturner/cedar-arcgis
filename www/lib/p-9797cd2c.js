/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Gjennomsnitt",median:"Median",sum:"Sum",discretePercentitle:"Diskret persentil",minimum:"Minimum",maximum:"Maksimum",variance:"Varians",count:"Antall",aggregation:"${ statistics } av ${ fieldName }",noAggregation:"Ingen sammenslåing"},a="Diagram",t="Tallserie",i="X-akse",s="Ikke tilgjengelig",n={start:"Fest til det første datapunktet",end:"Fest til det siste datapunktet"},g="Ingen data er tilgjengelige for visning på grunn av tomme datafelt og/eller kombinasjon av filtre.";var l={statistics:e,defaultTitle:"Diagram",countSeries:"Tallserie",xAxis:"X-akse",notAvailable:"Ikke tilgjengelig",timeAggregationTypes:n,noDataMessage:g};export default l;export{t as countSeries,a as defaultTitle,g as noDataMessage,s as notAvailable,e as statistics,n as timeAggregationTypes,i as xAxis}