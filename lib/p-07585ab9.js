/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See LICENSE.md for details.
 * v1.0.0-beta.532
 */
const i={mean:"Trung bình",median:"Bình quân",sum:"Tổng",discretePercentitle:"Phân vị rời rạc",minimum:"Tối thiểu",maximum:"Tối đa",variance:"Phương sai",count:"Số lượng",aggregation:"${ statistics } / ${ fieldName }",noAggregation:"Không tổng hợp"},n="Biểu đồ",t="Đếm Số chuỗi",a="Trục X",e="Không Khả dụng",s={start:"Chuyển sang điểm dữ liệu đầu tiên",end:"Chuyển sang điểm dữ liệu cuối cùng"},g="Không có dữ liệu để hiển thị do (các) trường dữ liệu trống và/hoặc do sự kết hợp giữa các bộ lọc.";var c={statistics:i,defaultTitle:"Biểu đồ",countSeries:"Đếm Số chuỗi",xAxis:"Trục X",notAvailable:"Không Khả dụng",timeAggregationTypes:s,noDataMessage:g};export default c;export{t as countSeries,n as defaultTitle,g as noDataMessage,e as notAvailable,i as statistics,s as timeAggregationTypes,a as xAxis}