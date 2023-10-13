/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Mittelwert",median:"Medianwert",sum:"Summe",discretePercentitle:"Diskontinuierliches Perzentil",minimum:"Minimum",maximum:"Maximum",variance:"Varianz",count:"Anzahl",aggregation:"${ statistics } von ${ fieldName }",noAggregation:"Keine Aggregation"},n="Diagramm",a="Mengenserie",t="X-Achse",i="Nicht verfügbar",s={start:"Am ersten Datenpunkt fangen",end:"Am letzten Datenpunkt fangen"},r="Aufgrund von leeren Datenfeldern und/oder einer Kombination von Filtern sind keine Daten zum Anzeigen verfügbar.";var g={statistics:e,defaultTitle:"Diagramm",countSeries:"Mengenserie",xAxis:"X-Achse",notAvailable:"Nicht verfügbar",timeAggregationTypes:s,noDataMessage:r};export default g;export{a as countSeries,n as defaultTitle,r as noDataMessage,i as notAvailable,e as statistics,s as timeAggregationTypes,t as xAxis}