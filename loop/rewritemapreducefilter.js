const animals = [{
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

//xử lý biến trong mảng để tạo ra mảng
let animal_names = animals.map((animal) => {
    return animal.name;
})

//lọc giá trị phù hợp với yêu cầu đặt ra
let small_animals = animals.filter((animal, index, animals) => {
    return animal.size === "small" && animal.name === 'cat'
})

//reduce nếu có 1 mảng muốn sử dụng tất cả các giá trị đó tạo ra thử khách
let total_weight = animals.reduce((weight, animal) => {
    return weight += animal.weight
}, 1)

console.log(animal_names)
console.log(small_animals)
console.log(total_weight)