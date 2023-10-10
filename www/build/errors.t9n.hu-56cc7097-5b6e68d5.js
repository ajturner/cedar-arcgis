const e="Hiba történt a diagram betöltése közben.",a="Összesen ${ elementCount } oszlop van ehhez a diagramhoz. Az egy sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.",t="A két sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat, vagy sorozatonként ${ seriesLimit } oszlopot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.",r="A három vagy több sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat, vagy sorozatonként ${ seriesLimit } oszlopot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.",l="Hiba történt a diagram létrehozása közben.",o="A log transzformáció nem alkalmazható negatív vagy nulla értékre.",n="A négyzetgyök transzformáció nem alkalmazható negatív értékre.",s="Hiba történt a réteg betöltés közben. URL = ${ url }. Portál elemazonosítója = ${ portalItemId }.",i="Egyedinek kell lennie: ${ dataPath } A(z) ${ seriesName } nevű sorozat azonosítóját (${ seriesID }) egy másik sorozat már használja.",z="A(z) ${ dataPath } nem hajthat végre nem megszámlálható összevonást nem numerikus mezőn.",k="A(z) ${ dataPath } esetében hiányzik a(z) ${ missingProperty } nevű tulajdonság.",m="A(z) ${ dataPath } hossza legalább ${ limit } karakter kell legyen.",g="A(z) ${ dataPath } elemeinek száma legalább ${ limit } kell legyen.",d="A(z) ${ dataPath } elemeinek száma legfeljebb ${ limit } lehet.",v="A következőnek legalább egy nem-whitespace karaktert kell tartalmaznia: ${ dataPath }",b="${ dataPath } nem rendelkezhet ezzel: ${ additionalProperty }.",y="${ dataPath } értékének egyeznie kell a következő megengedett értékek egyikével: ${ allowedValues }.",h="A(z) ${ dataPath } értékének egyeznie kell a következők egyikének sémájával: ${ schemaOptions }.",u="A méretarányos szimbólummal rendelkező szórásdiagramok nem támogatottak. Az alapértelmezett szimbólum méret lesz alkalmazva.",$="Nem sikerült beolvasni a bemeneti adatokat.",p="A hisztogramoknak legalább két számértékre van szükségük.",j="A várt sorozattípus a(z) ${ seriesIndex } indexnél '${ expectedType }', de helyette '${ receivedType }' érkezett.",A="vagy",c="Győződjön meg arról, hogy a kiválasztott numerikus mező(k) összege pozitív vagy negatív értéket adjanak vissza.",C="Ez a diagram összesen ${ sliceCount } szeletet tartalmaz. A kördiagramok legfeljebb ${ totalLimit } szeletet tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, adjon hozzá kevesedd numerikus mezőt, vagy szűrje az adatokat.",L="A vektoros elem alapú mérőeszközök ${ totalLimit } vektoros elemre korlátozódnak. Szűrje az adatokat",P="Ebben a diagramban összesen ${ seriesCount } sorozat és ${ elementCount } adatpont van. A vonaldiagramok ${ seriesLimit } sorozatra és ${ totalLimit } adatpontra korlátozódnak. Csökkentse a sorozatok számát és/vagy csoportosítsa újra vagy szűrje az adatokat.",f="A vonaldiagramok ${ totalLimit } adatpontra korlátozódnak. Szűrje, vagy vonja össze újra az adatokat, majd próbálja újra.";var x={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Hiba történt a diagram létrehozása közben.",negativeValueInDataForLogTransformation:"A log transzformáció nem alkalmazható negatív vagy nulla értékre.",negativeValueInDataForSqrtTransformation:"A négyzetgyök transzformáció nem alkalmazható negatív értékre.",layerLoadFailure:s,duplicateSeriesID:i,nonNumericAggregation:z,requiredProperty:k,minLength:m,minItems:g,maxItems:d,whiteSpacePattern:v,additionalProperty:b,enumValues:y,anyOfValues:h,bubbleChartValidateMsg:u,queryError:$,histogramEmptyField:"A hisztogramoknak legalább két számértékre van szükségük.",invalidSeriesType:j,or:"vagy",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Győződjön meg arról, hogy a kiválasztott numerikus mező(k) összege pozitív vagy negatív értéket adjanak vissza.",pieChartSlicesCannotExceedLimit:C,gaugeCannotExceedLimit:L,lineChartSeriesAndMarkersCannotExceedLimit:P,lineChartMarkersCannotExceedLimit:f};

export default x;
export { b as additionalProperty, h as anyOfValues, u as bubbleChartValidateMsg, e as defaultError, l as defaultInvalidChart, i as duplicateSeriesID, y as enumValues, L as gaugeCannotExceedLimit, p as histogramEmptyField, j as invalidSeriesType, s as layerLoadFailure, f as lineChartMarkersCannotExceedLimit, P as lineChartSeriesAndMarkersCannotExceedLimit, d as maxItems, g as minItems, m as minLength, o as negativeValueInDataForLogTransformation, n as negativeValueInDataForSqrtTransformation, z as nonNumericAggregation, A as or, c as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, C as pieChartSlicesCannotExceedLimit, $ as queryError, k as requiredProperty, r as threePlusSeriesBarCountCannotExceedLimit, t as twoSeriesBarCountCannotExceedLimit, a as uniqueSeriesBarCountCannotExceedLimit, v as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.hu-56cc7097-5b6e68d5.js.map