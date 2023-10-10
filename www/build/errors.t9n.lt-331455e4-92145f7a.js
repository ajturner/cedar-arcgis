const i="Įkeliant diagramą įvyko klaida.",a="Šioje diagramoje iš viso yra ${ elementCount } stulpeliai (-ių). Juostinės diagramos su 1 serija apribotos iki ${ totalLimit } juostų. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",t="Juostinės diagramos su 2 serijomis apribotos iki ${ totalLimit } juostų arba ${ seriesLimit } juostų vienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",e="Juostinės diagramos su 3 arba daugiau serijų apribotos iki ${ totalLimit } juostų arba ${ seriesLimit } juostų vienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",s="Kuriant diagramą įvyko klaida.",r="Negalima pritaikyti log. transformacijos neigiamoms arba nulinėms reikšmėms.",o="Negalima pritaikyti kvadratinės šaknies transformacijos neigiamoms reikšmėms.",n="Įkeliant sluoksnį įvyko klaida. URL = ${ url }. Portalo elemento ID = ${ portalItemId }.",m="${ dataPath } turi būti unikalus. Serijos, kurios pavadinimas ${ seriesName }, ID (${ seriesID }) jau naudojamas kitai serijai.",u="${ dataPath } negali atikti neskaičiavimo agregavimo ne skaičių lauke.",k="${ dataPath } trūksta savybės pavadinimu ${ missingProperty }.",l="${ dataPath } negali būti trumpesnis negu ${ limit } simb.",d="${ dataPath } negali turėti mažiau negu ${ limit } elementų.",g="${ dataPath } negali turėti daugiau negu ${ limit } elementų.",y="${ dataPath } turi sudaryti bent vienas simbolis, kuris nėra tarpas.",v="${ dataPath } negali sudaryti ${ additionalProperty }.",p="${ dataPath } turi būti lygus vienai iš šių leidžiamų reikšmių: ${ allowedValues }.",$="${ dataPath } turi sutapti su viena iš šių schemų: ${ schemaOptions }.",b="Sklaidos diagramos su proporciniais simboliais nėra palaikomos. Pritaikytas numatytasis simbolių dydis.",j="Nepavyko nuskaityti įvesties duomenų.",C="Histogramoms reikalingos bent dvi skaitinės vertės.",P="Numatytas serijos tipas indeksui ${ seriesIndex } yra ${ expectedType }, bet vietoj to gauta ${ receivedType }",c="arba",h="Užtikrinkite, kad pasirinkto (-ų) skaitinio (-ų) lauko (-ų) bendra suma pateikia visas teigiamas reikšmes arba visas neigiamas reikšmes.",L="Šioje diagramoje iš viso yra ${ sliceCount } skiltys (-ių). Skritulinėms diagramoms taikomas ${ totalLimit } skilčių limitas. Pasirinkite Category lauką su mažiau unikalių reikšmių, pridėkite mažiau skaitinių laukų arba pritaikykite filtrą savo duomenims.",f="Elementais pagrįsti matuokliai gali naudoti ${ totalLimit } elementus (-ų). Filtruokite duomenis.",S="Šioje diagramoje iš viso yra ${ seriesCount } serijos (-ų) ir ${ elementCount } duomenų taškai (-ų). Linijinių diagramų riba yra ${ seriesLimit } serijos (-ų) ir ${ totalLimit } duomenų taškai (-ų). Sumažinkite serijų skaičių ir (arba) iš naujo agreguokite arba filtruokite savo duomenis.",x="Linijinių diagramų riba yra ${ totalLimit } duomanų taškai (-ų). Filtruokite arba iš naujo agreguokite savo duomenis, tada bandykite dar kartą.";var I={defaultError:"Įkeliant diagramą įvyko klaida.",uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:e,defaultInvalidChart:"Kuriant diagramą įvyko klaida.",negativeValueInDataForLogTransformation:"Negalima pritaikyti log. transformacijos neigiamoms arba nulinėms reikšmėms.",negativeValueInDataForSqrtTransformation:"Negalima pritaikyti kvadratinės šaknies transformacijos neigiamoms reikšmėms.",layerLoadFailure:n,duplicateSeriesID:m,nonNumericAggregation:u,requiredProperty:k,minLength:l,minItems:d,maxItems:g,whiteSpacePattern:y,additionalProperty:"${ dataPath } negali sudaryti ${ additionalProperty }.",enumValues:p,anyOfValues:$,bubbleChartValidateMsg:b,queryError:j,histogramEmptyField:"Histogramoms reikalingos bent dvi skaitinės vertės.",invalidSeriesType:P,or:"arba",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Užtikrinkite, kad pasirinkto (-ų) skaitinio (-ų) lauko (-ų) bendra suma pateikia visas teigiamas reikšmes arba visas neigiamas reikšmes.",pieChartSlicesCannotExceedLimit:L,gaugeCannotExceedLimit:f,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:x};

export default I;
export { v as additionalProperty, $ as anyOfValues, b as bubbleChartValidateMsg, i as defaultError, s as defaultInvalidChart, m as duplicateSeriesID, p as enumValues, f as gaugeCannotExceedLimit, C as histogramEmptyField, P as invalidSeriesType, n as layerLoadFailure, x as lineChartMarkersCannotExceedLimit, S as lineChartSeriesAndMarkersCannotExceedLimit, g as maxItems, d as minItems, l as minLength, r as negativeValueInDataForLogTransformation, o as negativeValueInDataForSqrtTransformation, u as nonNumericAggregation, c as or, h as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, L as pieChartSlicesCannotExceedLimit, j as queryError, k as requiredProperty, e as threePlusSeriesBarCountCannotExceedLimit, t as twoSeriesBarCountCannotExceedLimit, a as uniqueSeriesBarCountCannotExceedLimit, y as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.lt-331455e4-92145f7a.js.map