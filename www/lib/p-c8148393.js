/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a="Kaavion lataamisessa tapahtui virhe.",i="Tässä kaaviossa on yhteensä ${ elementCount } palkkia. Palkkikaavioissa, joissa on yksi sarja, voi olla ${ totalLimit } palkkia. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",t="Palkkikaavioissa, joissa on kaksi sarjaa, voi olla ${ totalLimit } palkkia tai ${ seriesLimit } palkkia sarjaa kohti. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",e="Palkkikaavioissa, joissa on vähintään kolme sarjaa, voi olla ${ totalLimit } palkkia tai ${ seriesLimit } palkkia sarjaa kohti. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",s="Kaavion luomisessa tapahtui virhe.",n="Logaritmimuunnosta ei voi käyttää negatiivisiin arvoihin tai nolla-arvoihin.",o="Neliöjuurimuunnosta ei voi käyttää negatiivisiin arvoihin.",r="Karttatason lataamisessa tapahtui virhe. URL = ${ url }. Portaalikohteen tunnus = ${ portalItemId }.",l="Kohteen ${ dataPath } on oltava yksilöllinen. Sarjan ${ seriesName } tunnus (${ seriesID }) on jo toisen sarjan käytössä.",u="${ dataPath } ei saa suorittaa muuta kuin määrän koostamista muussa kuin numerokentässä.",m="Kohteesta ${ dataPath } puuttuu ominaisuus ${ missingProperty }.",k="${ dataPath } ei saa olla alle ${ limit } merkkiä pitkä.",v="Kohteessa ${ dataPath } ei saa olla alle ${ limit } kohdetta.",h="Kohteessa ${ dataPath } ei saa olla yli ${ limit } kohdetta.",d="Kohteessa ${ dataPath } on oltava vähintään yksi muu kuin välimerkki.",p="Kohteessa ${ dataPath } ei saa olla kohdetta ${ additionalProperty }.",y="Kohteen ${ dataPath } tulee olla yhtä suuri kuin jokin näistä sallituista arvoista: ${ allowedValues }.",j="Kohteen ${ dataPath } on vastattava jotakin näistä skeemoista: ${ schemaOptions }.",C="Pistekaavioita, joissa on suhteutettuja symboleja, ei tueta. Symbolin oletuskokoa on käytetty.",$="Lähtöaineiston lukeminen epäonnistui.",g="Histogrammit edellyttävät vähintään kahta numeerista arvoa.",L='Odotettu sarjan tyyppi indeksissä ${ seriesIndex } on "${ expectedType }", mutta sen sijaan vastaanotettiin "${ receivedType }"',c="tai",P="Varmista, että valittujen numerokenttien yhteissumma palauttaa kaikki positiiviset tai kaikki negatiiviset arvot.",S="Tässä kaaviossa on yhteensä ${ sliceCount } sektoria. Ympyräkaavioissa voi olla enintään ${ totalLimit } sektoria. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, lisää vähemmän numerokenttiä tai suodata aineisto.",x="Kohteeseen perustuvat mittarit on rajoitettu ${ totalLimit } kohteeseen. Suodata aineistosi.",E="Tässä kaaviossa on yhteensä ${ seriesCount } sarjaa ja ${ elementCount } aineistopistettä. Viivakaaviot on rajattu ${ seriesLimit } sarjaan ja ${ totalLimit } aineistopisteeseen. Vähennä sarjojen määrää ja/tai koosta aineistosi uudelleen tai suodata se.",V="Viivakaaviot on rajattu ${ totalLimit } aineistopisteeseen. Suodata tai koosta uudelleen aineisto ja yritä uudelleen.";var I={defaultError:"Kaavion lataamisessa tapahtui virhe.",uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:e,defaultInvalidChart:"Kaavion luomisessa tapahtui virhe.",negativeValueInDataForLogTransformation:"Logaritmimuunnosta ei voi käyttää negatiivisiin arvoihin tai nolla-arvoihin.",negativeValueInDataForSqrtTransformation:"Neliöjuurimuunnosta ei voi käyttää negatiivisiin arvoihin.",layerLoadFailure:r,duplicateSeriesID:l,nonNumericAggregation:u,requiredProperty:m,minLength:k,minItems:v,maxItems:h,whiteSpacePattern:d,additionalProperty:p,enumValues:y,anyOfValues:j,bubbleChartValidateMsg:C,queryError:$,histogramEmptyField:g,invalidSeriesType:L,or:"tai",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Varmista, että valittujen numerokenttien yhteissumma palauttaa kaikki positiiviset tai kaikki negatiiviset arvot.",pieChartSlicesCannotExceedLimit:S,gaugeCannotExceedLimit:x,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:V};export default I;export{p as additionalProperty,j as anyOfValues,C as bubbleChartValidateMsg,a as defaultError,s as defaultInvalidChart,l as duplicateSeriesID,y as enumValues,x as gaugeCannotExceedLimit,g as histogramEmptyField,L as invalidSeriesType,r as layerLoadFailure,V as lineChartMarkersCannotExceedLimit,E as lineChartSeriesAndMarkersCannotExceedLimit,h as maxItems,v as minItems,k as minLength,n as negativeValueInDataForLogTransformation,o as negativeValueInDataForSqrtTransformation,u as nonNumericAggregation,c as or,P as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,S as pieChartSlicesCannotExceedLimit,$ as queryError,m as requiredProperty,e as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,i as uniqueSeriesBarCountCannotExceedLimit,d as whiteSpacePattern}