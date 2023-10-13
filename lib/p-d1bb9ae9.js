/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"Ortalama",median:"Medyan",sum:"Toplam",discretePercentitle:"Ayrık yüzdelik",minimum:"Minimum",maximum:"Maksimum",variance:"Varyans",count:"Sayım",aggregation:"${ statistics } / ${ fieldName }",noAggregation:"Kümeleme yok"},a="Grafik",i="Serileri Say",t="X Ekseni",n="Kullanılabilir Değil",s={start:"İlk veri noktasına yerleştir",end:"Son veri noktasına yerleştir"},l="Boş veri alanları ve/veya filtre kombinasyonu nedeniyle görüntülenecek veri bulunmuyor.";var r={statistics:e,defaultTitle:"Grafik",countSeries:"Serileri Say",xAxis:"X Ekseni",notAvailable:"Kullanılabilir Değil",timeAggregationTypes:s,noDataMessage:l};export default r;export{i as countSeries,a as defaultTitle,l as noDataMessage,n as notAvailable,e as statistics,s as timeAggregationTypes,t as xAxis}