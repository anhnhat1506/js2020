//  Reduce (tieng viet: tieu giam)
// dung de tinh toan vd: tinh toan cac gia tri trong mang va tra ve 1 gia tri duy nhat
// tu 1 mang ban dau, tinh toan dua tren cac phan tu trong mang  va tra ve 1 gia tri duy nhat
//https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//vd1 : tinh tong cac phan tu trong mang numbers
const numbers = [2, 1, 8, 9, 10, 5]

const cal_numbers = numbers.reduce((gia_tri_cong_don, gia_tri_hien_tai, index) => {
        return gia_tri_cong_don + gia_tri_hien_tai
    }, 0) //gia tri cong don ban dau la 0 , neu khong khai bao se mac dinh la 0
console.log(cal_numbers) //cal = 35

//cach 2 vi gia tri cong don ban dau la 0 nen ko can khai bao tham so thu 2
const cal_numbers_ver2 = numbers.reduce((a, b) => a + b)
console.log(cal_numbers_ver2)

const arr = [1, 2, 3]
const max = arr.reduce(function(a, b) {
    return Math.max(a, b);
})
const summ = arr.filter(function(num) {
    return num > 2;
})
console.log(max)
console.log(summ)