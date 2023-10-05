/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Moyenne",median:"Médiane",sum:"Somme",discretePercentitle:"Centile discret",minimum:"Minimum",maximum:"Maximum",variance:"Variance",count:"Total",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Pas d’agrégation"},a="Diagramme",i="Série de nombres",n="Axe X",t="Non disponible",s={start:"Capturer sur le premier point de données",end:"Capturer sur le dernier point de données"},o="Aucune donnée ne peut être affichée en raison de champ(s) de données vide(s) et/ou de la combinaison de filtres.";var r={statistics:e,defaultTitle:"Diagramme",countSeries:"Série de nombres",xAxis:"Axe X",notAvailable:"Non disponible",timeAggregationTypes:s,noDataMessage:o};export default r;export{i as countSeries,a as defaultTitle,o as noDataMessage,t as notAvailable,e as statistics,s as timeAggregationTypes,n as xAxis}