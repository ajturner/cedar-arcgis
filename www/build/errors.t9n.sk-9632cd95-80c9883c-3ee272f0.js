const e="Pri načítavaní grafu sa vyskytla chyba.",a="V tomto grafe je celkom ${ elementCount } pruhov. Pruhové grafy s jednou sériou sú obmedzené na ${ totalLimit } pruhov. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.",t="Stĺpcové grafy s dvoma sériami sú obmedzené na ${ totalLimit } stĺpcov alebo ${ seriesLimit } stĺpcov na sériu. Vyberte pole kategória s menším počtom jedinečných hodnôt alebo na svoje údaje použite filter.",o="Stĺpcové grafy s troma alebo viac sériami sú obmedzené na ${ totalLimit } stĺpcov alebo ${ seriesLimit } stĺpcov na sériu. Vyberte pole kategória s menším počtom jedinečných hodnôt alebo na svoje údaje použite filter.",n="Pri vytváraní grafu sa vyskytla chyba.",i="Nie je možné aplikovať Log transformáciu na záporné alebo nulové hodnoty.",r="Nie je možné aplikovať Square Root transformáciu na záporné hodnoty.",s="Pri načítavaní vrstvy sa vyskytla chyba. URL = ${ url }. ID položky portálu = ${ portalItemId }.",l="${ dataPath } musí byť jedinečný. Séria pomenovaná ${ seriesName } má id (${ seriesID }), ktoré už je používané inou sériou.",m="${ dataPath } nemôže vykonávať agregáciu bez počtov na nečíselnom poli.",d="${ dataPath } chýba vlastnosť s názvom ${ missingProperty }.",v="${ dataPath } musí byť kratší než ${ limit } znakov.",u="${ dataPath } nesmie mať menej než ${ limit } položiek.",p="${ dataPath } nesmie mať viac než ${ limit } položiek.",h="${ dataPath } musí mať aspoň jeden znak bez prázdneho miesta.",y="${ dataPath } nesmie mať ${ additionalProperty }.",c="${ dataPath } musí byť rovné jednej z týchto povolených hodnôt: ${ allowedValues }.",g="${ dataPath } sa musí zhodovať so schémou jednej z týchto: ${ schemaOptions }.",b="Rozptylové diagramy s proporcionálnymi symbolmi nie sú podporované. Bola aplikovaná predvolená veľkosť symbolu.",k="Zlyhanie načítania vstupných údajov.",$="Histogramy vyžadujú aspoň dve numerické hodnoty.",C="Očakávaný typ série pri indexe ${ seriesIndex } je '${ expectedType }', ale namiesto toho bolo prijaté '${ receivedType }'",j="alebo",L="Uistite sa, že súčet vybraných číselných polí vráti všetky hodnoty kladné alebo všetky hodnoty záporné.",f="V tomto grafe je celkom ${ sliceCount } segmentov. Koláčové grafy sú obmedzené na ${ totalLimit } segmentov. Vyberte pole kategórie s menším počtom jedinečných hodnôt, pridajte menej číselných polí alebo použite na vaše dáta filter.",P="Meradlá založené na prvkoch majú limit ${ totalLimit } prvkov. Filtrovať dáta.",z="V tomto grafe sa nachádza celkom ${ seriesCount } sérií a ${ elementCount } dátových bodov. Líniové grafy sú obmedzené na ${ seriesLimit } série a ${ totalLimit } dátové body. Znížte počet sérií a/alebo reagregujte alebo filtrujte vaše dáta.",S="Líniové grafy sú obmedzené na ${ totalLimit } dátových bodov. Filtrujte alebo znova agregujte dáta a skúste to znova.";var x={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"Pri vytváraní grafu sa vyskytla chyba.",negativeValueInDataForLogTransformation:"Nie je možné aplikovať Log transformáciu na záporné alebo nulové hodnoty.",negativeValueInDataForSqrtTransformation:"Nie je možné aplikovať Square Root transformáciu na záporné hodnoty.",layerLoadFailure:s,duplicateSeriesID:l,nonNumericAggregation:m,requiredProperty:d,minLength:v,minItems:u,maxItems:p,whiteSpacePattern:h,additionalProperty:"${ dataPath } nesmie mať ${ additionalProperty }.",enumValues:c,anyOfValues:g,bubbleChartValidateMsg:b,queryError:k,histogramEmptyField:"Histogramy vyžadujú aspoň dve numerické hodnoty.",invalidSeriesType:C,or:"alebo",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Uistite sa, že súčet vybraných číselných polí vráti všetky hodnoty kladné alebo všetky hodnoty záporné.",pieChartSlicesCannotExceedLimit:f,gaugeCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:z,lineChartMarkersCannotExceedLimit:S};

export default x;
export { y as additionalProperty, g as anyOfValues, b as bubbleChartValidateMsg, e as defaultError, n as defaultInvalidChart, l as duplicateSeriesID, c as enumValues, P as gaugeCannotExceedLimit, $ as histogramEmptyField, C as invalidSeriesType, s as layerLoadFailure, S as lineChartMarkersCannotExceedLimit, z as lineChartSeriesAndMarkersCannotExceedLimit, p as maxItems, u as minItems, v as minLength, i as negativeValueInDataForLogTransformation, r as negativeValueInDataForSqrtTransformation, m as nonNumericAggregation, j as or, L as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, f as pieChartSlicesCannotExceedLimit, k as queryError, d as requiredProperty, o as threePlusSeriesBarCountCannotExceedLimit, t as twoSeriesBarCountCannotExceedLimit, a as uniqueSeriesBarCountCannotExceedLimit, h as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.sk-9632cd95-80c9883c-3ee272f0.js.map