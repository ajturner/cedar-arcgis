const a="Hiba történt a diagram betöltése közben.",e="Összesen ${ elementCount } oszlop van ehhez a diagramhoz. Az egy sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.",t="A két sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat, vagy sorozatonként ${ seriesLimit } oszlopot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.",r="A három vagy több sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat, vagy sorozatonként ${ seriesLimit } oszlopot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.",s="Hiba történt a diagram létrehozása közben.",n="A log transzformáció nem alkalmazható negatív vagy nulla értékre.",i="A négyzetgyök transzformáció nem alkalmazható negatív értékre.",o="Hiba történt a réteg betöltés közben. URL = ${ url }. Portál elemazonosítója = ${ portalItemId }.",l="Egyedinek kell lennie: ${ dataPath } A(z) ${ seriesName } nevű sorozat azonosítóját (${ seriesID }) egy másik sorozat már használja.",z="A(z) ${ dataPath } nem hajthat végre nem megszámlálható összevonást nem numerikus mezőn.",m="A(z) ${ dataPath } esetében hiányzik a(z) ${ missingProperty } nevű tulajdonság.",k="A(z) ${ dataPath } hossza legalább ${ limit } karakter kell legyen.",g="A(z) ${ dataPath } elemeinek száma legalább ${ limit } kell legyen.",d="A(z) ${ dataPath } elemeinek száma legfeljebb ${ limit } lehet.",v="A következőnek legalább egy nem-whitespace karaktert kell tartalmaznia: ${ dataPath }",u="${ dataPath } nem rendelkezhet ezzel: ${ additionalProperty }.",h="${ dataPath } értékének egyeznie kell a következő megengedett értékek egyikével: ${ allowedValues }.",y="A(z) ${ dataPath } értékének egyeznie kell a következők egyikének sémájával: ${ schemaOptions }.",b="A méretarányos szimbólummal rendelkező szórásdiagramok nem támogatottak. Az alapértelmezett szimbólum méret lesz alkalmazva.",p="Nem sikerült beolvasni a bemeneti adatokat.",C="A hisztogramoknak legalább két számértékre van szükségük.",$="A várt sorozattípus a(z) ${ seriesIndex } indexnél '${ expectedType }', de helyette '${ receivedType }' érkezett.",c="vagy",L="Győződjön meg arról, hogy a kiválasztott numerikus mező(k) összege pozitív vagy negatív értéket adjanak vissza.",A="Ez a diagram összesen ${ sliceCount } szeletet tartalmaz. A kördiagramok legfeljebb ${ totalLimit } szeletet tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, adjon hozzá kevesedd numerikus mezőt, vagy szűrje az adatokat.",j="A vektoros elem alapú mérőeszközök ${ totalLimit } vektoros elemre korlátozódnak. Szűrje az adatokat",E="Ebben a diagramban összesen ${ seriesCount } sorozat és ${ elementCount } adatpont van. A vonaldiagramok ${ seriesLimit } sorozatra és ${ totalLimit } adatpontra korlátozódnak. Csökkentse a sorozatok számát és/vagy csoportosítsa újra vagy szűrje az adatokat.",P="A vonaldiagramok ${ totalLimit } adatpontra korlátozódnak. Szűrje, vagy vonja össze újra az adatokat, majd próbálja újra.";var f={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Hiba történt a diagram létrehozása közben.",negativeValueInDataForLogTransformation:"A log transzformáció nem alkalmazható negatív vagy nulla értékre.",negativeValueInDataForSqrtTransformation:"A négyzetgyök transzformáció nem alkalmazható negatív értékre.",layerLoadFailure:o,duplicateSeriesID:l,nonNumericAggregation:z,requiredProperty:m,minLength:k,minItems:g,maxItems:d,whiteSpacePattern:v,additionalProperty:u,enumValues:h,anyOfValues:y,bubbleChartValidateMsg:b,queryError:p,histogramEmptyField:"A hisztogramoknak legalább két számértékre van szükségük.",invalidSeriesType:$,or:"vagy",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Győződjön meg arról, hogy a kiválasztott numerikus mező(k) összege pozitív vagy negatív értéket adjanak vissza.",pieChartSlicesCannotExceedLimit:A,gaugeCannotExceedLimit:j,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:P};

export default f;
export { u as additionalProperty, y as anyOfValues, b as bubbleChartValidateMsg, a as defaultError, s as defaultInvalidChart, l as duplicateSeriesID, h as enumValues, j as gaugeCannotExceedLimit, C as histogramEmptyField, $ as invalidSeriesType, o as layerLoadFailure, P as lineChartMarkersCannotExceedLimit, E as lineChartSeriesAndMarkersCannotExceedLimit, d as maxItems, g as minItems, k as minLength, n as negativeValueInDataForLogTransformation, i as negativeValueInDataForSqrtTransformation, z as nonNumericAggregation, c as or, L as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, A as pieChartSlicesCannotExceedLimit, p as queryError, m as requiredProperty, r as threePlusSeriesBarCountCannotExceedLimit, t as twoSeriesBarCountCannotExceedLimit, e as uniqueSeriesBarCountCannotExceedLimit, v as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.hu-56cc7097-1d5a4efc-e617730f.js.map