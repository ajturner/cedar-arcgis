/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.517
 */
const i={mean:"Keskiarvo",median:"Mediaani",sum:"Summa",discretePercentitle:"Irrallinen prosenttipiste",minimum:"Vähimmäisarvo",maximum:"Enimmäisarvo",variance:"Varianssi",count:"Määrä",aggregation:"${ statistics }/${ fieldName }",percent:"Prosentti",noAggregation:"Ei koostetta"},a={mean:"Keskiarvo",median:"Mediaani",stdDev:"Keskihajonta",normal:"Normaalijakauma",trendline:"Trendiviiva"},e="${ guideStart }–${ guideEnd }",t={defaultSliceGroupingLabel:"Muu"},s="Ei käytettävissä";var n={statistics:i,overlays:a,guideTooltipLabel:"${ guideStart }–${ guideEnd }",pieChart:t,notAvailable:"Ei käytettävissä"};export default n;export{e as guideTooltipLabel,s as notAvailable,a as overlays,t as pieChart,i as statistics}