/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"Gemiddelde",median:"Mediaan",sum:"Som",discretePercentitle:"Discreet percentiel",minimum:"Minimum",maximum:"Maximum",variance:"Variantie",count:"Aantal",aggregation:"${ statistics } van ${ fieldName }",noAggregation:"Geen aggregatie"},a="Diagram",t="Tellingserie",i="X-as",s="Niet beschikbaar",n={start:"Koppelen met het eerste gegevenspunt",end:"Koppelen met het laatste gegevenspunt"},g="Er zijn gegevens weer te geven vanwege lege gegevensveld(en) en/of combinatie van filters.";var r={statistics:e,defaultTitle:"Diagram",countSeries:"Tellingserie",xAxis:"X-as",notAvailable:"Niet beschikbaar",timeAggregationTypes:n,noDataMessage:g};export default r;export{t as countSeries,a as defaultTitle,g as noDataMessage,s as notAvailable,e as statistics,n as timeAggregationTypes,i as xAxis}