/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Srednja vrednost",median:"Mediana",sum:"Vsota",discretePercentitle:"Diskretni percentil",minimum:"Minimum",maximum:"Maksimum",variance:"Varianca",count:"Število",aggregation:"${ statistics } od ${ fieldName }",noAggregation:"Brez agregacije"},i="Grafikon",e="Števec nizov",t="Os X",o="Ni na voljo",n={start:"Privlači na prvo podatkovno točko",end:"Privlači na zadnjo podatkovno točko"},s="Ni podatkov za prikaz zaradi praznih podatkovnih polj in/ali kombinacije filtrov.";var r={statistics:a,defaultTitle:"Grafikon",countSeries:"Števec nizov",xAxis:"Os X",notAvailable:"Ni na voljo",timeAggregationTypes:n,noDataMessage:s};export default r;export{e as countSeries,i as defaultTitle,s as noDataMessage,o as notAvailable,a as statistics,n as timeAggregationTypes,t as xAxis}