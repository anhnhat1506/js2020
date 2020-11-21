const data = {
    'full_name': 'Pham Anh Nhat',
    'birthday': '1992',
    'sex': 'Male'
}
/*data.ful_name => Pham Anh Nhat*/
for (let key in data) {
    console.log(`Key la: ${key}, value: ${data[key]}`)
}
//lam the nao de lay danh sach keys cua object? => sai ham Object.keys
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
console.log(Object.keys(data)) //tra ve mang => ["full_name", "birthday", "sex"] 

// tuong tu  lam the nao lay het gia tri cua object?
console.log(Object.values(data)) //tra ve mang => ["Pham Anh Nhat", "1992", "Male"] 