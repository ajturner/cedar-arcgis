/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Rata-rata",median:"Median",sum:"Sum",discretePercentitle:"Persentil diskrit",minimum:"Minimal",maximum:"Maksimal",variance:"Varian",count:"Count",aggregation:"${ statistics } dari ${ fieldName }",noAggregation:"Tidak ada agregasi"},i="Diagram",t="Jumlah Rangkaian",e="Sumbu X",s="Tidak Tersedia",n={start:"Posisikan ke titik data pertama",end:"Posisikan ke titik data terakhir"},r="Tidak ada data yang tersedia untuk ditampilkan karena kolom data kosong dan/atau kombinasi filter.";var d={statistics:a,defaultTitle:"Diagram",countSeries:"Jumlah Rangkaian",xAxis:"Sumbu X",notAvailable:"Tidak Tersedia",timeAggregationTypes:n,noDataMessage:r};export default d;export{t as countSeries,i as defaultTitle,r as noDataMessage,s as notAvailable,a as statistics,n as timeAggregationTypes,e as xAxis}