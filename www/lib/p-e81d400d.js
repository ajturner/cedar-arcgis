/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e="Se ha producido un error al cargar el gráfico.",a="Este gráfico tiene un total de ${ elementCount } barras. Los gráficos de barras con una serie están limitados a ${ totalLimit } barras. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",o="Los gráficos de barras con dos series están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",r="Los gráficos de barras con tres series o más están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",s="Se ha producido un error al crear el gráfico.",t="No se puede aplicar una transformación del registro a valores negativos o de cero.",i="No se puede aplicar una transformación de raíz cuadrada a valores negativos.",n="Se ha producido un error al cargar la capa. URL = ${ url }. Id. de elemento de portal = ${ portalItemId }.",d="El elemento ${ dataPath } debe ser único. La serie denominada ${ seriesName } tiene un Id. (${ seriesID }) que ya se utiliza en otra serie.",l="${ dataPath } no puede realizar una agregación no numérica en un campo no numérico.",u="A ${ dataPath } le falta la propiedad denominada ${ missingProperty }.",c="${ dataPath } no debe tener menos de ${ limit } caracteres.",m="${ dataPath } no debe tener menos de ${ limit } elementos.",p="${ dataPath } no debe tener más de ${ limit } elementos.",g="${ dataPath } debe tener al menos un carácter que no sea un espacio en blanco.",v="${ dataPath } no debe tener ${ additionalProperty }",C="${ dataPath } debe ser igual a uno de los siguientes valores permitidos: ${ allowedValues }.",L="${ dataPath } debe coincidir con el esquema de uno de estos: ${ schemaOptions }.",h="No se admiten diagramas de dispersión con símbolos proporcionales. Se ha aplicado el tamaño de símbolo predeterminado.",$="Error al leer los datos de entrada.",f="Los histogramas requieren al menos dos valores numéricos.",b='El tipo de serie esperado en el índice ${ seriesIndex } es "${ expectedType }", pero en su lugar se ha recibido "${ receivedType }"',E="o",S="Asegúrese de que la suma total de los campos numéricos elegidos devuelva valores positivos en su totalidad o valores negativos en su totalidad.",y="Este gráfico tiene un total de ${ sliceCount } fracciones. Los gráficos circulares están limitados a ${ totalLimit } sectores. Elija un campo de categoría con menos valores únicos, agregue menos campos numéricos o aplique un filtro a sus datos.",P="Los calibres basados en entidades se limitan a ${ totalLimit } entidades. Filtre los datos.",x="Hay un total de ${ seriesCount } series y ${ elementCount } puntos de datos en este gráfico. Los gráficos de líneas están limitados a ${ seriesLimit } series y ${ totalLimit } puntos de datos. Reduzca el número de series y/o vuelva a agregar o filtre sus datos.",q="Los gráficos de líneas están limitados a ${ totalLimit } puntos de datos. Filtre o vuelva a agregar los datos e inténtelo otra vez.";var I={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:o,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Se ha producido un error al crear el gráfico.",negativeValueInDataForLogTransformation:"No se puede aplicar una transformación del registro a valores negativos o de cero.",negativeValueInDataForSqrtTransformation:"No se puede aplicar una transformación de raíz cuadrada a valores negativos.",layerLoadFailure:n,duplicateSeriesID:d,nonNumericAggregation:l,requiredProperty:u,minLength:c,minItems:m,maxItems:p,whiteSpacePattern:g,additionalProperty:"${ dataPath } no debe tener ${ additionalProperty }",enumValues:C,anyOfValues:L,bubbleChartValidateMsg:h,queryError:$,histogramEmptyField:"Los histogramas requieren al menos dos valores numéricos.",invalidSeriesType:b,or:"o",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Asegúrese de que la suma total de los campos numéricos elegidos devuelva valores positivos en su totalidad o valores negativos en su totalidad.",pieChartSlicesCannotExceedLimit:y,gaugeCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:x,lineChartMarkersCannotExceedLimit:q};export default I;export{v as additionalProperty,L as anyOfValues,h as bubbleChartValidateMsg,e as defaultError,s as defaultInvalidChart,d as duplicateSeriesID,C as enumValues,P as gaugeCannotExceedLimit,f as histogramEmptyField,b as invalidSeriesType,n as layerLoadFailure,q as lineChartMarkersCannotExceedLimit,x as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,m as minItems,c as minLength,t as negativeValueInDataForLogTransformation,i as negativeValueInDataForSqrtTransformation,l as nonNumericAggregation,E as or,S as pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,y as pieChartSlicesCannotExceedLimit,$ as queryError,u as requiredProperty,r as threePlusSeriesBarCountCannotExceedLimit,o as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern}