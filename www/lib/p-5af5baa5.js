/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Sredina",median:"Medijana",sum:"Zbir",discretePercentitle:"Diskretni percentil",minimum:"Minimum",maximum:"Maksimum",variance:"Odstupanje",count:"Broj",aggregation:"${ statistics } od ${ fieldName }",noAggregation:"Nema grupisanja"},i="Grafikon",e="Broj serija",t="X-osa",s="Nije dostupno",n={start:"Zakači za prvu tačku podataka",end:"Zakači za zadnju tačku podataka"},o="Podaci za prikazivanje nisu dostupni usled praznog/ih polja i/ili kombinacije filtera.";var r={statistics:a,defaultTitle:"Grafikon",countSeries:"Broj serija",xAxis:"X-osa",notAvailable:"Nije dostupno",timeAggregationTypes:n,noDataMessage:o};export default r;export{e as countSeries,i as defaultTitle,o as noDataMessage,s as notAvailable,a as statistics,n as timeAggregationTypes,t as xAxis}