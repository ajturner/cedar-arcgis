/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const e={mean:"المتوسط",median:"متوسط",sum:"مجموع",discretePercentitle:"النسبة المئوية المنفصلة",minimum:"الحد الأدنى",maximum:"الحد الأقصى",variance:"تنوع",count:"عدد",aggregation:"${ statistics } من ${ fieldName }",percent:"نسبة مئوية",noAggregation:"لا يوجد تجميع"},a={mean:"المتوسط",median:"متوسط",stdDev:"انحراف معياري",normal:"توزيع طبيعي",trendline:"خط الاتجاه"},t="من ${ guideStart } إلى ${ guideEnd }",i={defaultSliceGroupingLabel:"أخرى"},n="غير مرئي";var s={statistics:e,overlays:a,guideTooltipLabel:"من ${ guideStart } إلى ${ guideEnd }",pieChart:i,notAvailable:"غير مرئي"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}