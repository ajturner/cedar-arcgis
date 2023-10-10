const e="Při načítání grafu došlo k chybě.",t="V tomto grafu je celkem ${ elementCount } sloupců. Pruhové grafy s jednou řadou mohou mít maximálně ${ totalLimit } pruhů. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",o="Pruhové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",a="Pruhové grafy se třemi a více řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",n="Při vytváření grafu došlo k chybě.",i="Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",r="Nelze uplatnit transformaci odmocniny na záporné hodnoty.",s="Při načítání vrstvy došlo k chybě. URL = ${ url }. ID položky portálu = ${ portalItemId }.",m="${ dataPath } musí být jedinečné. Řada s názvem ${ seriesName } má ID (${ seriesID }), které již používá jiná řada.",l="${ dataPath } nemůže provádět jiné seskupení než podle počtu na jiném než numerickém poli.",d="V ${ dataPath } chybí vlastnost s názvem ${ missingProperty }.",u="${ dataPath } nesmí být kratší než ${ limit } znaků.",h="${ dataPath } nesmí obsahovat méně než ${ limit } položek.",v="${ dataPath } nesmí obsahovat více než ${ limit } položek.",p="${ dataPath } musí obsahovat alespoň jeden znak jiný než mezera.",y="${ dataPath } nesmí obsahovat ${ additionalProperty }.",c="${ dataPath } se musí rovnat jedné z těchto povolených hodnot: ${ allowedValues }.",b="${ dataPath } se musí shodovat s jedním z těchto schémat: ${ schemaOptions }.",$="Rozptýlené bodové grafy s proporcionálními symboly nejsou podporovány. Byla použita výchozí velikost symbolu.",j="Vstupní data se nepodařilo přečíst.",g="Histogramy vyžadují alespoň dvě číselné hodnoty.",f="Očekávaný typ řady s indexem ${ seriesIndex } je '${ expectedType }', ale obdrželi jsme '${ receivedType }'",k="nebo",P="Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",z="V tomto grafu je celkem ${ sliceCount } výsečí. Koláčové grafy jsou omezeny na ${ totalLimit } výseče. Vyberte pole Kategorie s menším počtem jedinečných hodnot, přidejte méně číselných polí nebo použijte na data filtr.",L="Měřiče založené na prvcích jsou omezeny na počet ${ totalLimit } prvků. Filtrujte data.",C="V tomto grafu je celkem ${ seriesCount } sérií a ${ elementCount } datových bodů. Liniové grafy jsou limitované na ${ seriesLimit } série a ${ totalLimit } datové body. Snížit počet sérií a/nebo znovu seskupit nebo filtrovat data.",x="Liniové grafy jsou limitované na ${ totalLimit } datové body. Filtrujte nebo znovu agregujte svá data a zkuste to znovu.";var V={defaultError:"Při načítání grafu došlo k chybě.",uniqueSeriesBarCountCannotExceedLimit:t,twoSeriesBarCountCannotExceedLimit:o,threePlusSeriesBarCountCannotExceedLimit:a,defaultInvalidChart:"Při vytváření grafu došlo k chybě.",negativeValueInDataForLogTransformation:"Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",negativeValueInDataForSqrtTransformation:"Nelze uplatnit transformaci odmocniny na záporné hodnoty.",layerLoadFailure:s,duplicateSeriesID:m,nonNumericAggregation:l,requiredProperty:d,minLength:u,minItems:h,maxItems:v,whiteSpacePattern:p,additionalProperty:"${ dataPath } nesmí obsahovat ${ additionalProperty }.",enumValues:c,anyOfValues:b,bubbleChartValidateMsg:$,queryError:j,histogramEmptyField:"Histogramy vyžadují alespoň dvě číselné hodnoty.",invalidSeriesType:f,or:"nebo",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",pieChartSlicesCannotExceedLimit:z,gaugeCannotExceedLimit:L,lineChartSeriesAndMarkersCannotExceedLimit:C,lineChartMarkersCannotExceedLimit:x};

export default V;
export { y as additionalProperty, b as anyOfValues, $ as bubbleChartValidateMsg, e as defaultError, n as defaultInvalidChart, m as duplicateSeriesID, c as enumValues, L as gaugeCannotExceedLimit, g as histogramEmptyField, f as invalidSeriesType, s as layerLoadFailure, x as lineChartMarkersCannotExceedLimit, C as lineChartSeriesAndMarkersCannotExceedLimit, v as maxItems, h as minItems, u as minLength, i as negativeValueInDataForLogTransformation, r as negativeValueInDataForSqrtTransformation, l as nonNumericAggregation, k as or, P as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, z as pieChartSlicesCannotExceedLimit, j as queryError, d as requiredProperty, a as threePlusSeriesBarCountCannotExceedLimit, o as twoSeriesBarCountCannotExceedLimit, t as uniqueSeriesBarCountCannotExceedLimit, p as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.cs-509f93b9-b45c57fa.js.map