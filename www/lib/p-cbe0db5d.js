/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e="Si è verificato un errore durante il caricamento del grafico.",i="Il numero totale di barre in questo grafico è ${ elementCount }. I grafici a barre con una serie sono limitati a ${ totalLimit } barre. Scegli un campo Categoria con meno valori unici o applica un filtro ai tuoi dati.",a="I grafici a barre con due serie sono limitati a ${ totalLimit } barre o ${ seriesLimit } barre per serie. Scegli un campo Categoria con meno valori unici o applica un filtro ai tuoi dati.",t="I grafici a barre con tre o più serie sono limitati a ${ totalLimit } barre o ${ seriesLimit } barre per serie. Scegli un campo Categoria con meno valori unici o applica un filtro ai tuoi dati.",r="Errore durante la creazione del grafico.",o="Impossibile applicare la trasformazione di log su valori negativi o zero.",n="Impossibile applicare la trasformazione di radice quadrata su valori negativi.",s="Si è verificato un errore durante il caricamento del layer. URL = ${ url }. ID elemento del portale = ${ portalItemId }.",l="${ dataPath } deve essere univoco. La serie denominata ${ seriesName } ha un ID (${ seriesID }) che è già utilizzato da un'altra serie.",u="${ dataPath } non può effettuare l'aggregazione senza conteggio su un campo non numerico.",d="A ${ dataPath } manca una proprietà denominata ${ missingProperty }.",m="${ dataPath } non deve essere più corto di ${ limit } caratteri.",c="${ dataPath } non deve contenere meno di ${ limit } elementi.",p="${ dataPath } non deve contenere più di ${ limit } elementi.",g="${ dataPath } deve contenere almeno un carattere.",v="${ dataPath } non deve contenere ${ additionalProperty }.",f="${ dataPath } deve essere uguale a uno di questi valori consentiti: ${ allowedValues }.",C="${ dataPath } deve corrispondere allo schema di uno di questi‎: ${ schemaOptions }.",h="I grafici a dispersione con simboli proporzionali non sono supportati. Sono state applicate delle dimensioni simbolo predefinite.",$="Impossibile leggere i dati di input.",I="Gli istogrammi richiedono almeno due valori numerici.",L="Il tipo di serie atteso all'indice ${ seriesIndex } è '${ expectedType }' ma invece è stato ricevuto '${ receivedType }'",S="oppure",b="Assicurarsi che la somma totale dei campi numerici selezionati restituisca tutti valori positivi o tutti valori negativi.",P="Il numero totale di fette in questo grafico è ${ sliceCount }. I grafici a torta sono limitati a ${ totalLimit } fette. Scegliere un campo Categoria con meno valori unici, aggiungere un numero minore di campi Numerici o applicare un filtro ai dati.",x="Gli indicatori basati sulle feature sono limitati a ${ totalLimit } feature. Filtra i dati.",E="Ci sono un totale di ${ seriesCount } serie e ${ elementCount } punti dati in questo grafico. I grafici a linee sono limitati a ${ seriesLimit } serie e ${ totalLimit } punti dati. Ridurre il numero di serie e/o aggregare di nuovo o filtrare i dati.",y="I grafici a linee sono limitati a ${ totalLimit } punti dati. Filtrare o riaggregare i dati e riprovare.";var q={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Errore durante la creazione del grafico.",negativeValueInDataForLogTransformation:"Impossibile applicare la trasformazione di log su valori negativi o zero.",negativeValueInDataForSqrtTransformation:"Impossibile applicare la trasformazione di radice quadrata su valori negativi.",layerLoadFailure:s,duplicateSeriesID:l,nonNumericAggregation:u,requiredProperty:d,minLength:m,minItems:c,maxItems:p,whiteSpacePattern:"${ dataPath } deve contenere almeno un carattere.",additionalProperty:v,enumValues:f,anyOfValues:C,bubbleChartValidateMsg:h,queryError:$,histogramEmptyField:"Gli istogrammi richiedono almeno due valori numerici.",invalidSeriesType:L,or:"oppure",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Assicurarsi che la somma totale dei campi numerici selezionati restituisca tutti valori positivi o tutti valori negativi.",pieChartSlicesCannotExceedLimit:P,gaugeCannotExceedLimit:x,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:y};export default q;export{v as additionalProperty,C as anyOfValues,h as bubbleChartValidateMsg,e as defaultError,r as defaultInvalidChart,l as duplicateSeriesID,f as enumValues,x as gaugeCannotExceedLimit,I as histogramEmptyField,L as invalidSeriesType,s as layerLoadFailure,y as lineChartMarkersCannotExceedLimit,E as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,c as minItems,m as minLength,o as negativeValueInDataForLogTransformation,n as negativeValueInDataForSqrtTransformation,u as nonNumericAggregation,S as or,b as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,P as pieChartSlicesCannotExceedLimit,$ as queryError,d as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,a as twoSeriesBarCountCannotExceedLimit,i as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern}