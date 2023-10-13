/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Médio",median:"Mediana",sum:"Soma",discretePercentitle:"Percentil discreto",minimum:"Mínimo",maximum:"Máximo",variance:"Variância",count:"Contagem",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sem agregação"},a="Gráfico",i="Séries de contagem",o="Eixo X",t="Não Disponível",s={start:"Ajustar ao primeiro ponto de dados",end:"Ajustar ao útimo ponto de dados"},n="Nenhum dado está disponível para exibição devido aos campos de dados vazios e/ou combinação de filtros.";var d={statistics:e,defaultTitle:"Gráfico",countSeries:"Séries de contagem",xAxis:"Eixo X",notAvailable:"Não Disponível",timeAggregationTypes:s,noDataMessage:n};export default d;export{i as countSeries,a as defaultTitle,n as noDataMessage,t as notAvailable,e as statistics,s as timeAggregationTypes,o as xAxis}