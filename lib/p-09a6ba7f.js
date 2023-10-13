/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const i={mean:"Media",median:"Mediana",sum:"Somma",discretePercentitle:"Percentile discreto",minimum:"Minimo",maximum:"Massimo",variance:"Varianza",count:"Conteggio",aggregation:"${ statistics } di ${ fieldName }",noAggregation:"Nessuna aggregazione"},a="Grafico",e="Serie Conteggio",t="Asse X",s="Non disponibile",n={start:"Snap al primo punto dati",end:"Snap al punto dati finale"},o="Nessun dato disponibile da visualizzare a causa di campo di dati vuoti e/o una combinazione di filtri.";var r={statistics:i,defaultTitle:"Grafico",countSeries:"Serie Conteggio",xAxis:"Asse X",notAvailable:"Non disponibile",timeAggregationTypes:n,noDataMessage:o};export default r;export{e as countSeries,a as defaultTitle,o as noDataMessage,s as notAvailable,i as statistics,n as timeAggregationTypes,t as xAxis}