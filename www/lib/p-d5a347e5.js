/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"ค่าเฉลี่ย",median:"ค่ามัธยฐาน",sum:"รวม",discretePercentitle:"เปอร์เซนไทล์แบบไม่ต่อเนื่อง",minimum:"น้อยสุด",maximum:"สูงสุด",variance:"ความแปรปรวน",count:"นับ",aggregation:"${ statistics } จาก ${ fieldName }",noAggregation:"ไม่มีการรวม"},e="แผนภูมิ",t="นับซีรีส์",s="(แกน x)",i="ไม่สามารถใช้ได้",n={start:"สแน็ปเข้ากับจุดข้อมูลแรก",end:"สแน็ปเข้ากับจุดข้อมูลสุดท้าย"},o="จะไม่สามารถแสดงข้อมูลได้ เนื่องจากฟิลด์ข้อมูลว่างเปล่า และ/หรือการใช้งานตัวกรองร่วมกัน";var g={statistics:a,defaultTitle:"แผนภูมิ",countSeries:"นับซีรีส์",xAxis:"(แกน x)",notAvailable:"ไม่สามารถใช้ได้",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}