/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e="Ett fel uppstod när diagrammet lästes in.",a="Det finns totalt ${ elementCount } staplar i detta diagram. Stapeldiagram med en serie är begränsade till ${ totalLimit } staplar. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.",t="Stapeldiagram med två serier är begränsade till ${ totalLimit } staplar eller ${ seriesLimit } staplar per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.",r="Stapeldiagram med tre eller fler serier är begränsade till ${ totalLimit } staplar eller ${ seriesLimit } staplar per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.",i="Det uppstod ett fel när diagrammet skapades.",n="Det går inte att tillämpa loggomvandling på negativa värden eller nollvärden.",l="Det går inte att tillämpa kvadratrotomvandling på negativa värden.",s="Ett fel uppstod när lagret lästes in. URL = ${ url }. Portalobjekt-ID = ${ portalItemId }.",d="${ dataPath } måste vara unik. Serien som heter ${ seriesName } har ett ID (${ seriesID }) som redan används av en annan serie.",o="${ dataPath } kan inte utföra icke-tidsmässig aggregering på ett icke-numeriskt fält.",m="${ dataPath } saknar egenskapen ${ missingProperty }.",g="${ dataPath } får inte vara kortare än ${ limit } tecken.",u="${ dataPath } får inte ha färre än ${ limit } objekt.",v="${ dataPath } får inte ha fler än ${ limit } objekt.",p="${ dataPath } måste ha minst ett tecken som inte är ett blanksteg.",k="${ dataPath } får inte innehålla ${ additionalProperty }.",f="${ dataPath } måste vara lika med ett av dessa tillåtna värden: ${ allowedValues }.",h="${ dataPath } måste matcha schemat för någon av dessa: ${ schemaOptions }.",c="Punktdiagram med proportionerliga symboler stöds inte. Standardstorleken för symboler har tillämpats.",C="Det gick inte att läsa indata.",$="Histogram kräver minst två numeriska värden.",L="Förväntad serietyp vid index ${ seriesIndex } är '${ expectedType }' men '${ receivedType }' togs emot istället",S="eller",b="Kontrollera att totalsumman av de valda numeriska fälten returnerar alla positiva värden eller alla negativa värden.",P="Det finns totalt ${ sliceCount } bitar i detta diagram. Cirkeldiagram är begränsade till ${ totalLimit } bitar. Välj ett kategorifält med färre unika värden, lägg till färre numeriska fält eller använd ett filter i dina data.",x="Geoobjektbaserade mätare är begränsade till ${ totalLimit } geoobjekt. Filtrera dina data.",E="Det finns totalt ${ seriesCount } serier och ${ elementCount } datapunkter i detta diagram. Linjediagram är begränsade till ${ seriesLimit } serier och ${ totalLimit } datapunkter. Minska antalet serier och/eller aggregera om eller filtrera dina data.",y="Linjediagram är begränsade till ${ totalLimit } datapunkter. Filtrera eller aggregera om dina data och försök igen.";var D={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Det uppstod ett fel när diagrammet skapades.",negativeValueInDataForLogTransformation:"Det går inte att tillämpa loggomvandling på negativa värden eller nollvärden.",negativeValueInDataForSqrtTransformation:"Det går inte att tillämpa kvadratrotomvandling på negativa värden.",layerLoadFailure:s,duplicateSeriesID:d,nonNumericAggregation:o,requiredProperty:m,minLength:g,minItems:u,maxItems:v,whiteSpacePattern:p,additionalProperty:k,enumValues:f,anyOfValues:h,bubbleChartValidateMsg:c,queryError:"Det gick inte att läsa indata.",histogramEmptyField:"Histogram kräver minst två numeriska värden.",invalidSeriesType:L,or:"eller",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Kontrollera att totalsumman av de valda numeriska fälten returnerar alla positiva värden eller alla negativa värden.",pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:x,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:y};export default D;export{k as additionalProperty,h as anyOfValues,c as bubbleChartValidateMsg,e as defaultError,i as defaultInvalidChart,d as duplicateSeriesID,f as enumValues,x as gaugeCannotExceedLimit,$ as histogramEmptyField,L as invalidSeriesType,s as layerLoadFailure,y as lineChartMarkersCannotExceedLimit,E as lineChartSeriesAndMarkersCannotExceedLimit,v as maxItems,u as minItems,g as minLength,n as negativeValueInDataForLogTransformation,l as negativeValueInDataForSqrtTransformation,o as nonNumericAggregation,S as or,b as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,P as pieChartSlicesCannotExceedLimit,C as queryError,m as requiredProperty,r as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,p as whiteSpacePattern}