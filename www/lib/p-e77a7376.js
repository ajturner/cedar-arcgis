/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Média",median:"Mediana",sum:"Soma",discretePercentitle:"Percentil discreto",minimum:"Mínimo",maximum:"Máximo",variance:"Variação",count:"Contagem",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sem agregação"},a="Gráfico",i="Séries de Contagem",o="Eixo X",s="Não disponível",t={start:"Ajustar ao primeiro ponto de dados",end:"Ajustar ao último ponto de dados"},n="Não existem dados disponíveis para exibição devido a campos de dados vazios e/ou à combinação de filtros.";var d={statistics:e,defaultTitle:"Gráfico",countSeries:"Séries de Contagem",xAxis:"Eixo X",notAvailable:"Não disponível",timeAggregationTypes:t,noDataMessage:n};export default d;export{i as countSeries,a as defaultTitle,n as noDataMessage,s as notAvailable,e as statistics,t as timeAggregationTypes,o as xAxis}