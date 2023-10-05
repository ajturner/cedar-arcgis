/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Průměr",median:"Medián",sum:"Suma",discretePercentitle:"Diskrétní percentil",minimum:"Minimum",maximum:"Maximum",variance:"Rozptyl",count:"Počet",aggregation:"${ statistics } z ${ fieldName }",noAggregation:"Žádná agregace"},e="Graf",i="Počet sérií",t="Osa X",s="Není k dispozici",n={start:"Přichytit k prvnímu datovému bodu",end:"Přichytit k poslednímu datovému bodu"},o="V důsledku prázdných datových polí a/nebo kombinace filtrů nejsou k dispozici žádná data k zobrazení.";var r={statistics:a,defaultTitle:"Graf",countSeries:"Počet sérií",xAxis:"Osa X",notAvailable:"Není k dispozici",timeAggregationTypes:n,noDataMessage:o};export default r;export{i as countSeries,e as defaultTitle,o as noDataMessage,s as notAvailable,a as statistics,n as timeAggregationTypes,t as xAxis}