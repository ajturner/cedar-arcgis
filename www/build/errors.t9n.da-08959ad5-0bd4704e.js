const e="Der opstod en fejl under indlæsning af diagrammet.",r="Der er i alt ${ elementCount } bjælker i dette diagram. Søjlediagrammer med en serie er begrænset til ${ totalLimit } søjler. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.",t="Søjlediagrammer med to serier er begrænset til ${ totalLimit } søjler eller ${ seriesLimit } søjler pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.",a="Søjlediagrammer med tre eller flere serier er begrænset til ${ totalLimit } søjler eller ${ seriesLimit } søjler pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.",i="Der opstod en fejl under oprettelsen af diagrammet.",n="Kan ikke anvende log-transformation på negative værdier eller nulværdier.",l="Kan ikke anvende kvadratrod-transformation på negative værdier.",d="Der opstod en fejl under indlæsning af laget. URL = ${ url }. Portalelement-id = ${ portalItemId }.",s="${ dataPath } skal være entydig. Serien med navnet ${ seriesName } har et id (${ seriesID }), der allerede bruges i en anden serie.",m="${ dataPath } kan ikke udføre ikke-antal-aggregering på ikke-numeriske felter.",o="${ dataPath } mangler en egenskab med navnet ${ missingProperty }.",g="${ dataPath } skal ikke være kortere end ${ limit } tegn.",k="${ dataPath } må ikke have færre end ${ limit } elementer.",u="${ dataPath } må ikke have flere end ${ limit } elementer.",v="${ dataPath } skal have mindst et tegn, der ikke er et mellemrumstegn.",f="${ dataPath } må ikke have ${ additionalProperty }.",p="${ dataPath } skal være lig med en af disse tilladte værdier: ${ allowedValues }.",$="${ dataPath } skal matche skemaet fra en af disse: ${ schemaOptions }.",h="Punktdiagrammer med proportionale symboler understøttes ikke. Der er blevet anvendt standardstørrelse på symboler.",b="Kunne ikke læse inputdata.",C="Histogrammer kræver mindst to numeriske værdier.",L="Den forventede serietype ved indekset ${ seriesIndex } er '${ expectedType }', men '${ receivedType }' blev modtaget i stedet for",P="eller",c="Sørg for, at den samlede sum af det eller de valgte numeriske felter returnerer alle positive værdier eller alle negative værdier.",j="Der er i alt ${ sliceCount } udsnit i dette diagram. Cirkeldiagrammer er begrænset til ${ totalLimit } udsnit. Vælg et Kategorifelt med færre unikke værdier, tilføj færre numeriske felter eller brug et filter til dine data.",y="Objektbaserede målere er begrænset til ${ totalLimit }-objekter. Filtrer dine data",S="Der er i alt ${ seriesCount } serier og ${ elementCount } datapunkter i dette diagram. Kurvediagrammer er begrænset til ${ seriesLimit } serier og ${ totalLimit } datapunkter. Reducer antallet af serier og/eller aggreger dine data igen eller filtrer dem.",D="Kurvediagrammer er begrænset til ${ totalLimit } datapunkter. Filtrér eller aggregér dine data igen, og prøv igen.";var x={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:a,defaultInvalidChart:"Der opstod en fejl under oprettelsen af diagrammet.",negativeValueInDataForLogTransformation:"Kan ikke anvende log-transformation på negative værdier eller nulværdier.",negativeValueInDataForSqrtTransformation:"Kan ikke anvende kvadratrod-transformation på negative værdier.",layerLoadFailure:d,duplicateSeriesID:s,nonNumericAggregation:m,requiredProperty:o,minLength:g,minItems:k,maxItems:u,whiteSpacePattern:v,additionalProperty:"${ dataPath } må ikke have ${ additionalProperty }.",enumValues:p,anyOfValues:$,bubbleChartValidateMsg:h,queryError:"Kunne ikke læse inputdata.",histogramEmptyField:"Histogrammer kræver mindst to numeriske værdier.",invalidSeriesType:L,or:"eller",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Sørg for, at den samlede sum af det eller de valgte numeriske felter returnerer alle positive værdier eller alle negative værdier.",pieChartSlicesCannotExceedLimit:j,gaugeCannotExceedLimit:y,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:D};

export default x;
export { f as additionalProperty, $ as anyOfValues, h as bubbleChartValidateMsg, e as defaultError, i as defaultInvalidChart, s as duplicateSeriesID, p as enumValues, y as gaugeCannotExceedLimit, C as histogramEmptyField, L as invalidSeriesType, d as layerLoadFailure, D as lineChartMarkersCannotExceedLimit, S as lineChartSeriesAndMarkersCannotExceedLimit, u as maxItems, k as minItems, g as minLength, n as negativeValueInDataForLogTransformation, l as negativeValueInDataForSqrtTransformation, m as nonNumericAggregation, P as or, c as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, j as pieChartSlicesCannotExceedLimit, b as queryError, o as requiredProperty, a as threePlusSeriesBarCountCannotExceedLimit, t as twoSeriesBarCountCannotExceedLimit, r as uniqueSeriesBarCountCannotExceedLimit, v as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.da-08959ad5-0bd4704e.js.map