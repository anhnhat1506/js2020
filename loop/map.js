/* ---- 5/ map  (array)----
 dung de bien doi gia tri cua mang thanh 1 mang khac
 vi du: tu mang numbers tao ra mang khac co gia tri X2 */
const numbers = [2, 1, 8, 9, 10, 5]
const number = numbers.map(num => num * 2)
console.log(number);

//cach viet 2
const number_ver2 = numbers.map((num) => {
    return num * 2
})
console.log(number_ver2)

//cach viet 2
const number_ver3 = numbers.map((num, index) => {
    return num * 2
})
console.log(number_ver3)

//cach 4
const multiple = (num) => num * 2
const number_ver4 = numbers.map(multiple)
console.log(number_ver4)