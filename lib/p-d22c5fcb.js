/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const a={mean:"Átlag",median:"Medián",sum:"Összeg",discretePercentitle:"Diszkrét percentilis",minimum:"Minimum",maximum:"Maximum",variance:"Variancia",count:"Darabszám",aggregation:"${ statistics }/${ fieldName }",noAggregation:"Nincs összevonás"},e="Diagram",t="Számsorozat",s="X tengely",i="Nem érhető el",n={start:"Csatolás az első adatponthoz",end:"Csatolás az utolsó adatponthoz"},o="Üres adatmező(k) és/vagy szűrők kombinációja miatt nincs megjeleníthető adat.";var m={statistics:a,defaultTitle:"Diagram",countSeries:"Számsorozat",xAxis:"X tengely",notAvailable:"Nem érhető el",timeAggregationTypes:n,noDataMessage:o};export default m;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}