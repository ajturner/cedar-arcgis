const a="Došlo je do greške prilikom učitavanja grafika.",e="Ima ukupno ${ elementCount } traka na ovom grafikonu. Trakasti grafikoni sa jednom serijom ograničeni su na ${ totalLimit } trake. Izaberite polje Kategorija sa manje jedinstvenih vrednosti ili primenite filter na svoje podatke.",i="Trakasti grafikoni sa dve grupe su ograničeni na ${ totalLimit } trake ili ${ seriesLimit } trake po grupi. Izaberite polje Kategorija sa manje jedinstvenih vrednosti ili primenite filter na svoje podatke.",t="Trakasti grafikoni sa tri ili više serije ograničeni su na ${ totalLimit } trake, ili ${ seriesLimit } traka po seriji. Izaberite polje Kategorija sa manje jedinstvenih vrednosti ili primenite filter na svoje podatke.",n="Došlo je do greške kod kreiranja grafika.",r="Nije moguće primeniti transformaciju zapisa na negativne ili nulte vrednosti.",o="Nije moguće primeniti transformaiju kvadratnog korena na negativne vrednosti.",s="Došlo je do greške prilikom učitavanja sloja. URL = ${ url }. ID stavke portala = ${ portalItemId }.",d="${ dataPath } mora da bude jedinstven. Serija pod nazivom ${ seriesName } ima ID (${ seriesID }) koji se već koristi od strane drugih serija.",m="${ dataPath } ne može da obavi agregaciju bez brojanja na numeričkom polju.",l="${ dataPath } nedostaje svojstvo pod nazivom ${ missingProperty }.",u="${ dataPath } ne sme da bude kraće od ${ limit } karaktera.",j="${ dataPath } ne sme da ima manje od ${ limit } stavki.",v="${ dataPath } ne sme da ima više od ${ limit } stavki.",k="${ dataPath } mora da ima bar jedan karakter koji nije prazan.",p="${ dataPath } ne sme da ima ${ additionalProperty }.",g="${ dataPath } mora da bude jednako jednoj od ovih dozvoljenih vrednosti: ${ allowedValues }.",h="${ dataPath } mora da odgovara šemi jednog od ovih: ${ schemaOptions }.",$="Nacrti šablona sa proporcionalnim simbolima nisu podržani. Podrazumevana veličina šablona je primenjena.",C="Neuspešno čitanje ulaznih podataka.",c="Histogrami zahtevaju najmanje dve numeričke vrednosti.",f="Očekivani tip serije za indeks ${ seriesIndex } je '${ expectedType }' ali je '${ receivedType }' dobijeno umesto toga",L="ili",b="Uverite se da zbir izabranih numeričkih polja vraća sve pozitivne ili negativne vrednosti.",P="Ima ukupno ${ sliceCount } isečaka na ovom grafikonu. Kružni grafikoni su ograničeni na ${ totalLimit } isečaka. Izaberite polje kategorije sa manje jedinstvenih vrednosti, dodajte manje numeričkih polja ili primenite filter na svoje podatke.",I="Merači zasnovani na geoobjekte ograničeni su na ${ totalLimit } geoobjekte. Filtrirajte svoje podatke.",z="Ukupno ima ${ seriesCount } serija i ${ elementCount } tačaka podataka u ovom grafikonu. Linijski grafikoni su ograničeni na ${ seriesLimit } serije ${ totalLimit } tačke podataka. Smanjite brojeve serija i/ili pregrupišite ili filtrirajte svoje podatke.",S="Linijski grafikoni su pgraničeni na ${ totalLimit } tačke podataka. Filtrirajte ili ponovo grupišite podatke i pokušajte ponovo.";var x={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Došlo je do greške kod kreiranja grafika.",negativeValueInDataForLogTransformation:"Nije moguće primeniti transformaciju zapisa na negativne ili nulte vrednosti.",negativeValueInDataForSqrtTransformation:"Nije moguće primeniti transformaiju kvadratnog korena na negativne vrednosti.",layerLoadFailure:s,duplicateSeriesID:d,nonNumericAggregation:m,requiredProperty:l,minLength:u,minItems:j,maxItems:v,whiteSpacePattern:k,additionalProperty:"${ dataPath } ne sme da ima ${ additionalProperty }.",enumValues:g,anyOfValues:h,bubbleChartValidateMsg:$,queryError:C,histogramEmptyField:"Histogrami zahtevaju najmanje dve numeričke vrednosti.",invalidSeriesType:f,or:"ili",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Uverite se da zbir izabranih numeričkih polja vraća sve pozitivne ili negativne vrednosti.",pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:I,lineChartSeriesAndMarkersCannotExceedLimit:z,lineChartMarkersCannotExceedLimit:S};

export default x;
export { p as additionalProperty, h as anyOfValues, $ as bubbleChartValidateMsg, a as defaultError, n as defaultInvalidChart, d as duplicateSeriesID, g as enumValues, I as gaugeCannotExceedLimit, c as histogramEmptyField, f as invalidSeriesType, s as layerLoadFailure, S as lineChartMarkersCannotExceedLimit, z as lineChartSeriesAndMarkersCannotExceedLimit, v as maxItems, j as minItems, u as minLength, r as negativeValueInDataForLogTransformation, o as negativeValueInDataForSqrtTransformation, m as nonNumericAggregation, L as or, b as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices, P as pieChartSlicesCannotExceedLimit, C as queryError, l as requiredProperty, t as threePlusSeriesBarCountCannotExceedLimit, i as twoSeriesBarCountCannotExceedLimit, e as uniqueSeriesBarCountCannotExceedLimit, k as whiteSpacePattern };

//# sourceMappingURL=errors.t9n.sr-d529e4c5-b3183e94-6ad22738.js.map