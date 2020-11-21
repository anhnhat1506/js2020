// -------  4/filter (array) ---------
// tu 1 mang ban dau, se loc ra danh sach mang khac thoa man dieu kien
// vi du: tu mang numbers lay ra mang danh sach so chan
//  so chan thi num%2==0;
const numbers = [2, 1, 8, 9, 10, 5]
const chan = numbers.filter((num, index) => {
    return num % 2 == 0
})
const chan2 = numbers.filter((num) => {
    return num % 2 == 0
})
console.log(chan, chan2)

//Cach 2 goi ham
const getSoChan = number => number % 2 == 0
const chan3 = numbers.filter(getSoChan)
console.log(chan3)