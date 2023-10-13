/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Priemer",median:"Medián",sum:"Súčet",discretePercentitle:"Diskrétny percentil",minimum:"Minimum",maximum:"Maximum",variance:"Rozptyl",count:"Počet",aggregation:"${ statistics } z ${ fieldName }",noAggregation:"Bez agregácie"},i="Graf",t="Počet sérií",a="Os X",s="Nie je k dispozícii",o={start:"Prichytiť k prvému dátovému bodu",end:"Prichytiť k poslednému dátovému bodu"},n="Nie sú dostupné žiadne dáta na zobrazenie z dôvodu prázdnych dátových polí a/alebo kombinácie filtrov.";var r={statistics:e,defaultTitle:"Graf",countSeries:"Počet sérií",xAxis:"Os X",notAvailable:"Nie je k dispozícii",timeAggregationTypes:o,noDataMessage:n};export default r;export{t as countSeries,i as defaultTitle,n as noDataMessage,s as notAvailable,e as statistics,o as timeAggregationTypes,a as xAxis}