/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Medelvärde",median:"Median",sum:"Summa",discretePercentitle:"Diskret percentil",minimum:"Minimum",maximum:"Maximum",variance:"Varians",count:"Antal",aggregation:"${ statistics } av ${ fieldName }",noAggregation:"Ingen aggregering"},e="Diagram",t="Antalsserie",i="X-axel",n="Ej tillgänglig",s={start:"Snappa till den första datapunkten",end:"Snappa till den sista datapunkten"},l="Inga data är tillgängliga att visa på grund av tomma datafält och/eller filterkombinationen.";var g={statistics:a,defaultTitle:"Diagram",countSeries:"Antalsserie",xAxis:"X-axel",notAvailable:"Ej tillgänglig",timeAggregationTypes:s,noDataMessage:l};export default g;export{t as countSeries,e as defaultTitle,l as noDataMessage,n as notAvailable,a as statistics,s as timeAggregationTypes,i as xAxis}