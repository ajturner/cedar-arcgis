/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Średnia",median:"Mediana",sum:"Suma",discretePercentitle:"Percentyl dyskretny",minimum:"Minimum",maximum:"Maksimum",variance:"Odchylenie",count:"Liczba",aggregation:"${ statistics } z ${ fieldName }",noAggregation:"Bez agregacji"},i="Wykres",a="Zlicz serie",t="Oś X",s="Niedostępne",n={start:"Dociągnij do pierwszego punktu danych",end:"Dociągnij do ostatniego punktu danych"},o="Nie są dostępne żadne dane do wyświetlenia z powodu pustych pól danych i/lub kombinacji filtrów.";var c={statistics:e,defaultTitle:"Wykres",countSeries:"Zlicz serie",xAxis:"Oś X",notAvailable:"Niedostępne",timeAggregationTypes:n,noDataMessage:o};export default c;export{a as countSeries,i as defaultTitle,o as noDataMessage,s as notAvailable,e as statistics,n as timeAggregationTypes,t as xAxis}