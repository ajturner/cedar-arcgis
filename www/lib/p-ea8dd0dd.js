/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"المتوسط",median:"متوسط",sum:"مجموع",discretePercentitle:"النسبة المئوية المنفصلة",minimum:"الحد الأدنى",maximum:"الحد الأقصى",variance:"تنوع",count:"عدد",aggregation:"${ statistics } من ${ fieldName }",noAggregation:"لا يوجد تجميع"},e="الرسم البياني",t="سلسلة العدد",s="محور س",i="غير مرئي",n={start:"انطباق على نقطة البيانات الأولى",end:"انطباق على نقطة البيانات الأخيرة"},o="لا توجد بيانات متاحة للعرض بسبب حقل (حقول) البيانات الفارغة أو مجموعة المرشحات أو كلتيهما.";var g={statistics:a,defaultTitle:"الرسم البياني",countSeries:"سلسلة العدد",xAxis:"محور س",notAvailable:"غير مرئي",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}