/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const a={mean:"Μέσος όρος",median:"Διάμεσο",sum:"Άθροισμα",discretePercentitle:"Διακριτό ποσοστημόριο",minimum:"Ελάχιστο",maximum:"Μέγιστο",variance:"Διακύμανση",count:"Πλήθος",aggregation:"${ statistics } από ${ fieldName }",noAggregation:"Δεν υπάρχει συνάθροιση"},e="Γράφημα",t="Σειρά μέτρησης",s="Άξονας Χ",i="Μη διαθέσιμο",n={start:"Συνδεθείτε με το πρώτο σημείο δεδομένων",end:"Συνδεθείτε με το τελευταίο σημείο δεδομένων"},o="Δεν υπάρχουν διαθέσιμα δεδομένα για εμφάνιση λόγω κενών πεδίων δεδομένων ή/και συνδυασμού φίλτρων.";var g={statistics:a,defaultTitle:"Γράφημα",countSeries:"Σειρά μέτρησης",xAxis:"Άξονας Χ",notAvailable:"Μη διαθέσιμο",timeAggregationTypes:n,noDataMessage:o};export default g;export{t as countSeries,e as defaultTitle,o as noDataMessage,i as notAvailable,a as statistics,n as timeAggregationTypes,s as xAxis}