/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const e={mean:"ค่าเฉลี่ย",median:"ค่ามัธยฐาน",sum:"รวม",discretePercentitle:"เปอร์เซนไทล์แบบไม่ต่อเนื่อง",minimum:"น้อยสุด",maximum:"สูงสุด",variance:"ความแปรปรวน",count:"นับ",aggregation:"${ statistics } จาก ${ fieldName }",percent:"เปอร์เซ็นต์",noAggregation:"ไม่มีการรวม"},a={mean:"ค่าเฉลี่ย",median:"ค่ามัธยฐาน",stdDev:"แบ่งกลุ่มโดยใช้ค่าเบี่ยงเบนมาตราฐาน",normal:"การกระจายปกติ",trendline:"เทรนด์ไลน์"},t="จาก ${ guideStart } ถึง ${ guideEnd }",i={defaultSliceGroupingLabel:"อื่น ๆ"},n="ไม่สามารถใช้ได้";var s={statistics:e,overlays:a,guideTooltipLabel:"จาก ${ guideStart } ถึง ${ guideEnd }",pieChart:i,notAvailable:"ไม่สามารถใช้ได้"};export default s;export{t as guideTooltipLabel,n as notAvailable,a as overlays,i as pieChart,e as statistics}