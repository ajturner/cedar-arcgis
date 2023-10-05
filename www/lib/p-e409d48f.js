/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"ממוצע",median:"חציון",sum:"סכום",discretePercentitle:"אחוזונים בנפרד",minimum:"מינימום",maximum:"מקסימום",variance:"שונות",count:"מונה",aggregation:"${ statistics } מתוך ${ fieldName }",noAggregation:"ללא צבירה"},e="תרשים",t="ספירה בסדרה",s="ציר X",i="לא זמין",n={start:"הצמד לנקודת נתונים ראשונה",end:"הצמד לנקודת נתונים אחרונה"},o="אין נתונים זמינים להצגה עקב שדה/ות נתונים ריקים ו/או שילוב של מסננים.";var g={statistics:a,defaultTitle:"תרשים",countSeries:"ספירה בסדרה",xAxis:"ציר X",notAvailable:"לא זמין",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}