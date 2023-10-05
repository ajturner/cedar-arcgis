/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Keskmine",median:"Keskmine",sum:"Summa",discretePercentitle:"Diskreetne protsentiil",minimum:"Miinimum",maximum:"Maksimum",variance:"Dispersioon",count:"Kogus",aggregation:"${ statistics } /${ fieldName }",noAggregation:"Agregeerimist pole"},e="Diagramm",i="Sarjade arv",t="X-telg",s="Pole kättesaadav",m={start:"Haagi esimesse andmepunkti",end:"Haagi viimasesse andmepunkti"},n="Tühja(de) andmevälja(de) ja/või filtrite kombinatsiooni tõttu pole kuvamiseks andmeid saadaval.";var o={statistics:a,defaultTitle:"Diagramm",countSeries:"Sarjade arv",xAxis:"X-telg",notAvailable:"Pole kättesaadav",timeAggregationTypes:m,noDataMessage:n};export default o;export{i as countSeries,e as defaultTitle,n as noDataMessage,s as notAvailable,a as statistics,m as timeAggregationTypes,t as xAxis}