/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Mitjana",median:"Mediana",sum:"Suma",discretePercentitle:"Percentil discret",minimum:"Mínim",maximum:"Màxim",variance:"Variància",count:"Recompte",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sense agregació"},a="Gràfic",i="Recompte de sèries",s="Eix X",t="No disponible",n={start:"Ajusta al primer punt de dades",end:"Ajusta a l'últim punt de dades"},d="No hi ha dades disponibles per mostrar a causa de camps de dades buits o de combinacions de filtres.";var o={statistics:e,defaultTitle:"Gràfic",countSeries:"Recompte de sèries",xAxis:"Eix X",notAvailable:"No disponible",timeAggregationTypes:n,noDataMessage:d};export default o;export{i as countSeries,a as defaultTitle,d as noDataMessage,t as notAvailable,e as statistics,n as timeAggregationTypes,s as xAxis}