/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const i={mean:"Keskiarvo",median:"Mediaani",sum:"Summa",discretePercentitle:"Irrallinen prosenttipiste",minimum:"Vähimmäisarvo",maximum:"Enimmäisarvo",variance:"Varianssi",count:"Määrä",aggregation:"${ statistics }/${ fieldName }",noAggregation:"Ei koostetta"},e="Kaavio",a="Laske sarjat",t="X-akseli",s="Ei käytettävissä",n={start:"Kiinnitä ensimmäiseen aineistopisteeseen",end:"Kiinnitä viimeiseen aineistopisteeseen"},o="Näytettävää aineistoa ei ole tyhjien aineistokenttien tai suodatinyhdistelmien takia.";var r={statistics:i,defaultTitle:"Kaavio",countSeries:"Laske sarjat",xAxis:"X-akseli",notAvailable:"Ei käytettävissä",timeAggregationTypes:n,noDataMessage:o};export default r;export{a as countSeries,e as defaultTitle,o as noDataMessage,s as notAvailable,i as statistics,n as timeAggregationTypes,t as xAxis}